import Link from "next/link";

import type { Article } from "@/types/content";
import { cn, formatArticleDate, getArticleHref } from "@/lib/utils";

type ArticleItemProps = {
  article: Article;
  className?: string;
  index?: number;
};

/**
 * Compact supporting item for the Latest Research side list.
 */
export function ArticleItem({ article, className, index }: ArticleItemProps) {
  return (
    <article
      className={cn(
        "group border-b border-border-light py-5 last:border-b-0 last:pb-0 first:pt-0",
        className,
      )}
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-meta m-0 text-muted-on-light">{article.category}</p>
        {typeof index === "number" ? (
          <p
            className="text-meta m-0 tabular-nums text-muted-on-light/70"
            aria-hidden="true"
          >
            {String(index).padStart(2, "0")}
          </p>
        ) : null}
      </div>

      <h3 className="text-title mt-2 m-0 text-text-on-light">
        <Link
          href={getArticleHref(article.slug)}
          className="bg-[linear-gradient(currentColor,currentColor)] bg-size-[0_1px] bg-bottom bg-no-repeat transition-[background-size] duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:bg-size-[100%_1px]"
        >
          {article.title}
        </Link>
      </h3>

      <p className="text-meta mt-3 m-0 text-muted-on-light">
        <time dateTime={article.publishedAt}>
          {formatArticleDate(article.publishedAt)}
        </time>
        <span className="mx-2 text-border-light" aria-hidden="true">
          ·
        </span>
        {article.readingTimeMinutes} min read
      </p>
    </article>
  );
}
