import type { FieldError } from "@/lib/validation";

/**
 * État renvoyé par l'action serveur du tunnel de devis.
 *
 * Ce type et sa valeur initiale vivent hors du fichier `"use server"` : un
 * module d'actions serveur ne peut exporter que des fonctions asynchrones, et un
 * objet exporté depuis ce module arriverait `undefined` côté client.
 */
export interface QuoteFormState {
  status: "idle" | "error" | "success";
  fieldErrors: FieldError[];
  /** Message global, affiché en tête de formulaire. */
  message?: string;
  reference?: string;
}

export const initialQuoteFormState: QuoteFormState = { status: "idle", fieldErrors: [] };
