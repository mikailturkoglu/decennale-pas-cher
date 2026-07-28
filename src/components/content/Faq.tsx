import type { FaqItem } from "@/types/content";

/**
 * FAQ visible.
 *
 * Implémentée avec `<details>` : le contenu des réponses est présent dans le
 * HTML rendu côté serveur, l'ouverture fonctionne sans JavaScript et la
 * sémantique d'accordéon est portée nativement par le navigateur. C'est aussi
 * la condition pour publier le balisage FAQPage.
 */
export function Faq({ items, title = "Questions fréquentes" }: { items: readonly FaqItem[]; title?: string }) {
  if (items.length === 0) return null;

  return (
    <section id="faq" className="mt-12">
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      <div className="mt-5 divide-y divide-line rounded-card border border-line">
        {items.map((item) => (
          <details key={item.question} className="group px-4 py-1">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-3 font-semibold text-navy">
              <span>{item.question}</span>
              <span aria-hidden="true" className="text-ink-600 group-open:hidden">
                +
              </span>
              <span aria-hidden="true" className="hidden text-ink-600 group-open:inline">
                −
              </span>
            </summary>
            <p className="pb-4 text-ink">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
