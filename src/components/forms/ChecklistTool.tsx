"use client";

import { useMemo, useState } from "react";

import {
  checklistItems,
  checklistQuestions,
  documentsFor,
  type ChecklistCondition,
} from "@/data/document-checklist";

/**
 * Checklist de dossier.
 *
 * La liste complète est rendue côté serveur dans un `<noscript>` par la page :
 * l'outil interactif ne fait que filtrer, il n'apporte aucune information
 * indisponible sans JavaScript. Aucune donnée n'est transmise ni conservée.
 */
export function ChecklistTool() {
  const [conditions, setConditions] = useState<ChecklistCondition[]>([]);

  const documents = useMemo(() => documentsFor(conditions), [conditions]);
  const answeredCount = checklistQuestions.filter((question) =>
    question.options.some((option) => conditions.includes(option.value)),
  ).length;

  function selectSingle(question: (typeof checklistQuestions)[number], value: ChecklistCondition) {
    const others = question.options.map((option) => option.value);
    setConditions((current) => [...current.filter((item) => !others.includes(item)), value]);
  }

  function toggleMultiple(value: ChecklistCondition, checked: boolean) {
    setConditions((current) =>
      checked ? [...current, value] : current.filter((item) => item !== value),
    );
  }

  return (
    <div className="mt-8">
      <form className="rounded-card border border-line bg-surface p-5">
        {checklistQuestions.map((question) => (
          <fieldset key={question.id} className="mt-5 first:mt-0">
            <legend className="font-semibold text-navy">{question.legend}</legend>
            {question.help ? <p className="mt-1 text-sm text-ink-600">{question.help}</p> : null}
            <div className="mt-2 space-y-1">
              {question.options.map((option) => (
                <label
                  key={option.value}
                  className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-line bg-white px-3 py-2 hover:bg-action-50"
                >
                  <input
                    type={question.multiple ? "checkbox" : "radio"}
                    name={question.id}
                    value={option.value}
                    checked={conditions.includes(option.value)}
                    onChange={(event) =>
                      question.multiple
                        ? toggleMultiple(option.value, event.target.checked)
                        : selectSingle(question, option.value)
                    }
                    className="h-5 w-5 accent-[--color-action]"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </form>

      <section aria-live="polite" className="mt-8">
        <h2 className="text-2xl">
          {answeredCount === 0
            ? `Les ${checklistItems.length} pièces possibles`
            : `Votre dossier : ${documents.length} pièces`}
        </h2>
        <p className="mt-2 text-ink-600">
          {answeredCount === 0
            ? "Répondez aux questions ci-dessus pour ne garder que les pièces qui vous concernent."
            : "Les pièces facultatives ne sont pas exigées, mais elles accélèrent l’étude et améliorent souvent l’appréciation du dossier."}
        </p>

        <ul className="mt-5 space-y-3">
          {documents.map((item) => (
            <li key={item.id} className="rounded-card border border-line bg-white p-4">
              <p className="font-semibold text-navy">
                {item.label}
                {item.optional ? (
                  <span className="ml-2 rounded-full bg-surface px-2 py-0.5 text-xs font-normal text-ink-600">
                    facultatif
                  </span>
                ) : null}
              </p>
              <p className="mt-1 text-sm text-ink-600">{item.reason}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
