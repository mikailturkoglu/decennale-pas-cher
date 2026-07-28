import { SelectField, TextField } from "@/components/forms/Field";
import { Button } from "@/components/ui/Button";
import { situationOptions, tradeOptionGroups } from "@/data/form-options";
import { NOTICES } from "@/data/legal-notices";

interface MiniQuoteFormProps {
  /** Métier présélectionné lorsque le formulaire est affiché sur une page métier. */
  defaultTrade?: string;
  defaultSituation?: string;
  /** Page d'origine, transmise pour le suivi de la conversion par page. */
  sourcePath: string;
  title?: string;
}

/**
 * Mini-formulaire d'entrée.
 *
 * Formulaire GET classique : il fonctionne intégralement sans JavaScript et
 * préremplit le tunnel complet via l'URL. Aucune donnée personnelle n'y est
 * demandée, donc aucun paramètre sensible ne circule dans l'URL.
 */
export function MiniQuoteForm({
  defaultTrade,
  defaultSituation,
  sourcePath,
  title = "Commencez votre demande",
}: MiniQuoteFormProps) {
  return (
    <form
      action="/devis-assurance-decennale/"
      method="get"
      className="rounded-card border border-line bg-white p-5 shadow-raised"
      aria-labelledby="mini-devis"
    >
      <h2 id="mini-devis" className="text-xl">
        {title}
      </h2>
      <p className="mt-1 text-sm text-ink-600">
        Trois informations pour démarrer. Le détail de votre activité est demandé à l’étape suivante.
      </p>

      <SelectField
        id="mini-trade"
        name="trade"
        label="Votre métier principal"
        groups={tradeOptionGroups}
        defaultValue={defaultTrade}
        required
        placeholder="Choisissez votre métier"
      />

      <SelectField
        id="mini-situation"
        name="situation"
        label="Votre situation"
        options={situationOptions}
        defaultValue={defaultSituation}
        required
        placeholder="Choisissez votre situation"
      />

      <TextField
        id="mini-postal-code"
        name="code_postal"
        label="Code postal"
        inputMode="numeric"
        pattern="[0-9]{5}"
        autoComplete="postal-code"
        hint="Cinq chiffres, par exemple 33000."
        required
      />

      <input type="hidden" name="source_page" value={sourcePath} />

      <Button type="submit" size="lg" className="mt-6 w-full" data-analytics-event="lead_form_start">
        Continuer
      </Button>

      <p className="mt-3 text-xs text-ink-600">{NOTICES.formPrivacy}</p>
    </form>
  );
}
