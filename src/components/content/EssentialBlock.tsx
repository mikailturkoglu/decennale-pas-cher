import { BulletList } from "@/components/content/Prose";
import { ButtonLink } from "@/components/ui/Button";

interface EssentialBlockProps {
  shortAnswer: string;
  summaryBullets: readonly string[];
  /** Paramètres de préremplissage du formulaire, propres à la page. */
  quoteQuery?: Record<string, string>;
  ctaLabel?: string;
  secondaryCta?: { href: string; label: string };
}

function quoteHref(query?: Record<string, string>): string {
  if (!query || Object.keys(query).length === 0) return "/devis-assurance-decennale/";
  return `/devis-assurance-decennale/?${new URLSearchParams(query).toString()}`;
}

/**
 * Bloc « L'essentiel ».
 *
 * Première section de chaque page indexable : réponse directe exploitable,
 * points clés, puis appel à l'action prérempli selon la page consultée.
 */
export function EssentialBlock({
  shortAnswer,
  summaryBullets,
  quoteQuery,
  ctaLabel = "Comparer les offres",
  secondaryCta,
}: EssentialBlockProps) {
  return (
    <section
      aria-labelledby="l-essentiel"
      className="mt-6 rounded-card border border-line bg-surface p-5 sm:p-6"
    >
      <h2 id="l-essentiel" className="text-lg font-bold uppercase tracking-wide text-navy">
        L’essentiel
      </h2>
      <p className="mt-3 text-lg text-ink">{shortAnswer}</p>
      <BulletList items={summaryBullets} variant="check" />
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={quoteHref(quoteQuery)} data-analytics-event="cta_click">
          {ctaLabel}
        </ButtonLink>
        {secondaryCta ? (
          <ButtonLink href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </ButtonLink>
        ) : null}
      </div>
    </section>
  );
}
