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
    phone: "02 52 35 27 18",
    /** Version tel: du numéro, à renseigner en même temps que phone. */
    phoneHref: "tel:0252352718",
    email: "contact@decennalebtp.fr",
    callbackHours: "Du lundi au vendredi, de 9h00 à 18h00",
    responseTime: "1 heure",
  },
  publisher: {
    legalName: "Décennale BTP",
    legalForm: "Azerty Consulting",
    siren: "840326334",
    shareCapital: "5000 ",
    address: "158 av. Victor Chatenay, 49124 Saint Barthélémy d'Anjou ",
    publicationDirector: "Mikail Turkoglu",
    host: "AWS",
    hostAddress: "France",
  },
  intermediation: {
    /** Renseigner uniquement si l'entité éditrice est immatriculée. */
    oriasNumber: "000000000",
    oriasCategory: "Courtier en assurances",
    supervisor: "ACPR — 4 place de Budapest, CS 92459, 75436 Paris Cedex 09",
    remuneration: "nulle ",
    partners: "Axa, Ergo, La Française, CNP Assurances, etc.",
    comparedPanel: "Axa, Ergo, La Française, CNP Assurances, etc.",
    mediator: "Aucun",
    claimsProcedure: "Aucune procédure de réclamation n'est mise en place.",
  },
  privacy: {
    controller: "Mikail Turkoglu",
    dpo: "Mikail Turkoglu",
    quoteRetention: "1 mois",
    prospectionRetention: "1 an",
    documentRetention: "1 mois",
  },
  /** Éléments de réassurance : à ne publier qu'une fois confirmés. */
  trustSignals: {
    freeService: "Service gratuit",
    noCommitment: "Aucune engagement n'est mis en place.",
    specialistPartners: "Axa, Ergo, La Française, CNP Assurances",
  },
  social: {
    linkedin: "",
  },
} as const;

export const CANONICAL_ORIGIN = siteConfig.url;
