import { businessModel, siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";
import { isPlaceholder } from "@/lib/placeholders";
import type { ExpertReference, FaqItem, SourceReference } from "@/types/content";
import type { BreadcrumbSegment } from "@/types/seo";

export type JsonLd = Record<string, unknown>;

const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

/**
 * Le type Schema.org retenu dépend du modèle réellement exercé.
 * Tant que le site se limite à la mise en relation, `Organization` est le seul
 * type honnête : `InsuranceAgency` supposerait une activité de distribution.
 */
function organizationType(): string {
  return businessModel === "distribution" ? "InsuranceAgency" : "Organization";
}

/** Retire les champs vides ou encore à l'état de placeholder. */
function clean<T extends JsonLd>(input: T): T {
  const output: JsonLd = {};
  for (const [key, value] of Object.entries(input)) {
    if (value === undefined || value === null || value === "") continue;
    if (typeof value === "string" && isPlaceholder(value)) continue;
    if (Array.isArray(value) && value.length === 0) continue;
    output[key] = value;
  }
  return output as T;
}

export function organizationSchema(): JsonLd {
  return clean({
    "@type": organizationType(),
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    description: siteConfig.shortDescription,
    areaServed: siteConfig.serviceArea,
    legalName: isPlaceholder(siteConfig.publisher.legalName)
      ? undefined
      : siteConfig.publisher.legalName,
    email: isPlaceholder(siteConfig.contact.email) ? undefined : siteConfig.contact.email,
    telephone: isPlaceholder(siteConfig.contact.phone) ? undefined : siteConfig.contact.phone,
    sameAs: [siteConfig.social.linkedin].filter(Boolean),
  });
}

export function webSiteSchema(): JsonLd {
  return clean({
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    inLanguage: siteConfig.locale,
    publisher: { "@id": ORGANIZATION_ID },
  });
}

export function breadcrumbSchema(segments: BreadcrumbSegment[], currentPath: string): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: segment.name,
      item: absoluteUrl(segment.path ?? currentPath),
    })),
  };
}

export function faqSchema(items: FaqItem[]): JsonLd {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function personSchema(expert: ExpertReference): JsonLd | undefined {
  if (isPlaceholder(expert.name)) return undefined;
  return clean({
    "@type": "Person",
    name: expert.name,
    jobTitle: expert.role,
    url: absoluteUrl(expert.profilePath),
  });
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  publishedAt: string;
  modifiedAt: string;
  author: ExpertReference;
  reviewer?: ExpertReference;
  sources?: SourceReference[];
}): JsonLd {
  return clean({
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    datePublished: input.publishedAt,
    dateModified: input.modifiedAt,
    inLanguage: siteConfig.locale,
    image: `${absoluteUrl(input.path)}opengraph-image`,
    author: personSchema(input.author) ?? { "@id": ORGANIZATION_ID },
    reviewedBy: input.reviewer ? personSchema(input.reviewer) : undefined,
    publisher: { "@id": ORGANIZATION_ID },
    citation: input.sources?.map((source) => source.url),
  });
}

/**
 * Schéma de service. Aucun prix n'y figure : le site ne propose pas de tarif
 * contractuel et un `offers.price` serait trompeur.
 */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return clean({
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: "Mise en relation en assurance de responsabilité civile décennale",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: siteConfig.serviceArea },
    url: absoluteUrl(input.path),
  });
}

export function webPageSchema(input: {
  name: string;
  description: string;
  path: string;
  modifiedAt?: string;
}): JsonLd {
  return clean({
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: siteConfig.locale,
    dateModified: input.modifiedAt,
    isPartOf: { "@id": WEBSITE_ID },
  });
}

/** Assemble plusieurs nœuds dans un unique graphe JSON-LD. */
export function jsonLdGraph(nodes: (JsonLd | undefined)[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.filter((node): node is JsonLd => Boolean(node)),
  });
}
