import { ArticleItem } from "@/components/home/article-item";
import { ArticleLead } from "@/components/home/article-lead";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getLeadArticle,
  getSupportingArticles,
} from "@/content/articles";

/**
 * Latest Research — warm-paper editorial section.
 * Lead story + supporting list (not a six-up card grid).
 */
export function LatestResearch() {
  const lead = getLeadArticle();
  const supporting = getSupportingArticles();

  return (
    <section
      id="research"
      aria-labelledby="latest-research-heading"
      className="scroll-mt-20 border-b border-border-light bg-paper section-padding text-text-on-light"
    >
      <Container>
        <SectionHeading
          tone="on-light"
          as="h2"
          headingId="latest-research-heading"
          eyebrow="01 · Research"
          title="Latest Research"
          description="Sample editorial notes on browsers, identity, APIs and secure architecture — written for engineers who want the mechanism, not the marketing."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border-light pt-10 lg:mt-14 lg:grid-cols-12 lg:gap-0 lg:pt-12">
          <div className="lg:col-span-7">
            <ArticleLead article={lead} />
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <ul className="m-0 list-none p-0">
              {supporting.map((article, index) => (
                <li key={article.slug}>
                  <ArticleItem article={article} index={index + 2} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
