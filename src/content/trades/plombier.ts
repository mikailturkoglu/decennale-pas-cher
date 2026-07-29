import { defineTrade, indicativeBand } from "@/content/_factories";

export const plombier = defineTrade({
  tradeValue: "plombier",
  name: "Plombier",
  pluralName: "les plombiers",
  category: "lots-techniques",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale plombier : prix et devis | DécennaleBTP.fr",
    description:
      "Réseaux d’eau, évacuations, sanitaires, salle de bains : comparez des solutions de RC décennale adaptées à vos installations et aux risques d’infiltration.",
    primaryKeyword: "assurance décennale plombier",
    secondaryKeywords: [
      "prix assurance décennale plombier",
      "tarif décennale plomberie",
      "devis décennale plombier",
      "décennale plombier auto-entrepreneur",
      "décennale plombier chauffagiste",
      "travaux couverts plomberie",
    ],
  },
  h1: "Assurance décennale plombier : comparez les offres adaptées à vos installations",
  shortAnswer:
    "Une fuite encastrée, une évacuation mal pentée ou une douche à l’italienne non étanche peuvent rendre un logement impropre à sa destination : la garantie décennale est alors engagée. Pour un plombier, la cotisation dépend du chiffre d’affaires, de l’expérience et du périmètre déclaré : sanitaire seul, plomberie et chauffage, ou installation de pompes à chaleur et de réseaux enterrés.",
  summaryBullets: [
    "Les réseaux encastrés et les douches à l’italienne sont les postes les plus sinistrés.",
    "Plomberie et chauffage sont deux activités distinctes pour les assureurs.",
    "Certains équipements relèvent de la garantie de bon fonctionnement, pas de la décennale.",
    "L’attestation est demandée par les syndics, les promoteurs et de nombreux particuliers.",
  ],
  specificity: [
    "Le plombier travaille sur des réseaux invisibles après travaux : une fuite dans une chape ou une cloison n’est détectée que plusieurs mois ou années plus tard, avec des dommages déjà importants.",
    "Le dégât des eaux consécutif à un défaut d’exécution mobilise plusieurs assurances : décennale de l’entreprise, multirisque de l’occupant, dommages-ouvrage éventuelle. La coordination des expertises est fréquente.",
    "La distinction entre élément d’équipement indissociable et dissociable est déterminante : un réseau encastré relève de la décennale, un robinet remplaçable relève plutôt de la garantie de bon fonctionnement.",
    "Les douches à l’italienne cumulent plomberie, étanchéité et carrelage. Le partage de responsabilité entre corps d’état est un contentieux classique.",
    "Beaucoup de plombiers réalisent aussi du chauffage. Une pompe à chaleur mal dimensionnée peut être jugée impropre à sa destination si elle ne chauffe pas le logement.",
  ],
  coveredWork: [
    "réseaux d’alimentation en eau froide et eau chaude sanitaire, encastrés ou apparents",
    "réseaux d’évacuation intérieurs et colonnes de chute",
    "pose d’appareils sanitaires : WC, lavabos, baignoires, receveurs",
    "installation de production d’eau chaude : ballons, chauffe-eau",
    "raccordement des appareils électroménagers au réseau d’eau",
    "réseaux gaz intérieurs, dans la limite des habilitations requises",
    "création de salles de bains, y compris receveurs extra-plats",
    "traitement de l’eau : adoucisseur, filtration",
  ],
  accessoryWork: [
    "percements et rebouchages nécessaires au passage des réseaux",
    "reprise ponctuelle de carrelage ou de cloison après intervention",
    "isolation des canalisations et calorifugeage",
    "pose de trappes de visite et d’habillages techniques",
    "raccordement aux réseaux extérieurs existants en limite de propriété",
  ],
  separatelyDeclaredWork: [
    "chauffage central, plancher chauffant et émetteurs",
    "pompes à chaleur air-eau et air-air",
    "solaire thermique et chauffe-eau thermodynamique selon les contrats",
    "étanchéité sous carrelage des douches à l’italienne, si vous la réalisez vous-même",
    "réseaux enterrés d’assainissement, fosses et micro-stations",
    "réseaux de gaz extérieurs et citernes",
    "climatisation et ventilation mécanique",
  ],
  commonExclusions: [
    "matériel fourni par le client, hors garantie du fabricant",
    "activités non déclarées, notamment le chauffage et l’assainissement",
    "défaut d’entretien des appareils après réception",
    "gel des installations non protégées lorsque le contrat l’exclut",
    "dommages relevant de la seule garantie du fabricant sur un équipement dissociable",
    "travaux réalisés sans les habilitations gaz ou électriques requises",
  ],
  workTable: [
    {
      work: "Réseaux encastrés eau froide et eau chaude",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Conserver le plan des réseaux et les preuves d’essai de pression.",
    },
    {
      work: "Évacuations et colonnes de chute",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "La pente et la ventilation primaire conditionnent la conformité.",
    },
    {
      work: "Douche à l’italienne : partie plomberie",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Bien délimiter par écrit qui réalise l’étanchéité sous carrelage.",
    },
    {
      work: "Étanchéité sous carrelage (SEL, SPEC)",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Souvent rattachée au lot carrelage : à clarifier avant chantier.",
    },
    {
      work: "Chauffage central et plancher chauffant",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité distincte, à déclarer même si elle reste minoritaire.",
    },
    {
      work: "Pompe à chaleur",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Le dimensionnement peut être discuté au titre de l’impropriété.",
    },
    {
      work: "Assainissement non collectif",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité spécifique, avec étude de filière attendue.",
    },
  ],
  riskScenarios: [
    {
      title: "Fuite sur un raccord encastré dans une chape",
      context:
        "Rénovation complète d’un appartement, alimentation en tubes multicouches avec plusieurs raccords laissés dans la chape sans trappe de visite.",
      damage:
        "Fuite lente détectée quatorze mois après la réception, décollement du parquet dans deux pièces et infiltration chez le voisin du dessous.",
      liability:
        "Le logement est temporairement impropre à sa destination et les réseaux sont indissociables de l’ouvrage. La responsabilité décennale du plombier peut être recherchée.",
      reserve:
        "L’articulation avec la multirisque habitation et l’éventuelle dommages-ouvrage est déterminée par l’expertise.",
    },
    {
      title: "Douche à l’italienne non étanche",
      context:
        "Création d’une salle de bains avec receveur extra-plat et siphon de sol, carrelage posé par un autre intervenant sans système d’étanchéité liquide sous carrelage.",
      damage:
        "Humidité persistante dans la cloison mitoyenne, moisissures dans la chambre voisine, plinthes et bas de cloison dégradés au bout de deux ans.",
      liability:
        "L’ouvrage est impropre à sa destination. La responsabilité est partagée selon le lot ayant réellement manqué à ses obligations, ce qui suppose une définition écrite des tâches de chacun.",
      reserve:
        "L’imputation dépend des pièces du marché, des activités déclarées et de l’expertise.",
    },
    {
      title: "Évacuation à contre-pente dans une extension",
      context:
        "Extension de maison avec cuisine et WC, réseau d’évacuation posé avec une pente insuffisante sur une longueur de douze mètres.",
      damage:
        "Refoulements répétés, engorgements mensuels, cuisine inutilisable plusieurs jours par mois, nécessité de casser le dallage pour reprendre le réseau.",
      liability:
        "L’absence de fonctionnement normal du réseau caractérise une impropriété à destination. Le défaut de pente est un manquement direct aux règles de l’art du lot plomberie.",
      reserve:
        "Le montant des travaux de reprise et la prise en charge dépendent du contrat et de l’expertise.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Plombier créateur, seul",
      annualRevenue: "CA prévisionnel 80 000 €",
      experience: "Expérience 3 ans",
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Plombier-chauffagiste établi",
      annualRevenue: "CA 150 000 €",
      experience: "Expérience 8 ans",
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "TPE de plomberie avec salariés",
      annualRevenue: "CA 350 000 €",
      experience: "Expérience 12 ans",
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel",
    "expérience du dirigeant en plomberie sanitaire et en chauffage",
    "périmètre déclaré : sanitaire seul ou plomberie et chauffage",
    "présence d’activités majorantes : pompes à chaleur, assainissement, gaz",
    "part de travaux en logement collectif, plus exposé aux dégâts des eaux",
    "sinistralité des cinq dernières années",
    "part sous-traitée et assurance des sous-traitants",
    "franchise choisie et plafonds de garantie",
    "qualifications professionnelles et habilitations gaz",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation entre sanitaire, chauffage et autres prestations",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant et types d’installations réalisées",
    "diplômes : CAP installateur sanitaire, BP, titre professionnel",
    "habilitations gaz le cas échéant",
    "certificats de travail des employeurs précédents",
  ],
  startupNotes: [
    "Un plombier qui crée son entreprise est évalué sur son expérience du métier : indiquez précisément les types d’installations que vous avez réalisées en tant que salarié.",
    "Déclarer le chauffage dès le départ évite d’intervenir hors garantie sur un premier chantier mixte.",
    "En micro-entreprise, le chiffre d’affaires prévisionnel doit refléter la réalité des chantiers envisagés, fourniture comprise si vous la facturez.",
    "Les habilitations gaz doivent être obtenues avant d’intervenir sur ce type de réseau, indépendamment de l’assurance.",
    "Prévoyez une date d’effet couvrant la totalité de votre premier chantier, y compris la phase de préparation.",
  ],
  comparisonPoints: [
    "libellé exact des activités : sanitaire, chauffage, gaz, assainissement",
    "traitement des réseaux encastrés et des éléments d’équipement",
    "présence de la garantie de bon fonctionnement pour les équipements dissociables",
    "franchise par sinistre et franchise spécifique dégât des eaux",
    "garantie dommages aux existants, essentielle en rénovation",
    "extension RC professionnelle pour les dommages immatériels",
    "plafonds par sinistre et par année",
    "prise en compte de la fourniture de matériel",
    "conditions de prise en charge de la recherche de fuite",
  ],
  faq: [
    {
      question: "Une fuite d’eau relève-t-elle toujours de la garantie décennale ?",
      answer:
        "Non. La décennale s’applique lorsque le défaut affecte la solidité de l’ouvrage ou le rend impropre à sa destination, typiquement une fuite sur réseau encastré. Une fuite sur un robinet remplaçable relève plutôt de la garantie de bon fonctionnement ou de la garantie du fabricant.",
    },
    {
      question: "Un plombier doit-il déclarer le chauffage séparément ?",
      answer:
        "Oui. Plomberie sanitaire et chauffage sont deux activités distinctes. Si vous installez des chaudières, des planchers chauffants ou des pompes à chaleur, ces activités doivent figurer sur votre attestation.",
    },
    {
      question: "Qui est responsable de l’étanchéité d’une douche à l’italienne ?",
      answer:
        "Cela dépend de la répartition écrite des tâches. Le plombier réalise l’évacuation et le receveur, le carreleur pose souvent le système d’étanchéité sous carrelage. Sans définition claire dans le devis, la responsabilité est fréquemment partagée après expertise.",
    },
    {
      question: "La pose d’une pompe à chaleur augmente-t-elle la cotisation ?",
      answer:
        "Généralement oui, car les litiges de dimensionnement et de performance sont fréquents. L’activité doit être déclarée même si elle ne représente qu’une petite part de votre chiffre d’affaires.",
    },
    {
      question: "Le matériel fourni par le client est-il couvert ?",
      answer:
        "Votre décennale couvre votre travail de pose, pas la qualité intrinsèque d’un matériel que vous n’avez pas fourni. Il est prudent de mentionner par écrit l’origine du matériel imposé par le client.",
    },
    {
      question: "Un plombier auto-entrepreneur est-il concerné par l’obligation ?",
      answer:
        "Oui. L’obligation d’assurance décennale dépend de la nature des travaux, pas du régime fiscal. Un micro-entrepreneur du bâtiment doit être assuré avant le premier chantier et mentionner son assurance sur ses devis et factures.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-chauffagiste",
    "assurance-decennale-carreleur",
    "assurance-decennale-electricien",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-auto-entrepreneur/",
    "/decennale-creation-entreprise/",
    "/assurance-decennale-artisan/",
    "/guides/que-couvre-assurance-decennale/",
    "/guides/rc-pro-vs-decennale/",
  ],
  extraSources: ["codeCivil1792_2", "codeCivil1792_3"],
});
