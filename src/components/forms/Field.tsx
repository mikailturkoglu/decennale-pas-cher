import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Champs de formulaire accessibles.
 *
 * Règles appliquées à tous les champs :
 * - un `label` explicite associé par `htmlFor` ;
 * - une aide et un message d'erreur reliés par `aria-describedby` ;
 * - `aria-invalid` sur le champ en erreur ;
 * - `aria-required` plutôt que l'attribut natif `required` : le tunnel affiche
 *   toutes ses étapes dans un même formulaire, et un champ masqué invalide
 *   empêcherait l'envoi sans qu'aucun message ne soit atteignable ; la
 *   validation Zod, exécutée côté client puis côté serveur, fait autorité ;
 * - une hauteur minimale de 44 px pour les cibles tactiles ;
 * - aucune information portée par la seule couleur (le message est textuel).
 *
 * Ces composants sont volontairement sans état : ils sont utilisés aussi bien
 * dans le mini-formulaire rendu côté serveur que dans le tunnel interactif.
 */

const CONTROL =
  "mt-1 block w-full min-h-11 rounded-lg border bg-white px-3 py-2.5 text-base text-ink placeholder:text-ink-600/70";

function describedBy(ids: (string | false | undefined)[]): string | undefined {
  const list = ids.filter(Boolean) as string[];
  return list.length > 0 ? list.join(" ") : undefined;
}

interface FieldShellProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

function FieldShell({
  id,
  label,
  hint,
  error,
  required,
  children,
  className,
}: FieldShellProps) {
  return (
    <div className={cn("mt-4", className)}>
      <label htmlFor={id} className="block font-semibold text-navy">
        {label}
        {required ? (
          <span className="text-danger" aria-hidden="true">
            {" *"}
          </span>
        ) : (
          <span className="ml-1 text-sm font-normal text-ink-600">(facultatif)</span>
        )}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-sm text-ink-600">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1 font-semibold text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

interface BaseFieldProps {
  id: string;
  name: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

interface TextFieldProps extends BaseFieldProps {
  type?: "text" | "email" | "tel" | "number" | "date";
  defaultValue?: string | number;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
  min?: number;
  max?: number;
  pattern?: string;
}

export function TextField({
  id,
  name,
  label,
  hint,
  error,
  required,
  className,
  type = "text",
  defaultValue,
  placeholder,
  autoComplete,
  inputMode,
  min,
  max,
  pattern,
}: TextFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      required={required}
      className={className}
    >
      <input
        id={id}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        min={min}
        max={max}
        pattern={pattern}
        aria-required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy([hint && `${id}-hint`, error && `${id}-error`])}
        className={cn(CONTROL, error ? "border-danger" : "border-line")}
      />
    </FieldShell>
  );
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

interface SelectFieldProps extends BaseFieldProps {
  options?: SelectOption[];
  groups?: SelectOptionGroup[];
  defaultValue?: string;
  placeholder?: string;
}

export function SelectField({
  id,
  name,
  label,
  hint,
  error,
  required,
  className,
  options,
  groups,
  defaultValue,
  placeholder = "Sélectionnez…",
}: SelectFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      required={required}
      className={className}
    >
      <select
        id={id}
        name={name}
        defaultValue={defaultValue ?? ""}
        aria-required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy([hint && `${id}-hint`, error && `${id}-error`])}
        className={cn(CONTROL, error ? "border-danger" : "border-line")}
      >
        <option value="">{placeholder}</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {groups?.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </FieldShell>
  );
}

interface MultiSelectFieldProps extends BaseFieldProps {
  groups: SelectOptionGroup[];
  defaultValues?: string[];
  size?: number;
}

/**
 * Sélection multiple.
 *
 * Un `select multiple` natif est retenu : il reste utilisable au clavier, sur
 * mobile et sans JavaScript, là où une liste de cases à cocher pour soixante
 * métiers serait illisible.
 */
export function MultiSelectField({
  id,
  name,
  label,
  hint,
  error,
  required,
  className,
  groups,
  defaultValues,
  size = 8,
}: MultiSelectFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      required={required}
      className={className}
    >
      <select
        id={id}
        name={name}
        multiple
        size={size}
        defaultValue={defaultValues}
        aria-required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy([hint && `${id}-hint`, error && `${id}-error`])}
        className={cn(
          "mt-1 block w-full rounded-lg border bg-white px-3 py-2 text-base text-ink",
          error ? "border-danger" : "border-line",
        )}
      >
        {groups.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </FieldShell>
  );
}

interface TextareaFieldProps extends BaseFieldProps {
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
}

export function TextareaField({
  id,
  name,
  label,
  hint,
  error,
  required,
  className,
  defaultValue,
  placeholder,
  rows = 4,
}: TextareaFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      required={required}
      className={className}
    >
      <textarea
        id={id}
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy([hint && `${id}-hint`, error && `${id}-error`])}
        className={cn(CONTROL, error ? "border-danger" : "border-line")}
      />
    </FieldShell>
  );
}

interface RadioGroupProps {
  /** Identifiant du groupe, cible des liens du résumé des erreurs. */
  id?: string;
  name: string;
  legend: string;
  options: SelectOption[];
  hint?: string;
  error?: string;
  defaultValue?: string;
  required?: boolean;
  className?: string;
}

/**
 * Groupe de boutons radio, structuré par `fieldset` et `legend`.
 *
 * Le `fieldset` porte un identifiant et `tabIndex={-1}` : un lien du résumé des
 * erreurs peut ainsi amener le focus sur le groupe entier, ce qui fait annoncer
 * la légende et le message d'erreur par les lecteurs d'écran.
 */
export function RadioGroup({
  id,
  name,
  legend,
  options,
  hint,
  error,
  defaultValue,
  required,
  className,
}: RadioGroupProps) {
  const groupId = id ?? name;

  return (
    <fieldset
      id={groupId}
      tabIndex={-1}
      className={cn("mt-5", className)}
      aria-describedby={describedBy([hint && `${groupId}-hint`, error && `${groupId}-error`])}
      aria-invalid={error ? true : undefined}
    >
      <legend className="font-semibold text-navy">
        {legend}
        {required ? (
          <span className="text-danger" aria-hidden="true">
            {" *"}
          </span>
        ) : null}
      </legend>
      {hint ? (
        <p id={`${groupId}-hint`} className="mt-1 text-sm text-ink-600">
          {hint}
        </p>
      ) : null}
      <div className="mt-2 space-y-1">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-line bg-white px-3 py-2 hover:bg-surface"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={defaultValue === option.value}
              className="h-5 w-5 accent-[--color-action]"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {error ? (
        <p id={`${groupId}-error`} className="mt-1 font-semibold text-danger">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

interface CheckboxFieldProps {
  id: string;
  name: string;
  label: ReactNode;
  hint?: string;
  error?: string;
  required?: boolean;
  defaultChecked?: boolean;
  value?: string;
  className?: string;
}

/**
 * Case à cocher.
 *
 * `defaultChecked` n'est jamais activé pour un consentement : aucune case de
 * consentement ne doit être précochée.
 */
export function CheckboxField({
  id,
  name,
  label,
  hint,
  error,
  required,
  defaultChecked,
  value,
  className,
}: CheckboxFieldProps) {
  return (
    <div className={cn("mt-4", className)}>
      <div className="flex items-start gap-3">
        <input
          id={id}
          name={name}
          type="checkbox"
          value={value}
          defaultChecked={defaultChecked}
          aria-required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy([hint && `${id}-hint`, error && `${id}-error`])}
          className="mt-1 h-5 w-5 shrink-0 accent-[--color-action]"
        />
        <label htmlFor={id} className="text-ink">
          {label}
          {required ? (
            <span className="text-danger" aria-hidden="true">
              {" *"}
            </span>
          ) : null}
        </label>
      </div>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 pl-8 text-sm text-ink-600">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1 pl-8 font-semibold text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Champ leurre anti-robot : masqué visuellement, ignoré des lecteurs d'écran. */
export function HoneypotField({ name }: { name: string }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor={`${name}-field`}>Ne pas remplir ce champ</label>
      <input id={`${name}-field`} name={name} type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

interface ErrorSummaryProps {
  /** Erreurs par champ : libellé lisible et identifiant de la cible. */
  errors: { id: string; label: string; message: string }[];
  title?: string;
}

/**
 * Résumé des erreurs.
 *
 * Placé en tête de formulaire, annoncé par `role="alert"` et proposant un lien
 * vers chaque champ concerné (WCAG 3.3.1 et 3.3.3).
 */
export function ErrorSummary({
  errors,
  title = "Votre demande n’a pas pu être envoyée",
}: ErrorSummaryProps) {
  if (errors.length === 0) return null;

  return (
    <div
      role="alert"
      tabIndex={-1}
      id="resume-erreurs"
      className="mt-4 rounded-card border-l-4 border-danger bg-danger-50 p-4"
    >
      <p className="font-bold text-navy">{title}</p>
      <p className="mt-1 text-sm">
        {errors.length === 1
          ? "Un champ doit être corrigé :"
          : `${errors.length} champs doivent être corrigés :`}
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {errors.map((error) => (
          <li key={error.id}>
            <a href={`#${error.id}`} className="text-action-700 underline underline-offset-4">
              {error.label} : {error.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
