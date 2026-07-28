"use client";

import { useId, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

/**
 * Dépôt des pièces justificatives, après envoi de la demande.
 *
 * Le dépôt est facultatif et n'intervient jamais avant la conversion : il sert
 * uniquement à accélérer l'étude du dossier. Les contrôles affichés ici
 * dupliquent volontairement ceux du serveur, qui restent seuls décisifs.
 */

const ACCEPTED = ".pdf,.jpg,.jpeg,.png,.webp";
const MAX_FILES = 10;
const MAX_MEGABYTES = 8;

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "done"; accepted: string[]; rejected: { name: string; reason: string }[] }
  | { kind: "error"; message: string };

const ERROR_MESSAGES: Readonly<Record<string, string>> = {
  reference_invalide: "La référence de demande est absente ou invalide. Reprenez le lien reçu.",
  aucun_fichier: "Sélectionnez au moins un fichier avant d’envoyer.",
  trop_de_fichiers: "Dix fichiers au maximum par envoi.",
  fichiers_refuses: "Aucun fichier n’a pu être accepté. Vérifiez le format et la taille.",
  trop_de_depots: "Trop d’envois successifs. Réessayez dans une heure.",
  stockage_non_configure:
    "L’espace de dépôt sécurisé n’est pas encore actif. Transmettez vos pièces par le moyen indiqué dans le courriel de confirmation.",
  origine_invalide: "Requête refusée. Rechargez la page puis réessayez.",
};

function messageFor(code: string): string {
  return ERROR_MESSAGES[code] ?? "L’envoi a échoué. Réessayez dans quelques instants.";
}

export function DocumentUpload({ reference }: { reference: string }) {
  const inputId = useId();
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("reference", reference);

    const files = data.getAll("files").filter((entry): entry is File => entry instanceof File);
    if (files.length === 0) {
      setStatus({ kind: "error", message: messageFor("aucun_fichier") });
      return;
    }

    setStatus({ kind: "sending" });
    trackEvent("document_upload_start", { page_type: "form" });

    try {
      const response = await fetch("/api/uploads/", { method: "POST", body: data });
      const payload = (await response.json()) as {
        error?: string;
        accepted?: string[];
        rejected?: { name: string; reason: string }[];
      };

      if (!response.ok) {
        trackEvent("document_upload_failure", { page_type: "form" });
        setStatus({ kind: "error", message: messageFor(payload.error ?? "") });
        return;
      }

      trackEvent("document_upload_success", { page_type: "form" });
      setStatus({
        kind: "done",
        accepted: payload.accepted ?? [],
        rejected: payload.rejected ?? [],
      });
      form.reset();
    } catch {
      trackEvent("document_upload_failure", { page_type: "form" });
      setStatus({ kind: "error", message: messageFor("") });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 rounded-card border border-line bg-white p-5">
      <label htmlFor={inputId} className="block font-semibold text-navy">
        Sélectionnez vos documents
      </label>
      <p id={`${inputId}-hint`} className="mt-1 text-sm text-ink-600">
        Formats acceptés : PDF, JPG, PNG, WebP. {MAX_MEGABYTES} Mo par fichier, {MAX_FILES} fichiers
        au maximum par envoi.
      </p>
      <input
        id={inputId}
        name="files"
        type="file"
        multiple
        accept={ACCEPTED}
        aria-describedby={`${inputId}-hint`}
        className="mt-2 block w-full rounded-lg border border-line bg-white p-2.5 text-base"
      />

      <Button type="submit" className="mt-5" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Envoi en cours…" : "Envoyer mes documents"}
      </Button>

      <div aria-live="polite" className="mt-4">
        {status.kind === "done" ? (
          <div className="rounded-card border-l-4 border-success bg-success-50 p-4">
            <p className="font-semibold text-navy">
              {status.accepted.length === 1
                ? "Un document a été transmis."
                : `${status.accepted.length} documents ont été transmis.`}
            </p>
            {status.rejected.length > 0 ? (
              <ul className="mt-2 list-disc pl-5 text-sm">
                {status.rejected.map((item) => (
                  <li key={item.name}>
                    {item.name} : {item.reason}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        {status.kind === "error" ? (
          <p role="alert" className="rounded-card border-l-4 border-danger bg-danger-50 p-4">
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
