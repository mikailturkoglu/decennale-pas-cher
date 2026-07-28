import { defineTrade, indicativeBand } from "@/content/_factories";
import { PLACEHOLDER } from "@/lib/placeholders";

export const plaquiste = defineTrade({
  tradeValue: "plaquiste",
  name: "Plaquiste",
  pluralName: "les plaquistes",
  category: "amenagement-finitions",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale plaquiste : prix et devis | DécennaleBTP.fr",
    description:
      "Plaquiste, plâtrier ou poseur de cloisons sèches : comparez des solutions de RC décennale selon vos activités déclarées, votre expérience et votre chiffre d’affaires.",
    primaryKeyword: "assurance décennale plaquiste",
    secondaryKeywords: [
      "prix assurance décennale plaquiste",
      "tarif décennale plâtrerie",
      "devis décennale plaquiste",
      "décennale plaquiste auto-entrepreneur",
      "décennale cloison sèche isolation",
      "travaux couverts plâtrerie",
    ],
  },
  h1: "Assurance décennale plaquiste : comparez les offres adaptées à vos cloisons",
  shortAnswer:
    "La plâtrerie n’est pas un simple lot de finition : une cloison coupe-feu mal montée, une isolation sans pare-vapeur ou un plafond suspendu qui s’affaisse peuvent rendre un local impropre à sa destination et engager la garantie décennale. La cotisation d’un plaquiste dépend du chiffre d’affaires, de l’expérience et des activités déclarées, notamment l’isolation et les ouvrages coupe-feu ou acoustiques.",
  summaryBullets: [
    "Les exigences coupe-feu et acoustiques déplacent la plâtrerie vers un enjeu réglementaire.",
    "L’isolation intérieure est une activité à déclarer, souvent oubliée.",
    "Les plafonds suspendus de grande portée doivent respecter les charges admissibles.",
    "En pièce humide, le choix des plaques hydrofuges est un point de vigilance.",
  ],
  specificity: [
    "La cloison sèche remplit des fonctions réglementaires : résistance au feu, isolement acoustique entre logements, tenue mécanique des fixations. Le non-respect de ces fonctions rend le local non conforme.",
    "L’isolation posée derrière les plaques a un impact thermique et hygrométrique. Un pare-vapeur mal posé provoque de la condensation dans la paroi, invisible pendant des années.",
    "Les plafonds suspendus et les rampants de combles supportent parfois des charges non prévues : luminaires encastrés, isolant soufflé, trappes d’accès.",
    "Le plaquiste intervient après le gros œuvre et avant les finitions. Il hérite des défauts de planéité et de l’humidité résiduelle du bâtiment.",
    "Beaucoup de plaquistes réalisent aussi de la peinture, du ratissage ou de la pose de sols : chaque activité supplémentaire doit apparaître sur l’attestation.",
  ],
  coveredWork: [
    "cloisons de distribution en plaques de plâtre sur ossature métallique",
    "doublages thermiques et acoustiques sur murs existants",
    "plafonds suspendus et faux plafonds sur ossature",
    "aménagement de combles : rampants, pignons, trappes",
    "pose de laine minérale et d’isolants en cloison et en rampant",
    "ouvrages coupe-feu et cloisons séparatives entre logements",
    "enduits de jointement, bandes et finition prête à peindre",
    "cloisons en carreaux de plâtre et briques plâtrières",
  ],
  accessoryWork: [
    "renforts et fixations pour appareils sanitaires ou mobilier suspendu",
    "réservations pour passage des réseaux techniques",
    "reprise ponctuelle de support et rebouchage",
    "pose de plinthes et de profilés de finition",
    "dépose des anciennes cloisons et évacuation des gravats",
  ],
  separatelyDeclaredWork: [
    "isolation thermique par l’extérieur",
    "isolation de combles par soufflage selon les contrats",
    "peinture et revêtements muraux",
    "pose de sols souples et de parquets",
    "plafonds tendus selon les contrats",
    "cloisons amovibles et démontables de bureaux",
    "traitement de l’humidité et cuvelage",
  ],
  commonExclusions: [
    "désordres provoqués par l’humidité du gros œuvre non signalée par écrit",
    "activités non déclarées, notamment isolation par soufflage et peinture",
    "surcharges appliquées après réception sur un plafond suspendu",
    "défauts d’aspect des enduits de jointement sans conséquence technique",
    "modifications réalisées par un tiers sur les ouvrages posés",
    "usage du local différent de celui prévu, notamment en local humide",
  ],
  workTable: [
    {
      work: "Cloison de distribution simple",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Vérifier l’entraxe des montants et les renforts pour charges.",
    },
    {
      work: "Doublage thermique avec isolant",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Le pare-vapeur doit être continu et correctement raccordé.",
    },
    {
      work: "Cloison coupe-feu ou séparative de logements",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Le procès-verbal de classement du système doit être respecté.",
    },
    {
      work: "Plafond suspendu de grande portée",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Charges admissibles et suspentes doivent suivre les prescriptions.",
    },
    {
      work: "Aménagement de combles",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "La ventilation de la sous-toiture doit être préservée.",
    },
    {
      work: "Isolation de combles par soufflage",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Activité parfois distincte, avec exigences RGE si aides mobilisées.",
    },
    {
      work: "Plafond tendu",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Technique spécifique, à faire figurer sur l’attestation.",
    },
  ],
  riskScenarios: [
    {
      title: "Condensation dans un doublage sans pare-vapeur continu",
      context:
        "Doublage isolant réalisé sur les murs extérieurs d’une maison ancienne, pare-vapeur interrompu au niveau des tableaux de fenêtres et des raccords de plancher.",
      damage:
        "Développement de moisissures derrière les plaques, odeurs persistantes, dégradation de l’isolant et taches traversant les plaques après trois hivers.",
      liability:
        "Le logement devient insalubre dans les pièces concernées, ce qui peut caractériser une impropriété à destination. La continuité du pare-vapeur relève de la mise en œuvre du plaquiste.",
      reserve:
        "L’origine de l’humidité, qui peut être également structurelle, est déterminée par expertise.",
    },
    {
      title: "Cloison séparative de logements ne respectant pas le classement coupe-feu",
      context:
        "Division d’une maison en deux logements locatifs, cloison montée avec une seule épaisseur de plaques standard au lieu du système coupe-feu prévu au marché.",
      damage:
        "Non-conformité relevée lors d’un contrôle avant mise en location, refus de la commission de sécurité, impossibilité de louer sans reprise complète de la cloison.",
      liability:
        "L’ouvrage ne remplit pas la fonction réglementaire attendue : l’impropriété à destination est retenue même en l’absence de sinistre matériel.",
      reserve:
        "La prise en charge dépend du contrat, du descriptif contractuel et de l’expertise.",
    },
    {
      title: "Affaissement d’un plafond suspendu surchargé",
      context:
        "Faux plafond de 60 m² dans un local commercial, suspentes espacées au-delà des prescriptions, avec pose ultérieure de nombreux spots encastrés et d’un isolant complémentaire.",
      damage:
        "Fléchissement visible puis chute partielle de plaques, local fermé au public pendant les travaux de reprise.",
      liability:
        "La chute d’éléments constitue un danger et rend le local inutilisable. L’espacement des suspentes est imputable au plaquiste, la surcharge éventuelle à celui qui l’a ajoutée.",
      reserve:
        "Le partage de responsabilité dépend de la chronologie des interventions, établie par expertise.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Plaquiste créateur, seul",
      annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Plaquiste établi, cloisons et isolation",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "Entreprise de plâtrerie avec salariés",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel",
    "expérience du dirigeant en plâtrerie et en isolation",
    "présence d’ouvrages coupe-feu et acoustiques réglementés",
    "part d’isolation dans l’activité et technique employée",
    "type de clientèle : particuliers, promoteurs, entreprises générales",
    "part de travaux en logement collectif neuf",
    "sinistralité des cinq dernières années",
    "part sous-traitée et assurance des sous-traitants",
    "franchise retenue et plafonds de garantie",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation entre cloisons, doublages, plafonds et isolation",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant et types de chantiers réalisés",
    "diplômes : CAP plâtrier plaquiste, BP",
    "qualification RGE si vous réalisez de l’isolation aidée",
    "certificats de travail des employeurs précédents",
  ],
  startupNotes: [
    "Un plaquiste qui démarre est généralement bien accueilli par les assureurs, la sinistralité du lot restant modérée.",
    "Déclarez l’isolation dès le départ : elle est presque toujours réalisée avec les doublages, mais reste une activité identifiée.",
    "Si vous réalisez des ouvrages coupe-feu, conservez les procès-verbaux de classement des systèmes posés.",
    "En micro-entreprise, la fourniture des plaques et des isolants pèse dans le chiffre d’affaires déclaré.",
    "Signalez par écrit toute humidité résiduelle du gros œuvre avant de fermer une paroi.",
  ],
  comparisonPoints: [
    "libellé des activités : cloisons, doublages, plafonds, isolation",
    "couverture des ouvrages coupe-feu et acoustiques",
    "traitement de l’isolation par soufflage",
    "franchise par sinistre et plafonds de garantie",
    "garantie dommages aux existants, utile en rénovation",
    "extension RC professionnelle et dommages aux biens confiés",
    "prise en compte de la sous-traitance en période de forte activité",
    "conditions de couverture des travaux en site occupé",
    "modalités de paiement et de révision de la cotisation",
  ],
  faq: [
    {
      question: "La plâtrerie relève-t-elle vraiment de la garantie décennale ?",
      answer:
        "Oui dès que l’ouvrage remplit une fonction technique ou réglementaire : isolement acoustique entre logements, résistance au feu, tenue d’un plafond suspendu. Un simple défaut de bande d’enduit relève en revanche de la finition.",
    },
    {
      question: "Faut-il déclarer l’isolation quand on est plaquiste ?",
      answer:
        "Oui. L’isolation thermique intérieure est identifiée comme une activité à part entière dans les nomenclatures utilisées par les assureurs, même lorsqu’elle est réalisée en même temps que les doublages.",
    },
    {
      question: "Qui est responsable si l’humidité vient du gros œuvre ?",
      answer:
        "Le plaquiste doit signaler par écrit toute humidité anormale avant de fermer une paroi. Sans cette réserve, il lui est difficile d’écarter sa responsabilité lorsque des moisissures apparaissent derrière les plaques.",
    },
    {
      question: "Un plafond suspendu qui s’affaisse est-il couvert ?",
      answer:
        "Oui en principe, car la chute d’éléments crée un danger et rend le local inutilisable. La prise en charge dépend toutefois de l’origine du désordre, notamment d’une éventuelle surcharge ajoutée après réception.",
    },
    {
      question: "Un plaquiste qui fait aussi de la peinture doit-il le déclarer ?",
      answer:
        "Oui. Chaque activité exercée doit figurer sur l’attestation. Une activité non déclarée peut entraîner un refus de garantie sur les travaux correspondants.",
    },
    {
      question: "La cotisation d’un plaquiste est-elle élevée ?",
      answer:
        "Elle se situe généralement dans la partie basse des lots du bâtiment, en dessous des activités structurelles et d’étanchéité. Les repères précis dépendent des partenaires et de votre profil.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-peintre",
    "assurance-decennale-menuisier",
    "assurance-decennale-electricien",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-auto-entrepreneur/",
    "/decennale-creation-entreprise/",
    "/assurance-decennale-artisan/",
    "/guides/nomenclature-activites-btp/",
    "/guides/que-couvre-assurance-decennale/",
  ],
  extraSources: ["codeCivil1792_3"],
});
