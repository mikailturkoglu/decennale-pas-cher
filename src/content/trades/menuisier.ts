import { defineTrade, indicativeBand } from "@/content/_factories";
import { PLACEHOLDER } from "@/lib/placeholders";

export const menuisier = defineTrade({
  tradeValue: "menuisier",
  name: "Menuisier",
  pluralName: "les menuisiers",
  category: "clos-couvert",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale menuisier : prix et devis | DécennaleBTP.fr",
    description:
      "Menuisier poseur, fabricant ou installateur PVC et aluminium : comparez des solutions de RC décennale selon vos activités déclarées, votre expérience et votre chiffre d’affaires.",
    primaryKeyword: "assurance décennale menuisier",
    secondaryKeywords: [
      "prix assurance décennale menuisier",
      "tarif décennale menuiserie",
      "devis décennale menuisier",
      "décennale menuisier poseur",
      "décennale menuisier auto-entrepreneur",
      "travaux couverts menuiserie extérieure",
    ],
  },
  h1: "Assurance décennale menuisier : comparez les offres adaptées à vos poses",
  shortAnswer:
    "La menuiserie extérieure participe au clos et au couvert : une fenêtre qui laisse passer l’eau ou l’air engage la garantie décennale. Pour un menuisier, la cotisation dépend du chiffre d’affaires, de l’expérience et surtout du périmètre déclaré : menuiserie extérieure, menuiserie intérieure, agencement, vérandas et fermetures ne relèvent pas des mêmes activités.",
  summaryBullets: [
    "La menuiserie extérieure relève du clos et couvert, donc pleinement de la décennale.",
    "La menuiserie intérieure d’agencement peut relever de la seule RC professionnelle.",
    "Vérandas, pergolas et murs rideaux sont des activités à déclarer séparément.",
    "L’étanchéité du calfeutrement est le point de vigilance principal.",
  ],
  specificity: [
    "La menuiserie extérieure forme la barrière entre l’intérieur et l’extérieur. Un défaut d’étanchéité à l’eau ou à l’air rend le local impropre à sa destination sans qu’aucune atteinte à la structure ne soit nécessaire.",
    "Le menuisier pose sur un support qu’il n’a pas réalisé. L’état du tableau, la planéité et la reprise du rejingot conditionnent la tenue de l’ouvrage et doivent être vérifiés avant pose.",
    "La distinction entre pose en applique, en tunnel ou en rénovation change la nature du risque et la méthode d’étanchéité attendue.",
    "Certaines prestations sont purement mobilières : un dressing ou un meuble sur mesure ne relève pas de la garantie décennale mais de la responsabilité civile professionnelle.",
    "Les vérandas et extensions vitrées cumulent structure, couverture et étanchéité : elles font presque toujours l’objet d’une activité distincte.",
  ],
  coveredWork: [
    "pose de fenêtres et portes-fenêtres en bois, PVC ou aluminium",
    "pose de portes d’entrée et de portes de service",
    "pose de blocs-baies et de coffres de volets roulants",
    "fermetures : volets battants, volets roulants, persiennes",
    "portes de garage sectionnelles, basculantes ou battantes",
    "calfeutrement et étanchéité périphérique des menuiseries posées",
    "habillages, tapées et bavettes d’appui",
    "fabrication et pose de menuiseries sur mesure en atelier",
  ],
  accessoryWork: [
    "dépose des anciennes menuiseries et évacuation",
    "reprise ponctuelle du tableau et rebouchage après dépose",
    "adaptation de l’appui et pose d’une bavette de recouvrement",
    "raccordement électrique de motorisations sur alimentation existante",
    "petites reprises de plâtrerie ou de peinture liées à la pose",
  ],
  separatelyDeclaredWork: [
    "vérandas, extensions vitrées et pergolas bioclimatiques",
    "murs rideaux et façades vitrées",
    "verrières et vitrages de toiture",
    "escaliers structurels et planchers bois",
    "ossature bois et charpente",
    "portes automatiques et portails motorisés selon les contrats",
    "bardage bois et habillage extérieur",
  ],
  commonExclusions: [
    "désordres provenant d’un support existant dégradé sans réserve écrite",
    "activités non déclarées, notamment véranda et mur rideau",
    "défaut d’entretien des menuiseries et de leurs joints après réception",
    "produits fournis par le client sans garantie fabricant",
    "dommages esthétiques sur des essences de bois évolutives",
    "désordres liés à une motorisation posée sans habilitation requise",
  ],
  workTable: [
    {
      work: "Pose de fenêtres en rénovation",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Vérifier l’état du dormant conservé et le documenter avant pose.",
    },
    {
      work: "Pose en neuf, en applique ou en tunnel",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "L’étanchéité périphérique doit suivre le DTU applicable.",
    },
    {
      work: "Volets roulants et fermetures",
      usuallyIncluded: "Oui",
      separateDeclaration: "Non concernée",
      watchOut: "Attention aux ponts thermiques créés par les coffres intégrés.",
    },
    {
      work: "Menuiserie intérieure et agencement",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Souvent hors décennale car mobilier dissociable, mais à confirmer.",
    },
    {
      work: "Véranda ou extension vitrée",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité distincte cumulant structure, couverture et étanchéité.",
    },
    {
      work: "Mur rideau et façade vitrée",
      usuallyIncluded: "Non",
      separateDeclaration: "Obligatoire",
      watchOut: "Activité technique réservée aux entreprises expérimentées.",
    },
    {
      work: "Escalier bois structurel",
      usuallyIncluded: "Selon contrat",
      separateDeclaration: "Recommandée",
      watchOut: "Un escalier participant à la circulation peut être jugé indissociable.",
    },
  ],
  riskScenarios: [
    {
      title: "Infiltrations en pied de fenêtre après remplacement",
      context:
        "Remplacement de six fenêtres en rénovation sur un pavillon des années 1980, appuis conservés sans bavette de recouvrement ni reprise du rejingot.",
      damage:
        "Ruissellement lors des pluies battantes, humidité en bas des tableaux intérieurs, décollement des peintures et gonflement des plinthes après deux hivers.",
      liability:
        "L’étanchéité à l’eau de la menuiserie n’est pas assurée : le local est impropre à sa destination. La pose et son calfeutrement relèvent directement de l’activité du menuisier.",
      reserve:
        "L’imputation exacte dépend de l’état de l’appui existant, des réserves écrites et des conclusions de l’expertise.",
    },
    {
      title: "Déformation d’une porte-fenêtre coulissante de grande largeur",
      context:
        "Pose d’un coulissant aluminium de quatre mètres sur un seuil non parfaitement plan, calage insuffisant sous les rails.",
      damage:
        "Ouvrants qui frottent puis se bloquent, perte d’étanchéité à l’air, courants d’air permanents et impossibilité de fermer correctement au bout de deux ans.",
      liability:
        "L’ouvrage ne remplit plus sa fonction de clos : l’impropriété à destination peut être retenue. Le défaut de calage et de mise à niveau est imputable à la pose.",
      reserve:
        "La responsabilité peut être partagée avec le lot gros œuvre si le seuil livré ne respectait pas les tolérances, ce qui suppose une trace écrite.",
    },
    {
      title: "Condensation persistante après remplacement de menuiseries",
      context:
        "Remplacement de toutes les menuiseries d’un logement ancien par des modèles étanches, sans création ni vérification des entrées d’air.",
      damage:
        "Condensation abondante sur les vitrages, moisissures dans les angles de pièces et sur les murs froids, dégradation des revêtements en dix-huit mois.",
      liability:
        "L’absence de ventilation adaptée après étanchéification du logement est un défaut de conception de l’intervention, susceptible de rendre les pièces impropres à leur destination.",
      reserve:
        "La prise en charge dépend du contrat, du périmètre du marché et du rôle éventuel d’un autre intervenant en ventilation.",
    },
  ],
  priceBands: [
    indicativeBand({
      label: "Menuisier poseur créateur",
      annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Aucun antécédent d’assurance",
    }),
    indicativeBand({
      label: "Menuisier établi, pose et fabrication",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sans sinistre",
    }),
    indicativeBand({
      label: "Entreprise de menuiserie avec salariés",
      annualRevenue: `CA ${PLACEHOLDER.toFill}`,
      experience: `Expérience ${PLACEHOLDER.toFill}`,
      insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
    }),
  ],
  pricingFactors: [
    "chiffre d’affaires réalisé ou prévisionnel, fourniture comprise",
    "expérience du dirigeant en pose de menuiserie extérieure",
    "périmètre déclaré : extérieur, intérieur, fermetures, véranda",
    "matériaux travaillés : bois, PVC, aluminium, mixte",
    "part de fabrication en atelier et responsabilité produit associée",
    "taille des ouvrages posés, notamment les grandes largeurs",
    "sinistralité des cinq dernières années",
    "part sous-traitée pour la pose ou la fabrication",
    "franchise choisie et plafonds de garantie",
  ],
  requiredDocuments: [
    "Kbis, avis de situation SIRENE ou justificatif de création",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires du dernier exercice ou prévisionnel",
    "ventilation entre pose, fabrication et agencement",
    "relevé de sinistralité sur cinq ans",
    "ancienne attestation d’assurance décennale",
    "CV du dirigeant précisant les types de menuiseries posées",
    "diplômes : CAP menuisier, BP, bac professionnel",
    "certificats de travail des employeurs précédents",
    "photos ou devis de chantiers représentatifs",
  ],
  startupNotes: [
    "Un menuisier poseur qui démarre doit surtout documenter son expérience de la pose en rénovation, plus exposée que la pose en neuf.",
    "L’agencement intérieur seul est parfois considéré hors champ décennal : faites préciser par écrit ce qui est couvert et ce qui relève de la RC professionnelle.",
    "Si vous prévoyez des vérandas, annoncez-le dès la demande : l’activité change la tarification et parfois le partenaire capable d’étudier le dossier.",
    "En micro-entreprise, la fourniture des menuiseries pèse lourd dans le chiffre d’affaires : anticipez le seuil applicable à votre régime.",
    "Photographiez systématiquement l’état des appuis et tableaux avant intervention : c’est la meilleure protection en cas de litige.",
  ],
  comparisonPoints: [
    "libellé exact des activités : menuiserie extérieure, intérieure, fermetures, véranda",
    "traitement des travaux sur support existant",
    "garantie sur les produits fabriqués en atelier",
    "franchise par sinistre et éventuelle franchise majorée sur les grandes dimensions",
    "garantie dommages aux existants",
    "extension RC professionnelle pour l’agencement mobilier",
    "plafonds par sinistre et par année d’assurance",
    "prise en compte de la sous-traitance de pose",
    "conditions de couverture des motorisations",
  ],
  faq: [
    {
      question: "La pose de fenêtres relève-t-elle de la garantie décennale ?",
      answer:
        "Oui, car la menuiserie extérieure participe au clos et au couvert. Un défaut d’étanchéité à l’eau ou à l’air rend le local impropre à sa destination, ce qui suffit à engager la garantie pendant dix ans.",
    },
    {
      question: "Un menuisier d’agencement doit-il souscrire une décennale ?",
      answer:
        "Cela dépend de la nature réelle des prestations. Le mobilier dissociable relève plutôt de la RC professionnelle. Dès qu’une prestation touche à l’ouvrage lui-même, comme un escalier ou une cloison, la décennale devient nécessaire.",
    },
    {
      question: "Une véranda est-elle couverte par la décennale de menuiserie ?",
      answer:
        "Pas automatiquement. La véranda est une activité distincte car elle combine structure, couverture et étanchéité. Elle doit apparaître explicitement sur l’attestation d’assurance.",
    },
    {
      question: "Qui est responsable si l’appui de fenêtre existant est défectueux ?",
      answer:
        "Le menuisier doit vérifier la compatibilité du support et signaler par écrit toute anomalie avant pose. Sans réserve écrite, il lui est difficile d’échapper à la mise en cause en cas d’infiltration.",
    },
    {
      question: "La motorisation d’un volet roulant est-elle garantie dix ans ?",
      answer:
        "La motorisation est un élément d’équipement souvent dissociable : elle relève plutôt de la garantie de bon fonctionnement de deux ans ou de la garantie du fabricant. Le coffre intégré au bâti peut en revanche relever de la décennale.",
    },
    {
      question: "Faut-il déclarer la fabrication en atelier séparément de la pose ?",
      answer:
        "Il est fortement recommandé de le préciser. La fabrication engage une responsabilité produit qui n’est pas traitée de la même manière que la pose selon les contrats.",
    },
  ],
  relatedTradeSlugs: [
    "assurance-decennale-plaquiste",
    "assurance-decennale-charpentier",
    "assurance-decennale-facadier",
  ],
  relatedPaths: [
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/decennale-auto-entrepreneur/",
    "/assurance-decennale-artisan/",
    "/guides/nomenclature-activites-btp/",
    "/guides/exclusions-assurance-decennale/",
  ],
  extraSources: ["codeCivil1792_3", "codeCivil1792_2"],
});
