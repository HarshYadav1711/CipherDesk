import type { LearningTrack } from "@/types/content";

/**
 * Approved educational progression (PRD / Architecture).
 * Curriculum map only — not a live course platform.
 */
export const learningTracks: LearningTrack[] = [
  {
    slug: "fundamentals",
    order: 1,
    title: "Fundamentals",
    description:
      "Core security concepts, trust boundaries and how modern web systems fail.",
    level: "Foundation",
  },
  {
    slug: "browser-security",
    order: 2,
    title: "Browser Security",
    description:
      "Origins, cookies, isolation and the policies that shape browser trust.",
    level: "Foundation",
  },
  {
    slug: "authentication",
    order: 3,
    title: "Authentication",
    description:
      "Sessions, tokens, OAuth and the practical failure modes of identity systems.",
    level: "Intermediate",
  },
  {
    slug: "api-security",
    order: 4,
    title: "API Security",
    description:
      "Authorization, abuse cases and defending JSON APIs under real traffic.",
    level: "Intermediate",
  },
  {
    slug: "secure-architecture",
    order: 5,
    title: "Secure Architecture",
    description:
      "Designing systems where security boundaries are explicit and reviewable.",
    level: "Advanced",
  },
];
