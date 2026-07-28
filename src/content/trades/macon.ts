import { defineTrade, indicativeBand } from "@/content/_factories";
import { PLACEHOLDER } from "@/lib/placeholders";

export const macon = defineTrade({
  tradeValue: "macon",
  name: "Maçon",
  pluralName: "les maçons",
  category: "gros-oeuvre-structure",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale maçon : prix et devis | DécennaleBTP.fr",
    description:
      "Maçon, entreprise de gros œuvre ou micro-entrepreneur : comparez des solutions de RC décennale selon vos activités déclarées, votre expérience et votre chiffre d’affaires.",
    primaryKeyword: "assurance décennale maçon",
    secondaryKeywords: [
      "prix assurance décennale maçon",
      "tarif décennale maçonnerie",
      "devis décennale maçon",
      "décennale maçon pas chère",
      "décennale maçon auto-entrepreneur",
      "travaux couverts maçonnerie",
    ],
  },
  h1: "Assurance décennale maçon : comparez les offres adaptées à vos travaux",
  shortAnswer:
    "La maçonnerie touche presque toujours à la solidité de l’ouvrage : l’assurance de responsabilité civile décennale est obligatoire avant la réception du premier chantier. Le tarif dépend surtout de votre chiffre d’affaires, de votre expérience du gros œuvre et de la liste précise des travaux que vous déclarez : béton armé, fondations, dallage, reprise en sous-œuvre ou ouverture de baies ne sont pas traités de la même façon par les assureurs.",
  summaryBullets: [
    "Obligation d’assurance avant l’ouverture du chantier, y compris en micro-entreprise.",
    "Métier classé en gros œuvre : les critères d’expérience sont examinés de près.",
    "Les travaux structurels doivent être détaillés un par un dans la demande.",
    "Un dossier complet (expérience, CA, sinistralité) accélère l’étude.",
  ],
  specificity: [
    "La maçonnerie porte l’ouvrage : un désordre de structure entraîne presque systématiquement une atteinte à la solidité, donc une prise en charge décennale et non une simple garantie de parfait achèvement.",
    "Les coûts de réparation sont élevés car ils imposent souvent des reprises lourdes : étaiement, démolition partielle, reconstruction, relogement des occupants.",
    "Les désordres apparaissent tardivement. Une fissure évolutive peut se déclarer trois ou quatre ans après la réception, dans la période où beaucoup d’entreprises ont changé d’assureur.",
    "Le métier est fortement lié au sol. L’absence d’étude géotechnique ou son non-respect est un motif fréquent de contestation de garantie.",
    "Les maçons interviennent souvent sur de l’existant. Les reprises en sous-œuvre et les ouvertures dans un mur porteur sont scrutées par les assureurs, parfois exclues sans déclaration spécifique.",
  ],
  coveredWork: [
    "maçonnerie de petits éléments (blocs béton, briques, pierre)",
    "béton armé coulé en place pour bâtiments courants",
    "fondations superficielles : semelles filantes, semelles isolées, radiers courants",
    "murs porteurs, chaînages, poteaux, linteaux",
    "dallage sur terre-plein et planchers béton",
    "chape et forme de pente",
    "enduits de façade traditionnels et enduits ciment",
    "ouverture de baies avec pose de linteau dans une structure existante",
  ],
  accessoryWork: [
    "terrassement lié directement aux fondations de l’ouvrage réalisé",
    "canalisations enterrées et évacuations raccordées au bâtiment construit",
    "scellement et calfeutrement des menuiseries posées par un autre corps d’état",
    "démolition partielle nécessaire au chantier de maçonnerie",
    "fumisterie accessoire : conduit maçonné réalisé dans le cadre du gros œuvre",
  ],
  separatelyDeclaredWork: [
    "reprise en sous-œuvre et confortement de fondations existantes",
    "fondations spéciales : micropieux, pieux, parois",
    "béton précontraint et éléments préfabriqués porteurs",
    "charpente et couverture, y compris en petite dimension",
    "étanchéité de toiture-terrasse, cuvelage, étanchéité de sous-sol",
    "VRD complets et voiries, au-delà des réseaux liés au bâtiment",
    "piscines et bassins",
  ],
  commonExclusions: [
    "travaux réalisés selon une technique non courante sans avis technique ni ATEx",
    "activités exercées sans figurer sur l’attestation d’assurance",
    "dommages aux ouvrages existants non touchés par vos travaux, sauf garantie spécifique",
    "défaut d’entretien et usure normale après réception",
    "dommages purement esthétiques n’affectant ni la solidité ni la destination de l’ouvrage",
    "travaux sous-traités à une entreprise non assurée, selon les conditions du contrat",
  ],
  workTable: [
    {
      work: "Semelles filantes et radier courant",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Une étude de sol exploitée est souvent attendue en zone argileuse.",
    },
    {
      work: "Dallage sur terre-plein",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Épaisseur, treillis et joints de fractionnement conditionnent la tenue.",
    },
    {
      work: "Ouverture de baie dans un mur porteur",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Vérifier que la reprise de charge et l’étaiement sont bien couverts.",
    },
    {
      work: "Reprise en sous-œuvre",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité souvent tarifée à part et parfois refusée aux jeunes entreprises.",
    },
    {
      work: "Enduit de façade",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Distinguer l’enduit traditionnel de l’enduit sur isolant (ITE).",
    },
    {
      work: "Isolation thermique par l’extérieur",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité distincte, avec exigences de système et de mise en œuvre.",
    },
    {
      work: "Terrassement de masse pour un tiers",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Accessoire uniquement s’il est lié à votre propre ouvrage.",
    },
  ],
  riskScenarios: [
    {
      title: "Fissuration traversante d’un mur porteur après extension",
      context:
        "Extension maçonnée de 30 m² accolée à une maison des années 1970, réalisée sans joint de rupture entre l’existant et la construction neuve.",
      damage:
        "Fissures traversantes en escalier au niveau de la liaison, évolutives sur deux hivers, avec passage d’air et d’eau.",
      liability:
        "Le désordre affecte la solidité de l’ouvrage et rend l’extension impropre à sa destination. La responsabilité décennale de l’entreprise de maçonnerie peut être recherchée sur le fondement de l’article 1792 du Code civil.",
      reserve:
        "La prise en charge dépend du contrat, des activités déclarées et des conclusions de l’expertise.",
    },
    {
      title: "Tassement différentiel de fondations en sol argileux",
      context:
        "Maison individuelle fondée sur semelles filantes à 60 cm de profondeur, sans exploitation de l’étude géotechnique remise par le maître d’ouvrage.",
      damage:
        "Basculement d’un angle du bâtiment, fissuration en façade, portes et fenêtres qui ne ferment plus après deux périodes de sécheresse.",
      liability:
        "L’insuffisance d’ancrage au regard de la nature du sol est un manquement aux règles de l’art. La reprise implique généralement des micropieux et un confortement, pour un coût largement supérieur au montant du marché initial.",
      reserve:
        "La qualification du sinistre et le partage éventuel de responsabilité relèvent de l’expertise. La reprise en sous-œuvre peut nécessiter une activité déclarée distincte.",
    },
    {
      title: "Affaissement d’un dallage industriel",
      context:
        "Dallage de 400 m² coulé sur un remblai insuffisamment compacté, dans un local destiné au stockage de charges lourdes.",
      damage:
        "Affaissement localisé de plusieurs centimètres, faïençage important, dallage inutilisable pour la circulation d’un chariot élévateur.",
      liability:
        "Le dallage ne remplit plus la fonction attendue : l’impropriété à destination peut être retenue même en l’absence d’atteinte à la structure du bâtiment.",
      reserve:
        "La prise en charge suppose que l’activité dallage industriel figure bien parmi les activités déclarées.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Maçon créateur, seul",
      annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Artisan maçon établi",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "TPE de gros œuvre avec salariés",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel, principale assiette de calcul de la cotisation",
    "ancienneté de l’entreprise et expérience personnelle du dirigeant en gros œuvre",
    "présence de travaux structurels sensibles : reprise en sous-œuvre, ouverture de baies, fondations profondes",
    "part du chiffre d’affaires sous-traitée et assurance des sous-traitants",
    "nombre d’activités déclarées : un maçon multi-lots coûte plus cher qu’un maçon strictement gros œuvre",
    "sinistralité des cinq dernières années, telle qu’elle figure sur le relevé de sinistralité",
    "montant moyen et nature des chantiers : marchés publics, promoteurs, particuliers",
    "niveau de franchise choisi et étendue des garanties annexes",
    "techniques employées et respect des règles de l’art documenté (DTU, étude de sol)",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création en cours",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel détaillé",
    "ventilation du chiffre d’affaires par type de travaux",
    "relevé de sinistralité de l’assureur précédent, sur les cinq dernières années",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant détaillant les chantiers de gros œuvre réalisés",
    "diplômes du bâtiment : CAP, BP, bac professionnel, titre professionnel",
    "certificats de travail des employeurs précédents",
    "deux ou trois devis ou marchés représentatifs de votre activité",
  ],
  startupNotes: [
    "Un maçon qui crée son entreprise peut être assuré : l’expérience personnelle compte davantage que l’ancienneté de la société.",
    "Les certificats de travail et bulletins de salaire d’ancien maçon salarié sont les justificatifs les plus efficaces pour attester de l’expérience du gros œuvre.",
    "En micro-entreprise, la déclaration du chiffre d’affaires prévisionnel doit rester réaliste : un CA sous-évalué peut entraîner une régularisation en fin d’année.",
    "La date d’effet doit précéder l’ouverture du premier chantier, et non la signature du devis client.",
    "Un maçon sans aucune expérience en gros œuvre se voit plus souvent orienter vers un périmètre d’activités réduit au démarrage.",
  ],
  comparisonPoints: [
    "libellé exact des activités de maçonnerie retenues sur l’attestation",
    "présence ou absence des travaux sur existant et des reprises en sous-œuvre",
    "montant de la franchise par sinistre et son éventuelle majoration sur les travaux structurels",
    "garantie des travaux avant réception et garantie effondrement",
    "extension RC professionnelle et dommages aux existants",
    "plafonds d’indemnisation par sinistre et par année d’assurance",
    "prise en compte du chiffre d’affaires sous-traité",
    "reprise du passé pour les chantiers déjà réalisés",
    "modalités de paiement, mensuel ou annuel, et conditions de révision",
  ],
  faq: [
    {
      question: "Un maçon auto-entrepreneur doit-il souscrire une décennale ?",
      answer:
        "Oui. L’obligation d’assurance ne dépend pas du statut juridique mais de la nature des travaux réalisés. Un maçon en micro-entreprise doit être assuré avant l’ouverture de son premier chantier et doit pouvoir présenter son attestation à son client.",
    },
    {
      question: "L’ouverture d’une baie dans un mur porteur est-elle couverte automatiquement ?",
      answer:
        "Pas toujours. Beaucoup de contrats couvrent les travaux sur existant, mais certains limitent ou excluent la reprise de charge. Vérifiez le libellé de l’activité déclarée et demandez une confirmation écrite si vous réalisez régulièrement ce type d’intervention.",
    },
    {
      question: "Faut-il déclarer le terrassement quand on est maçon ?",
      answer:
        "Le terrassement réalisé pour vos propres fondations est généralement considéré comme accessoire. En revanche, si vous vendez des prestations de terrassement à des tiers, l’activité doit figurer explicitement sur votre attestation.",
    },
    {
      question: "Que se passe-t-il si un désordre concerne une activité non déclarée ?",
      answer:
        "L’assureur peut refuser sa garantie pour les travaux ne figurant pas sur l’attestation. L’entreprise reste responsable sur ses fonds propres pendant dix ans, ce qui met souvent en cause sa survie économique.",
    },
    {
      question: "Comment est calculé le prix d’une décennale de maçon ?",
      answer:
        "La cotisation est généralement assise sur le chiffre d’affaires, corrigée par l’expérience, la nature des travaux déclarés, la sinistralité et le niveau de franchise. Deux maçons au même chiffre d’affaires peuvent donc payer des cotisations très différentes.",
    },
    {
      question: "Une étude de sol est-elle obligatoire pour être couvert ?",
      answer:
        "L’étude géotechnique n’est pas systématiquement exigée par le contrat, mais son absence en zone argileuse fragilise considérablement la position de l’entreprise en cas de tassement. Conservez toujours l’étude remise et la trace de son exploitation.",
    },
    {
      question: "Peut-on changer d’assureur en cours de contrat ?",
      answer:
        "Oui, dans les conditions et délais prévus par le contrat et par le Code des assurances. Il faut veiller à ne créer aucune interruption de garantie entre l’ancien et le nouveau contrat.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-terrassier",
    "assurance-decennale-carreleur",
    "assurance-decennale-facadier",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/decennale-auto-entrepreneur/",
    "/assurance-decennale-pas-chere/",
    "/attestation-decennale-rapide/",
    "/guides/nomenclature-activites-btp/",
    "/guides/que-couvre-assurance-decennale/",
  ],
  extraSources: ["codeCivil1792_4_1", "codeAssurancesA243_1"],
});
