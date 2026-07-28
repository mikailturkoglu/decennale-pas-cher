import type { LandingPage } from "@/types/content";

import { artisan } from "@/content/landing/artisan";
import { assuranceDecennale } from "@/content/landing/assurance-decennale";
import { attestationRapide } from "@/content/landing/attestation-rapide";
import { comparateur } from "@/content/landing/comparateur";
import { devis } from "@/content/landing/devis";
import { enLigne } from "@/content/landing/en-ligne";
import { entrepriseBtp } from "@/content/landing/entreprise-btp";
import { pasChere } from "@/content/landing/pas-chere";
import { prix } from "@/content/landing/prix";

/**
 * Pages commerciales.
 *
 * `devis` possède sa propre route statique (formulaire) : elle est exposée ici
 * pour le sitemap, les métadonnées et le maillage interne, mais elle est
 * exclue de la route dynamique racine.
 */
export const landingPages: readonly LandingPage[] = [
  assuranceDecennale,
  comparateur,
  prix,
  pasChere,
  enLigne,
  attestationRapide,
  artisan,
  entrepriseBtp,
  devis,
];

/** Slugs servis par une route statique dédiée, hors route dynamique racine. */
export const landingSlugsWithOwnRoute: readonly string[] = [devis.slug];

export { devis as devisLanding, prix as prixLanding };
