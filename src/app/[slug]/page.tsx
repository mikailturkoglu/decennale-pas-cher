import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LandingPageTemplate } from "@/components/templates/LandingPageTemplate";
import { SituationPageTemplate } from "@/components/templates/SituationPageTemplate";
import { TradePageTemplate } from "@/components/templates/TradePageTemplate";
import { findRootPage, rootSlugAllowlist } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

/**
 * Route racine des pages commerciales, métiers et situations.
 *
 * `dynamicParams = false` interdit toute URL en dehors de l'allowlist : un slug
 * inconnu renvoie un 404 sans jamais générer de page à partir d'une chaîne
 * arbitraire.
 */
export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return rootSlugAllowlist.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = findRootPage(slug);
  if (!page) return {};

  return buildMetadata({
    seo: page.seo,
    path: `/${page.slug}/`,
    ogType: page.type === "landing" ? "website" : "article",
    publishedAt: page.editorial.publishedAt,
    modifiedAt: page.editorial.modifiedAt,
  });
}

export default async function RootContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = findRootPage(slug);

  if (!page) notFound();

  switch (page.type) {
    case "trade":
      return <TradePageTemplate page={page} />;
    case "situation":
      return <SituationPageTemplate page={page} />;
    case "landing":
      return <LandingPageTemplate page={page} />;
  }
}
