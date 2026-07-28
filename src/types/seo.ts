export interface SeoFields {
  /** Balise <title>. Unique sur tout le site. */
  title: string;
  /** Meta description. Unique, 140 à 165 caractères visés. */
  description: string;
  /** Chemin canonique absolu depuis la racine, avec slash final. */
  canonicalPath?: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  noindex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export interface BreadcrumbSegment {
  name: string;
  /** Chemin avec slash final. Absent pour le dernier segment. */
  path?: string;
}

export type SitemapSection =
  | "commercial"
  | "trades"
  | "situations"
  | "guides"
  | "corporate";
