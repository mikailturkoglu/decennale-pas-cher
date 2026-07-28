import { defineInfoPage } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";
import { siteConfig } from "@/data/site";

export const conditionsUtilisation = defineInfoPage({
  path: "/conditions-utilisation/",
  name: "Conditions d’utilisation",
  status: "published",
  seo: {
    title: "Conditions générales d’utilisation | DécennaleBTP.fr",
    description:
      "Règles d’utilisation du site, périmètre du service de mise en relation, obligations de l’utilisateur et limites de responsabilité de l’éditeur.",
    primaryKeyword: "conditions d’utilisation DécennaleBTP.fr",
    secondaryKeywords: ["CGU assurance décennale", "règles d’utilisation du service"],
  },
  h1: "Conditions générales d’utilisation",
  intro:
    "L’accès au site et l’utilisation du formulaire de demande de propositions impliquent l’acceptation des présentes conditions. Elles précisent ce que le service fait, ce qu’il ne fait pas, et ce que vous vous engagez à fournir.",
  sections: [
    {
      id: "objet",
      title: "Objet du service",
      paragraphs: [
        NOTICES.serviceRole,
        "Le service est réservé aux professionnels du bâtiment et à leurs mandataires. Il n’est pas destiné aux particuliers cherchant à assurer leur propre construction, qui relèvent de l’assurance dommages-ouvrage.",
      ],
    },
    {
      id: "gratuite",
      title: "Conditions financières",
      bullets: [
        `caractère gratuit du dépôt d’une demande pour le professionnel du bâtiment : ${siteConfig.trustSignals.freeService}`,
        `absence d’engagement à souscrire : ${siteConfig.trustSignals.noCommitment}`,
        `rémunération de l’éditeur : ${siteConfig.intermediation.remuneration}`,
      ],
    },
    {
      id: "engagements-utilisateur",
      title: "Vos engagements",
      paragraphs: [
        "L’exactitude des informations transmises conditionne directement la validité des propositions reçues et, à terme, l’étendue de votre couverture d’assurance.",
      ],
      bullets: [
        "fournir des informations exactes, complètes et à jour, notamment sur les activités réellement exercées",
        "déclarer sans omission tout sinistre, toute résiliation et tout chantier déjà ouvert",
        "n’utiliser le formulaire que pour une demande réelle, pour votre propre entreprise ou sur mandat",
        "ne pas tenter d’accéder aux parties non publiques du site ni d’en perturber le fonctionnement",
        "ne pas extraire massivement les contenus publiés",
      ],
      callout: {
        tone: "legal",
        title: "Conséquence d’une déclaration inexacte",
        body: "Une déclaration inexacte ou une omission peut entraîner la nullité du contrat d’assurance souscrit, ou une réduction d’indemnité, indépendamment de toute intervention du site.",
      },
    },
    {
      id: "limites",
      title: "Limites du service",
      bullets: [
        "aucune garantie d’acceptation par un assureur",
        "aucun engagement sur un nombre de propositions ni sur un délai contractuel",
        "aucun conseil personnalisé sur le contenu d’un contrat",
        "aucune souscription réalisée depuis le site",
        "les repères tarifaires publiés sont indicatifs, datés, et n’engagent aucun assureur",
      ],
    },
    {
      id: "disponibilite",
      title: "Disponibilité et évolutions",
      paragraphs: [
        "Le site peut être momentanément indisponible pour maintenance ou en cas d’incident technique. Les contenus, les fonctionnalités et les présentes conditions peuvent évoluer ; la version applicable est celle publiée à la date de votre visite.",
      ],
    },
    {
      id: "droit-applicable",
      title: "Droit applicable et réclamations",
      paragraphs: [
        "Les présentes conditions sont régies par le droit français. Toute difficulté doit être signalée en priorité par la procédure de réclamation, avant toute action contentieuse.",
      ],
    },
  ],
  relatedPaths: [
    "/mentions-legales/",
    "/politique-confidentialite/",
    "/reclamation/",
    "/mediation/",
    "/notre-methode/",
  ],
});
