import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { InfoPageTemplate } from "@/components/templates/InfoPageTemplate";
import { expertProfileSlugs, findExpertProfile } from "@/content/corporate/expert-profiles";
import { allContentPages, contentLabel, contentPath } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return expertProfileSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profile = findExpertProfile(slug);
  if (!profile) return {};

  return buildMetadata({ seo: profile.page.seo, path: profile.page.path });
}

export default async function ExpertProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = findExpertProfile(slug);

  if (!profile) notFound();

  const { page, expert } = profile;

  /** Pages signées par cette personne, en rédaction ou en relecture. */
  const authored = allContentPages.filter(
    (content) =>
      content.type !== "info" &&
      (content.editorial.authorId === expert.id || content.editorial.reviewerId === expert.id),
  );

  return (
    <InfoPageTemplate page={page} hideStickyCta>
      {authored.length > 0 ? (
        <section aria-labelledby="contenus-publies" className="mt-10">
          <h2 id="contenus-publies" className="text-2xl">
            Contenus publiés ({authored.length})
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {authored.map((content) => (
              <li key={contentPath(content)}>
                <Link
                  href={contentPath(content)}
                  className="text-action-700 underline underline-offset-4"
                >
                  {contentLabel(content)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </InfoPageTemplate>
  );
}
