import type { Topic } from "@/types/content";
import { cn } from "@/lib/utils";

type TopicRowProps = {
  topic: Topic;
  index: number;
  className?: string;
};

/**
 * Single editorial-index row — number, name, description, restrained arrow.
 * Presentational only; no topic routes yet.
 */
export function TopicRow({ topic, index, className }: TopicRowProps) {
  const number = String(index).padStart(2, "0");

  return (
    <li
      className={cn(
        "group border-b border-border-light py-6 last:border-b-0 last:pb-0 first:pt-0 md:py-5",
        className,
      )}
    >
      <div
        className={cn(
          "grid items-baseline gap-x-6 gap-y-2",
          "grid-cols-1",
          "md:grid-cols-[3rem_minmax(11rem,15rem)_minmax(0,1fr)_1.5rem]",
        )}
      >
        <span
          className="font-mono text-[0.8125rem] leading-none tracking-[0.08em] tabular-nums text-muted-on-light"
          aria-hidden="true"
        >
          {number}
        </span>

        <h3 className="text-title m-0 text-text-on-light">{topic.name}</h3>

        <p className="text-body m-0 max-w-[40ch] text-muted-on-light md:max-w-none">
          {topic.description}
        </p>

        <span
          aria-hidden="true"
          className="hidden justify-self-end text-accent transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-1 md:inline"
        >
          →
        </span>
      </div>
    </li>
  );
}
