/**
 * Small class-name helper. No lodash/clsx dependency.
 */
export function cn(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}

/** Format demo ISO dates consistently (UTC calendar day). */
export function formatArticleDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00.000Z`);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/** Canonical article path from typed slug. */
export function getArticleHref(slug: string): `/articles/${string}` {
  return `/articles/${slug}`;
}
