import { defineInfoPage } from "@/content/_factories";
import { siteConfig } from "@/data/site";

export const reclamation = defineInfoPage({
  path: "/reclamation/",
  name: "Réclamation",
  status: "published",
  seo: {
    title: "Faire une réclamation | DécennaleBTP.fr",
    description:
      "Comment adresser une réclamation concernant le service DécennaleBTP.fr, quelles informations fournir, quels délais de traitement et quelles suites possibles.",
    primaryKeyword: "réclamation DécennaleBTP.fr",
    secondaryKeywords: ["réclamation assurance décennale", "litige courtier assurance construction"],
  },
  h1: "Faire une réclamation",
  intro:
    "Une réclamation est l’expression d’un mécontentement. Elle se distingue d’une simple demande d’information ou d’explication. Cette page décrit la procédure applicable au service rendu par le site, et indique vers qui vous orienter lorsque la difficulté concerne un contrat d’assurance.",
  sections: [
    {
      id: "identifier-le-bon-interlocuteur",
      title: "Identifier le bon interlocuteur",
      paragraphs: [
        "Cette étape évite des semaines perdues. Les réclamations relatives à un contrat, à une cotisation ou à un sinistre ne peuvent pas être traitées par l’éditeur du site, qui n’est ni assureur ni gestionnaire de votre contrat.",
      ],
      bullets: [
        "difficulté liée au site, au formulaire ou à la transmission de votre demande : procédure ci-dessous",
        "difficulté liée à un devis, à un contrat ou à un sinistre : service réclamation de l’assureur ou de l’intermédiaire, dont les coordonnées figurent sur vos documents contractuels",
        "difficulté liée à vos données personnelles : voir la politique de confidentialité",
      ],
    },
    {
      id: "comment-nous-saisir",
      title: "Comment nous saisir",
      bullets: [
        `par courriel : ${siteConfig.contact.email}, en indiquant « Réclamation » en objet`,
        `par courrier : ${siteConfig.publisher.address}`,
        `procédure applicable et interlocuteur désigné : ${siteConfig.intermediation.claimsProcedure}`,
      ],
      callout: {
        tone: "info",
        title: "Ce qui accélère le traitement",
        body: "Indiquez la référence de votre demande, la date des faits, les échanges déjà intervenus et l’objet précis de votre réclamation. Ne joignez aucune pièce d’identité ni document bancaire.",
      },
    },
    {
      id: "traitement",
      title: "Traitement de votre réclamation",
      paragraphs: [
        "Votre réclamation fait l’objet d’un accusé de réception, puis d’un examen. Une réponse écrite motivée vous est adressée. Les délais applicables sont ceux prévus par la procédure publiée ci-dessus.",
        "Si la réponse ne vous satisfait pas, vous pouvez saisir le médiateur compétent dans les conditions décrites sur la page dédiée, sans préjudice de votre droit d’agir en justice.",
      ],
    },
    {
      id: "suivi",
      title: "Suivi et amélioration",
      paragraphs: [
        "Les réclamations reçues sont enregistrées et analysées afin de corriger les causes récurrentes : formulation d’un contenu, champ de formulaire ambigu, information insuffisante sur le rôle du service.",
      ],
    },
  ],
  relatedPaths: [
    "/mediation/",
    "/contact/",
    "/politique-confidentialite/",
    "/mentions-legales/",
    "/partenaires/",
  ],
  sources: ["acpr"],
});
