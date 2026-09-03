import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: "on-dark" | "on-light" | "accent";
};

/**
 * Mono metadata / category line (Design.md §22).
 */
export function Eyebrow({
  children,
  className,
  tone = "accent",
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-meta m-0",
        tone === "accent" && "text-accent",
        tone === "on-dark" && "text-muted-on-dark",
        tone === "on-light" && "text-muted-on-light",
        className,
      )}
    >
      {children}
    </p>
  );
}
