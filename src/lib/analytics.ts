/**
 * Événements de mesure.
 *
 * Règle : aucune donnée personnelle n'est transmise — ni nom, ni téléphone, ni
 * courriel, ni raison sociale. Un lead est identifié par sa référence
 * pseudonymisée.
 */

/** Identifiant GA4 (`G-…`), exposé uniquement côté client. */
export const ANALYTICS_MEASUREMENT_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID?.trim() || "";

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

type GtagFn = (...args: unknown[]) => void;

interface AnalyticsWindow extends Window {
  dataLayer?: unknown[];
  gtag?: GtagFn;
}

/**
 * Envoie un événement GA4 via gtag, ou via dataLayer en secours.
 */
export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  assertNoPersonalData(payload as Record<string, unknown>);

  const target = window as AnalyticsWindow;
  if (typeof target.gtag === "function") {
    target.gtag("event", event, payload);
    return;
  }

  if (!Array.isArray(target.dataLayer)) return;
  target.dataLayer.push({ event, ...payload });
}
