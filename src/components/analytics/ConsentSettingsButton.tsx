"use client";

import { OPEN_CONSENT_EVENT } from "@/lib/consent";

/**
 * Rouvre le panneau de gestion des cookies depuis n'importe quelle page.
 * Le retrait du consentement doit rester accessible en permanence.
 */
export function ConsentSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT))}
    >
      Gérer les cookies
    </button>
  );
}
