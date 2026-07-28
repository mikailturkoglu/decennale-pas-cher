import { defineInfoPage } from "@/content/_factories";
import { experts } from "@/data/experts";
import { isPlaceholder } from "@/lib/placeholders";
import type { ExpertReference, InfoPage } from "@/types/content";

/**
 * Profils d'auteur et de relecteur.
 *
 * Générés depuis le registre des experts afin que la fiche, la signature des
 * pages et le sitemap ne puissent pas diverger. Aucune biographie n'est
 * inventée : tant que l'identité n'est pas renseignée, la page l'indique
 * explicitement et reste exclue de l'index.
 */
export function expertProfileSlug(expert: ExpertReference): string {
  const segments = expert.profilePath.split("/").filter(Boolean);
  const slug = segments[1];
  if (!slug) {
    throw new Error(`Chemin de profil invalide pour ${expert.id} : ${expert.profilePath}`);
  }
  return slug;
}

function profilePage(expert: ExpertReference): InfoPage {
  const identified = !isPlaceholder(expert.name);
  const displayName = identified ? expert.name : expert.role;

  return defineInfoPage({
    path: expert.profilePath,
    name: displayName,
    status: "published",
    seo: {
      title: `${displayName} | DécennaleBTP.fr`,
      description: `Parcours, qualifications et périmètre d’intervention de ${displayName.toLowerCase()} sur les contenus d’assurance décennale publiés par DécennaleBTP.fr.`,
      primaryKeyword: `${displayName} assurance décennale`,
      secondaryKeywords: ["auteur assurance construction", "relecture expert décennale"],
      // Une fiche sans identité renseignée n'a pas de valeur pour l'index.
      noindex: !identified,
    },
    h1: displayName,
    intro: expert.bio ?? `Intervenant sur les contenus du site : ${expert.role}.`,
    sections: [
      {
        id: "role",
        title: "Rôle sur le site",
        bullets: [
          expert.role,
          "vérification des sources citées et des textes applicables",
          "mise à jour des pages en cas d’évolution réglementaire",
        ],
      },
      {
        id: "parcours",
        title: "Parcours et qualifications",
        bullets: [
          `expérience : ${expert.experience ?? "à renseigner"}`,
          ...(expert.qualifications ?? []).map((qualification) => `qualification : ${qualification}`),
          ...(expert.oriasNumber ? [`immatriculation ORIAS : ${expert.oriasNumber}`] : []),
        ],
      },
    ],
    breadcrumbParents: [{ name: "Comité de relecture", path: "/experts/" }],
    relatedPaths: ["/experts/", "/notre-methode/", "/a-propos/", "/guides/"],
    sources: ["orias", "acpr"],
  });
}

export const expertProfilePages: readonly InfoPage[] = experts.map(profilePage);

export function findExpertProfile(slug: string): { page: InfoPage; expert: ExpertReference } | undefined {
  const index = experts.findIndex((expert) => expertProfileSlug(expert) === slug);
  if (index === -1) return undefined;
  const expert = experts[index];
  const page = expertProfilePages[index];
  if (!expert || !page) return undefined;
  return { page, expert };
}

export const expertProfileSlugs: readonly string[] = experts.map(expertProfileSlug);
