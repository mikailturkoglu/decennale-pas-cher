interface TocEntry {
  id: string;
  title: string;
}

/**
 * Sommaire d'une page longue.
 *
 * Rendu côté serveur à partir des sections du contenu : les ancres existent
 * dans le HTML, sans dépendance au JavaScript.
 */
export function TableOfContents({ entries }: { entries: readonly TocEntry[] }) {
  if (entries.length < 3) return null;

  return (
    <nav aria-labelledby="sommaire" className="mt-8 rounded-card border border-line bg-surface p-5">
      <h2 id="sommaire" className="text-base font-bold uppercase tracking-wide text-navy">
        Sommaire
      </h2>
      <ol className="mt-3 space-y-1.5 text-sm">
        {entries.map((entry, index) => (
          <li key={entry.id} className="flex gap-2">
            <span aria-hidden="true" className="text-ink-600">
              {index + 1}.
            </span>
            <a href={`#${entry.id}`} className="text-action-700 underline underline-offset-4">
              {entry.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
