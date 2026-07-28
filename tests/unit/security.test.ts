import { beforeEach, describe, expect, it } from "vitest";

import { assertNoPersonalData, isAnalyticsEvent } from "@/lib/analytics";
import { CONSENT_VERSION, DEFAULT_CONSENT, parseConsent, serializeConsent } from "@/lib/consent";
import { securityHeaders } from "@/lib/security-headers";
import {
  MAX_UPLOAD_BYTES,
  checkUpload,
  createLeadReference,
  isSameOrigin,
  pseudonymize,
  rateLimit,
  rateLimitKey,
  resetRateLimits,
  safeFileName,
} from "@/lib/security";

describe("checkUpload", () => {
  it("accepte les justificatifs attendus", () => {
    expect(checkUpload({ name: "kbis.pdf", type: "application/pdf", size: 120_000 }).ok).toBe(true);
    expect(checkUpload({ name: "attestation.JPG", type: "image/jpeg", size: 50_000 }).ok).toBe(true);
  });

  it("refuse un type non autorisé", () => {
    const result = checkUpload({
      name: "script.svg",
      type: "image/svg+xml",
      size: 1_000,
    });
    expect(result.ok).toBe(false);
    expect(result.reason).toContain("type de fichier");
  });

  it("refuse une extension incohérente avec le type déclaré", () => {
    const result = checkUpload({ name: "kbis.exe", type: "application/pdf", size: 1_000 });
    expect(result.ok).toBe(false);
    expect(result.reason).toContain("extension");
  });

  it("refuse un fichier vide ou trop volumineux", () => {
    expect(checkUpload({ name: "vide.pdf", type: "application/pdf", size: 0 }).ok).toBe(false);
    expect(
      checkUpload({ name: "gros.pdf", type: "application/pdf", size: MAX_UPLOAD_BYTES + 1 }).ok,
    ).toBe(false);
  });
});

describe("safeFileName", () => {
  it("retire les chemins et les caractères spéciaux", () => {
    expect(safeFileName("../../etc/passwd")).toBe("passwd");
    expect(safeFileName("C:\\Users\\test\\relevé sinistralité.pdf")).toBe(
      "releve-sinistralite.pdf",
    );
  });

  it("ne renvoie jamais une chaîne vide", () => {
    expect(safeFileName("///")).toBe("fichier");
  });
});

describe("rateLimit", () => {
  beforeEach(resetRateLimits);

  it("autorise les envois dans la limite puis les refuse", () => {
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      expect(rateLimit("test", { limit: 3 }).allowed, `tentative ${attempt}`).toBe(true);
    }
    const blocked = rateLimit("test", { limit: 3 });
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSeconds).toBeGreaterThan(0);
  });

  it("isole les compteurs par clé", () => {
    rateLimit("a", { limit: 1 });
    expect(rateLimit("b", { limit: 1 }).allowed).toBe(true);
  });
});

describe("rateLimitKey", () => {
  it("ne conserve pas l’adresse IP en clair", () => {
    const request = new Request("https://decennalebtp.fr/api/leads", {
      headers: { "x-forwarded-for": "203.0.113.42, 70.41.3.18" },
    });
    const key = rateLimitKey(request, "leads");
    expect(key.startsWith("leads:")).toBe(true);
    expect(key).not.toContain("203.0.113.42");
  });
});

describe("isSameOrigin", () => {
  const origin = "https://decennalebtp.fr";

  it("accepte une requête émise depuis le site", () => {
    const request = new Request(`${origin}/api/leads`, { headers: { origin } });
    expect(isSameOrigin(request, origin)).toBe(true);
  });

  it("refuse une origine tierce", () => {
    const request = new Request(`${origin}/api/leads`, {
      headers: { origin: "https://exemple-malveillant.test" },
    });
    expect(isSameOrigin(request, origin)).toBe(false);
  });

  it("refuse une requête sans origine ni référent", () => {
    expect(isSameOrigin(new Request(`${origin}/api/leads`), origin)).toBe(false);
  });

  it("accepte un référent du site en l’absence d’en-tête Origin", () => {
    const request = new Request(`${origin}/api/leads`, {
      headers: { referer: `${origin}/devis-assurance-decennale/` },
    });
    expect(isSameOrigin(request, origin)).toBe(true);
  });
});

describe("références et pseudonymisation", () => {
  it("produit une référence lisible sans donnée identifiante", () => {
    const reference = createLeadReference(new Date("2026-08-01T10:00:00Z"));
    expect(reference).toMatch(/^DBTP-260801-[0-9A-F]{6}$/);
  });

  it("pseudonymise de façon stable et non réversible", () => {
    const value = "contact@example.fr";
    const hash = pseudonymize(value);
    expect(hash).toBe(pseudonymize(value));
    expect(hash).not.toContain("example");
    expect(hash).toHaveLength(16);
  });
});

describe("en-têtes de sécurité", () => {
  const byKey = new Map(securityHeaders.map((header) => [header.key, header.value]));

  it("déclarent les en-têtes attendus", () => {
    for (const key of [
      "Content-Security-Policy",
      "Strict-Transport-Security",
      "X-Content-Type-Options",
      "Referrer-Policy",
      "Permissions-Policy",
      "X-Frame-Options",
    ]) {
      expect(byKey.has(key), key).toBe(true);
    }
  });

  it("interdisent l’intégration en iframe et restreignent les sources par défaut", () => {
    expect(byKey.get("X-Frame-Options")).toBe("DENY");
    expect(byKey.get("Content-Security-Policy")).toContain("default-src 'self'");
    expect(byKey.get("Content-Security-Policy")).toContain("frame-ancestors 'none'");
  });
});

describe("consentement", () => {
  it("refuse tout traceur par défaut", () => {
    expect(DEFAULT_CONSENT).toEqual({ measurement: false, marketing: false });
  });

  it("conserve le choix, sa date et la version de la politique", () => {
    const stored = parseConsent(serializeConsent({ measurement: true, marketing: false }));
    expect(stored).toMatchObject({ measurement: true, marketing: false, version: CONSENT_VERSION });
    expect(stored?.decidedAt).not.toBe("");
  });

  it("ignore un cookie illisible ou d’une version antérieure", () => {
    expect(parseConsent("valeur-invalide")).toBeUndefined();
    expect(parseConsent(undefined)).toBeUndefined();
    expect(
      parseConsent(encodeURIComponent(JSON.stringify({ measurement: true, marketing: true, version: 0 }))),
    ).toBeUndefined();
  });
});

describe("mesure d’audience", () => {
  it("n’accepte que la nomenclature d’événements définie", () => {
    expect(isAnalyticsEvent("lead_submit_success")).toBe(true);
    expect(isAnalyticsEvent("evenement_inconnu")).toBe(false);
    expect(isAnalyticsEvent(null)).toBe(false);
  });

  it("interdit toute donnée personnelle dans un événement", () => {
    expect(() => assertNoPersonalData({ page_path: "/", trade: "macon" })).not.toThrow();
    expect(() => assertNoPersonalData({ email: "contact@example.fr" })).toThrow();
    expect(() => assertNoPersonalData({ phone: "0612345678" })).toThrow();
    expect(() => assertNoPersonalData({ companyName: "Démonstration" })).toThrow();
  });
});
