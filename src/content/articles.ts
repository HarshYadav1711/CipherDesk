import type { Article } from "@/types/content";

/**
 * Sample editorial articles for the CipherDesk demo.
 * Educational fiction — not claimed discoveries or published research.
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
  {
    slug: "why-cors-is-not-an-access-control-system",
    title: "Why CORS Is Not an Access-Control System",
    excerpt:
      "CORS governs what a browser will expose to script — not what a server should accept. Treating it as authorization creates a false sense of safety.",
    category: "Web Security",
    publishedAt: "2026-08-04",
    readingTimeMinutes: 9,
  },
  {
    slug: "jwt-rotation-without-footguns",
    title: "JWT Rotation Without Footguns",
    excerpt:
      "Key rotation, grace windows and revocation are where token systems usually fail. A practical checklist for rotating without locking users out.",
    category: "Identity",
    publishedAt: "2026-07-28",
    readingTimeMinutes: 11,
  },
  {
    slug: "understanding-oauth-trust-boundaries",
    title: "Understanding OAuth Trust Boundaries",
    excerpt:
      "Who trusts whom in an OAuth flow — and where those assumptions break when redirect URIs, clients and token audiences drift.",
    category: "Identity",
    publishedAt: "2026-07-19",
    readingTimeMinutes: 14,
  },
  {
    slug: "threat-modelling-a-modern-api",
    title: "Threat Modelling a Modern API",
    excerpt:
      "A grounded walkthrough of assets, entry points and trust boundaries for a typical authenticated JSON API — without the ceremony tax.",
    category: "Threat Modelling",
    publishedAt: "2026-07-08",
    readingTimeMinutes: 13,
  },
  {
    slug: "how-content-security-policy-breaks-an-xss-chain",
    title: "How Content Security Policy Breaks an XSS Chain",
    excerpt:
      "Where CSP interrupts script injection in practice, what still leaks through, and how to read a policy like an engineer rather than a checklist.",
    category: "Secure Coding",
    publishedAt: "2026-06-26",
    readingTimeMinutes: 10,
  },
];

export function getFeaturedArticle(): Article {
  const featured = articles.find((article) => article.featured);
  if (!featured) {
    throw new Error("Expected a featured article in local content.");
  }
  return featured;
}

/** Non-featured articles, newest first — for the Latest Research section. */
export function getLatestArticles(): Article[] {
  return articles
    .filter((article) => !article.featured)
    .slice()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getLeadArticle(): Article {
  const [lead] = getLatestArticles();
  if (!lead) {
    throw new Error("Expected at least one non-featured article.");
  }
  return lead;
}

export function getSupportingArticles(): Article[] {
  return getLatestArticles().slice(1);
}
