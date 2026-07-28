import type { MetadataRoute } from "next";

import { sitemapEntries } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

/**
 * Sitemap du site.
 *
 * Un fichier unique suffit : le site compte moins d'une centaine d'URL, très
 * loin des 50 000 entrées qui imposeraient un découpage. Les entrées portent
 * déjà leur section (`commercial`, `trades`, `situations`, `guides`,
 * `corporate`), donc un découpage en plusieurs sitemaps ne demanderait qu'un
 * filtre sur `sitemapEntries()` le jour où le volume le justifiera.
 *
 * Le contenu est intégralement dérivé du registre de contenu : une page en
 * brouillon, en `noindex` ou absente du registre ne peut pas s'y retrouver.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
