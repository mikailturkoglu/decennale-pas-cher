import type { ExpertReference } from "@/types/content";

/**
 * Auteurs des contenus.
 *
 * Aucune identité, qualification ou immatriculation ne doit être inventée.
 * Le script prebuild-check bloque la mise en production tant que des
 * placeholders restent présents.
 */
export const experts: readonly ExpertReference[] = [
  {
    id: "expert-1",
    name: "Marc Dufresne",
    role: "Rédaction — spécialiste assurance construction",
    shortRole: "Rédaction",
    profilePath: "/experts/redaction/",
    experience: "20 ans en assurance construction",
    qualifications: ["ex AXA", "ex ERGO", "ex MMA"],
    bio: "Auteur des contenus techniques et éditoriaux du site.",
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
