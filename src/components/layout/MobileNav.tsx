"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { NavColumns } from "@/components/layout/NavColumns";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { isPlaceholder } from "@/lib/placeholders";

/**
 * Menu mobile.
 *
 * Seul le mécanisme d'ouverture est confié au JavaScript : les liens sont des
 * ancres réelles, présentes dans le HTML rendu côté serveur. Le panneau se
 * ferme à la touche Échap — le focus revenant alors sur le bouton déclencheur —
 * et à l'activation d'un lien.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const phoneAvailable = !isPlaceholder(siteConfig.contact.phone);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center gap-2 rounded-lg border-2 border-navy px-3 py-2 font-semibold text-navy"
      >
        <span aria-hidden="true" className="text-lg leading-none">
          {open ? "✕" : "☰"}
        </span>
        Menu
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-white shadow-raised"
      >
        <nav aria-label="Navigation principale (mobile)" className="px-4 py-3">
          <ul className="divide-y divide-line">
            {primaryNavigation.map((section) => (
              <li key={section.path} className="py-1">
                <details>
                  <summary className="flex min-h-11 cursor-pointer items-center justify-between py-2 font-semibold text-navy">
                    {section.label}
                    <span aria-hidden="true" className="text-ink-600">
                      +
                    </span>
                  </summary>
                  <div className="space-y-2 pb-3">
                    <NavColumns section={section} variant="mobile" onNavigate={close} />
                  </div>
                </details>
              </li>
            ))}
          </ul>

          <div className="mt-4 space-y-2 pb-2">
            <Link
              href="/devis-assurance-decennale/"
              onClick={close}
              className="flex min-h-11 items-center justify-center rounded-lg bg-action px-4 py-2.5 font-semibold text-white"
            >
              Comparer les offres
            </Link>
            {phoneAvailable ? (
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="flex min-h-11 items-center justify-center rounded-lg border-2 border-navy px-4 py-2.5 font-semibold text-navy"
              >
                {siteConfig.contact.phone}
              </a>
            ) : null}
          </div>
        </nav>
      </div>
    </div>
  );
}
