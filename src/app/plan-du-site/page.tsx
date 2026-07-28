import type { Metadata } from "next";
import Link from "next/link";

import { InfoPageTemplate } from "@/components/templates/InfoPageTemplate";
import { guideCategories } from "@/content/guides";
import { planDuSite } from "@/content/corporate";
import { tradeCategories, tradeCategoryPath } from "@/data/trade-categories";
import {
  contentLabel,
  contentPath,
  publishedGuidePages,
  publishedInfoPages,
  publishedLandingPages,
  publishedSituationPages,
  publishedTradePages,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import type { AnyContentPage } from "@/types/content";

export const metadata: Metadata = buildMetadata({
  seo: planDuSite.seo,
  path: planDuSite.path,
});

/**
 * Plan du site.
 *
 * Construit intégralement depuis le registre de contenu : une page publiée y
 * apparaît sans intervention, ce qui garantit qu'aucune page indexable ne reste
 * orpheline. L'audit SEO s'appuie sur la même source pour détecter les
 * orphelines.
 */
function LinkList({ pages }: { pages: readonly AnyContentPage[] }) {
  if (pages.length === 0) return null;

  return (
    <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
      {pages.map((page) => (
        <li key={contentPath(page)}>
          <Link
            href={contentPath(page)}
            className="text-action-700 underline underline-offset-4 hover:text-navy"
          >
            {contentLabel(page)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Group({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-10">
      <h2 id={id} className="text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function PlanDuSitePage() {
  const trades = publishedTradePages();
  const guides = publishedGuidePages();
  const infoPages = publishedInfoPages();

  const hubPaths = new Set(["/metiers/", "/situations/", "/guides/"]);
  const categoryPaths = new Set(tradeCategories.map((category) => tradeCategoryPath(category.slug)));

  const corporate = infoPages.filter(
    (page) => !hubPaths.has(page.path) && !categoryPaths.has(page.path),
  );

  return (
    <InfoPageTemplate page={planDuSite} width="default" hideStickyCta>
      <Group id="plan-commercial" title="Assurance décennale et devis">
        <LinkList pages={publishedLandingPages()} />
      </Group>

      <Group id="plan-metiers" title="Métiers du BTP">
        <p className="mt-2">
          <Link href="/metiers/" className="font-semibold text-action-700 underline underline-offset-4">
            Hub : l’assurance décennale métier par métier
          </Link>
        </p>
        {tradeCategories.map((category) => {
          const pages = trades.filter((trade) => trade.category === category.slug);
          if (pages.length === 0) return null;
          return (
            <div key={category.slug} className="mt-5">
              <h3 className="text-lg">
                <Link
                  href={tradeCategoryPath(category.slug)}
                  className="text-navy underline underline-offset-4"
                >
                  {category.name}
                </Link>
              </h3>
              <LinkList pages={pages} />
            </div>
          );
        })}
      </Group>

      <Group id="plan-situations" title="Situations de souscription">
        <p className="mt-2">
          <Link
            href="/situations/"
            className="font-semibold text-action-700 underline underline-offset-4"
          >
            Hub : votre situation face à l’assurance décennale
          </Link>
        </p>
        <LinkList pages={publishedSituationPages()} />
      </Group>

      <Group id="plan-guides" title="Guides">
        <p className="mt-2">
          <Link href="/guides/" className="font-semibold text-action-700 underline underline-offset-4">
            Hub : tous les guides
          </Link>
        </p>
        {guideCategories.map((category) => {
          const pages = guides.filter((guide) => guide.category === category.slug);
          if (pages.length === 0) return null;
          return (
            <div key={category.slug} className="mt-5">
              <h3 className="text-lg">{category.name}</h3>
              <LinkList pages={pages} />
            </div>
          );
        })}
      </Group>

      <Group id="plan-societe" title="Société, outils et pages légales">
        <LinkList pages={corporate} />
      </Group>
    </InfoPageTemplate>
  );
}
