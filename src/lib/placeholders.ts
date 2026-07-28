/**
 * Placeholders bloquants.
 *
 * Toute information réglementaire, tarifaire ou commerciale non vérifiée doit
 * utiliser l'une de ces constantes. Le script `scripts/prebuild-check.mjs`
 * échoue si l'une d'elles est encore présente lors d'un build de production.
 */
export const PLACEHOLDER = {
  toFill: "[À RENSEIGNER]",
  toConfirm: "[À CONFIRMER]",
  toChoose: "[À CHOISIR]",
  toValidateByBroker: "[À VALIDER PAR LE COURTIER]",
} as const;

export const BLOCKING_PLACEHOLDERS: readonly string[] = Object.values(PLACEHOLDER);

export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return false;
  return BLOCKING_PLACEHOLDERS.some((placeholder) => value.includes(placeholder));
}

/**
 * Rend une valeur affichable : renvoie le placeholder tel quel s'il n'y a pas
 * encore de donnée validée, pour qu'il reste visible en recette.
 */
export function displayValue(
  value: string | undefined | null,
  fallback: string = PLACEHOLDER.toFill,
): string {
  if (!value || value.trim().length === 0) return fallback;
  return value;
}
