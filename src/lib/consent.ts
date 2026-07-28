import {
  CONSENT_COOKIE_MAX_AGE_DAYS,
  CONSENT_COOKIE_NAME,
  type ConsentCategory,
} from "@/data/cookies";

/**
 * Gestion du consentement aux traceurs.
 *
 * Principe : aucun script soumis à consentement n'est chargé avant un choix
 * explicite. L'état est conservé dans un cookie de première partie, lisible
 * côté client uniquement, et sert de preuve du choix exprimé.
 */
export type ConsentState = Record<Exclude<ConsentCategory, "essential">, boolean>;

export const DEFAULT_CONSENT: ConsentState = {
  measurement: false,
  marketing: false,
};

export const OPEN_CONSENT_EVENT = "dbtp:open-consent";
export const CONSENT_CHANGE_EVENT = "dbtp:consent-change";

interface StoredConsent extends ConsentState {
  /** Horodatage du choix, conservé comme preuve. */
  decidedAt: string;
  /** Version de la politique appliquée au moment du choix. */
  version: number;
}

export const CONSENT_VERSION = 1;

export function serializeConsent(state: ConsentState): string {
  const payload: StoredConsent = {
    ...state,
    decidedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  return encodeURIComponent(JSON.stringify(payload));
}

export function parseConsent(raw: string | undefined): StoredConsent | undefined {
  if (!raw) return undefined;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as Partial<StoredConsent>;
    if (typeof parsed.measurement !== "boolean" || typeof parsed.marketing !== "boolean") {
      return undefined;
    }
    if (parsed.version !== CONSENT_VERSION) return undefined;
    return {
      measurement: parsed.measurement,
      marketing: parsed.marketing,
      decidedAt: parsed.decidedAt ?? "",
      version: CONSENT_VERSION,
    };
  } catch {
    return undefined;
  }
}

export function readConsentCookie(): StoredConsent | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE_NAME}=`));
  return parseConsent(match?.slice(CONSENT_COOKIE_NAME.length + 1));
}

export function writeConsentCookie(state: ConsentState): void {
  if (typeof document === "undefined") return;
  const maxAge = CONSENT_COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
  document.cookie = `${CONSENT_COOKIE_NAME}=${serializeConsent(state)}; Max-Age=${maxAge}; Path=/; SameSite=Lax${
    window.location.protocol === "https:" ? "; Secure" : ""
  }`;
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_CHANGE_EVENT, { detail: state }));
}
