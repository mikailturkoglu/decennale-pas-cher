import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { isPlaceholder } from "@/lib/placeholders";

/**
 * En-tête du site.
 *
 * La navigation de bureau ne dépend pas du JavaScript : les intitulés de menu
 * sont des liens vers de vraies pages hub, et les sous-menus s'ouvrent au
 * survol comme au focus clavier (`group-focus-within`). Le contenu des
 * sous-menus est présent dans le HTML, donc explorable par les moteurs.
 */
export function Header() {
  const phoneAvailable = !isPlaceholder(siteConfig.contact.phone);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-navy sm:text-xl"
          aria-label={`${siteConfig.name} — accueil`}
        >
          Décennale<span className="text-action">BTP</span>.fr
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNavigation.map((section) => (
              <li key={section.path} className="group static">
                <Link
                  href={section.path}
                  className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 font-semibold text-navy hover:bg-surface"
                >
                  {section.label}
                </Link>

                <div className="invisible absolute inset-x-0 top-full opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="mt-0 border-t border-line bg-white shadow-raised">
                    <Container className="grid gap-8 py-6 md:grid-cols-2">
                      {section.columns.map((column) => (
                        <div key={column.title}>
                          <p className="text-xs font-semibold uppercase tracking-wide text-ink-600">
                            {column.title}
                          </p>
                          <ul className="mt-3 space-y-1">
                            {column.links.map((link) => (
                              <li key={link.path}>
                                <Link
                                  href={link.path}
                                  className="block rounded-lg px-2 py-2 hover:bg-action-50"
                                >
                                  <span className="font-semibold text-navy">{link.label}</span>
                                  {link.description ? (
                                    <span className="block text-sm text-ink-600">
                                      {link.description}
                                    </span>
                                  ) : null}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Container>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {phoneAvailable ? (
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="hidden min-h-11 items-center px-2 font-semibold text-navy underline underline-offset-4 xl:inline-flex"
              data-analytics-event="phone_click"
            >
              {siteConfig.contact.phone}
            </a>
          ) : null}
          <Link
            href="/devis-assurance-decennale/"
            className="hidden min-h-11 items-center rounded-lg bg-action px-4 py-2.5 font-semibold text-white hover:bg-action-700 lg:inline-flex"
            data-analytics-event="cta_click"
          >
            Comparer les offres
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
