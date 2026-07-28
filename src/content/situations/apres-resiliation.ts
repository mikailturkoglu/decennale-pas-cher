import { defineSituation } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const apresResiliation = defineSituation({
  slug: "decennale-apres-resiliation",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale après résiliation : comment se réassurer",
    description:
      "Entreprise du BTP résiliée par son assureur : identifiez le motif exact, ce qui est examiné et comment constituer un dossier étudiable par un partenaire.",
    primaryKeyword: "assurance décennale après résiliation",
    secondaryKeywords: [
      "décennale entreprise résiliée",
      "se réassurer après résiliation décennale",
      "décennale résilié assureur",
      "assurance décennale entreprise refusée",
      "BCT assurance décennale",
    ],
  },
  h1: "Assurance décennale après une résiliation",
  shortAnswer:
    "Après une résiliation, le motif figurant sur le courrier de l’assureur détermine presque tout : non-paiement, sinistralité, fausse déclaration ou décision de gestion ne s’étudient pas de la même façon. La démarche consiste à réunir le courrier de résiliation, le relevé de sinistralité et les éléments montrant que la situation a évolué. Aucune acceptation ne peut être promise, et un refus généralisé peut être porté devant le Bureau central de tarification.",
  summaryBullets: [
    "Le motif exact de résiliation conditionne toute la démarche.",
    "Le relevé de sinistralité sera demandé systématiquement.",
    "Une interruption de garantie laisse les chantiers ouverts sans couverture.",
    "Le BCT peut être saisi en cas de refus après plusieurs démarches.",
  ],
  sections: [
    {
      id: "identifier-le-motif",
      title: "Identifier précisément le motif de résiliation",
      paragraphs: [
        "Le courrier de résiliation mentionne le fondement retenu par l’assureur. Ce motif est la première information demandée par tout professionnel qui reprendra votre dossier.",
      ],
      bullets: [
        "non-paiement de la prime : traité dans la page dédiée, la régularisation de la dette est centrale",
        "sinistralité élevée : le nombre, la nature et le coût des sinistres sont examinés",
        "fausse déclaration ou omission : le sujet devient celui de la sincérité du dossier",
        "aggravation du risque non déclarée : changement d’activité, de technique ou de volume",
        "résiliation à l’échéance par l’assureur : décision de gestion, souvent liée à un retrait du marché",
        "résiliation après sinistre : possible dans les conditions prévues au contrat",
      ],
      callout: {
        tone: "info",
        title: "À faire en premier",
        body: "Conservez le courrier de résiliation, l’accusé de réception et la date d’effet exacte de la résiliation. Ces trois éléments seront demandés dans toute nouvelle demande.",
      },
    },
    {
      id: "consequences",
      title: "Les conséquences immédiates d’une résiliation",
      paragraphs: [
        "À compter de la date d’effet de la résiliation, votre entreprise n’est plus assurée pour les nouveaux chantiers. Les chantiers déjà ouverts pendant la période de validité du contrat restent en principe couverts par l’ancien assureur, sauf en cas de nullité du contrat.",
        "Continuer à ouvrir des chantiers sans assurance vous expose à une infraction pénale et à une responsabilité personnelle sur dix ans. Il est donc préférable de suspendre les nouvelles ouvertures de chantier le temps de vous réassurer.",
      ],
    },
    {
      id: "constituer-le-dossier",
      title: "Constituer un dossier réellement étudiable",
      paragraphs: [
        "Un dossier de réassurance après résiliation doit anticiper les questions du professionnel qui l’étudiera. L’objectif est de montrer que le risque a changé, pas seulement d’affirmer que tout va mieux.",
      ],
      bullets: [
        "courrier de résiliation et motif exact",
        "relevé de sinistralité complet sur les cinq dernières années",
        "détail de chaque sinistre : cause, coût, mesures prises depuis",
        "preuve de régularisation d’une éventuelle dette de cotisation",
        "changements techniques ou organisationnels mis en place",
        "ventilation actuelle du chiffre d’affaires par activité",
        "liste des chantiers en cours, avec dates d’ouverture",
      ],
    },
    {
      id: "montrer-evolution",
      title: "Démontrer que la situation a évolué",
      paragraphs: [
        "Les éléments les plus convaincants sont concrets et vérifiables : abandon d’une activité sinistrogène, recours à un bureau d’études, formation suivie, changement de fournisseur ou de méthode, réduction du volume sous-traité.",
        "À l’inverse, un dossier qui présente la même activité, le même volume et la même organisation qu’avant la résiliation offre peu d’arguments nouveaux.",
      ],
    },
    {
      id: "bct",
      title: "Le recours au Bureau central de tarification",
      paragraphs: [
        "Lorsqu’une entreprise soumise à une obligation d’assurance ne trouve pas d’assureur, elle peut saisir le Bureau central de tarification. Celui-ci fixe le tarif auquel une entreprise d’assurance désignée est tenue de garantir le risque.",
        "La saisine suppose de justifier de refus effectifs et de constituer un dossier complet. Le tarif fixé peut être significativement supérieur à un tarif de marché, mais il permet de retrouver une situation régulière.",
      ],
      callout: {
        tone: "legal",
        title: "Cadre du recours",
        body: "Le BCT intervient pour les risques soumis à assurance obligatoire. Le guide dédié détaille la procédure, les pièces attendues et les limites de ce recours.",
      },
    },
    {
      id: "reserve",
      title: "Ce que nous ne pouvons pas promettre",
      paragraphs: [NOTICES.noAcceptancePromise],
    },
  ],
  documents: [
    "courrier de résiliation de l’assureur, avec le motif",
    "relevé de sinistralité sur cinq ans",
    "détail écrit de chaque sinistre et des mesures correctives",
    "justificatif de régularisation d’une dette de cotisation éventuelle",
    "Kbis ou avis de situation SIRENE",
    "pièce d’identité du dirigeant",
    "bilans ou situation comptable récente",
    "ventilation du chiffre d’affaires par activité",
    "liste des chantiers en cours et à venir",
    "CV, diplômes et qualifications du dirigeant",
  ],
  pricingFactors: [
    "motif de résiliation retenu par l’ancien assureur",
    "nombre et coût des sinistres déclarés",
    "durée écoulée depuis la résiliation",
    "existence d’une interruption de garantie",
    "métier exercé et sinistralité moyenne du métier",
    "chiffre d’affaires et périmètre d’activités demandé",
    "mesures correctives documentées",
    "franchise acceptée",
  ],
  commonMistakes: [
    "présenter une demande sans mentionner la résiliation, au risque d’une fausse déclaration",
    "ne pas récupérer le relevé de sinistralité avant de démarrer les démarches",
    "continuer à ouvrir des chantiers pendant la période non assurée",
    "demander exactement le même périmètre d’activités qu’avant la résiliation",
    "négliger la régularisation d’une dette de cotisation",
    "saisir le BCT sans dossier complet ni preuve de refus",
    "accepter une date d’effet postérieure à un chantier déjà planifié",
  ],
  faq: [
    {
      question: "Une entreprise résiliée peut-elle se réassurer ?",
      answer:
        "C’est fréquent, mais l’étude est individuelle et son issue dépend du motif, du dossier et du métier. Aucun professionnel sérieux ne peut garantir une acceptation avant examen des pièces.",
    },
    {
      question: "Mes anciens chantiers restent-ils couverts après la résiliation ?",
      answer:
        "En principe oui : la garantie décennale suit le chantier ouvert pendant la période de validité du contrat. La situation est différente en cas de nullité du contrat pour fausse déclaration.",
    },
    {
      question: "Faut-il déclarer la résiliation à un nouvel assureur ?",
      answer:
        "Oui, obligatoirement. L’omission constitue une fausse déclaration susceptible d’entraîner la nullité du nouveau contrat, ce qui vous laisserait sans garantie tout en ayant payé des cotisations.",
    },
    {
      question: "Combien de temps une résiliation reste-t-elle un obstacle ?",
      answer:
        "Il n’existe pas de durée légale d’effacement. En pratique, l’ancienneté de la résiliation, l’absence de nouveau sinistre et la stabilité de l’entreprise pèsent favorablement au fil du temps.",
    },
    {
      question: "Le tarif sera-t-il plus élevé après une résiliation ?",
      answer:
        "C’est fréquent, en particulier lorsque la résiliation est liée à la sinistralité. La hausse dépend du motif, du métier et du dossier présenté. Nous ne publions pas de fourchette sans hypothèses vérifiées.",
    },
    {
      question: "Que faire si tous les assureurs refusent ?",
      answer:
        "Vous pouvez saisir le Bureau central de tarification, qui fixe le tarif auquel un assureur désigné doit garantir le risque. Cette procédure suppose de justifier des refus et de fournir un dossier complet.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-macon",
    "assurance-decennale-couvreur",
    "assurance-decennale-etancheur",
    "assurance-decennale-charpentier",
    "assurance-decennale-plombier",
    "assurance-decennale-facadier",
  ],
  relatedPaths: [
    "/decennale-non-paiement/",
    "/decennale-apres-sinistre/",
    "/decennale-sans-antecedent-assurance/",
    "/devis-assurance-decennale/",
    "/prix-assurance-decennale/",
    "/guides/bureau-central-tarification-decennale/",
    "/guides/comment-resilier-assurance-decennale/",
  ],
  sources: [
    "servicePublicDecennale",
    "codeAssurancesL113_12",
    "codeAssurancesL241_1",
    "bct",
    "acpr",
  ],
});
