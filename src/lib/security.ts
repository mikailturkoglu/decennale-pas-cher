import { createHash, randomUUID } from "node:crypto";

/**
 * Utilitaires de sécurité côté serveur.
 *
 * Aucune donnée personnelle ne doit atteindre les journaux : les identifiants
 * techniques sont pseudonymisés, et les messages d'erreur restent purement
 * techniques.
 */

/** Extensions et types MIME acceptés pour les pièces justificatives. */
export const ALLOWED_UPLOAD_TYPES: Readonly<Record<string, readonly string[]>> = {
  "application/pdf": ["pdf"],
  "image/jpeg": ["jpg", "jpeg"],
  "image/png": ["png"],
  "image/webp": ["webp"],
};

export const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
export const MAX_UPLOADS_PER_REQUEST = 10;

export interface UploadCheck {
  ok: boolean;
  reason?: string;
}

/**
 * Contrôle un fichier avant stockage : extension, type MIME déclaré, cohérence
 * entre les deux, taille et nom de fichier.
 */
export function checkUpload(file: { name: string; type: string; size: number }): UploadCheck {
  if (file.size <= 0) return { ok: false, reason: "fichier vide" };
  if (file.size > MAX_UPLOAD_BYTES) return { ok: false, reason: "taille supérieure à 8 Mo" };

  const allowedExtensions = ALLOWED_UPLOAD_TYPES[file.type];
  if (!allowedExtensions) return { ok: false, reason: "type de fichier non autorisé" };

  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!allowedExtensions.includes(extension)) {
    return { ok: false, reason: "extension incohérente avec le type de fichier" };
  }

  return { ok: true };
}

/** Nom de fichier neutralisé : ni chemin, ni caractère spécial, ni accent. */
export function safeFileName(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? "fichier";
  const normalized = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-{2,}/g, "-")
    .slice(-100);
  return normalized.length > 0 ? normalized : "fichier";
}

/**
 * Limitation de débit en mémoire.
 *
 * Suffisante pour une instance unique et pour freiner les envois répétés. En
 * production multi-instances, remplacer l'implémentation par un stockage
 * partagé (voir README) sans changer l'interface.
 */
const buckets = new Map<string, { count: number; resetAt: number }>();

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 60 * 60 * 1000 }: { limit?: number; windowMs?: number } = {},
): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  bucket.count += 1;
  const allowed = bucket.count <= limit;

  return {
    allowed,
    remaining: Math.max(0, limit - bucket.count),
    retryAfterSeconds: allowed ? 0 : Math.ceil((bucket.resetAt - now) / 1000),
  };
}

/** Réinitialise les compteurs (utilisé par les tests). */
export function resetRateLimits(): void {
  buckets.clear();
}

/**
 * Clé de limitation dérivée de l'adresse IP.
 * L'adresse est hachée : elle ne doit pas être conservée en clair en mémoire.
 */
export function rateLimitKey(request: Request, scope: string): string {
  const forwarded = request.headers.get("x-forwarded-for") ?? "";
  const ip = forwarded.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  return `${scope}:${createHash("sha256").update(ip).digest("hex").slice(0, 32)}`;
}

/**
 * Vérifie l'origine de la requête : protection CSRF pour les routes d'API
 * appelées depuis le site. Une requête sans origine connue est rejetée.
 */
export function isSameOrigin(request: Request, allowedOrigin: string): boolean {
  const origin = request.headers.get("origin");
  if (!origin) {
    // Requête sans en-tête Origin : acceptée uniquement si le référent correspond.
    const referer = request.headers.get("referer");
    if (!referer) return false;
    try {
      return new URL(referer).origin === new URL(allowedOrigin).origin;
    } catch {
      return false;
    }
  }
  try {
    return new URL(origin).origin === new URL(allowedOrigin).origin;
  } catch {
    return false;
  }
}

/**
 * Vérifie le jeton anti-robot auprès du fournisseur.
 * En l'absence de clé configurée, la vérification est neutre : le honeypot et la
 * limitation de débit restent actifs.
 */
export async function verifyCaptcha(token: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
    });
    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch {
    return false;
  }
}

/** Référence de demande communicable, sans donnée identifiante. */
export function createLeadReference(date = new Date()): string {
  const stamp = date.toISOString().slice(2, 10).replace(/-/g, "");
  const random = randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
  return `DBTP-${stamp}-${random}`;
}

/** Identifiant pseudonymisé pour la mesure d'audience et les journaux. */
export function pseudonymize(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 16);
}
