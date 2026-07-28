import type { Metadata } from "next";

import { InfoPageTemplate } from "@/components/templates/InfoPageTemplate";
import { buildMetadata } from "@/lib/seo";
import type { InfoPage } from "@/types/content";

interface InfoRouteOptions {
  /** Les pages légales n'affichent pas la barre d'action commerciale. */
  hideStickyCta?: boolean;
  width?: "default" | "narrow";
}

/**
 * Fabrique de route pour une page institutionnelle ou légale.
 *
 * Chaque fichier de route se limite ainsi à désigner son contenu : les
 * métadonnées, la canonical et le gabarit restent produits en un seul endroit.
 */
export function createInfoRoute(page: InfoPage, options: InfoRouteOptions = {}) {
  const metadata: Metadata = buildMetadata({ seo: page.seo, path: page.path });

  function Page() {
    return (
      <InfoPageTemplate
        page={page}
        hideStickyCta={options.hideStickyCta ?? false}
        width={options.width ?? "narrow"}
      />
    );
  }

  return { metadata, Page };
}
