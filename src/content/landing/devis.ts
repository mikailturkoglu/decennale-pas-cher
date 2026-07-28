import { defineLanding } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const devis = defineLanding({
  slug: "devis-assurance-decennale",
  name: "Demander des devis",
  status: "published",
  priority: "P0",
  seo: {
    title: "Devis assurance décennale : demande en ligne pour les pros du BTP",
    description:
      "Demandez des propositions d’assurance décennale adaptées à vos activités BTP. Formulaire en six étapes, sans pièce jointe obligatoire, avec consentements distincts.",
    primaryKeyword: "devis assurance décennale",
    secondaryKeywords: [
      "devis décennale",
      "devis gratuit décennale",
      "demande devis RC décennale",
      "devis décennale artisan",
      "demande assurance décennale en ligne",
    ],
  },
  h1: "Demander des devis d’assurance décennale",
  heroTitle: "Votre demande d’assurance décennale",
  heroText:
    "Six étapes courtes pour décrire votre activité réelle, votre entreprise, votre expérience et votre situation d’assurance. Aucune pièce jointe n’est nécessaire pour envoyer votre demande.",
  shortAnswer:
    "Ce formulaire sert à qualifier précisément votre besoin d’assurance décennale afin qu’un professionnel partenaire puisse l’étudier utilement. Les questions portent sur vos activités réelles, votre entreprise, votre expérience, votre situation d’assurance actuelle et votre besoin. Aucune pièce jointe n’est exigée à ce stade : vous pourrez les déposer ensuite dans un espace sécurisé.",
  summaryBullets: [
    "Six étapes, sauvegarde de votre progression pendant la session.",
    "Aucune pièce jointe obligatoire avant l’envoi.",
    "Consentements distincts pour l’étude, la transmission et la prospection.",
    "Résumé complet avant envoi, modifiable étape par étape.",
  ],
  sections: [
    {
      id: "etapes",
      title: "Les six étapes du formulaire",
      paragraphs: [
        "Chaque étape correspond à une information dont le professionnel a réellement besoin. Aucun champ n’est présent pour de la seule collecte marketing.",
      ],
      bullets: [
        "Activité : métier principal, activités secondaires, sous-traitance",
        "Entreprise : situation, statut, date de création, effectif, chiffre d’affaires, zone",
        "Expérience : années de pratique, diplômes, qualifications, justificatifs disponibles",
        "Assurance actuelle : contrat en cours, antécédents, résiliation, sinistres",
        "Besoin : premier chantier, type de clientèle, garanties complémentaires souhaitées",
        "Contact : identité, coordonnées, canal et créneau de rappel, consentements",
      ],
    },
    {
      id: "role",
      title: "Ce que devient votre demande",
      paragraphs: [
        NOTICES.serviceRole,
        "Votre demande est d’abord qualifiée, puis transmise à un ou plusieurs professionnels partenaires habilités, uniquement après votre consentement explicite. Vous restez libre de ne donner suite à aucune proposition.",
      ],
    },
    {
      id: "donnees",
      title: "Vos données et vos droits",
      paragraphs: [
        NOTICES.formPrivacy,
        "La politique de confidentialité détaille le responsable du traitement, les finalités, les bases juridiques, les destinataires, les durées de conservation et les modalités d’exercice de vos droits.",
      ],
    },
  ],
  modules: [],
  faq: [
    {
      question: "La demande de devis est-elle engageante ?",
      answer:
        "Non. Transmettre une demande ne vous engage ni à souscrire, ni à résilier un contrat existant. Vous êtes libre de ne donner suite à aucune proposition reçue.",
    },
    {
      question: "Dois-je fournir des documents pour envoyer ma demande ?",
      answer:
        "Non. Aucune pièce jointe n’est obligatoire avant l’envoi. Vous pourrez déposer ensuite vos justificatifs dans un espace sécurisé, ce qui accélère l’étude du dossier.",
    },
    {
      question: "Combien de temps prend le formulaire ?",
      answer:
        "Quelques minutes si vous connaissez votre chiffre d’affaires et votre situation d’assurance. Votre progression est conservée pendant la session, ce qui permet de revenir en arrière sans tout ressaisir.",
    },
    {
      question: "Qui recevra mes informations ?",
      answer:
        "Un ou plusieurs professionnels partenaires habilités, après votre consentement. La liste des destinataires et les finalités sont indiquées dans la politique de confidentialité et sur la page Nos partenaires.",
    },
    {
      question: "Puis-je refuser la prospection commerciale ?",
      answer:
        "Oui. Le consentement à recevoir des offres commerciales futures est distinct du traitement nécessaire à votre demande de devis. Aucune case n’est précochée.",
    },
    {
      question: "Comment corriger une information après envoi ?",
      answer:
        "Contactez-nous en indiquant votre référence de demande. Vous pouvez également demander la rectification ou l’effacement de vos données selon les modalités décrites dans la politique de confidentialité.",
    },
  ],
  relatedPaths: [
    "/comparateur-assurance-decennale/",
    "/prix-assurance-decennale/",
    "/assurance-decennale/",
    "/metiers/",
    "/situations/",
    "/politique-confidentialite/",
    "/guides/documents-devis-assurance-decennale/",
  ],
  sources: ["servicePublicDecennale", "cnilDurees", "orias"],
  breadcrumbParents: [{ name: "Assurance décennale", path: "/assurance-decennale/" }],
});
