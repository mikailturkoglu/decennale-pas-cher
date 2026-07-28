"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Container } from "@/components/layout/Container";
import { Button, ButtonLink } from "@/components/ui/Button";

/**
 * Page d'erreur applicative.
 *
 * Le message reste technique et ne révèle rien de la pile d'exécution. Seul le
 * `digest` fourni par Next.js est journalisé : il permet de retrouver l'erreur
 * côté serveur sans exposer de donnée au visiteur.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("client_error", { digest: error.digest });
  }, [error.digest]);

  return (
    <Container width="narrow" className="py-14">
      <p className="font-semibold uppercase tracking-wide text-action-700">Erreur technique</p>
      <h1 className="mt-2 text-3xl sm:text-4xl">Cette page n’a pas pu s’afficher</h1>
      <p className="mt-4 text-lg text-ink-600">
        L’incident a été enregistré. Vous pouvez réessayer, ou revenir à une page connue.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button size="lg" onClick={reset}>
          Réessayer
        </Button>
        <ButtonLink href="/" variant="secondary" size="lg">
          Retour à l’accueil
        </ButtonLink>
      </div>

      <p className="mt-8">
        Si le problème persiste et que vous étiez en train de remplir une demande de devis,{" "}
        <Link href="/contact/" className="text-action-700 underline underline-offset-4">
          contactez-nous
        </Link>{" "}
        : votre saisie n’est pas perdue tant que l’onglet reste ouvert.
      </p>

      {error.digest ? (
        <p className="mt-6 text-sm text-ink-600">
          Référence technique de l’incident : <span className="font-mono">{error.digest}</span>
        </p>
      ) : null}
    </Container>
  );
}
