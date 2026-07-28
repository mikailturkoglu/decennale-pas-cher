import { defineGuide } from "@/content/_factories";

export const documentsDevisAssuranceDecennale = defineGuide({
  slug: "documents-devis-assurance-decennale",
  title: "Les documents à fournir pour un devis de décennale",
  category: "souscrire",
  status: "published",
  priority: "P0",
  seo: {
    title: "Documents pour souscrire une décennale : liste par profil",
    description:
      "Kbis, relevé de sinistralité, CV, diplômes, chiffre d’affaires : les documents demandés pour une assurance décennale, selon que vous créez, êtes assuré ou résilié.",
    primaryKeyword: "documents pour souscrire une décennale",
    secondaryKeywords: [
      "documents devis assurance décennale",
      "justificatifs assurance décennale",
      "relevé de sinistralité décennale",
      "pièces à fournir décennale",
      "dossier assurance décennale",
    ],
  },
  h1: "Quels documents fournir pour un devis d’assurance décennale ?",
  summary:
    "Le dossier repose sur quatre familles de pièces : l’identité de l’entreprise, ses chiffres, l’expérience du dirigeant et son historique d’assurance. La liste exacte varie selon votre profil : une entreprise en création fournit surtout des justificatifs d’expérience, une entreprise établie surtout son relevé de sinistralité et son chiffre d’affaires. Un dossier complet dès le premier envoi divise le délai d’étude.",
  shortAnswer:
    "Quatre familles de documents sont demandées : l’identité de l’entreprise (Kbis, pièce d’identité), les chiffres (chiffre d’affaires réalisé ou prévisionnel, ventilation par activité), l’expérience (CV, diplômes, certificats de travail) et l’historique d’assurance (ancienne attestation, relevé de sinistralité). Le relevé de sinistralité est la pièce la plus souvent manquante et la plus déterminante.",
  summaryBullets: [
    "Quatre familles : identité, chiffres, expérience, historique d’assurance.",
    "Le relevé de sinistralité est la pièce la plus déterminante.",
    "En création, les certificats de travail remplacent le relevé.",
    "Aucune pièce jointe n’est nécessaire pour une première demande sur le site.",
  ],
  sections: [
    {
      id: "socle-commun",
      title: "Le socle commun à tous les profils",
      paragraphs: [
        "Ces pièces sont demandées dans presque tous les cas. Les réunir avant de commencer évite l’essentiel des allers-retours.",
      ],
      bullets: [
        "Kbis, avis de situation SIRENE ou justificatif de création",
        "pièce d’identité du dirigeant",
        "chiffre d’affaires du dernier exercice ou prévisionnel argumenté",
        "ventilation du chiffre d’affaires par activité",
        "description écrite des prestations réellement facturées",
        "coordonnées complètes et joignables",
      ],
    },
    {
      id: "entreprise-etablie",
      title: "Si vous êtes déjà assuré",
      paragraphs: [
        "Le sujet est alors la continuité et la sinistralité. Deux documents sont incontournables.",
      ],
      bullets: [
        "ancienne attestation d’assurance décennale, avec la liste des activités",
        "relevé de sinistralité sur les cinq dernières années",
        "conditions particulières du contrat en cours, utiles pour comparer",
        "date d’échéance et préavis de résiliation",
        "dernier appel de cotisation, pour vérifier l’assiette retenue",
      ],
    },
    {
      id: "creation",
      title: "Si votre entreprise est en création",
      paragraphs: [
        "En l’absence d’historique, l’expérience du dirigeant devient l’élément central du dossier.",
      ],
      bullets: [
        "CV détaillé, chantier par chantier",
        "diplômes du métier : CAP, BP, bac professionnel, titre professionnel",
        "certificats de travail précisant les fonctions et les périodes",
        "bulletins de salaire des dernières années d’activité salariée",
        "chiffre d’affaires prévisionnel avec hypothèses",
        "date prévue du premier chantier",
      ],
    },
    {
      id: "resiliation",
      title: "Si vous avez été résilié ou sinistré",
      paragraphs: [
        "Le dossier doit expliquer la situation et démontrer ce qui a changé depuis. La transparence est ici la meilleure stratégie.",
      ],
      bullets: [
        "courrier de résiliation avec le motif exact",
        "relevé de sinistralité complet",
        "rapports d’expertise disponibles",
        "justificatifs de régularisation d’une dette de cotisation",
        "description écrite des mesures correctives mises en place",
        "liste des chantiers ouverts pendant une éventuelle période sans garantie",
      ],
      callout: {
        tone: "warning",
        title: "Ne rien omettre",
        body: "Une résiliation ou un sinistre omis puis découvert dans le relevé de sinistralité fragilise l’ensemble du dossier et peut entraîner la nullité du contrat pour fausse déclaration.",
      },
    },
    {
      id: "obtenir-releve",
      title: "Comment obtenir son relevé de sinistralité",
      paragraphs: [
        "Ce document est délivré par votre assureur actuel ou précédent. Demandez-le par écrit, en précisant qu’il est nécessaire pour souscrire un nouveau contrat.",
        "Relisez-le avant de le transmettre : les erreurs sont fréquentes et une contestation écrite peut modifier sensiblement la lecture de votre dossier.",
      ],
    },
  ],
  checklist: [
    "Kbis ou avis de situation de moins de trois mois",
    "pièce d’identité du dirigeant",
    "chiffre d’affaires et ventilation par activité",
    "ancienne attestation d’assurance",
    "relevé de sinistralité sur cinq ans",
    "CV, diplômes et certificats de travail",
    "explication écrite de toute situation atypique",
    "date d’ouverture du prochain chantier",
  ],
  faq: [
    {
      question: "Le relevé de sinistralité est-il obligatoire ?",
      answer:
        "Il n’est pas exigé par la loi, mais il est demandé par pratiquement tous les assureurs. Son absence oblige à reconstituer votre profil autrement, ce qui allonge l’étude.",
    },
    {
      question: "Mon assureur peut-il refuser de me le fournir ?",
      answer:
        "Il doit pouvoir vous délivrer un relevé de votre situation. En cas de silence, adressez une demande écrite avec accusé de réception et conservez la preuve de votre démarche.",
    },
    {
      question: "Faut-il fournir les pièces dès la première demande ?",
      answer:
        "Non sur ce site : la demande peut être envoyée sans pièce jointe. Les documents sont ensuite déposés dans un espace sécurisé, ce qui accélère l’étude.",
    },
    {
      question: "Un CV suffit-il à prouver l’expérience ?",
      answer:
        "Il aide, mais les certificats de travail et les bulletins de salaire sont beaucoup plus convaincants car ils sont vérifiables et datés.",
    },
    {
      question: "Combien de temps mes documents sont-ils conservés ?",
      answer:
        "Les durées de conservation sont définies par finalité et indiquées dans la politique de confidentialité. Les documents sont supprimés à l’issue de cette durée.",
    },
  ],
  primaryCommercialPath: "/devis-assurance-decennale/",
  relatedPaths: [
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/decennale-apres-resiliation/",
    "/outils/checklist-dossier-decennale/",
    "/guides/attestation-assurance-decennale/",
    "/assurance-decennale-en-ligne/",
  ],
  sources: ["servicePublicDecennale", "cnilDurees", "nomenclatureBtp"],
  legalSources: ["codeAssurancesL241_1"],
});
