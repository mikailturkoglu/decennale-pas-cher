import type { SelectOption, SelectOptionGroup } from "@/components/forms/Field";
import { formSituations } from "@/data/situations";
import { tradeCategories } from "@/data/trade-categories";
import { tradeRegistry, tradesByCategory } from "@/data/trades";

/**
 * Options du formulaire de devis.
 *
 * Source de vérité partagée entre l'interface et la validation serveur : les
 * schémas Zod dérivent de ces listes, ce qui rend impossible l'acceptation
 * d'une valeur absente de l'interface, ou l'inverse.
 */

/** Métiers regroupés par famille, dans l'ordre du registre. */
export const tradeOptionGroups: SelectOptionGroup[] = tradeCategories.map((category) => ({
  label: category.name,
  options: tradesByCategory(category.slug).map((trade) => ({
    value: trade.value,
    label: trade.name,
  })),
}));

export const tradeOptionValues: readonly string[] = tradeRegistry.map((trade) => trade.value);

export const situationOptions: SelectOption[] = formSituations.map((situation) => ({
  value: situation.value,
  label: situation.label,
}));

export const legalFormOptions: SelectOption[] = [
  { value: "micro-entreprise", label: "Micro-entreprise / auto-entrepreneur" },
  { value: "entreprise-individuelle", label: "Entreprise individuelle" },
  { value: "eurl", label: "EURL" },
  { value: "sarl", label: "SARL" },
  { value: "sasu", label: "SASU" },
  { value: "sas", label: "SAS" },
  { value: "sa", label: "SA" },
  { value: "societe-etrangere", label: "Société étrangère" },
  { value: "autre", label: "Autre forme juridique" },
];

export const companyStatusOptions: SelectOption[] = [
  { value: "en-creation", label: "En création" },
  { value: "active", label: "Déjà en activité" },
];

export const subcontractingOptions: SelectOption[] = [
  { value: "aucune", label: "Aucune sous-traitance" },
  { value: "occasionnelle", label: "Occasionnelle" },
  { value: "reguliere", label: "Régulière" },
];

export const yesNoOptions: SelectOption[] = [
  { value: "oui", label: "Oui" },
  { value: "non", label: "Non" },
];

export const interventionAreaOptions: SelectOption[] = [
  { value: "departement", label: "Mon département" },
  { value: "region", label: "Ma région" },
  { value: "france", label: "France entière" },
  { value: "france-dom", label: "France et outre-mer" },
];

export const clientTypeOptions: SelectOption[] = [
  { value: "particuliers", label: "Particuliers" },
  { value: "professionnels", label: "Professionnels et entreprises" },
  { value: "marches-publics", label: "Marchés publics" },
  { value: "promoteurs", label: "Promoteurs et bailleurs" },
  { value: "mixte", label: "Clientèle mixte" },
];

export const workNatureOptions: SelectOption[] = [
  { value: "neuf", label: "Construction neuve" },
  { value: "renovation", label: "Rénovation" },
  { value: "renovation-lourde", label: "Rénovation lourde et travaux sur existant" },
  { value: "entretien", label: "Entretien et petits travaux" },
  { value: "mixte", label: "Neuf et rénovation" },
];

export const terminationReasonOptions: SelectOption[] = [
  { value: "non-paiement", label: "Non-paiement de cotisation" },
  { value: "sinistralite", label: "Sinistralité" },
  { value: "fausse-declaration", label: "Déclaration jugée inexacte" },
  { value: "echeance-assureur", label: "Résiliation à l’échéance par l’assureur" },
  { value: "echeance-assure", label: "Résiliation à l’échéance par mes soins" },
  { value: "cessation", label: "Cessation ou changement d’activité" },
  { value: "autre", label: "Autre motif" },
];

export const contactChannelOptions: SelectOption[] = [
  { value: "telephone", label: "Téléphone" },
  { value: "email", label: "Courriel" },
  { value: "indifferent", label: "Peu importe" },
];

export const callbackSlotOptions: SelectOption[] = [
  { value: "matin", label: "Le matin" },
  { value: "apres-midi", label: "L’après-midi" },
  { value: "fin-journee", label: "En fin de journée" },
  { value: "indifferent", label: "Peu importe" },
];

export const experienceOptions: SelectOption[] = [
  { value: "0", label: "Aucune expérience dans le métier" },
  { value: "1-2", label: "1 à 2 ans" },
  { value: "3-5", label: "3 à 5 ans" },
  { value: "6-10", label: "6 à 10 ans" },
  { value: "10+", label: "Plus de 10 ans" },
];

export const insuredYearsOptions: SelectOption[] = [
  { value: "0", label: "Jamais assuré" },
  { value: "-1", label: "Moins d’un an" },
  { value: "1-2", label: "1 à 2 ans" },
  { value: "3-5", label: "3 à 5 ans" },
  { value: "5+", label: "Plus de 5 ans" },
];

export const claimsCountOptions: SelectOption[] = [
  { value: "0", label: "Aucun sinistre" },
  { value: "1", label: "1 sinistre" },
  { value: "2", label: "2 sinistres" },
  { value: "3+", label: "3 sinistres ou plus" },
  { value: "inconnu", label: "Je ne sais pas" },
];

export const headcountOptions: SelectOption[] = [
  { value: "0", label: "Dirigeant seul" },
  { value: "1-2", label: "1 à 2 salariés" },
  { value: "3-5", label: "3 à 5 salariés" },
  { value: "6-10", label: "6 à 10 salariés" },
  { value: "10+", label: "Plus de 10 salariés" },
];

/** Valeurs acceptées, dérivées des listes ci-dessus pour la validation serveur. */
export function valuesOf(options: readonly SelectOption[]): [string, ...string[]] {
  const values = options.map((option) => option.value);
  const [first, ...rest] = values;
  if (!first) throw new Error("Liste d’options vide");
  return [first, ...rest];
}
