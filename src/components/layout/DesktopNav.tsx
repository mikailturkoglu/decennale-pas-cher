"use client";

import { useEffect, useRef } from "react";

import { Container } from "@/components/layout/Container";
import { NavColumns } from "@/components/layout/NavColumns";
import { primaryNavigation } from "@/data/navigation";

/**
 * Mégamenu de bureau.
 *
 * Il repose sur `details`/`summary` afin de rester utilisable sans JavaScript :
 * le panneau s'ouvre alors par un clic natif, et l'ensemble des liens est
 * présent dans le HTML rendu côté serveur, donc explorable.
 *
 * Le JavaScript n'ajoute que du confort : ouverture au survol pour les pointeurs
 * fins, fermeture des menus voisins, fermeture à la touche Échap avec retour du
 * focus sur le déclencheur, et fermeture au clic ou au focus extérieur. Le
 * panneau est ainsi révocable sans déplacer le focus, comme l'exige le critère
 * WCAG 1.4.13.
 */
export function DesktopNav() {
  const navRef = useRef<HTMLElement>(null);

  function closeAll(except?: Element) {
    const nav = navRef.current;
    if (!nav) return;
    for (const details of nav.querySelectorAll<HTMLDetailsElement>("details[open]")) {
      if (details !== except) details.open = false;
    }
  }

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    function closeOpenPanels(restoreFocus: boolean) {
      const open = nav?.querySelector<HTMLDetailsElement>("details[open]");
      if (!open) return;
      open.open = false;
      if (restoreFocus) open.querySelector("summary")?.focus();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeOpenPanels(true);
    }

    function onOutside(event: Event) {
      const target = event.target;
      if (target instanceof Node && !nav?.contains(target)) closeOpenPanels(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("focusin", onOutside);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("focusin", onOutside);
    };
  }, []);

  /** Le survol n'ouvre le menu que pour un pointeur fin : sur écran tactile, seul le clic agit. */
  function hoverTarget(event: React.PointerEvent<HTMLLIElement>): HTMLDetailsElement | null {
    if (event.pointerType !== "mouse") return null;
    return event.currentTarget.querySelector<HTMLDetailsElement>("details");
  }

  return (
    <nav ref={navRef} aria-label="Navigation principale" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {primaryNavigation.map((section) => (
          <li
            key={section.path}
            className="static"
            onPointerEnter={(event) => {
              const details = hoverTarget(event);
              if (!details) return;
              details.open = true;
              closeAll(details);
            }}
            onPointerLeave={(event) => {
              const details = hoverTarget(event);
              if (details) details.open = false;
            }}
          >
            <details>
              <summary
                className="inline-flex min-h-11 cursor-pointer list-none items-center gap-1.5 rounded-lg px-3 py-2 font-semibold text-navy hover:bg-surface [&::-webkit-details-marker]:hidden"
              >
                {section.label}
                <span aria-hidden="true" className="text-xs text-ink-600">
                  ▾
                </span>
              </summary>

              <div className="absolute inset-x-0 top-full border-t border-line bg-white shadow-raised">
                <Container className="py-6">
                  <NavColumns
                    section={section}
                    variant="desktop"
                    onNavigate={() => closeAll()}
                  />
                </Container>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </nav>
  );
}
