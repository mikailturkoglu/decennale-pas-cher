import type { LeadInput } from "@/lib/validation";

/**
 * Jeu de données de test.
 *
 * Aucune donnée réelle : coordonnées de démonstration uniquement, sur le domaine
 * réservé `example.fr`.
 */

/** Date d'effet toujours située dans une dizaine de jours, pour un dossier réaliste. */
function inTenDays(): string {
  const date = new Date(Date.now() + 10 * 86_400_000);
  return date.toISOString().slice(0, 10);
}

export const desiredStartDate = inTenDays();

export const validLead: LeadInput = {
  activity: {
    trade: "macon",
    secondaryTrades: ["carreleur", "plaquiste"],
    worksDescription:
      "Construction de murs porteurs en blocs béton, dalles béton armé, chapes, ouvertures de baies avec pose de linteau et reprise en sous-œuvre ponctuelle.",
    generalContractor: "non",
    subcontracting: "occasionnelle",
    subcontractedShare: 15,
  },
  company: {
    companyStatus: "active",
    legalForm: "sarl",
    siren: "123456789",
    creationDate: "2019-04-01",
    headcount: "1-2",
    annualRevenue: 320000,
    postalCode: "33000",
    interventionArea: "region",
  },
  experience: {
    experienceYears: "6-10",
    formerEmployee: "oui",
    diploma: "CAP maçon",
    qualifications: "Qualibat 2111",
    canProvideEvidence: "oui",
  },
  insurance: {
    currentlyInsured: "oui",
    currentInsurer: "Assureur de démonstration",
    renewalDate: "2026-12-31",
    desiredStartDate,
    insuredYears: "3-5",
    coverageGap: "non",
    terminated: "non",
    terminationReason: undefined,
    claimsCount: "0",
    claimsDetail: undefined,
  },
  needs: {
    firstProjectDate: "2026-09-15",
    clientType: "particuliers",
    workNature: "mixte",
    averageProjectAmount: 45000,
    needPastCoverage: "non",
    needRcPro: "oui",
    otherNeeds: undefined,
  },
  contact: {
    companyName: "Maçonnerie de démonstration",
    firstName: "Test",
    lastName: "Démonstration",
    phone: "0612345678",
    email: "contact@example.fr",
    contactChannel: "telephone",
    callbackSlot: "matin",
    consentProcessing: true,
    consentPartners: true,
    consentMarketing: false,
  },
  meta: {
    sourcePage: "/assurance-decennale-macon/",
    situation: undefined,
    honeypot: "",
  },
};

/** Même dossier, sous la forme réellement envoyée par le formulaire HTML. */
export function validLeadFormData(): FormData {
  const data = new FormData();

  data.set("activity.trade", "macon");
  data.append("activity.secondaryTrades", "carreleur");
  data.append("activity.secondaryTrades", "plaquiste");
  data.set("activity.worksDescription", validLead.activity.worksDescription);
  data.set("activity.generalContractor", "non");
  data.set("activity.subcontracting", "occasionnelle");
  data.set("activity.subcontractedShare", "15");

  data.set("company.companyStatus", "active");
  data.set("company.legalForm", "sarl");
  data.set("company.siren", "123456789");
  data.set("company.creationDate", "2019-04-01");
  data.set("company.headcount", "1-2");
  data.set("company.annualRevenue", "120000");
  data.set("company.postalCode", "33000");
  data.set("company.interventionArea", "region");

  data.set("experience.experienceYears", "6-10");
  data.set("experience.formerEmployee", "oui");
  data.set("experience.diploma", "CAP maçon");
  data.set("experience.qualifications", "Qualibat 2111");
  data.set("experience.canProvideEvidence", "oui");

  data.set("insurance.currentlyInsured", "oui");
  data.set("insurance.currentInsurer", "Assureur de démonstration");
  data.set("insurance.renewalDate", "2026-12-31");
  data.set("insurance.desiredStartDate", desiredStartDate);
  data.set("insurance.insuredYears", "3-5");
  data.set("insurance.coverageGap", "non");
  data.set("insurance.terminated", "non");
  data.set("insurance.claimsCount", "0");

  data.set("needs.firstProjectDate", "2026-09-15");
  data.set("needs.clientType", "particuliers");
  data.set("needs.workNature", "mixte");
  data.set("needs.averageProjectAmount", "45000");
  data.set("needs.needPastCoverage", "non");
  data.set("needs.needRcPro", "oui");

  data.set("contact.companyName", "Maçonnerie de démonstration");
  data.set("contact.firstName", "Test");
  data.set("contact.lastName", "Démonstration");
  data.set("contact.phone", "0612345678");
  data.set("contact.email", "contact@example.fr");
  data.set("contact.contactChannel", "telephone");
  data.set("contact.callbackSlot", "matin");
  data.set("contact.consentProcessing", "on");
  data.set("contact.consentPartners", "on");
  data.set("contact.consentMarketing", "on");

  data.set("meta.sourcePage", "/assurance-decennale-macon/");

  return data;
}
