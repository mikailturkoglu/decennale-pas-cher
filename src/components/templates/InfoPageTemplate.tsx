import type { ReactNode } from "react";

import { ContentSections } from "@/components/content/ContentSections";
import { EditorialMetaBlock } from "@/components/content/EditorialMetaBlock";
import { Faq } from "@/components/content/Faq";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { TableOfContents } from "@/components/content/TableOfContents";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/templates/PageShell";
import { breadcrumbSchema, faqSchema, jsonLdGraph, webPageSchema } from "@/lib/schema";
import { formatFrenchDate } from "@/lib/seo";
import type { InfoPage } from "@/types/content";

interface InfoPageTemplateProps {
  page: InfoPage;
  /** Contenu additionnel inséré après les sections (grilles, outils). */
  children?: ReactNode;
  /** Contenu inséré avant les sections (grille de liens d'un hub). */
  beforeSections?: ReactNode;
  hideStickyCta?: boolean;
  width?: "default" | "narrow";
}

/**
 * Gabarit des pages institutionnelles, légales, hubs et outils.
 *
 * Les hubs injectent leur grille de liens via `beforeSections`, ce qui évite de
 * dupliquer la structure de page pour chaque silo.
 */
export function InfoPageTemplate({
  page,
  children,
  beforeSections,
  hideStickyCta = false,
  width = "narrow",
}: InfoPageTemplateProps) {
  const tocEntries = page.sections.map((section) => ({ id: section.id, title: section.title }));
  const modifiedAt = page.editorial?.modifiedAt ?? page.updatedAt;

  return (
    <PageShell
      breadcrumb={page.breadcrumb}
      h1={page.h1}
      lead={page.intro}
      hideStickyCta={hideStickyCta}
      width={width}
    >
      {page.editorial ? null : page.updatedAt ? (
        <p className="mt-4 text-sm text-ink-600">
          Dernière mise à jour :{" "}
          <time dateTime={page.updatedAt}>{formatFrenchDate(page.updatedAt)}</time>
        </p>
      ) : null}

      {beforeSections}

      <TableOfContents entries={tocEntries} />

      <ContentSections sections={page.sections} />

      {children}

      {page.faq ? <Faq items={page.faq} /> : null}

      {page.relatedPaths ? <RelatedLinks paths={page.relatedPaths} layout="list" /> : null}

      {page.editorial ? (
        <EditorialMetaBlock editorial={page.editorial} sources={page.sources} />
      ) : page.sources && page.sources.length > 0 ? (
        <section aria-labelledby="sources" className="mt-12 rounded-card border border-line bg-surface p-5">
          <h2 id="sources" className="text-xl">
            Sources
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {page.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  className="text-action-700 underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.label}
                </a>
                <span className="text-ink-600"> — {source.publisher}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <JsonLd
        data={jsonLdGraph([
          breadcrumbSchema(page.breadcrumb, page.path),
          webPageSchema({
            name: page.seo.title,
            description: page.seo.description,
            path: page.path,
            ...(modifiedAt ? { modifiedAt } : {}),
          }),
          ...(page.faq ? [faqSchema(page.faq)] : []),
        ])}
      />
    </PageShell>
  );
}
