import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

/**
 * robots.txt
 *
 * Ce fichier ne sert qu'à éviter l'exploration de zones sans intérêt. Il n'est
 * jamais utilisé comme moyen de désindexation : les pages qui ne doivent pas
 * être indexées portent une balise `robots: noindex, follow` (page de
 * confirmation du devis, prévisualisation, recherche interne).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/preview/", "/recherche/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
