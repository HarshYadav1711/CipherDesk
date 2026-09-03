import type { Topic } from "@/types/content";

/**
 * Approved topic taxonomy (PRD / Architecture).
 * UI for this index ships in a later Phase 3 step.
 */
export const topics: Topic[] = [
  {
    slug: "web-security",
    name: "Web Security",
    description:
      "Browser boundaries, CSP, CORS and the trust model of the modern web platform.",
  },
  {
    slug: "appsec",
    name: "AppSec",
    description:
      "Secure application architecture, input handling and practical vulnerability patterns.",
  },
  {
    slug: "identity",
    name: "Identity",
    description:
      "Sessions, OAuth, tokens and authorization boundaries between users and services.",
  },
  {
    slug: "cloud",
    name: "Cloud",
    description:
      "Cloud attack surfaces, identity-aware controls and shared-responsibility pitfalls.",
  },
  {
    slug: "secure-coding",
    name: "Secure Coding",
    description:
      "Defensive coding patterns that reduce XSS, injection and unsafe defaults at the source.",
  },
  {
    slug: "threat-modelling",
    name: "Threat Modelling",
    description:
      "Structured ways to reason about assets, adversaries and trust before writing more code.",
  },
];
