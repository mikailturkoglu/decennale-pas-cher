import Link from "next/link";

interface StickyCtaProps {
  /** Paramètres de préremplissage transmis au formulaire (métier, situation). */
  query?: Record<string, string>;
  label?: string;
}

function buildHref(query?: Record<string, string>): string {
  if (!query || Object.keys(query).length === 0) return "/devis-assurance-decennale/";
  return `/devis-assurance-decennale/?${new URLSearchParams(query).toString()}`;
}

/**
 * Barre d'action fixe sur mobile.
 *
 * Rendue côté serveur, sans JavaScript. Un espaceur est ajouté en bas de page
 * par le gabarit afin qu'elle ne masque jamais la fin du contenu.
 */
export function StickyCta({ query, label = "Comparer les offres" }: StickyCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 p-3 shadow-raised backdrop-blur lg:hidden">
      <Link
        href={buildHref(query)}
        className="flex min-h-12 items-center justify-center rounded-lg bg-action px-4 py-3 font-semibold text-white"
        data-analytics-event="cta_click"
      >
        {label}
      </Link>
    </div>
  );
}
