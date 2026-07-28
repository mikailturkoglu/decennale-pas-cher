import { defineTrade, indicativeBand } from "@/content/_factories";
import { PLACEHOLDER } from "@/lib/placeholders";

export const couvreur = defineTrade({
  tradeValue: "couvreur",
  name: "Couvreur",
  pluralName: "les couvreurs",
  category: "clos-couvert",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale couvreur : prix et devis | DécennaleBTP.fr",
    description:
      "Couvreur, zingueur ou couvreur-charpentier : comparez des solutions de RC décennale selon vos techniques de couverture, votre expérience et votre chiffre d’affaires.",
    primaryKeyword: "assurance décennale couvreur",
    secondaryKeywords: [
      "prix assurance décennale couvreur",
      "tarif décennale couverture",
      "devis décennale couvreur",
      "décennale couvreur zingueur",
      "décennale couvreur auto-entrepreneur",
      "travaux couverts couverture",
    ],
  },
  h1: "Assurance décennale couvreur : comparez les offres adaptées à vos toitures",
  shortAnswer:
    "Une toiture qui laisse passer l’eau rend le bâtiment impropre à sa destination : la garantie décennale est engagée sans qu’il soit nécessaire de démontrer une atteinte à la structure. Pour un couvreur, la cotisation dépend du chiffre d’affaires, de l’expérience, mais aussi des techniques déclarées : tuiles et ardoises, zinguerie, bac acier, toiture-terrasse ou pose de fenêtres de toit ne relèvent pas des mêmes activités.",
  summaryBullets: [
    "L’infiltration est le sinistre décennal le plus fréquent en couverture.",
    "Chaque technique de couverture doit apparaître dans les activités déclarées.",
    "L’étanchéité de toiture-terrasse est une activité distincte de la couverture.",
    "Le travail en hauteur pèse sur la RC professionnelle plus que sur la décennale.",
  ],
  specificity: [
    "La toiture assure le clos et le couvert : la moindre infiltration durable suffit à caractériser l’impropriété à destination, même sans dommage structurel.",
    "Le couvreur intervient presque toujours sur de l’existant, avec une charpente et un support qu’il n’a pas réalisés. La question de l’état du support et des réserves écrites est centrale.",
    "Les désordres sont saisonniers : ils se révèlent lors des premiers épisodes de pluie soutenue ou de vent fort, parfois plusieurs années après la fin des travaux.",
    "La frontière avec l’étanchéité est un point de litige récurrent. Un couvreur qui réalise une toiture-terrasse sans avoir déclaré l’activité étanchéité peut se retrouver sans garantie.",
    "Les travaux de zinguerie, apparemment secondaires, génèrent une part importante des sinistres : solins, noquets, raccords de cheminée, chéneaux.",
  ],
  coveredWork: [
    "couverture en tuiles terre cuite ou béton",
    "couverture en ardoises naturelles ou fibres-ciment",
    "couverture en bac acier et panneaux sandwich sur bâtiment courant",
    "zinguerie : gouttières, chéneaux, descentes, solins, noquets",
    "écran de sous-toiture et ventilation de couverture",
    "pose de fenêtres de toit et de châssis de désenfumage courants",
    "réfection partielle ou totale de couverture existante",
    "petits ouvrages de charpente liés à la réfection de couverture",
  ],
  accessoryWork: [
    "démoussage et nettoyage de toiture réalisés lors d’une intervention de couverture",
    "remplacement ponctuel de liteaux, chevrons ou voliges dégradés",
    "isolation sous rampants réalisée dans le cadre d’une réfection de toiture",
    "habillage de rives et de sous-faces",
    "raccordement des descentes aux regards existants",
  ],
  separatelyDeclaredWork: [
    "étanchéité de toiture-terrasse par membrane bitumineuse ou synthétique",
    "charpente bois neuve ou modification de structure porteuse",
    "isolation thermique par l’extérieur de toiture (sarking) selon les contrats",
    "pose de panneaux photovoltaïques intégrés ou surimposés",
    "bardage et vêture de façade",
    "couverture textile, membrane tendue, verrière et façade rideau",
    "travaux de désamiantage de couverture",
  ],
  commonExclusions: [
    "désordres provenant d’une charpente existante défectueuse signalée ou non par écrit",
    "défaut d’entretien de la couverture après réception, notamment des chéneaux",
    "activités non déclarées, en particulier l’étanchéité et le photovoltaïque",
    "techniques non courantes sans avis technique ni appréciation technique d’expérimentation",
    "dommages esthétiques sur des matériaux de récupération ou imposés par le client",
    "effets d’un événement naturel relevant de la garantie tempête ou de l’assurance dommages",
  ],
  workTable: [
    {
      work: "Couverture tuiles et ardoises",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Vérifier les pentes minimales admises par le DTU pour chaque matériau.",
    },
    {
      work: "Zinguerie et évacuation des eaux pluviales",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Première cause d’infiltration : soigner les solins et les raccords.",
    },
    {
      work: "Fenêtres de toit",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Le kit d’étanchéité doit correspondre au matériau de couverture.",
    },
    {
      work: "Toiture-terrasse étanchée",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité étanchéité distincte, souvent tarifée séparément.",
    },
    {
      work: "Panneaux photovoltaïques en toiture",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité à risque suivie de près par les assureurs.",
    },
    {
      work: "Isolation des combles depuis l’intérieur",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Attention aux problèmes de condensation et de pare-vapeur.",
    },
    {
      work: "Charpente neuve",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité de structure, avec exigences d’expérience renforcées.",
    },
  ],
  riskScenarios: [
    {
      title: "Infiltrations répétées au niveau d’un solin de cheminée",
      context:
        "Réfection complète d’une couverture en tuiles mécaniques sur une maison ancienne, avec reprise du solin de la souche de cheminée en mortier.",
      damage:
        "Traces d’humidité récurrentes sur le plafond de la chambre située sous la souche, apparues dix-huit mois après la réception, avec décollement de l’enduit intérieur.",
      liability:
        "L’infiltration rend la pièce impropre à sa destination. Le raccord de couverture relève directement de l’activité déclarée, ce qui peut engager la responsabilité décennale du couvreur.",
      reserve:
        "La qualification du désordre et le partage de responsabilité avec un éventuel maçon dépendent de l’expertise et du contrat.",
    },
    {
      title: "Envol partiel d’une couverture en bac acier",
      context:
        "Bâtiment agricole couvert en bac acier, fixations posées avec un pas supérieur aux préconisations du fabricant pour la zone de vent concernée.",
      damage:
        "Soulèvement de plusieurs bacs lors d’un coup de vent de forte intensité mais non exceptionnelle, ouverture du bâtiment sur plusieurs mètres carrés.",
      liability:
        "Le non-respect des préconisations de pose constitue un défaut d’exécution. Selon l’intensité du vent constatée, le sinistre est analysé soit en décennale, soit au titre d’une garantie événement naturel.",
      reserve:
        "Le classement du sinistre dépend des relevés météorologiques, du contrat et de l’expertise.",
    },
    {
      title: "Condensation sous une couverture isolée sans ventilation",
      context:
        "Réfection de couverture avec isolation sous rampants, écran de sous-toiture non respirant posé sans lame d’air ventilée.",
      damage:
        "Apparition de moisissures sur les chevrons et l’isolant, odeurs persistantes, dégradation progressive de la charpente sur trois ans.",
      liability:
        "L’atteinte à la charpente peut affecter la solidité de l’ouvrage. Le défaut de ventilation est un manquement aux règles de l’art propre au lot couverture.",
      reserve:
        "La prise en charge dépend des activités déclarées, notamment si l’isolation a été réalisée sans être mentionnée sur l’attestation.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Couvreur créateur, seul",
      annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Couvreur-zingueur établi",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "Entreprise de couverture avec salariés",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel",
    "expérience du dirigeant en couverture et en zinguerie",
    "techniques déclarées : tuile, ardoise, bac acier, zinc à joint debout",
    "présence d’une activité étanchéité ou photovoltaïque, qui majore la cotisation",
    "part des chantiers en rénovation sur bâti ancien",
    "hauteur et complexité des toitures traitées",
    "sinistralité, en particulier les sinistres liés aux infiltrations",
    "part sous-traitée et assurance des sous-traitants",
    "franchise retenue et étendue des garanties annexes",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation du chiffre d’affaires par technique de couverture",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant précisant les chantiers de couverture réalisés",
    "diplômes ou titre professionnel de couvreur, zingueur",
    "certificats de travail des employeurs précédents",
    "photos ou devis de chantiers représentatifs",
  ],
  startupNotes: [
    "Un couvreur qui démarre est jugé sur son expérience personnelle du métier : les certificats de travail sont plus convaincants qu’un simple CV.",
    "Déclarer d’emblée l’étanchéité sans expérience documentée peut ralentir l’étude ou faire monter la cotisation.",
    "En micro-entreprise, la limite de chiffre d’affaires ne dispense pas de l’obligation d’assurance ni de l’exactitude de la déclaration d’activités.",
    "Prévoyez une date d’effet antérieure à la pose du premier échafaudage, pas à la signature du devis.",
    "Les qualifications RGE ou Qualibat facilitent l’étude mais ne remplacent pas l’expérience.",
  ],
  comparisonPoints: [
    "liste exacte des techniques de couverture retenues sur l’attestation",
    "présence ou non de l’activité étanchéité et de la pose de panneaux solaires",
    "couverture des travaux sur charpente existante",
    "franchise par sinistre et éventuelle franchise majorée en infiltration",
    "garantie des dommages aux existants",
    "garantie avant réception, utile en cas de bâche arrachée",
    "extension RC professionnelle pour les travaux en hauteur",
    "plafonds par sinistre et par année d’assurance",
    "prise en compte de la sous-traitance",
  ],
  faq: [
    {
      question: "Une infiltration après réfection de toiture relève-t-elle de la décennale ?",
      answer:
        "Le plus souvent oui, lorsque l’infiltration est durable et rend le local impropre à sa destination. Un simple suintement ponctuel sans conséquence peut en revanche relever de la garantie de parfait achèvement dans la première année.",
    },
    {
      question: "Un couvreur peut-il réaliser une toiture-terrasse avec sa décennale de couverture ?",
      answer:
        "Non, sauf si l’activité étanchéité figure explicitement sur l’attestation. Couverture et étanchéité sont deux activités distinctes dans la nomenclature utilisée par les assureurs.",
    },
    {
      question: "Que faire si la charpente existante est en mauvais état ?",
      answer:
        "Il faut émettre des réserves écrites avant travaux et les faire signer au client. Sans trace écrite, l’entreprise se retrouve en difficulté si un désordre survient sur la couverture posée sur un support défaillant.",
    },
    {
      question: "La pose de panneaux photovoltaïques doit-elle être déclarée ?",
      answer:
        "Oui, systématiquement. Il s’agit d’une activité surveillée par les assureurs, notamment en raison des risques d’infiltration et d’incendie. Elle est presque toujours tarifée séparément.",
    },
    {
      question: "Le démoussage de toiture est-il couvert par la décennale ?",
      answer:
        "Le démoussage seul n’est généralement pas un travaux de construction au sens décennal. Il relève plutôt de la responsabilité civile professionnelle, sauf s’il endommage la couverture et provoque des infiltrations.",
    },
    {
      question: "Le prix de la décennale est-il plus élevé pour un couvreur que pour un peintre ?",
      answer:
        "En général oui, car la fréquence et le coût des sinistres liés au clos et couvert sont plus élevés que ceux des lots de finition. Les repères précis dépendent des partenaires et de votre profil.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-charpentier",
    "assurance-decennale-etancheur",
    "assurance-decennale-facadier",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/attestation-decennale-rapide/",
    "/assurance-decennale-pas-chere/",
    "/guides/que-couvre-assurance-decennale/",
    "/guides/exclusions-assurance-decennale/",
  ],
  extraSources: ["codeCivil1792_3", "nomenclatureBtp"],
});
