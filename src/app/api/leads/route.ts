import { NextResponse } from "next/server";

import { siteConfig } from "@/data/site";
import { auditTrace, dispatchLead, type LeadRecord } from "@/lib/leads/dispatch";
import { ensureEmailSender } from "@/lib/leads/email";
import { scoreLead } from "@/lib/lead-scoring";
import {
  createLeadReference,
  isSameOrigin,
  rateLimit,
  rateLimitKey,
  verifyCaptcha,
} from "@/lib/security";
import { leadSchema, toFieldErrors } from "@/lib/validation";

/**
 * Réception d'une demande de devis.
 *
 * Chaîne de contrôle, dans l'ordre : origine de la requête, limitation de débit,
 * champ leurre, jeton anti-robot, puis validation complète par Zod. La demande
 * n'est acheminée qu'après ces cinq étapes.
 *
 * La réponse ne dépend pas du succès des systèmes tiers : une demande validée
 * est confirmée au prospect, les canaux en échec étant signalés dans les
 * journaux techniques pour reprise.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!isSameOrigin(request, siteConfig.url)) {
    return NextResponse.json({ error: "origine_invalide" }, { status: 403 });
  }

  const limit = rateLimit(rateLimitKey(request, "leads"), { limit: 5, windowMs: 60 * 60 * 1000 });
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "trop_de_demandes" },
      { status: 429, headers: { "retry-after": String(limit.retryAfterSeconds) } },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "corps_invalide" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation", fields: toFieldErrors(parsed.error) },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  // Champ leurre : réponse volontairement identique à un succès pour ne pas
  // renseigner un robot sur la raison du rejet.
  if (lead.meta.honeypot) {
    return NextResponse.json({ reference: createLeadReference() }, { status: 202 });
  }

  const captchaOk = await verifyCaptcha(lead.meta.captchaToken);
  if (!captchaOk) {
    return NextResponse.json({ error: "verification_antirobot" }, { status: 400 });
  }

  const record: LeadRecord = {
    reference: createLeadReference(),
    createdAt: new Date().toISOString(),
    lead,
    score: scoreLead(lead),
  };

  ensureEmailSender();
  const results = await dispatchLead(record);

  // Journal technique sans donnée personnelle.
  console.info("lead_received", auditTrace(record, results));

  return NextResponse.json(
    {
      reference: record.reference,
      /** La file de traitement est communiquée sans jamais être présentée comme une décision d'assureur. */
      route: record.score.route,
    },
    { status: 201 },
  );
}

export function GET() {
  return NextResponse.json({ error: "methode_non_autorisee" }, { status: 405 });
}
