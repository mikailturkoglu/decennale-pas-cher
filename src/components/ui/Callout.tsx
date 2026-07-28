import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type CalloutTone = "info" | "warning" | "legal" | "success";

/**
 * Encadré d'information.
 *
 * Le ton n'est jamais porté par la seule couleur : chaque variante ajoute un
 * intitulé explicite et une bordure, afin de rester compréhensible sans
 * perception des couleurs.
 */
const TONES: Record<CalloutTone, { wrapper: string; label: string }> = {
  info: { wrapper: "border-action bg-action-50", label: "À savoir" },
  warning: { wrapper: "border-accent bg-accent-50", label: "Point de vigilance" },
  legal: { wrapper: "border-navy bg-surface", label: "Cadre légal" },
  success: { wrapper: "border-success bg-success-50", label: "Bonne pratique" },
};

interface CalloutProps {
  tone?: CalloutTone;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Callout({ tone = "info", title, children, className }: CalloutProps) {
  const { wrapper, label } = TONES[tone];

  return (
    <aside className={cn("rounded-card border-l-4 p-4 sm:p-5", wrapper, className)}>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-600">{label}</p>
      <p className="mt-1 font-bold text-navy">{title}</p>
      <div className="mt-2 text-ink">{children}</div>
    </aside>
  );
}
