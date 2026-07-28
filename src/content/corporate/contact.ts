import { defineInfoPage } from "@/content/_factories";
import { siteConfig } from "@/data/site";

export const contact = defineInfoPage({
  path: "/contact/",
  name: "Contact",
  status: "published",
  seo: {
    title: "Contacter DécennaleBTP.fr | DécennaleBTP.fr",
    description:
      "Nous joindre pour une question sur votre demande de devis d’assurance décennale, l’exercice de vos droits sur vos données ou une réclamation.",
    primaryKeyword: "contact DécennaleBTP.fr",
    secondaryKeywords: ["joindre décennale BTP", "téléphone assurance décennale"],
  },
  h1: "Nous contacter",
  intro:
    "Pour toute question sur une demande en cours, sur vos données personnelles ou sur le fonctionnement du service, utilisez les coordonnées ci-dessous. Pour obtenir des propositions d’assurance, la demande de devis en ligne reste la voie la plus rapide : elle rassemble d’emblée les éléments nécessaires à l’étude.",
  sections: [
    {
      id: "coordonnees",
      title: "Coordonnées",
      bullets: [
        `téléphone : ${siteConfig.contact.phone}`,
        `courriel : ${siteConfig.contact.email}`,
        `adresse postale : ${siteConfig.publisher.address}`,
        `horaires de rappel : ${siteConfig.contact.callbackHours}`,
      ],
    },
    {
      id: "demande-de-devis",
      title: "Une demande de devis en cours",
      paragraphs: [
        "Si vous avez déjà déposé une demande, indiquez sa référence dans votre message : elle figure sur la page de confirmation et dans le courriel d’accusé de réception. Cela évite de faire circuler à nouveau des informations sensibles.",
        "Ne transmettez jamais de pièce d’identité, de relevé bancaire ou de document confidentiel par courriel non sécurisé. Un espace de dépôt est proposé après l’envoi de votre demande.",
      ],
    },
    {
      id: "donnees-personnelles",
      title: "Données personnelles",
      paragraphs: [
        `Pour exercer vos droits d’accès, de rectification, d’effacement, d’opposition ou de limitation, adressez votre demande à ${siteConfig.privacy.controller}. Le détail des traitements, des durées de conservation et des voies de recours figure dans la politique de confidentialité.`,
      ],
    },
    {
      id: "reclamation",
      title: "Réclamation",
      paragraphs: [
        "Une insatisfaction relative au service rendu par le site suit la procédure de réclamation dédiée. Une réclamation portant sur un contrat d’assurance ou sur la gestion d’un sinistre doit être adressée à l’assureur ou à l’intermédiaire concerné, dont les coordonnées figurent sur vos documents contractuels.",
      ],
    },
  ],
  relatedPaths: [
    "/devis-assurance-decennale/",
    "/reclamation/",
    "/politique-confidentialite/",
    "/mentions-legales/",
    "/a-propos/",
  ],
});
