/**
 * Small class-name helper. No lodash/clsx dependency.
 */
export function cn(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}
