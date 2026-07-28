import { isPlaceholder } from "@/lib/placeholders";

interface PlaceholderValueProps {
  value: string | undefined | null;
  /** Texte affiché quand la valeur est absente ou encore à renseigner. */
  fallback?: string;
}

/**
 * Affiche une valeur ou signale visuellement qu'elle reste à renseigner.
 *
 * Les placeholders sont rendus volontairement visibles : le script
 * prebuild-check bloque la mise en production tant qu'il en subsiste.
 */
export function PlaceholderValue({ value, fallback }: PlaceholderValueProps) {
  const missing = !value || value.trim().length === 0 || isPlaceholder(value);

  if (!missing) {
    return <>{value}</>;
  }

  return (
    <span
      className="rounded border border-dashed border-accent bg-accent-50 px-1.5 py-0.5 text-sm font-semibold text-navy"
      data-placeholder="true"
    >
      {fallback ?? value ?? "À renseigner"}
    </span>
  );
}
