import { defineSituation } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const sansExperience = defineSituation({
  slug: "decennale-sans-experience",
  status: "published",
  priority: "P1",
  seo: {
    title: "Assurance décennale sans expérience : ce qui est examiné",
    description:
      "Reconversion ou débutant dans le bâtiment : découvrez comment valoriser une formation ou une expérience partielle pour obtenir une décennale adaptée à votre activité.",
    primaryKeyword: "décennale sans expérience",
    secondaryKeywords: [
      "assurance décennale débutant",
      "décennale reconversion bâtiment",
      "décennale sans diplôme",
      "assurance décennale première activité",
      "décennale artisan débutant",
    ],
  },
  h1: "Assurance décennale sans expérience professionnelle",
  shortAnswer:
    "L’absence d’expérience dans le métier est le principal frein à l’acceptation d’un dossier de décennale, davantage que l’absence de diplôme ou la jeunesse de l’entreprise. La démarche consiste à documenter tout ce qui peut compenser : formation, reconversion, stages, chantiers réalisés en tant que salarié même partiellement, encadrement technique interne. Le périmètre d’activités accordé au démarrage est souvent réduit, puis élargi une fois l’expérience constituée.",
  summaryBullets: [
    "L’expérience du métier compte plus que l’ancienneté de l’entreprise.",
    "Un périmètre d’activités réduit facilite l’acceptation initiale.",
    "Formation qualifiante et encadrement technique sont des arguments recevables.",
    "Les métiers structurels et l’étanchéité sont rarement accordés sans référence.",
  ],
  sections: [
    {
      id: "pourquoi-experience",
      title: "Pourquoi l’expérience pèse autant",
      paragraphs: [
        "La garantie décennale engage l’assureur pendant dix ans après la réception, sur des désordres dont le coût peut dépasser largement le montant du chantier. L’expérience du dirigeant est donc l’indicateur principal de la probabilité d’un sinistre.",
        "Un artisan qui a exercé plusieurs années comme salarié connaît les règles de l’art de son métier, les pièges des supports existants et les points de vigilance. C’est précisément ce que l’assureur cherche à vérifier.",
      ],
    },
    {
      id: "compenser",
      title: "Comment compenser un manque d’expérience",
      paragraphs: [
        "Plusieurs éléments peuvent renforcer un dossier sans expérience longue. Aucun ne garantit l’acceptation, mais leur cumul change la lecture du dossier.",
      ],
      bullets: [
        "titre professionnel ou formation qualifiante récente dans le métier",
        "stages, périodes d’apprentissage ou contrats courts dans le métier",
        "expérience acquise dans un métier voisin, à condition de l’expliquer",
        "recrutement d’un salarié expérimenté ou recours à un encadrement technique",
        "recours documenté à un bureau d’études pour les ouvrages sensibles",
        "périmètre d’activités volontairement restreint au démarrage",
      ],
    },
    {
      id: "perimetre-reduit",
      title: "Accepter un périmètre d’activités réduit",
      paragraphs: [
        "Demander d’emblée un large éventail d’activités est contre-productif lorsqu’on débute. Un contrat couvrant précisément ce que vous maîtrisez est plus solide qu’un contrat large dont plusieurs activités pourraient être contestées.",
        "L’extension du périmètre se demande ensuite, une fois quelques années d’exercice documentées et sans sinistre.",
      ],
      callout: {
        tone: "info",
        title: "Conséquence pratique",
        body: "Si un chantier sort de votre périmètre, demandez une extension avant de le signer. Un chantier réalisé hors activité déclarée n’est pas garanti.",
      },
    },
    {
      id: "metiers-difficiles",
      title: "Métiers rarement accordés sans expérience",
      paragraphs: [
        "Certaines activités supposent une pratique confirmée. Les présenter dans un dossier de débutant conduit souvent à un refus global plutôt qu’à une acceptation partielle.",
      ],
      bullets: [
        "étanchéité de toiture-terrasse et cuvelage",
        "reprise en sous-œuvre et fondations spéciales",
        "charpente et ossature bois de grande portée",
        "photovoltaïque et installations de production d’énergie",
        "piscines et ouvrages hydrauliques",
        "façade rideau et techniques non courantes",
      ],
    },
    {
      id: "reserve",
      title: "Ce que nous ne pouvons pas promettre",
      paragraphs: [NOTICES.noAcceptancePromise],
    },
  ],
  documents: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "attestation de formation ou titre professionnel",
    "certificats de stage, d’apprentissage ou de mission",
    "CV détaillé, y compris les expériences partielles",
    "contrats de travail des salariés expérimentés recrutés",
    "chiffre d’affaires prévisionnel et ventilation par activité",
    "description écrite des travaux que vous prévoyez de réaliser",
    "devis déjà signés, s’ils existent",
  ],
  pricingFactors: [
    "nombre d’années d’expérience réellement documentées",
    "existence d’une formation qualifiante dans le métier",
    "métier demandé et sinistralité associée",
    "étendue du périmètre d’activités souhaité",
    "présence d’un salarié ou d’un encadrant expérimenté",
    "chiffre d’affaires prévisionnel",
    "franchise acceptée",
    "recours envisagé à un bureau d’études",
  ],
  commonMistakes: [
    "demander toutes les activités possibles pour se laisser des options",
    "présenter une expérience approximative sans justificatif",
    "omettre une reconversion et laisser croire à une expérience plus longue",
    "sous-estimer l’intérêt d’une formation courte mais certifiante",
    "accepter un chantier technique hors périmètre pour démarrer plus vite",
    "confondre expérience de bricolage personnel et expérience professionnelle",
  ],
  faq: [
    {
      question: "Peut-on obtenir une décennale sans aucune expérience ?",
      answer:
        "C’est possible sur certains métiers de finition, avec un périmètre d’activités restreint et parfois une franchise plus élevée. Sur les lots structurels et l’étanchéité, un refus est fréquent en l’absence de référence.",
    },
    {
      question: "Un diplôme remplace-t-il l’expérience ?",
      answer:
        "Il y contribue fortement, surtout s’il est récent et directement lié au métier. Il reste toutefois moins convaincant qu’une pratique professionnelle documentée par des certificats de travail.",
    },
    {
      question: "Recruter un salarié expérimenté aide-t-il ?",
      answer:
        "Oui, à condition de pouvoir le justifier : contrat de travail, CV et qualifications du salarié. Cela démontre que la compétence technique existe dans l’entreprise.",
    },
    {
      question: "Une expérience à l’étranger est-elle prise en compte ?",
      answer:
        "Elle peut l’être si elle est documentée et compréhensible : certificats traduits, description des chantiers, techniques employées. La cohérence avec les règles de l’art françaises est examinée.",
    },
    {
      question: "Faut-il attendre d’avoir de l’expérience pour créer son entreprise ?",
      answer:
        "Ce n’est pas une obligation, mais il est prudent de vérifier votre capacité à être assuré sur les travaux que vous comptez vendre avant d’engager des frais et de signer des devis.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-peintre",
    "assurance-decennale-plaquiste",
    "assurance-decennale-carreleur",
    "assurance-decennale-menuisier",
    "assurance-decennale-plombier",
    "assurance-decennale-electricien",
  ],
  relatedPaths: [
    "/decennale-creation-entreprise/",
    "/decennale-auto-entrepreneur/",
    "/decennale-sans-antecedent-assurance/",
    "/devis-assurance-decennale/",
    "/prix-assurance-decennale/",
    "/guides/documents-devis-assurance-decennale/",
  ],
  sources: ["servicePublicDecennale", "codeAssurancesL241_1", "nomenclatureBtp"],
});
