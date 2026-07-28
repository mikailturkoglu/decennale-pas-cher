import Link from "next/link";

import { PlaceholderValue } from "@/components/ui/PlaceholderValue";
import { getExpert } from "@/data/experts";
import { formatFrenchDate } from "@/lib/seo";
import type { EditorialMeta, SourceReference } from "@/types/content";

interface EditorialMetaBlockProps {
  editorial: EditorialMeta;
  sources?: readonly SourceReference[];
  legalReferences?: readonly SourceReference[];
}

function SourceList({ title, items }: { title: string; items: readonly SourceReference[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-5">
      <h3 className="text-base font-bold text-navy">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-sm">
        {items.map((source) => (
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
    </div>
  );
}

/**
 * Signature éditoriale et sources.
 *
 * Bloc obligatoire sur toute page de contenu : auteur, relecteur, dates réelles
 * et sources officielles vérifiables (E-E-A-T).
 */
export function EditorialMetaBlock({
  editorial,
  sources = [],
  legalReferences = [],
}: EditorialMetaBlockProps) {
  const author = getExpert(editorial.authorId);
  const reviewer = editorial.reviewerId ? getExpert(editorial.reviewerId) : undefined;

  return (
    <section
      aria-labelledby="sources-et-validation"
      className="mt-12 rounded-card border border-line bg-surface p-5 sm:p-6"
    >
      <h2 id="sources-et-validation" className="text-xl">
        Sources et validation
      </h2>

      <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-navy">Rédaction</dt>
          <dd>
            <Link href={author.profilePath} className="text-action-700 underline underline-offset-4">
              <PlaceholderValue value={author.name} fallback="Auteur à renseigner" />
            </Link>
            <span className="block text-ink-600">{author.role}</span>
          </dd>
        </div>
        {reviewer ? (
          <div>
            <dt className="font-semibold text-navy">Relecture</dt>
            <dd>
              <Link
                href={reviewer.profilePath}
                className="text-action-700 underline underline-offset-4"
              >
                <PlaceholderValue value={reviewer.name} fallback="Relecteur à renseigner" />
              </Link>
              <span className="block text-ink-600">{reviewer.role}</span>
            </dd>
          </div>
        ) : null}
        <div>
          <dt className="font-semibold text-navy">Publication</dt>
          <dd>
            <time dateTime={editorial.publishedAt}>{formatFrenchDate(editorial.publishedAt)}</time>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Dernière mise à jour</dt>
          <dd>
            <time dateTime={editorial.modifiedAt}>{formatFrenchDate(editorial.modifiedAt)}</time>
          </dd>
        </div>
        {editorial.nextReviewAt ? (
          <div>
            <dt className="font-semibold text-navy">Prochaine révision prévue</dt>
            <dd>
              <time dateTime={editorial.nextReviewAt}>
                {formatFrenchDate(editorial.nextReviewAt)}
              </time>
            </dd>
          </div>
        ) : null}
      </dl>

      <SourceList title="Références juridiques" items={legalReferences} />
      <SourceList title="Sources officielles" items={sources} />
    </section>
  );
}
