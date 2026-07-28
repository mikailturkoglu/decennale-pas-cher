import type { RiskScenario } from "@/types/content";

/**
 * Scénarios de sinistre propres au métier.
 *
 * Chaque scénario expose le contexte, le désordre, le fondement possible de la
 * responsabilité et une réserve : la prise en charge dépend du contrat et de
 * l'expertise. Le coût n'est affiché que lorsqu'il est documenté.
 */
export function RiskScenarios({ scenarios }: { scenarios: readonly RiskScenario[] }) {
  if (scenarios.length === 0) return null;

  return (
    <ol className="mt-5 space-y-5">
      {scenarios.map((scenario, index) => (
        <li key={scenario.title} className="rounded-card border border-line bg-white p-5 shadow-card">
          <h3 className="text-lg">
            <span className="text-ink-600">Cas {index + 1} — </span>
            {scenario.title}
          </h3>
          <dl className="mt-3 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-navy">Contexte</dt>
              <dd>{scenario.context}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Désordre constaté</dt>
              <dd>{scenario.damage}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Pourquoi la responsabilité peut être engagée</dt>
              <dd>{scenario.liability}</dd>
            </div>
            {scenario.indicativeCost ? (
              <div>
                <dt className="font-semibold text-navy">Ordre de grandeur du coût</dt>
                <dd>{scenario.indicativeCost}</dd>
              </div>
            ) : null}
          </dl>
          <p className="mt-3 border-t border-line pt-3 text-sm text-ink-600">{scenario.reserve}</p>
        </li>
      ))}
    </ol>
  );
}
