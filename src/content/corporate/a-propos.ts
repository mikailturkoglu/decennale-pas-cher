import { defineInfoPage } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";
import { siteConfig } from "@/data/site";

export const aPropos = defineInfoPage({
  path: "/a-propos/",
  name: "À propos",
  status: "published",
  seo: {
    title: "À propos de DécennaleBTP.fr : qui nous sommes | DécennaleBTP.fr",
    description:
      "Qui édite DécennaleBTP.fr, quel est le rôle du site, comment il est financé et ce qu’il ne fait pas. Transparence sur le modèle et les limites du service.",
    primaryKeyword: "à propos DécennaleBTP.fr",
    secondaryKeywords: ["qui sommes-nous décennale", "éditeur du site assurance décennale"],
  },
  h1: "À propos de DécennaleBTP.fr",
  intro:
    "DécennaleBTP.fr est un service spécialisé dans l’assurance de responsabilité civile décennale des professionnels du bâtiment. Cette page présente l’entité éditrice, le rôle exact du site, son modèle économique et les limites de son intervention.",
  sections: [
    {
      id: "notre-role",
      title: "Le rôle du site",
      paragraphs: [
        NOTICES.serviceRole,
        "Concrètement, le site poursuit deux objectifs. D’une part, expliquer l’assurance décennale métier par métier et situation par situation, avec un niveau de détail suffisant pour préparer un dossier. D’autre part, recueillir une demande structurée et la transmettre à un professionnel habilité, qui étudie la demande et revient vers vous.",
      ],
      bullets: [
        "informer sur l’obligation d’assurance et les activités à déclarer",
        "qualifier une demande de devis à partir de l’activité réellement exercée",
        "transmettre cette demande à un professionnel autorisé",
        "documenter publiquement la méthode et les limites du service",
      ],
    },
    {
      id: "ce-que-nous-ne-faisons-pas",
      title: "Ce que le site ne fait pas",
      paragraphs: [
        "La transparence sur les limites du service compte autant que la description de ses apports. Les points suivants sont volontairement exclus du périmètre.",
      ],
      bullets: [
        "aucun classement automatisé de l’ensemble des contrats du marché",
        "aucun conseil personnalisé sur le contenu d’un contrat d’assurance",
        "aucune souscription directe depuis le site",
        "aucune décision d’acceptation ou de refus : elle appartient à l’assureur",
        "aucun tarif contractuel affiché : les repères publiés sont indicatifs et datés",
      ],
    },
    {
      id: "editeur",
      title: "L’entité éditrice",
      paragraphs: [
        `Le site est édité par ${siteConfig.publisher.legalName}, ${siteConfig.publisher.legalForm}, immatriculée sous le SIREN ${siteConfig.publisher.siren}, dont le siège est situé ${siteConfig.publisher.address}. Le directeur de la publication est ${siteConfig.publisher.publicationDirector}.`,
        "Les mentions légales complètes, l’hébergeur et les coordonnées de contact figurent sur la page dédiée.",
      ],
    },
    {
      id: "modele-economique",
      title: "Comment le service est financé",
      paragraphs: [
        `La rémunération du site est la suivante : ${siteConfig.intermediation.remuneration}. Cette information est publiée pour que vous puissiez apprécier l’intérêt économique du service à vous mettre en relation avec un partenaire.`,
        "Aucun contenu éditorial n’est vendu. Les pages d’information ne sont pas rédigées à la demande d’un assureur et ne comportent pas de liens commerciaux dissimulés.",
      ],
    },
    {
      id: "expertise",
      title: "L’expertise mobilisée",
      paragraphs: [
        "Les contenus techniques sont rédigés puis relus par des personnes identifiées, dont le parcours est publié sur la page du comité de relecture. Les contenus juridiques citent les textes applicables ; les contenus tarifaires précisent leurs hypothèses et leur date de référence.",
        "Lorsqu’une information ne peut pas être vérifiée, elle n’est pas publiée. C’est la raison pour laquelle certaines valeurs apparaissent explicitement comme non renseignées plutôt que sous forme d’estimation approximative.",
      ],
    },
  ],
  relatedPaths: ["/notre-methode/", "/experts/", "/partenaires/", "/contact/", "/mentions-legales/"],
});
