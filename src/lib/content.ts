import { infoPages } from "@/content/corporate";
import { guidePages } from "@/content/guides";
import { hubPages, tradeCategoryInfoPages } from "@/content/hubs";
import { landingPages, landingSlugsWithOwnRoute } from "@/content/landing";
import { situationPages } from "@/content/situations";
import { tradePages } from "@/content/trades";
import { normalizePath } from "@/lib/seo";
import type {
  AnyContentPage,
  GuidePage,
  InfoPage,
  LandingPage,
  SituationPage,
  TradePage,
} from "@/types/content";
import type { SitemapSection } from "@/types/seo";

/**
 * Registre de contenu.
 *
 * Point d'entrée unique pour :
 * - l'allowlist de la route dynamique racine ;
 * - la génération des sitemaps ;
 * - la résolution des libellés du maillage interne ;
 * - les contrôles d'unicité et d'orphelinage de l'audit SEO.
 *
 * Une page qui n'est pas déclarée ici n'existe pas pour le site.
 */

export const HOME_PATH = "/";

/** Chemin public d'une page de contenu. */
export function contentPath(page: AnyContentPage): string {
  switch (page.type) {
    case "guide":
      return `/guides/${page.slug}/`;
    case "info":
      return page.path;
    default:
      return `/${page.slug}/`;
  }
}

/** Titre lisible utilisé dans les listes et les liens internes. */
export function contentLabel(page: AnyContentPage): string {
  switch (page.type) {
    case "guide":
      return page.title;
    case "trade":
    case "situation":
    case "landing":
    case "info":
      return page.name;
  }
}

const publishedTrades = tradePages.filter((page) => page.status === "published");
const publishedSituations = situationPages.filter((page) => page.status === "published");
const publishedLandings = landingPages.filter((page) => page.status === "published");
const publishedGuides = guidePages.filter((page) => page.status === "published");
const publishedInfo = [...infoPages, ...hubPages, ...tradeCategoryInfoPages].filter(
  (page) => page.status === "published",
);

export const allContentPages: readonly AnyContentPage[] = [
  ...publishedLandings,
  ...publishedTrades,
  ...publishedSituations,
  ...publishedGuides,
  ...publishedInfo,
];

/**
 * Slugs servis par la route dynamique racine `src/app/[slug]/page.tsx`.
 *
 * Les pages commerciales disposant d'une route statique dédiée en sont
 * exclues : les routes statiques ont priorité dans Next.js, mais les exclure
 * explicitement évite de générer deux fois le même chemin.
 */
export const rootSlugAllowlist: readonly string[] = [
  ...publishedLandings
    .filter((page) => !landingSlugsWithOwnRoute.includes(page.slug))
    .map((page) => page.slug),
  ...publishedTrades.map((page) => page.slug),
  ...publishedSituations.map((page) => page.slug),
];

type RootPage = LandingPage | TradePage | SituationPage;

const rootPageBySlug = new Map<string, RootPage>([
  ...publishedLandings.map((page) => [page.slug, page] as const),
  ...publishedTrades.map((page) => [page.slug, page] as const),
  ...publishedSituations.map((page) => [page.slug, page] as const),
]);

/** Recherche stricte dans l'allowlist : tout slug absent doit produire un 404. */
export function findRootPage(slug: string): RootPage | undefined {
  if (!rootSlugAllowlist.includes(slug)) return undefined;
  return rootPageBySlug.get(slug);
}

const guideBySlug = new Map(publishedGuides.map((page) => [page.slug, page]));

export function findGuide(slug: string): GuidePage | undefined {
  return guideBySlug.get(slug);
}

export const guideSlugs: readonly string[] = publishedGuides.map((page) => page.slug);

export function publishedTradePages(): readonly TradePage[] {
  return publishedTrades;
}

export function publishedSituationPages(): readonly SituationPage[] {
  return publishedSituations;
}

export function publishedGuidePages(): readonly GuidePage[] {
  return publishedGuides;
}

export function publishedLandingPages(): readonly LandingPage[] {
  return publishedLandings;
}

/** Pages institutionnelles, légales, hubs et outils publiés. */
export function publishedInfoPages(): readonly InfoPage[] {
  return publishedInfo;
}

export function findTradePage(slug: string): TradePage | undefined {
  return publishedTrades.find((page) => page.slug === slug);
}

export function findLandingPage(slug: string): LandingPage | undefined {
  return publishedLandings.find((page) => page.slug === slug);
}

export function findInfoPage(path: string): InfoPage | undefined {
  const normalized = normalizePath(path);
  return publishedInfo.find((page) => page.path === normalized);
}

/**
 * Libellés du maillage interne.
 *
 * Les pages listent leurs liens sous forme de chemins : le libellé est résolu
 * ici, ce qui garantit qu'un lien interne ne peut pas pointer vers une page
 * inexistante sans être détecté.
 */
export interface InternalLink {
  path: string;
  label: string;
  description?: string;
}

const linkIndex = new Map<string, InternalLink>();

linkIndex.set(HOME_PATH, { path: HOME_PATH, label: "Accueil" });

for (const page of allContentPages) {
  const path = contentPath(page);
  const description =
    page.type === "trade"
      ? `Travaux à déclarer, sinistres typiques et critères de prix pour ${page.pluralName}.`
      : page.type === "situation"
        ? page.shortAnswer.split(". ")[0]
        : page.type === "guide"
          ? page.summary.split(". ")[0]
          : page.type === "landing"
            ? page.heroText
            : page.intro.split(". ")[0];

  linkIndex.set(path, {
    path,
    label: contentLabel(page),
    ...(description ? { description: `${description.replace(/\.$/, "")}.` } : {}),
  });
}

/** Chemins connus du site, utilisés par l'audit de maillage. */
export const knownPaths: readonly string[] = [...linkIndex.keys()];

export function resolveInternalLink(path: string): InternalLink | undefined {
  return linkIndex.get(normalizePath(path));
}

/**
 * Résout une liste de chemins en liens affichables.
 * Un chemin inconnu est ignoré : aucune page ne doit exposer un lien mort.
 */
export function resolveInternalLinks(paths: readonly string[]): InternalLink[] {
  return paths
    .map((path) => resolveInternalLink(path))
    .filter((link): link is InternalLink => Boolean(link));
}

export interface SitemapEntry {
  path: string;
  lastModified: string;
  section: SitemapSection;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
}

function sectionOf(page: AnyContentPage): SitemapSection {
  switch (page.type) {
    case "trade":
      return "trades";
    case "situation":
      return "situations";
    case "guide":
      return "guides";
    case "landing":
      return "commercial";
    case "info":
      return "corporate";
  }
}

function lastModifiedOf(page: AnyContentPage): string {
  if (page.type === "info") {
    return page.editorial?.modifiedAt ?? page.updatedAt ?? BUILD_DATE;
  }
  return page.editorial.modifiedAt;
}

/** Date de repli pour les pages sans métadonnée éditoriale (pages légales). */
const BUILD_DATE = new Date().toISOString().slice(0, 10);

const SECTION_PRIORITY: Record<SitemapSection, number> = {
  commercial: 0.9,
  trades: 0.8,
  situations: 0.8,
  guides: 0.7,
  corporate: 0.3,
};

const SECTION_FREQUENCY: Record<SitemapSection, SitemapEntry["changeFrequency"]> = {
  commercial: "weekly",
  trades: "monthly",
  situations: "monthly",
  guides: "monthly",
  corporate: "yearly",
};

/**
 * Entrées du sitemap.
 *
 * Seules les pages publiées et indexables y figurent : une page en `noindex`
 * ou en brouillon en est exclue par construction.
 */
export function sitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [
    {
      path: HOME_PATH,
      lastModified: BUILD_DATE,
      section: "commercial",
      priority: 1,
      changeFrequency: "weekly",
    },
  ];

  for (const page of allContentPages) {
    if (page.seo.noindex) continue;
    const section = sectionOf(page);
    entries.push({
      path: contentPath(page),
      lastModified: lastModifiedOf(page),
      section,
      priority: SECTION_PRIORITY[section],
      changeFrequency: SECTION_FREQUENCY[section],
    });
  }

  return entries;
}
