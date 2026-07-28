/**
 * Règles de la checklist de dossier (outil /outils/checklist-dossier-decennale/).
 *
 * Chaque document est rattaché à une ou plusieurs conditions. L'outil
 * n'invente aucune exigence : il reprend les pièces demandées de façon
 * constante par les assureurs construction, telles que documentées dans le
 * guide « documents à fournir ».
 */
export type ChecklistCondition =
  | "always"
  | "creation"
  | "established"
  | "previously-insured"
  | "never-insured"
  | "terminated"
  | "claims"
  | "secondary-activities"
  | "subcontracting";

export interface ChecklistItem {
  id: string;
  label: string;
  /** Pourquoi la pièce est demandée : évite la liste opaque. */
  reason: string;
  conditions: ChecklistCondition[];
  /** Facultatif : la pièce accélère l'étude sans être systématiquement exigée. */
  optional?: boolean;
}

export const checklistItems: readonly ChecklistItem[] = [
  {
    id: "identite-dirigeant",
    label: "Pièce d’identité du dirigeant",
    reason: "Vérification de l’identité du souscripteur et lutte contre la fraude.",
    conditions: ["always"],
  },
  {
    id: "kbis",
    label: "Kbis ou avis de situation SIRENE",
    reason: "Confirme l’existence juridique de l’entreprise et son activité déclarée.",
    conditions: ["established"],
  },
  {
    id: "justificatif-creation",
    label: "Justificatif de création en cours ou récépissé de dépôt",
    reason: "Permet d’instruire le dossier avant l’immatriculation définitive.",
    conditions: ["creation"],
  },
  {
    id: "description-activites",
    label: "Description écrite des travaux réellement vendus",
    reason:
      "Base de la traduction en activités déclarées : c’est la pièce qui détermine l’étendue réelle de votre garantie.",
    conditions: ["always"],
  },
  {
    id: "ventilation-ca",
    label: "Ventilation du chiffre d’affaires par type de travaux",
    reason: "Permet de calibrer la cotisation activité par activité.",
    conditions: ["established", "secondary-activities"],
  },
  {
    id: "ca-previsionnel",
    label: "Chiffre d’affaires prévisionnel argumenté",
    reason:
      "Assiette de calcul de la cotisation en l’absence d’exercice clos. Un montant sous-évalué expose à une régularisation.",
    conditions: ["creation"],
  },
  {
    id: "bilans",
    label: "Deux derniers bilans ou liasses fiscales",
    reason: "Confirme le chiffre d’affaires déclaré et la santé financière de l’entreprise.",
    conditions: ["established"],
    optional: true,
  },
  {
    id: "cv-dirigeant",
    label: "CV du dirigeant détaillant les chantiers réalisés",
    reason:
      "L’expérience personnelle remplace l’ancienneté de la société pour apprécier la compétence technique.",
    conditions: ["creation", "never-insured"],
  },
  {
    id: "diplomes",
    label: "Diplômes et titres professionnels du bâtiment",
    reason: "Élément de preuve de la maîtrise technique du métier déclaré.",
    conditions: ["creation", "never-insured"],
    optional: true,
  },
  {
    id: "certificats-travail",
    label: "Certificats de travail et bulletins de salaire d’ancien salarié du métier",
    reason:
      "Justificatif d’expérience le plus efficace pour une entreprise nouvellement créée sans historique.",
    conditions: ["creation", "never-insured"],
  },
  {
    id: "qualifications",
    label: "Qualifications professionnelles (Qualibat, RGE ou équivalent)",
    reason: "Peuvent améliorer l’appréciation du risque, notamment sur les techniques sensibles.",
    conditions: ["always"],
    optional: true,
  },
  {
    id: "attestation-precedente",
    label: "Attestation d’assurance décennale précédente",
    reason: "Prouve la continuité de garantie et le libellé exact des activités déjà couvertes.",
    conditions: ["previously-insured"],
  },
  {
    id: "releve-sinistralite",
    label: "Relevé de sinistralité des cinq dernières années",
    reason:
      "Document déterminant : son absence oblige l’assureur à reconstituer le profil par d’autres moyens.",
    conditions: ["previously-insured"],
  },
  {
    id: "lettre-resiliation",
    label: "Lettre de résiliation de l’assureur précédent",
    reason:
      "Le motif exact de résiliation change entièrement l’analyse : non-paiement, sinistralité ou décision de gestion.",
    conditions: ["terminated"],
  },
  {
    id: "justificatif-regularisation",
    label: "Justificatif de régularisation de la dette de prime",
    reason: "Permet de distinguer la dette passée de la situation actuelle de l’entreprise.",
    conditions: ["terminated"],
    optional: true,
  },
  {
    id: "explication-absence-assurance",
    label: "Note expliquant la période exercée sans assurance",
    reason:
      "Une explication factuelle et datée vaut mieux qu’un silence, qui est interprété défavorablement.",
    conditions: ["never-insured"],
  },
  {
    id: "detail-sinistres",
    label: "Détail des sinistres : nature, date, coût, ouvrage concerné",
    reason: "Permet d’apprécier le caractère isolé ou répétitif du désordre.",
    conditions: ["claims"],
  },
  {
    id: "mesures-correctives",
    label: "Description des mesures correctives mises en place",
    reason:
      "Élément le plus favorable d’un dossier sinistré : il démontre l’évolution des méthodes de travail.",
    conditions: ["claims"],
  },
  {
    id: "contrats-sous-traitance",
    label: "Modèle de contrat de sous-traitance et attestations de vos sous-traitants",
    reason:
      "La part sous-traitée et l’assurance des sous-traitants influent sur la cotisation et sur la garantie.",
    conditions: ["subcontracting"],
  },
  {
    id: "devis-representatifs",
    label: "Deux ou trois devis ou marchés représentatifs",
    reason:
      "Illustrent concrètement la nature et le montant moyen de vos chantiers, mieux qu’une description générale.",
    conditions: ["always"],
    optional: true,
  },
  {
    id: "questionnaire-assureur",
    label: "Questionnaire d’assurance complété et signé",
    reason: "Support formel de vos déclarations : il engage l’entreprise, relisez-le avant signature.",
    conditions: ["always"],
  },
];

export interface ChecklistQuestion {
  id: string;
  legend: string;
  help?: string;
  options: { value: ChecklistCondition; label: string }[];
  /** Question à choix multiples : plusieurs conditions peuvent être vraies. */
  multiple?: boolean;
}

export const checklistQuestions: readonly ChecklistQuestion[] = [
  {
    id: "anciennete",
    legend: "Où en est votre entreprise ?",
    options: [
      { value: "creation", label: "En création ou immatriculée depuis moins d’un an" },
      { value: "established", label: "Déjà en activité, avec au moins un exercice" },
    ],
  },
  {
    id: "historique",
    legend: "Avez-vous déjà été assuré en décennale ?",
    options: [
      { value: "previously-insured", label: "Oui, j’ai ou j’ai eu un contrat" },
      { value: "never-insured", label: "Non, jamais" },
    ],
  },
  {
    id: "situation",
    legend: "Votre situation comporte-t-elle l’un de ces éléments ?",
    help: "Plusieurs réponses possibles. Laissez vide si aucune ne s’applique.",
    multiple: true,
    options: [
      { value: "terminated", label: "Un contrat résilié" },
      { value: "claims", label: "Un ou plusieurs sinistres déclarés" },
      { value: "secondary-activities", label: "Plusieurs activités facturées" },
      { value: "subcontracting", label: "Recours à la sous-traitance" },
    ],
  },
];

export function documentsFor(conditions: ChecklistCondition[]): ChecklistItem[] {
  const active = new Set<ChecklistCondition>([...conditions, "always"]);
  return checklistItems.filter((item) =>
    item.conditions.some((condition) => active.has(condition)),
  );
}
