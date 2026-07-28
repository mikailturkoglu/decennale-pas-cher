import { defineTrade, indicativeBand } from "@/content/_factories";
import { PLACEHOLDER } from "@/lib/placeholders";

export const peintre = defineTrade({
  tradeValue: "peintre",
  name: "Peintre",
  pluralName: "les peintres en bâtiment",
  category: "amenagement-finitions",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale peintre en bâtiment : prix et devis | DécennaleBTP.fr",
    description:
      "Peintre en bâtiment, applicateur de revêtements ou micro-entrepreneur : comparez des solutions de RC décennale selon vos activités déclarées, votre expérience et votre chiffre d’affaires.",
    primaryKeyword: "assurance décennale peintre",
    secondaryKeywords: [
      "prix assurance décennale peintre",
      "tarif décennale peinture bâtiment",
      "devis décennale peintre",
      "décennale peintre auto-entrepreneur",
      "décennale peintre ravalement",
      "travaux couverts peinture",
    ],
  },
  h1: "Assurance décennale peintre en bâtiment : comparez les offres adaptées à vos chantiers",
  shortAnswer:
    "La peinture intérieure est souvent considérée comme un travail esthétique, mais dès qu’elle assure une fonction technique — imperméabilité d’une façade, protection d’un support, revêtement d’étanchéité — la garantie décennale peut être engagée. La cotisation d’un peintre est généralement parmi les plus basses du bâtiment, à condition de bien distinguer peinture intérieure, ravalement et imperméabilité de façade.",
  summaryBullets: [
    "La peinture intérieure décorative relève surtout de la RC professionnelle.",
    "Le ravalement avec fonction d’imperméabilité relève de la décennale.",
    "L’enduit de façade et l’ITE sont des activités distinctes de la peinture.",
    "L’obligation d’assurance s’apprécie travaux par travaux, pas métier par métier.",
  ],
  specificity: [
    "La frontière entre esthétique et technique structure tout le métier : un désordre purement visuel n’ouvre pas droit à la garantie décennale, un défaut d’imperméabilité de façade oui.",
    "Le peintre travaille toujours sur un support existant. La préparation, le diagnostic d’humidité et la compatibilité des produits sont les principales sources de litige.",
    "Le ravalement change la nature du risque : appliqué en extérieur, un revêtement d’imperméabilité de type I4 assure une fonction de protection du bâti.",
    "Les délais de séchage et les conditions d’application sont fréquemment mis en cause : température, humidité, support neuf insuffisamment sec.",
    "Beaucoup de peintres réalisent aussi de la plâtrerie, du ratissage, de la pose de revêtements de sol : chaque activité supplémentaire doit être déclarée.",
  ],
  coveredWork: [
    "peinture intérieure sur murs, plafonds et boiseries",
    "préparation des supports : rebouchage, enduit de lissage, ratissage",
    "peinture extérieure sur menuiseries, ferronneries et sous-faces",
    "ravalement par mise en peinture d’une façade",
    "application de revêtements d’imperméabilité de façade",
    "pose de revêtements muraux : papier peint, toile de verre, fibre",
    "traitement anticorrosion de supports métalliques du bâtiment",
    "peinture de sol en résine dans les locaux courants",
  ],
  accessoryWork: [
    "protection et remise en état des locaux traités",
    "petits rebouchages de plâtrerie avant application",
    "dépose et repose d’appareillages électriques simples",
    "nettoyage et lavage de façade avant peinture",
    "traitement fongicide de surface préalable à la mise en peinture",
  ],
  separatelyDeclaredWork: [
    "enduits de façade traditionnels et monocouches",
    "isolation thermique par l’extérieur",
    "plâtrerie et pose de cloisons sèches",
    "pose de revêtements de sol souples et parquets",
    "ponçage et vitrification de parquets selon les contrats",
    "étanchéité de balcons et terrasses par résine",
    "travaux de désamiantage ou de retrait de plomb",
  ],
  commonExclusions: [
    "désordres purement esthétiques n’affectant ni la solidité ni la destination de l’ouvrage",
    "défauts imputables à un support non préparé signalé sans réserve écrite",
    "humidité préexistante non traitée à la source",
    "produits imposés par le client, hors garantie fabricant",
    "activités non déclarées, notamment enduit de façade et ITE",
    "usure normale et défaut d’entretien après réception",
  ],
  workTable: [
    {
      work: "Peinture intérieure décorative",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Un simple défaut d’aspect relève de la RC pro, pas de la décennale.",
    },
    {
      work: "Ratissage et enduit de lissage intérieur",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Le décollement massif peut être requalifié en désordre technique.",
    },
    {
      work: "Ravalement par mise en peinture",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Vérifier si la fonction d’imperméabilité est attendue par le client.",
    },
    {
      work: "Revêtement d’imperméabilité de façade",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Fonction technique assumée : la décennale est pleinement engagée.",
    },
    {
      work: "Enduit de façade monocouche",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité de façadier, distincte de la peinture.",
    },
    {
      work: "Isolation thermique par l’extérieur",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Système complet sous avis technique, avec exigences renforcées.",
    },
    {
      work: "Peinture de sol en résine",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "L’usage industriel du local modifie fortement le niveau d’exigence.",
    },
  ],
  riskScenarios: [
    {
      title: "Décollement généralisé d’un revêtement d’imperméabilité de façade",
      context:
        "Ravalement complet d’un immeuble avec application d’un revêtement d’imperméabilité sur une façade présentant des traces d’humidité non diagnostiquées.",
      damage:
        "Cloquage puis décollement du revêtement sur plusieurs dizaines de mètres carrés au bout de deux ans, avec réapparition des infiltrations dans les logements.",
      liability:
        "Le revêtement avait une fonction de protection du bâti. Son inefficacité rend la façade impropre à sa destination et engage la responsabilité décennale de l’entreprise.",
      reserve:
        "L’origine de l’humidité et l’éventuelle responsabilité d’un autre intervenant sont établies par l’expertise.",
    },
    {
      title: "Peinture appliquée sur un support neuf insuffisamment sec",
      context:
        "Mise en peinture de cloisons et plafonds dans une construction neuve, réalisée à la demande du maître d’ouvrage avant la fin du séchage des enduits.",
      damage:
        "Faïençage et écaillage sur l’ensemble des surfaces peintes dans les huit mois, nécessitant un décapage complet et une remise en peinture.",
      liability:
        "L’entreprise doit refuser ou réserver l’intervention sur un support non conforme. Le désordre est ici principalement esthétique, ce qui l’oriente vers la garantie de parfait achèvement et la RC professionnelle plutôt que vers la décennale.",
      reserve:
        "La qualification du désordre dépend de son étendue et de l’usage des locaux, appréciés par l’expertise.",
    },
    {
      title: "Résine de sol inadaptée dans un local humide",
      context:
        "Application d’une peinture de sol époxy dans un local de préparation alimentaire, sans primaire d’accrochage adapté à un support soumis à des remontées d’humidité.",
      damage:
        "Décollement par plaques au bout d’un an, sol glissant et non lessivable, local jugé non conforme aux exigences d’hygiène par un contrôle sanitaire.",
      liability:
        "Le local ne peut plus être utilisé pour sa destination. Le choix d’un système inadapté au support relève d’un défaut de conseil et d’exécution de l’entreprise.",
      reserve:
        "La prise en charge suppose que l’activité peinture de sol figure parmi les activités déclarées.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Peintre créateur, seul",
      annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Peintre établi, intérieur uniquement",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "Entreprise de peinture et ravalement",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel",
    "part de peinture intérieure par rapport aux travaux extérieurs",
    "présence de l’imperméabilité de façade ou de l’enduit dans les activités",
    "expérience du dirigeant et ancienneté de l’entreprise",
    "type de clientèle : particuliers, syndics, entreprises générales",
    "hauteur des façades traitées et recours à l’échafaudage",
    "sinistralité des cinq dernières années",
    "part sous-traitée et assurance des sous-traitants",
    "franchise retenue et niveau de garanties annexes",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation entre peinture intérieure, extérieure et revêtements",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant et types de chantiers réalisés",
    "diplômes : CAP peintre applicateur de revêtements, BP",
    "certificats de travail des employeurs précédents",
    "devis ou marchés représentatifs",
  ],
  startupNotes: [
    "La peinture intérieure est l’une des activités les plus faciles à assurer en création d’entreprise, y compris avec une expérience limitée.",
    "Si vous prévoyez du ravalement, déclarez-le dès le départ : l’activité extérieure change la tarification.",
    "En micro-entreprise, pensez à inclure la fourniture des peintures dans le chiffre d’affaires prévisionnel.",
    "Un diagnostic d’humidité avant ravalement, même sommaire et écrit, réduit fortement le risque de litige.",
    "Conservez les fiches techniques des produits appliqués : elles prouvent la compatibilité avec le support.",
  ],
  comparisonPoints: [
    "libellé des activités : peinture intérieure, extérieure, imperméabilité, revêtements",
    "traitement des désordres esthétiques, généralement hors décennale",
    "franchise par sinistre et son montant relatif au chiffre d’affaires",
    "garantie dommages aux existants, utile en site occupé",
    "extension RC professionnelle couvrant les dommages aux biens confiés",
    "plafonds par sinistre et par année d’assurance",
    "prise en compte de la sous-traitance en période de forte activité",
    "conditions de couverture des travaux en hauteur",
    "modalités de paiement et de révision de la cotisation",
  ],
  faq: [
    {
      question: "Un peintre en bâtiment doit-il obligatoirement une décennale ?",
      answer:
        "L’obligation s’apprécie selon les travaux réalisés. Dès que l’intervention participe à un ouvrage ou assume une fonction technique, comme un ravalement d’imperméabilité, l’assurance décennale est obligatoire. En pratique, la plupart des clients professionnels exigent une attestation même pour de la peinture intérieure.",
    },
    {
      question: "Un défaut d’aspect de peinture est-il couvert dix ans ?",
      answer:
        "Non. Un désordre purement esthétique n’affecte ni la solidité ni la destination de l’ouvrage. Il relève de la garantie de parfait achèvement la première année, puis éventuellement de la responsabilité civile professionnelle.",
    },
    {
      question: "Le ravalement de façade relève-t-il de la décennale ?",
      answer:
        "Oui lorsqu’il assure une fonction de protection ou d’imperméabilité du bâti. Un simple rafraîchissement décoratif s’en approche moins, mais la qualification dépend de l’attente contractuelle du client et de la nature du produit appliqué.",
    },
    {
      question: "Peut-on peindre une façade sans déclarer l’activité extérieure ?",
      answer:
        "Non. Si votre attestation ne mentionne que la peinture intérieure, un désordre en façade risque de ne pas être garanti. Faites préciser les activités avant d’accepter ce type de chantier.",
    },
    {
      question: "Pourquoi la décennale d’un peintre coûte-t-elle moins cher ?",
      answer:
        "Parce que la fréquence et le coût moyen des sinistres y sont plus faibles que dans les lots structurels ou d’étanchéité. Les repères tarifaires exacts dépendent des partenaires et de votre profil.",
    },
    {
      question: "Faut-il déclarer la pose de revêtements de sol ?",
      answer:
        "Oui si vous la pratiquez. La pose de sols souples ou de parquets constitue une activité distincte de la peinture dans la plupart des nomenclatures utilisées par les assureurs.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-plaquiste",
    "assurance-decennale-facadier",
    "assurance-decennale-carreleur",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/assurance-decennale-pas-chere/",
    "/devis-assurance-decennale/",
    "/decennale-auto-entrepreneur/",
    "/decennale-creation-entreprise/",
    "/guides/que-couvre-assurance-decennale/",
    "/guides/rc-pro-vs-decennale/",
  ],
  extraSources: ["codeCivil1792_3"],
});
