import { describe, expect, it } from "vitest";

import { isHighRiskTrade, scoreLead } from "@/lib/lead-scoring";
import { validLead } from "./fixtures/lead";

/**
 * Le scoring n'est qu'un outil d'orientation interne : ces tests vérifient
 * surtout qu'aucune sortie ne vaut « refusé » et que les situations sensibles
 * partent bien vers une file d'étude humaine.
 */

describe("scoreLead", () => {
  it("borne le score entre 0 et 100", () => {
    const score = scoreLead(validLead);
    expect(score.value).toBeGreaterThanOrEqual(0);
    expect(score.value).toBeLessThanOrEqual(100);
  });

  it("ne produit jamais de refus automatique", () => {
    const routes = [
      scoreLead(validLead).route,
      scoreLead({
        ...validLead,
        insurance: { ...validLead.insurance, claimsCount: "3+", claimsDetail: "Trois sinistres." },
      }).route,
      scoreLead({
        ...validLead,
        experience: { ...validLead.experience, experienceYears: "0", canProvideEvidence: "non" },
        activity: { ...validLead.activity, worksDescription: "Travaux divers." },
      }).route,
    ];

    for (const route of routes) {
      expect(route).not.toBe("refuse");
      expect([
        "standard",
        "creation",
        "resiliation",
        "high_risk_trade",
        "manual_review",
        "incomplete",
      ]).toContain(route);
    }
  });

  it("oriente une entreprise en création vers la file « creation »", () => {
    const score = scoreLead({
      ...validLead,
      activity: { ...validLead.activity, trade: "peintre" },
      company: { ...validLead.company, companyStatus: "en-creation" },
      insurance: { ...validLead.insurance, currentlyInsured: "non", insuredYears: "0" },
    });
    expect(score.route).toBe("creation");
  });

  it("oriente une résiliation vers la file « resiliation »", () => {
    const score = scoreLead({
      ...validLead,
      activity: { ...validLead.activity, trade: "peintre" },
      insurance: {
        ...validLead.insurance,
        terminated: "oui",
        terminationReason: "non-paiement",
      },
    });
    expect(score.route).toBe("resiliation");
    expect(score.reviewSignals).toContain("résiliation pour non-paiement");
  });

  it("oriente un métier à forte sinistralité vers la file dédiée", () => {
    const score = scoreLead({
      ...validLead,
      activity: { ...validLead.activity, trade: "etancheur", secondaryTrades: [] },
    });
    expect(score.route).toBe("high_risk_trade");
  });

  it("oriente une reprise du passé vers une étude humaine", () => {
    const score = scoreLead({
      ...validLead,
      needs: { ...validLead.needs, needPastCoverage: "oui" },
    });
    expect(score.route).toBe("manual_review");
  });

  it("signale un dossier inexploitable sans le refuser", () => {
    const score = scoreLead({
      ...validLead,
      activity: { ...validLead.activity, worksDescription: "Un peu de tout." },
      experience: { ...validLead.experience, canProvideEvidence: "non" },
    });
    expect(score.route).toBe("incomplete");
  });

  it("valorise expérience, justificatifs et continuité d’assurance", () => {
    const score = scoreLead(validLead);
    expect(score.positiveSignals).toContain("expérience supérieure à trois ans dans le métier");
    expect(score.positiveSignals).toContain("justificatifs d’expérience disponibles");
    expect(score.positiveSignals).toContain("continuité d’assurance");
  });

  it("pénalise une interruption de garantie", () => {
    const insured = scoreLead(validLead);
    const gap = scoreLead({
      ...validLead,
      insurance: { ...validLead.insurance, coverageGap: "oui" },
    });
    expect(gap.value).toBeLessThan(insured.value);
    expect(gap.reviewSignals).toContain("interruption de garantie");
  });

  it("n’expose aucune donnée personnelle dans les signaux", () => {
    const score = scoreLead(validLead);
    const text = [...score.positiveSignals, ...score.reviewSignals].join(" ");
    for (const personal of [
      validLead.contact.email,
      validLead.contact.phone,
      validLead.contact.lastName,
      validLead.contact.companyName,
    ]) {
      expect(text).not.toContain(personal);
    }
  });
});

describe("isHighRiskTrade", () => {
  it("classe les métiers d’étanchéité et de structure comme nécessitant une étude", () => {
    expect(isHighRiskTrade("etancheur")).toBe(true);
    expect(isHighRiskTrade("fondations-speciales")).toBe(true);
  });

  it("ne classe pas les lots de finition à ce niveau", () => {
    expect(isHighRiskTrade("peintre")).toBe(false);
    expect(isHighRiskTrade("parqueteur")).toBe(false);
  });
});
