import { defineInfoPage } from "@/content/_factories";
import { businessModel, siteConfig } from "@/data/site";

/**
 * Mentions légales.
 *
 * Les informations d'intermédiation ne sont affichées que si le modèle retenu
 * est celui de la distribution : sous le modèle de mise en relation, publier un
 * numéro ORIAS ou une catégorie d'immatriculation serait trompeur.
 */
const intermediationSection = {
  id: "intermediation",
  title: "Intermédiation en assurance",
  paragraphs: [
    `Immatriculation au registre unique des intermédiaires en assurance (ORIAS) : ${siteConfig.intermediation.oriasNumber}. Catégorie d’immatriculation : ${siteConfig.intermediation.oriasCategory}.`,
    `Autorité de contrôle : ${siteConfig.intermediation.supervisor}.`,
    `Nature de la rémunération : ${siteConfig.intermediation.remuneration}. Liens capitalistiques et participations : ${siteConfig.intermediation.partners}.`,
  ],
  bullets: [
    "l’immatriculation est vérifiable gratuitement sur le registre de l’ORIAS",
    "les informations précontractuelles sont remises avant toute souscription",
    "les modalités de réclamation et de médiation figurent sur les pages dédiées",
  ],
};

export const mentionsLegales = defineInfoPage({
  path: "/mentions-legales/",
  name: "Mentions légales",
  status: "published",
  seo: {
    title: "Mentions légales | DécennaleBTP.fr",
    description:
      "Éditeur du site, hébergeur, directeur de la publication, propriété intellectuelle et informations réglementaires applicables à DécennaleBTP.fr.",
    primaryKeyword: "mentions légales DécennaleBTP.fr",
    secondaryKeywords: ["éditeur du site", "hébergeur"],
  },
  h1: "Mentions légales",
  intro:
    "Informations relatives à l’éditeur du site, à son hébergement et aux conditions d’utilisation des contenus publiés.",
  sections: [
    {
      id: "editeur",
      title: "Éditeur du site",
      bullets: [
        `raison sociale : ${siteConfig.publisher.legalName}`,
        `forme juridique : ${siteConfig.publisher.legalForm}`,
        `capital social : ${siteConfig.publisher.shareCapital}`,
        `SIREN : ${siteConfig.publisher.siren}`,
        `siège social : ${siteConfig.publisher.address}`,
        `courriel : ${siteConfig.contact.email}`,
        `téléphone : ${siteConfig.contact.phone}`,
        `directeur de la publication : ${siteConfig.publisher.publicationDirector}`,
      ],
    },
    {
      id: "hebergeur",
      title: "Hébergeur",
      bullets: [
        `hébergeur : ${siteConfig.publisher.host}`,
        `adresse : ${siteConfig.publisher.hostAddress}`,
      ],
    },
    ...(businessModel === "distribution" ? [intermediationSection] : []),
    {
      id: "nature-du-service",
      title: "Nature du service",
      paragraphs: [
        "Le site publie des informations générales sur l’assurance de responsabilité civile décennale et permet de déposer une demande de propositions d’assurance, transmise à un professionnel habilité.",
        "Les contenus publiés ont une valeur informative. Ils ne constituent ni un conseil personnalisé, ni une offre de contrat, ni un engagement d’assurance. Seuls les documents contractuels remis par l’assureur font foi.",
      ],
    },
    {
      id: "propriete-intellectuelle",
      title: "Propriété intellectuelle",
      paragraphs: [
        "Les textes, structures de pages, tableaux et éléments graphiques du site sont protégés. Toute reproduction, même partielle, est soumise à autorisation écrite préalable, à l’exception des courtes citations accompagnées d’un lien vers la page source.",
        "Les marques et dénominations sociales citées appartiennent à leurs titulaires respectifs. Leur mention n’implique aucun partenariat ni approbation.",
      ],
    },
    {
      id: "liens",
      title: "Liens et sources externes",
      paragraphs: [
        "Le site renvoie vers des sources officielles afin de permettre la vérification des informations publiées. L’éditeur n’exerce aucun contrôle sur le contenu des sites tiers et ne saurait être tenu responsable de leur évolution.",
      ],
    },
    {
      id: "responsabilite",
      title: "Limitation de responsabilité",
      paragraphs: [
        "Les informations sont vérifiées à leur date de publication, indiquée sur chaque page. La réglementation, les nomenclatures d’activités et les pratiques des assureurs évoluant, il appartient à chaque professionnel de faire confirmer sa situation par l’assureur ou l’intermédiaire chargé de son dossier.",
      ],
    },
  ],
  relatedPaths: [
    "/politique-confidentialite/",
    "/politique-cookies/",
    "/conditions-utilisation/",
    "/reclamation/",
    "/mediation/",
    "/a-propos/",
  ],
  sources: ["orias", "acpr"],
});
