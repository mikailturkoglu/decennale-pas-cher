import type { Metadata } from "next";
import Script from "next/script";

import { ContentSections } from "@/components/content/ContentSections";
import { EditorialMetaBlock } from "@/components/content/EditorialMetaBlock";
import { EssentialBlock } from "@/components/content/EssentialBlock";
import { Faq } from "@/components/content/Faq";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { QuoteForm } from "@/components/forms/QuoteForm";
import type { QuoteDefaults } from "@/components/forms/quote-form-fields";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/templates/PageShell";
import { Callout } from "@/components/ui/Callout";
import { devisLanding } from "@/content/landing";
import { situationOptions, tradeOptionValues } from "@/data/form-options";
import { contentPath } from "@/lib/content";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLdGraph,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata, normalizePath } from "@/lib/seo";

const path = contentPath(devisLanding);

export const metadata: Metadata = buildMetadata({ seo: devisLanding.seo, path });

/**
 * Page du tunnel de devis.
 *
 * Rendue à la demande, et non préconstruite : le formulaire est prérempli à
 * partir de la page d'origine (`?trade=macon&source_page=...`), ce qui suppose de
 * lire les paramètres d'URL côté serveur. Le contenu indexable de la page reste
 * intégralement présent dans le HTML rendu.
 */
type SearchParams = Record<string, string | string[] | undefined>;

function firstValue(params: SearchParams, key: string): string | undefined {
  const raw = params[key];
  const value = Array.isArray(raw) ? raw[0] : raw;
  return value?.trim() || undefined;
}

/**
 * Préremplissage.
 *
 * Chaque valeur issue de l'URL est vérifiée contre les listes d'options : un
 * paramètre inconnu est ignoré plutôt que réinjecté dans le formulaire.
 */
function readDefaults(params: SearchParams): QuoteDefaults {
  const trade = firstValue(params, "trade");
  const situation = firstValue(params, "situation");
  const postalCode = firstValue(params, "code_postal");
  const sourcePage = firstValue(params, "source_page");

  return {
    ...(trade && tradeOptionValues.includes(trade) ? { trade } : {}),
    ...(situation && situationOptions.some((option) => option.value === situation)
      ? { situation }
      : {}),
    ...(postalCode && /^\d{5}$/.test(postalCode) ? { postalCode } : {}),
    sourcePage: sourcePage ? normalizePath(sourcePage) : path,
  };
}

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const defaults = readDefaults(await searchParams);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <PageShell
      breadcrumb={devisLanding.breadcrumb}
      h1={devisLanding.h1}
      lead={devisLanding.heroText}
      hideStickyCta
    >
      <EssentialBlock
        shortAnswer={devisLanding.shortAnswer}
        summaryBullets={devisLanding.summaryBullets}
        ctaLabel="Commencer ma demande"
      />

      <section id="formulaire" className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Votre demande de devis</h2>
        <p className="mt-3">
          Décrivez votre activité telle que vous la facturez réellement. C’est cette description qui
          détermine les activités inscrites sur votre future attestation, donc l’étendue de votre
          garantie pendant dix ans.
        </p>

        <div className="mt-6">
          <QuoteForm
            defaults={defaults}
            {...(turnstileSiteKey ? { turnstileSiteKey } : {})}
          />
        </div>

        <Callout tone="legal" title="Ce que fait — et ne fait pas — ce formulaire" className="mt-6">
          Envoyer cette demande ne constitue ni une souscription, ni une garantie d’acceptation.
          Votre dossier est étudié par un professionnel partenaire habilité, qui décide seul de la
          suite donnée à la demande.
        </Callout>
      </section>

      <ContentSections sections={devisLanding.sections} />

      <Faq items={devisLanding.faq} />

      <RelatedLinks paths={devisLanding.relatedPaths} />

      <EditorialMetaBlock editorial={devisLanding.editorial} sources={devisLanding.sources} />

      {turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
      ) : null}

      <JsonLd
        data={jsonLdGraph([
          breadcrumbSchema(devisLanding.breadcrumb, path),
          webPageSchema({
            name: devisLanding.seo.title,
            description: devisLanding.seo.description,
            path,
            modifiedAt: devisLanding.editorial.modifiedAt,
          }),
          serviceSchema({
            name: devisLanding.name,
            description: devisLanding.seo.description,
            path,
          }),
          faqSchema(devisLanding.faq),
        ])}
      />
    </PageShell>
  );
}
