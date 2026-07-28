/**
 * Sauvegarde de l'avancement du tunnel de devis.
 *
 * Le brouillon est conservé dans le stockage de session : il disparaît à la
 * fermeture de l'onglet, sans cookie ni transmission au serveur. Cela répond au
 * besoin réel — ne pas perdre sa saisie en revenant à l'étape précédente ou en
 * rechargeant la page — sans créer une conservation de données non encadrée.
 *
 * Les champs d'identité et les consentements sont volontairement exclus : ils
 * sont saisis à la dernière étape, leur conservation n'apporterait rien et un
 * consentement restauré automatiquement ne serait pas un consentement.
 */

export const DRAFT_STORAGE_KEY = "dbtp_quote_draft";

const EXCLUDED_FIELDS: ReadonlySet<string> = new Set([
  "contact.companyName",
  "contact.firstName",
  "contact.lastName",
  "contact.phone",
  "contact.email",
  "contact.consentProcessing",
  "contact.consentPartners",
  "contact.consentMarketing",
  "company.siren",
  "meta.honeypot",
  "meta.captchaToken",
]);

export type FormSnapshot = Record<string, string[]>;

function isRestorable(element: Element): element is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement
  );
}

export function snapshotForm(form: HTMLFormElement): FormSnapshot {
  const snapshot: FormSnapshot = {};

  for (const [name, value] of new FormData(form).entries()) {
    if (typeof value !== "string") continue;
    if (EXCLUDED_FIELDS.has(name)) continue;
    (snapshot[name] ??= []).push(value);
  }

  return snapshot;
}

export function saveDraft(form: HTMLFormElement): void {
  try {
    sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(snapshotForm(form)));
  } catch {
    // Stockage indisponible (navigation privée, quota) : la saisie reste possible.
  }
}

export function readDraft(): FormSnapshot | undefined {
  try {
    const raw = sessionStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return undefined;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return undefined;
    return parsed as FormSnapshot;
  } catch {
    return undefined;
  }
}

/**
 * Réapplique un brouillon au formulaire.
 *
 * Les valeurs déjà présentes (préremplissage depuis l'URL de la page métier)
 * ont priorité : elles traduisent l'intention immédiate de l'utilisateur.
 */
export function restoreDraft(form: HTMLFormElement, snapshot: FormSnapshot): void {
  for (const [name, values] of Object.entries(snapshot)) {
    if (EXCLUDED_FIELDS.has(name)) continue;

    const elements = form.elements.namedItem(name);
    if (!elements) continue;

    const list =
      elements instanceof RadioNodeList
        ? Array.from(elements).filter(isRestorable)
        : isRestorable(elements)
          ? [elements]
          : [];

    for (const element of list) {
      if (element instanceof HTMLInputElement && element.type === "radio") {
        if (values.includes(element.value)) element.checked = true;
        continue;
      }
      if (element instanceof HTMLInputElement && element.type === "checkbox") {
        element.checked = values.includes(element.value);
        continue;
      }
      if (element instanceof HTMLSelectElement && element.multiple) {
        for (const option of Array.from(element.options)) {
          option.selected = values.includes(option.value);
        }
        continue;
      }
      if (element.value === "" && values[0] !== undefined) {
        element.value = values[0];
      }
    }
  }
}

export function clearDraft(): void {
  try {
    sessionStorage.removeItem(DRAFT_STORAGE_KEY);
  } catch {
    // Rien à faire : l'absence de brouillon n'est pas une erreur.
  }
}
