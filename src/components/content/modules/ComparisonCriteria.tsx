import { comparisonCriteria } from "@/data/service";

/**
 * Critères de comparaison d'un contrat de décennale.
 *
 * Présentés comme une grille de lecture pour le professionnel : le site ne
 * classe pas les contrats, il explique ce qui doit être comparé.
 */
export function ComparisonCriteria({
  title = "Ce qu’il faut comparer, au-delà du prix",
}: {
  title?: string;
}) {
  return (
    <section aria-labelledby="criteres-comparaison" className="mt-12">
      <h2 id="criteres-comparaison" className="text-2xl sm:text-3xl">
        {title}
      </h2>

      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        {comparisonCriteria.map((criterion) => (
          <div
            key={criterion.label}
            className="rounded-card border border-line bg-white p-4 shadow-card"
          >
            <dt className="font-bold text-navy">{criterion.label}</dt>
            <dd className="mt-1 text-sm text-ink-600">{criterion.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
