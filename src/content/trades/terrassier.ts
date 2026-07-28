import { defineTrade, indicativeBand } from "@/content/_factories";
import { PLACEHOLDER } from "@/lib/placeholders";

export const terrassier = defineTrade({
  tradeValue: "terrassier",
  name: "Terrassier",
  pluralName: "les terrassiers",
  category: "preparation-amenagement-site",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale terrassier : prix et devis | DécennaleBTP.fr",
    description:
      "Terrassier, entreprise de travaux publics ou micro-entrepreneur : comparez des solutions de RC décennale selon vos travaux de sol, votre expérience et votre chiffre d’affaires.",
    primaryKeyword: "assurance décennale terrassier",
    secondaryKeywords: [
      "prix assurance décennale terrassier",
      "tarif décennale terrassement",
      "devis décennale terrassier",
      "décennale terrassier auto-entrepreneur",
      "décennale VRD terrassement",
      "travaux couverts terrassement",
    ],
  },
  h1: "Assurance décennale terrassier : comparez les offres adaptées à vos travaux de sol",
  shortAnswer:
    "Tous les travaux de terrassement ne relèvent pas de la garantie décennale, mais ceux qui conditionnent la stabilité d’un ouvrage y sont pleinement soumis : fond de fouille, plateforme, remblai sous dallage, soutènement. Pour un terrassier, la cotisation dépend du chiffre d’affaires, de l’expérience et du détail des prestations déclarées, notamment la présence de VRD, d’assainissement ou de soutènement.",
  summaryBullets: [
    "Un remblai mal compacté sous un dallage engage la garantie décennale.",
    "Les travaux purement extérieurs sans ouvrage peuvent relever de la seule RC pro.",
    "L’assainissement et les réseaux constituent des activités distinctes.",
    "L’étude de sol et les essais de compactage sont les meilleures preuves de bonne exécution.",
  ],
  specificity: [
    "Le terrassement est en amont de tout : une erreur de niveau, de compactage ou de drainage se répercute sur l’ensemble de l’ouvrage construit ensuite, souvent des années plus tard.",
    "La responsabilité décennale du terrassier n’est engagée que si son travail participe à un ouvrage. Un simple décapage de terrain ne suffit pas, un fond de fouille de fondation oui.",
    "Les litiges portent souvent sur la portance du sol et l’interprétation de l’étude géotechnique : le terrassier doit savoir démontrer qu’il a suivi les prescriptions reçues.",
    "Les travaux à proximité de réseaux existants exposent à des sinistres immédiats, qui relèvent de la RC professionnelle et non de la décennale.",
    "Les entreprises de terrassement réalisent fréquemment des prestations connexes, VRD, assainissement, enrochement, qui ne sont pas couvertes sans déclaration spécifique.",
  ],
  coveredWork: [
    "décapage, déblais et fouilles en pleine masse",
    "fond de fouille et réglage des niveaux de fondation",
    "plateforme et forme sous dallage ou sous voirie",
    "remblais techniques et compactage",
    "drainage périphérique de bâtiment",
    "talutage et petits ouvrages de soutènement courants",
    "tranchées pour réseaux liés au bâtiment construit",
  ],
  accessoryWork: [
    "évacuation et mise en dépôt des terres",
    "apport de matériaux de substitution",
    "nivellement de terrain autour de l’ouvrage",
    "création de pistes d’accès temporaires",
    "pose de fourreaux dans les tranchées réalisées",
  ],
  separatelyDeclaredWork: [
    "VRD complets, voiries et parkings",
    "assainissement non collectif et micro-stations",
    "réseaux d’assainissement collectif et regards",
    "fondations spéciales, micropieux, parois",
    "amélioration de sol par injection ou inclusions rigides",
    "enrochements et ouvrages de soutènement dimensionnés",
    "démolition et curage de bâtiment",
  ],
  commonExclusions: [
    "dommages aux réseaux existants, qui relèvent de la RC professionnelle",
    "travaux réalisés sans respecter l’étude géotechnique transmise",
    "activités non déclarées, notamment assainissement et soutènement dimensionné",
    "conséquences d’un défaut d’entretien des ouvrages de drainage",
    "aléas climatiques exceptionnels sans lien avec un défaut d’exécution",
    "travaux paysagers sans lien avec un ouvrage",
  ],
  workTable: [
    {
      work: "Fond de fouille pour fondations",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Conserver les niveaux relevés et le compte rendu de réception du fond de fouille.",
    },
    {
      work: "Remblai et forme sous dallage",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Les essais de compactage sont la preuve principale en cas de tassement.",
    },
    {
      work: "Drainage périphérique",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Pente, géotextile et exutoire doivent être documentés.",
    },
    {
      work: "Tranchées et pose de fourreaux",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Le raccordement des réseaux relève d’une autre activité.",
    },
    {
      work: "Assainissement non collectif",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Filière imposée par l’étude et le SPANC : activité à déclarer.",
    },
    {
      work: "Voirie et parking",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Relève de l’activité VRD, distincte du terrassement de bâtiment.",
    },
    {
      work: "Mur de soutènement dimensionné",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Ouvrage de structure : une note de calcul est généralement attendue.",
    },
  ],
  riskScenarios: [
    {
      title: "Tassement d’un dallage sur remblai insuffisamment compacté",
      context:
        "Terrassement et remblaiement d’une plateforme de 300 m² pour un hangar, remblai mis en œuvre en une seule couche épaisse sans essai de compactage.",
      damage:
        "Affaissements localisés du dallage coulé ensuite, fissuration en étoile, dénivelés de plusieurs centimètres empêchant la circulation des engins au bout de deux ans.",
      liability:
        "Le dallage est impropre à sa destination. Le défaut de compactage étant à l’origine du désordre, la responsabilité décennale de l’entreprise de terrassement peut être recherchée aux côtés de celle du maçon.",
      reserve:
        "Le partage de responsabilité est déterminé par l’expertise, en fonction des documents d’exécution et des essais disponibles.",
    },
    {
      title: "Fond de fouille non conforme à l’étude de sol",
      context:
        "Maison individuelle avec étude géotechnique prescrivant un ancrage à 1,20 m, fouilles réalisées à 0,80 m pour limiter les volumes de déblais.",
      damage:
        "Fissuration du bâtiment après deux étés secs, ouverture progressive des fissures en façade et déformation des menuiseries.",
      liability:
        "Le non-respect d’une prescription géotechnique écrite est un manquement caractérisé, susceptible d’engager la responsabilité du terrassier sur le fondement de l’atteinte à la solidité de l’ouvrage.",
      reserve:
        "La responsabilité peut être partagée avec l’entreprise de gros œuvre et la maîtrise d’œuvre selon les constats d’expertise.",
    },
    {
      title: "Drainage sans exutoire fonctionnel",
      context:
        "Drainage périphérique posé autour d’un sous-sol, raccordé à un puits perdu saturé et sans pente continue vers l’exutoire.",
      damage:
        "Remontées d’eau dans le sous-sol à chaque épisode pluvieux prolongé, humidité permanente, local de stockage inutilisable.",
      liability:
        "Le sous-sol est impropre à sa destination. Le dispositif de drainage, conçu et posé par l’entreprise, n’assure pas la fonction attendue.",
      reserve:
        "La prise en charge dépend du contrat, des activités déclarées et de la part imputable à la conception du projet.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Terrassier créateur, un engin",
      annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Terrassier établi, terrassement de bâtiment",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "Entreprise terrassement et VRD",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel",
    "expérience du dirigeant en travaux de sol",
    "présence d’activités VRD, assainissement ou soutènement",
    "type de clientèle : particuliers, constructeurs, marchés publics",
    "profondeur et complexité des fouilles réalisées",
    "matériel utilisé et capacité à réaliser des essais de compactage",
    "sinistralité des cinq dernières années",
    "part sous-traitée et assurance des sous-traitants",
    "franchise retenue et plafonds de garantie",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation entre terrassement, VRD et assainissement",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant et nature des chantiers réalisés",
    "liste du matériel et des engins",
    "diplômes ou titre professionnel en travaux publics",
    "certificats de travail des employeurs précédents",
  ],
  startupNotes: [
    "Un terrassier qui démarre doit préciser s’il travaille pour des particuliers ou en sous-traitance de constructeurs : le risque n’est pas apprécié de la même façon.",
    "Indiquez clairement si vous réalisez de l’assainissement : c’est l’activité la plus souvent oubliée dans les déclarations.",
    "Les essais de compactage et les comptes rendus de réception de fond de fouille sont peu coûteux et constituent votre meilleure défense.",
    "En micro-entreprise, la location d’engins avec chauffeur peut modifier la nature de la prestation : décrivez-la précisément.",
    "La date d’effet doit précéder le premier terrassement, y compris pour un chantier réalisé en sous-traitance.",
  ],
  comparisonPoints: [
    "libellé exact des activités : terrassement, VRD, assainissement, soutènement",
    "couverture des travaux de sol participant à la solidité de l’ouvrage",
    "extension RC professionnelle pour les dommages aux réseaux existants",
    "franchise par sinistre et franchise spécifique aux travaux de sol",
    "garantie dommages aux existants",
    "plafonds par sinistre et par année d’assurance",
    "prise en compte de la sous-traitance et de la location d’engins",
    "traitement des dommages immatériels consécutifs",
    "zone géographique d’intervention couverte",
  ],
  faq: [
    {
      question: "Un terrassier est-il obligé d’avoir une décennale ?",
      answer:
        "Dès lors que ses travaux participent à la réalisation d’un ouvrage, oui. Le terrassement de fondations, la plateforme sous dallage ou un soutènement relèvent de l’obligation d’assurance. Un simple nivellement de jardin sans ouvrage peut échapper à ce champ.",
    },
    {
      question: "Le terrassement pour un jardin est-il couvert ?",
      answer:
        "Les travaux paysagers sans lien avec un ouvrage ne relèvent généralement pas de la décennale mais de la responsabilité civile professionnelle. La frontière dépend de la présence ou non d’un ouvrage au sens de la loi.",
    },
    {
      question: "Qui est responsable en cas de tassement après remblaiement ?",
      answer:
        "Le terrassier peut être mis en cause s’il n’a pas respecté les prescriptions de compactage. Les essais réalisés et le procès-verbal de réception de la plateforme sont déterminants pour établir ou écarter sa responsabilité.",
    },
    {
      question: "Faut-il déclarer l’assainissement séparément ?",
      answer:
        "Oui. L’assainissement non collectif est une activité spécifique, avec ses propres exigences d’étude de filière et de mise en œuvre. Elle doit apparaître sur votre attestation d’assurance.",
    },
    {
      question: "Un dommage à une canalisation existante relève-t-il de la décennale ?",
      answer:
        "Non, il s’agit d’un dommage immédiat causé à un tiers ou à un existant, qui relève de la responsabilité civile professionnelle ou de la garantie dommages aux existants, selon le contrat.",
    },
    {
      question: "L’étude de sol est-elle indispensable ?",
      answer:
        "Elle n’est pas toujours contractuellement exigée du terrassier, mais elle sécurise fortement sa position. Lorsqu’une étude existe, il est essentiel d’en respecter les prescriptions et de conserver la preuve de leur application.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-macon",
    "assurance-decennale-vrd",
    "assurance-decennale-demolisseur",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/decennale-sous-traitant/",
    "/assurance-decennale-entreprise-btp/",
    "/guides/nomenclature-activites-btp/",
    "/guides/que-couvre-assurance-decennale/",
  ],
  extraSources: ["codeCivil1792_4_1"],
});
