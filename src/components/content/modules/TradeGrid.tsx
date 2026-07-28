import Link from "next/link";

import { CardLink } from "@/components/ui/Card";
import { getTradeCategory, tradeCategories, tradeCategoryPath } from "@/data/trade-categories";
import { publishedTradePages } from "@/lib/content";

interface TradeGridProps {
  title?: string;
  intro?: string;
  /** Limite d'affichage : l'accueil met en avant les métiers prioritaires. */
  limit?: number;
  /** Métier à exclure : évite qu'une page métier se lie à elle-même. */
  excludeSlug?: string;
}

/**
 * Grille des pages métier publiées.
 *
 * Tous les liens sont des ancres réelles présentes dans le HTML : le hub
 * métiers et l'accueil constituent les principaux points d'entrée du silo.
 */
export function TradeGrid({
  title = "Une décennale adaptée à votre métier",
  intro,
  limit,
  excludeSlug,
}: TradeGridProps) {
  const trades = publishedTradePages()
    .filter((trade) => trade.slug !== excludeSlug)
    .slice(0, limit);

  if (trades.length === 0) return null;

  return (
    <section aria-labelledby="metiers" className="mt-12">
      <h2 id="metiers" className="text-2xl sm:text-3xl">
        {title}
      </h2>
      {intro ? <p className="mt-2 max-w-3xl text-ink-600">{intro}</p> : null}

      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trades.map((trade) => (
          <li key={trade.slug}>
            <CardLink
              href={`/${trade.slug}/`}
              eyebrow={getTradeCategory(trade.category).shortName}
              title={`Assurance décennale ${trade.name.toLowerCase()}`}
              description={`Travaux à déclarer, sinistres fréquents et critères de prix pour ${trade.pluralName}.`}
            />
          </li>
        ))}
      </ul>

      <p className="mt-5">
        <Link href="/metiers/" className="font-semibold text-action-700 underline underline-offset-4">
          Voir les six familles de métiers du BTP
        </Link>
      </p>
    </section>
  );
}

/** Liste des familles de métiers, utilisée par le hub /metiers/. */
export function TradeCategoryList() {
  return (
    <ul className="mt-5 grid gap-4 sm:grid-cols-2">
      {tradeCategories.map((category) => (
        <li key={category.slug}>
          <CardLink
            href={tradeCategoryPath(category.slug)}
            title={category.name}
            description={`${category.intro.split(". ")[0]}.`}
          />
        </li>
      ))}
    </ul>
  );
}
