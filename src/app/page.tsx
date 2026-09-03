import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EditorialLink } from "@/components/ui/editorial-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

/**
 * Phase 1 verification shell only — not the homepage composition.
 * Confirms tokens, type scale, surfaces, focus, and primitives.
 */
export default function Home() {
  return (
    <main>
      <section className="section-padding border-b border-border-dark bg-ink">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            as="h1"
            eyebrow="Design system · Phase 1"
            title={SITE_NAME}
            description={SITE_TAGLINE}
          />

          <div className="flex flex-wrap items-center gap-4">
            <Button>Primary action</Button>
            <EditorialLink href="#paper-surface">Review surfaces</EditorialLink>
          </div>

          <div className="max-w-xl rounded-feature border border-border-dark bg-ink-raised p-6">
            <Eyebrow>Web Security · 12 min read</Eyebrow>
            <p className="text-title mt-3 m-0 text-text-on-dark">
              Raised dark surface with mono metadata
            </p>
            <p className="text-body measure-excerpt mt-3 m-0 text-muted-on-dark">
              Borders and surface contrast carry hierarchy. Cyan stays on
              labels and controls, not body copy.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="paper-surface"
        className="section-padding bg-paper text-text-on-light"
      >
        <Container className="flex flex-col gap-8">
          <SectionHeading
            tone="on-light"
            eyebrow="Warm paper surface"
            title="Editorial reading surface"
            description="Light sections preserve publication pacing against the midnight ink identity."
          />

          <p className="text-body measure-body m-0 text-muted-on-light">
            Body measure stays within a comfortable line length. Focus rings use
            the accent token; motion reduces when the user prefers reduced
            motion.
          </p>

          <div className="rounded-card border border-border-light bg-paper-raised p-5">
            <Eyebrow tone="on-light">01 · Identity</Eyebrow>
            <p className="text-title mt-2 m-0 text-text-on-light">
              Standard card radius on paper-raised
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
