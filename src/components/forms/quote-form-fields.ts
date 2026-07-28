import type { SelectOption } from "@/components/forms/Field";
import {
  callbackSlotOptions,
  claimsCountOptions,
  clientTypeOptions,
  companyStatusOptions,
  contactChannelOptions,
  experienceOptions,
  headcountOptions,
  insuredYearsOptions,
  interventionAreaOptions,
  legalFormOptions,
  subcontractingOptions,
  terminationReasonOptions,
  workNatureOptions,
  yesNoOptions,
} from "@/data/form-options";
import { tradeRegistry } from "@/data/trades";

/**
 * Métadonnées des champs du tunnel de devis.
 *
 * Ce fichier fournit les libellés lisibles et la traduction valeur → libellé.
 * Il sert au résumé avant envoi et au récapitulatif des erreurs, afin que les
 * deux ne puissent pas afficher des intitulés différents de ceux des champs.
 */

export const QUOTE_STEPS = [
  { section: "activity", title: "Votre activité", shortTitle: "Activité" },
  { section: "company", title: "Votre entreprise", shortTitle: "Entreprise" },
  { section: "experience", title: "Votre expérience", shortTitle: "Expérience" },
  { section: "insurance", title: "Votre assurance actuelle", shortTitle: "Assurance" },
  { section: "needs", title: "Votre besoin", shortTitle: "Besoin" },
  { section: "contact", title: "Vos coordonnées", shortTitle: "Contact" },
] as const;

export type QuoteSection = (typeof QUOTE_STEPS)[number]["section"];

/** Valeurs de préremplissage issues de la page d'origine ou du mini-formulaire. */
export interface QuoteDefaults {
  trade?: string;
  situation?: string;
  postalCode?: string;
  sourcePage: string;
}

export const FIELD_LABELS: Readonly<Record<string, string>> = {
  "activity.trade": "Métier principal",
  "activity.secondaryTrades": "Activités secondaires",
  "activity.worksDescription": "Description des travaux",
  "activity.generalContractor": "Entreprise générale",
  "activity.subcontracting": "Recours à la sous-traitance",
  "activity.subcontractedShare": "Part sous-traitée",
  "company.companyStatus": "Situation de l’entreprise",
  "company.legalForm": "Forme juridique",
  "company.siren": "SIREN",
  "company.creationDate": "Date de création",
  "company.headcount": "Effectif",
  "company.annualRevenue": "Chiffre d’affaires",
  "company.postalCode": "Code postal",
  "company.interventionArea": "Zone d’intervention",
  "experience.experienceYears": "Expérience dans le métier",
  "experience.formerEmployee": "Ancien salarié du métier",
  "experience.diploma": "Diplôme ou titre",
  "experience.qualifications": "Qualifications",
  "experience.canProvideEvidence": "Justificatifs disponibles",
  "insurance.currentlyInsured": "Déjà assuré",
  "insurance.currentInsurer": "Assureur actuel",
  "insurance.renewalDate": "Date d’échéance",
  "insurance.desiredStartDate": "Date d’effet souhaitée",
  "insurance.insuredYears": "Années d’assurance",
  "insurance.coverageGap": "Interruption de garantie",
  "insurance.terminated": "Contrat résilié",
  "insurance.terminationReason": "Motif de résiliation",
  "insurance.claimsCount": "Nombre de sinistres",
  "insurance.claimsDetail": "Détail des sinistres",
  "needs.firstProjectDate": "Premier chantier prévu",
  "needs.clientType": "Type de clientèle",
  "needs.workNature": "Nature des chantiers",
  "needs.averageProjectAmount": "Montant moyen d’un chantier",
  "needs.needPastCoverage": "Reprise du passé",
  "needs.needRcPro": "Besoin d’une RC professionnelle",
  "needs.otherNeeds": "Autres besoins",
  "contact.companyName": "Raison sociale",
  "contact.firstName": "Prénom",
  "contact.lastName": "Nom",
  "contact.phone": "Téléphone",
  "contact.email": "Courriel",
  "contact.contactChannel": "Canal de contact préféré",
  "contact.callbackSlot": "Créneau de rappel",
  "contact.consentProcessing": "Traitement de la demande",
  "contact.consentPartners": "Transmission à un partenaire",
  "contact.consentMarketing": "Informations commerciales",
};

function toMap(options: readonly SelectOption[]): Map<string, string> {
  return new Map(options.map((option) => [option.value, option.label]));
}

const tradeLabels = new Map(tradeRegistry.map((trade) => [trade.value, trade.name]));

/** Traduction valeur → libellé, par champ. */
export const VALUE_LABELS: Readonly<Record<string, Map<string, string>>> = {
  "activity.trade": tradeLabels,
  "activity.secondaryTrades": tradeLabels,
  "activity.generalContractor": toMap(yesNoOptions),
  "activity.subcontracting": toMap(subcontractingOptions),
  "company.companyStatus": toMap(companyStatusOptions),
  "company.legalForm": toMap(legalFormOptions),
  "company.headcount": toMap(headcountOptions),
  "company.interventionArea": toMap(interventionAreaOptions),
  "experience.experienceYears": toMap(experienceOptions),
  "experience.formerEmployee": toMap(yesNoOptions),
  "experience.canProvideEvidence": toMap(yesNoOptions),
  "insurance.currentlyInsured": toMap(yesNoOptions),
  "insurance.insuredYears": toMap(insuredYearsOptions),
  "insurance.coverageGap": toMap(yesNoOptions),
  "insurance.terminated": toMap(yesNoOptions),
  "insurance.terminationReason": toMap(terminationReasonOptions),
  "insurance.claimsCount": toMap(claimsCountOptions),
  "needs.clientType": toMap(clientTypeOptions),
  "needs.workNature": toMap(workNatureOptions),
  "needs.needPastCoverage": toMap(yesNoOptions),
  "needs.needRcPro": toMap(yesNoOptions),
  "contact.contactChannel": toMap(contactChannelOptions),
  "contact.callbackSlot": toMap(callbackSlotOptions),
};

/** Identifiant HTML d'un champ, dérivé de son nom hiérarchique. */
export function fieldId(name: string): string {
  return name.replace(/\./g, "-");
}

/** Valeur lisible d'un champ, pour le résumé avant envoi. */
export function readableValue(name: string, value: string): string {
  return VALUE_LABELS[name]?.get(value) ?? value;
}
