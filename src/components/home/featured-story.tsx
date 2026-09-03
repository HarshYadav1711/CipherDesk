import type { Article } from "@/types/content";
import { cn } from "@/lib/utils";

type FeaturedStoryProps = {
  article: Article;
  className?: string;
};

/**
 * Cover-story panel for the hero. Links to #research until article routes exist.
 */
export function FeaturedStory({ article, className }: FeaturedStoryProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-feature border border-border-dark-strong bg-ink-soft transition-[border-color,background-color] duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:border-accent/40 hover:bg-ink-raised",
        className,
      )}
    >
      <a
        href="#research"
        className="relative flex h-full min-h-[20rem] flex-col justify-between p-6 focus-visible:outline-offset-[-4px] sm:min-h-[22rem] sm:p-7 lg:min-h-0 lg:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-meta m-0 text-accent">Featured</p>
          <p
            className="text-meta m-0 tabular-nums text-muted-on-dark"
            aria-hidden="true"
          >
            01
          </p>
        </div>

        <div className="relative z-10 mt-8 flex flex-1 flex-col justify-end gap-4 lg:mt-12 lg:gap-5">
          <h2 className="text-heading-3 m-0 max-w-[18ch] text-text-on-dark">
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-size-[0_1px] bg-bottom bg-no-repeat transition-[background-size] duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:bg-size-[100%_1px]">
              {article.title}
            </span>
          </h2>

          <p className="text-body m-0 max-w-[36ch] text-muted-on-dark">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between gap-4 border-t border-border-dark pt-4">
            <p className="text-meta m-0 text-muted-on-dark">
              {article.category}
              <span className="mx-2 text-border-dark-strong" aria-hidden="true">
                ·
              </span>
              {article.readingTimeMinutes} min read
            </p>
            <span
              aria-hidden="true"
              className="text-accent transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </div>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute top-14 right-5 h-14 w-[4.5rem] text-border-dark-strong opacity-50"
          fill="none"
          viewBox="0 0 80 64"
        >
          <rect
            x="1"
            y="1"
            width="42"
            height="28"
            stroke="currentColor"
            strokeWidth="1"
          />
          <rect
            x="28"
            y="22"
            width="42"
            height="28"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M22 15h12M34 15v12"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.55"
          />
        </svg>
      </a>
    </article>
  );
}
