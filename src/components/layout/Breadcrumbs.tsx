import Link from "next/link";

import type { BreadcrumbSegment } from "@/types/seo";

/**
 * Fil d'Ariane.
 *
 * Le dernier segment n'est pas un lien et porte `aria-current="page"`.
 * Le balisage JSON-LD correspondant est généré par la page, à partir des mêmes
 * segments : l'affichage et les données structurées ne peuvent pas diverger.
 */
export function Breadcrumbs({ segments }: { segments: BreadcrumbSegment[] }) {
  if (segments.length <= 1) return null;

  return (
    <nav aria-label="Fil d’Ariane" className="py-3 text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-600">
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          return (
            <li key={`${segment.name}-${index}`} className="flex items-center gap-2">
              {segment.path && !isLast ? (
                <Link href={segment.path} className="underline underline-offset-2 hover:text-navy">
                  {segment.name}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-ink">
                  {segment.name}
                </span>
              )}
              {isLast ? null : (
                <span aria-hidden="true" className="text-line">
                  ›
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
