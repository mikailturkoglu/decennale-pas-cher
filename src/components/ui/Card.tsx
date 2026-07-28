import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-white p-5 shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface CardLinkProps {
  href: string;
  title: string;
  description?: string;
  /** Surtitre court : famille de métiers, catégorie de guide, etc. */
  eyebrow?: string;
  className?: string;
}

/**
 * Carte entièrement cliquable.
 *
 * Le lien porte le titre : il reste explicite hors contexte pour un lecteur
 * d'écran, contrairement à un « en savoir plus » répété.
 */
export function CardLink({ href, title, description, eyebrow, className }: CardLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-card border border-line bg-white p-5 shadow-card transition-colors hover:border-action hover:bg-action-50",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-600">{eyebrow}</span>
      ) : null}
      <span className="mt-1 font-bold text-navy underline decoration-transparent underline-offset-4 group-hover:decoration-current">
        {title}
      </span>
      {description ? <span className="mt-2 text-sm text-ink-600">{description}</span> : null}
    </Link>
  );
}
