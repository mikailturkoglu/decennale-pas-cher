import { TradeFinder } from "@/components/navigation/TradeFinder";
import { tradeCategories, tradeCategoryPath } from "@/data/trade-categories";
import { tradeSearchIndex } from "@/data/trades";
import { publishedTradePages } from "@/lib/content";

/**
 * Section « trouver mon métier ».
 *
 * Composant serveur : il assemble le registre des métiers, les familles et la
 * liste des pages réellement publiées, puis délègue l'affichage au filtre
 * interactif. Le calcul reste ainsi hors du navigateur.
 */
export function TradeFinderSection() {
  return (
    <section aria-labelledby="trouver-mon-metier" className="mt-10">
      <h2 id="trouver-mon-metier" className="text-2xl">
        Trouver mon métier
      </h2>
      <p className="mt-2 max-w-3xl text-ink-600">
        Les soixante activités du registre sont listées ci-dessous, classées par famille. Celles qui
        disposent d’une page dédiée y renvoient directement ; les autres sont traitées dans le
        formulaire de demande.
      </p>
      <TradeFinder
        trades={tradeSearchIndex}
        categories={tradeCategories.map((category) => ({
          slug: category.slug,
          name: category.name,
          path: tradeCategoryPath(category.slug),
        }))}
        publishedSlugs={publishedTradePages().map((trade) => trade.slug)}
      />
    </section>
  );
}
