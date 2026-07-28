import { defineSituation } from "@/content/_factories";

export const entrepriseEtrangereFrance = defineSituation({
  slug: "decennale-entreprise-etrangere-france",
  status: "published",
  priority: "P1",
  seo: {
    title: "Décennale pour une entreprise étrangère intervenant en France",
    description:
      "Entreprise établie hors de France intervenant sur un chantier français : comprenez l’obligation d’assurance construction et les justificatifs attendus.",
    primaryKeyword: "décennale entreprise étrangère France",
    secondaryKeywords: [
      "artisan étranger chantier France",
      "assurance construction entreprise étrangère",
      "décennale société européenne France",
      "attestation décennale entreprise étrangère",
      "obligation assurance chantier France",
    ],
  },
  h1: "Assurance décennale d’une entreprise étrangère intervenant en France",
  shortAnswer:
    "L’obligation française d’assurance de responsabilité décennale s’applique en fonction du lieu du chantier, et non du pays d’établissement de l’entreprise. Une société étrangère qui réalise des travaux de construction en France doit donc pouvoir présenter une garantie conforme au droit français. Une police souscrite dans un autre pays ne suffit généralement pas : elle doit couvrir explicitement la responsabilité décennale française telle qu’elle résulte du Code civil et du Code des assurances.",
  summaryBullets: [
    "L’obligation dépend du lieu du chantier, pas du siège de l’entreprise.",
    "Une police étrangère standard couvre rarement la décennale française.",
    "Les documents doivent être fournis en français ou traduits.",
    "Le maître d’ouvrage exige l’attestation avant l’ouverture du chantier.",
  ],
  sections: [
    {
      id: "principe",
      title: "Le principe : c’est le chantier qui compte",
      paragraphs: [
        "L’assurance construction obligatoire est attachée aux travaux réalisés en France. Une entreprise établie dans un autre État membre de l’Union européenne ou hors Union européenne y est soumise dès lors qu’elle réalise des travaux de bâtiment relevant de la responsabilité décennale sur le territoire français.",
        "Cette obligation s’ajoute aux formalités de détachement de salariés et aux autres obligations déclaratives, qui relèvent d’un cadre distinct de l’assurance.",
      ],
    },
    {
      id: "police-etrangere",
      title: "Une police étrangère suffit-elle ?",
      paragraphs: [
        "Rarement. La responsabilité décennale française est une construction juridique propre au droit français : durée de dix ans à compter de la réception, présomption de responsabilité, régime d’ordre public. Une police de responsabilité civile professionnelle souscrite à l’étranger ne reprend généralement pas ce régime.",
        "Il faut donc vérifier document par document si la garantie couvre expressément la responsabilité décennale des articles 1792 et suivants du Code civil, pour des chantiers situés en France, avec des plafonds et une durée conformes.",
      ],
      bullets: [
        "mention explicite de la responsabilité décennale française",
        "chantiers situés en France dans le périmètre géographique",
        "durée de garantie de dix ans après réception",
        "activités déclarées correspondant aux travaux réellement réalisés",
        "attestation lisible et compréhensible pour le maître d’ouvrage français",
      ],
    },
    {
      id: "documents-attendus",
      title: "Documents généralement demandés",
      paragraphs: [
        "Les pièces attendues sont proches de celles d’une entreprise française, avec une exigence supplémentaire de traduction et d’équivalence.",
      ],
      bullets: [
        "extrait du registre du commerce du pays d’établissement",
        "numéro de TVA intracommunautaire le cas échéant",
        "pièce d’identité du dirigeant",
        "attestation d’assurance existante, traduite en français",
        "justificatifs d’expérience et de qualification, traduits",
        "description des travaux prévus en France et localisation des chantiers",
        "chiffre d’affaires réalisé en France ou prévisionnel",
      ],
    },
    {
      id: "cas-frequents",
      title: "Situations les plus fréquentes",
      paragraphs: [
        "Ces demandes proviennent le plus souvent d’entreprises frontalières ou de sociétés intervenant ponctuellement en France pour un client identifié.",
      ],
      bullets: [
        "entreprise frontalière travaillant régulièrement des deux côtés de la frontière",
        "société étrangère sous-traitante d’une entreprise générale française",
        "entreprise étrangère répondant à un marché ponctuel en France",
        "groupe implantant une filiale française et devant assurer la transition",
      ],
    },
  ],
  documents: [
    "extrait du registre du commerce du pays d’établissement",
    "statuts de la société",
    "pièce d’identité du dirigeant",
    "attestation d’assurance actuelle traduite en français",
    "relevé de sinistralité traduit, s’il existe",
    "justificatifs d’expérience et diplômes traduits",
    "description des chantiers prévus en France",
    "chiffre d’affaires prévisionnel réalisé en France",
    "numéro de TVA intracommunautaire le cas échéant",
    "coordonnées d’un représentant en France si vous en avez un",
  ],
  pricingFactors: [
    "part du chiffre d’affaires réalisé en France",
    "métier exercé et sinistralité associée",
    "expérience documentée de l’entreprise et du dirigeant",
    "existence d’une garantie antérieure conforme au droit français",
    "nature des chantiers : particuliers, entreprise générale, marchés publics",
    "zone géographique d’intervention en France",
    "franchise acceptée",
    "capacité à fournir des documents traduits et complets",
  ],
  commonMistakes: [
    "présenter une police du pays d’origine sans vérifier la couverture de la décennale française",
    "supposer que la libre prestation de services dispense de l’assurance obligatoire française",
    "remettre au client une attestation non traduite et incompréhensible",
    "confondre les formalités de détachement de salariés et l’obligation d’assurance",
    "démarrer le chantier avant d’avoir obtenu une attestation conforme",
    "omettre les activités réellement exercées sur le chantier français",
  ],
  faq: [
    {
      question: "Une entreprise européenne doit-elle une décennale française ?",
      answer:
        "Oui pour ses travaux réalisés en France relevant de l’assurance construction obligatoire. La liberté de prestation de services ne dispense pas du respect des règles françaises d’assurance obligatoire.",
    },
    {
      question: "Mon assurance dans mon pays peut-elle être acceptée ?",
      answer:
        "Seulement si elle couvre expressément la responsabilité décennale française pour des chantiers situés en France, avec une durée et des activités adaptées. Cela suppose une vérification document par document.",
    },
    {
      question: "L’attestation doit-elle être en français ?",
      answer:
        "En pratique oui. Le maître d’ouvrage et les autres intervenants doivent pouvoir la comprendre. Une traduction est presque toujours nécessaire pour être acceptée sur un chantier français.",
    },
    {
      question: "Un sous-traitant étranger est-il concerné ?",
      answer:
        "Le sous-traitant n’est pas soumis à la même obligation que le locateur d’ouvrage, mais l’entreprise principale exige presque systématiquement une garantie équivalente. La page consacrée à la sous-traitance détaille ce point.",
    },
    {
      question: "Faut-il une structure française pour être assuré ?",
      answer:
        "Pas nécessairement, mais l’existence d’un établissement ou d’un représentant en France facilite l’étude du dossier et la gestion des éventuels sinistres.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-macon",
    "assurance-decennale-plaquiste",
    "assurance-decennale-carreleur",
    "assurance-decennale-couvreur",
    "assurance-decennale-electricien",
    "assurance-decennale-plombier",
  ],
  relatedPaths: [
    "/decennale-sous-traitant/",
    "/decennale-sans-antecedent-assurance/",
    "/devis-assurance-decennale/",
    "/guides/attestation-assurance-decennale/",
    "/guides/assurance-decennale-obligatoire/",
  ],
  sources: [
    "codeAssurancesL241_1",
    "codeCivil1792",
    "servicePublicDecennale",
    "acpr",
  ],
});
