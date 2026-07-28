import { CardLink } from "@/components/ui/Card";
import { situationRegistry } from "@/data/situations";
import { publishedSituationPages } from "@/lib/content";

interface SituationGridProps {
  title?: string;
  intro?: string;
  limit?: number;
  excludeSlug?: string;
}

/**
 * Grille des situations de souscription.
 *
 * Les intitulés sont formulés à la première personne (« Je crée mon
 * entreprise ») : c'est la formulation qui permet à un artisan de se
 * reconnaître immédiatement, sans lire tout le libellé.
 */
export function SituationGrid({
  title = "Quelle est votre situation ?",
  intro,
  limit,
  excludeSlug,
}: SituationGridProps) {
  const publishedSlugs = new Set(publishedSituationPages().map((page) => page.slug));
  const situations = situationRegistry
    .filter((situation) => publishedSlugs.has(situation.slug) && situation.slug !== excludeSlug)
    .slice(0, limit);

  if (situations.length === 0) return null;

  return (
    <section aria-labelledby="situations" className="mt-12">
      <h2 id="situations" className="text-2xl sm:text-3xl">
        {title}
      </h2>
      {intro ? <p className="mt-2 max-w-3xl text-ink-600">{intro}</p> : null}

      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {situations.map((situation) => (
          <li key={situation.slug}>
            <CardLink
              href={`/${situation.slug}/`}
              title={situation.cardTitle}
              description={situation.cardText}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
