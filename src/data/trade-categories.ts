import type { TradeCategorySlug } from "@/types/content";

export interface TradeCategory {
  slug: TradeCategorySlug;
  name: string;
  /** Nom court utilisé dans le fil d'Ariane. */
  shortName: string;
  /** Titre de page (H1), plus explicite que le title. */
  title: string;
  /** Title HTML, hors marque : doit rester court pour ne pas être tronqué. */
  seoTitle: string;
  description: string;
  intro: string;
  /** Ce que ce regroupement change concrètement pour l'assurance. */
  insuranceFocus: string[];
}

export const tradeCategories: readonly TradeCategory[] = [
  {
    slug: "preparation-amenagement-site",
    name: "Préparation et aménagement du site",
    shortName: "Préparation du site",
    title: "Assurance décennale : métiers de la préparation et de l’aménagement du site",
    seoTitle: "Décennale : terrassement, démolition et VRD",
    description:
      "Terrassement, démolition, VRD, traitement des sols : découvrez comment déclarer ces activités auprès d’un assureur décennale et demandez des propositions.",
    intro:
      "Ces activités interviennent avant ou autour de l’ouvrage. Certaines n’engagent la garantie décennale que lorsqu’elles participent à la solidité de l’ouvrage ou le rendent impropre à sa destination : la déclaration exacte des travaux est donc déterminante.",
    insuranceFocus: [
      "distinguer les travaux de sol qui conditionnent la stabilité de l’ouvrage",
      "vérifier la présence d’une étude géotechnique et son exploitation",
      "déclarer séparément les techniques particulières (injection, reprise en sous-œuvre, désamiantage)",
    ],
  },
  {
    slug: "gros-oeuvre-structure",
    name: "Structure et gros œuvre",
    shortName: "Gros œuvre",
    title: "Assurance décennale : métiers du gros œuvre et de la structure",
    seoTitle: "Assurance décennale : métiers du gros œuvre",
    description:
      "Maçonnerie, fondations, charpente, ossature bois : comparez des solutions de RC décennale adaptées aux activités de structure du bâtiment.",
    intro:
      "Le gros œuvre concentre les sinistres les plus lourds : fissuration, tassement, défaut de stabilité. Les assureurs y appliquent des critères d’expérience et de chiffre d’affaires plus stricts que sur les lots de finition.",
    insuranceFocus: [
      "justifier l’expérience et les qualifications sur les ouvrages porteurs",
      "délimiter les travaux avec étude de structure et ceux réalisés sans étude",
      "préciser la part de sous-traitance et les techniques utilisées",
    ],
  },
  {
    slug: "clos-couvert",
    name: "Clos et couvert",
    shortName: "Clos et couvert",
    title: "Assurance décennale : métiers du clos et du couvert",
    seoTitle: "Assurance décennale : clos et couvert",
    description:
      "Couverture, étanchéité, façade, menuiserie extérieure : déclarez précisément vos activités et demandez des propositions d’assurance décennale.",
    intro:
      "Le clos et le couvert protègent le bâtiment de l’eau et de l’air. L’impropriété à destination y est fréquemment retenue : une infiltration suffit souvent à engager la garantie décennale.",
    insuranceFocus: [
      "identifier les techniques d’étanchéité et de couverture réellement pratiquées",
      "traiter la question des travaux en hauteur et des supports existants",
      "déclarer les activités connexes (isolation par l’extérieur, bardage, zinguerie)",
    ],
  },
  {
    slug: "amenagement-finitions",
    name: "Divisions, aménagements et finitions",
    shortName: "Aménagement et finitions",
    title: "Assurance décennale : métiers de l’aménagement et des finitions",
    seoTitle: "Décennale : aménagement et finitions",
    description:
      "Plâtrerie, carrelage, peinture, menuiserie intérieure, serrurerie : comparez des solutions de décennale adaptées aux lots de finition.",
    intro:
      "Les lots de finition sont souvent perçus comme peu risqués. Ils génèrent pourtant des désordres coûteux dès qu’ils touchent à l’étanchéité intérieure, aux supports ou à la sécurité des personnes.",
    insuranceFocus: [
      "séparer les travaux purement esthétiques des travaux techniques (étanchéité sous carrelage, cloison coupe-feu)",
      "vérifier la couverture des supports repris ou préparés",
      "déclarer les prestations de fourniture et pose",
    ],
  },
  {
    slug: "lots-techniques",
    name: "Lots techniques",
    shortName: "Lots techniques",
    title: "Assurance décennale : métiers des lots techniques",
    seoTitle: "Assurance décennale : lots techniques",
    description:
      "Plomberie, chauffage, électricité, climatisation, énergies renouvelables : demandez des propositions de RC décennale adaptées à vos installations.",
    intro:
      "Les lots techniques mêlent installation, mise en service et éléments d’équipement. La frontière entre garantie décennale, garantie de bon fonctionnement et garantie du fabricant doit être comprise avant de souscrire.",
    insuranceFocus: [
      "distinguer les éléments d’équipement indissociables et dissociables",
      "déclarer les énergies renouvelables et les techniques non courantes",
      "vérifier la couverture de la mise en service et du dimensionnement",
    ],
  },
  {
    slug: "conception-maitrise-oeuvre",
    name: "Conception et maîtrise d’œuvre",
    shortName: "Conception",
    title: "Assurance décennale : conception, maîtrise d’œuvre et ingénierie",
    seoTitle: "Décennale : conception et maîtrise d’œuvre",
    description:
      "Architecte, maître d’œuvre, bureau d’études, contractant général : comparez des solutions de responsabilité décennale et de RC professionnelle.",
    intro:
      "Les intervenants de conception sont locateurs d’ouvrage au sens de la loi. Leur responsabilité décennale se combine à une responsabilité professionnelle plus large, qui couvre notamment les fautes de conception ou de suivi.",
    insuranceFocus: [
      "articuler responsabilité décennale et RC professionnelle",
      "déclarer le montant et la nature des opérations suivies",
      "préciser le rôle exact (conception, exécution, OPC, contractant général)",
    ],
  },
];

const categoryBySlug = new Map(tradeCategories.map((category) => [category.slug, category]));

export function getTradeCategory(slug: TradeCategorySlug): TradeCategory {
  const category = categoryBySlug.get(slug);
  if (!category) {
    throw new Error(`Catégorie de métier inconnue : ${slug}`);
  }
  return category;
}

export function tradeCategoryPath(slug: TradeCategorySlug): string {
  return `/metiers/${slug}/`;
}
