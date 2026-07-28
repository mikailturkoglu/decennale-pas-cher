import type { Metadata } from "next";
import Link from "next/link";

import { EditorialMetaBlock } from "@/components/content/EditorialMetaBlock";
import { Faq } from "@/components/content/Faq";
import { ComparisonCriteria } from "@/components/content/modules/ComparisonCriteria";
import { ExpertiseBlock } from "@/components/content/modules/ExpertiseBlock";
import { GuidesGrid } from "@/components/content/modules/GuidesGrid";
import { HowItWorks } from "@/components/content/modules/HowItWorks";
import { PriceCriteria } from "@/components/content/modules/PriceCriteria";
import { SituationGrid } from "@/components/content/modules/SituationGrid";
import { TradeGrid } from "@/components/content/modules/TradeGrid";
import { MiniQuoteForm } from "@/components/forms/MiniQuoteForm";
import { Container } from "@/components/layout/Container";
import { StickyCta } from "@/components/layout/StickyCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { PlaceholderValue } from "@/components/ui/PlaceholderValue";
import { homeContent } from "@/content/home";
import { trustPoints } from "@/data/service";
import { HOME_PATH } from "@/lib/content";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLdGraph,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: homeContent.seo,
  path: HOME_PATH,
});

/**
 * Page d'accueil.
 *
 * Elle a deux fonctions : faire comprendre en quelques secondes ce que fait le
 * service, et distribuer l'autorité vers les quatre silos (pages commerciales,
 * métiers, situations, guides). Tous les liens sont de vraies ancres rendues
 * côté serveur, y compris ceux des grilles.
 */
export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="grid items-start gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_26rem] lg:py-14">
          <div>
            <p className="font-semibold uppercase tracking-wide text-action-700">
              {homeContent.eyebrow}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">{homeContent.h1}</h1>
            <p className="mt-4 max-w-2xl text-lg text-ink">{homeContent.heroText}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink
                href={homeContent.primaryCta.href}
                size="lg"
                data-analytics-event="cta_click"
              >
                {homeContent.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={homeContent.secondaryCta.href} variant="secondary" size="lg">
                {homeContent.secondaryCta.label}
              </ButtonLink>
            </div>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {homeContent.keyPoints.map((point) => (
                <li key={point.slice(0, 40)} className="flex gap-2 text-sm">
                  <span aria-hidden="true" className="mt-0.5 font-bold text-success">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/*
              Réassurance : chaque élément reste un placeholder visible tant que
              le porteur de projet ne l'a pas confirmé. Annoncer « gratuit » ou
              « sans engagement » sans validation serait une promesse commerciale
              non vérifiée.
            */}
            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-600">
              {trustPoints.map((point) => (
                <div key={point.label} className="flex items-baseline gap-2">
                  <dt>{point.label}</dt>
                  <dd>
                    <PlaceholderValue value={point.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <MiniQuoteForm sourcePath={HOME_PATH} title="Comparer pour mon métier" />
        </Container>
      </section>

      <Container className="pb-16">
        <TradeGrid
          limit={12}
          intro="Chaque page part des travaux que vous facturez réellement, pas d’un intitulé général : c’est ce qui détermine l’étendue de votre garantie pendant dix ans."
        />

        <SituationGrid
          limit={6}
          intro="À métier identique, un créateur d’entreprise, un artisan jamais assuré et une entreprise résiliée ne présentent pas le même dossier."
        />

        <HowItWorks />

        <PriceCriteria />

        <ComparisonCriteria title="Pourquoi comparer autre chose que le prix" />

        <ExpertiseBlock />

        <GuidesGrid
          limit={6}
          title="Comprendre avant de vous engager"
          intro="Des guides sourcés, datés et relus, pour vérifier par vous-même ce qui s’applique à votre situation."
        />

        <Faq items={homeContent.faq} />

        <section
          aria-labelledby="cta-final"
          className="mt-12 rounded-card bg-navy p-6 text-white sm:p-8"
        >
          <h2 id="cta-final" className="text-2xl text-white sm:text-3xl">
            Recevez des propositions adaptées à votre activité
          </h2>
          <p className="mt-3 max-w-2xl text-white/90">
            Six étapes courtes, aucune pièce jointe obligatoire, et un dossier directement
            exploitable par un professionnel de l’assurance construction.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="/devis-assurance-decennale/"
              size="lg"
              className="bg-accent text-navy hover:bg-accent/90"
              data-analytics-event="cta_click"
            >
              Demander des devis
            </ButtonLink>
            <Link href="/notre-methode/" className="text-white underline underline-offset-4">
              Comment votre demande est traitée
            </Link>
          </div>
        </section>

        <EditorialMetaBlock editorial={homeContent.editorial} sources={homeContent.sources} />
      </Container>

      <div aria-hidden="true" className="h-20 lg:hidden" />
      <StickyCta />

      <JsonLd
        data={jsonLdGraph([
          breadcrumbSchema([{ name: "Accueil", path: HOME_PATH }], HOME_PATH),
          webPageSchema({
            name: homeContent.seo.title,
            description: homeContent.seo.description,
            path: HOME_PATH,
            modifiedAt: homeContent.editorial.modifiedAt,
          }),
          serviceSchema({
            name: "Mise en relation en assurance de responsabilité civile décennale",
            description: homeContent.seo.description,
            path: HOME_PATH,
          }),
          faqSchema(homeContent.faq),
        ])}
      />
    </>
  );
}
