import { ContentSections } from "@/components/content/ContentSections";
import { EditorialMetaBlock } from "@/components/content/EditorialMetaBlock";
import { EssentialBlock } from "@/components/content/EssentialBlock";
import { Faq } from "@/components/content/Faq";
import { ComparisonCriteria } from "@/components/content/modules/ComparisonCriteria";
import { ExpertiseBlock } from "@/components/content/modules/ExpertiseBlock";
import { GuidesGrid } from "@/components/content/modules/GuidesGrid";
import { HowItWorks } from "@/components/content/modules/HowItWorks";
import { PriceCriteria } from "@/components/content/modules/PriceCriteria";
import { SituationGrid } from "@/components/content/modules/SituationGrid";
import { TradeGrid } from "@/components/content/modules/TradeGrid";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { TableOfContents } from "@/components/content/TableOfContents";
import { MiniQuoteForm } from "@/components/forms/MiniQuoteForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/templates/PageShell";
import { contentPath } from "@/lib/content";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLdGraph,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import type { LandingModule, LandingPage } from "@/types/content";

/**
 * Gabarit d'une page commerciale.
 *
 * Le contenu rédactionnel reste propre à chaque page ; seuls les modules
 * transverses (grilles, fonctionnement, expertise) sont partagés, dans l'ordre
 * déclaré par le contenu.
 */
function renderModule(module: LandingModule, page: LandingPage) {
  switch (module) {
    case "quote-form-teaser":
      return (
        <section key={module} id="demande" className="mt-12">
          <h2 className="text-2xl sm:text-3xl">Démarrer votre demande</h2>
          <div className="mt-5">
            <MiniQuoteForm sourcePath={contentPath(page)} />
          </div>
        </section>
      );
    case "trade-grid":
      return <TradeGrid key={module} limit={12} />;
    case "situation-grid":
      return <SituationGrid key={module} limit={6} />;
    case "how-it-works":
      return <HowItWorks key={module} />;
    case "price-table":
      return <PriceCriteria key={module} />;
    case "comparison-criteria":
      return <ComparisonCriteria key={module} />;
    case "expertise":
      return <ExpertiseBlock key={module} />;
    case "guides":
      return <GuidesGrid key={module} limit={6} />;
  }
}

export function LandingPageTemplate({ page }: { page: LandingPage }) {
  const path = contentPath(page);
  const quoteQuery = { source_page: path };

  const tocEntries = [
    { id: "l-essentiel", title: "L’essentiel" },
    ...page.sections.map((section) => ({ id: section.id, title: section.title })),
    { id: "faq", title: "Questions fréquentes" },
  ];

  return (
    <PageShell breadcrumb={page.breadcrumb} h1={page.h1} lead={page.heroText} quoteQuery={quoteQuery}>
      <EssentialBlock
        shortAnswer={page.shortAnswer}
        summaryBullets={page.summaryBullets}
        quoteQuery={quoteQuery}
      />

      <TableOfContents entries={tocEntries} />

      <ContentSections sections={page.sections} />

      {page.modules.map((module) => renderModule(module, page))}

      <Faq items={page.faq} />

      <RelatedLinks paths={page.relatedPaths} />

      <EditorialMetaBlock editorial={page.editorial} sources={page.sources} />

      <JsonLd
        data={jsonLdGraph([
          breadcrumbSchema(page.breadcrumb, path),
          webPageSchema({
            name: page.seo.title,
            description: page.seo.description,
            path,
            modifiedAt: page.editorial.modifiedAt,
          }),
          serviceSchema({
            name: page.name,
            description: page.seo.description,
            path,
          }),
          faqSchema(page.faq),
        ])}
      />
    </PageShell>
  );
}
