import { defineTrade, indicativeBand } from "@/content/_factories";
import { PLACEHOLDER } from "@/lib/placeholders";

export const etancheur = defineTrade({
  tradeValue: "etancheur",
  name: "Étancheur",
  pluralName: "les étancheurs",
  category: "clos-couvert",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale étancheur : prix et devis | DécennaleBTP.fr",
    description:
      "Étancheur, entreprise de toiture-terrasse ou applicateur de résine : comparez des solutions de RC décennale selon vos procédés déclarés, votre expérience et votre chiffre d’affaires.",
    primaryKeyword: "assurance décennale étancheur",
    secondaryKeywords: [
      "prix assurance décennale étancheur",
      "tarif décennale étanchéité",
      "devis décennale étanchéité",
      "décennale toiture terrasse",
      "décennale étancheur auto-entrepreneur",
      "travaux couverts étanchéité",
    ],
  },
  h1: "Assurance décennale étancheur : comparez les offres adaptées à vos procédés",
  shortAnswer:
    "L’étanchéité est l’une des activités les plus surveillées par les assureurs : une infiltration rend immédiatement le bâtiment impropre à sa destination et les reprises coûtent souvent plus cher que le marché initial. La cotisation dépend du chiffre d’affaires, de l’expérience et des procédés déclarés : bitume soudé, membrane synthétique, résine, étanchéité liquide, cuvelage ou toiture végétalisée.",
  summaryBullets: [
    "Activité classée à risque : les assureurs exigent une expérience démontrable.",
    "Chaque procédé d’étanchéité doit figurer dans les activités déclarées.",
    "L’étanchéité sous carrelage relève d’une activité distincte de la toiture-terrasse.",
    "Les avis techniques et la formation aux systèmes posés sont examinés.",
  ],
  specificity: [
    "L’étanchéité n’a qu’une seule fonction : empêcher l’eau de passer. Le moindre défaut aboutit donc directement à une impropriété à destination, sans discussion possible sur la gravité du désordre.",
    "Les procédés sont sous avis technique : la garantie suppose une mise en œuvre conforme au système du fabricant et non un assemblage de produits de plusieurs marques.",
    "Les points singuliers concentrent les sinistres : relevés, entrées d’eaux pluviales, joints de dilatation, traversées, seuils de porte-fenêtre.",
    "L’étancheur travaille sur un support réalisé par d’autres. La pente, la planéité et l’état du support conditionnent la tenue du complexe et doivent être réceptionnés par écrit.",
    "Les toitures-terrasses accessibles, végétalisées ou équipées de panneaux solaires ajoutent des contraintes et sont souvent déclarées séparément.",
  ],
  coveredWork: [
    "étanchéité de toiture-terrasse par membrane bitumineuse soudée",
    "étanchéité par membrane synthétique PVC ou TPO",
    "étanchéité liquide par résine polyuréthane ou système SEL",
    "relevés, becquets, costières et traitement des points singuliers",
    "isolation support d’étanchéité en toiture-terrasse",
    "entrées d’eaux pluviales, trop-pleins et évacuations de terrasse",
    "protection lourde par gravillons ou dalles sur plots",
    "réfection d’étanchéité existante avec ou sans dépose",
  ],
  accessoryWork: [
    "reprise ponctuelle de forme de pente et ragréage du support",
    "dépose et évacuation de l’ancien complexe d’étanchéité",
    "pose de garde-corps et lignes de vie liés au chantier d’étanchéité",
    "traitement des souches et sorties de ventilation existantes",
    "pose de bandes de solin et de couvertines",
  ],
  separatelyDeclaredWork: [
    "cuvelage et étanchéité d’ouvrages enterrés",
    "étanchéité sous carrelage de locaux humides (SPEC, SEL intérieurs)",
    "toitures-terrasses végétalisées selon les contrats",
    "supports de panneaux photovoltaïques en toiture-terrasse",
    "couverture en tuiles, ardoises ou bac acier",
    "bardage et isolation par l’extérieur",
    "étanchéité de bassins et piscines",
  ],
  commonExclusions: [
    "mise en œuvre non conforme à l’avis technique du système utilisé",
    "mélange de composants issus de systèmes différents",
    "support existant hors tolérance accepté sans réserve écrite",
    "activités non déclarées, notamment cuvelage et végétalisation",
    "défaut d’entretien des évacuations d’eaux pluviales après réception",
    "circulation ou stockage sur une étanchéité non conçue pour être accessible",
  ],
  workTable: [
    {
      work: "Toiture-terrasse inaccessible, bitume soudé",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Le respect de l’avis technique du système conditionne la garantie.",
    },
    {
      work: "Toiture-terrasse accessible et dalles sur plots",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Vérifier la compatibilité du complexe avec la charge et l’usage.",
    },
    {
      work: "Étanchéité liquide par résine",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Procédé souvent déclaré à part, avec formation exigée.",
    },
    {
      work: "Toiture-terrasse végétalisée",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Complexe et entretien spécifiques, risque de rétention d’eau.",
    },
    {
      work: "Cuvelage de sous-sol",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité distincte, très sinistrogène et souvent tarifée à part.",
    },
    {
      work: "Étanchéité sous carrelage de salle de bains",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Souvent rattachée au lot carrelage : clarifier la répartition.",
    },
    {
      work: "Supports de panneaux photovoltaïques",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Toute traversée du complexe doit être prévue et étanchée.",
    },
  ],
  riskScenarios: [
    {
      title: "Infiltration au relevé d’acrotère",
      context:
        "Réfection d’une toiture-terrasse d’immeuble collectif, relevés d’étanchéité arrêtés à quinze centimètres au-dessus de la protection, sans becquet ni couvertine correctement fixée.",
      damage:
        "Infiltrations dans les logements du dernier étage lors des pluies accompagnées de vent, taches d’humidité au plafond de trois appartements après un an et demi.",
      liability:
        "L’immeuble est impropre à sa destination pour les logements concernés. La hauteur de relevé insuffisante est un manquement direct aux règles de l’art de l’étanchéité.",
      reserve:
        "La prise en charge dépend du contrat, des activités déclarées et des conclusions de l’expertise.",
    },
    {
      title: "Stagnation d’eau et rupture de membrane sur terrasse sans pente",
      context:
        "Étanchéité posée sur un support réalisé sans pente et réceptionné sans réserve, avec une seule entrée d’eaux pluviales et aucun trop-plein.",
      damage:
        "Stagnation permanente de plusieurs centimètres d’eau, vieillissement accéléré de la membrane, déchirure au bout de trois ans et infiltration dans le plancher.",
      liability:
        "L’absence de réserve écrite sur la pente du support place l’étancheur en position difficile : l’acceptation d’un support non conforme lui est fréquemment opposée.",
      reserve:
        "Le partage de responsabilité avec le gros œuvre et la maîtrise d’œuvre relève de l’expertise et des pièces du marché.",
    },
    {
      title: "Traversée non étanchée pour un support technique",
      context:
        "Pose de plots supports d’une unité de climatisation par un autre intervenant, avec percement du complexe d’étanchéité repris ensuite sans platine soudée.",
      damage:
        "Infiltration ponctuelle mais permanente au droit du percement, dégradation de l’isolant de la toiture et du plafond du local situé en dessous.",
      liability:
        "La responsabilité dépend de l’auteur du percement et de la reprise. Un étancheur qui reprend une traversée sans respecter le procédé engage sa garantie décennale.",
      reserve:
        "L’imputation exacte suppose de reconstituer la chronologie des interventions, ce qui relève de l’expertise.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Étancheur créateur, seul",
      annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Étancheur établi, toiture-terrasse",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "Entreprise d’étanchéité avec salariés",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel",
    "expérience du dirigeant en étanchéité, activité rarement accordée sans référence",
    "procédés déclarés : bitume, synthétique, résine, végétalisé, cuvelage",
    "part de travaux en collectif et en tertiaire",
    "surfaces traitées et complexité des points singuliers",
    "formations et agréments délivrés par les fabricants de systèmes",
    "sinistralité des cinq dernières années",
    "part sous-traitée et assurance des sous-traitants",
    "franchise retenue et plafonds de garantie",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation par procédé d’étanchéité",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant détaillant l’expérience en étanchéité",
    "attestations de formation aux systèmes posés",
    "diplômes ou titre professionnel d’étancheur",
    "certificats de travail des employeurs précédents",
  ],
  startupNotes: [
    "L’étanchéité est rarement accordée à une entreprise sans expérience : les certificats de travail d’étancheur salarié sont pratiquement indispensables.",
    "Les attestations de formation délivrées par les fabricants de systèmes renforcent nettement un dossier de création.",
    "Le cuvelage est souvent refusé aux entreprises nouvellement créées : ne le déclarez que si vous l’exercez réellement.",
    "Réceptionnez le support par écrit sur chaque chantier, avec relevé de pente et photos : c’est la protection la plus efficace du métier.",
    "La date d’effet doit précéder la première pose, y compris pour une intervention de réfection partielle.",
  ],
  comparisonPoints: [
    "libellé exact des procédés d’étanchéité retenus",
    "présence du cuvelage, de la végétalisation et de l’étanchéité liquide",
    "couverture des travaux de réfection sur support existant",
    "franchise par sinistre, souvent plus élevée en étanchéité",
    "garantie dommages aux existants et garantie avant réception",
    "plafonds par sinistre et par année d’assurance",
    "traitement des dommages immatériels consécutifs",
    "prise en compte de la sous-traitance",
    "exigences éventuelles de l’assureur en matière de procédés utilisés",
  ],
  faq: [
    {
      question: "L’étanchéité est-elle une activité à risque pour les assureurs ?",
      answer:
        "Oui. La fréquence et le coût des sinistres y sont élevés car toute infiltration engage immédiatement la garantie décennale. Les assureurs examinent donc de près l’expérience, les procédés et les références.",
    },
    {
      question: "Un couvreur peut-il réaliser une étanchéité de toiture-terrasse ?",
      answer:
        "Seulement si l’activité étanchéité figure explicitement sur son attestation. Couverture et étanchéité sont deux activités distinctes dans la nomenclature utilisée par les assureurs.",
    },
    {
      question: "Que faire si le support ne présente pas la pente requise ?",
      answer:
        "Il faut refuser la réception du support ou émettre des réserves écrites détaillées avant toute pose. Accepter un support non conforme expose l’étancheur à supporter seul les conséquences de la stagnation d’eau.",
    },
    {
      question: "Le cuvelage est-il inclus dans l’activité étanchéité ?",
      answer:
        "Non, dans la grande majorité des contrats. Le cuvelage constitue une activité spécifique, souvent tarifée séparément et parfois refusée aux entreprises récentes.",
    },
    {
      question: "Les toitures végétalisées nécessitent-elles une déclaration particulière ?",
      answer:
        "Souvent oui, car le complexe et son entretien diffèrent d’une terrasse classique. Faites préciser le libellé de l’activité si vous réalisez ce type de travaux.",
    },
    {
      question: "Comment est calculée la cotisation d’un étancheur ?",
      answer:
        "Comme pour les autres métiers, l’assiette principale est le chiffre d’affaires. Le poids de l’expérience, des procédés déclarés et de la sinistralité y est cependant plus fort que dans les lots de finition.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-couvreur",
    "assurance-decennale-facadier",
    "assurance-decennale-carreleur",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-sans-antecedent-assurance/",
    "/decennale-apres-sinistre/",
    "/assurance-decennale-entreprise-btp/",
    "/guides/exclusions-assurance-decennale/",
    "/guides/que-couvre-assurance-decennale/",
  ],
  extraSources: ["codeAssurancesA243_1"],
});
