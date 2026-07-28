import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CardLink } from "@/components/ui/Card";
import { InfoPageTemplate } from "@/components/templates/InfoPageTemplate";
import { tradeCategoryInfoPage } from "@/content/hubs";
import { tradeCategories } from "@/data/trade-categories";
import { tradesByCategory } from "@/data/trades";
import { publishedTradePages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import type { TradeCategorySlug } from "@/types/content";

export const dynamicParams = false;

export function generateStaticParams(): { category: string }[] {
  return tradeCategories.map((category) => ({ category: category.slug }));
}

function findCategory(slug: string) {
  return tradeCategories.find((category) => category.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!findCategory(category)) return {};

  const page = tradeCategoryInfoPage(category as TradeCategorySlug);
  return buildMetadata({ seo: page.seo, path: page.path });
}

export default async function TradeCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const registryCategory = findCategory(category);

  if (!registryCategory) notFound();

  const page = tradeCategoryInfoPage(registryCategory.slug);
  const publishedSlugs = new Set(publishedTradePages().map((trade) => trade.slug));
  const trades = tradesByCategory(registryCategory.slug);
  const published = trades.filter((trade) => publishedSlugs.has(trade.slug));
  const upcoming = trades.filter((trade) => !publishedSlugs.has(trade.slug));

  return (
    <InfoPageTemplate page={page} width="default">
      <section aria-labelledby="pages-metier" className="mt-12">
        <h2 id="pages-metier" className="text-2xl">
          Pages métier de cette famille
        </h2>
        {published.length > 0 ? (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {published.map((trade) => (
              <li key={trade.slug}>
                <CardLink
                  href={`/${trade.slug}/`}
                  title={`Assurance décennale ${trade.name.toLowerCase()}`}
                  description="Travaux à déclarer, sinistres typiques, documents et critères de prix."
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-ink-600">
            Aucune page de cette famille n’est encore publiée. Vous pouvez néanmoins déposer une
            demande : tous ces métiers sont couverts par le formulaire.
          </p>
        )}

        {upcoming.length > 0 ? (
          <div className="mt-8 rounded-card border border-line bg-surface p-5">
            <h3 className="text-lg">Métiers de cette famille traités dans le formulaire</h3>
            <p className="mt-2 text-sm text-ink-600">
              Ces activités peuvent être déclarées dans une demande de devis. Leur page dédiée sera
              publiée lorsqu’un contenu spécifique et relu sera disponible : nous ne publions pas de
              page générée automatiquement.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {upcoming.map((trade) => (
                <li
                  key={trade.value}
                  className="rounded-full border border-line bg-white px-3 py-1 text-sm"
                >
                  {trade.name}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <Link
                href="/devis-assurance-decennale/"
                className="font-semibold text-action-700 underline underline-offset-4"
              >
                Déposer une demande pour l’une de ces activités
              </Link>
            </p>
          </div>
        ) : null}
      </section>
    </InfoPageTemplate>
  );
}
