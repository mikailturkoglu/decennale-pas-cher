import { defineLanding } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const enLigne = defineLanding({
  slug: "assurance-decennale-en-ligne",
  name: "Décennale en ligne",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale en ligne : constituer son dossier à distance",
    description:
      "Transmettez votre demande d’assurance décennale en ligne : pièces à réunir, étapes du parcours, sécurité des données et limites de la souscription à distance.",
    primaryKeyword: "assurance décennale en ligne",
    secondaryKeywords: [
      "souscription décennale en ligne",
      "devis décennale en ligne",
      "décennale 100% en ligne",
      "dossier décennale à distance",
      "demande décennale internet",
    ],
  },
  h1: "Assurance décennale en ligne : préparer et transmettre son dossier",
  heroTitle: "Constituer sa demande en ligne",
  heroText:
    "Un dossier de décennale se prépare bien avant l’envoi. Cette page détaille ce qui peut réellement se faire à distance, les pièces à réunir et les étapes qui nécessitent encore un échange avec un professionnel.",
  shortAnswer:
    "La demande, la description de l’activité et l’envoi des justificatifs se traitent aujourd’hui intégralement en ligne. En revanche, l’étude d’un dossier de responsabilité décennale reste un travail humain : les activités déclarées, l’expérience et les antécédents doivent être vérifiés par un professionnel. Le parcours en ligne sert donc à préparer un dossier complet, pas à obtenir une acceptation automatique.",
  summaryBullets: [
    "La demande et l’envoi des pièces se font entièrement à distance.",
    "L’étude du dossier reste réalisée par un professionnel habilité.",
    "Un dossier complet dès le premier envoi évite les allers-retours.",
    "Les documents transmis sont chiffrés et conservés selon une durée définie.",
  ],
  sections: [
    {
      id: "ce-qui-se-fait-en-ligne",
      title: "Ce qui se fait réellement en ligne",
      paragraphs: [
        "Le numérique a fortement accéléré la phase de collecte. Il ne supprime pas l’analyse du risque, qui reste indispensable en assurance construction.",
      ],
      bullets: [
        "description de votre métier et de vos activités réelles",
        "renseignement du chiffre d’affaires et de la situation de l’entreprise",
        "déclaration des antécédents d’assurance et de la sinistralité",
        "dépôt sécurisé des justificatifs : Kbis, attestation, relevé, diplômes",
        "échanges écrits avec le professionnel qui étudie votre dossier",
      ],
    },
    {
      id: "ce-qui-reste-humain",
      title: "Ce qui nécessite encore un échange",
      paragraphs: [
        "Plusieurs points ne peuvent pas être traités par un formulaire seul, car ils supposent une appréciation technique.",
      ],
      bullets: [
        "la traduction de vos prestations en activités de nomenclature",
        "l’appréciation d’une expérience partielle ou d’une reconversion",
        "l’analyse d’une résiliation ou d’un sinistre antérieur",
        "l’étude d’une demande de reprise du passé",
        "la fixation de la date d’effet au regard de vos chantiers en cours",
      ],
      callout: {
        tone: "info",
        title: "Rôle du site",
        body: NOTICES.serviceRole,
      },
    },
    {
      id: "preparer-son-dossier",
      title: "Préparer son dossier avant de commencer",
      paragraphs: [
        "Réunir les pièces avant de remplir le formulaire réduit considérablement le délai global. La plupart des retards viennent de justificatifs manquants, pas du temps d’étude.",
      ],
      bullets: [
        "Kbis ou avis de situation SIRENE de moins de trois mois",
        "pièce d’identité du dirigeant",
        "dernier bilan ou chiffre d’affaires prévisionnel argumenté",
        "ancienne attestation d’assurance décennale",
        "relevé de sinistralité sur cinq ans",
        "CV, diplômes et certificats de travail",
        "liste écrite des prestations que vous facturez réellement",
      ],
    },
    {
      id: "securite",
      title: "Sécurité et protection de vos données",
      paragraphs: [
        "Les documents transmis contiennent des données personnelles et professionnelles sensibles. Le parcours en ligne applique donc plusieurs mesures techniques, décrites dans la politique de confidentialité.",
      ],
      bullets: [
        "transmission chiffrée et contrôle du type de fichier",
        "stockage séparé des pièces jointes, avec accès restreint",
        "durée de conservation définie et suppression programmée",
        "aucune donnée personnelle dans les journaux applicatifs",
        "consentements distincts pour l’étude du devis et la prospection",
      ],
    },
  ],
  modules: ["quote-form-teaser", "how-it-works", "trade-grid", "situation-grid"],
  faq: [
    {
      question: "Peut-on souscrire une décennale entièrement en ligne ?",
      answer:
        "La demande et l’envoi des pièces se font en ligne, mais l’acceptation dépend d’une étude réalisée par un professionnel habilité. Aucune offre sérieuse ne délivre une garantie décennale de façon totalement automatique.",
    },
    {
      question: "Combien de temps prend une demande en ligne ?",
      answer:
        "Le remplissage du formulaire prend quelques minutes si vos pièces sont prêtes. Le délai d’étude dépend ensuite du partenaire et de votre profil : nous n’affichons pas de délai garanti.",
    },
    {
      question: "Les pièces jointes sont-elles obligatoires dès le départ ?",
      answer:
        "Non. Vous pouvez transmettre votre demande sans document, puis déposer les pièces ensuite dans un espace sécurisé. Un dossier complet accélère toutefois nettement l’étude.",
    },
    {
      question: "Mes documents sont-ils conservés indéfiniment ?",
      answer:
        "Non. Les durées de conservation sont définies par finalité et indiquées dans la politique de confidentialité. Les documents sont supprimés à l’issue de cette durée.",
    },
    {
      question: "Puis-je reprendre ma demande plus tard ?",
      answer:
        "La progression du formulaire est conservée dans votre navigateur pendant votre session, ce qui vous permet de revenir sur une étape précédente sans repartir de zéro.",
    },
    {
      question: "L’attestation est-elle envoyée par email ?",
      answer:
        "L’attestation est émise par l’assureur, généralement par voie électronique. Son délai d’émission dépend de l’assureur et non du site.",
    },
  ],
  relatedPaths: [
    "/devis-assurance-decennale/",
    "/attestation-decennale-rapide/",
    "/comparateur-assurance-decennale/",
    "/assurance-decennale/",
    "/politique-confidentialite/",
    "/guides/documents-devis-assurance-decennale/",
  ],
  sources: ["servicePublicDecennale", "cnilDurees", "codeAssurancesL241_1"],
  breadcrumbParents: [{ name: "Assurance décennale", path: "/assurance-decennale/" }],
});
