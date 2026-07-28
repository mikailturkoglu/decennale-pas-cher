import { defineInfoPage } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";
import { siteConfig } from "@/data/site";

export const notreMethode = defineInfoPage({
  path: "/notre-methode/",
  name: "Notre méthode",
  status: "published",
  seo: {
    title: "Notre méthode : ce que nous comparons et comment | DécennaleBTP.fr",
    description:
      "Quelles offres sont réellement étudiées, comment les partenaires sont sélectionnés, quels critères sont examinés, ce qui n’est pas comparé et comment nos contenus sont vérifiés.",
    primaryKeyword: "méthodologie comparaison assurance décennale",
    secondaryKeywords: [
      "comment nous comparons les devis décennale",
      "méthode DécennaleBTP.fr",
      "panel comparé assurance décennale",
    ],
  },
  h1: "Notre méthode",
  intro:
    "Cette page décrit précisément ce que le service fait, sur quel périmètre, selon quels critères, et comment nos contenus sont produits et vérifiés. Elle est mise à jour à chaque évolution du fonctionnement réel du service.",
  sections: [
    {
      id: "perimetre",
      title: "Le périmètre réellement étudié",
      paragraphs: [NOTICES.panelScope],
      bullets: [
        `partenaires auxquels les demandes sont transmises : ${siteConfig.intermediation.partners}`,
        `périmètre de marché couvert : ${siteConfig.intermediation.comparedPanel}`,
        "aucun engagement sur un nombre de propositions : il dépend de l’étude du dossier",
      ],
      callout: {
        tone: "warning",
        title: "Pourquoi nous ne parlons pas de classement",
        body: "Un classement suppose de comparer des contrats sur des critères homogènes et de publier la méthode de notation. Tant que cette méthode n’est pas établie et vérifiable, le site se limite à qualifier et transmettre une demande.",
      },
    },
    {
      id: "selection-partenaires",
      title: "Comment les partenaires sont sélectionnés",
      paragraphs: [
        "Les critères de sélection sont publiés afin que vous sachiez pourquoi votre demande est adressée à tel professionnel plutôt qu’à un autre.",
      ],
      bullets: [
        "habilitation à exercer l’intermédiation ou la distribution en assurance, vérifiable au registre",
        "spécialisation réelle en assurance construction et connaissance des nomenclatures d’activités BTP",
        "capacité à traiter les profils difficiles : création, absence d’antécédent, résiliation, sinistralité",
        "délai de traitement constaté et qualité du retour d’information",
        "clarté des documents remis au professionnel du bâtiment",
      ],
    },
    {
      id: "criteres-examines",
      title: "Les critères examinés dans une demande",
      paragraphs: [
        "La qualification consiste à réunir les éléments qui déterminent réellement l’acceptation et le tarif. Elle ne consiste pas à collecter le maximum de données personnelles.",
      ],
      bullets: [
        "activités effectivement exercées, traduites en activités déclarables",
        "chiffre d’affaires réalisé ou prévisionnel, et sa ventilation",
        "expérience du dirigeant et qualifications de l’entreprise",
        "historique d’assurance : continuité, résiliation, sinistralité",
        "part de sous-traitance et nature des chantiers",
        "date d’effet souhaitée au regard des chantiers à venir",
      ],
    },
    {
      id: "ce-qui-nest-pas-compare",
      title: "Ce qui n’est pas comparé",
      bullets: [
        "l’intégralité des contrats disponibles sur le marché français",
        "les contrats distribués exclusivement par des réseaux auxquels le site n’a pas accès",
        "la qualité de gestion des sinistres, faute de données publiques homogènes",
        "les tarifs futurs : une cotisation n’est ferme qu’au stade du devis établi par l’assureur",
      ],
    },
    {
      id: "methode-editoriale",
      title: "Comment nos contenus sont produits",
      paragraphs: [
        "Chaque page est rattachée à une intention de recherche identifiée et écrite pour y répondre de façon autonome. Une page n’est publiée que si elle apporte des éléments spécifiques : travaux réellement concernés, exemples de désordres, documents attendus, questions propres au métier ou à la situation.",
        "Les contenus juridiques citent les textes applicables. Les contenus tarifaires indiquent la date de référence et les hypothèses retenues ; en l’absence de donnée vérifiée, le montant reste affiché comme non renseigné plutôt qu’estimé.",
      ],
      bullets: [
        "rédaction par un auteur identifié, relecture par un professionnel de l’assurance construction",
        "date de publication, date de modification et date de prochaine révision affichées",
        "sources officielles listées en bas de page",
        "révision des pages tarifaires au moins deux fois par an",
        "retrait immédiat de toute donnée devenue inexacte",
      ],
    },
    {
      id: "donnees",
      title: "Le traitement de votre demande",
      paragraphs: [
        "Une demande est d’abord contrôlée pour vérifier sa cohérence technique, puis transmise au partenaire compétent avec les éléments utiles à son étude. Le site n’émet aucune décision d’acceptation et n’attribue aucune note à votre entreprise qui vous serait opposable.",
        NOTICES.noAcceptancePromise,
      ],
    },
  ],
  relatedPaths: [
    "/a-propos/",
    "/partenaires/",
    "/experts/",
    "/comparateur-assurance-decennale/",
    "/politique-confidentialite/",
  ],
  sources: ["orias", "acpr", "nomenclatureBtp"],
});
