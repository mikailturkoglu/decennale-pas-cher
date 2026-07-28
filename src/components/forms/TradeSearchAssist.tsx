"use client";

import { useEffect, useId, useMemo, useState } from "react";

import { tradeSearchIndex } from "@/data/trades";
import { matchesTokens, searchTokens } from "@/lib/search";

const MAX_RESULTS = 6;

interface TradeSearchAssistProps {
  /** Identifiant du `select` des métiers, dont la valeur est positionnée. */
  selectId: string;
  label?: string;
}

/**
 * Aide à la recherche d'un métier dans une liste déroulante.
 *
 * La liste déroulante native reste la source de vérité : elle contient tous les
 * métiers, fonctionne sans JavaScript et porte le nom du champ envoyé. Ce
 * composant ne fait que positionner sa valeur, ce qui évite tout conflit avec la
 * restauration du brouillon, qui écrit elle aussi directement dans le DOM.
 *
 * Il n'apparaît qu'après hydratation : un champ de recherche inopérant sans
 * JavaScript serait trompeur.
 */
export function TradeSearchAssist({
  selectId,
  label = "Rechercher un métier dans la liste",
}: TradeSearchAssistProps) {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [applied, setApplied] = useState<string | null>(null);
  const inputId = useId();

  useEffect(() => {
    // Le composant n'a de sens qu'avec JavaScript : il ne s'affiche donc qu'ici.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const tokens = useMemo(() => searchTokens(query), [query]);
  const matches = useMemo(
    () =>
      tokens.length === 0
        ? []
        : tradeSearchIndex
            .filter((trade) => matchesTokens(trade.haystack, tokens))
            .slice(0, MAX_RESULTS),
    [tokens],
  );

  if (!mounted) return null;

  function apply(value: string, name: string) {
    const select = document.getElementById(selectId);
    if (!(select instanceof HTMLSelectElement)) return;
    select.value = value;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    setApplied(name);
    setQuery("");
  }

  return (
    <div className="mt-4 rounded-lg border border-dashed border-line bg-surface p-3">
      <label htmlFor={inputId} className="block text-sm font-semibold text-navy">
        {label}
      </label>
      <p id={`${inputId}-hint`} className="mt-1 text-sm text-ink-600">
        Facultatif : la liste ci-dessous reste utilisable directement. Vous pouvez saisir un
        synonyme, par exemple « maçonnerie », « toiture-terrasse » ou « cloisons ».
      </p>
      <input
        id={inputId}
        type="search"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setApplied(null);
        }}
        autoComplete="off"
        aria-describedby={`${inputId}-hint ${inputId}-statut`}
        className="mt-2 block w-full min-h-11 rounded-lg border border-line bg-white px-3 py-2.5 text-base text-ink"
      />

      <p id={`${inputId}-statut`} role="status" className="mt-2 text-sm text-ink-600">
        {applied
          ? `Métier sélectionné dans la liste : ${applied}.`
          : tokens.length === 0
            ? "Saisissez votre activité pour obtenir des propositions."
            : matches.length === 0
              ? "Aucun métier ne correspond. Choisissez le plus proche dans la liste, puis précisez vos travaux à l’étape suivante."
              : `${matches.length} proposition${matches.length > 1 ? "s" : ""}.`}
      </p>

      {matches.length > 0 ? (
        <ul className="mt-2 flex flex-wrap gap-2">
          {matches.map((trade) => (
            <li key={trade.value}>
              <button
                type="button"
                onClick={() => apply(trade.value, trade.name)}
                className="inline-flex min-h-11 items-center rounded-full border border-action-200 bg-white px-3 py-1.5 text-sm font-semibold text-action-700 hover:bg-action-50"
              >
                {trade.name}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
