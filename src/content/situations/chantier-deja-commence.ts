import { defineSituation } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const chantierDejaCommence = defineSituation({
  slug: "decennale-chantier-deja-commence",
  status: "published",
  priority: "P1",
  seo: {
    title: "Décennale et chantier déjà commencé : ce qui est réellement garanti",
    description:
      "Un chantier a démarré avant votre contrat ? Comprenez pourquoi la date d’ouverture est déterminante et quelles démarches restent possibles.",
    primaryKeyword: "décennale chantier déjà commencé",
    secondaryKeywords: [
      "assurer chantier en cours décennale",
      "chantier ouvert avant souscription",
      "date ouverture chantier décennale",
      "décennale chantier démarré",
      "souscrire décennale chantier en cours",
    ],
  },
  h1: "Assurance décennale pour un chantier déjà commencé",
  shortAnswer:
    "En assurance construction, c’est la date d’ouverture du chantier qui détermine si le contrat s’applique. Un chantier ouvert avant la date d’effet du contrat n’est donc pas couvert par ce contrat, même si les travaux se poursuivent ensuite et même si la réception est postérieure. La seule voie possible est une reprise du passé expressément accordée par l’assureur, qui reste rare et suppose l’absence de tout désordre connu.",
  summaryBullets: [
    "La date d’ouverture du chantier prime sur la date de réception.",
    "Souscrire aujourd’hui ne couvre pas un chantier ouvert hier.",
    "Seule une reprise du passé expresse peut modifier ce principe.",
    "Il faut cesser d’ouvrir de nouveaux chantiers sans garantie.",
  ],
  sections: [
    {
      id: "date-douverture",
      title: "Ce que signifie l’ouverture de chantier",
      paragraphs: [
        "L’ouverture de chantier correspond au début effectif des travaux : installation, dépose, terrassement, première mise en œuvre. Elle ne se confond ni avec la signature du devis, ni avec la commande de matériaux, ni avec le dépôt d’une autorisation d’urbanisme.",
        "En cas de sinistre, cette date est reconstituée à partir des éléments matériels du dossier : dates de facturation, comptes rendus de chantier, photographies, échanges avec le client. Une déclaration inexacte sur ce point est facilement détectée.",
      ],
      callout: {
        tone: "legal",
        title: "Règle de base",
        body: "Le contrat couvre les chantiers ouverts pendant sa période de validité. Un chantier ouvert avant la date d’effet reste hors garantie, quelle que soit la date d’apparition du désordre.",
      },
    },
    {
      id: "consequences",
      title: "Conséquences concrètes pour l’entreprise",
      paragraphs: [
        "Un chantier ouvert sans garantie expose l’entreprise et son dirigeant pendant dix ans à compter de la réception. En cas de désordre, l’indemnisation du client devra être supportée sur les fonds propres de l’entreprise.",
        "Le client peut également invoquer l’absence d’assurance obligatoire pour refuser un paiement, demander la résolution du marché ou engager une action pénale.",
      ],
    },
    {
      id: "ce-quil-faut-faire",
      title: "Ce qu’il faut faire immédiatement",
      paragraphs: [
        "La priorité est d’éviter d’aggraver la situation, puis d’examiner ce qui peut encore être fait pour les chantiers déjà ouverts.",
      ],
      bullets: [
        "recenser précisément les chantiers ouverts et leur date de démarrage",
        "suspendre l’ouverture de tout nouveau chantier jusqu’à obtention d’une garantie",
        "demander une date d’effet la plus proche possible pour les chantiers à venir",
        "poser explicitement la question d’une reprise du passé pour les chantiers en cours",
        "informer votre client de la situation si une attestation lui a été promise",
        "documenter la qualité d’exécution des chantiers concernés",
      ],
    },
    {
      id: "reprise-du-passe",
      title: "La reprise du passé, seule voie possible",
      paragraphs: [
        "Certains assureurs acceptent d’étendre la garantie à des chantiers déjà ouverts, sous conditions strictes : inventaire complet, absence de désordre connu, parfois visite technique et prime spécifique.",
        "Cette extension n’est jamais automatique et son refus est fréquent, en particulier sur les métiers à forte sinistralité ou lorsque les travaux sont déjà avancés.",
      ],
    },
    {
      id: "reserve",
      title: "Ce que nous ne pouvons pas promettre",
      paragraphs: [NOTICES.noAcceptancePromise, NOTICES.pastCoverage],
    },
  ],
  documents: [
    "liste des chantiers ouverts avec dates de démarrage",
    "devis et marchés signés correspondants",
    "photographies de l’avancement des travaux",
    "procès-verbaux de réception déjà signés",
    "déclaration signée d’absence de désordre connu",
    "Kbis ou avis de situation SIRENE",
    "pièce d’identité du dirigeant",
    "anciennes attestations d’assurance le cas échéant",
    "ventilation du chiffre d’affaires par activité",
  ],
  pricingFactors: [
    "nombre et avancement des chantiers concernés",
    "montant des marchés en cours",
    "activité exercée sur ces chantiers",
    "existence de réserves ou de litiges",
    "durée de la période non assurée",
    "métier et sinistralité associée",
    "acceptation d’une visite technique",
    "franchise acceptée",
  ],
  commonMistakes: [
    "penser qu’une souscription rapide régularise un chantier déjà ouvert",
    "antidater une date d’ouverture de chantier, ce qui constitue une fausse déclaration",
    "continuer à ouvrir des chantiers en attendant une réponse",
    "confondre date de signature du devis et date d’ouverture de chantier",
    "remettre au client une attestation qui ne couvre pas son chantier",
    "omettre les chantiers en cours dans la demande",
  ],
  faq: [
    {
      question: "Peut-on assurer un chantier déjà démarré ?",
      answer:
        "Uniquement par une reprise du passé expressément accordée par l’assureur. Sans cette extension, le chantier ouvert avant la date d’effet reste hors garantie pendant toute la durée de la responsabilité décennale.",
    },
    {
      question: "La date de réception peut-elle sauver la situation ?",
      answer:
        "Non. C’est la date d’ouverture du chantier qui détermine le contrat applicable, pas la date de réception ni celle du sinistre.",
    },
    {
      question: "Que risque-t-on en remettant une attestation inadaptée au client ?",
      answer:
        "Le client peut légitimement se considérer trompé, refuser le paiement et engager votre responsabilité. La remise d’une attestation ne couvrant pas le chantier concerné aggrave la situation plutôt qu’elle ne la règle.",
    },
    {
      question: "Puis-je déclarer une date d’ouverture postérieure à la réalité ?",
      answer:
        "Non. Il s’agirait d’une fausse déclaration, susceptible d’entraîner la nullité du contrat et de vous laisser sans garantie sur l’ensemble de vos chantiers.",
    },
    {
      question: "Comment éviter cette situation à l’avenir ?",
      answer:
        "En demandant votre assurance avant de planifier vos chantiers et en vérifiant la date d’effet avant toute intervention, y compris pour une simple installation de chantier.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-macon",
    "assurance-decennale-couvreur",
    "assurance-decennale-plombier",
    "assurance-decennale-carreleur",
    "assurance-decennale-plaquiste",
    "assurance-decennale-electricien",
  ],
  relatedPaths: [
    "/decennale-reprise-passe/",
    "/decennale-sans-antecedent-assurance/",
    "/attestation-decennale-rapide/",
    "/devis-assurance-decennale/",
    "/guides/date-effet-assurance-decennale/",
    "/guides/assurance-decennale-obligatoire/",
  ],
  sources: [
    "codeAssurancesA243_1",
    "codeAssurancesL241_1",
    "codeCivil1792_4_1",
    "servicePublicDecennale",
  ],
});
