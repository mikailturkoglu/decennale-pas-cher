import { ContentSections } from "@/components/content/ContentSections";
import { EditorialMetaBlock } from "@/components/content/EditorialMetaBlock";
import { EssentialBlock } from "@/components/content/EssentialBlock";
import { Faq } from "@/components/content/Faq";
import { BulletList } from "@/components/content/Prose";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { TableOfContents } from "@/components/content/TableOfContents";
import { MiniQuoteForm } from "@/components/forms/MiniQuoteForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/templates/PageShell";
import { Callout } from "@/components/ui/Callout";
import { getExpert } from "@/data/experts";
import { NOTICES } from "@/data/legal-notices";
import { contentPath, resolveInternalLinks } from "@/lib/content";
import { articleSchema, breadcrumbSchema, faqSchema, jsonLdGraph } from "@/lib/schema";
import type { SituationPage } from "@/types/content";

/**
 * Gabarit d'une page situation.
 *
 * Les situations sensibles (résiliation, non-paiement, sinistre, chantier
 * commencé, reprise du passé) affichent systématiquement la mention d'absence
 * de promesse d'acceptation : c'est une contrainte du gabarit, pas une décision
 * laissée à la rédaction.
 */
export function SituationPageTemplate({ page }: { page: SituationPage }) {
  const path = contentPath(page);
  const quoteQuery = { situation: page.formSituationValue, source_page: path };

  const tocEntries = [
    { id: "l-essentiel", title: "L’essentiel" },
    ...page.sections.map((section) => ({ id: section.id, title: section.title })),
    { id: "documents", title: "Documents à préparer" },
    { id: "prix", title: "Ce qui influence le prix" },
    { id: "erreurs", title: "Erreurs fréquentes" },
    { id: "faq", title: "Questions fréquentes" },
  ];

  const suggestedTrades = resolveInternalLinks(
    page.suggestedTradeSlugs.map((slug) => `/${slug}/`),
  );

  return (
    <PageShell breadcrumb={page.breadcrumb} h1={page.h1} quoteQuery={quoteQuery}>
      <EssentialBlock
        shortAnswer={page.shortAnswer}
        summaryBullets={page.summaryBullets}
        quoteQuery={quoteQuery}
        secondaryCta={{
          href: "/guides/documents-devis-assurance-decennale/",
          label: "Voir les documents à réunir",
        }}
      />

      {page.sensitive ? (
        <Callout tone="legal" title="Étude au cas par cas" className="mt-6">
          {NOTICES.noAcceptancePromise} {NOTICES.pastCoverage}
        </Callout>
      ) : null}

      <TableOfContents entries={tocEntries} />

      <ContentSections sections={page.sections} />

      <section id="documents" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Documents à préparer</h2>
        <BulletList items={page.documents} variant="check" />
      </section>

      <section id="prix" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Ce qui influence le prix dans cette situation</h2>
        <BulletList items={page.pricingFactors} />
      </section>

      <section id="erreurs" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Erreurs fréquentes</h2>
        <BulletList items={page.commonMistakes} />
      </section>

      <section id="demande" className="mt-12">
        <h2 className="text-2xl sm:text-3xl">Faire étudier votre dossier</h2>
        <div className="mt-5">
          <MiniQuoteForm
            defaultSituation={page.formSituationValue}
            sourcePath={path}
            title="Votre demande, préremplie pour cette situation"
          />
        </div>
      </section>

      <Faq items={page.faq} />

      {suggestedTrades.length > 0 ? (
        <RelatedLinks
          paths={page.suggestedTradeSlugs.map((slug) => `/${slug}/`)}
          title="Les informations propres à votre métier"
          intro="Complétez cette page par les travaux à déclarer dans votre métier."
        />
      ) : null}

      <RelatedLinks paths={page.relatedPaths} />

      <EditorialMetaBlock editorial={page.editorial} sources={page.sources} />

      <JsonLd
        data={jsonLdGraph([
          breadcrumbSchema(page.breadcrumb, path),
          articleSchema({
            headline: page.h1,
            description: page.seo.description,
            path,
            publishedAt: page.editorial.publishedAt,
            modifiedAt: page.editorial.modifiedAt,
            author: getExpert(page.editorial.authorId),
            ...(page.editorial.reviewerId
              ? { reviewer: getExpert(page.editorial.reviewerId) }
              : {}),
            sources: [...page.sources],
          }),
          faqSchema(page.faq),
        ])}
      />
    </PageShell>
  );
}
