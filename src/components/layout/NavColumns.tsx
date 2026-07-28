import Link from "next/link";

import type { NavSection } from "@/data/navigation";

/**
 * Contenu d'un sous-menu de la navigation principale.
 *
 * Partagé par le mégamenu de bureau et le menu mobile afin que les deux
 * navigations restent identiques en contenu. Le module n'est pas marqué
 * « use client » : il est rendu côté serveur dans le HTML initial, et rejoint
 * le bundle client uniquement parce que ses deux appelants sont interactifs.
 */
interface NavColumnsProps {
  section: NavSection;
  /** Le mégamenu affiche les descriptions ; le menu mobile reste compact. */
  variant: "desktop" | "mobile";
  /** Fermeture du menu à l'activation d'un lien. */
  onNavigate?: () => void;
}

export function NavColumns({ section, variant, onNavigate }: NavColumnsProps) {
  const desktop = variant === "desktop";

  return (
    <div className={desktop ? "grid gap-8 md:grid-cols-2" : ""}>
      <div className={desktop ? "md:col-span-2" : ""}>
        <Link
          href={section.path}
          onClick={onNavigate}
          className="inline-flex min-h-11 items-center font-semibold text-action-700 underline underline-offset-4"
        >
          Vue d’ensemble : {section.label.toLowerCase()}
        </Link>
      </div>

      {section.columns.map((column) => (
        <div key={column.title}>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-600">
            {column.title}
          </p>
          <ul className={desktop ? "mt-3 space-y-1" : "mt-1"}>
            {column.links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={onNavigate}
                  className={
                    desktop
                      ? "block rounded-lg px-2 py-2 hover:bg-action-50"
                      : "flex min-h-11 items-center py-2 text-ink"
                  }
                >
                  <span className={desktop ? "font-semibold text-navy" : undefined}>
                    {link.label}
                  </span>
                  {desktop && link.description ? (
                    <span className="block text-sm text-ink-600">{link.description}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
