import { tradeCategories, tradeCategoryPath } from "@/data/trade-categories";

export interface NavLink {
  label: string;
  path: string;
  description?: string;
}

export interface NavSection {
  label: string;
  /** Page hub du menu : le libellé du menu est toujours cliquable. */
  path: string;
  columns: { title: string; links: NavLink[] }[];
}

export const primaryNavigation: readonly NavSection[] = [
  {
    label: "Assurance décennale",
    path: "/assurance-decennale/",
    columns: [
      {
        title: "Comprendre et comparer",
        links: [
          {
            label: "Assurance décennale : l’essentiel",
            path: "/assurance-decennale/",
            description: "Obligation, garanties, durée, sanctions.",
          },
          {
            label: "Comparer des devis",
            path: "/comparateur-assurance-decennale/",
            description: "Comment fonctionne notre mise en relation.",
          },
          {
            label: "Assurance décennale en ligne",
            path: "/assurance-decennale-en-ligne/",
            description: "Constituer un dossier complet à distance.",
          },
        ],
      },
      {
        title: "Par profil",
        links: [
          { label: "Artisan du bâtiment", path: "/assurance-decennale-artisan/" },
          { label: "Entreprise du BTP", path: "/assurance-decennale-entreprise-btp/" },
          { label: "Attestation rapide", path: "/attestation-decennale-rapide/" },
        ],
      },
    ],
  },
  {
    label: "Métiers",
    path: "/metiers/",
    columns: [
      {
        title: "Familles de métiers",
        links: tradeCategories.map((category) => ({
          label: category.shortName,
          path: tradeCategoryPath(category.slug),
          description: category.name,
        })),
      },
      {
        title: "Métiers les plus demandés",
        links: [
          { label: "Maçon", path: "/assurance-decennale-macon/" },
          { label: "Couvreur", path: "/assurance-decennale-couvreur/" },
          { label: "Plombier", path: "/assurance-decennale-plombier/" },
          { label: "Électricien", path: "/assurance-decennale-electricien/" },
          { label: "Menuisier", path: "/assurance-decennale-menuisier/" },
          { label: "Tous les métiers", path: "/metiers/" },
        ],
      },
    ],
  },
  {
    label: "Situations",
    path: "/situations/",
    columns: [
      {
        title: "Démarrage d’activité",
        links: [
          { label: "Entreprise en création", path: "/decennale-creation-entreprise/" },
          { label: "Auto-entrepreneur", path: "/decennale-auto-entrepreneur/" },
          { label: "Sans expérience", path: "/decennale-sans-experience/" },
        ],
      },
      {
        title: "Situations difficiles",
        links: [
          { label: "Jamais assuré", path: "/decennale-sans-antecedent-assurance/" },
          { label: "Après une résiliation", path: "/decennale-apres-resiliation/" },
          { label: "Résiliation pour non-paiement", path: "/decennale-non-paiement/" },
          { label: "Après un sinistre", path: "/decennale-apres-sinistre/" },
          { label: "Toutes les situations", path: "/situations/" },
        ],
      },
    ],
  },
  {
    label: "Prix",
    path: "/prix-assurance-decennale/",
    columns: [
      {
        title: "Budget et cotisation",
        links: [
          {
            label: "Prix d’une assurance décennale",
            path: "/prix-assurance-decennale/",
            description: "Critères de tarification et repères par profil.",
          },
          {
            label: "Assurance décennale pas chère",
            path: "/assurance-decennale-pas-chere/",
            description: "Réduire sa cotisation sans perdre de garanties.",
          },
          {
            label: "Franchise décennale",
            path: "/guides/franchise-assurance-decennale/",
          },
        ],
      },
    ],
  },
  {
    label: "Guides",
    path: "/guides/",
    columns: [
      {
        title: "Les guides les plus consultés",
        links: [
          { label: "L’assurance décennale est-elle obligatoire ?", path: "/guides/assurance-decennale-obligatoire/" },
          { label: "Que couvre la garantie décennale ?", path: "/guides/que-couvre-assurance-decennale/" },
          { label: "Attestation d’assurance décennale", path: "/guides/attestation-assurance-decennale/" },
          { label: "Documents à fournir", path: "/guides/documents-devis-assurance-decennale/" },
        ],
      },
      {
        title: "Aller plus loin",
        links: [
          { label: "RC Pro et décennale", path: "/guides/rc-pro-vs-decennale/" },
          { label: "Nomenclature des activités BTP", path: "/guides/nomenclature-activites-btp/" },
          { label: "Exclusions de garantie", path: "/guides/exclusions-assurance-decennale/" },
          { label: "Outils et checklists", path: "/outils/" },
        ],
      },
    ],
  },
];

export const footerNavigation: readonly { title: string; links: NavLink[] }[] = [
  {
    title: "Assurance décennale",
    links: [
      { label: "Assurance décennale", path: "/assurance-decennale/" },
      { label: "Comparer des devis", path: "/comparateur-assurance-decennale/" },
      { label: "Demander des devis", path: "/devis-assurance-decennale/" },
      { label: "Prix et tarifs", path: "/prix-assurance-decennale/" },
      { label: "Décennale pas chère", path: "/assurance-decennale-pas-chere/" },
      { label: "Souscription en ligne", path: "/assurance-decennale-en-ligne/" },
      { label: "Attestation rapide", path: "/attestation-decennale-rapide/" },
    ],
  },
  {
    title: "Métiers",
    links: [
      { label: "Tous les métiers", path: "/metiers/" },
      { label: "Maçon", path: "/assurance-decennale-macon/" },
      { label: "Couvreur", path: "/assurance-decennale-couvreur/" },
      { label: "Plombier", path: "/assurance-decennale-plombier/" },
      { label: "Électricien", path: "/assurance-decennale-electricien/" },
      { label: "Charpentier", path: "/assurance-decennale-charpentier/" },
      { label: "Artisan du bâtiment", path: "/assurance-decennale-artisan/" },
      { label: "Entreprise du BTP", path: "/assurance-decennale-entreprise-btp/" },
    ],
  },
  {
    title: "Situations",
    links: [
      { label: "Toutes les situations", path: "/situations/" },
      { label: "Création d’entreprise", path: "/decennale-creation-entreprise/" },
      { label: "Auto-entrepreneur", path: "/decennale-auto-entrepreneur/" },
      { label: "Jamais assuré", path: "/decennale-sans-antecedent-assurance/" },
      { label: "Après résiliation", path: "/decennale-apres-resiliation/" },
      { label: "Non-paiement", path: "/decennale-non-paiement/" },
      { label: "Sous-traitance", path: "/decennale-sous-traitant/" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Tous les guides", path: "/guides/" },
      { label: "Décennale obligatoire", path: "/guides/assurance-decennale-obligatoire/" },
      { label: "Que couvre la décennale", path: "/guides/que-couvre-assurance-decennale/" },
      { label: "Attestation décennale", path: "/guides/attestation-assurance-decennale/" },
      { label: "Nomenclature BTP", path: "/guides/nomenclature-activites-btp/" },
      { label: "Résilier son contrat", path: "/guides/comment-resilier-assurance-decennale/" },
      { label: "Outils", path: "/outils/" },
    ],
  },
  {
    title: "Société",
    links: [
      { label: "À propos", path: "/a-propos/" },
      { label: "Notre méthode", path: "/notre-methode/" },
      { label: "Nos partenaires", path: "/partenaires/" },
      { label: "Comité de relecture", path: "/experts/" },
      { label: "Contact", path: "/contact/" },
      { label: "Plan du site", path: "/plan-du-site/" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", path: "/mentions-legales/" },
      { label: "Politique de confidentialité", path: "/politique-confidentialite/" },
      { label: "Politique cookies", path: "/politique-cookies/" },
      { label: "Conditions d’utilisation", path: "/conditions-utilisation/" },
      { label: "Réclamation", path: "/reclamation/" },
      { label: "Médiation", path: "/mediation/" },
    ],
  },
];
