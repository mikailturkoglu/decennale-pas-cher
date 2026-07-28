import Link from "next/link";

import { ConsentSettingsButton } from "@/components/analytics/ConsentSettingsButton";
import { Container } from "@/components/layout/Container";
import { PlaceholderValue } from "@/components/ui/PlaceholderValue";
import { footerNavigation } from "@/data/navigation";
import { businessModel, siteConfig } from "@/data/site";
import { NOTICES } from "@/data/legal-notices";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t-4 border-accent bg-navy text-white">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {footerNavigation.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-accent">
                {column.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-sm text-white/90 underline decoration-white/30 underline-offset-4 hover:decoration-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-8 text-sm text-white/80">
          <p className="max-w-3xl">{NOTICES.serviceRole}</p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="font-semibold text-white">Éditeur</dt>
              <dd>
                <PlaceholderValue value={siteConfig.publisher.legalName} />
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">SIREN</dt>
              <dd>
                <PlaceholderValue value={siteConfig.publisher.siren} />
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Téléphone</dt>
              <dd>
                <PlaceholderValue value={siteConfig.contact.phone} />
              </dd>
            </div>
            {businessModel === "distribution" ? (
              <div>
                <dt className="font-semibold text-white">ORIAS</dt>
                <dd>
                  <PlaceholderValue value={siteConfig.intermediation.oriasNumber} />
                </dd>
              </div>
            ) : (
              <div>
                <dt className="font-semibold text-white">Rôle du site</dt>
                <dd>Mise en relation, sans souscription en ligne</dd>
              </div>
            )}
          </dl>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {siteConfig.name}
            </p>
            <ConsentSettingsButton className="min-h-11 text-left underline underline-offset-4 hover:text-white sm:text-right" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
