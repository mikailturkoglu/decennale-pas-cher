import type { GuideCategorySlug, GuidePage } from "@/types/content";

import { assuranceDecennaleObligatoire } from "@/content/guides/assurance-decennale-obligatoire";
import { attestationAssuranceDecennale } from "@/content/guides/attestation-assurance-decennale";
import { bureauCentralTarificationDecennale } from "@/content/guides/bureau-central-tarification-decennale";
import { commentChoisirAssuranceDecennale } from "@/content/guides/comment-choisir-assurance-decennale";
import { commentResilierAssuranceDecennale } from "@/content/guides/comment-resilier-assurance-decennale";
import { dateEffetAssuranceDecennale } from "@/content/guides/date-effet-assurance-decennale";
import { documentsDevisAssuranceDecennale } from "@/content/guides/documents-devis-assurance-decennale";
import { exclusionsAssuranceDecennale } from "@/content/guides/exclusions-assurance-decennale";
import { franchiseAssuranceDecennale } from "@/content/guides/franchise-assurance-decennale";
import { nomenclatureActivitesBtp } from "@/content/guides/nomenclature-activites-btp";
import { queCouvreAssuranceDecennale } from "@/content/guides/que-couvre-assurance-decennale";
import { rcProVsDecennale } from "@/content/guides/rc-pro-vs-decennale";
import { verifierAttestationDecennale } from "@/content/guides/verifier-attestation-decennale";

/**
 * Collection des guides publiés.
 *
 * L'ordre de ce tableau est l'ordre éditorial de référence : il est repris par
 * le hub /guides/ à l'intérieur de chaque catégorie.
 */
export const guidePages: readonly GuidePage[] = [
  assuranceDecennaleObligatoire,
  queCouvreAssuranceDecennale,
  exclusionsAssuranceDecennale,
  attestationAssuranceDecennale,
  verifierAttestationDecennale,
  documentsDevisAssuranceDecennale,
  dateEffetAssuranceDecennale,
  rcProVsDecennale,
  nomenclatureActivitesBtp,
  commentChoisirAssuranceDecennale,
  franchiseAssuranceDecennale,
  commentResilierAssuranceDecennale,
  bureauCentralTarificationDecennale,
];

export interface GuideCategory {
  slug: GuideCategorySlug;
  name: string;
  description: string;
}

/** Catégories éditoriales du silo guides, dans l'ordre d'affichage du hub. */
export const guideCategories: readonly GuideCategory[] = [
  {
    slug: "comprendre",
    name: "Comprendre la décennale",
    description: "Le cadre légal, l’étendue de la garantie et ses limites.",
  },
  {
    slug: "souscrire",
    name: "Souscrire",
    description: "Constituer un dossier, choisir sa date d’effet, obtenir son attestation.",
  },
  {
    slug: "prix-et-contrats",
    name: "Prix et contrats",
    description: "Comprendre la cotisation, la franchise et les critères de comparaison.",
  },
  {
    slug: "resiliation-et-refus",
    name: "Résiliation et refus",
    description: "Changer d’assureur, réagir à une résiliation ou à un refus de garantie.",
  },
  {
    slug: "metiers-et-nomenclature",
    name: "Métiers et nomenclature",
    description: "Traduire vos travaux réels en activités déclarées auprès de l’assureur.",
  },
  {
    slug: "sinistres-et-couverture",
    name: "Sinistres et couverture",
    description: "Ce qui est pris en charge, ce qui est exclu, et comment le vérifier.",
  },
];

export function guidesByCategory(category: GuideCategorySlug): GuidePage[] {
  return guidePages.filter((guide) => guide.category === category);
}
