import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_NAME } from "@/lib/constants";

/**
 * Compact About — honest demo-product framing, no fabricated company facts.
 * Provides the #about section anchor used by header and footer nav.
 */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-b border-border-dark bg-ink section-padding text-text-on-dark"
    >
      <Container>
        <SectionHeading
          tone="on-dark"
          as="h2"
          headingId="about-heading"
          eyebrow="04 · About"
          title="About"
          description={`${SITE_NAME} is a cybersecurity editorial and research homepage demo — built to show how a serious technical publication can look, read and scale.`}
        />
      </Container>
    </section>
  );
}
