import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "lg";

/**
 * Styles partagés par le bouton et le lien-bouton.
 * `min-h-11` garantit une cible tactile d'au moins 44 px (WCAG 2.2, 2.5.8).
 */
const BASE =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-action text-white hover:bg-action-700",
  secondary: "border-2 border-navy bg-white text-navy hover:bg-surface",
  ghost: "text-action-700 underline underline-offset-4 hover:text-navy",
};

const SIZES: Record<ButtonSize, string> = {
  md: "px-4 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

function classes(variant: ButtonVariant, size: ButtonSize, className?: string): string {
  return cn(BASE, VARIANTS[variant], variant === "ghost" ? "px-0" : SIZES[size], className);
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={classes(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends Omit<ComponentPropsWithoutRef<typeof Link>, "className"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={classes(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}
