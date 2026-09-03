import type { Article } from "@/types/content";
import { cn, formatArticleDate } from "@/lib/utils";

type ArticleLeadProps = {
  article: Article;
  className?: string;
};

/**
 * Dominant editorial piece for Latest Research.
 * Non-linked until article routes exist — avoids fake navigation.
 */
export function ArticleLead({ article, className }: ArticleLeadProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col border-b border-border-light pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10",
        className,
      )}
    >
      <p className="text-meta m-0 text-muted-on-light">
        {article.category}
        <span className="mx-2 text-border-light" aria-hidden="true">
          ·
        </span>
        {article.readingTimeMinutes} min read
      </p>

      <h3 className="text-heading-3 mt-4 m-0 max-w-[18ch] text-text-on-light">
        {article.title}
      </h3>

      <p className="text-body-lg mt-4 m-0 max-w-[40ch] text-muted-on-light">
        {article.excerpt}
      </p>

      <p className="text-meta mt-auto pt-8 m-0 text-muted-on-light">
        <time dateTime={article.publishedAt}>
          {formatArticleDate(article.publishedAt)}
        </time>
      </p>
    </article>
  );
}
