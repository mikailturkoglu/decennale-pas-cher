/**
 * Événements de mesure.
 *
 * Deux règles absolues :
 * 1. aucun événement n'est envoyé avant le consentement à la mesure d'audience ;
 * 2. aucune donnée personnelle n'est transmise — ni nom, ni téléphone, ni
 *    courriel, ni raison sociale. Un lead est identifié par sa référence
 *    pseudonymisée.
 */
export const ANALYTICS_EVENTS = [
  "page_view",
  "cta_click",
  "phone_click",
  "email_click",
  "trade_select",
  "situation_select",
  "lead_form_start",
  "lead_step_view",
  "lead_step_complete",
  "lead_form_error",
  "lead_submit",
  "lead_submit_success",
  "lead_submit_failure",
  "document_upload_start",
  "document_upload_success",
  "document_upload_failure",
  "guide_download",
  "partner_redirect",
] as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[number];

/** Filtre les noms d'événement issus du DOM : seule la nomenclature ci-dessus est émise. */
export function isAnalyticsEvent(value: string | null | undefined): value is AnalyticsEvent {
  return typeof value === "string" && (ANALYTICS_EVENTS as readonly string[]).includes(value);
}

export interface AnalyticsPayload {
  page_path?: string;
  page_type?: "home" | "landing" | "trade" | "situation" | "guide" | "hub" | "info" | "form";
  trade?: string;
  situation?: string;
  step?: number;
  source?: string;
  campaign?: string;
  /** Référence pseudonymisée du lead, jamais une donnée identifiante. */
  lead_ref?: string;
}

/** Champs interdits dans un payload analytics, contrôlés par les tests. */
export const FORBIDDEN_ANALYTICS_KEYS: readonly string[] = [
  "email",
  "phone",
  "telephone",
  "nom",
  "prenom",
  "lastName",
  "firstName",
  "companyName",
  "raisonSociale",
  "siren",
];

export function assertNoPersonalData(payload: Record<string, unknown>): void {
  const found = Object.keys(payload).filter((key) =>
    FORBIDDEN_ANALYTICS_KEYS.some((forbidden) => key.toLowerCase() === forbidden.toLowerCase()),
  );
  if (found.length > 0) {
    throw new Error(`Donnée personnelle interdite dans un événement analytics : ${found.join(", ")}`);
  }
}

interface DataLayerWindow extends Window {
  dataLayer?: Record<string, unknown>[];
}

/**
 * Envoie un événement si, et seulement si, la mesure d'audience est autorisée.
 * En l'absence de consentement, l'appel est silencieusement ignoré.
 */
export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  assertNoPersonalData(payload as Record<string, unknown>);

  const target = window as DataLayerWindow;
  if (!Array.isArray(target.dataLayer)) return;

  target.dataLayer.push({ event, ...payload });
}
