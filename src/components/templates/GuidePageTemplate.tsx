import Link from "next/link";

import { ContentSections } from "@/components/content/ContentSections";
import { EditorialMetaBlock } from "@/components/content/EditorialMetaBlock";
import { Faq } from "@/components/content/Faq";
import { BulletList } from "@/components/content/Prose";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { TableOfContents } from "@/components/content/TableOfContents";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/templates/PageShell";
import { ButtonLink } from "@/components/ui/Button";
import { guideCategories } from "@/content/guides";
import { getExpert } from "@/data/experts";
import { contentPath, resolveInternalLink } from "@/lib/content";
import { articleSchema, breadcrumbSchema, faqSchema, jsonLdGraph } from "@/lib/schema";
import type { GuidePage } from "@/types/content";

/**
 * Gabarit d'un guide.
 *
 * Structure : résumé, sommaire, réponse directe, développement, checklist, FAQ,
 * appel à l'action contextuel vers la page commerciale la plus proche, sources
 * et articles liés.
 */
export function GuidePageTemplate({ page }: { page: GuidePage }) {
  const path = contentPath(page);
  const category = guideCategories.find((item) => item.slug === page.category);
  const commercialLink = resolveInternalLink(page.primaryCommercialPath);

  const tocEntries = [
    { id: "reponse-directe", title: "Réponse directe" },
    ...page.sections.map((section) => ({ id: section.id, title: section.title })),
    ...(page.checklist ? [{ id: "checklist", title: "À vérifier" }] : []),
    { id: "faq", title: "Questions fréquentes" },
  ];

  return (
    <PageShell breadcrumb={page.breadcrumb} h1={page.h1} lead={page.summary}>
      {category ? (
        <p className="mt-4 text-sm text-ink-600">
          Catégorie :{" "}
          <Link href="/guides/" className="text-action-700 underline underline-offset-4">
            {category.name}
          </Link>
        </p>
      ) : null}

      <section
        id="reponse-directe"
        aria-labelledby="reponse-directe-titre"
        className="mt-6 rounded-card border border-line bg-surface p-5 sm:p-6"
      >
        <h2 id="reponse-directe-titre" className="text-lg font-bold uppercase tracking-wide text-navy">
          Réponse directe
        </h2>
        <p className="mt-3 text-lg">{page.shortAnswer}</p>
        <BulletList items={page.summaryBullets} variant="check" />
      </section>

      <TableOfContents entries={tocEntries} />

      <ContentSections sections={page.sections} />

      {page.checklist ? (
        <section id="checklist" className="mt-10">
          <h2 className="text-2xl sm:text-3xl">À vérifier</h2>
          <BulletList items={page.checklist} variant="check" />
        </section>
      ) : null}

      <Faq items={page.faq} />

      {commercialLink ? (
        <section aria-labelledby="cta-guide" className="mt-12 rounded-card bg-navy p-6 text-white">
          <h2 id="cta-guide" className="text-2xl text-white">
            Passer à l’étape suivante
          </h2>
          <p className="mt-2 text-white/90">{commercialLink.description}</p>
          <ButtonLink
            href={commercialLink.path}
            className="mt-5 bg-accent text-navy hover:bg-white"
            data-analytics-event="cta_click"
          >
            {commercialLink.label}
          </ButtonLink>
        </section>
      ) : null}

      <RelatedLinks paths={page.relatedPaths} title="Articles et pages liés" />

      <EditorialMetaBlock
        editorial={page.editorial}
        sources={page.sources}
        {...(page.legalReferences ? { legalReferences: page.legalReferences } : {})}
      />

      <JsonLd
        data={jsonLdGraph([
          breadcrumbSchema(page.breadcrumb, path),
          articleSchema({
            headline: page.title,
            description: page.seo.description,
            path,
            publishedAt: page.editorial.publishedAt,
            modifiedAt: page.editorial.modifiedAt,
            author: getExpert(page.editorial.authorId),
            ...(page.editorial.reviewerId
              ? { reviewer: getExpert(page.editorial.reviewerId) }
              : {}),
            sources: [...page.sources, ...(page.legalReferences ?? [])],
          }),
          faqSchema(page.faq),
        ])}
      />
    </PageShell>
  );
}
