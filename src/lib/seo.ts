import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import type { SeoFields } from "@/types/seo";

/**
 * Normalise un chemin selon la politique d'URL du projet :
 * minuscules, slash initial, slash final, sans double slash.
 */
export function normalizePath(path: string): string {
  const trimmed = path.trim().toLowerCase();
  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const withoutQuery = withLeadingSlash.split(/[?#]/)[0] ?? "/";
  const collapsed = withoutQuery.replace(/\/{2,}/g, "/");
  if (collapsed === "/") return "/";
  return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
}

/** Construit l'URL absolue canonique d'un chemin. */
export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${normalizePath(path)}`;
}

export interface BuildMetadataInput {
  seo: SeoFields;
  /** Chemin réel de la page, utilisé si `seo.canonicalPath` est absent. */
  path: string;
  /** Type de contenu Open Graph. */
  ogType?: "website" | "article";
  publishedAt?: string;
  modifiedAt?: string;
}

/**
 * Génère les métadonnées Next.js d'une page.
 *
 * Toutes les pages passent par cette fonction : la canonical, la politique
 * d'indexation et les balises Open Graph restent ainsi homogènes.
 */
export function buildMetadata({
  seo,
  path,
  ogType = "website",
  publishedAt,
  modifiedAt,
}: BuildMetadataInput): Metadata {
  const canonicalPath = normalizePath(seo.canonicalPath ?? path);
  const canonical = absoluteUrl(canonicalPath);
  const ogImage = seo.ogImage ?? `${absoluteUrl(canonicalPath)}opengraph-image`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: [seo.primaryKeyword, ...seo.secondaryKeywords],
    alternates: {
      canonical,
    },
    robots: seo.noindex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: ogType,
      url: canonical,
      siteName: siteConfig.name,
      locale: "fr_FR",
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: seo.ogTitle ?? seo.title }],
      ...(ogType === "article"
        ? {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
    },
  };
}

/** Métadonnées d'une page volontairement exclue de l'index. */
export function buildNoindexMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return buildMetadata({
    path: input.path,
    seo: {
      title: input.title,
      description: input.description,
      primaryKeyword: "",
      secondaryKeywords: [],
      noindex: true,
    },
  });
}

/** Formate une date ISO en français lisible (1er février 2026). */
export function formatFrenchDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  const formatted = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
  return formatted.replace(/^1 /, "1er ");
}
