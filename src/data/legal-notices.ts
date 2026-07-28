import { PLACEHOLDER } from "@/lib/placeholders";

/**
 * Mentions récurrentes.
 *
 * Centralisées pour garantir une formulation homogène et conforme au modèle
 * d'activité retenu (voir `businessModel` dans `src/data/site.ts`).
 */
export const NOTICES = {
  /** À afficher sous tout repère tarifaire. */
  price:
    "Estimation indicative, seul un devis engage l’assureur. Les montants dépendent de votre activité déclarée, de votre profil et des conditions du contrat.",
  /** À afficher sous tout tableau d’activités ou de travaux. */
  nomenclature:
    "Ce tableau est un repère pédagogique. La nomenclature d’activités et les conditions du contrat de l’assureur prévalent toujours sur cette présentation.",
  /** À afficher sur les pages de situation sensible. */
  noAcceptancePromise:
    "Aucune acceptation ne peut être garantie. Votre dossier est étudié par un professionnel partenaire, qui décide seul de la suite donnée à la demande.",
  /** Rôle du site : formulation compatible avec le modèle de mise en relation. */
  serviceRole:
    "DécennaleBTP.fr facilite votre mise en relation avec des spécialistes de l’assurance construction. Le site ne délivre pas de conseil personnalisé sur le contenu d’un contrat et ne permet pas de souscrire en ligne.",
  /** À afficher sous le formulaire de devis. */
  formPrivacy:
    "Les informations transmises servent à qualifier votre demande d’assurance décennale et à la transmettre à un professionnel partenaire habilité. Les champs signalés comme facultatifs peuvent rester vides.",
  /** Reprise du passé. */
  pastCoverage:
    "Un nouveau contrat ne couvre pas automatiquement un chantier ouvert ou un sinistre survenu avant sa date d’effet. Toute reprise du passé doit être expressément prévue par l’assureur.",
  /** Outils. */
  toolDisclaimer:
    "Cet outil ne remplace ni la nomenclature contractuelle de l’assureur ni l’analyse du professionnel chargé de votre dossier.",
  /** Panel réellement comparé. */
  panelScope: `Périmètre réellement étudié : ${PLACEHOLDER.toFill}. Le site ne compare pas l’intégralité des contrats disponibles sur le marché français.`,
} as const;

/** Formulations bannies par le brief : contrôlées par le script prebuild-check. */
export const FORBIDDEN_CLAIMS: readonly string[] = [
  "meilleur assureur garanti",
  "prix le plus bas du marché",
  "accepté dans tous les cas",
  "attestation immédiate",
  "compare tous les assureurs",
  "sans aucune exclusion",
  "couverture totale",
  "économisez 30",
  "dès 69",
  "attestation en 4 heures",
];
