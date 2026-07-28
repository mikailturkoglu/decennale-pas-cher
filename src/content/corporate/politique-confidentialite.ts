import { defineInfoPage } from "@/content/_factories";
import { siteConfig } from "@/data/site";

export const politiqueConfidentialite = defineInfoPage({
  path: "/politique-confidentialite/",
  name: "Politique de confidentialité",
  status: "published",
  seo: {
    title: "Politique de confidentialité | DécennaleBTP.fr",
    description:
      "Quelles données sont collectées lors d’une demande de devis d’assurance décennale, pour quelles finalités, à qui elles sont transmises et comment exercer vos droits.",
    primaryKeyword: "politique de confidentialité DécennaleBTP.fr",
    secondaryKeywords: ["RGPD demande de devis décennale", "données personnelles assurance décennale"],
  },
  h1: "Politique de confidentialité",
  intro:
    "Cette politique décrit le traitement des données que vous nous communiquez, en particulier lors d’une demande de propositions d’assurance décennale. Elle est rédigée pour être lue avant de remplir le formulaire, et non après.",
  sections: [
    {
      id: "responsable",
      title: "Responsable du traitement",
      bullets: [
        `responsable du traitement : ${siteConfig.privacy.controller}`,
        `délégué à la protection des données : ${siteConfig.privacy.dpo}`,
        `adresse postale : ${siteConfig.publisher.address}`,
        `contact : ${siteConfig.contact.email}`,
      ],
    },
    {
      id: "donnees-collectees",
      title: "Données collectées",
      paragraphs: [
        "Le formulaire de demande de devis ne comporte que les champs nécessaires à l’étude d’un risque en assurance construction. Les champs facultatifs sont signalés comme tels et peuvent rester vides.",
      ],
      bullets: [
        "identification de l’entreprise : raison sociale, statut juridique, SIREN, date de création, effectif",
        "activité : métier principal, activités secondaires, description des travaux, sous-traitance",
        "données économiques : chiffre d’affaires réalisé ou prévisionnel, montant moyen des chantiers",
        "expérience : ancienneté dans le métier, diplômes, qualifications professionnelles",
        "historique d’assurance : assureur précédent, échéance, résiliation et motif, sinistres déclarés",
        "coordonnées : nom, prénom, téléphone, courriel, code postal, préférences de rappel",
        "pièces justificatives, uniquement si vous choisissez de les déposer après l’envoi de la demande",
      ],
      callout: {
        tone: "info",
        title: "Ce que nous ne collectons pas",
        body: "Aucune donnée bancaire, aucune donnée de santé et aucune donnée relative à des condamnations n’est demandée. Ne joignez jamais de tels éléments à votre demande.",
      },
    },
    {
      id: "finalites",
      title: "Finalités et bases légales",
      bullets: [
        "qualifier et traiter votre demande de propositions d’assurance : exécution de la demande que vous avez initiée",
        "transmettre votre demande à un partenaire habilité : consentement spécifique, recueilli séparément",
        "vous adresser des informations commerciales ultérieures : consentement facultatif, révocable à tout moment",
        "sécuriser le service et prévenir les abus : intérêt légitime de l’éditeur",
        "mesurer l’audience du site : consentement, via la bannière de gestion des traceurs",
        "répondre à nos obligations légales et conserver les éléments de preuve : obligation légale et intérêt légitime",
      ],
    },
    {
      id: "destinataires",
      title: "Destinataires",
      paragraphs: [
        `Votre demande est transmise aux partenaires habilités identifiés sur la page dédiée : ${siteConfig.intermediation.partners}. Cette liste est tenue à jour et consultable à tout moment.`,
        "Interviennent également nos sous-traitants techniques : hébergement, envoi de courriels transactionnels, stockage sécurisé des pièces jointes et outil de suivi des demandes. Ils agissent sur instruction et sont liés par des engagements de confidentialité.",
      ],
      bullets: [
        "aucune donnée n’est vendue",
        "aucune donnée n’est transmise à un partenaire sans consentement spécifique",
        "aucun transfert hors Union européenne n’est réalisé sans encadrement approprié",
      ],
    },
    {
      id: "durees",
      title: "Durées de conservation",
      bullets: [
        `demande de devis sans suite : ${siteConfig.privacy.quoteRetention}`,
        `prospection commerciale après consentement : ${siteConfig.privacy.prospectionRetention}`,
        `pièces justificatives déposées : ${siteConfig.privacy.documentRetention}`,
        "preuve du consentement aux traceurs : 6 mois",
        "éléments nécessaires à la défense des droits : durée des prescriptions applicables",
      ],
      callout: {
        tone: "legal",
        title: "Suppression effective",
        body: "À l’issue de la durée applicable, les données sont supprimées ou anonymisées, y compris les pièces jointes stockées. Aucun document n’est conservé sans durée définie.",
      },
    },
    {
      id: "vos-droits",
      title: "Vos droits",
      paragraphs: [
        `Vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité, ainsi que du droit de retirer votre consentement à tout moment. Adressez votre demande à ${siteConfig.contact.email} en précisant l’objet et, si possible, la référence de votre demande de devis.`,
        "Vous pouvez également introduire une réclamation auprès de la Commission nationale de l’informatique et des libertés (CNIL).",
      ],
    },
    {
      id: "securite",
      title: "Sécurité",
      bullets: [
        "chiffrement des échanges entre votre navigateur et le site",
        "accès aux demandes restreint aux personnes habilitées",
        "pièces jointes stockées de façon chiffrée, accessibles uniquement par lien temporaire signé",
        "aucune donnée personnelle inscrite dans les journaux techniques de l’application",
        "contrôle du type et de la taille des fichiers déposés",
      ],
    },
    {
      id: "cookies",
      title: "Cookies et traceurs",
      paragraphs: [
        "Aucun traceur soumis à consentement n’est déposé avant votre accord. La liste des cookies, leur finalité et leur durée figurent dans la politique cookies, où votre choix peut être modifié à tout moment.",
      ],
    },
  ],
  relatedPaths: [
    "/politique-cookies/",
    "/partenaires/",
    "/mentions-legales/",
    "/conditions-utilisation/",
    "/contact/",
  ],
  sources: ["cnilDurees", "cnilCookies"],
});
