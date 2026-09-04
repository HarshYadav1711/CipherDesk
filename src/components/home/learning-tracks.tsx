import { LearningTrackStep } from "@/components/home/learning-track-step";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { learningTracks } from "@/content/learning-tracks";

/**
 * Learning Tracks — dark curriculum map (Design.md §18).
 * Structured progression only; not a live LMS or user-progress UI.
 */
export function LearningTracks() {
  const tracks = [...learningTracks].sort((a, b) => a.order - b.order);

  return (
    <section
      id="learning"
      aria-labelledby="learning-tracks-heading"
      className="scroll-mt-20 border-b border-border-dark bg-ink section-padding text-text-on-dark"
    >
      <Container>
        <SectionHeading
          tone="on-dark"
          as="h2"
          headingId="learning-tracks-heading"
          eyebrow="03 · Learning"
          title="Learning Tracks"
          description="A structured path from foundations to secure architecture — a curriculum map for how the material builds, not a live course platform."
        />

        <div className="mt-12 rounded-[var(--radius-feature)] border border-border-dark bg-ink-raised p-6 md:mt-14 md:p-8 lg:p-10">
          <p className="text-meta m-0 text-accent">Learning path</p>

          <ol className="m-0 mt-8 list-none p-0 lg:mt-10 lg:grid lg:grid-cols-5 lg:gap-x-6 xl:gap-x-8">
            {tracks.map((track, index) => (
              <LearningTrackStep
                key={track.slug}
                track={track}
                isLast={index === tracks.length - 1}
                className={index < tracks.length - 1 ? "mb-2 lg:mb-0" : undefined}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
