import { createHmac } from "node:crypto";

import { pseudonymize } from "@/lib/security";
import type { LeadInput } from "@/lib/validation";
import type { LeadDispatchResult, LeadScore } from "@/types/lead";

/**
 * Acheminement d'une demande.
 *
 * Trois canaux indépendants, tous facultatifs et tous tolérants à la panne :
 * l'échec d'un canal ne doit jamais faire perdre une demande. Chaque adaptateur
 * est activé par la seule présence de sa configuration, ce qui permet de
 * déployer progressivement sans modifier le code.
 *
 * Répartition des données :
 * - le CRM du partenaire reçoit la demande complète, c'est sa finalité ;
 * - la notification interne ne contient aucune donnée personnelle ;
 * - la base de données conserve la demande selon la politique de conservation.
 */

export interface LeadRecord {
  reference: string;
  createdAt: string;
  lead: LeadInput;
  score: LeadScore;
}

/** Contrat d'un adaptateur de persistance, à implémenter avec l'ORM retenu. */
export interface LeadRepository {
  save(record: LeadRecord): Promise<void>;
}

let repository: LeadRepository | undefined;

/**
 * Enregistre l'implémentation de persistance.
 * Appelé au démarrage de l'application une fois l'ORM choisi ; utilisé aussi par
 * les tests pour vérifier l'acheminement sans base de données.
 */
export function setLeadRepository(implementation: LeadRepository | undefined): void {
  repository = implementation;
}

async function persist(record: LeadRecord): Promise<LeadDispatchResult> {
  if (!repository) {
    return {
      channel: "database",
      ok: false,
      detail: "aucun dépôt de persistance configuré",
    };
  }

  try {
    await repository.save(record);
    return { channel: "database", ok: true };
  } catch (error) {
    return {
      channel: "database",
      ok: false,
      detail: error instanceof Error ? error.name : "erreur de persistance",
    };
  }
}

async function sendToCrm(record: LeadRecord): Promise<LeadDispatchResult> {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) {
    return { channel: "crm", ok: false, detail: "CRM_WEBHOOK_URL non configurée" };
  }

  const body = JSON.stringify({
    reference: record.reference,
    createdAt: record.createdAt,
    route: record.score.route,
    score: record.score.value,
    reviewSignals: record.score.reviewSignals,
    lead: record.lead,
  });

  const secret = process.env.CRM_WEBHOOK_SECRET;
  const headers: Record<string, string> = { "content-type": "application/json" };
  if (secret) {
    // Signature HMAC : le destinataire vérifie l'authenticité de la charge utile.
    headers["x-dbtp-signature"] = createHmac("sha256", secret).update(body).digest("hex");
  }

  try {
    const response = await fetch(url, { method: "POST", headers, body });
    if (!response.ok) {
      return { channel: "crm", ok: false, detail: `réponse ${response.status}` };
    }
    return { channel: "crm", ok: true };
  } catch {
    return { channel: "crm", ok: false, detail: "CRM injoignable" };
  }
}

/**
 * Notification interne.
 *
 * Volontairement dépourvue de donnée personnelle : elle signale qu'une demande
 * est arrivée et indique où la consulter, rien de plus.
 */
async function notifyInternally(record: LeadRecord): Promise<LeadDispatchResult> {
  const apiKey = process.env.EMAIL_PROVIDER_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !to || !from) {
    return { channel: "email", ok: false, detail: "fournisseur email non configuré" };
  }

  const sender = emailSender;
  if (!sender) {
    return { channel: "email", ok: false, detail: "adaptateur email non enregistré" };
  }

  try {
    await sender({
      to,
      from,
      subject: `Nouvelle demande ${record.reference} — file ${record.score.route}`,
      text: [
        `Référence : ${record.reference}`,
        `Reçue le : ${record.createdAt}`,
        `File de traitement : ${record.score.route}`,
        `Score interne : ${record.score.value}/100`,
        record.score.reviewSignals.length > 0
          ? `Points à étudier : ${record.score.reviewSignals.join(" ; ")}`
          : "Points à étudier : aucun",
        "",
        "Cette notification ne contient aucune donnée personnelle : consultez la demande dans l’outil de suivi.",
      ].join("\n"),
    });
    return { channel: "email", ok: true };
  } catch {
    return { channel: "email", ok: false, detail: "envoi refusé par le fournisseur" };
  }
}

export interface EmailMessage {
  to: string;
  from: string;
  subject: string;
  text: string;
}

export type EmailSender = (message: EmailMessage) => Promise<void>;

let emailSender: EmailSender | undefined;

/** Enregistre l'adaptateur d'envoi d'emails (fournisseur à choisir). */
export function setEmailSender(implementation: EmailSender | undefined): void {
  emailSender = implementation;
}

/**
 * Achemine une demande sur tous les canaux configurés.
 * Les erreurs sont retournées, jamais levées : la réponse au prospect ne doit
 * pas dépendre de la disponibilité d'un système tiers.
 */
export async function dispatchLead(record: LeadRecord): Promise<LeadDispatchResult[]> {
  return Promise.all([persist(record), sendToCrm(record), notifyInternally(record)]);
}

/**
 * Trace technique d'une demande, destinée aux journaux applicatifs.
 * Ne contient ni nom, ni téléphone, ni courriel, ni raison sociale.
 */
export function auditTrace(record: LeadRecord, results: LeadDispatchResult[]) {
  return {
    reference: record.reference,
    contact: pseudonymize(record.lead.contact.email),
    trade: record.lead.activity.trade,
    route: record.score.route,
    score: record.score.value,
    channels: results.map((result) => `${result.channel}:${result.ok ? "ok" : "ko"}`),
  };
}
