import type { Article } from "@/types/content";

/**
 * Sample editorial content for the demo.
 * Titles are educational fiction — not claimed published research.
 */
export const articles: Article[] = [
  {
    slug: "inside-the-browser-security-model",
    title: "Inside the Browser Security Model",
    excerpt:
      "How origins, Content Security Policy, cookies and isolation boundaries combine to define what a browser can trust.",
    category: "Web Security",
    publishedAt: "2026-08-12",
    readingTimeMinutes: 12,
    featured: true,
  },
];

export function getFeaturedArticle(): Article {
  const featured = articles.find((article) => article.featured);
  if (!featured) {
    throw new Error("Expected a featured article in local content.");
  }
  return featured;
}
