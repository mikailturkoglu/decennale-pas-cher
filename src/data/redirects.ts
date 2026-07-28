export interface PermanentRedirect {
  source: string;
  destination: string;
}

/**
 * Redirections 301.
 *
 * Une seule URL doit exister par contenu. Toute variante historique, sans
 * accent, abrégée ou synonyme doit être redirigée vers l'URL canonique.
 * `trailingSlash: true` étant actif, les sources sont écrites avec slash final.
 */
export const permanentRedirects: readonly PermanentRedirect[] = [
  // Variantes de nommage des pages métier
  { source: "/decennale-macon/", destination: "/assurance-decennale-macon/" },
  { source: "/assurance-decennale-maconnerie/", destination: "/assurance-decennale-macon/" },
  { source: "/garantie-decennale-macon/", destination: "/assurance-decennale-macon/" },
  { source: "/decennale-couvreur/", destination: "/assurance-decennale-couvreur/" },
  { source: "/assurance-decennale-couverture/", destination: "/assurance-decennale-couvreur/" },
  { source: "/decennale-plombier/", destination: "/assurance-decennale-plombier/" },
  { source: "/assurance-decennale-plomberie/", destination: "/assurance-decennale-plombier/" },
  { source: "/decennale-electricien/", destination: "/assurance-decennale-electricien/" },
  { source: "/assurance-decennale-electricite/", destination: "/assurance-decennale-electricien/" },
  { source: "/decennale-menuisier/", destination: "/assurance-decennale-menuisier/" },
  { source: "/decennale-terrassier/", destination: "/assurance-decennale-terrassier/" },
  { source: "/assurance-decennale-terrassement/", destination: "/assurance-decennale-terrassier/" },
  { source: "/decennale-etancheur/", destination: "/assurance-decennale-etancheur/" },
  { source: "/assurance-decennale-etancheite/", destination: "/assurance-decennale-etancheur/" },
  { source: "/decennale-peintre/", destination: "/assurance-decennale-peintre/" },
  { source: "/assurance-decennale-peinture/", destination: "/assurance-decennale-peintre/" },
  { source: "/decennale-carreleur/", destination: "/assurance-decennale-carreleur/" },
  { source: "/assurance-decennale-carrelage/", destination: "/assurance-decennale-carreleur/" },
  { source: "/decennale-plaquiste/", destination: "/assurance-decennale-plaquiste/" },
  { source: "/assurance-decennale-platrerie/", destination: "/assurance-decennale-plaquiste/" },
  { source: "/decennale-charpentier/", destination: "/assurance-decennale-charpentier/" },
  { source: "/assurance-decennale-charpente/", destination: "/assurance-decennale-charpentier/" },
  { source: "/decennale-facadier/", destination: "/assurance-decennale-facadier/" },
  { source: "/assurance-decennale-facade/", destination: "/assurance-decennale-facadier/" },
  { source: "/decennale-chauffagiste/", destination: "/assurance-decennale-chauffagiste/" },
  { source: "/assurance-decennale-chauffage/", destination: "/assurance-decennale-chauffagiste/" },

  // Variantes des pages commerciales
  { source: "/tarif-assurance-decennale/", destination: "/prix-assurance-decennale/" },
  { source: "/cout-assurance-decennale/", destination: "/prix-assurance-decennale/" },
  { source: "/assurance-decennale-rapide/", destination: "/attestation-decennale-rapide/" },
  { source: "/assurance-decennale-immediate/", destination: "/attestation-decennale-rapide/" },
  { source: "/decennale-24h/", destination: "/attestation-decennale-rapide/" },
  { source: "/comparatif-assurance-decennale/", destination: "/comparateur-assurance-decennale/" },
  { source: "/devis-decennale/", destination: "/devis-assurance-decennale/" },
  { source: "/decennale-pas-chere/", destination: "/assurance-decennale-pas-chere/" },
  { source: "/assurance-decennale-pas-cher/", destination: "/assurance-decennale-pas-chere/" },
  { source: "/garantie-decennale/", destination: "/assurance-decennale/" },
  { source: "/rc-decennale/", destination: "/assurance-decennale/" },
  { source: "/rcd/", destination: "/assurance-decennale/" },

  // Variantes des pages situation
  { source: "/decennale-micro-entrepreneur/", destination: "/decennale-auto-entrepreneur/" },
  { source: "/assurance-decennale-auto-entrepreneur/", destination: "/decennale-auto-entrepreneur/" },
  { source: "/assurance-decennale-resilie/", destination: "/decennale-apres-resiliation/" },
  { source: "/decennale-resilie/", destination: "/decennale-apres-resiliation/" },
  { source: "/decennale-resilie-non-paiement/", destination: "/decennale-non-paiement/" },
  { source: "/assurance-decennale-creation-entreprise/", destination: "/decennale-creation-entreprise/" },
  { source: "/decennale-sans-antecedent/", destination: "/decennale-sans-antecedent-assurance/" },
];
