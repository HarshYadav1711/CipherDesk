import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

/**
 * Compact control. Primary uses accent + accent-ink (Design.md §21).
 */
export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-control px-4 py-2.5 text-sm font-medium transition-[background-color,color,border-color] duration-[var(--duration-fast)] ease-[var(--ease-standard)] disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-accent text-accent-ink hover:bg-accent-hover",
        variant === "ghost" &&
          "border border-border-dark bg-transparent text-text-on-dark hover:border-border-dark-strong hover:bg-ink-raised",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
