import { defineTrade, indicativeBand } from "@/content/_factories";
import { PLACEHOLDER } from "@/lib/placeholders";

export const facadier = defineTrade({
  tradeValue: "facadier",
  name: "Façadier",
  pluralName: "les façadiers",
  category: "clos-couvert",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale façadier : prix et devis | DécennaleBTP.fr",
    description:
      "Enduit, ravalement, isolation par l’extérieur : comparez des solutions de RC décennale adaptées aux systèmes de façade et aux supports que vous reprenez.",
    primaryKeyword: "assurance décennale façadier",
    secondaryKeywords: [
      "prix assurance décennale façadier",
      "tarif décennale enduit façade",
      "devis décennale ravalement",
      "décennale façadier ITE",
      "décennale façadier auto-entrepreneur",
      "travaux couverts façade",
    ],
  },
  h1: "Assurance décennale façadier : comparez les offres adaptées à vos systèmes de façade",
  shortAnswer:
    "La façade protège le bâtiment de l’eau et participe à son isolation : un enduit qui se décolle ou un système d’isolation par l’extérieur mal posé rend l’ouvrage impropre à sa destination. Pour un façadier, la cotisation dépend du chiffre d’affaires, de l’expérience et des systèmes déclarés, l’isolation thermique par l’extérieur étant systématiquement traitée comme une activité à part.",
  summaryBullets: [
    "L’enduit de façade assure une fonction d’imperméabilité, donc relève de la décennale.",
    "L’ITE est une activité distincte, sous avis technique, examinée de près.",
    "Le diagnostic du support avant travaux est le point de vigilance principal.",
    "Les travaux en hauteur relèvent surtout de la RC professionnelle.",
  ],
  specificity: [
    "L’enduit de façade n’est pas une finition décorative : il constitue la protection du mur contre les intempéries. Sa défaillance expose directement le bâti.",
    "Le façadier travaille toujours sur un support existant dont il n’a pas la maîtrise. Le diagnostic préalable, la reconnaissance des fissures et le traitement des sels sont déterminants.",
    "L’isolation thermique par l’extérieur relève d’un système complet sous avis technique : isolant, fixations, sous-enduit, armature, finition. Mélanger des composants de marques différentes fait perdre la garantie du fabricant.",
    "Les aides financières liées à la rénovation énergétique imposent des exigences supplémentaires, notamment la qualification RGE, indépendantes de l’assurance.",
    "Les fissures de façade sont souvent le symptôme d’un problème structurel. Enduire sans traiter la cause conduit à une réapparition rapide du désordre.",
  ],
  coveredWork: [
    "enduit monocouche projeté sur maçonnerie",
    "enduit traditionnel à la chaux ou au ciment, en plusieurs passes",
    "ravalement avec réparation de façade et traitement des fissures",
    "imperméabilité de façade par revêtement adapté",
    "jointoiement et rejointoiement de maçonnerie de pierre",
    "enduit de soubassement et traitement des remontées superficielles",
    "reprise d’épaufrures et de bétons dégradés en façade",
    "pose de parements collés en façade selon les activités déclarées",
  ],
  accessoryWork: [
    "nettoyage, décapage et hydrogommage de façade",
    "traitement fongicide de surface avant application",
    "protection des menuiseries et des seuils",
    "mise en place d’un échafaudage pour la réalisation des travaux",
    "reprise des appuis de fenêtre et des couvertines liées à l’intervention",
  ],
  separatelyDeclaredWork: [
    "isolation thermique par l’extérieur sous enduit",
    "bardage rapporté et vêtures",
    "façade rideau et façade vitrée",
    "étanchéité de terrasse et de balcon",
    "reprise structurelle de maçonnerie et injection de fissures",
    "couverture et zinguerie",
    "peinture intérieure et travaux de finition intérieurs",
  ],
  commonExclusions: [
    "fissures d’origine structurelle non traitées et non signalées par écrit",
    "activités non déclarées, en particulier l’ITE et le bardage",
    "support présentant des remontées d’humidité non diagnostiquées",
    "application hors des conditions de température ou d’hygrométrie prescrites",
    "mélange de composants issus de systèmes différents",
    "défaut d’entretien de la façade après réception",
  ],
  workTable: [
    {
      work: "Enduit monocouche sur maçonnerie neuve",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Respecter l’épaisseur et le temps de gobetis prescrits.",
    },
    {
      work: "Ravalement avec traitement de fissures",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Distinguer fissure de retrait et fissure structurelle évolutive.",
    },
    {
      work: "Imperméabilité de façade",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Le classement du revêtement doit correspondre à l’état du support.",
    },
    {
      work: "Isolation thermique par l’extérieur",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Système complet sous avis technique, avec formation exigée.",
    },
    {
      work: "Bardage rapporté",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité distincte, avec exigences de ventilation de lame d’air.",
    },
    {
      work: "Parement collé en façade",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Le poids et la hauteur de pose conditionnent l’acceptation.",
    },
    {
      work: "Injection de fissures structurelles",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Relève du confortement de structure, pas du ravalement.",
    },
  ],
  riskScenarios: [
    {
      title: "Décollement d’un enduit monocouche par plaques",
      context:
        "Enduit monocouche projeté sur une maçonnerie de blocs béton insuffisamment humidifiée, par temps chaud et venté, sans gobetis d’accrochage.",
      damage:
        "Faïençage puis décollement par plaques sur deux façades au bout de trois ans, avec pénétration d’eau dans la maçonnerie et taches d’humidité intérieures.",
      liability:
        "L’enduit n’assure plus sa fonction de protection : le bâtiment est impropre à sa destination. Le non-respect des conditions d’application est imputable au façadier.",
      reserve:
        "La part éventuellement imputable au support ou au fabricant est déterminée par expertise.",
    },
    {
      title: "Ravalement réalisé sur fissures structurelles évolutives",
      context:
        "Ravalement complet d’un pavillon présentant des fissures en escalier, rebouchées et enduites sans investigation sur leur origine ni information écrite du client.",
      damage:
        "Réapparition des fissures à l’identique dans les douze mois, aggravation sur trois ans, façade à reprendre entièrement.",
      liability:
        "Le devoir de conseil de l’entreprise est engagé : elle devait alerter sur l’origine probable des fissures avant d’enduire. Selon l’ampleur, le désordre peut être qualifié de décennal.",
      reserve:
        "La cause première étant souvent une insuffisance de fondations, le partage de responsabilité relève de l’expertise.",
    },
    {
      title: "Isolation par l’extérieur avec fixations insuffisantes",
      context:
        "ITE sous enduit mince posée sur un support ancien, avec un nombre de chevilles inférieur aux préconisations de l’avis technique pour la zone de vent concernée.",
      damage:
        "Bombement des panneaux isolants, fissuration de l’enduit de finition, arrachement partiel d’un pan de façade lors d’un épisode venteux, quatre ans après réception.",
      liability:
        "L’ouvrage est impropre à sa destination et présente un danger. Le non-respect du système et de son avis technique est directement imputable à l’applicateur.",
      reserve:
        "La garantie suppose que l’activité ITE figure sur l’attestation d’assurance de l’entreprise.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Façadier créateur, seul",
      annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Façadier établi, enduit et ravalement",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "Entreprise de façade avec activité ITE",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel",
    "expérience du dirigeant en enduit et en ravalement",
    "présence de l’ITE dans les activités déclarées",
    "hauteur des façades traitées et recours à l’échafaudage",
    "part de travaux sur bâti ancien",
    "systèmes utilisés et formations délivrées par les fabricants",
    "sinistralité des cinq dernières années",
    "part sous-traitée et assurance des sous-traitants",
    "franchise retenue et plafonds de garantie",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation entre enduit, ravalement et ITE",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant et surfaces traitées",
    "attestations de formation aux systèmes d’enduit et d’ITE",
    "qualification RGE si vous réalisez des travaux aidés",
    "certificats de travail des employeurs précédents",
  ],
  startupNotes: [
    "L’enduit de façade est généralement accessible à une entreprise en création disposant d’une expérience salariée démontrable.",
    "L’ITE est souvent refusée ou tarifée plus haut sans référence : préparez vos attestations de formation aux systèmes.",
    "Réalisez et conservez un diagnostic écrit du support avant chaque ravalement, photos comprises.",
    "En micro-entreprise, le coût des matériaux et de l’échafaudage pèse fortement dans le chiffre d’affaires déclaré.",
    "La qualification RGE conditionne l’accès aux aides du client mais ne remplace pas l’assurance.",
  ],
  comparisonPoints: [
    "libellé des activités : enduit, ravalement, imperméabilité, ITE, bardage",
    "couverture des travaux sur bâti ancien et sur fissures",
    "exigences de l’assureur sur les systèmes utilisés",
    "franchise par sinistre et éventuelle franchise majorée en ITE",
    "garantie dommages aux existants",
    "extension RC professionnelle pour les travaux en hauteur",
    "plafonds par sinistre et par année d’assurance",
    "prise en compte de la sous-traitance",
    "conditions de couverture des chantiers en site occupé",
  ],
  faq: [
    {
      question: "Un ravalement de façade relève-t-il de la garantie décennale ?",
      answer:
        "Oui lorsque l’enduit ou le revêtement assure une fonction d’imperméabilité et de protection du bâti. Un simple rafraîchissement esthétique s’en éloigne, mais la qualification dépend du produit appliqué et de l’attente contractuelle du client.",
    },
    {
      question: "L’ITE est-elle incluse dans l’activité enduit de façade ?",
      answer:
        "Non. L’isolation thermique par l’extérieur constitue une activité distincte dans toutes les nomenclatures utilisées par les assureurs. Elle doit apparaître explicitement sur l’attestation.",
    },
    {
      question: "Que faire face à des fissures avant un ravalement ?",
      answer:
        "Il faut les caractériser, informer le client par écrit de leur nature probable et, si elles paraissent structurelles, conditionner l’intervention à un traitement de la cause. Enduire une fissure évolutive sans réserve expose directement l’entreprise.",
    },
    {
      question: "La qualification RGE est-elle obligatoire pour être assuré ?",
      answer:
        "Non. RGE conditionne l’accès des clients à certaines aides financières, tandis que l’assurance décennale répond à une obligation légale distincte. Les deux sujets ne se substituent pas l’un à l’autre.",
    },
    {
      question: "Peut-on utiliser des composants de marques différentes en ITE ?",
      answer:
        "C’est fortement déconseillé. Les systèmes sont validés dans leur ensemble par un avis technique. Mélanger les composants fait perdre la garantie du fabricant et fragilise la position de l’entreprise en cas de sinistre.",
    },
    {
      question: "Le nettoyage de façade est-il couvert par la décennale ?",
      answer:
        "Le nettoyage seul ne constitue généralement pas un travaux de construction au sens décennal. Il relève de la responsabilité civile professionnelle, sauf s’il dégrade le support et provoque des infiltrations.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-macon",
    "assurance-decennale-peintre",
    "assurance-decennale-etancheur",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/decennale-apres-resiliation/",
    "/assurance-decennale-entreprise-btp/",
    "/guides/exclusions-assurance-decennale/",
    "/guides/nomenclature-activites-btp/",
  ],
  extraSources: ["codeAssurancesA243_1"],
});
