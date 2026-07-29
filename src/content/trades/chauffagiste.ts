import { defineTrade, indicativeBand } from "@/content/_factories";

export const chauffagiste = defineTrade({
  tradeValue: "chauffagiste",
  name: "Chauffagiste",
  pluralName: "les chauffagistes",
  category: "lots-techniques",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale chauffagiste : prix et devis | DécennaleBTP.fr",
    description:
      "Chaudière, pompe à chaleur, plancher chauffant : comparez des solutions de RC décennale adaptées à vos installations de chauffage et à leur mise en service.",
    primaryKeyword: "assurance décennale chauffagiste",
    secondaryKeywords: [
      "prix assurance décennale chauffagiste",
      "tarif décennale chauffage",
      "devis décennale chauffagiste",
      "décennale pompe à chaleur",
      "décennale chauffagiste auto-entrepreneur",
      "travaux couverts chauffage",
    ],
  },
  h1: "Assurance décennale chauffagiste : comparez les offres adaptées à vos installations",
  shortAnswer:
    "Une installation de chauffage qui ne chauffe pas correctement le logement peut être jugée impropre à sa destination : la garantie décennale s’applique alors, même sans dommage matériel visible. Pour un chauffagiste, la cotisation dépend du chiffre d’affaires, de l’expérience et des équipements déclarés, les pompes à chaleur et le solaire thermique étant les postes les plus surveillés.",
  summaryBullets: [
    "Le sous-dimensionnement d’une installation est un motif fréquent de litige.",
    "Pompe à chaleur, solaire et bois relèvent d’activités distinctes selon les contrats.",
    "Le plancher chauffant est indissociable de l’ouvrage, donc pleinement décennal.",
    "L’entretien annuel reste à la charge du client après réception.",
  ],
  specificity: [
    "Le chauffage se juge sur un résultat mesurable : la température atteinte. Une installation techniquement bien posée mais sous-dimensionnée peut être considérée comme impropre à sa destination.",
    "Le plancher chauffant est encastré dans la chape, donc indissociable : sa reprise implique la destruction du sol et son coût dépasse largement celui du marché initial.",
    "Les pompes à chaleur cumulent plusieurs risques : dimensionnement, acoustique, performance réelle, mise en service et raccordement hydraulique.",
    "La combustion introduit des risques particuliers : évacuation des fumées, ventilation, monoxyde de carbone. Les conséquences peuvent être corporelles.",
    "L’écart entre la performance annoncée dans une étude et la consommation constatée est source de contentieux, notamment lorsque des aides publiques ont été mobilisées.",
  ],
  coveredWork: [
    "installation de chaudières gaz, fioul ou électriques",
    "réseaux de chauffage central et distribution hydraulique",
    "pose de radiateurs, sèche-serviettes et émetteurs",
    "planchers chauffants hydrauliques",
    "production d’eau chaude sanitaire couplée au chauffage",
    "régulation, thermostats et équilibrage des réseaux",
    "raccordement et mise en service des équipements installés",
    "remplacement d’un générateur sur une installation existante",
  ],
  accessoryWork: [
    "reprise ponctuelle de plomberie liée au raccordement",
    "percements et rebouchages pour le passage des réseaux",
    "raccordement électrique du générateur sur alimentation existante",
    "calorifugeage des réseaux posés",
    "dépose et évacuation de l’ancien équipement",
  ],
  separatelyDeclaredWork: [
    "pompes à chaleur air-eau, air-air et géothermiques",
    "solaire thermique et chauffe-eau thermodynamique",
    "chaudières et poêles à bois, granulés, et conduits de fumée",
    "climatisation et ventilation mécanique contrôlée",
    "réseaux de gaz extérieurs, citernes et stockage",
    "plomberie sanitaire complète selon les contrats",
    "réseaux enterrés et capteurs géothermiques",
  ],
  commonExclusions: [
    "défaut d’entretien annuel de l’équipement après réception",
    "activités non déclarées, notamment pompes à chaleur et bois",
    "matériel fourni par le client, hors garantie du fabricant",
    "usure normale des pièces d’usure et consommables",
    "dommages relevant de la seule garantie de bon fonctionnement sur un équipement dissociable",
    "travaux réalisés sans les habilitations gaz ou fluides frigorigènes requises",
  ],
  workTable: [
    {
      work: "Chaudière et réseau de chauffage central",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Conserver la note de dimensionnement et le rapport de mise en service.",
    },
    {
      work: "Plancher chauffant hydraulique",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Élément indissociable : toute reprise implique de casser la chape.",
    },
    {
      work: "Radiateurs et émetteurs",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Un émetteur remplaçable relève souvent du bon fonctionnement.",
    },
    {
      work: "Pompe à chaleur air-eau",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Dimensionnement et nuisances sonores fréquemment contestés.",
    },
    {
      work: "Poêle ou chaudière bois et conduit de fumée",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Risque incendie : activité fumisterie souvent distincte.",
    },
    {
      work: "Solaire thermique",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Traversée de couverture et performance à garantir.",
    },
    {
      work: "Climatisation et VMC",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Relève du génie climatique, avec attestation fluides frigorigènes.",
    },
  ],
  riskScenarios: [
    {
      title: "Pompe à chaleur sous-dimensionnée pour le logement",
      context:
        "Remplacement d’une chaudière fioul par une pompe à chaleur air-eau dans une maison ancienne peu isolée, dimensionnement réalisé sans étude thermique ni relevé des déperditions.",
      damage:
        "Température de 16 °C dans les pièces principales par temps froid, appoint électrique fonctionnant en permanence, factures très supérieures aux prévisions annoncées.",
      liability:
        "Le logement n’est pas chauffé à un niveau normal : l’impropriété à destination peut être retenue. Le défaut d’étude de dimensionnement engage la responsabilité de l’installateur.",
      reserve:
        "La qualification du désordre et la part imputable à l’isolation du bâtiment relèvent de l’expertise.",
    },
    {
      title: "Fuite sur un plancher chauffant encastré",
      context:
        "Pose d’un plancher chauffant hydraulique avec plusieurs raccords laissés dans la dalle et essai d’étanchéité réalisé sans maintien en pression durant le coulage de la chape.",
      damage:
        "Fuite détectée deux ans après la réception, humidité remontant dans les revêtements de sol, nécessité de casser la chape sur une grande surface pour localiser et reprendre la fuite.",
      liability:
        "L’installation est indissociable de l’ouvrage et le logement devient partiellement inutilisable. La responsabilité décennale de l’entreprise peut être recherchée.",
      reserve:
        "La cause de la fuite, éventuellement liée à un dommage causé par un autre corps d’état, est déterminée par expertise.",
    },
    {
      title: "Évacuation de fumées non conforme après pose d’un poêle",
      context:
        "Installation d’un poêle à granulés avec conduit concentrique traversant un mur en ossature bois, sans respect des distances de sécurité aux matériaux combustibles.",
      damage:
        "Échauffement de la structure bois, brunissement puis carbonisation locale détectée lors d’un entretien, risque d’incendie caractérisé.",
      liability:
        "Le danger rend le logement impropre à sa destination. Le non-respect des distances de sécurité est un manquement direct aux règles de l’art de la fumisterie.",
      reserve:
        "La garantie suppose que l’activité fumisterie ou installation d’appareils à bois figure sur l’attestation.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Chauffagiste créateur, seul",
      annualRevenue: "CA prévisionnel 80 000 €",
      experience: "Expérience 3 ans",
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Chauffagiste établi, chauffage et sanitaire",
      annualRevenue: "CA 150 000 €",
      experience: "Expérience 8 ans",
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "Entreprise de génie climatique avec salariés",
      annualRevenue: "CA 350 000 €",
      experience: "Expérience 12 ans",
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel, matériel compris",
    "expérience du dirigeant en génie climatique",
    "équipements déclarés : gaz, fioul, pompe à chaleur, bois, solaire",
    "part de pompes à chaleur dans l’activité",
    "présence de la fumisterie et des conduits de fumée",
    "type de clientèle : particuliers, collectif, tertiaire",
    "sinistralité des cinq dernières années",
    "qualifications : RGE, QualiPAC, attestation fluides frigorigènes",
    "franchise retenue et plafonds de garantie",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation par type d’équipement installé",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant et types d’installations réalisées",
    "diplômes : CAP installateur thermique, BP, BTS fluides énergies",
    "attestation d’aptitude fluides frigorigènes et qualifications RGE",
    "certificats de travail des employeurs précédents",
  ],
  startupNotes: [
    "Un chauffagiste qui démarre doit préciser les équipements qu’il installe réellement : la pompe à chaleur n’est pas toujours accordée sans référence.",
    "Les notes de dimensionnement et les rapports de mise en service sont vos meilleures preuves en cas de contestation de performance.",
    "Si vous installez des appareils à bois, déclarez la fumisterie : c’est l’oubli le plus coûteux du métier.",
    "En micro-entreprise, le prix des générateurs pèse fortement dans le chiffre d’affaires : anticipez le seuil applicable.",
    "L’attestation de capacité fluides frigorigènes est une obligation réglementaire distincte de l’assurance.",
  ],
  comparisonPoints: [
    "libellé exact des équipements déclarés",
    "présence de la pompe à chaleur, du bois et du solaire",
    "traitement de la garantie de bon fonctionnement des équipements dissociables",
    "franchise par sinistre et franchise dégât des eaux",
    "garantie dommages aux existants, utile en remplacement de générateur",
    "extension RC professionnelle et dommages immatériels consécutifs",
    "plafonds par sinistre et par année d’assurance",
    "couverture des dommages corporels liés à la combustion",
    "prise en compte de la sous-traitance et de la fourniture",
  ],
  faq: [
    {
      question: "Une installation de chauffage relève-t-elle de la décennale ?",
      answer:
        "Oui lorsqu’elle est indissociable de l’ouvrage, comme un plancher chauffant ou un réseau encastré, ou lorsque son insuffisance rend le logement impropre à sa destination. Un générateur simplement remplaçable relève plutôt de la garantie de bon fonctionnement de deux ans.",
    },
    {
      question: "Une pompe à chaleur qui ne chauffe pas assez est-elle un sinistre décennal ?",
      answer:
        "Elle peut l’être si le logement n’atteint pas une température normale, ce qui caractérise une impropriété à destination. Le dimensionnement, l’étude thermique et les engagements écrits pris envers le client sont alors examinés de près.",
    },
    {
      question: "Faut-il déclarer la pose de poêles à bois séparément ?",
      answer:
        "Oui, dans la plupart des contrats. L’installation d’appareils à bois et la fumisterie constituent des activités distinctes, en raison du risque incendie et des exigences propres aux conduits de fumée.",
    },
    {
      question: "Le défaut d’entretien peut-il faire perdre la garantie ?",
      answer:
        "L’entretien annuel incombe au client après réception. Un désordre résultant exclusivement d’un défaut d’entretien n’est pas garanti par l’assurance décennale de l’installateur.",
    },
    {
      question: "Un plombier-chauffagiste doit-il déclarer deux activités ?",
      answer:
        "Oui. La plomberie sanitaire et le chauffage sont deux activités distinctes dans les nomenclatures utilisées par les assureurs. Les deux doivent apparaître sur l’attestation si vous les exercez.",
    },
    {
      question: "Les aides financières du client engagent-elles l’installateur ?",
      answer:
        "Les dispositifs d’aide imposent des exigences de qualification et parfois de performance. Un écart important entre la performance annoncée et la réalité peut renforcer la mise en cause de l’entreprise, indépendamment de l’assurance.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-plombier",
    "assurance-decennale-electricien",
    "assurance-decennale-climaticien",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/decennale-auto-entrepreneur/",
    "/assurance-decennale-en-ligne/",
    "/guides/rc-pro-vs-decennale/",
    "/guides/que-couvre-assurance-decennale/",
  ],
  extraSources: ["codeCivil1792_2", "codeCivil1792_3"],
});
