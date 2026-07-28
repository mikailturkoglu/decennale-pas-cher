import { defineSituation } from "@/content/_factories";

export const sousTraitant = defineSituation({
  slug: "decennale-sous-traitant",
  status: "published",
  priority: "P1",
  seo: {
    title: "Assurance décennale et sous-traitance : qui doit être assuré ?",
    description:
      "Sous-traitant du BTP : comprenez votre régime de responsabilité, les garanties réellement attendues et les documents exigés par les entreprises principales.",
    primaryKeyword: "décennale sous-traitant",
    secondaryKeywords: [
      "assurance décennale sous-traitance",
      "sous-traitant responsabilité décennale",
      "attestation décennale sous-traitant",
      "entreprise principale attestation sous-traitant",
      "RC pro sous-traitant BTP",
    ],
  },
  h1: "Assurance décennale et sous-traitance dans le BTP",
  shortAnswer:
    "Le sous-traitant n’a pas de lien contractuel avec le maître d’ouvrage : sa responsabilité est de nature contractuelle envers l’entreprise principale et se prescrit selon le droit commun, non selon le régime décennal. Il n’est donc pas soumis à la même obligation d’assurance que le locateur d’ouvrage. En pratique, presque toutes les entreprises principales exigent néanmoins une attestation couvrant les travaux sous-traités, car elles restent responsables devant le maître d’ouvrage.",
  summaryBullets: [
    "Le sous-traitant n’est pas soumis à l’obligation décennale au sens strict.",
    "L’entreprise principale reste responsable devant le maître d’ouvrage.",
    "Une attestation est exigée dans la quasi-totalité des contrats de sous-traitance.",
    "L’entreprise principale doit déclarer la part de son chiffre d’affaires sous-traitée.",
  ],
  sections: [
    {
      id: "regime-juridique",
      title: "Le régime juridique du sous-traitant",
      paragraphs: [
        "La responsabilité décennale des articles 1792 et suivants du Code civil pèse sur le constructeur lié au maître d’ouvrage par un contrat de louage d’ouvrage. Le sous-traitant, qui contracte avec l’entreprise principale et non avec le maître d’ouvrage, échappe à ce régime.",
        "Sa responsabilité envers l’entreprise principale reste néanmoins engagée sur le fondement contractuel, et l’entreprise principale peut se retourner contre lui après avoir indemnisé le maître d’ouvrage.",
      ],
    },
    {
      id: "pourquoi-assurance",
      title: "Pourquoi une assurance reste indispensable",
      paragraphs: [
        "L’absence d’obligation légale ne signifie pas absence de risque. Un sous-traitant peut être appelé en garantie plusieurs années après la réception, pour des sommes qui dépassent largement le montant de son marché.",
        "Par ailleurs, l’entreprise principale a un intérêt direct à vérifier la couverture de ses sous-traitants : si celui-ci n’est pas assuré, elle supportera seule les conséquences du désordre.",
      ],
      bullets: [
        "recours de l’entreprise principale après indemnisation du maître d’ouvrage",
        "exigence contractuelle systématique d’une attestation dans les contrats de sous-traitance",
        "impact sur la cotisation de l’entreprise principale lorsque les sous-traitants ne sont pas assurés",
        "difficulté à obtenir de nouveaux marchés sans attestation",
      ],
    },
    {
      id: "cote-entreprise-principale",
      title: "Ce que doit faire l’entreprise principale",
      paragraphs: [
        "L’entreprise qui sous-traite doit déclarer à son assureur la part de son chiffre d’affaires sous-traitée. Cette information influence directement la tarification et, parfois, les conditions de garantie.",
      ],
      bullets: [
        "déclarer le pourcentage de chiffre d’affaires sous-traité",
        "recueillir l’attestation de chaque sous-traitant avant intervention",
        "vérifier que les activités déclarées correspondent aux travaux confiés",
        "vérifier la validité de l’attestation à la date d’ouverture du chantier",
        "conserver ces attestations pendant toute la période de responsabilité",
      ],
      callout: {
        tone: "warning",
        title: "Point de vigilance",
        body: "Une attestation valide à la signature du contrat ne l’est pas nécessairement à l’ouverture du chantier. La date d’ouverture est celle qui compte pour la garantie.",
      },
    },
    {
      id: "cas-particuliers",
      title: "Cas particuliers fréquents",
      paragraphs: [
        "Certaines configurations brouillent la frontière entre sous-traitance et louage d’ouvrage et méritent une analyse spécifique.",
      ],
      bullets: [
        "sous-traitance en chaîne, avec un second niveau de sous-traitance",
        "sous-traitant intervenant directement pour le maître d’ouvrage sur un autre lot",
        "fourniture avec pose, qui peut faire basculer le régime applicable",
        "sous-traitant étranger intervenant sur un chantier français",
        "groupement d’entreprises, où chaque membre peut être locateur d’ouvrage",
      ],
    },
  ],
  documents: [
    "Kbis ou avis de situation SIRENE",
    "pièce d’identité du dirigeant",
    "contrats de sous-traitance ou bons de commande",
    "attestation d’assurance actuelle",
    "relevé de sinistralité sur cinq ans",
    "ventilation du chiffre d’affaires par donneur d’ordre et par activité",
    "part du chiffre d’affaires réalisée en sous-traitance",
    "CV, diplômes et certificats de travail du dirigeant",
    "attestations des sous-traitants si vous sous-traitez vous-même",
  ],
  pricingFactors: [
    "part du chiffre d’affaires réalisée en sous-traitance",
    "métier exercé et sinistralité associée",
    "nature des donneurs d’ordre : entreprise générale, promoteur, constructeur",
    "existence d’une garantie décennale ou d’une RC professionnelle seule",
    "expérience du dirigeant",
    "sinistralité des cinq dernières années",
    "franchise acceptée",
    "périmètre d’activités demandé",
  ],
  commonMistakes: [
    "penser qu’un sous-traitant n’a besoin d’aucune assurance",
    "confondre la responsabilité contractuelle du sous-traitant et le régime décennal",
    "ne pas déclarer la part sous-traitée à son propre assureur",
    "accepter une attestation de sous-traitant sans vérifier les activités déclarées",
    "utiliser une attestation périmée à l’ouverture du chantier",
    "sous-traiter une activité que l’on n’a pas soi-même déclarée",
  ],
  faq: [
    {
      question: "Un sous-traitant est-il obligé d’avoir une décennale ?",
      answer:
        "Il n’est pas soumis à l’obligation légale d’assurance décennale, car il n’est pas lié au maître d’ouvrage. En pratique, l’entreprise principale l’exige presque toujours, et son absence de couverture l’expose à un recours pour des montants élevés.",
    },
    {
      question: "L’entreprise principale doit-elle déclarer la sous-traitance ?",
      answer:
        "Oui. La part de chiffre d’affaires sous-traitée est une information de tarification. Son omission peut être analysée comme une déclaration inexacte du risque.",
    },
    {
      question: "Que se passe-t-il si mon sous-traitant n’est pas assuré ?",
      answer:
        "Vous restez responsable devant le maître d’ouvrage et devrez indemniser le désordre. Votre recours contre un sous-traitant non assuré n’aboutit souvent qu’à un titre inexécutable si l’entreprise est insolvable.",
    },
    {
      question: "Faut-il vérifier l’attestation à chaque chantier ?",
      answer:
        "Oui, et surtout à la date d’ouverture de chaque chantier. Une attestation annuelle peut avoir été résiliée entre-temps, ce qui laisserait le chantier sans couverture.",
    },
    {
      question: "La fourniture avec pose change-t-elle le régime ?",
      answer:
        "Elle peut le faire basculer, car la fourniture avec pose est fréquemment analysée comme un louage d’ouvrage plutôt qu’une simple vente. La qualification dépend du contrat et des prestations réellement réalisées.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-plaquiste",
    "assurance-decennale-carreleur",
    "assurance-decennale-terrassier",
    "assurance-decennale-electricien",
    "assurance-decennale-plombier",
    "assurance-decennale-peintre",
  ],
  relatedPaths: [
    "/decennale-entreprise-etrangere-france/",
    "/assurance-decennale-entreprise-btp/",
    "/devis-assurance-decennale/",
    "/guides/attestation-assurance-decennale/",
    "/guides/verifier-attestation-decennale/",
    "/guides/rc-pro-vs-decennale/",
  ],
  sources: [
    "codeCivil1792",
    "codeAssurancesL241_1",
    "servicePublicDecennale",
    "nomenclatureBtp",
  ],
});
