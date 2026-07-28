/**
 * Conversion des données de formulaire vers la structure attendue par Zod.
 *
 * Les champs du formulaire portent des noms hiérarchiques (`company.postalCode`)
 * afin qu'une seule fonction suffise à reconstruire l'objet, côté client comme
 * côté serveur. Les listes de champs numériques, booléens et multiples sont
 * explicites : aucune conversion n'est devinée à partir de la valeur.
 */

const NUMERIC_FIELDS: ReadonlySet<string> = new Set([
  "activity.subcontractedShare",
  "company.annualRevenue",
  "needs.averageProjectAmount",
]);

const BOOLEAN_FIELDS: ReadonlySet<string> = new Set([
  "contact.consentProcessing",
  "contact.consentPartners",
  "contact.consentMarketing",
]);

const ARRAY_FIELDS: ReadonlySet<string> = new Set(["activity.secondaryTrades"]);

/** Sections attendues par le schéma, créées même si aucun champ n'est rempli. */
const SECTIONS = ["activity", "company", "experience", "insurance", "needs", "contact", "meta"];

type Nested = Record<string, Record<string, unknown>>;

export function parseLeadFormData(formData: FormData): Nested {
  const output: Nested = {};
  for (const section of SECTIONS) {
    output[section] = {};
  }

  for (const field of ARRAY_FIELDS) {
    const [section, key] = field.split(".");
    if (!section || !key) continue;
    const values = formData.getAll(field).map(String).filter(Boolean);
    (output[section] as Record<string, unknown>)[key] = values;
  }

  for (const field of BOOLEAN_FIELDS) {
    const [section, key] = field.split(".");
    if (!section || !key) continue;
    (output[section] as Record<string, unknown>)[key] = formData.get(field) !== null;
  }

  for (const [name, rawValue] of formData.entries()) {
    if (ARRAY_FIELDS.has(name) || BOOLEAN_FIELDS.has(name)) continue;
    if (typeof rawValue !== "string") continue;

    const [section, key] = name.split(".");
    if (!section || !key || !output[section]) continue;

    const value = rawValue.trim();

    if (NUMERIC_FIELDS.has(name)) {
      if (value === "") continue;
      const parsed = Number(value.replace(/\s/g, "").replace(",", "."));
      (output[section] as Record<string, unknown>)[key] = Number.isNaN(parsed) ? value : parsed;
      continue;
    }

    (output[section] as Record<string, unknown>)[key] = value;
  }

  return output;
}

/**
 * Extrait la portion d'un objet correspondant à une étape.
 * Utilisé pour valider une étape sans exiger les champs des suivantes.
 */
export function sectionOf(parsed: Nested, section: string): unknown {
  return parsed[section] ?? {};
}
