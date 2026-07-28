#!/usr/bin/env node
/**
 * Contrôle avant build.
 *
 * Deux familles de vérifications, avec des conséquences différentes :
 *
 * 1. Placeholders bloquants ([À RENSEIGNER], [À CONFIRMER], [À CHOISIR],
 *    [À VALIDER PAR LE COURTIER]). Ils sont tolérés en développement, afin de
 *    pouvoir travailler avant que le porteur de projet ait fourni les
 *    informations réglementaires, et interdits en production.
 *
 * 2. Formulations commerciales interdites par le brief (« attestation
 *    immédiate », « compare tous les assureurs », etc.). Elles échouent
 *    toujours, dans tous les environnements : aucune raison légitime ne
 *    justifie leur présence dans le dépôt.
 *
 * La liste des motifs n'est pas dupliquée ici : elle est extraite des modules
 * qui en sont la source de vérité, `src/lib/placeholders.ts` et
 * `src/data/legal-notices.ts`.
 *
 * Le contrôle porte sur deux formes : le texte littéral (« [À RENSEIGNER] »
 * écrit dans un contenu) et la référence symbolique (`PLACEHOLDER.toFill` dans
 * un module de données). La seconde est la forme normale dans ce dépôt :
 * renseigner une information consiste à remplacer cette référence par la valeur
 * réelle, ce qui fait disparaître l'alerte.
 */

import { readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_DIR = join(ROOT, "src");

/** Fichiers dont le rôle est précisément de déclarer les motifs recherchés. */
const PATTERN_SOURCES = [
  join("src", "lib", "placeholders.ts"),
  join("src", "data", "legal-notices.ts"),
];

const allowPlaceholders = /^(1|true|yes)$/i.test(process.env.ALLOW_BLOCKING_PLACEHOLDERS ?? "");

async function readSource(relativePath) {
  return readFile(join(ROOT, relativePath), "utf8");
}

/** Extrait les valeurs entre guillemets d'un tableau ou objet TypeScript. */
function extractStrings(source, marker) {
  const start = source.indexOf(marker);
  if (start === -1) return [];
  const slice = source.slice(start);
  const end = slice.indexOf("];") === -1 ? slice.indexOf("} as const;") : slice.indexOf("];");
  const body = slice.slice(0, end === -1 ? slice.length : end);
  return [...body.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
}

/** Noms des propriétés de l'objet PLACEHOLDER, pour repérer les références symboliques. */
function extractPlaceholderKeys(source) {
  const start = source.indexOf("export const PLACEHOLDER");
  if (start === -1) return [];
  const body = source.slice(start, source.indexOf("} as const;", start));
  return [...body.matchAll(/^\s{2}(\w+):/gm)].map((match) => `PLACEHOLDER.${match[1]}`);
}

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(path)));
    } else if (/\.(ts|tsx|css|md)$/.test(entry.name)) {
      files.push(path);
    }
  }

  return files;
}

function findOccurrences(content, needle, caseSensitive) {
  const haystack = caseSensitive ? content : content.toLowerCase();
  const target = caseSensitive ? needle : needle.toLowerCase();
  const lines = content.split("\n");
  const hits = [];

  if (!haystack.includes(target)) return hits;

  lines.forEach((line, index) => {
    const candidate = caseSensitive ? line : line.toLowerCase();
    if (candidate.includes(target)) hits.push(index + 1);
  });

  return hits;
}

async function main() {
  const placeholdersSource = await readSource(PATTERN_SOURCES[0]);
  const noticesSource = await readSource(PATTERN_SOURCES[1]);

  const placeholders = [
    ...extractStrings(placeholdersSource, "export const PLACEHOLDER").filter((value) =>
      value.startsWith("[À"),
    ),
    ...extractPlaceholderKeys(placeholdersSource),
  ];
  const forbiddenClaims = extractStrings(noticesSource, "export const FORBIDDEN_CLAIMS");

  if (placeholders.length === 0 || forbiddenClaims.length === 0) {
    console.error(
      "prebuild-check : impossible d’extraire les motifs depuis src/lib/placeholders.ts ou src/data/legal-notices.ts.",
    );
    process.exit(1);
  }

  const files = await collectFiles(SOURCE_DIR);
  const placeholderHits = [];
  const claimHits = [];

  for (const file of files) {
    const relativePath = relative(ROOT, file);
    if (PATTERN_SOURCES.includes(relativePath)) continue;

    const content = await readFile(file, "utf8");

    for (const placeholder of placeholders) {
      for (const line of findOccurrences(content, placeholder, true)) {
        placeholderHits.push({ file: relativePath, line, value: placeholder });
      }
    }

    for (const claim of forbiddenClaims) {
      for (const line of findOccurrences(content, claim, false)) {
        claimHits.push({ file: relativePath, line, value: claim });
      }
    }
  }

  let failed = false;

  if (claimHits.length > 0) {
    failed = true;
    console.error("\nFormulations commerciales interdites détectées :");
    for (const hit of claimHits) {
      console.error(`  ${hit.file}:${hit.line} — « ${hit.value} »`);
    }
    console.error(
      "\nCes formulations sont proscrites par le brief : aucune promesse chiffrée ou absolue ne peut être publiée sans donnée vérifiée.",
    );
  }

  if (placeholderHits.length > 0) {
    const grouped = new Map();
    for (const hit of placeholderHits) {
      grouped.set(hit.value, (grouped.get(hit.value) ?? 0) + 1);
    }
    const summary = [...grouped.entries()]
      .map(([value, count]) => `${value} × ${count}`)
      .join(", ");

    if (allowPlaceholders) {
      console.warn(`\nPlaceholders bloquants tolérés (développement) : ${summary}`);
      console.warn(
        "Retirer ALLOW_BLOCKING_PLACEHOLDERS avant tout build de production : ces informations doivent être renseignées.",
      );
    } else {
      failed = true;
      console.error(`\nPlaceholders bloquants encore présents : ${summary}`);
      const preview = placeholderHits.slice(0, 40);
      for (const hit of preview) {
        console.error(`  ${hit.file}:${hit.line} — ${hit.value}`);
      }
      if (placeholderHits.length > preview.length) {
        console.error(`  … et ${placeholderHits.length - preview.length} autres occurrences.`);
      }
      console.error(
        "\nRenseignez ces valeurs (voir la section « Décisions à fournir » du README) ou lancez un build de développement avec ALLOW_BLOCKING_PLACEHOLDERS=true.",
      );
    }
  }

  if (failed) process.exit(1);

  console.log(
    placeholderHits.length === 0
      ? "prebuild-check : aucun placeholder bloquant, aucune formulation interdite."
      : "prebuild-check : formulations conformes, placeholders tolérés en développement.",
  );
}

await main();
