/**
 * Éléments descriptifs du service, partagés par l'accueil, les pages
 * commerciales et le formulaire. Centralisés pour rester cohérents et n'être
 * mis à jour qu'en un seul endroit.
 */

export interface ServiceStep {
  title: string;
  description: string;
}

/** Étapes du parcours. Aucun nombre de devis n'est promis. */
export const serviceSteps: readonly ServiceStep[] = [
  {
    title: "Décrivez votre activité",
    description:
      "Métier principal, travaux réellement facturés, chiffre d’affaires, expérience et situation d’assurance. Comptez cinq minutes.",
  },
  {
    title: "Votre dossier est qualifié",
    description:
      "Nous vérifions la cohérence des informations et traduisons vos travaux en activités déclarables avant transmission.",
  },
  {
    title: "Un professionnel étudie votre demande",
    description:
      "Un partenaire habilité analyse votre profil, vous recontacte et présente les solutions correspondant à votre activité.",
  },
  {
    title: "Vous choisissez librement",
    description:
      "Aucune souscription n’a lieu sur ce site. Vous comparez les propositions reçues et décidez sans engagement.",
  },
];

/** Critères de comparaison d'un contrat, au-delà du seul montant de la prime. */
export const comparisonCriteria: readonly { label: string; detail: string }[] = [
  {
    label: "Activités déclarées",
    detail:
      "Le libellé exact des activités garanties. C’est le premier critère : une prime basse sur un périmètre incomplet n’a aucune valeur.",
  },
  {
    label: "Montant de la cotisation",
    detail: "Prime annuelle, mode de calcul et conditions de révision en cours de contrat.",
  },
  {
    label: "Franchise",
    detail: "Montant restant à votre charge par sinistre, et éventuelle majoration selon l’activité.",
  },
  {
    label: "Plafonds d’indemnisation",
    detail: "Limites par sinistre et par année d’assurance, à comparer au montant de vos chantiers.",
  },
  {
    label: "Exclusions",
    detail: "Techniques non courantes, travaux sur existant, ouvrages particuliers.",
  },
  {
    label: "Garanties complémentaires",
    detail:
      "RC professionnelle, dommages aux existants, garantie avant réception, protection juridique.",
  },
  {
    label: "Reprise du passé",
    detail: "Possibilité, ou non, de couvrir des chantiers déjà ouverts avant la date d’effet.",
  },
  {
    label: "Modalités de paiement",
    detail: "Mensuel ou annuel, fractionnement, conséquences d’un retard de paiement.",
  },
  {
    label: "Accompagnement en cas de sinistre",
    detail: "Interlocuteur dédié, délais de gestion, assistance en expertise.",
  },
];

/** Critères qui font varier une cotisation de décennale. */
export const pricingCriteria: readonly string[] = [
  "chiffre d’affaires réalisé ou prévisionnel",
  "métier et sinistralité statistique de l’activité",
  "nombre d’activités déclarées",
  "expérience du dirigeant et ancienneté de l’entreprise",
  "historique d’assurance et sinistres des cinq dernières années",
  "part du chiffre d’affaires sous-traitée",
  "montant moyen et nature des chantiers",
  "techniques employées et qualifications détenues",
  "niveau de franchise retenu",
  "étendue des garanties complémentaires",
];

/**
 * Éléments de réassurance affichés sur l'accueil.
 * À aligner avec `siteConfig.trustSignals` et `siteConfig.contact.responseTime`.
 */
export const trustPoints: readonly { label: string; value: string }[] = [
  { label: "Service gratuit pour les ", value: "professionnels" },
  { label: "Demande sans ", value: "engagement" },
  {
    label: "Partenaires spécialisés BTP",
    value: "Axa, Ergo, La Française, CNP Assurances",
  },
  { label: "Délai de réponse moyen", value: "1 heure" },
];
