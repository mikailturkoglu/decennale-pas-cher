import Link from "next/link";

import { CardLink } from "@/components/ui/Card";
import { guideCategories } from "@/content/guides";
import { publishedGuidePages } from "@/lib/content";

interface GuidesGridProps {
  title?: string;
  intro?: string;
  limit?: number;
  /** Restreint la sélection à des guides précis, par slug. */
  slugs?: readonly string[];
}

const categoryName = new Map(guideCategories.map((category) => [category.slug, category.name]));

export function GuidesGrid({
  title = "Guides pour aller plus loin",
  intro,
  limit,
  slugs,
}: GuidesGridProps) {
  const all = publishedGuidePages();
  const guides = (slugs ? all.filter((guide) => slugs.includes(guide.slug)) : all).slice(0, limit);

  if (guides.length === 0) return null;

  return (
    <section aria-labelledby="guides" className="mt-12">
      <h2 id="guides" className="text-2xl sm:text-3xl">
        {title}
      </h2>
      {intro ? <p className="mt-2 max-w-3xl text-ink-600">{intro}</p> : null}

      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <CardLink
              href={`/guides/${guide.slug}/`}
              eyebrow={categoryName.get(guide.category)}
              title={guide.title}
              description={`${guide.summary.split(". ")[0]}.`}
            />
          </li>
        ))}
      </ul>

      <p className="mt-5">
        <Link href="/guides/" className="font-semibold text-action-700 underline underline-offset-4">
          Consulter tous les guides
        </Link>
      </p>
    </section>
  );
}
