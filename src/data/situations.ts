import type { ContentPriority } from "@/types/content";

/**
 * Situations de souscription (silo 3).
 *
 * `formSituation` correspond aux valeurs acceptées par le formulaire de devis :
 * une page situation préremplit systématiquement le parcours.
 */
export type FormSituation =
  | "creation"
  | "deja-assure"
  | "jamais-assure"
  | "resilie"
  | "sinistre"
  | "autre";

export const formSituations: readonly {
  value: FormSituation;
  label: string;
}[] = [
  { value: "creation", label: "Je crée mon entreprise" },
  { value: "deja-assure", label: "Je suis déjà assuré" },
  { value: "jamais-assure", label: "Je n’ai jamais été assuré" },
  { value: "resilie", label: "Mon contrat a été résilié" },
  { value: "sinistre", label: "J’ai déclaré un ou plusieurs sinistres" },
  { value: "autre", label: "Autre situation" },
];

export interface SituationRegistryEntry {
  slug: string;
  name: string;
  /** Titre de carte, à la première personne. */
  cardTitle: string;
  cardText: string;
  formSituation: FormSituation;
  priority: ContentPriority;
  /** Situations sensibles : aucune promesse d'acceptation possible. */
  sensitive: boolean;
}

export const situationRegistry: readonly SituationRegistryEntry[] = [
  {
    slug: "decennale-creation-entreprise",
    name: "Entreprise en création",
    cardTitle: "Je crée mon entreprise",
    cardText:
      "Obtenir une attestation avant le premier chantier, avec des justificatifs d’expérience adaptés.",
    formSituation: "creation",
    priority: "P0",
    sensitive: false,
  },
  {
    slug: "decennale-auto-entrepreneur",
    name: "Auto-entrepreneur et micro-entrepreneur",
    cardTitle: "Je suis auto-entrepreneur",
    cardText:
      "Comprendre l’obligation d’assurance en micro-entreprise et préparer une demande cohérente avec votre chiffre d’affaires.",
    formSituation: "creation",
    priority: "P0",
    sensitive: false,
  },
  {
    slug: "decennale-sans-antecedent-assurance",
    name: "Sans antécédent d’assurance",
    cardTitle: "Je n’ai jamais été assuré",
    cardText:
      "Expliquer une activité exercée sans décennale et présenter un dossier recevable malgré l’absence de relevé de sinistralité.",
    formSituation: "jamais-assure",
    priority: "P0",
    sensitive: true,
  },
  {
    slug: "decennale-apres-resiliation",
    name: "Après une résiliation",
    cardTitle: "Mon contrat a été résilié",
    cardText:
      "Identifier le motif exact de résiliation et constituer un dossier étudiable par un partenaire spécialisé.",
    formSituation: "resilie",
    priority: "P0",
    sensitive: true,
  },
  {
    slug: "decennale-non-paiement",
    name: "Résiliation pour non-paiement",
    cardTitle: "J’ai été résilié pour non-paiement",
    cardText:
      "Distinguer la dette de prime, l’historique et la situation actuelle de l’entreprise.",
    formSituation: "resilie",
    priority: "P0",
    sensitive: true,
  },
  {
    slug: "decennale-sans-experience",
    name: "Sans expérience professionnelle",
    cardTitle: "Je débute dans le métier",
    cardText:
      "Valoriser une formation, une reconversion ou une expérience partielle auprès d’un assureur.",
    formSituation: "creation",
    priority: "P1",
    sensitive: true,
  },
  {
    slug: "decennale-apres-sinistre",
    name: "Après un sinistre",
    cardTitle: "J’ai eu un sinistre décennal",
    cardText:
      "Présenter la sinistralité, les mesures correctives et l’évolution de vos méthodes de travail.",
    formSituation: "sinistre",
    priority: "P1",
    sensitive: true,
  },
  {
    slug: "decennale-reprise-passe",
    name: "Reprise du passé",
    cardTitle: "Je dois couvrir des chantiers passés",
    cardText:
      "Comprendre ce que la reprise du passé peut couvrir, et ce qu’elle ne couvre jamais.",
    formSituation: "autre",
    priority: "P1",
    sensitive: true,
  },
  {
    slug: "decennale-chantier-deja-commence",
    name: "Chantier déjà commencé",
    cardTitle: "Mon chantier a déjà démarré",
    cardText:
      "Savoir ce qu’un contrat souscrit après l’ouverture du chantier peut réellement garantir.",
    formSituation: "autre",
    priority: "P1",
    sensitive: true,
  },
  {
    slug: "decennale-entreprise-etrangere-france",
    name: "Entreprise étrangère intervenant en France",
    cardTitle: "Mon entreprise est étrangère",
    cardText:
      "Répondre à l’obligation française d’assurance construction pour un chantier situé en France.",
    formSituation: "autre",
    priority: "P1",
    sensitive: false,
  },
  {
    slug: "decennale-sous-traitant",
    name: "Sous-traitance",
    cardTitle: "Je travaille en sous-traitance",
    cardText:
      "Clarifier le régime de responsabilité du sous-traitant et les garanties réellement attendues.",
    formSituation: "autre",
    priority: "P1",
    sensitive: false,
  },
];

const situationBySlug = new Map(situationRegistry.map((situation) => [situation.slug, situation]));

export function findSituationBySlug(slug: string): SituationRegistryEntry | undefined {
  return situationBySlug.get(slug);
}
