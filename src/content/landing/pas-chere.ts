import { defineLanding } from "@/content/_factories";

export const pasChere = defineLanding({
  slug: "assurance-decennale-pas-chere",
  name: "Décennale pas chère",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale pas chère : réduire sa cotisation sans se fragiliser",
    description:
      "Payer moins cher sa décennale sans perdre de garanties : leviers réels, fausses économies à éviter et méthode pour comparer deux propositions à périmètre égal.",
    primaryKeyword: "assurance décennale pas chère",
    secondaryKeywords: [
      "décennale pas cher",
      "décennale moins chère",
      "assurance décennale économique",
      "réduire cotisation décennale",
      "changer assurance décennale prix",
    ],
  },
  h1: "Assurance décennale pas chère : les leviers qui fonctionnent vraiment",
  heroTitle: "Payer moins cher sans perdre de garanties",
  heroText:
    "Une cotisation plus basse n’a de valeur que si la couverture reste adaptée à vos activités réelles. Cette page distingue les leviers efficaces des fausses économies qui coûtent cher au premier sinistre.",
  shortAnswer:
    "Réduire le prix de sa décennale passe par quatre leviers principaux : déclarer un chiffre d’affaires exact, ajuster la liste des activités à ce que vous exercez réellement, documenter votre expérience et arbitrer consciemment le niveau de franchise. À l’inverse, omettre une activité ou sous-déclarer son chiffre d’affaires ne fait pas baisser le coût réel du risque : cela le transfère sur votre entreprise.",
  summaryBullets: [
    "Un tarif plus bas s’explique souvent par un périmètre de garanties plus étroit.",
    "La franchise est le levier le plus immédiat, mais il augmente votre exposition.",
    "Un dossier bien documenté pèse autant qu’une négociation tarifaire.",
    "Toute activité non déclarée est un risque non couvert, pas une économie.",
  ],
  sections: [
    {
      id: "leviers",
      title: "Les leviers légitimes pour baisser la cotisation",
      paragraphs: [
        "Ces leviers agissent sur la perception du risque par l’assureur ou sur le partage du risque avec vous. Ils sont tous compatibles avec une couverture correcte de votre activité.",
      ],
      bullets: [
        "déclarer le chiffre d’affaires réel, sans le surestimer par prudence",
        "retirer les activités que vous n’exercez plus depuis plusieurs années",
        "fournir un relevé de sinistralité complet et sans sinistre",
        "documenter votre expérience : certificats de travail, diplômes, qualifications",
        "accepter une franchise plus élevée si votre trésorerie le permet",
        "regrouper décennale et RC professionnelle chez le même assureur lorsque c’est pertinent",
        "choisir un paiement mensuel pour éviter tout risque d’impayé",
      ],
    },
    {
      id: "fausses-economies",
      title: "Les fausses économies qui coûtent le plus cher",
      paragraphs: [
        "Chacune de ces décisions réduit la cotisation affichée, mais laisse un risque entièrement à votre charge pendant dix ans.",
      ],
      bullets: [
        "omettre une activité secondaire réellement exercée",
        "déclarer un chiffre d’affaires très inférieur à la réalité",
        "renoncer à la garantie dommages aux existants en travaillant en rénovation",
        "accepter une franchise que votre trésorerie ne peut pas absorber",
        "laisser une interruption de garantie entre deux contrats",
        "ne pas déclarer une résiliation antérieure",
      ],
      callout: {
        tone: "warning",
        title: "Conséquence directe",
        body: "Une déclaration inexacte peut entraîner une réduction d’indemnité proportionnelle, voire la nullité du contrat. L’économie réalisée est alors très inférieure au risque assumé.",
      },
    },
    {
      id: "changer",
      title: "Changer d’assureur au bon moment",
      paragraphs: [
        "Comparer et changer d’assureur est légitime, à condition de respecter les délais de résiliation du contrat en cours et de ne créer aucune interruption de garantie.",
        "La date d’effet du nouveau contrat doit se situer immédiatement après la fin du précédent. Un jour sans garantie suffit à laisser un chantier ouvert non couvert pendant dix ans.",
      ],
      bullets: [
        "vérifier la date d’échéance et le préavis de votre contrat actuel",
        "obtenir le relevé de sinistralité avant d’engager les démarches",
        "faire coïncider exactement la fin de l’ancien contrat et la prise d’effet du nouveau",
        "vérifier que les activités déclarées sont reprises à l’identique ou améliorées",
        "conserver les anciennes attestations pour les chantiers déjà ouverts",
      ],
    },
    {
      id: "metiers-moins-chers",
      title: "Pourquoi certains métiers paient moins",
      paragraphs: [
        "La cotisation reflète la sinistralité observée. Les lots de finition, dont les désordres sont plus légers et moins coûteux à réparer, sont structurellement moins chers que les lots structurels ou d’étanchéité.",
        "Un artisan multi-activités paie donc plus qu’un artisan mono-activité à chiffre d’affaires égal, non par pénalité mais parce que son exposition est plus large.",
      ],
    },
  ],
  modules: ["quote-form-teaser", "comparison-criteria", "trade-grid", "price-table"],
  faq: [
    {
      question: "Quelle est l’assurance décennale la moins chère ?",
      answer:
        "Aucun contrat n’est le moins cher pour tous les profils. Le prix dépend de votre métier, de votre chiffre d’affaires, de votre expérience et de vos antécédents. La bonne question est celle du meilleur rapport entre cotisation et garanties réellement utiles à votre activité.",
    },
    {
      question: "Puis-je réduire ma cotisation en cours de contrat ?",
      answer:
        "C’est possible si votre chiffre d’affaires baisse, si vous cessez une activité ou si vous ajustez la franchise. Toute modification doit être demandée par écrit et confirmée par un avenant.",
    },
    {
      question: "Une franchise élevée est-elle risquée ?",
      answer:
        "Elle réduit la cotisation mais met à votre charge la première partie de chaque sinistre. Le bon niveau est celui que votre trésorerie peut absorber sans mettre l’entreprise en difficulté.",
    },
    {
      question: "Faut-il changer d’assureur chaque année ?",
      answer:
        "Ce n’est pas recommandé. La continuité d’assurance est un critère positif pour les assureurs, et chaque changement crée un risque d’interruption de garantie s’il est mal préparé.",
    },
    {
      question: "Le regroupement de garanties fait-il baisser le prix ?",
      answer:
        "Parfois, notamment lorsque décennale et RC professionnelle sont souscrites ensemble. L’intérêt dépend des conditions proposées : il faut comparer garantie par garantie et pas seulement le montant global.",
    },
    {
      question: "Une entreprise sans sinistre paie-t-elle moins ?",
      answer:
        "En général oui. Un relevé de sinistralité vierge sur cinq ans est l’un des éléments les plus favorables d’un dossier, à condition de pouvoir le produire.",
    },
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/comparateur-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-auto-entrepreneur/",
    "/guides/comment-resilier-assurance-decennale/",
    "/guides/franchise-assurance-decennale/",
    "/metiers/",
  ],
  sources: ["servicePublicDecennale", "codeAssurancesL113_12", "codeAssurancesL241_1"],
  breadcrumbParents: [{ name: "Assurance décennale", path: "/assurance-decennale/" }],
});
