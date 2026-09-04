import Link from "next/link";

import { Container } from "@/components/ui/container";

/**
 * Closing CTA — research action only (Design.md §19).
 * No newsletter form or email capture without a real backend.
 */
export function NewsletterCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="scroll-mt-20 border-b border-border-dark bg-ink section-padding text-text-on-dark"
    >
      <Container>
        <div className="max-w-2xl border-t border-accent/35 pt-10 md:pt-12">
          <h2
            id="final-cta-heading"
            className="text-heading-2 m-0 text-text-on-dark"
          >
            Security research worth reading.
          </h2>

          <p className="text-body-lg measure-hero mt-5 m-0 text-muted-on-dark">
            Practical technical breakdowns on browser boundaries, identity, APIs
            and secure architecture.
          </p>

          <div className="mt-8">
            <Link
              href="/#research"
              className="inline-flex items-center gap-2 rounded-control bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink transition-[background-color] duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:bg-accent-hover"
            >
              Browse latest research
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
