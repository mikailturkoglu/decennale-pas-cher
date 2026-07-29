/**
 * Registre des cookies et traceurs.
 *
 * Source de vérité unique : la bannière de consentement et la politique cookies
 * s'appuient sur ce fichier. Ajouter un traceur consiste à l'ajouter ici.
 */
export type ConsentCategory = "essential" | "measurement" | "marketing";

export interface CookieCategory {
  id: ConsentCategory;
  name: string;
  description: string;
  /** Une catégorie requise ne peut pas être refusée : elle exclut tout traceur soumis à consentement. */
  required: boolean;
}

export const cookieCategories: readonly CookieCategory[] = [
  {
    id: "essential",
    name: "Fonctionnement du site",
    description:
      "Nécessaires à la navigation, à la sécurité des formulaires et à la conservation de votre choix en matière de cookies. Ils ne permettent aucun suivi publicitaire.",
    required: true,
  },
  {
    id: "measurement",
    name: "Mesure d’audience",
    description:
      "Statistiques de fréquentation via Google Analytics, utilisées pour améliorer les contenus et les parcours.",
    required: false,
  },
  {
    id: "marketing",
    name: "Publicité et personnalisation",
    description:
      "Mesure des campagnes publicitaires et personnalisation des annonces. Déposés uniquement après votre accord.",
    required: false,
  },
];

export interface CookieEntry {
  name: string;
  category: ConsentCategory;
  purpose: string;
  retention: string;
  editor: string;
}

/** Nom du cookie technique de consentement, déposé par le site lui-même. */
export const CONSENT_COOKIE_NAME = "dbtp_consent";

/** Durée de conservation du choix de l'utilisateur, en jours. */
export const CONSENT_COOKIE_MAX_AGE_DAYS = 182;

export const cookieRegistry: readonly CookieEntry[] = [
  {
    name: CONSENT_COOKIE_NAME,
    category: "essential",
    purpose: "Conserver votre choix d’accepter ou de refuser les traceurs non essentiels.",
    retention: "6 mois",
    editor: "DécennaleBTP.fr",
  },
  {
    name: "dbtp_quote_draft (stockage de session)",
    category: "essential",
    purpose:
      "Conserver l’avancement de votre demande de devis dans l’onglet en cours, afin d’éviter la perte de saisie. Il s’agit d’un stockage de session du navigateur, non d’un cookie transmis au serveur.",
    retention: "Effacé à la fermeture de l’onglet",
    editor: "DécennaleBTP.fr",
  },
  {
    name: "dbtp_rate_limit",
    category: "essential",
    purpose: "Limiter les envois répétés de formulaire et protéger le service contre les abus.",
    retention: "1 heure",
    editor: "DécennaleBTP.fr",
  },
  {
    name: "_ga",
    category: "measurement",
    purpose: "Mesure d’audience Google Analytics 4 : distinguer les visiteurs.",
    retention: "1 mois",
    editor: "Azerty Consulting (Google Analytics 4)",
  },
  {
    name: "_ga_*",
    category: "measurement",
    purpose: "Mesure d’audience Google Analytics 4 : conserver l’état de la session.",
    retention: "1 mois",
    editor: "Azerty Consulting (Google Analytics 4)",
  },
];

export function cookiesByCategory(category: ConsentCategory): CookieEntry[] {
  return cookieRegistry.filter((cookie) => cookie.category === category);
}
