import Link from "next/link";

import { PlaceholderValue } from "@/components/ui/PlaceholderValue";
import { experts } from "@/data/experts";
import { NOTICES } from "@/data/legal-notices";

/**
 * Bloc d'expertise.
 *
 * Présente les personnes réellement responsables des contenus et renvoie vers
 * la méthode publiée. Les identités restent des placeholders jusqu'à validation
 * par le porteur de projet : aucun auteur fictif n'est affiché.
 */
export function ExpertiseBlock() {
  return (
    <section aria-labelledby="expertise" className="mt-12 rounded-card bg-navy p-6 text-white sm:p-8">
      <h2 id="expertise" className="text-2xl text-white sm:text-3xl">
        Qui écrit et qui vérifie ces contenus
      </h2>
      <p className="mt-3 max-w-3xl text-white/90">{NOTICES.serviceRole}</p>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {experts.map((expert) => (
          <li key={expert.id} className="rounded-card bg-white/10 p-4">
            <p className="font-bold text-accent">{expert.role}</p>
            <p className="mt-1">
              <Link
                href={expert.profilePath}
                className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                <PlaceholderValue value={expert.name} fallback="Identité à renseigner" />
              </Link>
            </p>
            {expert.bio ? <p className="mt-2 text-sm text-white/80">{expert.bio}</p> : null}
          </li>
        ))}
      </ul>

      <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link href="/notre-methode/" className="text-white underline underline-offset-4">
          Notre méthode et le périmètre réellement étudié
        </Link>
        <Link href="/experts/" className="text-white underline underline-offset-4">
          Le comité de relecture
        </Link>
      </p>
    </section>
  );
}
