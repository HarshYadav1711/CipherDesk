/**
 * Site identity constants.
 * CipherDesk is the approved demo product name — not the hiring startup’s company name.
 */
export const SITE_NAME = "CipherDesk";

export const SITE_TAGLINE =
  "Cybersecurity research, engineering notes and practical security deep dives.";

export const SITE_DESCRIPTION =
  "Cybersecurity research, engineering notes and practical security deep dives.";

/** Section anchors — rooted so they resolve from article routes too. */
export const NAV_LINKS = [
  { href: "/#research", label: "Research" },
  { href: "/#topics", label: "Topics" },
  { href: "/#learning", label: "Learning" },
  { href: "/#about", label: "About" },
] as const;

export const NAV_CTA = {
  href: "/#research",
  label: "Browse research",
} as const;
