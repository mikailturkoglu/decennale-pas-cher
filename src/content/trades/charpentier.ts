import { defineTrade, indicativeBand } from "@/content/_factories";

export const charpentier = defineTrade({
  tradeValue: "charpentier",
  name: "Charpentier",
  pluralName: "les charpentiers",
  category: "gros-oeuvre-structure",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale charpentier : prix et devis | DécennaleBTP.fr",
    description:
      "Charpente traditionnelle, fermettes, ossature bois : comparez des solutions de RC décennale adaptées aux ouvrages porteurs en bois que vous déclarez.",
    primaryKeyword: "assurance décennale charpentier",
    secondaryKeywords: [
      "prix assurance décennale charpentier",
      "tarif décennale charpente",
      "devis décennale charpentier",
      "décennale charpente bois",
      "décennale charpentier couvreur",
      "travaux couverts charpente",
    ],
  },
  h1: "Assurance décennale charpentier : comparez les offres adaptées à vos ouvrages bois",
  shortAnswer:
    "La charpente est un ouvrage de structure : un défaut de dimensionnement ou d’assemblage affecte directement la solidité du bâtiment et engage la garantie décennale pendant dix ans. Pour un charpentier, la cotisation dépend du chiffre d’affaires, de l’expérience en structure bois et des ouvrages déclarés : charpente traditionnelle, fermettes industrielles, ossature bois, terrasses ou surélévations.",
  summaryBullets: [
    "Métier de structure : les assureurs examinent l’expérience de près.",
    "L’ossature bois et la surélévation sont des activités distinctes de la charpente.",
    "Les notes de calcul et les plans d’exécution protègent l’entreprise.",
    "Le traitement du bois et la ventilation des bois conditionnent la durabilité.",
  ],
  specificity: [
    "La charpente supporte la couverture et parfois les planchers : un défaut de section, de portée ou d’assemblage se traduit par une déformation puis un risque d’effondrement.",
    "Les désordres sont progressifs. Un fléchissement s’installe sur plusieurs années, ce qui rend la datation du désordre et le rattachement à un contrat particulièrement importants.",
    "Le bois est un matériau vivant : humidité de mise en œuvre, ventilation des bois, traitement contre les insectes et champignons font partie des obligations de l’entreprise.",
    "Les charpentiers interviennent souvent sur de l’existant, notamment pour des renforcements ou des ouvertures de trémie, ce qui suppose une analyse de la structure conservée.",
    "L’ossature bois relève d’une logique différente de la charpente : elle constitue l’enveloppe porteuse du bâtiment et cumule structure, étanchéité à l’air et isolation.",
  ],
  coveredWork: [
    "charpente traditionnelle en bois massif",
    "charpente industrielle à fermettes",
    "pose de pannes, chevrons, liteaux et voliges",
    "renforcement et réparation de charpente existante",
    "planchers bois et solivages",
    "trémies et ouvertures dans un plancher existant",
    "abris, carports, appentis et petites structures",
    "traitement préventif et curatif des bois de structure",
  ],
  accessoryWork: [
    "dépose de charpente existante et évacuation",
    "pose d’écran de sous-toiture liée à la réfection de charpente",
    "petits ouvrages de zinguerie liés à la structure posée",
    "reprise ponctuelle de maçonnerie au niveau des appuis",
    "fourniture et pose des ancrages et sabots métalliques",
  ],
  separatelyDeclaredWork: [
    "couverture en tuiles, ardoises ou bac acier",
    "ossature bois et murs porteurs à ossature",
    "surélévation et extension à structure bois",
    "charpente métallique et structures mixtes",
    "terrasses bois sur plots et platelages extérieurs",
    "escaliers bois structurels selon les contrats",
    "isolation par l’extérieur en sarking",
  ],
  commonExclusions: [
    "structures dimensionnées sans note de calcul lorsqu’elle est requise",
    "activités non déclarées, notamment ossature bois et couverture",
    "bois fourni par le client ou de récupération",
    "défaut d’entretien et absence de traitement périodique après réception",
    "désordres liés à une charpente existante non reprise",
    "attaques d’insectes ou de champignons antérieures à l’intervention",
  ],
  workTable: [
    {
      work: "Charpente traditionnelle neuve",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Conserver plans, sections et justification des portées.",
    },
    {
      work: "Fermettes industrielles",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Le contreventement et l’anti-flambement sont souvent négligés.",
    },
    {
      work: "Renforcement de charpente existante",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Documenter l’état initial et le périmètre exact du renforcement.",
    },
    {
      work: "Plancher bois et solivage",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "La charge d’exploitation prévue doit être écrite au marché.",
    },
    {
      work: "Ossature bois porteuse",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité distincte cumulant structure, étanchéité à l’air et isolation.",
    },
    {
      work: "Surélévation de bâtiment",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Étude de reprise de charges de l’existant indispensable.",
    },
    {
      work: "Terrasse bois extérieure",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Un platelage non attaché à l’ouvrage peut sortir du champ décennal.",
    },
  ],
  riskScenarios: [
    {
      title: "Fléchissement d’une panne sous-dimensionnée",
      context:
        "Réfection complète d’une charpente sur une grange transformée en habitation, pannes reprises avec des sections inférieures à celles nécessaires pour la portée de neuf mètres.",
      damage:
        "Fléchissement progressif de la toiture, déformation visible de la ligne de faîtage, fissuration des plafonds et blocage des menuiseries de toit après quatre ans.",
      liability:
        "L’atteinte à la solidité de l’ouvrage est caractérisée. L’absence de justification du dimensionnement est directement imputable à l’entreprise de charpente.",
      reserve:
        "Le rôle éventuel d’un maître d’œuvre ou d’un bureau d’études est apprécié en expertise.",
    },
    {
      title: "Contreventement insuffisant d’une charpente à fermettes",
      context:
        "Charpente industrielle posée sur un pavillon neuf, dispositifs de contreventement et d’anti-flambement partiellement omis pour gagner du temps.",
      damage:
        "Déversement latéral des fermettes constaté lors d’un épisode venteux, déformation de la couverture et fissuration des cloisons supérieures au bout de deux ans.",
      liability:
        "La stabilité de la structure n’est pas assurée. Le non-respect des prescriptions du fabricant de fermettes constitue un défaut d’exécution engageant la décennale.",
      reserve:
        "La qualification et l’étendue des reprises dépendent des constats d’expertise et du contrat.",
    },
    {
      title: "Attaque de champignons après pose de bois trop humide",
      context:
        "Solivage d’un plancher intermédiaire posé avec des bois dont le taux d’humidité dépassait largement les valeurs admises, dans un local mal ventilé.",
      damage:
        "Développement de pourriture cubique sur plusieurs solives, perte de résistance mécanique, plancher devenu impropre à la circulation après trois ans.",
      liability:
        "La solidité de l’ouvrage est atteinte. Le choix de bois inadaptés et l’absence de traitement relèvent des obligations du charpentier.",
      reserve:
        "L’origine exacte de l’humidité, éventuellement liée à un défaut de ventilation d’un autre lot, est établie par expertise.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Charpentier créateur, seul",
      annualRevenue: "CA prévisionnel 80 000 €",
      experience: "Expérience 3 ans",
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Charpentier établi, charpente et couverture",
      annualRevenue: "CA 150 000 €",
      experience: "Expérience 8 ans",
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "Entreprise de charpente et ossature bois",
      annualRevenue: "CA 350 000 €",
      experience: "Expérience 12 ans",
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel",
    "expérience du dirigeant en structure bois",
    "présence de l’ossature bois, de la surélévation ou de la charpente métallique",
    "portées et complexité des ouvrages réalisés",
    "recours à un bureau d’études pour le dimensionnement",
    "part de travaux sur existant et de renforcements",
    "sinistralité des cinq dernières années",
    "part sous-traitée, notamment pour la couverture",
    "franchise retenue et plafonds de garantie",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation entre charpente, couverture et ossature bois",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant détaillant les ouvrages réalisés",
    "diplômes : CAP charpentier bois, BP, brevet de compagnon",
    "notes de calcul ou attestations de recours à un bureau d’études",
    "certificats de travail des employeurs précédents",
  ],
  startupNotes: [
    "La charpente étant un lot structurel, l’expérience personnelle est examinée plus sévèrement que sur les lots de finition.",
    "Le recours documenté à un bureau d’études pour les grandes portées rassure fortement l’assureur.",
    "Si vous prévoyez de l’ossature bois ou de la surélévation, annoncez-le dès la demande : ce sont des activités distinctes.",
    "Conservez les bons de livraison mentionnant l’humidité et le classement mécanique des bois.",
    "En micro-entreprise, la fourniture des bois représente une part importante du chiffre d’affaires prévisionnel.",
  ],
  comparisonPoints: [
    "libellé des activités : charpente, ossature bois, surélévation, couverture",
    "couverture des travaux de renforcement sur existant",
    "exigences éventuelles de l’assureur en matière de note de calcul",
    "franchise par sinistre, souvent majorée sur les lots structurels",
    "garantie effondrement et garantie avant réception",
    "garantie dommages aux existants",
    "plafonds par sinistre et par année d’assurance",
    "prise en compte de la sous-traitance de couverture",
    "traitement des dommages immatériels consécutifs",
  ],
  faq: [
    {
      question: "La charpente relève-t-elle toujours de la garantie décennale ?",
      answer:
        "Oui pour les ouvrages participant à la structure du bâtiment. Une charpente supportant la couverture ou un plancher affecte la solidité de l’ouvrage, ce qui place l’activité au cœur de l’obligation d’assurance décennale.",
    },
    {
      question: "Un charpentier peut-il réaliser la couverture avec sa décennale ?",
      answer:
        "Seulement si l’activité couverture figure sur son attestation. Beaucoup d’entreprises exercent les deux métiers, mais chacun doit être déclaré pour être garanti.",
    },
    {
      question: "Une terrasse en bois est-elle couverte par la décennale ?",
      answer:
        "Cela dépend de sa nature. Un platelage posé sur plots, dissociable et sans fonction pour le bâtiment, peut sortir du champ décennal. Une terrasse fixée à l’ouvrage et participant à sa structure y entre.",
    },
    {
      question: "Faut-il une note de calcul pour être couvert ?",
      answer:
        "Le contrat ne l’exige pas systématiquement, mais l’absence de justification du dimensionnement fragilise l’entreprise en cas de fléchissement. Pour les grandes portées, le recours à un bureau d’études est vivement conseillé.",
    },
    {
      question: "L’ossature bois est-elle incluse dans l’activité charpente ?",
      answer:
        "Non, dans la plupart des contrats. La construction à ossature bois constitue une activité distincte car elle englobe l’enveloppe porteuse, l’étanchéité à l’air et l’isolation.",
    },
    {
      question: "Que faire face à une charpente existante attaquée par les insectes ?",
      answer:
        "Il faut établir un constat écrit avant intervention et distinguer clairement ce que vous remplacez de ce que vous laissez en place. Sans ce document, l’attaque préexistante peut vous être opposée.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-couvreur",
    "assurance-decennale-macon",
    "assurance-decennale-menuisier",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/decennale-sous-traitant/",
    "/assurance-decennale-entreprise-btp/",
    "/guides/que-couvre-assurance-decennale/",
    "/guides/nomenclature-activites-btp/",
  ],
  extraSources: ["codeCivil1792_4_1"],
});
