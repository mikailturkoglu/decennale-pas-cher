import { defineGuide } from "@/content/_factories";

export const verifierAttestationDecennale = defineGuide({
  slug: "verifier-attestation-decennale",
  title: "Vérifier une attestation d’assurance décennale",
  category: "souscrire",
  status: "published",
  priority: "P1",
  seo: {
    title: "Vérifier une attestation décennale : méthode en 7 points",
    description:
      "Maître d’ouvrage ou entreprise principale : apprenez à vérifier une attestation d’assurance décennale, repérer les incohérences et les tentatives de falsification.",
    primaryKeyword: "vérifier une attestation décennale",
    secondaryKeywords: [
      "contrôler attestation assurance décennale",
      "fausse attestation décennale",
      "attestation décennale falsifiée",
      "vérification assurance sous-traitant",
      "attestation décennale valide",
    ],
  },
  h1: "Comment vérifier une attestation d’assurance décennale",
  summary:
    "Vérifier une attestation prend cinq minutes et évite des années de contentieux. La méthode consiste à contrôler l’identité exacte de l’entreprise, la période de validité au regard de la date d’ouverture du chantier, la liste des activités garanties, la couverture géographique, puis à interroger l’assureur en cas de doute. Les faux et les attestations périmées sont plus fréquents qu’on ne le suppose.",
  shortAnswer:
    "Sept vérifications suffisent : le nom et le SIREN exacts, la période de validité par rapport à la date d’ouverture du chantier, la liste des activités garanties comparée aux travaux prévus, la couverture géographique, la cohérence entre chiffre d’affaires et taille du chantier, la présence des coordonnées complètes de l’assureur, et une confirmation directe auprès de l’assureur en cas de doute.",
  summaryBullets: [
    "Contrôler le SIREN, pas seulement la dénomination commerciale.",
    "Comparer la validité à la date d’ouverture du chantier.",
    "Vérifier que les travaux prévus figurent dans les activités garanties.",
    "Interroger l’assureur en cas de doute : c’est gratuit et rapide.",
  ],
  sections: [
    {
      id: "methode",
      title: "La méthode en sept points",
      paragraphs: [
        "Chaque point ci-dessous correspond à une cause réelle de non-couverture constatée dans les litiges de chantier.",
      ],
      bullets: [
        "identité : dénomination et SIREN identiques à ceux du devis et du contrat",
        "validité : période couvrant la date d’ouverture du chantier",
        "activités : chaque prestation prévue figure dans la liste, avec le bon libellé",
        "territoire : le chantier est situé dans la zone couverte",
        "cohérence : le chiffre d’affaires déclaré est compatible avec la taille du marché",
        "assureur : coordonnées complètes, référence de contrat lisible",
        "confirmation : appel ou courriel à l’assureur en cas de doute",
      ],
    },
    {
      id: "signaux",
      title: "Les signaux qui doivent alerter",
      paragraphs: [
        "Les attestations falsifiées existent et circulent, notamment en sous-traitance en chaîne. Quelques indices reviennent régulièrement.",
      ],
      bullets: [
        "document scanné de mauvaise qualité, polices de caractères hétérogènes",
        "absence de référence de contrat ou de coordonnées complètes de l’assureur",
        "période de validité inhabituelle ou incohérente",
        "libellés d’activités approximatifs, éloignés de la nomenclature usuelle",
        "SIREN absent ou ne correspondant pas à l’entreprise",
        "attestation transmise par un intermédiaire, jamais par l’entreprise elle-même",
        "refus de fournir une attestation récente ou datée du mois en cours",
      ],
      callout: {
        tone: "warning",
        title: "En cas de doute",
        body: "Contactez directement l’assureur mentionné à partir de coordonnées trouvées par vous-même, et non de celles figurant sur le document à vérifier.",
      },
    },
    {
      id: "cote-entreprise-principale",
      title: "Ce que doit organiser une entreprise principale",
      paragraphs: [
        "L’entreprise qui sous-traite reste responsable devant le maître d’ouvrage. La vérification des attestations de ses sous-traitants est donc un enjeu financier direct, pas une formalité administrative.",
      ],
      bullets: [
        "exiger l’attestation avant toute intervention, sans exception",
        "vérifier à chaque nouveau chantier et non une fois par an",
        "archiver les attestations avec le dossier du chantier",
        "refuser une intervention si une activité n’est pas couverte",
        "prévoir une clause contractuelle imposant l’information en cas de résiliation",
      ],
    },
    {
      id: "cote-maitre-ouvrage",
      title: "Ce que doit vérifier un maître d’ouvrage",
      paragraphs: [
        "Un particulier qui fait construire ou rénover a un intérêt direct à cette vérification : sans assurance de l’entreprise, il devra supporter seul le coût d’un désordre décennal si l’entreprise disparaît.",
      ],
      bullets: [
        "demander l’attestation avant la signature du devis",
        "vérifier que les travaux commandés figurent bien dans les activités",
        "conserver l’attestation avec les factures et le procès-verbal de réception",
        "s’interroger sur l’intérêt d’une assurance dommages-ouvrage",
      ],
    },
  ],
  checklist: [
    "attestation datée et couvrant la date d’ouverture du chantier",
    "dénomination et SIREN vérifiés",
    "activités comparées ligne par ligne aux travaux prévus",
    "couverture géographique contrôlée",
    "coordonnées de l’assureur complètes",
    "confirmation obtenue auprès de l’assureur en cas de doute",
    "document archivé avec le dossier de chantier",
  ],
  faq: [
    {
      question: "Existe-t-il un registre public des attestations décennales ?",
      answer:
        "Non. Il n’existe pas de base publique permettant de vérifier une attestation en ligne. La seule vérification fiable consiste à interroger directement l’assureur mentionné.",
    },
    {
      question: "Une attestation de l’année dernière suffit-elle ?",
      answer:
        "Non. Le contrat peut avoir été résilié depuis. Demandez une attestation couvrant la période d’ouverture du chantier concerné.",
    },
    {
      question: "Que faire si une activité manque ?",
      answer:
        "Ne laissez pas l’entreprise intervenir sur cette activité avant qu’une attestation rectifiée soit produite. Un accord verbal n’a aucune valeur en cas de sinistre.",
    },
    {
      question: "L’assureur répond-il aux demandes de vérification ?",
      answer:
        "Il peut confirmer l’existence d’un contrat et sa période de validité. Les détails du contrat relèvent en revanche du secret professionnel et de la relation contractuelle.",
    },
  ],
  primaryCommercialPath: "/assurance-decennale-entreprise-btp/",
  relatedPaths: [
    "/assurance-decennale-entreprise-btp/",
    "/decennale-sous-traitant/",
    "/guides/attestation-assurance-decennale/",
    "/guides/nomenclature-activites-btp/",
    "/devis-assurance-decennale/",
  ],
  sources: ["servicePublicAttestation", "nomenclatureBtp", "orias"],
  legalSources: ["codeAssurancesL241_1", "codeAssurancesA243_1"],
});
