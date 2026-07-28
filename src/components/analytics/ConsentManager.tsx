"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cookieCategories } from "@/data/cookies";
import { isAnalyticsEvent, trackEvent } from "@/lib/analytics";
import {
  CONSENT_CHANGE_EVENT,
  DEFAULT_CONSENT,
  OPEN_CONSENT_EVENT,
  readConsentCookie,
  writeConsentCookie,
  type ConsentState,
} from "@/lib/consent";

/**
 * Panneau de consentement.
 *
 * Contraintes appliquées :
 * - aucun script soumis à consentement n'est chargé avant un choix explicite,
 *   la couche de mesure n'étant initialisée qu'après acceptation ;
 * - « Tout accepter » et « Tout refuser » ont la même importance visuelle ;
 * - la personnalisation par catégorie est accessible au même niveau ;
 * - le choix est conservé comme preuve et peut être retiré à tout moment depuis
 *   le pied de page.
 */
export function ConsentManager() {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState(false);
  const [draft, setDraft] = useState<ConsentState>(DEFAULT_CONSENT);
  const headingId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = readConsentCookie();
    /*
     * Le cookie n'est lisible qu'après hydratation : décider côté serveur
     * d'afficher ou non le panneau provoquerait un écart d'hydratation. La règle
     * est donc désactivée ici, et uniquement ici, pour cette lecture unique.
     */
    /* eslint-disable react-hooks/set-state-in-effect */
    setVisible(!stored);
    setDraft(
      stored ? { measurement: stored.measurement, marketing: stored.marketing } : DEFAULT_CONSENT,
    );
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    function onOpen() {
      setVisible(true);
      setDetails(true);
    }
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (visible) {
      panelRef.current?.focus();
    }
  }, [visible]);

  const decide = useCallback((state: ConsentState) => {
    writeConsentCookie(state);
    setDraft(state);
    setVisible(false);
    setDetails(false);
  }, []);

  if (!visible) return null;

  const optionalCategories = cookieCategories.filter((category) => !category.required);

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby={headingId}
      ref={panelRef}
      tabIndex={-1}
      className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-accent bg-white p-4 shadow-raised sm:p-6"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id={headingId} className="text-lg">
          Cookies et mesure d’audience
        </h2>
        <p className="mt-2 text-sm text-ink">
          Nous utilisons des cookies nécessaires au fonctionnement du site. Avec votre accord, nous
          mesurons l’audience afin d’améliorer les contenus. Vous pouvez accepter, refuser ou choisir
          catégorie par catégorie, et modifier votre choix à tout moment.
        </p>

        {details ? (
          <fieldset className="mt-4">
            <legend className="sr-only">Choisir par catégorie</legend>
            {cookieCategories.map((category) => (
              <div key={category.id} className="mt-3 flex items-start gap-3">
                <input
                  id={`consent-${category.id}`}
                  type="checkbox"
                  className="mt-1 h-5 w-5 accent-[--color-action]"
                  checked={
                    category.required
                      ? true
                      : draft[category.id as keyof ConsentState]
                  }
                  disabled={category.required}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      [category.id]: event.target.checked,
                    }))
                  }
                />
                <label htmlFor={`consent-${category.id}`} className="text-sm">
                  <span className="font-semibold text-navy">{category.name}</span>
                  <span className="block text-ink-600">{category.description}</span>
                </label>
              </div>
            ))}
          </fieldset>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            onClick={() =>
              decide(
                optionalCategories.reduce<ConsentState>(
                  (state, category) => ({ ...state, [category.id]: true }),
                  { ...DEFAULT_CONSENT },
                ),
              )
            }
          >
            Tout accepter
          </Button>
          <Button variant="secondary" onClick={() => decide({ ...DEFAULT_CONSENT })}>
            Tout refuser
          </Button>
          {details ? (
            <Button variant="secondary" onClick={() => decide(draft)}>
              Enregistrer mes choix
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => setDetails(true)}>
              Personnaliser
            </Button>
          )}
          <Link
            href="/politique-cookies/"
            className="inline-flex min-h-11 items-center text-action-700 underline underline-offset-4"
          >
            Politique cookies
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Initialise la couche de mesure après consentement et relaie les événements.
 *
 * Le tableau `dataLayer` n'est créé qu'une fois l'accord donné : en son
 * absence, `trackEvent` ne fait rien, y compris pour les événements relayés
 * ci-dessous. Le chargement du script de l'outil retenu viendra ici, une fois
 * le fournisseur choisi.
 *
 * Les interactions sont captées par délégation sur `document` à partir des
 * attributs `data-analytics-event` posés dans le balisage : aucun composant
 * n'a besoin de devenir interactif pour être mesuré, et la nomenclature
 * d'événements reste centralisée.
 */
export function MeasurementLoader() {
  const pathname = usePathname();

  useEffect(() => {
    function enableIfConsented() {
      const stored = readConsentCookie();
      if (!stored?.measurement) return;
      const target = window as Window & { dataLayer?: Record<string, unknown>[] };
      target.dataLayer ??= [];
    }

    enableIfConsented();
    window.addEventListener(CONSENT_CHANGE_EVENT, enableIfConsented);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, enableIfConsented);
  }, []);

  useEffect(() => {
    trackEvent("page_view", { page_path: pathname });
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const trigger = target.closest<HTMLElement>("[data-analytics-event]");
      const name = trigger?.dataset.analyticsEvent;
      if (!trigger || !isAnalyticsEvent(name)) return;

      const { analyticsTrade, analyticsSituation, analyticsSource } = trigger.dataset;
      trackEvent(name, {
        page_path: window.location.pathname,
        ...(analyticsTrade ? { trade: analyticsTrade } : {}),
        ...(analyticsSituation ? { situation: analyticsSituation } : {}),
        ...(analyticsSource ? { source: analyticsSource } : {}),
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
