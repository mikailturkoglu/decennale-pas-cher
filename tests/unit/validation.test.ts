import { describe, expect, it } from "vitest";

import { parseLeadFormData } from "@/lib/leads/form-data";
import {
  activityStepSchema,
  contactStepSchema,
  companyStepSchema,
  insuranceStepSchema,
  leadSchema,
  toFieldErrors,
} from "@/lib/validation";
import { validLead, validLeadFormData } from "./fixtures/lead";

describe("étape activité", () => {
  it("refuse un métier absent du registre", () => {
    const result = activityStepSchema.safeParse({
      ...validLead.activity,
      trade: "assurance-decennale-paris",
    });
    expect(result.success).toBe(false);
  });

  it("exige une description de travaux exploitable", () => {
    const result = activityStepSchema.safeParse({
      ...validLead.activity,
      worksDescription: "maçonnerie",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(toFieldErrors(result.error)[0]?.field).toBe("worksDescription");
    }
  });

  it("accepte une activité correctement décrite", () => {
    expect(activityStepSchema.safeParse(validLead.activity).success).toBe(true);
  });
});

describe("étape entreprise", () => {
  it("contrôle le format du code postal", () => {
    for (const postalCode of ["7501", "750011", "ABCDE"]) {
      const result = companyStepSchema.safeParse({ ...validLead.company, postalCode });
      expect(result.success, postalCode).toBe(false);
    }
  });

  it("rend le SIREN facultatif mais en vérifie le format", () => {
    expect(companyStepSchema.safeParse({ ...validLead.company, siren: "" }).success).toBe(true);
    expect(companyStepSchema.safeParse({ ...validLead.company, siren: "12345" }).success).toBe(
      false,
    );
  });
});

describe("étape assurance", () => {
  it("exige le motif lorsqu’une résiliation est déclarée", () => {
    const result = insuranceStepSchema.safeParse({
      ...validLead.insurance,
      terminated: "oui",
      terminationReason: undefined,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(toFieldErrors(result.error).map((error) => error.field)).toContain(
        "terminationReason",
      );
    }
  });

  it("accepte un motif de résiliation laissé vide quand aucune résiliation n’est déclarée", () => {
    // Une liste déroulante non renseignée envoie une chaîne vide : la traiter
    // comme une valeur invalide bloquerait l'étape pour tout dossier sain.
    const result = insuranceStepSchema.safeParse({
      ...validLead.insurance,
      terminated: "non",
      terminationReason: "",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.terminationReason).toBeUndefined();
    }
  });

  it("exige le détail lorsqu’un sinistre est déclaré", () => {
    const result = insuranceStepSchema.safeParse({
      ...validLead.insurance,
      claimsCount: "1",
      claimsDetail: "",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(toFieldErrors(result.error).map((error) => error.field)).toContain("claimsDetail");
    }
  });
});

describe("étape contact", () => {
  it("accepte les formats de téléphone français courants", () => {
    for (const phone of ["0612345678", "06 12 34 56 78", "+33612345678", "01.23.45.67.89"]) {
      const result = contactStepSchema.safeParse({ ...validLead.contact, phone });
      expect(result.success, phone).toBe(true);
    }
  });

  it("refuse un numéro invalide", () => {
    for (const phone of ["123", "0012345678", "06 12 34 56"]) {
      const result = contactStepSchema.safeParse({ ...validLead.contact, phone });
      expect(result.success, phone).toBe(false);
    }
  });

  it("bloque l’envoi sans consentement au traitement", () => {
    const result = contactStepSchema.safeParse({
      ...validLead.contact,
      consentProcessing: false,
    });
    expect(result.success).toBe(false);
  });

  it("bloque l’envoi sans accord de transmission au partenaire", () => {
    const result = contactStepSchema.safeParse({ ...validLead.contact, consentPartners: false });
    expect(result.success).toBe(false);
  });

  it("laisse la prospection commerciale facultative", () => {
    const result = contactStepSchema.safeParse({ ...validLead.contact, consentMarketing: false });
    expect(result.success).toBe(true);
  });
});

describe("demande complète", () => {
  it("valide un dossier cohérent", () => {
    const result = leadSchema.safeParse(validLead);
    expect(result.success).toBe(true);
  });

  it("rejette une requête dont le champ leurre est rempli", () => {
    const result = leadSchema.safeParse({
      ...validLead,
      meta: { ...validLead.meta, honeypot: "robot" },
    });
    expect(result.success).toBe(false);
  });
});

describe("parseLeadFormData", () => {
  const formData = validLeadFormData();

  it("reconstruit la structure attendue par le schéma", () => {
    const parsed = parseLeadFormData(formData);
    expect(parsed.activity?.trade).toBe("macon");
    expect(parsed.contact?.email).toBe("contact@example.fr");
  });

  it("convertit les champs numériques", () => {
    const parsed = parseLeadFormData(formData);
    expect(parsed.company?.annualRevenue).toBe(120000);
  });

  it("accepte les séparateurs de milliers et la virgule décimale", () => {
    const data = validLeadFormData();
    data.set("company.annualRevenue", "120 000,50");
    expect(parseLeadFormData(data).company?.annualRevenue).toBe(120000.5);
  });

  it("traite une case non cochée comme un refus explicite", () => {
    const data = validLeadFormData();
    data.delete("contact.consentMarketing");
    expect(parseLeadFormData(data).contact?.consentMarketing).toBe(false);
  });

  it("collecte les sélections multiples dans un tableau", () => {
    const parsed = parseLeadFormData(formData);
    expect(parsed.activity?.secondaryTrades).toEqual(["carreleur", "plaquiste"]);
  });

  it("produit un objet accepté par le schéma complet", () => {
    const result = leadSchema.safeParse(parseLeadFormData(formData));
    expect(result.success ? null : result.error.issues).toBeNull();
  });
});
