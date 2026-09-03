import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
};

/**
 * Page content shell: max 1280px + responsive gutters (Design.md §9).
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-content px-[var(--gutter)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
