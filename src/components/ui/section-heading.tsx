import type { ReactNode } from "react";

import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  tone?: "on-dark" | "on-light";
  as?: "h1" | "h2" | "h3";
  headingId?: string;
};

/**
 * Shared section intro: optional mono eyebrow + heading + short support copy.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  tone = "on-dark",
  as: Tag = "h2",
  headingId,
}: SectionHeadingProps) {
  const titleClass =
    Tag === "h1"
      ? "text-display"
      : Tag === "h3"
        ? "text-heading-3"
        : "text-heading-2";

  return (
    <header className={cn("flex flex-col gap-4", className)}>
      {eyebrow ? (
        <Eyebrow tone={tone === "on-light" ? "on-light" : "accent"}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Tag
        id={headingId}
        className={cn(
          titleClass,
          "m-0",
          tone === "on-dark" ? "text-text-on-dark" : "text-text-on-light",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "text-body-lg measure-hero m-0",
            tone === "on-dark" ? "text-muted-on-dark" : "text-muted-on-light",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
