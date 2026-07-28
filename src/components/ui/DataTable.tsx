import type { ReactNode } from "react";

interface DataTableProps {
  caption: string;
  headers: string[];
  rows: ReactNode[][];
  /** Mention affichée sous le tableau (source, réserve, méthodologie). */
  notice?: string;
}

/**
 * Tableau responsive.
 *
 * Le conteneur défilant est focalisable et porte un rôle de groupe nommé, afin
 * que le défilement horizontal reste accessible au clavier (WCAG 2.1.1).
 */
export function DataTable({ caption, headers, rows, notice }: DataTableProps) {
  return (
    <figure className="my-6">
      <div className="table-scroll rounded-card border border-line" tabIndex={0} role="group" aria-label={caption}>
        <table className="w-full min-w-[36rem] text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-surface">
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col" className="border-b border-line px-3 py-2.5 font-semibold text-navy">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="align-top even:bg-surface/60">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border-b border-line px-3 py-2.5">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {notice ? (
        <figcaption className="mt-2 text-sm text-ink-600">{notice}</figcaption>
      ) : null}
    </figure>
  );
}
