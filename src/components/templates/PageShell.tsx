import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { StickyCta } from "@/components/layout/StickyCta";
import type { BreadcrumbSegment } from "@/types/seo";

interface PageShellProps {
  breadcrumb: BreadcrumbSegment[];
  h1: string;
  /** Chapeau affiché sous le titre. */
  lead?: string;
  children: ReactNode;
  /** Préremplissage du formulaire pour la barre d'action mobile. */
  quoteQuery?: Record<string, string>;
  /** Désactive la barre d'action mobile (pages légales, formulaire). */
  hideStickyCta?: boolean;
  width?: "default" | "narrow";
}

/**
 * Structure commune à toutes les pages de contenu.
 *
 * Elle garantit un fil d'Ariane, un H1 unique et une largeur de lecture
 * maîtrisée. La réserve laissée à la barre d'action mobile est portée par le
 * pied de page, qui est le seul élément qu'elle peut recouvrir.
 */
export function PageShell({
  breadcrumb,
  h1,
  lead,
  children,
  quoteQuery,
  hideStickyCta = false,
  width = "narrow",
}: PageShellProps) {
  return (
    <>
      <Container width={width} className="pb-16">
        <Breadcrumbs segments={breadcrumb} />
        <h1 className="mt-2 text-3xl sm:text-4xl">{h1}</h1>
        {lead ? <p className="mt-4 text-lg text-ink-600">{lead}</p> : null}
        {children}
      </Container>
      {hideStickyCta ? null : <StickyCta {...(quoteQuery ? { query: quoteQuery } : {})} />}
    </>
  );
}
