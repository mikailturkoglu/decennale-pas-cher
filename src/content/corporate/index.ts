import type { InfoPage } from "@/types/content";

import { aPropos } from "@/content/corporate/a-propos";
import { checklistDossierDecennale } from "@/content/corporate/checklist-dossier-decennale";
import { conditionsUtilisation } from "@/content/corporate/conditions-utilisation";
import { contact } from "@/content/corporate/contact";
import { expertProfilePages } from "@/content/corporate/expert-profiles";
import { expertsHub } from "@/content/corporate/experts";
import { mediation } from "@/content/corporate/mediation";
import { mentionsLegales } from "@/content/corporate/mentions-legales";
import { notreMethode } from "@/content/corporate/notre-methode";
import { outils } from "@/content/corporate/outils";
import { partenaires } from "@/content/corporate/partenaires";
import { planDuSite } from "@/content/corporate/plan-du-site";
import { politiqueConfidentialite } from "@/content/corporate/politique-confidentialite";
import { politiqueCookies } from "@/content/corporate/politique-cookies";
import { reclamation } from "@/content/corporate/reclamation";

/**
 * Pages institutionnelles, légales et outils.
 *
 * Chacune possède une route statique dédiée : cette collection sert au
 * sitemap, au maillage interne et au contrôle d'unicité des métadonnées.
 */
export const infoPages: readonly InfoPage[] = [
  aPropos,
  notreMethode,
  partenaires,
  expertsHub,
  ...expertProfilePages,
  contact,
  outils,
  checklistDossierDecennale,
  mentionsLegales,
  politiqueConfidentialite,
  politiqueCookies,
  conditionsUtilisation,
  reclamation,
  mediation,
  planDuSite,
];

export {
  aPropos,
  checklistDossierDecennale,
  conditionsUtilisation,
  contact,
  expertsHub,
  mediation,
  mentionsLegales,
  notreMethode,
  outils,
  partenaires,
  planDuSite,
  politiqueConfidentialite,
  politiqueCookies,
  reclamation,
};
