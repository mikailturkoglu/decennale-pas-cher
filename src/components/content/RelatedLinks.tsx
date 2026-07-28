import { CardLink } from "@/components/ui/Card";
import { resolveInternalLinks } from "@/lib/content";

interface RelatedLinksProps {
  paths: readonly string[];
  title?: string;
  intro?: string;
  /** `list` pour un maillage discret en fin de page, `cards` pour une mise en avant. */
  layout?: "cards" | "list";
}

/**
 * Maillage interne.
 *
 * Les libellés sont résolus depuis le registre de contenu : un chemin qui ne
 * correspond à aucune page publiée n'est pas rendu, ce qui empêche tout lien
 * mort d'atteindre la production.
 */
export function RelatedLinks({
  paths,
  title = "À lire aussi",
  intro,
  layout = "cards",
}: RelatedLinksProps) {
  const links = resolveInternalLinks(paths);
  if (links.length === 0) return null;

  return (
    <section aria-labelledby="a-lire-aussi" className="mt-12">
      <h2 id="a-lire-aussi" className="text-2xl">
        {title}
      </h2>
      {intro ? <p className="mt-2 text-ink-600">{intro}</p> : null}

      {layout === "cards" ? (
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.path}>
              <CardLink href={link.path} title={link.label} description={link.description} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                className="text-action-700 underline underline-offset-4 hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
