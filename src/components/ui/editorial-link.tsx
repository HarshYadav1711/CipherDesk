import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type EditorialLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  withArrow?: boolean;
};

/**
 * Text link + optional arrow. Prefer this over boxed buttons for editorial UI.
 */
export function EditorialLink({
  children,
  className,
  withArrow = true,
  ...props
}: EditorialLinkProps) {
  return (
    <Link
      className={cn(
        "group text-body inline-flex items-center gap-2 font-medium text-text-on-dark transition-[color] duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-accent focus-visible:text-accent",
        className,
      )}
      {...props}
    >
      <span className="underline-offset-4 group-hover:underline">{children}</span>
      {withArrow ? (
        <span
          aria-hidden="true"
          className="translate-x-0 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </Link>
  );
}
