import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleView } from "@/components/article/article-view";
import { Container } from "@/components/ui/container";
import { EditorialLink } from "@/components/ui/editorial-link";
import {
  getArticleBySlug,
  getArticleSlugs,
} from "@/content/articles";
import { SITE_NAME } from "@/lib/constants";

/** Only known local articles are valid; unknown slugs 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: `Not found · ${SITE_NAME}` };
  }

  return {
    title: `${article.title} · ${SITE_NAME}`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="border-b border-border-dark bg-ink">
        <Container className="py-4">
          <EditorialLink href="/#research">Back to Research</EditorialLink>
        </Container>
      </div>
      <ArticleView article={article} />
    </>
  );
}
