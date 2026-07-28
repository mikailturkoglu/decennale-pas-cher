import type { BreadcrumbSegment, SeoFields } from "@/types/seo";

export type ContentStatus = "draft" | "review" | "published";
export type ContentPriority = "P0" | "P1" | "P2";

export type TradeCategorySlug =
  | "preparation-amenagement-site"
  | "gros-oeuvre-structure"
  | "clos-couvert"
  | "amenagement-finitions"
  | "lots-techniques"
  | "conception-maitrise-oeuvre";

export interface ExpertReference {
  id: string;
  name: string;
  role: string;
  /** Chemin du profil sur le site, avec slash final. */
  profilePath: string;
  /** Numéro ORIAS, uniquement si la personne est réellement immatriculée. */
  oriasNumber?: string;
  experience?: string;
  qualifications?: string[];
  bio?: string;
  photoUrl?: string;
}

export interface SourceReference {
  label: string;
  publisher: string;
  url: string;
  /** Date de consultation ou de publication de la source (ISO). */
  consultedAt?: string;
}

/**
 * Fourchette tarifaire indicative. Les montants restent volontairement
 * absents (undefined) tant qu'une donnée sourcée n'est pas fournie :
 * la couche d'affichage rend alors un placeholder explicite.
 */
export interface PriceBand {
  label: string;
  annualRevenue?: string;
  experience?: string;
  insuranceHistory?: string;
  minAnnualPremium?: number;
  maxAnnualPremium?: number;
  currency: "EUR";
  sourceLabel?: string;
  sourceDate?: string;
  disclaimer: string;
}

export interface RiskScenario {
  title: string;
  context: string;
  damage: string;
  liability: string;
  /** Coût indicatif : uniquement si sourcé, sinon laisser vide. */
  indicativeCost?: string;
  reserve: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WorkClassificationRow {
  work: string;
  usuallyIncluded: "Oui" | "Non" | "Selon contrat";
  separateDeclaration: "Recommandée" | "Obligatoire" | "Non concernée";
  watchOut: string;
}

export interface ContentSection {
  /** Ancre utilisée dans le sommaire (slug sans #). */
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Contenu additionnel libre, rendu après les paragraphes et listes. */
  callout?: { tone: "info" | "warning" | "legal"; title: string; body: string };
}

export interface EditorialMeta {
  authorId: string;
  reviewerId?: string;
  publishedAt: string;
  modifiedAt: string;
  nextReviewAt?: string;
}

interface BaseContent {
  slug: string;
  status: ContentStatus;
  priority: ContentPriority;
  seo: SeoFields;
  h1: string;
  /** Réponse directe affichée en haut de page, sans préambule. */
  shortAnswer: string;
  summaryBullets: string[];
  faq: FaqItem[];
  relatedPaths: string[];
  sources: SourceReference[];
  editorial: EditorialMeta;
  breadcrumb: BreadcrumbSegment[];
}

export interface TradePage extends BaseContent {
  type: "trade";
  /** Nom du métier tel qu'affiché ("Maçon"). */
  name: string;
  /** Nom au pluriel/générique pour les phrases ("les maçons"). */
  pluralName: string;
  category: TradeCategorySlug;
  /** Valeur envoyée au formulaire (champ trade). */
  formTradeValue: string;
  specificity: string[];
  coveredWork: string[];
  accessoryWork: string[];
  separatelyDeclaredWork: string[];
  commonExclusions: string[];
  workTable: WorkClassificationRow[];
  riskScenarios: RiskScenario[];
  priceBands: PriceBand[];
  pricingFactors: string[];
  requiredDocuments: string[];
  startupNotes: string[];
  comparisonPoints: string[];
  relatedTradeSlugs: string[];
}

export interface SituationPage extends BaseContent {
  type: "situation";
  name: string;
  /** Valeur envoyée au formulaire (champ situation). */
  formSituationValue: string;
  /** Vrai pour les situations sensibles (résiliation, sinistre, ...). */
  sensitive: boolean;
  sections: ContentSection[];
  documents: string[];
  pricingFactors: string[];
  commonMistakes: string[];
  suggestedTradeSlugs: string[];
}

export interface LandingPage extends BaseContent {
  type: "landing";
  name: string;
  heroTitle: string;
  heroText: string;
  sections: ContentSection[];
  /** Blocs dynamiques insérés par le gabarit, dans l'ordre souhaité. */
  modules: LandingModule[];
}

export type LandingModule =
  | "quote-form-teaser"
  | "trade-grid"
  | "situation-grid"
  | "how-it-works"
  | "price-table"
  | "comparison-criteria"
  | "expertise"
  | "guides";

export interface GuidePage extends BaseContent {
  type: "guide";
  title: string;
  /** Catégorie éditoriale du silo guides. */
  category: GuideCategorySlug;
  summary: string;
  sections: ContentSection[];
  checklist?: string[];
  legalReferences?: SourceReference[];
  /** Chemin de la page commerciale la plus proche. */
  primaryCommercialPath: string;
}

export type GuideCategorySlug =
  | "comprendre"
  | "souscrire"
  | "prix-et-contrats"
  | "resiliation-et-refus"
  | "metiers-et-nomenclature"
  | "sinistres-et-couverture";

export type AnyContentPage =
  | TradePage
  | SituationPage
  | LandingPage
  | GuidePage;
