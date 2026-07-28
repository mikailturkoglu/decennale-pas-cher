import type { SourceReference } from "@/types/content";

/**
 * Sources officielles réutilisables.
 *
 * Centralisées ici pour éviter la duplication et garantir que chaque page
 * affiche des liens vérifiables et à jour.
 */
export const SOURCES = {
  servicePublicDecennale: {
    label: "Garantie décennale des constructeurs",
    publisher: "Service Public — Entreprendre",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F2034",
  },
  codeAssurances: {
    label: "Code des assurances",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006073984/",
  },
  codeAssurancesL241_1: {
    label: "Article L241-1 du Code des assurances — obligation d’assurance de responsabilité décennale",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006797340",
  },
  codeAssurancesL242_1: {
    label: "Article L242-1 du Code des assurances — assurance dommages-ouvrage",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006797372",
  },
  codeAssurancesA243_1: {
    label: "Annexe I à l’article A243-1 du Code des assurances — clauses types",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006810264",
  },
  codeAssurancesL113_3: {
    label: "Article L113-3 du Code des assurances — non-paiement de la prime",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006795552",
  },
  codeAssurancesL113_12: {
    label: "Article L113-12 du Code des assurances — résiliation annuelle",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006795561",
  },
  codeCivil1792: {
    label: "Article 1792 du Code civil — responsabilité des constructeurs",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006442775",
  },
  codeCivil1792_2: {
    label: "Article 1792-2 du Code civil — éléments d’équipement indissociables",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006442782",
  },
  codeCivil1792_3: {
    label: "Article 1792-3 du Code civil — garantie de bon fonctionnement",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006442784",
  },
  codeCivil1792_4_1: {
    label: "Article 1792-4-1 du Code civil — délai de dix ans",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006442790",
  },
  loiSpinetta: {
    label: "Loi n° 78-12 du 4 janvier 1978 (loi Spinetta)",
    publisher: "Légifrance",
    url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000522887/",
  },
  nomenclatureBtp: {
    label: "Nomenclature des activités du BTP pour les attestations d’assurance des constructeurs",
    publisher: "France Assureurs",
    url: "https://www.franceassureurs.fr/wp-content/uploads/nomenclature-btp-assureurs-v_25.pdf",
  },
  orias: {
    label: "Registre unique des intermédiaires en assurance",
    publisher: "ORIAS",
    url: "https://www.orias.fr/",
  },
  acpr: {
    label: "Intermédiaires d’assurance",
    publisher: "ACPR — Banque de France",
    url: "https://acpr.banque-france.fr/fr/professionnels/lacpr-vous-accompagne/intermediaires/intermediaires-dassurance",
  },
  bct: {
    label: "Bureau central de tarification",
    publisher: "Ministère de l’Économie",
    url: "https://www.economie.gouv.fr/cnis/bureau-central-tarification",
  },
  cnilDurees: {
    label: "Les durées de conservation des données",
    publisher: "CNIL",
    url: "https://www.cnil.fr/fr/les-durees-de-conservation-des-donnees",
  },
  cnilCookies: {
    label: "Cookies : comment mettre mon site web en conformité",
    publisher: "CNIL",
    url: "https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite",
  },
  servicePublicAttestation: {
    label: "Assurances obligatoires du secteur du bâtiment",
    publisher: "Service Public — Entreprendre",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F22398",
  },
  insee: {
    label: "Codes APE et nomenclature d’activités françaises (NAF)",
    publisher: "Insee",
    url: "https://www.insee.fr/fr/information/2120875",
  },
} as const satisfies Record<string, SourceReference>;

export type SourceKey = keyof typeof SOURCES;

export function sourcesFrom(...keys: SourceKey[]): SourceReference[] {
  return keys.map((key) => SOURCES[key]);
}

/** Socle de sources commun aux pages métier. */
export const TRADE_BASE_SOURCES: SourceKey[] = [
  "servicePublicDecennale",
  "codeCivil1792",
  "codeAssurancesL241_1",
  "nomenclatureBtp",
];
