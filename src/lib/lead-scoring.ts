import { findTradeByValue } from "@/data/trades";
import type { LeadInput } from "@/lib/validation";
import type { LeadRoute, LeadScore } from "@/types/lead";

/**
 * Scoring interne d'une demande.
 *
 * Ce score est un outil d'orientation et de priorisation interne. Il n'est
 * jamais présenté au prospect, jamais transmis comme une décision d'assureur, et
 * ne produit jamais de refus automatique : la sortie la plus défavorable est
 * `manual_review`, qui signifie « à étudier par un professionnel ».
 */

/**
 * Métiers dont la sinistralité conduit habituellement à une étude approfondie.
 * Cette liste reflète le risque technique, pas une exclusion : elle sert
 * uniquement à orienter le dossier vers le bon interlocuteur.
 */
const HIGH_RISK_TRADES: readonly string[] = [
  "etancheur",
  "couvreur",
  "macon",
  "fondations-speciales",
  "amelioration-sols",
  "cuvelage",
  "isolation-exterieure",
  "photovoltaique",
  "geothermie",
  "pisciniste",
  "ossature-bois",
  "charpente-metallique",
  "beton-precontraint",
  "facade-rideau",
  "ascensoriste",
  "desamiantage",
];

const EXPERIENCED = new Set(["3-5", "6-10", "10+"]);

export function isHighRiskTrade(tradeValue: string): boolean {
  return HIGH_RISK_TRADES.includes(tradeValue);
}

export function scoreLead(lead: LeadInput): LeadScore {
  const positiveSignals: string[] = [];
  const reviewSignals: string[] = [];
  let value = 50;

  const { activity, company, experience, insurance, needs } = lead;

  // Qualité de la description d'activité : premier facteur d'exploitabilité.
  if (activity.worksDescription.length >= 120) {
    value += 8;
    positiveSignals.push("activité décrite précisément");
  } else if (activity.worksDescription.length < 40) {
    value -= 5;
    reviewSignals.push("description d’activité trop courte");
  }

  if (EXPERIENCED.has(experience.experienceYears)) {
    value += 12;
    positiveSignals.push("expérience supérieure à trois ans dans le métier");
  } else if (experience.experienceYears === "0") {
    value -= 10;
    reviewSignals.push("aucune expérience déclarée dans le métier");
  }

  if (experience.canProvideEvidence === "oui") {
    value += 8;
    positiveSignals.push("justificatifs d’expérience disponibles");
  } else {
    value -= 6;
    reviewSignals.push("justificatifs d’expérience non disponibles");
  }

  if (experience.qualifications) {
    value += 4;
    positiveSignals.push("qualification professionnelle déclarée");
  }

  if (insurance.claimsCount === "0") {
    value += 10;
    positiveSignals.push("aucun sinistre déclaré");
  } else if (insurance.claimsCount === "inconnu") {
    value -= 4;
    reviewSignals.push("historique de sinistralité inconnu");
  } else {
    const claims = insurance.claimsCount === "3+" ? 3 : Number(insurance.claimsCount);
    value -= claims * 8;
    reviewSignals.push(`sinistralité déclarée : ${insurance.claimsCount}`);
  }

  if (insurance.currentlyInsured === "oui" && insurance.coverageGap === "non") {
    value += 10;
    positiveSignals.push("continuité d’assurance");
  }

  if (insurance.coverageGap === "oui") {
    value -= 8;
    reviewSignals.push("interruption de garantie");
  }

  if (insurance.terminated === "oui") {
    value -= 10;
    reviewSignals.push(
      insurance.terminationReason === "non-paiement"
        ? "résiliation pour non-paiement"
        : `résiliation antérieure (${insurance.terminationReason ?? "motif à préciser"})`,
    );
  }

  if (company.annualRevenue > 0) {
    value += 4;
    positiveSignals.push("chiffre d’affaires renseigné");
  }

  const effectiveDate = Date.parse(insurance.desiredStartDate);
  if (!Number.isNaN(effectiveDate)) {
    const days = Math.round((effectiveDate - Date.now()) / 86_400_000);
    if (days >= 3) {
      value += 6;
      positiveSignals.push("date d’effet réaliste");
    } else if (days < 0) {
      value -= 6;
      reviewSignals.push("date d’effet demandée dans le passé");
    }
  }

  if (needs.needPastCoverage === "oui") {
    value -= 8;
    reviewSignals.push("reprise du passé demandée");
  }

  if (activity.subcontracting === "reguliere") {
    value -= 5;
    reviewSignals.push("sous-traitance régulière");
  }

  if ((activity.subcontractedShare ?? 0) > 50) {
    value -= 5;
    reviewSignals.push("part sous-traitée supérieure à 50 %");
  }

  if (activity.generalContractor === "oui") {
    reviewSignals.push("activité d’entreprise générale : périmètre à cadrer");
  }

  if (activity.secondaryTrades.length > 3) {
    reviewSignals.push("nombre élevé d’activités secondaires");
  }

  if (company.legalForm === "societe-etrangere") {
    reviewSignals.push("entreprise étrangère intervenant en France");
  }

  const highRisk =
    isHighRiskTrade(activity.trade) || activity.secondaryTrades.some(isHighRiskTrade);
  if (highRisk) {
    value -= 6;
    const trade = findTradeByValue(activity.trade);
    reviewSignals.push(`métier à forte sinistralité : ${trade?.name ?? activity.trade}`);
  }

  return {
    value: Math.max(0, Math.min(100, value)),
    route: routeFor({ lead, reviewSignals, highRisk }),
    positiveSignals,
    reviewSignals,
  };
}

/**
 * Détermine la file de traitement.
 * L'ordre des tests traduit une priorité : une résiliation ou un sinistre
 * prime sur la nouveauté de l'entreprise, car ils conditionnent l'acceptation.
 */
function routeFor({
  lead,
  reviewSignals,
  highRisk,
}: {
  lead: LeadInput;
  reviewSignals: string[];
  highRisk: boolean;
}): LeadRoute {
  const { activity, company, experience, insurance, needs } = lead;

  if (activity.worksDescription.length < 40 && experience.canProvideEvidence === "non") {
    return "incomplete";
  }

  if (
    needs.needPastCoverage === "oui" ||
    insurance.claimsCount === "3+" ||
    company.legalForm === "societe-etrangere" ||
    reviewSignals.length >= 5
  ) {
    return "manual_review";
  }

  if (insurance.terminated === "oui") {
    return "resiliation";
  }

  if (highRisk) {
    return "high_risk_trade";
  }

  if (company.companyStatus === "en-creation" || insurance.insuredYears === "0") {
    return "creation";
  }

  return "standard";
}
