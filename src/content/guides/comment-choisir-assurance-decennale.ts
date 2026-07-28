import { defineGuide } from "@/content/_factories";

export const commentChoisirAssuranceDecennale = defineGuide({
  slug: "comment-choisir-assurance-decennale",
  title: "Comment choisir son assurance décennale",
  category: "prix-et-contrats",
  status: "published",
  priority: "P1",
  seo: {
    title: "Comment choisir son assurance décennale : 10 critères concrets",
    description:
      "Activités déclarées, franchise, plafonds, garanties annexes, gestion des sinistres : les dix critères à examiner avant de choisir un contrat d’assurance décennale.",
    primaryKeyword: "comment choisir une assurance décennale",
    secondaryKeywords: [
      "choisir contrat décennale",
      "critères assurance décennale",
      "comparer garanties décennale",
      "bien lire un contrat décennale",
      "conditions particulières décennale",
    ],
  },
  h1: "Comment choisir son assurance décennale",
  summary:
    "Choisir un contrat de décennale ne consiste pas à retenir la cotisation la plus basse, mais à vérifier dix points concrets : la liste des activités, la franchise et ses majorations, les plafonds, les garanties annexes, la gestion des sinistres et les conditions de révision. Ce guide propose une grille de lecture applicable à toute proposition, ainsi que les questions à poser par écrit avant de signer.",
  shortAnswer:
    "Commencez toujours par la liste des activités : un contrat moins cher qui omet une de vos activités n’est pas moins cher, il est inutilisable sur ces chantiers. Vérifiez ensuite la franchise et ses majorations éventuelles, les plafonds par sinistre et par année, la présence des garanties dommages aux existants et avant réception, puis les modalités de gestion des sinistres et de révision de la cotisation.",
  summaryBullets: [
    "La liste des activités déclarées est le premier critère, avant le prix.",
    "Vérifiez les franchises majorées sur certains types de travaux.",
    "Les plafonds doivent être cohérents avec la taille de vos chantiers.",
    "La qualité de la gestion des sinistres se juge sur les procédures écrites.",
  ],
  sections: [
    {
      id: "grille",
      title: "La grille des dix critères",
      paragraphs: [
        "Appliquez cette grille à chaque proposition reçue. L’objectif est de comparer des offres réellement équivalentes.",
      ],
      bullets: [
        "liste exacte des activités déclarées, libellé par libellé",
        "assiette de calcul de la cotisation et conditions de régularisation",
        "montant de la franchise par sinistre et existence de franchises majorées",
        "plafonds d’indemnisation par sinistre et par année d’assurance",
        "garantie des dommages aux existants",
        "garantie des travaux avant réception",
        "extensions : RC professionnelle, dommages immatériels, protection juridique",
        "reprise du passé si votre situation l’exige",
        "modalités de paiement et conditions de révision annuelle",
        "organisation de la gestion des sinistres et interlocuteur dédié",
      ],
    },
    {
      id: "activites-avant-prix",
      title: "Pourquoi commencer par les activités",
      paragraphs: [
        "Un écart de cotisation de plusieurs centaines d’euros paraît important. Il est sans commune mesure avec le coût d’un désordre non garanti, qui peut dépasser plusieurs dizaines de milliers d’euros.",
        "Comparez donc d’abord les périmètres. Si deux propositions couvrent des activités différentes, elles ne sont pas comparables et l’écart de prix n’a aucune signification.",
      ],
    },
    {
      id: "franchise-plafonds",
      title: "Franchises et plafonds : les chiffres à vérifier",
      paragraphs: [
        "La franchise est le montant restant à votre charge par sinistre. Les contrats prévoient parfois des franchises majorées sur les postes les plus sinistrogènes, sans que cela apparaisse clairement sur une proposition commerciale.",
        "Les plafonds limitent l’indemnisation. Comparez le plafond par sinistre au coût de reprise potentiel de votre chantier le plus important, et le plafond annuel à votre chiffre d’affaires.",
      ],
    },
    {
      id: "questions-ecrites",
      title: "Les questions à poser par écrit",
      paragraphs: [
        "Poser ces questions par écrit avant de signer permet d’obtenir des réponses opposables et d’éviter les malentendus.",
      ],
      bullets: [
        "les activités que je vous ai décrites sont-elles toutes couvertes, et sous quels libellés ?",
        "existe-t-il des franchises majorées, et sur quels types de travaux ?",
        "les travaux sur existant sont-ils couverts, et dans quelles limites ?",
        "quelle est la procédure en cas de sinistre et quel est mon interlocuteur ?",
        "dans quelles conditions la cotisation peut-elle être révisée ?",
        "quelles sont les conditions et délais de résiliation ?",
      ],
      callout: {
        tone: "info",
        title: "Conservez les réponses",
        body: "Une réponse écrite de votre interlocuteur, conservée avec le contrat, est un élément utile en cas de discussion ultérieure sur l’étendue de la garantie.",
      },
    },
    {
      id: "erreurs",
      title: "Les erreurs de choix les plus coûteuses",
      paragraphs: [
        "Ces décisions paraissent économiques mais transfèrent le risque sur votre entreprise.",
      ],
      bullets: [
        "retenir une offre sans avoir lu la liste des activités",
        "accepter une franchise incompatible avec sa trésorerie",
        "renoncer aux dommages aux existants en travaillant en rénovation",
        "négliger la garantie avant réception sur des chantiers longs",
        "signer sans connaître les conditions de révision de la cotisation",
        "changer d’assureur sans vérifier la continuité de garantie",
      ],
    },
  ],
  checklist: [
    "liste des activités comparée à vos factures",
    "franchise et franchises majorées identifiées",
    "plafonds comparés à votre plus gros chantier",
    "garantie dommages aux existants vérifiée",
    "garantie avant réception vérifiée",
    "procédure sinistre connue",
    "conditions de résiliation notées",
    "réponses écrites conservées avec le contrat",
  ],
  faq: [
    {
      question: "Faut-il choisir le contrat le moins cher ?",
      answer:
        "Non, sauf si les périmètres sont identiques. Un contrat moins cher qui omet une activité ou prévoit une franchise majorée peut coûter beaucoup plus cher au premier sinistre.",
    },
    {
      question: "Comment savoir si mes plafonds sont suffisants ?",
      answer:
        "Comparez le plafond par sinistre au coût de reprise potentiel de votre plus gros chantier. Un plafond inférieur laisse une part du risque à votre charge.",
    },
    {
      question: "La garantie avant réception est-elle utile ?",
      answer:
        "Elle est particulièrement utile sur les chantiers longs ou exposés, où un dommage peut survenir avant la réception. Sa portée varie selon les contrats.",
    },
    {
      question: "Peut-on négocier une franchise ?",
      answer:
        "Les niveaux de franchise font partie des paramètres du contrat et peuvent varier d’une proposition à l’autre. Demandez systématiquement plusieurs scénarios de franchise.",
    },
  ],
  primaryCommercialPath: "/comparateur-assurance-decennale/",
  relatedPaths: [
    "/comparateur-assurance-decennale/",
    "/prix-assurance-decennale/",
    "/assurance-decennale-pas-chere/",
    "/devis-assurance-decennale/",
    "/guides/franchise-assurance-decennale/",
    "/guides/exclusions-assurance-decennale/",
  ],
  sources: ["servicePublicDecennale", "acpr"],
  legalSources: ["codeAssurancesA243_1", "codeAssurancesL241_1"],
});
