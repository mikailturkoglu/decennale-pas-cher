import { defineInfoPage } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";
import { tradeCategories, tradeCategoryPath } from "@/data/trade-categories";
import type { InfoPage, TradeCategorySlug } from "@/types/content";

/**
 * Contenu éditorial des hubs.
 *
 * Les grilles de liens (métiers, situations, guides) sont produites par les
 * routes à partir des collections : ce fichier ne porte que le texte propre à
 * chaque hub, afin qu'aucun hub ne soit une simple page de liens.
 */

export const metiersHub = defineInfoPage({
  path: "/metiers/",
  name: "Métiers",
  status: "published",
  seo: {
    title: "Assurance décennale par métier du BTP | DécennaleBTP.fr",
    description:
      "Trouvez les informations propres à votre métier : travaux couverts, activités à déclarer, exclusions fréquentes, sinistres typiques et critères de tarification.",
    primaryKeyword: "assurance décennale par métier",
    secondaryKeywords: [
      "décennale métier bâtiment",
      "garantie décennale par activité",
      "assurance construction artisan métier",
    ],
  },
  h1: "L’assurance décennale métier par métier",
  intro:
    "Un contrat de décennale ne couvre pas « le bâtiment » : il couvre une liste d’activités précises. Ces pages partent donc du métier réellement exercé pour identifier les travaux à déclarer, les activités qui doivent figurer séparément sur l’attestation et les désordres qui engagent le plus souvent la responsabilité.",
  sections: [
    {
      id: "comment-utiliser",
      title: "Comment utiliser ces pages",
      bullets: [
        "partez du métier qui représente la majorité de votre chiffre d’affaires",
        "relevez les travaux que vous facturez et qui n’y figurent pas : ce sont vos activités à déclarer en plus",
        "comparez cette liste avec les activités inscrites sur votre attestation actuelle",
        "consultez la page de la situation qui vous concerne : création, résiliation, absence d’antécédent",
      ],
      callout: {
        tone: "warning",
        title: "Un métier n’est pas une activité d’assurance",
        body: NOTICES.nomenclature,
      },
    },
    {
      id: "familles",
      title: "Pourquoi ce classement par famille",
      paragraphs: [
        "Les assureurs raisonnent par nature de risque plus que par intitulé de métier. Les six familles utilisées ici suivent cette logique : ce qui prépare le terrain, ce qui porte l’ouvrage, ce qui le met à l’abri de l’eau et de l’air, ce qui l’aménage, ce qui l’équipe techniquement, et ce qui le conçoit.",
        "Cette organisation aide à repérer les activités voisines de la vôtre, qui sont souvent celles que vous facturez sans les avoir déclarées.",
      ],
    },
  ],
  relatedPaths: [
    "/assurance-decennale/",
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/situations/",
    "/guides/nomenclature-activites-btp/",
  ],
  sources: ["nomenclatureBtp", "servicePublicDecennale"],
});

export const situationsHub = defineInfoPage({
  path: "/situations/",
  name: "Situations",
  status: "published",
  seo: {
    title: "Assurance décennale selon votre situation | DécennaleBTP.fr",
    description:
      "Création d’entreprise, absence d’antécédent, résiliation, non-paiement, sinistre, chantier commencé : les démarches et les documents attendus selon votre situation.",
    primaryKeyword: "situations assurance décennale",
    secondaryKeywords: [
      "décennale création entreprise",
      "décennale après résiliation",
      "décennale sans antécédent",
    ],
  },
  h1: "Votre situation face à l’assurance décennale",
  intro:
    "À métier identique, deux entreprises ne sont pas traitées de la même façon. Ce qui fait la différence, c’est la situation : entreprise qui démarre, artisan jamais assuré, contrat résilié, sinistre déclaré, chantier déjà ouvert. Ces pages expliquent ce qui est examiné et comment présenter un dossier recevable.",
  sections: [
    {
      id: "principe",
      title: "Ce que l’assureur examine réellement",
      bullets: [
        "la continuité de garantie : une interruption pèse plus lourd qu’une absence d’ancienneté",
        "le motif exact d’une résiliation, qui n’a pas la même portée selon qu’il s’agit d’une dette ou d’une sinistralité",
        "l’expérience personnelle du dirigeant, déterminante lorsque l’entreprise est jeune",
        "la cohérence entre le chiffre d’affaires, l’effectif et les travaux annoncés",
      ],
      callout: {
        tone: "legal",
        title: "Aucune promesse d’acceptation",
        body: NOTICES.noAcceptancePromise,
      },
    },
    {
      id: "situations-difficiles",
      title: "Situations difficiles : la règle du jeu",
      paragraphs: [
        "Pour les dossiers sortant du cadre habituel, la transparence est le meilleur levier. Une résiliation expliquée, une dette régularisée, un sinistre documenté avec les mesures correctives prises constituent un dossier étudiable ; les mêmes éléments découverts en cours d’instruction bloquent la démarche.",
        "Un point ne souffre aucune ambiguïté : un nouveau contrat ne couvre jamais automatiquement un chantier ouvert ou un sinistre survenu avant sa date d’effet.",
      ],
    },
  ],
  relatedPaths: [
    "/assurance-decennale/",
    "/devis-assurance-decennale/",
    "/metiers/",
    "/guides/documents-devis-assurance-decennale/",
    "/guides/date-effet-assurance-decennale/",
  ],
  sources: ["servicePublicDecennale", "codeAssurancesL113_12"],
});

export const guidesHub = defineInfoPage({
  path: "/guides/",
  name: "Guides",
  status: "published",
  seo: {
    title: "Guides sur l’assurance décennale du bâtiment | DécennaleBTP.fr",
    description:
      "Obligation, garanties, exclusions, attestation, nomenclature, franchise, résiliation : les guides de référence pour comprendre l’assurance décennale et décider.",
    primaryKeyword: "guides assurance décennale",
    secondaryKeywords: [
      "comprendre l’assurance décennale",
      "guide garantie décennale",
      "documentation assurance construction",
    ],
  },
  h1: "Guides sur l’assurance décennale",
  intro:
    "Ces guides traitent une question à la fois, de façon complète et sourcée. Chacun cite les textes applicables, indique sa date de mise à jour et renvoie vers la page métier ou la situation concernée.",
  sections: [
    {
      id: "principes-editoriaux",
      title: "Nos principes de rédaction",
      bullets: [
        "une question par guide, traitée jusqu’au bout plutôt qu’un article court par variante",
        "les textes de loi cités, pour que vous puissiez vérifier",
        "les dates de publication, de modification et de prochaine révision affichées",
        "aucune donnée tarifaire sans hypothèses ni date de référence",
      ],
    },
  ],
  relatedPaths: [
    "/assurance-decennale/",
    "/metiers/",
    "/situations/",
    "/prix-assurance-decennale/",
    "/outils/",
  ],
  sources: ["servicePublicDecennale", "codeAssurances", "nomenclatureBtp"],
});

export const hubPages: readonly InfoPage[] = [metiersHub, situationsHub, guidesHub];

/** Métadonnées d'un sous-hub de catégorie de métiers, dérivées du registre. */
export function tradeCategoryInfoPage(slug: TradeCategorySlug): InfoPage {
  const category = tradeCategories.find((item) => item.slug === slug);
  if (!category) {
    throw new Error(`Catégorie de métier inconnue : ${slug}`);
  }

  return defineInfoPage({
    path: tradeCategoryPath(category.slug),
    name: category.name,
    status: "published",
    seo: {
      title: `${category.seoTitle} | DécennaleBTP.fr`,
      description: category.description,
      primaryKeyword: `assurance décennale ${category.shortName.toLowerCase()}`,
      secondaryKeywords: ["activités à déclarer", "garantie décennale par métier"],
    },
    h1: category.title,
    intro: category.intro,
    sections: [
      {
        id: "enjeux-assurance",
        title: "Ce que cette famille de métiers change en assurance",
        bullets: category.insuranceFocus,
      },
    ],
    breadcrumbParents: [{ name: "Métiers", path: "/metiers/" }],
    relatedPaths: ["/metiers/", "/devis-assurance-decennale/", "/guides/nomenclature-activites-btp/"],
    sources: ["nomenclatureBtp", "servicePublicDecennale"],
  });
}

export const tradeCategoryInfoPages: readonly InfoPage[] = tradeCategories.map((category) =>
  tradeCategoryInfoPage(category.slug),
);
