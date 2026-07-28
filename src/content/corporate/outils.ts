import { defineInfoPage } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const outils = defineInfoPage({
  path: "/outils/",
  name: "Outils",
  status: "published",
  seo: {
    title: "Outils pratiques pour votre assurance décennale | DécennaleBTP.fr",
    description:
      "Checklist du dossier à constituer, repères de nomenclature d’activités : des outils pratiques pour préparer une demande d’assurance décennale complète.",
    primaryKeyword: "outils assurance décennale",
    secondaryKeywords: ["checklist dossier décennale", "préparer un dossier décennale"],
  },
  h1: "Outils pratiques",
  intro:
    "Ces outils servent à préparer un dossier complet avant de demander des propositions. Un dossier complet est le principal levier sur lequel une entreprise peut agir : il réduit les allers-retours et évite les activités mal déclarées.",
  sections: [
    {
      id: "disponibles",
      title: "Outils disponibles",
      bullets: [
        "Checklist du dossier décennale : la liste des pièces à réunir selon votre situation réelle.",
      ],
    },
    {
      id: "en-preparation",
      title: "En préparation",
      paragraphs: [
        "Les outils suivants sont en cours de construction. Ils ne seront publiés qu’avec une méthodologie documentée et des données vérifiables : aucun simulateur affichant un tarif non sourcé ne sera mis en ligne.",
      ],
      bullets: [
        "aide à la traduction de vos travaux en activités de nomenclature",
        "repères de prix par métier et par tranche de chiffre d’affaires, avec échantillon et méthode publiés",
        "correspondance entre code APE et activités d’assurance",
      ],
      callout: {
        tone: "warning",
        title: "Limite des outils",
        body: NOTICES.toolDisclaimer,
      },
    },
  ],
  relatedPaths: [
    "/outils/checklist-dossier-decennale/",
    "/guides/documents-devis-assurance-decennale/",
    "/guides/nomenclature-activites-btp/",
    "/devis-assurance-decennale/",
  ],
});
