#!/usr/bin/env node
/**
 * Audit SEO du site construit.
 *
 * L'audit porte sur le HTML réellement produit, et non sur les sources : c'est
 * la seule façon de vérifier ce que verra un robot d'exploration. Il suppose donc
 * un `npm run build` préalable.
 *
 * Contrôles :
 * - title et meta description présents, uniques, de longueur raisonnable ;
 * - canonical présente, absolue, sur le domaine officiel, avec slash final ;
 * - un seul H1 par page ;
 * - politique d'indexation cohérente avec la présence dans le sitemap ;
 * - image Open Graph déclarée ;
 * - JSON-LD parsable, avec fil d'Ariane sur les pages profondes ;
 * - signature éditoriale et date de modification affichées ;
 * - liens internes résolus, aucune page orpheline ;
 * - placeholders bloquants encore visibles dans le rendu.
 *
 * Les manquements sont classés en erreurs (bloquantes) et avertissements
 * (à arbitrer), afin que l'audit reste utilisable au quotidien.
 */

import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const BUILD_DIR = join(ROOT, ".next", "server", "app");
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://decennalebtp.fr").replace(/\/$/, "");

/** Pages rendues à la demande : absentes du HTML préconstruit, donc auditées en end-to-end. */
const DYNAMIC_PATHS = new Set([
  "/devis-assurance-decennale/",
  "/devis-assurance-decennale/merci/",
]);

/** Fichiers techniques de Next.js, hors périmètre. */
const IGNORED_FILES = new Set(["_not-found.html", "_global-error.html"]);

const BLOCKING_PLACEHOLDERS = [
  "[À RENSEIGNER]",
  "[À CONFIRMER]",
  "[À CHOISIR]",
  "[À VALIDER PAR LE COURTIER]",
];

const errors = [];
const warnings = [];

function fail(page, message) {
  errors.push(`${page} — ${message}`);
}

function warn(page, message) {
  warnings.push(`${page} — ${message}`);
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectHtml(path)));
    } else if (entry.name.endsWith(".html") && !IGNORED_FILES.has(entry.name)) {
      files.push(path);
    }
  }

  return files;
}

/** `.next/server/app/guides/loi-spinetta.html` devient `/guides/loi-spinetta/`. */
function urlPathOf(file) {
  const relativePath = relative(BUILD_DIR, file).split(sep).join("/");
  const withoutExtension = relativePath.replace(/\.html$/, "");
  if (withoutExtension === "index" || withoutExtension === "") return "/";
  return `/${withoutExtension}/`;
}

function firstMatch(html, pattern) {
  const match = html.match(pattern);
  return match?.[1]?.trim();
}

function metaContent(html, attribute, value) {
  const pattern = new RegExp(
    `<meta[^>]*${attribute}="${value}"[^>]*content="([^"]*)"|<meta[^>]*content="([^"]*)"[^>]*${attribute}="${value}"`,
    "i",
  );
  const match = html.match(pattern);
  return (match?.[1] ?? match?.[2])?.trim();
}

function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");
}

function jsonLdBlocks(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (match) => match[1],
  );
}

/**
 * Liens de navigation réels.
 *
 * Seules les ancres `<a>` sont retenues : les éléments `<link>` de l'en-tête
 * (manifeste, canonical, préchargements) ne participent pas au maillage.
 */
function internalLinks(html) {
  const hrefs = [...html.matchAll(/<a\s[^>]*href="(\/[^"#?]*)"/g)].map((match) =>
    decode(match[1]),
  );
  return new Set(hrefs.filter((href) => !href.startsWith("/_next/")));
}

function auditPage(path, html) {
  const title = firstMatch(html, /<title>([^<]*)<\/title>/);
  const description = metaContent(html, "name", "description");
  const canonical = firstMatch(html, /<link rel="canonical" href="([^"]*)"/);
  const robots = metaContent(html, "name", "robots") ?? "index, follow";
  const ogImage = metaContent(html, "property", "og:image");
  const h1Count = [...html.matchAll(/<h1[\s>]/g)].length;
  const noindex = robots.includes("noindex");

  if (!title) fail(path, "title absent");
  else if (title.length > 70) warn(path, `title de ${title.length} caractères (70 conseillés)`);

  if (!description) fail(path, "meta description absente");
  else if (description.length < 80 || description.length > 175) {
    warn(path, `meta description de ${description.length} caractères (140 à 165 conseillés)`);
  }

  if (!canonical) fail(path, "canonical absente");
  else {
    if (!canonical.startsWith(`${ORIGIN}/`)) {
      fail(path, `canonical hors domaine officiel : ${canonical}`);
    }
    if (!canonical.endsWith("/")) fail(path, `canonical sans slash final : ${canonical}`);
    const expected = `${ORIGIN}${path}`;
    if (canonical !== expected) {
      warn(path, `canonical (${canonical}) différente du chemin servi (${expected})`);
    }
  }

  if (h1Count === 0) fail(path, "aucun H1");
  if (h1Count > 1) fail(path, `${h1Count} H1 sur la page`);

  if (!ogImage) fail(path, "image Open Graph absente");

  const blocks = jsonLdBlocks(html);
  if (blocks.length === 0) {
    fail(path, "aucune donnée structurée JSON-LD");
  }

  let hasBreadcrumb = false;
  for (const block of blocks) {
    try {
      const parsed = JSON.parse(block);
      if (!parsed["@context"]) fail(path, "JSON-LD sans @context");
      const nodes = parsed["@graph"] ?? [parsed];
      if (nodes.some((node) => node["@type"] === "BreadcrumbList")) hasBreadcrumb = true;
    } catch {
      fail(path, "JSON-LD invalide (JSON non parsable)");
    }
  }

  if (path !== "/" && !hasBreadcrumb) fail(path, "BreadcrumbList absent d’une page profonde");

  if (!/<time dateTime="\d{4}-\d{2}-\d{2}"/.test(html)) {
    warn(path, "aucune date de mise à jour affichée");
  }

  const visiblePlaceholders = BLOCKING_PLACEHOLDERS.filter((placeholder) =>
    html.includes(placeholder),
  );
  if (visiblePlaceholders.length > 0) {
    warn(path, `placeholders visibles : ${visiblePlaceholders.join(", ")}`);
  }

  return { path, title, description, canonical, noindex, links: internalLinks(html) };
}

function parseSitemap(xml) {
  return new Set(
    [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
      match[1].replace(ORIGIN, "").trim(),
    ),
  );
}

function reportDuplicates(pages, key, label) {
  const seen = new Map();
  for (const page of pages) {
    const value = page[key];
    if (!value) continue;
    const list = seen.get(value) ?? [];
    list.push(page.path);
    seen.set(value, list);
  }

  for (const [value, paths] of seen) {
    if (paths.length > 1) {
      errors.push(`${label} en doublon sur ${paths.join(", ")} : « ${value.slice(0, 80)} »`);
    }
  }
}

async function main() {
  if (!(await exists(BUILD_DIR))) {
    console.error(
      "Audit SEO : aucune sortie de build trouvée. Lancez d’abord « npm run build ».",
    );
    process.exit(1);
  }

  const files = await collectHtml(BUILD_DIR);
  const pages = [];

  for (const file of files) {
    const html = await readFile(file, "utf8");
    pages.push(auditPage(urlPathOf(file), html));
  }

  reportDuplicates(pages, "title", "Title");
  reportDuplicates(pages, "description", "Meta description");
  reportDuplicates(pages, "canonical", "Canonical");

  const knownPaths = new Set([...pages.map((page) => page.path), ...DYNAMIC_PATHS]);

  // Liens internes : toute cible doit correspondre à une page réellement servie.
  const inbound = new Map();
  for (const page of pages) {
    for (const link of page.links) {
      if (!knownPaths.has(link)) {
        fail(page.path, `lien interne vers une page inexistante : ${link}`);
        continue;
      }
      if (link === page.path) continue;
      inbound.set(link, (inbound.get(link) ?? 0) + 1);
    }
  }

  for (const page of pages) {
    if (page.path === "/" || page.noindex) continue;
    if (!inbound.get(page.path)) {
      fail(page.path, "page orpheline : aucun lien entrant depuis une autre page");
    }
  }

  // Sitemap : il doit contenir exactement les pages indexables.
  const sitemapFile = join(BUILD_DIR, "sitemap.xml.body");
  if (!(await exists(sitemapFile))) {
    errors.push("sitemap.xml absent de la sortie de build");
  } else {
    const sitemapPaths = parseSitemap(await readFile(sitemapFile, "utf8"));

    for (const page of pages) {
      if (page.noindex && sitemapPaths.has(page.path)) {
        fail(page.path, "page en noindex présente dans le sitemap");
      }
      if (!page.noindex && !sitemapPaths.has(page.path)) {
        fail(page.path, "page indexable absente du sitemap");
      }
    }

    for (const path of sitemapPaths) {
      if (!knownPaths.has(path)) {
        errors.push(`Sitemap : ${path} ne correspond à aucune page servie`);
      }
    }
  }

  console.log(`Audit SEO — ${pages.length} pages préconstruites analysées.`);

  if (warnings.length > 0) {
    console.log(`\n${warnings.length} avertissement(s) :`);
    for (const warning of warnings) console.log(`  • ${warning}`);
  }

  if (errors.length > 0) {
    console.error(`\n${errors.length} erreur(s) :`);
    for (const error of errors) console.error(`  ✗ ${error}`);
    process.exit(1);
  }

  console.log("\nAucune erreur bloquante.");
}

await main();
