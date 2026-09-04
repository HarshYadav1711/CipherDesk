import type { Topic } from "@/types/content";

/**
 * Approved topic taxonomy (PRD / Architecture).
 * Concise descriptions suit the editorial index layout.
 */
export const topics: Topic[] = [
  {
    slug: "web-security",
    name: "Web Security",
    description: "Browser boundaries, CSP and CORS",
  },
  {
    slug: "appsec",
    name: "AppSec",
    description: "Secure application architecture",
  },
  {
    slug: "identity",
    name: "Identity",
    description: "Sessions, OAuth and authorization",
  },
  {
    slug: "cloud",
    name: "Cloud",
    description: "Cloud attack surfaces and controls",
  },
  {
    slug: "secure-coding",
    name: "Secure Coding",
    description: "Implementation-level security",
  },
  {
    slug: "threat-modelling",
    name: "Threat Modelling",
    description: "Assets, boundaries and system risk",
  },
];
