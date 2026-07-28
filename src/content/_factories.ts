import { DEFAULT_AUTHOR_ID, DEFAULT_REVIEWER_ID } from "@/data/experts";
import { NOTICES } from "@/data/legal-notices";
import { SOURCES, TRADE_BASE_SOURCES, type SourceKey } from "@/data/sources";
import { getTradeCategory, tradeCategoryPath } from "@/data/trade-categories";
import { findSituationBySlug } from "@/data/situations";
import { findTradeByValue } from "@/data/trades";
import type {
  EditorialMeta,
  GuidePage,
  LandingPage,
  PriceBand,
  SituationPage,
  TradePage,
} from "@/types/content";

/**
 * Fabriques de contenu.
 *
 * Elles ne produisent que la structure et les métadonnées communes
 * (fil d'Ariane, dates, sources de socle, mentions obligatoires). Le contenu
 * substantiel — travaux, sinistres, FAQ, facteurs de prix — est toujours écrit
 * page par page : aucune page ne doit être une simple variation de synonymes.
 */

const DEFAULT_EDITORIAL: EditorialMeta = {
  authorId: DEFAULT_AUTHOR_ID,
  reviewerId: DEFAULT_REVIEWER_ID,
  publishedAt: "2026-08-01",
  modifiedAt: "2026-08-01",
  nextReviewAt: "2027-02-01",
};

export function editorial(overrides: Partial<EditorialMeta> = {}): EditorialMeta {
  return { ...DEFAULT_EDITORIAL, ...overrides };
}

/**
 * Fourchette tarifaire sans montant validé : la mention et la devise sont
 * posées, le montant reste absent tant qu'aucune source n'est disponible.
 */
export function indicativeBand(input: {
  label: string;
  annualRevenue: string;
  experience: string;
  insuranceHistory: string;
  minAnnualPremium?: number;
  maxAnnualPremium?: number;
  sourceLabel?: string;
  sourceDate?: string;
}): PriceBand {
  return {
    label: input.label,
    annualRevenue: input.annualRevenue,
    experience: input.experience,
    insuranceHistory: input.insuranceHistory,
    ...(input.minAnnualPremium !== undefined ? { minAnnualPremium: input.minAnnualPremium } : {}),
    ...(input.maxAnnualPremium !== undefined ? { maxAnnualPremium: input.maxAnnualPremium } : {}),
    currency: "EUR",
    ...(input.sourceLabel ? { sourceLabel: input.sourceLabel } : {}),
    ...(input.sourceDate ? { sourceDate: input.sourceDate } : {}),
    disclaimer: NOTICES.price,
  };
}

type TradeInput = Omit<TradePage, "type" | "breadcrumb" | "sources" | "editorial" | "slug"> & {
  /** Valeur du registre des métiers (ex. "macon"). */
  tradeValue: string;
  /** Sources spécifiques ajoutées au socle commun. */
  extraSources?: SourceKey[];
  editorial?: Partial<EditorialMeta>;
};

export function defineTrade(input: TradeInput): TradePage {
  const registryEntry = findTradeByValue(input.tradeValue);
  if (!registryEntry) {
    throw new Error(`Métier absent du registre : ${input.tradeValue}`);
  }
  const category = getTradeCategory(input.category);
  const {
    tradeValue,
    extraSources = [],
    editorial: editorialOverrides,
    ...rest
  } = input;

  const sourceKeys: SourceKey[] = [...TRADE_BASE_SOURCES, ...extraSources];
  const uniqueKeys = [...new Set(sourceKeys)];

  return {
    ...rest,
    type: "trade",
    slug: registryEntry.slug,
    formTradeValue: tradeValue,
    sources: uniqueKeys.map((key) => SOURCES[key]),
    editorial: editorial(editorialOverrides),
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Métiers", path: "/metiers/" },
      { name: category.shortName, path: tradeCategoryPath(category.slug) },
      { name: registryEntry.name },
    ],
  };
}

type SituationInput = Omit<
  SituationPage,
  "type" | "breadcrumb" | "sources" | "editorial" | "sensitive" | "formSituationValue" | "name"
> & {
  sources: SourceKey[];
  editorial?: Partial<EditorialMeta>;
  /** Permet de surcharger le nom issu du registre si besoin. */
  name?: string;
};

export function defineSituation(input: SituationInput): SituationPage {
  const registryEntry = findSituationBySlug(input.slug);
  if (!registryEntry) {
    throw new Error(`Situation absente du registre : ${input.slug}`);
  }
  const { sources, editorial: editorialOverrides, name, ...rest } = input;

  return {
    ...rest,
    type: "situation",
    name: name ?? registryEntry.name,
    formSituationValue: registryEntry.formSituation,
    sensitive: registryEntry.sensitive,
    sources: [...new Set(sources)].map((key) => SOURCES[key]),
    editorial: editorial(editorialOverrides),
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Situations", path: "/situations/" },
      { name: registryEntry.name },
    ],
  };
}

type LandingInput = Omit<LandingPage, "type" | "breadcrumb" | "sources" | "editorial"> & {
  sources: SourceKey[];
  editorial?: Partial<EditorialMeta>;
  /** Segments intermédiaires du fil d'Ariane (hors accueil et page courante). */
  breadcrumbParents?: { name: string; path: string }[];
};

export function defineLanding(input: LandingInput): LandingPage {
  const {
    sources,
    editorial: editorialOverrides,
    breadcrumbParents = [],
    ...rest
  } = input;

  return {
    ...rest,
    type: "landing",
    sources: [...new Set(sources)].map((key) => SOURCES[key]),
    editorial: editorial(editorialOverrides),
    breadcrumb: [
      { name: "Accueil", path: "/" },
      ...breadcrumbParents,
      { name: rest.name },
    ],
  };
}

type GuideInput = Omit<GuidePage, "type" | "breadcrumb" | "sources" | "editorial"> & {
  sources: SourceKey[];
  legalSources?: SourceKey[];
  editorial?: Partial<EditorialMeta>;
};

export function defineGuide(input: GuideInput): GuidePage {
  const { sources, legalSources = [], editorial: editorialOverrides, ...rest } = input;

  return {
    ...rest,
    type: "guide",
    sources: [...new Set(sources)].map((key) => SOURCES[key]),
    ...(legalSources.length > 0
      ? { legalReferences: [...new Set(legalSources)].map((key) => SOURCES[key]) }
      : {}),
    editorial: editorial(editorialOverrides),
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Guides", path: "/guides/" },
      { name: rest.title },
    ],
  };
}
