import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { siteConfig } from "@/data/site";
import { isPlaceholder } from "@/lib/placeholders";

/**
 * En-tête du site.
 *
 * Le contenu des sous-menus est rendu côté serveur, donc explorable par les
 * moteurs, et reste ouvrable sans JavaScript.
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

        <DesktopNav />

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
