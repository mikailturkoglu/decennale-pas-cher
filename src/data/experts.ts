import { PLACEHOLDER } from "@/lib/placeholders";
import type { ExpertReference } from "@/types/content";

/**
 * Auteurs et relecteurs.
 *
 * Aucune identité, qualification ou immatriculation ne doit être inventée :
 * les champs restent des placeholders jusqu'à la validation du porteur de
 * projet. Le script prebuild-check bloque la mise en production tant que ces
 * placeholders sont présents.
 */
export const experts: readonly ExpertReference[] = [
  {
    id: "expert-1",
    name: PLACEHOLDER.toFill,
    role: "Rédaction — spécialiste assurance construction",
    profilePath: "/experts/redaction/",
    experience: PLACEHOLDER.toFill,
    qualifications: [PLACEHOLDER.toFill],
    bio:
      "Auteur des contenus techniques et éditoriaux du site. Identité, parcours et qualifications à renseigner avant publication.",
    photoUrl: "",
  },
  {
    id: "expert-2",
    name: PLACEHOLDER.toFill,
    role: "Relecture — courtier spécialisé en assurance construction",
    profilePath: "/experts/relecture/",
    oriasNumber: PLACEHOLDER.toFill,
    experience: PLACEHOLDER.toFill,
    qualifications: [PLACEHOLDER.toFill],
    bio:
      "Relecteur des contenus assurantiels, tarifaires et réglementaires. Identité et numéro ORIAS à renseigner avant publication.",
    photoUrl: "",
  },
];

const expertById = new Map(experts.map((expert) => [expert.id, expert]));

export function getExpert(id: string): ExpertReference {
  const expert = expertById.get(id);
  if (!expert) {
    throw new Error(`Expert inconnu : ${id}`);
  }
  return expert;
}

export const DEFAULT_AUTHOR_ID = "expert-1";
export const DEFAULT_REVIEWER_ID = "expert-2";
