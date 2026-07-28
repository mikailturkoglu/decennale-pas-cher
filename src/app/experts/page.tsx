import type { Metadata } from "next";
import Link from "next/link";

import { InfoPageTemplate } from "@/components/templates/InfoPageTemplate";
import { PlaceholderValue } from "@/components/ui/PlaceholderValue";
import { expertsHub } from "@/content/corporate";
import { experts } from "@/data/experts";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ seo: expertsHub.seo, path: expertsHub.path });

export default function ExpertsHubPage() {
  return (
    <InfoPageTemplate
      page={expertsHub}
      beforeSections={
        <section aria-labelledby="intervenants" className="mt-8">
          <h2 id="intervenants" className="text-2xl">
            Les intervenants
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {experts.map((expert) => (
              <li key={expert.id} className="rounded-card border border-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-600">
                  {expert.role}
                </p>
                <p className="mt-1 text-lg font-bold text-navy">
                  <PlaceholderValue value={expert.name} fallback="Identité à renseigner" />
                </p>
                {expert.bio ? <p className="mt-2 text-sm text-ink-600">{expert.bio}</p> : null}
                <p className="mt-3">
                  <Link
                    href={expert.profilePath}
                    className="font-semibold text-action-700 underline underline-offset-4"
                  >
                    Voir le profil détaillé
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </section>
      }
    />
  );
}
