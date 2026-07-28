import { defineGuide } from "@/content/_factories";

export const attestationAssuranceDecennale = defineGuide({
  slug: "attestation-assurance-decennale",
  title: "L’attestation d’assurance décennale",
  category: "souscrire",
  status: "published",
  priority: "P0",
  seo: {
    title: "Attestation d’assurance décennale : contenu, validité, obligations",
    description:
      "Que contient une attestation d’assurance décennale, à qui la remettre, comment lire les activités déclarées et vérifier sa période de validité : le guide complet.",
    primaryKeyword: "attestation assurance décennale",
    secondaryKeywords: [
      "attestation décennale contenu",
      "attestation décennale validité",
      "modèle attestation décennale",
      "remettre attestation décennale client",
      "mentions attestation assurance construction",
    ],
  },
  h1: "L’attestation d’assurance décennale",
  summary:
    "L’attestation est le document qui prouve l’existence d’un contrat de responsabilité décennale à une date donnée. Son contenu est normalisé : identification de l’assuré et de l’assureur, période de validité, activités garanties, couverture géographique, nature des garanties. Elle n’est pas un contrat et ne remplace pas les conditions particulières : elle sert à informer le maître d’ouvrage et les autres intervenants.",
  shortAnswer:
    "Une attestation d’assurance décennale identifie l’entreprise assurée, l’assureur, la période de validité, les activités garanties et la couverture géographique. Elle doit être remise au client avant l’ouverture du chantier et figurer, sous forme de mentions, sur les devis et factures. Le point le plus important à lire n’est pas la date : c’est la liste des activités garanties.",
  summaryBullets: [
    "Contenu normalisé : assuré, assureur, validité, activités, territoire.",
    "À remettre avant l’ouverture du chantier, pas après.",
    "Les activités garanties sont la partie la plus importante.",
    "L’attestation n’est pas un contrat et ne vaut qu’à sa date d’émission.",
  ],
  sections: [
    {
      id: "contenu",
      title: "Ce que contient une attestation",
      paragraphs: [
        "Les modèles réglementaires ont normalisé la présentation des attestations d’assurance construction afin de faciliter les vérifications. Une attestation exploitable comporte au minimum les éléments suivants.",
      ],
      bullets: [
        "identification exacte de l’entreprise assurée : dénomination, SIREN, adresse",
        "identification de l’assureur et référence du contrat",
        "période de validité de l’attestation",
        "nature des garanties : responsabilité décennale, éventuellement RC professionnelle",
        "liste des activités garanties, telles que déclarées au contrat",
        "couverture géographique",
        "mentions relatives aux montants de garantie ou renvoi aux conditions du contrat",
      ],
    },
    {
      id: "lire-activites",
      title: "Lire la liste des activités : le point essentiel",
      paragraphs: [
        "C’est la partie la plus souvent négligée, alors qu’elle détermine l’étendue réelle de la garantie. Un désordre survenant sur une activité absente de cette liste n’est pas couvert.",
        "Comparez systématiquement les libellés de l’attestation avec les prestations que vous facturez, ou que le sous-traitant que vous contrôlez va réaliser. Les libellés proviennent de la nomenclature utilisée par les assureurs, qui ne correspond ni à votre code APE ni à votre intitulé commercial.",
      ],
    },
    {
      id: "validite",
      title: "Période de validité et date d’ouverture du chantier",
      paragraphs: [
        "Une attestation est valable pour une période donnée, souvent l’année d’assurance en cours. Elle ne prouve rien pour un chantier ouvert en dehors de cette période.",
        "La bonne pratique consiste à vérifier la validité de l’attestation à la date d’ouverture de chaque chantier, et non seulement à la signature du contrat ou du devis.",
      ],
      callout: {
        tone: "warning",
        title: "Vérification à ne pas manquer",
        body: "Une attestation émise en janvier peut correspondre à un contrat résilié en mars. Seule une vérification à la date d’ouverture du chantier, voire auprès de l’assureur, apporte une réelle sécurité.",
      },
    },
    {
      id: "a-qui-remettre",
      title: "À qui remettre son attestation",
      paragraphs: [
        "L’attestation est destinée à toute personne ayant un intérêt à vérifier votre couverture. En pratique, elle est demandée par plusieurs interlocuteurs sur un même chantier.",
      ],
      bullets: [
        "le maître d’ouvrage, particulier ou professionnel",
        "l’entreprise principale lorsque vous intervenez en sous-traitance",
        "le maître d’œuvre ou l’architecte",
        "le syndic de copropriété",
        "l’assureur dommages-ouvrage du chantier",
        "le notaire, lors d’une vente dans les dix ans suivant les travaux",
      ],
    },
    {
      id: "mentions-devis",
      title: "Les mentions obligatoires sur les devis et factures",
      paragraphs: [
        "Pour les activités soumises à l’assurance construction obligatoire, les devis et factures doivent mentionner l’assurance souscrite, les coordonnées de l’assureur ou du garant et la couverture géographique du contrat.",
        "Ces mentions ne remplacent pas la remise de l’attestation, mais leur absence est en soi un manquement, souvent relevé lors des litiges.",
      ],
    },
  ],
  checklist: [
    "vérifier que le nom et le SIREN correspondent exactement à l’entreprise",
    "contrôler la période de validité au regard de la date d’ouverture du chantier",
    "lire la liste des activités et la comparer aux travaux prévus",
    "vérifier la couverture géographique",
    "conserver l’attestation avec le dossier du chantier",
    "vérifier les mentions d’assurance sur les devis et factures",
  ],
  faq: [
    {
      question: "L’attestation vaut-elle contrat ?",
      answer:
        "Non. Elle atteste de l’existence d’un contrat à une date donnée. Les garanties, franchises et exclusions figurent dans les conditions particulières et générales du contrat.",
    },
    {
      question: "Peut-on refuser un chantier faute d’attestation ?",
      answer:
        "Un maître d’ouvrage ou une entreprise principale peut légitimement conditionner l’intervention à la remise de l’attestation. C’est même une pratique de bonne gestion, car il reste responsable devant le maître d’ouvrage.",
    },
    {
      question: "Que faire si une activité manque sur mon attestation ?",
      answer:
        "Demandez immédiatement une extension écrite à votre assureur, avant de réaliser les travaux concernés. Une attestation rectifiée sera émise si l’extension est accordée.",
    },
    {
      question: "Combien de temps conserver les attestations ?",
      answer:
        "Au minimum pendant toute la durée de la responsabilité décennale des chantiers concernés, soit dix ans après leur réception. Une conservation plus longue est prudente en cas de contentieux.",
    },
    {
      question: "Une attestation étrangère est-elle acceptable ?",
      answer:
        "Seulement si elle couvre expressément la responsabilité décennale française pour des chantiers situés en France, et si elle est compréhensible, donc traduite. La page dédiée aux entreprises étrangères détaille ce point.",
    },
  ],
  primaryCommercialPath: "/attestation-decennale-rapide/",
  relatedPaths: [
    "/attestation-decennale-rapide/",
    "/devis-assurance-decennale/",
    "/guides/verifier-attestation-decennale/",
    "/guides/nomenclature-activites-btp/",
    "/decennale-sous-traitant/",
    "/decennale-entreprise-etrangere-france/",
  ],
  sources: ["servicePublicAttestation", "servicePublicDecennale", "nomenclatureBtp"],
  legalSources: ["codeAssurancesL241_1", "codeAssurancesA243_1"],
});
