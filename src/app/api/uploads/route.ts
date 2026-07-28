import { NextResponse } from "next/server";

import { siteConfig } from "@/data/site";
import {
  checkUpload,
  isSameOrigin,
  MAX_UPLOADS_PER_REQUEST,
  rateLimit,
  rateLimitKey,
  safeFileName,
} from "@/lib/security";

/**
 * Dépôt de pièces justificatives.
 *
 * Les pièces ne sont jamais exigées avant l'envoi de la demande : cette route
 * sert l'espace de dépôt proposé après confirmation, à partir d'une référence de
 * demande.
 *
 * Contrôles appliqués avant tout stockage : origine, limitation de débit,
 * présence d'une référence, nombre de fichiers, type MIME, cohérence de
 * l'extension, taille, puis neutralisation du nom de fichier.
 *
 * Le stockage objet chiffré reste à brancher (fournisseur à choisir) : tant
 * qu'il n'est pas configuré, la route refuse explicitement le dépôt plutôt que
 * d'accepter des fichiers qu'elle ne saurait pas conserver correctement.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const REFERENCE_PATTERN = /^DBTP-\d{6}-[A-Z0-9]{6}$/;

export async function POST(request: Request) {
  if (!isSameOrigin(request, siteConfig.url)) {
    return NextResponse.json({ error: "origine_invalide" }, { status: 403 });
  }

  const limit = rateLimit(rateLimitKey(request, "uploads"), { limit: 20, windowMs: 60 * 60 * 1000 });
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "trop_de_depots" },
      { status: 429, headers: { "retry-after": String(limit.retryAfterSeconds) } },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "corps_invalide" }, { status: 400 });
  }

  const reference = String(form.get("reference") ?? "");
  if (!REFERENCE_PATTERN.test(reference)) {
    return NextResponse.json({ error: "reference_invalide" }, { status: 400 });
  }

  const files = form.getAll("files").filter((entry): entry is File => entry instanceof File);
  if (files.length === 0) {
    return NextResponse.json({ error: "aucun_fichier" }, { status: 400 });
  }
  if (files.length > MAX_UPLOADS_PER_REQUEST) {
    return NextResponse.json({ error: "trop_de_fichiers" }, { status: 400 });
  }

  const rejected: { name: string; reason: string }[] = [];
  const accepted: string[] = [];

  for (const file of files) {
    const check = checkUpload({ name: file.name, type: file.type, size: file.size });
    if (!check.ok) {
      rejected.push({ name: safeFileName(file.name), reason: check.reason ?? "fichier refusé" });
      continue;
    }
    accepted.push(safeFileName(file.name));
  }

  if (accepted.length === 0) {
    return NextResponse.json({ error: "fichiers_refuses", rejected }, { status: 422 });
  }

  if (!process.env.UPLOAD_BUCKET) {
    console.warn("upload_storage_missing", { reference, count: accepted.length });
    return NextResponse.json({ error: "stockage_non_configure" }, { status: 503 });
  }

  // Emplacement du stockage chiffré et de l'analyse antivirus : voir README.
  console.info("upload_received", { reference, accepted: accepted.length, rejected: rejected.length });

  return NextResponse.json({ accepted, rejected }, { status: 201 });
}

export function GET() {
  return NextResponse.json({ error: "methode_non_autorisee" }, { status: 405 });
}
