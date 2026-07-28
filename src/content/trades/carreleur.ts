import { defineTrade, indicativeBand } from "@/content/_factories";
import { PLACEHOLDER } from "@/lib/placeholders";

export const carreleur = defineTrade({
  tradeValue: "carreleur",
  name: "Carreleur",
  pluralName: "les carreleurs",
  category: "amenagement-finitions",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale carreleur : prix et devis | DécennaleBTP.fr",
    description:
      "Carreleur, chapiste ou poseur de faïence : comparez des solutions de RC décennale selon vos activités déclarées, votre expérience et votre chiffre d’affaires.",
    primaryKeyword: "assurance décennale carreleur",
    secondaryKeywords: [
      "prix assurance décennale carreleur",
      "tarif décennale carrelage",
      "devis décennale carreleur",
      "décennale carreleur auto-entrepreneur",
      "décennale carrelage salle de bains",
      "travaux couverts carrelage",
    ],
  },
  h1: "Assurance décennale carreleur : comparez les offres adaptées à vos poses",
  shortAnswer:
    "Un carrelage qui se décolle sur une grande surface ou une douche à l’italienne qui fuit rend le local impropre à sa destination : la garantie décennale s’applique. Pour un carreleur, la cotisation dépend du chiffre d’affaires, de l’expérience et des activités déclarées, en particulier la chape, l’étanchéité sous carrelage et les poses en extérieur ou sur plancher chauffant.",
  summaryBullets: [
    "L’étanchéité sous carrelage des pièces humides est le point le plus sensible.",
    "Chape et ragréage sont des activités souvent distinctes de la pose.",
    "Les poses en extérieur et sur plancher chauffant exigent des précautions renforcées.",
    "Le support et son état conditionnent la tenue de l’ouvrage.",
  ],
  specificity: [
    "Le carrelage assure une double fonction : revêtement d’usage et, dans les pièces humides, protection du support contre l’eau. Cette seconde fonction fait basculer beaucoup de désordres dans le champ décennal.",
    "Les décollements par plaques ne sont pas de simples défauts d’aspect : ils rendent le sol dangereux ou inutilisable et conduisent à une reprise totale.",
    "La pose sur plancher chauffant impose le respect des cycles de mise en température et des joints de fractionnement. Leur oubli est une cause classique de fissuration.",
    "L’étanchéité sous carrelage des douches à l’italienne est régulièrement au cœur des litiges entre plombier et carreleur : la répartition écrite des tâches est essentielle.",
    "Les carrelages extérieurs, terrasses et plages de piscine subissent le gel et les variations thermiques, avec un risque de décollement bien supérieur à l’intérieur.",
  ],
  coveredWork: [
    "pose de carrelage au sol collé sur support neuf ou existant",
    "pose de faïence et de revêtements muraux céramiques",
    "chape de ravoirage et chape flottante selon les activités déclarées",
    "ragréage et préparation des supports avant pose",
    "pose de grands formats et de carreaux de faible épaisseur",
    "systèmes d’étanchéité liquide sous carrelage en locaux humides",
    "pose de plinthes, nez de marche et profilés de finition",
    "pose de carrelage en extérieur sur terrasse et balcon",
  ],
  accessoryWork: [
    "dépose de l’ancien revêtement et évacuation",
    "reprise ponctuelle du support et rebouchage",
    "réalisation des joints et calfeutrement périphérique",
    "pose de trappes de visite et de siphons de sol fournis",
    "petits travaux de maçonnerie liés à la mise à niveau du support",
  ],
  separatelyDeclaredWork: [
    "chape liquide ou chape enrobant un plancher chauffant selon les contrats",
    "étanchéité de balcon ou de terrasse par résine ou membrane",
    "création de receveur maçonné et réseaux d’évacuation",
    "pose de dalles sur plots en extérieur selon les contrats",
    "pose de pierre naturelle de grande dimension et parements",
    "pose de parquet et de sols souples",
    "isolation phonique sous chape",
  ],
  commonExclusions: [
    "support existant non conforme accepté sans réserve écrite",
    "activités non déclarées, notamment chape et étanchéité",
    "carreaux fournis par le client, hors garantie fabricant",
    "défauts d’aspect, nuances de teinte et faïençage esthétique",
    "absence de joints de fractionnement imposée par le client",
    "usage du local différent de celui prévu au marché",
  ],
  workTable: [
    {
      work: "Pose collée au sol en intérieur",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Le double encollage est attendu au-delà de certains formats.",
    },
    {
      work: "Faïence murale de salle de bains",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Vérifier la nature du support et son classement à l’humidité.",
    },
    {
      work: "Étanchéité sous carrelage (SEL, SPEC)",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Point de litige fréquent avec le lot plomberie : à formaliser.",
    },
    {
      work: "Chape et ragréage",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "La chape peut être rattachée au gros œuvre selon les contrats.",
    },
    {
      work: "Pose sur plancher chauffant",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Respecter les cycles de chauffe et les joints de fractionnement.",
    },
    {
      work: "Carrelage extérieur de terrasse",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "L’étanchéité du support doit être assurée avant la pose.",
    },
    {
      work: "Étanchéité de balcon par résine",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Relève de l’activité étanchéité, pas du carrelage.",
    },
  ],
  riskScenarios: [
    {
      title: "Décollement d’un carrelage de grand format sur plancher chauffant",
      context:
        "Pose de carreaux de 90 x 90 cm sur une chape enrobant un plancher chauffant, sans respect du cycle de mise en température préalable et sans joint de fractionnement dans une pièce de 45 m².",
      damage:
        "Carreaux qui sonnent creux puis se décollent par plaques, quelques carreaux fissurés, sol devenu dangereux au bout de deux ans.",
      liability:
        "Le sol est impropre à sa destination et la reprise implique une dépose complète. Le non-respect des prescriptions de pose sur plancher chauffant est directement imputable au carreleur.",
      reserve:
        "La responsabilité du chauffagiste peut être recherchée si le cycle de chauffe n’a pas été réalisé, ce que détermine l’expertise.",
    },
    {
      title: "Douche à l’italienne sans système d’étanchéité sous carrelage",
      context:
        "Création d’une douche de plain-pied avec siphon de sol, carrelage posé directement sur la chape sans système d’étanchéité liquide, le devis ne mentionnant pas ce poste.",
      damage:
        "Humidité progressive dans la cloison mitoyenne, décollement des plinthes dans la chambre voisine, développement de moisissures au bout de dix-huit mois.",
      liability:
        "L’absence d’étanchéité dans une pièce humide est un manquement aux règles de l’art. Le local est impropre à sa destination, ce qui ouvre la voie à la garantie décennale.",
      reserve:
        "L’imputation entre carreleur et plombier dépend des pièces du marché et des conclusions de l’expertise.",
    },
    {
      title: "Carrelage extérieur décollé par le gel",
      context:
        "Pose de carrelage sur une terrasse sur dalle béton, sans forme de pente suffisante ni système d’étanchéité, avec un mortier-colle non adapté à l’extérieur.",
      damage:
        "Stagnation d’eau, décollement et soulèvement de nombreux carreaux après le premier hiver rigoureux, infiltrations dans le local situé sous la terrasse.",
      liability:
        "L’ouvrage n’assure plus sa fonction et provoque des infiltrations. Le choix d’un produit inadapté et l’absence de pente engagent la responsabilité du poseur.",
      reserve:
        "La part imputable au gros œuvre pour la dalle et la pente est appréciée en expertise.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Carreleur créateur, seul",
      annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Carreleur établi, intérieur et pièces humides",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "Entreprise de carrelage avec salariés",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel, fourniture comprise",
    "expérience du dirigeant en pose collée et en pièces humides",
    "présence de la chape et de l’étanchéité sous carrelage dans les activités",
    "part de poses extérieures, plus exposées au gel",
    "formats posés : les grands formats augmentent la technicité",
    "type de clientèle : particuliers, promoteurs, entreprises générales",
    "sinistralité des cinq dernières années",
    "part sous-traitée et assurance des sous-traitants",
    "franchise retenue et plafonds de garantie",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation entre pose intérieure, extérieure, chape et étanchéité",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant et types de poses réalisées",
    "diplômes : CAP carreleur mosaïste, BP",
    "certificats de travail des employeurs précédents",
    "devis représentatifs, notamment de salles de bains",
  ],
  startupNotes: [
    "Un carreleur qui démarre doit préciser s’il réalise des douches à l’italienne : c’est le poste le plus scruté par les assureurs.",
    "Déclarez la chape si vous la réalisez : elle est parfois rattachée au gros œuvre et son oubli laisse un trou de garantie.",
    "Conservez les fiches techniques des mortiers-colles et systèmes d’étanchéité utilisés, avec la référence du chantier.",
    "En micro-entreprise, la fourniture des carreaux peut représenter une part importante du chiffre d’affaires déclaré.",
    "Photographiez l’état du support avant pose et faites signer les réserves éventuelles.",
  ],
  comparisonPoints: [
    "libellé des activités : pose collée, chape, étanchéité sous carrelage",
    "couverture des poses extérieures et sur plancher chauffant",
    "traitement des désordres esthétiques et des nuances de teinte",
    "franchise par sinistre et éventuelle franchise majorée en pièces humides",
    "garantie dommages aux existants",
    "extension RC professionnelle et dommages aux biens confiés",
    "plafonds par sinistre et par année d’assurance",
    "prise en compte de la sous-traitance",
    "conditions de garantie sur les matériaux fournis par le client",
  ],
  faq: [
    {
      question: "Un carrelage qui se décolle relève-t-il de la garantie décennale ?",
      answer:
        "Oui lorsque le décollement est étendu et rend le sol dangereux ou inutilisable. Quelques carreaux isolés qui sonnent creux relèvent plutôt de la garantie de parfait achèvement dans la première année.",
    },
    {
      question: "Qui doit réaliser l’étanchéité sous carrelage d’une douche à l’italienne ?",
      answer:
        "La répartition doit être écrite dans les devis. En pratique, le carreleur applique souvent le système d’étanchéité liquide, le plombier réalisant l’évacuation. Sans définition claire, la responsabilité est fréquemment partagée après expertise.",
    },
    {
      question: "La chape est-elle incluse dans l’activité carrelage ?",
      answer:
        "Pas toujours. Selon les contrats, la chape peut relever du gros œuvre ou d’une activité spécifique. Faites préciser le libellé exact si vous réalisez régulièrement des chapes.",
    },
    {
      question: "Un carreleur auto-entrepreneur doit-il être assuré ?",
      answer:
        "Oui. L’obligation dépend de la nature des travaux et non du régime fiscal. L’attestation doit être obtenue avant le premier chantier et les mentions d’assurance doivent figurer sur les devis et factures.",
    },
    {
      question: "Faut-il déclarer les poses en extérieur séparément ?",
      answer:
        "Le carrelage extérieur est généralement compris dans l’activité, mais l’étanchéité du support ne l’est pas. Vérifiez qui assure l’étanchéité de la terrasse avant d’intervenir.",
    },
    {
      question: "Les grands formats changent-ils le niveau de risque ?",
      answer:
        "Oui, car ils exigent une planéité du support et un encollage plus rigoureux. Les assureurs ne les tarifent pas systématiquement à part, mais ils en tiennent compte dans l’appréciation du dossier.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-plombier",
    "assurance-decennale-plaquiste",
    "assurance-decennale-peintre",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-auto-entrepreneur/",
    "/decennale-creation-entreprise/",
    "/assurance-decennale-pas-chere/",
    "/guides/que-couvre-assurance-decennale/",
    "/guides/nomenclature-activites-btp/",
  ],
  extraSources: ["codeCivil1792_3"],
});
