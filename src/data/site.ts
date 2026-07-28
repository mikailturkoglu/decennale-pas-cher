import { PLACEHOLDER } from "@/lib/placeholders";

/**
 * Modèle d'activité retenu au lancement.
 *
 * "mise-en-relation" (modèle A) : le site collecte une demande et la transmet à
 * un professionnel autorisé. Aucun classement de contrats, aucune
 * recommandation personnalisée, aucune souscription depuis le site.
 *
 * "distribution" (modèle B) : nécessite l'identité de l'intermédiaire, son
 * numéro ORIAS, sa catégorie d'immatriculation, la méthodologie de classement
 * et l'ensemble des informations précontractuelles.
 *
 * Le code d'affichage s'appuie sur cette valeur pour n'afficher que des
 * formulations compatibles avec le modèle réellement exercé.
 */
export type BusinessModel = "mise-en-relation" | "distribution";

export const businessModel: BusinessModel = "mise-en-relation";

export const siteConfig = {
  name: "DécennaleBTP.fr",
  domain: "decennalebtp.fr",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://decennalebtp.fr").replace(/\/$/, ""),
  locale: "fr-FR",
  language: "fr",
  baseline: "La décennale adaptée à votre métier.",
  shortDescription:
    "Comparez des solutions d’assurance responsabilité civile décennale adaptées à votre activité réelle dans le bâtiment.",
  /** Zone réellement couverte par le service. */
  serviceArea: "France",
  contact: {
    phone: PLACEHOLDER.toFill,
    /** Version tel: du numéro, à renseigner en même temps que phone. */
    phoneHref: PLACEHOLDER.toFill,
    email: PLACEHOLDER.toFill,
    callbackHours: PLACEHOLDER.toFill,
    responseTime: PLACEHOLDER.toFill,
  },
  publisher: {
    legalName: PLACEHOLDER.toFill,
    legalForm: PLACEHOLDER.toFill,
    siren: PLACEHOLDER.toFill,
    shareCapital: PLACEHOLDER.toFill,
    address: PLACEHOLDER.toFill,
    publicationDirector: PLACEHOLDER.toFill,
    host: PLACEHOLDER.toFill,
    hostAddress: PLACEHOLDER.toFill,
  },
  intermediation: {
    /** Renseigner uniquement si l'entité éditrice est immatriculée. */
    oriasNumber: PLACEHOLDER.toFill,
    oriasCategory: PLACEHOLDER.toFill,
    supervisor: "ACPR — 4 place de Budapest, CS 92459, 75436 Paris Cedex 09",
    remuneration: PLACEHOLDER.toFill,
    partners: PLACEHOLDER.toFill,
    comparedPanel: PLACEHOLDER.toFill,
    mediator: PLACEHOLDER.toFill,
    claimsProcedure: PLACEHOLDER.toFill,
  },
  privacy: {
    controller: PLACEHOLDER.toFill,
    dpo: PLACEHOLDER.toFill,
    quoteRetention: PLACEHOLDER.toFill,
    prospectionRetention: PLACEHOLDER.toFill,
    documentRetention: PLACEHOLDER.toFill,
  },
  /** Éléments de réassurance : à ne publier qu'une fois confirmés. */
  trustSignals: {
    freeService: PLACEHOLDER.toConfirm,
    noCommitment: PLACEHOLDER.toConfirm,
    specialistPartners: PLACEHOLDER.toConfirm,
  },
  social: {
    linkedin: "",
  },
} as const;

export const CANONICAL_ORIGIN = siteConfig.url;
