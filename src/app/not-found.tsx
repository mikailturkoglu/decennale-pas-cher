import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { primaryNavigation } from "@/data/navigation";
import { buildNoindexMetadata } from "@/lib/seo";

export const metadata: Metadata = buildNoindexMetadata({
  title: "Page introuvable | DécennaleBTP.fr",
  description: "Cette page n’existe pas ou a été déplacée. Voici les entrées principales du site.",
  path: "/404/",
});

/**
 * Page 404.
 *
 * Elle doit rester une porte d'entrée utile : les six familles de métiers, les
 * situations et les guides sont accessibles en un clic, plutôt qu'un simple
 * message d'erreur suivi d'un retour à l'accueil.
 */
export default function NotFound() {
  return (
    <Container width="narrow" className="py-14">
      <p className="font-semibold uppercase tracking-wide text-action-700">Erreur 404</p>
      <h1 className="mt-2 text-3xl sm:text-4xl">Cette page n’existe pas</h1>
      <p className="mt-4 text-lg text-ink-600">
        L’adresse est peut-être incomplète, ou la page a été renommée. Voici les points d’entrée
        principaux du site.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <ButtonLink href="/" size="lg">
          Retour à l’accueil
        </ButtonLink>
        <ButtonLink href="/plan-du-site/" variant="secondary" size="lg">
          Consulter le plan du site
        </ButtonLink>
      </div>

      <nav aria-label="Sections principales" className="mt-10">
        <ul className="grid gap-4 sm:grid-cols-2">
          {primaryNavigation.map((section) => (
            <li key={section.path} className="rounded-card border border-line p-4">
              <Link
                href={section.path}
                className="font-bold text-action-700 underline underline-offset-4"
              >
                {section.label}
              </Link>
              <ul className="mt-2 space-y-1 text-sm">
                {section.columns[0]?.links.slice(0, 3).map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-ink underline underline-offset-4">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-8">
        Vous cherchiez un métier précis ?{" "}
        <Link href="/metiers/" className="text-action-700 underline underline-offset-4">
          La liste complète des métiers du BTP
        </Link>{" "}
        recense toutes les pages publiées.
      </p>
    </Container>
  );
}
