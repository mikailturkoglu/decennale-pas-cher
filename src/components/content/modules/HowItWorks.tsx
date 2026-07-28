import { serviceSteps } from "@/data/service";

/**
 * Fonctionnement du service.
 *
 * Aucun nombre de propositions n'est annoncé et aucune durée n'est promise :
 * ces éléments ne pourront être publiés qu'à partir de données réelles.
 */
export function HowItWorks({ title = "Comment fonctionne le service" }: { title?: string }) {
  return (
    <section aria-labelledby="fonctionnement" className="mt-12">
      <h2 id="fonctionnement" className="text-2xl sm:text-3xl">
        {title}
      </h2>

      <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {serviceSteps.map((step, index) => (
          <li key={step.title} className="rounded-card border border-line bg-white p-5 shadow-card">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy font-bold text-accent"
            >
              {index + 1}
            </span>
            <h3 className="mt-3 text-lg">
              <span className="sr-only">Étape {index + 1} : </span>
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-ink-600">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
