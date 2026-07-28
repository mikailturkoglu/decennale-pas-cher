import { defineTrade, indicativeBand } from "@/content/_factories";
import { PLACEHOLDER } from "@/lib/placeholders";

export const electricien = defineTrade({
  tradeValue: "electricien",
  name: "Électricien",
  pluralName: "les électriciens",
  category: "lots-techniques",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale électricien : prix et devis | DécennaleBTP.fr",
    description:
      "Installation électrique, tableau, courants faibles, photovoltaïque : comparez des solutions de RC décennale adaptées aux activités que vous déclarez.",
    primaryKeyword: "assurance décennale électricien",
    secondaryKeywords: [
      "prix assurance décennale électricien",
      "tarif décennale électricité",
      "devis décennale électricien",
      "décennale électricien auto-entrepreneur",
      "décennale électricien photovoltaïque",
      "travaux couverts électricité",
    ],
  },
  h1: "Assurance décennale électricien : comparez les offres adaptées à vos installations",
  shortAnswer:
    "Une installation électrique encastrée fait partie de l’ouvrage : si elle est dangereuse ou inutilisable, le logement est impropre à sa destination et la garantie décennale s’applique. Pour un électricien, la cotisation dépend du chiffre d’affaires, de l’expérience et du périmètre déclaré : électricité générale du bâtiment, courants faibles, IRVE, photovoltaïque ou domotique ne sont pas traités de la même manière.",
  summaryBullets: [
    "Le risque incendie place l’électricité parmi les lots techniques surveillés.",
    "Le photovoltaïque et l’IRVE sont des activités à déclarer séparément.",
    "La conformité NF C 15-100 est le premier argument en cas de litige.",
    "L’attestation est réclamée par les promoteurs, syndics et bureaux de contrôle.",
  ],
  specificity: [
    "L’installation électrique encastrée est indissociable du bâtiment : un défaut de conception ou de mise en œuvre engage la responsabilité décennale et non une simple garantie de bon fonctionnement.",
    "Le risque incendie change l’échelle du sinistre : un défaut de serrage ou une section de câble insuffisante peut détruire un bâtiment entier et provoquer des dommages corporels.",
    "La norme NF C 15-100 fournit une référence technique précise. Son non-respect est facile à démontrer en expertise, ce qui laisse peu de marge de discussion à l’entreprise.",
    "Les activités connexes se sont multipliées : bornes de recharge, photovoltaïque, domotique, réseaux de communication. Chacune peut relever d’une activité distincte pour l’assureur.",
    "Les électriciens intervenant sur des installations anciennes héritent d’un existant non conforme : la délimitation écrite du périmètre d’intervention est indispensable.",
  ],
  coveredWork: [
    "installations électriques intérieures basse tension en neuf et en rénovation",
    "tableaux de répartition, protections différentielles et mises à la terre",
    "cheminements encastrés, saignées, gaines et boîtes de dérivation",
    "éclairage intérieur et extérieur raccordé au bâtiment",
    "chauffage électrique : convecteurs, planchers rayonnants, sèche-serviettes",
    "courants faibles : réseaux informatiques, interphonie, alarme, contrôle d’accès",
    "mise en sécurité et mise en conformité d’installations existantes",
  ],
  accessoryWork: [
    "percements, saignées et rebouchages liés au passage des câbles",
    "reprise ponctuelle de plâtrerie ou de peinture après intervention",
    "pose d’appareillages fournis par le client",
    "raccordement d’équipements installés par un autre corps d’état",
    "tranchée et fourreaux pour l’alimentation d’une dépendance dans la limite du chantier",
  ],
  separatelyDeclaredWork: [
    "installation de panneaux photovoltaïques et onduleurs",
    "bornes de recharge pour véhicules électriques (IRVE)",
    "climatisation, ventilation et pompes à chaleur",
    "réseaux haute tension, postes de transformation",
    "éclairage public et réseaux extérieurs de distribution",
    "alarme incendie de type 1 à 3 et désenfumage selon les contrats",
    "domotique et gestion technique du bâtiment selon les contrats",
  ],
  commonExclusions: [
    "installations existantes non reprises et non expertisées",
    "activités absentes de l’attestation, notamment photovoltaïque et IRVE",
    "matériel non conforme ou non certifié fourni par le client",
    "défaut d’entretien et modifications réalisées par un tiers après réception",
    "dommages purement immatériels sans garantie complémentaire",
    "travaux réalisés sans habilitation électrique valide lorsque le contrat l’exige",
  ],
  workTable: [
    {
      work: "Installation neuve complète d’un logement",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Conserver l’attestation de conformité et le schéma du tableau.",
    },
    {
      work: "Mise en conformité d’une installation ancienne",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Décrire par écrit ce qui est repris et ce qui reste en l’état.",
    },
    {
      work: "Chauffage électrique et plancher rayonnant",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Le dimensionnement peut être discuté au titre du confort attendu.",
    },
    {
      work: "Courants faibles et réseaux informatiques",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Vérifier que les réseaux VDI figurent bien dans l’activité déclarée.",
    },
    {
      work: "Photovoltaïque en toiture",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Cumul de risques : infiltration, incendie, production insuffisante.",
    },
    {
      work: "Borne de recharge IRVE",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Qualification IRVE exigée par la réglementation au-delà de 3,7 kW.",
    },
    {
      work: "Climatisation et pompe à chaleur air-air",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Relève des activités de génie climatique, pas de l’électricité.",
    },
  ],
  riskScenarios: [
    {
      title: "Départ de feu sur un tableau électrique neuf",
      context:
        "Rénovation lourde d’une maison, remplacement complet du tableau, plusieurs bornes de raccordement insuffisamment serrées lors de la mise en service.",
      damage:
        "Échauffement puis départ de feu dans le tableau au bout de dix mois, dégradation de la gaine technique et de deux cloisons, logement inhabitable pendant les travaux de remise en état.",
      liability:
        "Le défaut d’exécution rend l’ouvrage impropre à sa destination et met en danger les occupants. La responsabilité décennale de l’entreprise d’électricité peut être recherchée, avec un enjeu potentiel de dommages corporels.",
      reserve:
        "La cause exacte du sinistre est établie par expertise. La prise en charge dépend du contrat et des activités déclarées.",
    },
    {
      title: "Sous-dimensionnement d’une alimentation encastrée",
      context:
        "Création d’une extension avec cuisine équipée, alimentation des circuits spécialisés réalisée avec une section de câble inférieure aux préconisations de la norme.",
      damage:
        "Déclenchements répétés, échauffement des conducteurs, nécessité de casser cloisons et chape pour remplacer les câbles encastrés trois ans après la réception.",
      liability:
        "L’installation ne permet pas un usage normal des locaux. Le non-respect de la norme NF C 15-100 constitue un manquement aux règles de l’art directement imputable au lot électricité.",
      reserve:
        "Le coût de reprise et la qualification du désordre relèvent de l’expertise et du contrat.",
    },
    {
      title: "Infiltration après pose de panneaux photovoltaïques",
      context:
        "Pose de panneaux en surimposition sur une couverture en tuiles, avec percement des liteaux et remplacement de tuiles par des crochets non adaptés au modèle.",
      damage:
        "Infiltrations dans les combles aménagés, dégradation de l’isolant et du plafond, apparition de moisissures au cours du deuxième hiver.",
      liability:
        "L’étanchéité de la toiture n’est plus assurée : le bâtiment est impropre à sa destination. La responsabilité décennale suppose toutefois que l’activité photovoltaïque figure sur l’attestation.",
      reserve:
        "Sans déclaration de cette activité, l’assureur peut refuser sa garantie et l’entreprise reste engagée sur ses fonds propres.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Électricien créateur, seul",
      annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Électricien établi, bâtiment courant",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "TPE d’électricité avec salariés",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel",
    "expérience du dirigeant en installation électrique du bâtiment",
    "périmètre déclaré : électricité générale, courants faibles, photovoltaïque, IRVE",
    "part de travaux en tertiaire, industriel ou établissements recevant du public",
    "risque incendie associé aux installations réalisées",
    "sinistralité des cinq dernières années",
    "qualifications : Qualifelec, IRVE, RGE",
    "part sous-traitée et assurance des sous-traitants",
    "franchise retenue et plafonds de garantie",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation par type d’installation : logement, tertiaire, industriel",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant et nature des installations réalisées",
    "diplômes : CAP électricien, BP, BTS électrotechnique, titre professionnel",
    "attestation d’habilitation électrique et qualification IRVE le cas échéant",
    "certificats de travail des employeurs précédents",
  ],
  startupNotes: [
    "Un électricien qui démarre est apprécié sur son expérience personnelle : précisez les types de chantiers réalisés en tant que salarié, en logement comme en tertiaire.",
    "Le photovoltaïque et l’IRVE sont rarement accordés d’emblée à une entreprise sans référence : prévoyez d’en discuter explicitement avec le partenaire.",
    "En micro-entreprise, tenez compte de la fourniture de matériel dans le chiffre d’affaires déclaré.",
    "L’habilitation électrique et la qualification IRVE sont des obligations distinctes de l’assurance : l’une ne remplace pas l’autre.",
    "La date d’effet doit couvrir la totalité du premier chantier, y compris la phase de dépose de l’ancienne installation.",
  ],
  comparisonPoints: [
    "libellé exact des activités : électricité générale, courants faibles, photovoltaïque, IRVE",
    "couverture des installations existantes partiellement reprises",
    "franchise par sinistre et franchise incendie éventuelle",
    "garantie dommages aux existants",
    "extension RC professionnelle et dommages immatériels consécutifs",
    "plafonds par sinistre et par année d’assurance",
    "traitement des dommages corporels",
    "prise en compte de la sous-traitance et de la fourniture",
    "conditions de révision de la cotisation en cas de hausse du chiffre d’affaires",
  ],
  faq: [
    {
      question: "Une installation électrique est-elle couverte par la décennale ?",
      answer:
        "Oui lorsqu’elle est encastrée et indissociable du bâtiment, et que le défaut rend le local dangereux ou inutilisable. Un appareillage simplement remplaçable relève plutôt de la garantie de bon fonctionnement de deux ans.",
    },
    {
      question: "Faut-il déclarer le photovoltaïque quand on est électricien ?",
      answer:
        "Oui, systématiquement. C’est une activité distincte, considérée comme plus risquée en raison du cumul entre percement de couverture, incendie et performance de production. Sans déclaration, l’assureur peut refuser sa garantie.",
    },
    {
      question: "L’installation de bornes de recharge est-elle couverte automatiquement ?",
      answer:
        "Non. L’IRVE fait généralement l’objet d’une activité déclarée à part, en cohérence avec la qualification exigée par la réglementation pour les puissances supérieures à 3,7 kW.",
    },
    {
      question: "Que se passe-t-il si je reprends une installation ancienne non conforme ?",
      answer:
        "Vous n’êtes pas responsable de l’existant que vous n’avez pas touché, à condition de l’avoir écrit. Rédigez un descriptif précis du périmètre repris et signalez au client les non-conformités que vous ne traitez pas.",
    },
    {
      question: "La domotique entre-t-elle dans la décennale ?",
      answer:
        "Cela dépend du contrat. La domotique est parfois intégrée aux courants faibles, parfois traitée comme une activité distincte. Faites préciser son statut avant de vendre ce type de prestation.",
    },
    {
      question: "Un électricien auto-entrepreneur doit-il être assuré ?",
      answer:
        "Oui. L’obligation dépend de la nature des travaux réalisés et non du statut. L’attestation doit être disponible avant le premier chantier et les références d’assurance doivent apparaître sur les devis et factures.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-plombier",
    "assurance-decennale-chauffagiste",
    "assurance-decennale-plaquiste",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/decennale-auto-entrepreneur/",
    "/assurance-decennale-en-ligne/",
    "/guides/que-couvre-assurance-decennale/",
    "/guides/nomenclature-activites-btp/",
  ],
  extraSources: ["codeCivil1792_2", "codeCivil1792_3"],
});
