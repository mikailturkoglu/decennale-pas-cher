"use client";

import { useActionState, useCallback, useEffect, useRef, useState, type FormEvent } from "react";

import { ErrorSummary, HoneypotField } from "@/components/forms/Field";
import {
  ActivityFields,
  CompanyFields,
  ConsentFields,
  ContactFields,
  ExperienceFields,
  InsuranceFields,
  NeedsFields,
} from "@/components/forms/QuoteFormFieldsets";
import {
  clearDraft,
  readDraft,
  restoreDraft,
  saveDraft,
} from "@/components/forms/form-storage";
import {
  FIELD_LABELS,
  QUOTE_STEPS,
  fieldId,
  readableValue,
  type QuoteDefaults,
  type QuoteSection,
} from "@/components/forms/quote-form-fields";
import { Button } from "@/components/ui/Button";
import { submitQuote } from "@/app/devis-assurance-decennale/actions";
import { trackEvent } from "@/lib/analytics";
import { initialQuoteFormState } from "@/lib/leads/quote-form-state";
import { parseLeadFormData } from "@/lib/leads/form-data";
import { stepSchemas, toFieldErrors, type FieldError } from "@/lib/validation";

/**
 * Tunnel de devis.
 *
 * Amélioration progressive : le formulaire est intégralement rendu côté serveur
 * et reste utilisable sans JavaScript — toutes les étapes sont alors affichées à
 * la suite et l'envoi passe par l'action serveur, qui valide et fait autorité.
 * Après hydratation, le même formulaire se replie en six étapes avec validation
 * immédiate, résumé avant envoi et sauvegarde de la progression.
 *
 * Un seul élément `<form>` est utilisé : les étapes masquées conservent leurs
 * valeurs, aucune donnée n'est réintroduite dans des champs cachés dupliqués.
 */

const REVIEW_STEP = QUOTE_STEPS.length;

interface QuoteFormProps {
  defaults: QuoteDefaults;
  /** Clé publique du vérificateur anti-robot, s'il est configuré. */
  turnstileSiteKey?: string;
}

interface SummaryRow {
  field: string;
  label: string;
  value: string;
}

function stepOfField(name: string): number {
  const section = name.split(".")[0] as QuoteSection;
  const index = QUOTE_STEPS.findIndex((step) => step.section === section);
  return index === -1 ? REVIEW_STEP : index;
}

/** Traduit les valeurs brutes d'une section en lignes lisibles pour le résumé. */
function summarize(section: QuoteSection, values: Record<string, unknown>): SummaryRow[] {
  const rows: SummaryRow[] = [];

  for (const [key, raw] of Object.entries(values)) {
    const name = `${section}.${key}`;
    const label = FIELD_LABELS[name];
    if (!label) continue;

    let value: string;
    if (Array.isArray(raw)) {
      if (raw.length === 0) continue;
      value = raw.map((item) => readableValue(name, String(item))).join(", ");
    } else if (typeof raw === "boolean") {
      value = raw ? "Oui" : "Non";
    } else if (raw === undefined || raw === null || raw === "") {
      continue;
    } else {
      value = readableValue(name, String(raw));
    }

    rows.push({ field: name, label, value });
  }

  return rows;
}

export function QuoteForm({ defaults, turnstileSiteKey }: QuoteFormProps) {
  const [state, formAction, pending] = useActionState(submitQuote, initialQuoteFormState);
  /**
   * `enhanced` reste faux au rendu serveur : sans JavaScript, l'utilisateur voit
   * les six étapes et peut envoyer sa demande.
   */
  const [enhanced, setEnhanced] = useState(false);
  const [step, setStep] = useState(0);
  const [clientErrors, setClientErrors] = useState<FieldError[]>([]);
  const [summary, setSummary] = useState<{ section: QuoteSection; rows: SummaryRow[] }[]>([]);

  const formRef = useRef<HTMLFormElement>(null);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /*
     * Bascule en mode assisté après hydratation. Cette transition d'état est le
     * mécanisme même de l'amélioration progressive : elle ne peut pas être
     * calculée au rendu serveur, qui doit produire les six étapes visibles.
     */
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnhanced(true);

    const form = formRef.current;
    const draft = readDraft();
    if (form && draft) restoreDraft(form, draft);

    trackEvent("lead_form_start", {
      page_type: "form",
      ...(defaults.trade ? { trade: defaults.trade } : {}),
      ...(defaults.situation ? { situation: defaults.situation } : {}),
      source: defaults.sourcePage,
    });
  }, [defaults.sourcePage, defaults.situation, defaults.trade]);

  const errors: FieldError[] =
    clientErrors.length > 0 ? clientErrors : state.fieldErrors;

  const errorFor = useCallback(
    (name: string) => errors.find((error) => error.field === name)?.message,
    [errors],
  );

  /** Valide une étape à partir du contenu réel du formulaire. */
  const validateStep = useCallback((index: number): FieldError[] => {
    const form = formRef.current;
    const schema = stepSchemas[index];
    const definition = QUOTE_STEPS[index];
    if (!form || !schema || !definition) return [];

    const parsed = parseLeadFormData(new FormData(form));
    const result = schema.safeParse(parsed[definition.section] ?? {});
    if (result.success) return [];

    return toFieldErrors(result.error).map((error) => ({
      field: `${definition.section}.${error.field}`,
      message: error.message,
    }));
  }, []);

  const focusErrors = useCallback(() => {
    requestAnimationFrame(() => errorSummaryRef.current?.focus());
  }, []);

  const goToStep = useCallback((index: number) => {
    setStep(index);
    setClientErrors([]);
    requestAnimationFrame(() => stepHeadingRef.current?.focus());
  }, []);

  const buildSummary = useCallback(() => {
    const form = formRef.current;
    if (!form) return;
    const parsed = parseLeadFormData(new FormData(form));
    setSummary(
      QUOTE_STEPS.map((definition) => ({
        section: definition.section,
        rows: summarize(
          definition.section,
          (parsed[definition.section] ?? {}) as Record<string, unknown>,
        ),
      })),
    );
  }, []);

  const goNext = useCallback(() => {
    const found = validateStep(step);
    const form = formRef.current;
    if (form) saveDraft(form);

    if (found.length > 0) {
      setClientErrors(found);
      trackEvent("lead_form_error", { page_type: "form", step: step + 1 });
      focusErrors();
      return;
    }

    trackEvent("lead_step_complete", { page_type: "form", step: step + 1 });
    const next = step + 1;
    if (next === REVIEW_STEP) buildSummary();
    goToStep(next);
    trackEvent("lead_step_view", { page_type: "form", step: next + 1 });
  }, [buildSummary, focusErrors, goToStep, step, validateStep]);

  const goPrevious = useCallback(() => {
    const form = formRef.current;
    if (form) saveDraft(form);
    goToStep(Math.max(0, step - 1));
  }, [goToStep, step]);

  /**
   * Dernier filet avant envoi : toutes les étapes sont revalidées, et la
   * première en défaut est réaffichée. Le serveur revalide de toute façon.
   */
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      if (!enhanced) return;

      const found = QUOTE_STEPS.flatMap((_, index) => validateStep(index));
      if (found.length > 0) {
        event.preventDefault();
        setClientErrors(found);
        const firstStep = found[0] ? stepOfField(found[0].field) : 0;
        trackEvent("lead_form_error", { page_type: "form", step: firstStep + 1 });
        setStep(firstStep);
        focusErrors();
        return;
      }

      trackEvent("lead_submit", { page_type: "form", source: defaults.sourcePage });
      clearDraft();
    },
    [defaults.sourcePage, enhanced, focusErrors, validateStep],
  );

  /*
   * Erreurs renvoyées par le serveur : l'utilisateur est ramené sur l'étape
   * concernée et le focus est déplacé sur le résumé des erreurs. Le retour de
   * l'action serveur est une source externe : la règle est désactivée pour cette
   * synchronisation, qui n'a pas d'équivalent en valeur dérivée.
   */
  useEffect(() => {
    if (state.status !== "error") return;
    /* eslint-disable react-hooks/set-state-in-effect */
    setClientErrors([]);
    const firstError = state.fieldErrors[0];
    if (firstError) setStep(stepOfField(firstError.field));
    /* eslint-enable react-hooks/set-state-in-effect */
    focusErrors();
  }, [focusErrors, state]);

  const summaryItems = errors.map((error) => ({
    id: fieldId(error.field),
    label: FIELD_LABELS[error.field] ?? error.field,
    message: error.message,
  }));

  const stepProps = { errorFor, defaults };
  const currentStep = QUOTE_STEPS[step];

  return (
    <div>
      {enhanced ? (
        <nav aria-label="Progression de la demande" className="mb-6">
          <p className="font-semibold text-navy">
            {step === REVIEW_STEP
              ? "Dernière étape : vérification"
              : `Étape ${step + 1} sur ${QUOTE_STEPS.length} — ${currentStep?.title ?? ""}`}
          </p>
          <ol className="mt-3 flex flex-wrap gap-1.5">
            {QUOTE_STEPS.map((definition, index) => {
              const done = index < step;
              return (
                <li key={definition.section} className="flex-1">
                  {/*
                    Repère visuel doublé par le texte de l'étape en cours : aucune
                    information n'est portée par la seule couleur.
                  */}
                  <span
                    aria-hidden="true"
                    className={`block h-1.5 rounded-full ${
                      index === step ? "bg-action" : done ? "bg-success" : "bg-line"
                    }`}
                  />
                  <span className="sr-only">
                    {definition.shortTitle}
                    {index === step ? " (étape en cours)" : done ? " (complétée)" : ""}
                  </span>
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}

      <form
        ref={formRef}
        action={formAction}
        onSubmit={handleSubmit}
        noValidate
        aria-describedby="devis-aide"
        className="rounded-card border border-line bg-white p-5 shadow-card sm:p-6"
      >
        <p id="devis-aide" className="sr-only">
          Les champs marqués d’un astérisque sont obligatoires.
        </p>

        {state.message && state.status === "error" && summaryItems.length === 0 ? (
          <p role="alert" className="rounded-card border-l-4 border-danger bg-danger-50 p-4">
            {state.message}
          </p>
        ) : null}

        <div ref={errorSummaryRef} tabIndex={-1}>
          <ErrorSummary errors={summaryItems} />
        </div>

        {QUOTE_STEPS.map((definition, index) => {
          const hidden = enhanced && index !== step;
          return (
            <section
              key={definition.section}
              hidden={hidden}
              aria-labelledby={`etape-${definition.section}`}
              className={hidden ? undefined : "mt-6"}
            >
              <h2
                id={`etape-${definition.section}`}
                ref={index === step ? stepHeadingRef : undefined}
                tabIndex={-1}
                className="text-xl sm:text-2xl"
              >
                <span className="text-ink-600">
                  {index + 1}/{QUOTE_STEPS.length}
                </span>{" "}
                {definition.title}
              </h2>

              {definition.section === "activity" ? <ActivityFields {...stepProps} /> : null}
              {definition.section === "company" ? <CompanyFields {...stepProps} /> : null}
              {definition.section === "experience" ? <ExperienceFields {...stepProps} /> : null}
              {definition.section === "insurance" ? <InsuranceFields {...stepProps} /> : null}
              {definition.section === "needs" ? <NeedsFields {...stepProps} /> : null}
              {definition.section === "contact" ? (
                <>
                  <ContactFields {...stepProps} />
                  <ConsentFields {...stepProps} />
                </>
              ) : null}
            </section>
          );
        })}

        {enhanced && step === REVIEW_STEP ? (
          <section aria-labelledby="recapitulatif" className="mt-6">
            <h2
              id="recapitulatif"
              ref={stepHeadingRef}
              tabIndex={-1}
              className="text-xl sm:text-2xl"
            >
              Vérifiez votre demande
            </h2>
            <p className="mt-2 text-ink-600">
              Relisez les informations transmises. Une activité oubliée ici sera absente de votre
              attestation.
            </p>

            {summary.map((group, index) => {
              const definition = QUOTE_STEPS[index];
              if (!definition || group.rows.length === 0) return null;
              return (
                <div key={group.section} className="mt-5 rounded-card border border-line p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg">{definition.title}</h3>
                    <Button variant="ghost" onClick={() => goToStep(index)}>
                      Modifier {definition.shortTitle.toLowerCase()}
                    </Button>
                  </div>
                  <dl className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {group.rows.map((row) => (
                      <div key={row.field}>
                        <dt className="text-sm font-semibold text-navy">{row.label}</dt>
                        <dd className="text-sm text-ink">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              );
            })}
          </section>
        ) : null}

        <HoneypotField name="meta.honeypot" />
        <input type="hidden" name="meta.sourcePage" value={defaults.sourcePage} />
        {defaults.situation ? (
          <input type="hidden" name="meta.situation" value={defaults.situation} />
        ) : null}

        {turnstileSiteKey ? (
          <div
            className="cf-turnstile mt-6"
            data-sitekey={turnstileSiteKey}
            data-response-field-name="meta.captchaToken"
          />
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
          {enhanced && step > 0 ? (
            <Button variant="secondary" onClick={goPrevious}>
              Revenir à l’étape précédente
            </Button>
          ) : null}

          {enhanced && step < REVIEW_STEP ? (
            <Button size="lg" onClick={goNext}>
              Continuer
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={pending}>
              {pending ? "Envoi en cours…" : "Envoyer ma demande"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
