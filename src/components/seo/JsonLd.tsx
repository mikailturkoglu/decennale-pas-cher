interface JsonLdProps {
  /** Graphe JSON-LD déjà sérialisé par `jsonLdGraph`. */
  data: string;
}

/**
 * Injecte le JSON-LD dans le HTML rendu côté serveur.
 * Aucune donnée utilisateur n'y transite : le contenu provient uniquement des
 * collections de contenu et de la configuration du site.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
