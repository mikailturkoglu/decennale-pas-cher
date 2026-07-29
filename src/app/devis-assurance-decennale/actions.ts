"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auditTrace, dispatchLead, type LeadRecord } from "@/lib/leads/dispatch";
import { ensureEmailSender } from "@/lib/leads/email";
import { parseLeadFormData } from "@/lib/leads/form-data";
import { scoreLead } from "@/lib/lead-scoring";
import { createLeadReference, rateLimit, verifyCaptcha } from "@/lib/security";
import type { QuoteFormState } from "@/lib/leads/quote-form-state";
import { leadSchema, toFieldErrors } from "@/lib/validation";
import { pseudonymize } from "@/lib/security";

/**
 * Traitement d'une demande de devis.
 *
 * Implémenté comme action serveur : le formulaire fonctionne donc même si le
 * JavaScript du navigateur échoue, l'amélioration progressive n'ajoutant que
 * l'affichage étape par étape et la validation immédiate.
 *
 * La validation serveur est intégrale et fait autorité : les contrôles réalisés
 * dans le navigateur ne sont qu'un confort d'usage.
 */
export async function submitQuote(
  _previous: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const requestHeaders = await headers();
  const forwarded = requestHeaders.get("x-forwarded-for") ?? "";
  const ip = forwarded.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "unknown";

  const limit = rateLimit(`quote:${pseudonymize(ip)}`, { limit: 5, windowMs: 60 * 60 * 1000 });
  if (!limit.allowed) {
    return {
      status: "error",
      fieldErrors: [],
      message:
        "Plusieurs demandes ont déjà été envoyées depuis cette connexion. Réessayez plus tard ou contactez-nous directement.",
    };
  }

  const parsed = leadSchema.safeParse(parseLeadFormData(formData));

  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: toFieldErrors(parsed.error),
      message: "Certaines informations doivent être complétées avant l’envoi.",
    };
  }

  const lead = parsed.data;

  // Champ leurre rempli : la demande est abandonnée sans signaler la raison.
  if (lead.meta.honeypot) {
    redirect("/devis-assurance-decennale/merci/");
  }

  if (!(await verifyCaptcha(lead.meta.captchaToken))) {
    return {
      status: "error",
      fieldErrors: [],
      message:
        "La vérification anti-robot n’a pas abouti. Rechargez la page puis renvoyez votre demande.",
    };
  }

  const record: LeadRecord = {
    reference: createLeadReference(),
    createdAt: new Date().toISOString(),
    lead,
    score: scoreLead(lead),
  };

  ensureEmailSender();
  const results = await dispatchLead(record);

  // Journal technique : aucune donnée personnelle.
  console.info("lead_received", auditTrace(record, results));

  redirect(`/devis-assurance-decennale/merci/?ref=${encodeURIComponent(record.reference)}`);
}
