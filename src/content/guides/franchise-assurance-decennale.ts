import { defineGuide } from "@/content/_factories";

export const franchiseAssuranceDecennale = defineGuide({
  slug: "franchise-assurance-decennale",
  title: "La franchise en assurance décennale",
  category: "prix-et-contrats",
  status: "published",
  priority: "P1",
  seo: {
    title: "Franchise assurance décennale : montant, effet et pièges",
    description:
      "À quoi sert la franchise d’une assurance décennale, qui la paie, comment elle fait varier la cotisation et pourquoi elle n’est jamais opposable au maître d’ouvrage.",
    primaryKeyword: "franchise assurance décennale",
    secondaryKeywords: [
      "franchise décennale montant",
      "franchise garantie décennale qui paie",
      "réduire sa cotisation décennale franchise",
      "franchise par sinistre décennale",
    ],
  },
  h1: "La franchise en assurance décennale",
  summary:
    "La franchise est la part du sinistre qui reste à votre charge. En assurance décennale, elle s’applique généralement par sinistre et non par année. Elle joue un rôle important sur le montant de la cotisation : l’augmenter réduit la prime, mais transfère le risque financier sur la trésorerie de l’entreprise. Point essentiel : la franchise n’est pas opposable au maître d’ouvrage, qui est indemnisé intégralement.",
  shortAnswer:
    "La franchise décennale est le montant que l’assureur ne prend pas en charge et qu’il vous réclame après avoir indemnisé la victime. Elle s’exprime le plus souvent en euros par sinistre, parfois avec un montant majoré pour certaines activités sensibles. Une franchise élevée fait baisser la cotisation, mais chaque sinistre devient alors un décaissement immédiat pour l’entreprise. Elle ne peut jamais être opposée au maître d’ouvrage : l’assureur indemnise, puis se retourne vers vous.",
  summaryBullets: [
    "La franchise s’applique généralement par sinistre, pas par année d’assurance.",
    "Elle n’est pas opposable au maître d’ouvrage dans le cadre de l’assurance obligatoire.",
    "Augmenter la franchise réduit la prime, mais expose la trésorerie.",
    "Certaines activités sensibles peuvent supporter une franchise majorée.",
  ],
  sections: [
    {
      id: "definition",
      title: "Ce que la franchise couvre réellement",
      paragraphs: [
        "La franchise est une clause financière du contrat : elle définit la part du coût du sinistre qui reste économiquement à votre charge. Elle ne réduit ni l’étendue de la garantie, ni les activités couvertes, ni le plafond d’indemnisation.",
        "En pratique, l’assureur règle l’indemnité due à la victime, puis vous réclame le montant de la franchise. Vous ne payez donc pas le sinistre à la place de l’assureur : vous remboursez une quote-part définie à l’avance.",
      ],
      bullets: [
        "montant fixe en euros, le plus souvent par sinistre",
        "parfois exprimée en pourcentage du montant des dommages, avec un minimum et un maximum",
        "distincte du plafond de garantie, qui limite l’indemnisation maximale",
        "distincte du délai de carence, qui n’existe pas en décennale obligatoire",
      ],
    },
    {
      id: "non-opposable",
      title: "Pourquoi la franchise n’est pas opposable au maître d’ouvrage",
      paragraphs: [
        "L’assurance de responsabilité décennale est une assurance obligatoire encadrée par des clauses types. Ces clauses prévoient que la franchise ne peut pas être opposée aux bénéficiaires de l’indemnité, c’est-à-dire au maître d’ouvrage et aux propriétaires successifs.",
        "Cela signifie que la victime est indemnisée sans avoir à supporter la franchise, puis que l’assureur exerce un recours contre l’entreprise assurée pour en récupérer le montant. La franchise est donc une dette potentielle de l’entreprise, pas une réduction de la protection du client.",
      ],
      callout: {
        tone: "legal",
        title: "Ce que cela change pour vos clients",
        body: "Vous ne pouvez pas invoquer votre franchise pour refuser ou réduire l’indemnisation d’un maître d’ouvrage. Une franchise élevée est donc un choix de gestion interne, sans effet sur vos obligations contractuelles.",
      },
    },
    {
      id: "effet-sur-la-cotisation",
      title: "L’effet de la franchise sur la cotisation",
      paragraphs: [
        "La franchise fait partie des rares paramètres sur lesquels une entreprise peut agir immédiatement pour ajuster sa cotisation, aux côtés du périmètre d’activités déclarées et du mode de paiement.",
        "L’arbitrage se fait sur la capacité de trésorerie : une franchise doublée n’a de sens que si l’entreprise peut absorber ce montant sans mettre en péril son exploitation, sachant que plusieurs sinistres peuvent survenir sur des chantiers différents.",
      ],
      bullets: [
        "franchise plus élevée : cotisation réduite, risque financier accru par sinistre",
        "franchise plus basse : cotisation plus élevée, exposition limitée",
        "franchise majorée fréquente sur les activités structurelles ou les techniques sensibles",
        "franchise parfois différenciée selon la nature du dommage ou l’ouvrage concerné",
      ],
    },
    {
      id: "points-a-verifier",
      title: "Les points à vérifier dans votre contrat",
      paragraphs: [
        "Deux contrats affichant la même cotisation peuvent traiter la franchise très différemment. La comparaison utile porte sur le mode d’application, pas seulement sur le montant affiché.",
      ],
      bullets: [
        "la franchise s’applique-t-elle par sinistre, par chantier ou par année d’assurance ?",
        "existe-t-il une franchise majorée pour certaines activités déclarées ?",
        "la franchise est-elle indexée, et sur quel indice ?",
        "s’applique-t-elle aussi aux garanties annexes (RC professionnelle, dommages aux existants) ?",
        "le contrat prévoit-il une franchise spécifique en cas de non-respect d’une règle de l’art ou d’un DTU ?",
      ],
      callout: {
        tone: "info",
        title: "Comparer à périmètre égal",
        body: "Avant d’arbitrer sur la franchise, vérifiez que les deux contrats couvrent exactement les mêmes activités. Une cotisation plus basse due à un périmètre d’activités plus étroit n’est pas une économie.",
      },
    },
    {
      id: "cas-frequents",
      title: "Situations où la franchise se révèle décisive",
      bullets: [
        "sinistres sériels : un même défaut de mise en œuvre reproduit sur plusieurs logements peut donner lieu à plusieurs franchises",
        "désordre partagé entre plusieurs intervenants : la franchise reste due même si votre part de responsabilité est minoritaire",
        "entreprise en croissance : une franchise fixée au démarrage peut devenir disproportionnée ou inversement trop faible",
        "reprise du passé : vérifiez la franchise applicable aux chantiers antérieurs éventuellement repris",
      ],
    },
  ],
  checklist: [
    "relever le montant exact de la franchise sur les conditions particulières",
    "vérifier son mode d’application : par sinistre, par chantier ou par année",
    "identifier les activités supportant une franchise majorée",
    "estimer la trésorerie mobilisable en cas de sinistre",
    "comparer les franchises à périmètre d’activités identique",
    "confirmer par écrit toute modification de franchise avant la date d’échéance",
  ],
  faq: [
    {
      question: "Qui paie la franchise d’une assurance décennale ?",
      answer:
        "L’entreprise assurée. L’assureur indemnise d’abord le maître d’ouvrage, puis lui réclame le montant de la franchise. Le client final ne la supporte pas.",
    },
    {
      question: "Peut-on souscrire une décennale sans franchise ?",
      answer:
        "C’est rare sur le marché de la responsabilité décennale. La plupart des contrats prévoient une franchise par sinistre. Une franchise très basse est possible, mais elle se traduit par une cotisation plus élevée.",
    },
    {
      question: "La franchise s’applique-t-elle à chaque sinistre ?",
      answer:
        "Le plus souvent oui : elle est due sinistre par sinistre. En cas de désordres multiples résultant de causes distinctes, plusieurs franchises peuvent donc s’appliquer. Le mode d’application figure dans les conditions du contrat.",
    },
    {
      question: "Augmenter la franchise est-il un bon moyen de payer moins cher ?",
      answer:
        "C’est un levier légitime, à condition de pouvoir absorber le montant retenu. Contrairement à une réduction du périmètre d’activités déclarées, il ne crée pas de trou de garantie, mais il déplace le risque sur votre trésorerie.",
    },
    {
      question: "La franchise peut-elle être majorée après un sinistre ?",
      answer:
        "L’assureur peut proposer, à l’échéance, une modification des conditions du contrat incluant une franchise plus élevée. Cette modification doit être acceptée : elle constitue un nouvel accord, que vous pouvez comparer avec d’autres propositions.",
    },
    {
      question: "Franchise et plafond de garantie sont-ils liés ?",
      answer:
        "Non. La franchise limite l’indemnisation par le bas, le plafond la limite par le haut. Un contrat peut afficher une franchise attractive et un plafond insuffisant : les deux doivent être examinés ensemble.",
    },
  ],
  primaryCommercialPath: "/prix-assurance-decennale/",
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/assurance-decennale-pas-chere/",
    "/devis-assurance-decennale/",
    "/guides/comment-choisir-assurance-decennale/",
    "/guides/que-couvre-assurance-decennale/",
    "/guides/exclusions-assurance-decennale/",
  ],
  sources: ["servicePublicDecennale", "codeAssurances"],
  legalSources: ["codeAssurancesA243_1", "codeCivil1792"],
});
