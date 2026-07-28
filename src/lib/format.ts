import type { PriceBand } from "@/types/content";

const euroFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function formatEuros(amount: number): string {
  return euroFormatter.format(amount);
}

/**
 * Formate une fourchette de cotisation annuelle.
 *
 * Retourne `undefined` tant qu'aucun montant sourcé n'est renseigné : la couche
 * d'affichage rend alors un placeholder explicite plutôt qu'une estimation
 * inventée.
 */
export function formatPremiumRange(band: PriceBand): string | undefined {
  const { minAnnualPremium: min, maxAnnualPremium: max } = band;

  if (min === undefined && max === undefined) return undefined;
  if (min !== undefined && max !== undefined) {
    return `${formatEuros(min)} à ${formatEuros(max)} par an`;
  }
  if (min !== undefined) return `à partir de ${formatEuros(min)} par an`;
  return `jusqu’à ${formatEuros(max as number)} par an`;
}

/** Mention de source d'un repère tarifaire, lorsqu'elle est disponible. */
export function formatPriceSource(band: PriceBand): string | undefined {
  if (!band.sourceLabel && !band.sourceDate) return undefined;
  return [band.sourceLabel, band.sourceDate].filter(Boolean).join(" — ");
}
