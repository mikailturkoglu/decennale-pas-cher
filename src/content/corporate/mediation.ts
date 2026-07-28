import { defineInfoPage } from "@/content/_factories";
import { siteConfig } from "@/data/site";

export const mediation = defineInfoPage({
  path: "/mediation/",
  name: "Médiation",
  status: "published",
  seo: {
    title: "Médiation : recours après une réclamation | DécennaleBTP.fr",
    description:
      "Quand et comment saisir un médiateur après une réclamation en assurance, quelles conditions de recevabilité et quelles limites propres aux professionnels.",
    primaryKeyword: "médiation assurance",
    secondaryKeywords: ["médiateur assurance décennale", "recours après réclamation assurance"],
  },
  h1: "Médiation",
  intro:
    "La médiation est un recours gratuit et non contentieux, ouvert après l’échec d’une réclamation. Elle ne remplace pas la réclamation : elle en constitue la suite.",
  sections: [
    {
      id: "mediateur-competent",
      title: "Le médiateur compétent",
      bullets: [
        `médiateur désigné pour le service rendu par le site : ${siteConfig.intermediation.mediator}`,
        "pour un litige relatif à un contrat d’assurance : le médiateur indiqué dans les documents contractuels de l’assureur ou de l’intermédiaire",
      ],
      callout: {
        tone: "legal",
        title: "Médiation et clientèle professionnelle",
        body: "Les dispositifs de médiation de la consommation sont conçus pour les particuliers. L’accès d’une entreprise à la médiation dépend du dispositif applicable et des conditions fixées par le médiateur concerné : vérifiez ce point avant de constituer votre dossier.",
      },
    },
    {
      id: "conditions",
      title: "Conditions de recevabilité",
      bullets: [
        "une réclamation écrite doit avoir été adressée au préalable",
        "la réponse reçue doit être insatisfaisante, ou le délai de réponse écoulé",
        "le litige ne doit pas être déjà porté devant un tribunal",
        "la demande doit être formée dans les délais prévus par le dispositif de médiation",
      ],
    },
    {
      id: "deroulement",
      title: "Comment se déroule une médiation",
      paragraphs: [
        "Le médiateur examine les pièces des deux parties et rend un avis motivé. Cet avis ne s’impose pas automatiquement : chaque partie reste libre de le suivre ou non, et de saisir ensuite le juge.",
        "Constituez un dossier factuel et daté : copie de la réclamation, réponse obtenue, échanges, documents contractuels, description précise du désaccord.",
      ],
    },
    {
      id: "voie-judiciaire",
      title: "La voie judiciaire",
      paragraphs: [
        "Le recours à la médiation ne vous prive pas du droit d’agir en justice. Il est toutefois recommandé de l’épuiser d’abord : il est gratuit, plus rapide, et l’avis rendu éclaire souvent utilement la suite.",
      ],
    },
  ],
  relatedPaths: ["/reclamation/", "/contact/", "/mentions-legales/", "/conditions-utilisation/"],
  sources: ["acpr", "orias"],
});
