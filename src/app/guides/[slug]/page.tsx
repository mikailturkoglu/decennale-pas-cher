import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuidePageTemplate } from "@/components/templates/GuidePageTemplate";
import { findGuide, guideSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) return {};

  return buildMetadata({
    seo: guide.seo,
    path: `/guides/${guide.slug}/`,
    ogType: "article",
    publishedAt: guide.editorial.publishedAt,
    modifiedAt: guide.editorial.modifiedAt,
  });
}

export default async function GuideRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = findGuide(slug);

  if (!guide) notFound();

  return <GuidePageTemplate page={guide} />;
}
