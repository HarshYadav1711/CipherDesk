import type { Article } from "@/types/content";
import { cn, formatArticleDate } from "@/lib/utils";

type ArticleViewProps = {
  article: Article;
  className?: string;
};

/**
 * Editorial article template — same CipherDesk language as the homepage.
 * Server Component; no client interactivity required.
 */
export function ArticleView({ article, className }: ArticleViewProps) {
  return (
    <article
      className={cn(
        "bg-paper text-text-on-light section-padding",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-content px-[var(--gutter)]">
        <p className="text-meta m-0 text-muted-on-light">
          {article.category}
          <span className="mx-2 text-border-light" aria-hidden="true">
            ·
          </span>
          {article.readingTimeMinutes} min read
        </p>

        <h1 className="text-heading-2 mt-4 m-0 max-w-[22ch] text-text-on-light">
          {article.title}
        </h1>

        <p className="text-body-lg measure-hero mt-5 m-0 text-muted-on-light">
          {article.excerpt}
        </p>

        <p className="text-meta mt-6 m-0 text-muted-on-light">
          <time dateTime={article.publishedAt}>
            {formatArticleDate(article.publishedAt)}
          </time>
        </p>

        <div className="mt-10 max-w-[42rem] border-t border-border-light pt-10 md:mt-12 md:pt-12">
          {article.body.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={`h-${index}`}
                  className="text-heading-3 mt-10 m-0 first:mt-0 text-text-on-light"
                >
                  {block.text}
                </h2>
              );
            }

            return (
              <p
                key={`p-${index}`}
                className="text-body mt-4 m-0 text-muted-on-light first:mt-0 [&+p]:mt-4"
              >
                {block.text}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
