import { EditorialMetaBlock } from "@/components/content/EditorialMetaBlock";
import { EssentialBlock } from "@/components/content/EssentialBlock";
import { Faq } from "@/components/content/Faq";
import { PriceBands } from "@/components/content/PriceBands";
import { BulletList } from "@/components/content/Prose";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { RiskScenarios } from "@/components/content/RiskScenarios";
import { TableOfContents } from "@/components/content/TableOfContents";
import { WorkTable } from "@/components/content/WorkTable";
import { MiniQuoteForm } from "@/components/forms/MiniQuoteForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/templates/PageShell";
import { Callout } from "@/components/ui/Callout";
import { getExpert } from "@/data/experts";
import { getTradeCategory, tradeCategoryPath } from "@/data/trade-categories";
import { contentPath, resolveInternalLinks } from "@/lib/content";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  jsonLdGraph,
  serviceSchema,
} from "@/lib/schema";
import type { TradePage } from "@/types/content";

/**
 * Gabarit d'une page métier.
 *
 * L'ordre des sections suit l'intention de recherche : réponse directe, demande
 * de devis préremplie, spécificités du métier, travaux à déclarer, sinistres,
 * prix, création d'entreprise, documents, comparaison, FAQ, sources, maillage.
 */
export function TradePageTemplate({ page }: { page: TradePage }) {
  const path = contentPath(page);
  const category = getTradeCategory(page.category);
  const quoteQuery = { trade: page.formTradeValue, source_page: path };

  const tocEntries = [
    { id: "l-essentiel", title: "L’essentiel" },
    { id: "specificites", title: `Pourquoi la décennale d’un ${page.name.toLowerCase()} est spécifique` },
    { id: "travaux-a-declarer", title: "Les travaux à déclarer" },
    { id: "sinistres", title: "Sinistres typiques du métier" },
    { id: "prix", title: "Prix de l’assurance décennale" },
    { id: "creation", title: "Création d’entreprise et micro-entreprise" },
    { id: "documents", title: "Documents à fournir" },
    { id: "comparer", title: "Comment comparer les offres" },
    { id: "faq", title: "Questions fréquentes" },
  ];

  const relatedTrades = resolveInternalLinks(
    page.relatedTradeSlugs.map((slug) => `/${slug}/`),
  );

  return (
    <PageShell breadcrumb={page.breadcrumb} h1={page.h1} quoteQuery={quoteQuery}>
      <EssentialBlock
        shortAnswer={page.shortAnswer}
        summaryBullets={page.summaryBullets}
        quoteQuery={quoteQuery}
        ctaLabel={`Comparer pour un ${page.name.toLowerCase()}`}
        secondaryCta={{ href: "/prix-assurance-decennale/", label: "Voir les critères de prix" }}
      />

      <TableOfContents entries={tocEntries} />

      <section id="specificites" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">
          Pourquoi la décennale d’un {page.name.toLowerCase()} est spécifique
        </h2>
        <BulletList items={page.specificity} />
      </section>

      <section id="travaux-a-declarer" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Les travaux à déclarer</h2>
        <p className="mt-4">
          Un contrat ne couvre que les activités inscrites sur l’attestation. La distinction entre
          activité principale, travaux accessoires et activité à déclarer séparément détermine donc
          l’étendue réelle de votre garantie.
        </p>

        <h3 className="mt-6 text-xl">Travaux généralement couverts par l’activité principale</h3>
        <BulletList items={page.coveredWork} variant="check" />

        <h3 className="mt-6 text-xl">Travaux accessoires</h3>
        <BulletList items={page.accessoryWork} />

        <h3 className="mt-6 text-xl">Activités à déclarer séparément</h3>
        <BulletList items={page.separatelyDeclaredWork} />

        <h3 className="mt-6 text-xl">Exclusions fréquentes</h3>
        <BulletList items={page.commonExclusions} />

        <WorkTable rows={page.workTable} tradeName={page.name} />

        <Callout tone="warning" title="Le réflexe qui évite le sinistre non couvert">
          Comparez cette liste avec les prestations que vous facturez réellement, puis avec les
          activités inscrites sur votre attestation. Tout écart constitue un risque non garanti,
          pendant dix ans.
        </Callout>
      </section>

      <section id="sinistres" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Sinistres typiques du métier</h2>
        <p className="mt-4">
          Ces situations sont représentatives des désordres qui engagent la responsabilité décennale
          dans ce métier. Elles illustrent pourquoi certaines activités sont examinées de près.
        </p>
        <RiskScenarios scenarios={page.riskScenarios} />
      </section>

      <section id="prix" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">
          Prix de l’assurance décennale pour un {page.name.toLowerCase()}
        </h2>
        <p className="mt-4">
          Il n’existe pas de tarif unique : la cotisation se construit profil par profil. Les repères
          ci-dessous décrivent des profils types et leurs hypothèses.
        </p>
        <PriceBands
          bands={page.priceBands}
          caption={`Repères tarifaires indicatifs pour un ${page.name.toLowerCase()}`}
        />

        <h3 className="mt-6 text-xl">Ce qui fait varier votre cotisation</h3>
        <BulletList items={page.pricingFactors} />
      </section>

      <section id="creation" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Création d’entreprise et micro-entreprise</h2>
        <BulletList items={page.startupNotes} />
      </section>

      <section id="documents" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Documents à fournir</h2>
        <p className="mt-4">
          Un dossier complet dès la première demande est le principal levier pour réduire les délais
          d’étude.
        </p>
        <BulletList items={page.requiredDocuments} />
      </section>

      <section id="comparer" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Comment comparer les offres</h2>
        <BulletList items={page.comparisonPoints} />
      </section>

      <section id="demande" className="mt-12">
        <h2 className="text-2xl sm:text-3xl">
          Demander des propositions pour votre activité
        </h2>
        <div className="mt-5">
          <MiniQuoteForm
            defaultTrade={page.formTradeValue}
            sourcePath={path}
            title={`Votre demande de ${page.name.toLowerCase()}`}
          />
        </div>
      </section>

      <Faq items={page.faq} title={`Questions fréquentes des ${page.pluralName.replace(/^les /, "")}`} />

      {relatedTrades.length > 0 ? (
        <RelatedLinks
          paths={page.relatedTradeSlugs.map((slug) => `/${slug}/`)}
          title="Métiers voisins"
          intro="Si vous facturez aussi ces prestations, elles doivent figurer sur votre attestation."
        />
      ) : null}

      <RelatedLinks paths={[...page.relatedPaths, tradeCategoryPath(category.slug)]} />

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
          serviceSchema({
            name: `Demande de devis d’assurance décennale pour ${page.pluralName}`,
            description: page.seo.description,
            path,
          }),
          faqSchema(page.faq),
        ])}
      />
    </PageShell>
  );
}