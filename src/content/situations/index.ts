import type { SituationPage } from "@/types/content";

import { apresResiliation } from "@/content/situations/apres-resiliation";
import { apresSinistre } from "@/content/situations/apres-sinistre";
import { autoEntrepreneur } from "@/content/situations/auto-entrepreneur";
import { chantierDejaCommence } from "@/content/situations/chantier-deja-commence";
import { creationEntreprise } from "@/content/situations/creation-entreprise";
import { entrepriseEtrangereFrance } from "@/content/situations/entreprise-etrangere-france";
import { nonPaiement } from "@/content/situations/non-paiement";
import { reprisePasse } from "@/content/situations/reprise-passe";
import { sansAntecedentAssurance } from "@/content/situations/sans-antecedent-assurance";
import { sansExperience } from "@/content/situations/sans-experience";
import { sousTraitant } from "@/content/situations/sous-traitant";

export const situationPages: readonly SituationPage[] = [
  creationEntreprise,
  autoEntrepreneur,
  sansAntecedentAssurance,
  apresResiliation,
  nonPaiement,
  sansExperience,
  apresSinistre,
  reprisePasse,
  chantierDejaCommence,
  entrepriseEtrangereFrance,
  sousTraitant,
];
