/**
 * Recherche textuelle côté client.
 *
 * Les artisans ne saisissent pas les accents et emploient des synonymes
 * (« maçonnerie » pour « maçon », « terrassement » pour « terrassier »). La
 * comparaison se fait donc sur une forme normalisée, sans accent ni ponctuation,
 * et chaque mot saisi doit être retrouvé — ce qui autorise « macon gros » aussi
 * bien que « gros oeuvre macon ».
 */
export function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, " ")
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** Découpe une saisie en mots normalisés, en ignorant les termes d'un seul caractère. */
export function searchTokens(query: string): string[] {
  return normalizeSearch(query)
    .split(" ")
    .filter((token) => token.length > 1);
}

/**
 * Vrai lorsque tous les mots recherchés figurent dans la chaîne normalisée.
 *
 * Le pluriel est traité de façon minimale : « cloisons » doit trouver
 * « cloison ». Une racinisation complète du français serait disproportionnée
 * ici, et rendrait les résultats moins prévisibles.
 */
export function matchesTokens(haystack: string, tokens: string[]): boolean {
  return tokens.every((token) => {
    if (haystack.includes(token)) return true;
    const singular = token.replace(/(?:aux|x|s)$/, "");
    return singular.length > 2 && haystack.includes(singular);
  });
}
