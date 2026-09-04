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
    body: [
      {
        type: "paragraph",
        text: "Browser security is not a single switch. It is a stack of boundaries that decide what code can read, what a document can load, and how state travels between sites. Understanding that stack is the difference between treating the browser as a black box and designing for how it actually fails.",
      },
      {
        type: "heading",
        text: "Origins as the unit of trust",
      },
      {
        type: "paragraph",
        text: "The same-origin policy treats scheme, host and port as a trust domain. Scripts from one origin cannot freely read the DOM or storage of another. Most web security bugs are attempts to smuggle privileged actions across that line — via cookies, postMessage, or misconfigured CORS — without looking like a cross-origin read.",
      },
      {
        type: "heading",
        text: "CSP, cookies and isolation",
      },
      {
        type: "paragraph",
        text: "Content Security Policy constrains what a document may execute and embed. Cookie attributes such as Secure, HttpOnly and SameSite constrain when credentials leave the browser. Site isolation and process boundaries reduce the blast radius when one document is compromised. None of these controls replace authorization on the server; they shape what the browser is willing to assist with.",
      },
      {
        type: "paragraph",
        text: "When you design an application, write down which boundaries you are relying on. If the answer is only “users will not open malicious pages,” the model is incomplete.",
      },
    ],
  },
  {
    slug: "why-cors-is-not-an-access-control-system",
    title: "Why CORS Is Not an Access-Control System",
    excerpt:
      "CORS governs what a browser will expose to script — not what a server should accept. Treating it as authorization creates a false sense of safety.",
    category: "Web Security",
    publishedAt: "2026-08-04",
    readingTimeMinutes: 9,
    body: [
      {
        type: "paragraph",
        text: "CORS is frequently described as a security feature that “blocks bad origins.” That description is backwards. CORS is a browser mechanism that relaxes the same-origin policy for responses the server explicitly marks as shareable with a given origin’s scripts.",
      },
      {
        type: "heading",
        text: "What CORS actually decides",
      },
      {
        type: "paragraph",
        text: "A simple GET from a page to another origin still reaches the server. Without CORS headers, the browser withholds the response body from JavaScript. Non-simple requests may trigger a preflight that asks whether the browser should proceed. In both cases, the enforcement point is the browser’s script environment — not the server’s authorization logic.",
      },
      {
        type: "heading",
        text: "Why servers still need real checks",
      },
      {
        type: "paragraph",
        text: "curl, native apps, and other non-browser clients ignore CORS. If your API treats Access-Control-Allow-Origin as an allowlist of callers, any client that is not a browser can still hit the endpoint. Authorization belongs in authenticated identity, scopes and resource checks — not in headers meant for browser script visibility.",
      },
    ],
  },
  {
    slug: "jwt-rotation-without-footguns",
    title: "JWT Rotation Without Footguns",
    excerpt:
      "Key rotation, grace windows and revocation are where token systems usually fail. A practical checklist for rotating without locking users out.",
    category: "Identity",
    publishedAt: "2026-07-28",
    readingTimeMinutes: 11,
    body: [
      {
        type: "paragraph",
        text: "Issuing JWTs is easy. Rotating the keys that sign them — without dropping legitimate sessions or accepting tokens forever — is where most designs quietly fail. The failure modes are operational as much as cryptographic.",
      },
      {
        type: "heading",
        text: "Overlapping trust windows",
      },
      {
        type: "paragraph",
        text: "A workable rotation keeps the previous signing key valid for verification during a grace period while new tokens are signed with the current key. Clients that still hold older tokens continue to work; new issuances move forward. Publish key identifiers (kid) so verifiers can select the right key without guessing.",
      },
      {
        type: "heading",
        text: "Revocation and short lifetimes",
      },
      {
        type: "paragraph",
        text: "Unsigned revocation is hard for pure JWTs. Prefer short access-token lifetimes, refresh-token rotation with server-side state, and explicit denylists only for high-value emergencies. If a JWT must live for hours, treat that as a product decision with a documented blast radius — not as a default.",
      },
    ],
  },
  {
    slug: "understanding-oauth-trust-boundaries",
    title: "Understanding OAuth Trust Boundaries",
    excerpt:
      "Who trusts whom in an OAuth flow — and where those assumptions break when redirect URIs, clients and token audiences drift.",
    category: "Identity",
    publishedAt: "2026-07-19",
    readingTimeMinutes: 14,
    body: [
      {
        type: "paragraph",
        text: "OAuth is a delegation protocol. The interesting security questions are not “which grant type is trendy,” but who is allowed to request what on whose behalf — and what happens when those relationships are misconfigured.",
      },
      {
        type: "heading",
        text: "Clients, users and resource servers",
      },
      {
        type: "paragraph",
        text: "The authorization server authenticates the user and issues tokens to a registered client. The resource server must verify that the token’s audience and scopes match the API being called. Mixing those roles — for example, treating any bearer token as proof of end-user intent for any API — collapses the boundary the protocol was designed to preserve.",
      },
      {
        type: "heading",
        text: "Redirect URIs and confused deputies",
      },
      {
        type: "paragraph",
        text: "Open redirect URIs turn authorization codes into transferable credentials. Exact match (or tightly constrained patterns), PKCE for public clients, and rejecting token delivery on the front channel where possible keep the delegation targeted. When reviewing an integration, start from the redirect registration — many real incidents begin there.",
      },
    ],
  },
  {
    slug: "threat-modelling-a-modern-api",
    title: "Threat Modelling a Modern API",
    excerpt:
      "A grounded walkthrough of assets, entry points and trust boundaries for a typical authenticated JSON API — without the ceremony tax.",
    category: "Threat Modelling",
    publishedAt: "2026-07-08",
    readingTimeMinutes: 13,
    body: [
      {
        type: "paragraph",
        text: "Threat modelling does not require a heavyweight workshop culture. For an authenticated JSON API, a short written model of assets, entry points and trust boundaries already changes how you review pull requests.",
      },
      {
        type: "heading",
        text: "Name the assets and entry points",
      },
      {
        type: "paragraph",
        text: "List what an attacker would want: account takeover, data exfiltration, privilege escalation, or abuse of expensive operations. Then list how requests arrive — public endpoints, authenticated routes, admin tools, webhooks and background jobs. The model is incomplete until both lists exist on the same page.",
      },
      {
        type: "heading",
        text: "Draw trust boundaries explicitly",
      },
      {
        type: "paragraph",
        text: "Mark where identity is established, where authorization is enforced, and where input crosses into privileged subsystems. Ask what happens if a token is stolen, a webhook is forged, or an internal service is called directly. The output should be a short set of controls you can verify in code — not a poster that nobody updates.",
      },
    ],
  },
  {
    slug: "how-content-security-policy-breaks-an-xss-chain",
    title: "How Content Security Policy Breaks an XSS Chain",
    excerpt:
      "Where CSP interrupts script injection in practice, what still leaks through, and how to read a policy like an engineer rather than a checklist.",
    category: "Secure Coding",
    publishedAt: "2026-06-26",
    readingTimeMinutes: 10,
    body: [
      {
        type: "paragraph",
        text: "XSS is a chain: injection point, execution context, and a useful sink. Content Security Policy is most effective when it breaks that chain before attacker-controlled markup becomes executable script — not when it is pasted as a compliance badge.",
      },
      {
        type: "heading",
        text: "Script sources and nonce discipline",
      },
      {
        type: "paragraph",
        text: "A policy that allows 'unsafe-inline' without nonces or hashes largely fails at stopping reflected and stored script injection. Prefer nonces or hashes for first-party scripts, lock down script-src, and treat every inline handler as a debt item. Object and base-uri directives close common escape hatches that policy authors overlook.",
      },
      {
        type: "heading",
        text: "What CSP does not finish for you",
      },
      {
        type: "paragraph",
        text: "CSP does not replace output encoding, sanitization of rich text, or careful use of dangerous DOM APIs. It also will not stop every data exfiltration path if connect-src is wide open. Read reports from report-uri or reporting endpoints, tighten iteratively, and keep the application-layer defenses in place.",
      },
    ],
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

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}
