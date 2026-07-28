"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";

import { matchesTokens, searchTokens } from "@/lib/search";
import type { TradeSearchEntry } from "@/data/trades";
import type { TradeCategorySlug } from "@/types/content";

interface TradeFinderProps {
  /** Index normalisé des métiers du registre, construit côté serveur. */
  trades: readonly TradeSearchEntry[];
  /** Libellés des familles, dans l'ordre d'affichage. */
  categories: readonly { slug: TradeCategorySlug; name: string; path: string }[];
  /** Slugs des métiers dont la page éditoriale est publiée. */
  publishedSlugs: readonly string[];
}

/**
 * Recherche de métier.
 *
 * La liste complète des métiers du registre est rendue côté serveur : elle est
 * donc lisible sans JavaScript et explorable par les moteurs. Le champ de
 * recherche n'est qu'un filtre appliqué après hydratation ; il interroge les
 * synonymes du registre pour qu'« étanchéité », « toiture-terrasse » ou
 * « résine » mènent à la page étancheur.
 *
 * Les métiers sans page publiée sont affichés comme tels et renvoient vers le
 * formulaire : aucune page n'est générée automatiquement pour combler la liste.
 */
export function TradeFinder({ trades, categories, publishedSlugs }: TradeFinderProps) {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const statusId = `${inputId}-statut`;

  const published = useMemo(() => new Set(publishedSlugs), [publishedSlugs]);
  const tokens = useMemo(() => searchTokens(query), [query]);
  const filtering = tokens.length > 0;

  const visible = useMemo(
    () => (filtering ? trades.filter((trade) => matchesTokens(trade.haystack, tokens)) : trades),
    [filtering, tokens, trades],
  );

  const grouped = useMemo(
    () =>
      categories
        .map((category) => ({
          ...category,
          trades: visible.filter((trade) => trade.category === category.slug),
        }))
        .filter((group) => group.trades.length > 0),
    [categories, visible],
  );

  return (
    <div className="mt-6 rounded-card border border-line bg-surface p-5">
      <label htmlFor={inputId} className="block font-semibold text-navy">
        Rechercher une activité
      </label>
      <p id={`${inputId}-hint`} className="mt-1 text-sm text-ink-600">
        Saisissez votre activité, même approximativement : « maçonnerie », « toiture-terrasse »,
        « pompe à chaleur », « cloisons ».
      </p>
      <input
        id={inputId}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoComplete="off"
        aria-describedby={`${inputId}-hint ${statusId}`}
        placeholder="Ex. : carrelage, charpente, électricité…"
        className="mt-2 block w-full min-h-11 rounded-lg border border-line bg-white px-3 py-2.5 text-base text-ink"
      />

      <p id={statusId} role="status" className="mt-2 text-sm text-ink-600">
        {filtering
          ? `${visible.length} métier${visible.length > 1 ? "s" : ""} correspond${
              visible.length > 1 ? "ent" : ""
            } à votre recherche.`
          : `${trades.length} métiers sont pris en charge dans le formulaire de demande.`}
      </p>

      {grouped.length === 0 ? (
        <div className="mt-4 rounded-lg border border-line bg-white p-4">
          <p className="font-semibold text-navy">Aucun métier ne correspond à cette recherche.</p>
          <p className="mt-1 text-sm text-ink-600">
            Décrivez vos travaux en clair dans le formulaire : la qualification se fait sur les
            activités réellement exercées, pas sur un intitulé de métier.
          </p>
          <p className="mt-3">
            <Link
              href="/devis-assurance-decennale/"
              className="font-semibold text-action-700 underline underline-offset-4"
            >
              Décrire mon activité dans le formulaire
            </Link>
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-5">
          {grouped.map((group) => (
            <section key={group.slug} aria-labelledby={`${inputId}-${group.slug}`}>
              <h3 id={`${inputId}-${group.slug}`} className="text-sm font-semibold text-navy">
                <Link href={group.path} className="underline underline-offset-4">
                  {group.name}
                </Link>
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.trades.map((trade) =>
                  published.has(trade.slug) ? (
                    <li key={trade.slug}>
                      <Link
                        href={`/${trade.slug}/`}
                        data-analytics-event="trade_select"
                        className="inline-flex min-h-11 items-center rounded-full border border-action-200 bg-white px-3 py-1.5 text-sm font-semibold text-action-700 hover:bg-action-50"
                      >
                        {trade.name}
                      </Link>
                    </li>
                  ) : (
                    <li key={trade.slug}>
                      <Link
                        href={`/devis-assurance-decennale/?trade=${trade.value}`}
                        className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-3 py-1.5 text-sm text-ink-600 hover:bg-white"
                      >
                        {trade.name}
                        <span className="ml-1.5 text-xs">(demande de devis)</span>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
