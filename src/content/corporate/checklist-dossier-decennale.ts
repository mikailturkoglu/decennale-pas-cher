import { defineInfoPage } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const checklistDossierDecennale = defineInfoPage({
  path: "/outils/checklist-dossier-decennale/",
  name: "Checklist du dossier décennale",
  status: "published",
  seo: {
    title: "Checklist : les documents de votre dossier décennale",
    description:
      "Répondez à trois questions et obtenez la liste des pièces à réunir pour votre demande d’assurance décennale, avec la raison pour laquelle chacune est demandée.",
    primaryKeyword: "checklist dossier assurance décennale",
    secondaryKeywords: [
      "documents assurance décennale",
      "pièces à fournir décennale",
      "dossier décennale création entreprise",
    ],
  },
  h1: "Checklist du dossier décennale",
  intro:
    "Indiquez votre situation : la liste des pièces attendues s’adapte, avec pour chacune la raison pour laquelle un assureur la demande. Comprendre l’objet d’une pièce évite de la fournir incomplète, ce qui est la première cause de retard dans l’étude d’un dossier.",
  sections: [
    {
      id: "pourquoi",
      title: "Pourquoi le dossier compte autant que le métier",
      paragraphs: [
        "À métier et chiffre d’affaires identiques, deux entreprises n’obtiennent pas le même traitement. La différence tient rarement au hasard : elle vient de la précision des activités décrites, de la cohérence des montants et de la présence des justificatifs d’expérience et de sinistralité.",
        "Un dossier incomplet n’est pas seulement plus lent : il conduit souvent à une proposition prudente, avec un périmètre d’activités réduit ou une franchise plus élevée, faute d’éléments permettant d’apprécier le risque.",
      ],
      callout: {
        tone: "info",
        title: "Portée de cet outil",
        body: NOTICES.toolDisclaimer,
      },
    },
    {
      id: "conseils",
      title: "Trois erreurs à éviter",
      bullets: [
        "décrire son activité par son code APE : il ne correspond pas aux activités d’assurance",
        "omettre une activité minoritaire mais facturée : c’est précisément là que naissent les défauts de garantie",
        "annoncer un chiffre d’affaires prévisionnel volontairement bas : la régularisation intervient en fin d’exercice",
      ],
    },
  ],
  relatedPaths: [
    "/guides/documents-devis-assurance-decennale/",
    "/guides/nomenclature-activites-btp/",
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/outils/",
  ],
  sources: ["servicePublicDecennale", "nomenclatureBtp"],
});
