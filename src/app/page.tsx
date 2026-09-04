import { Hero } from "@/components/home/hero";
import { LatestResearch } from "@/components/home/latest-research";
import { LearningTracks } from "@/components/home/learning-tracks";
import { TopicIndex } from "@/components/home/topic-index";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";

/**
 * Phase 3: header, hero, featured story, Latest Research, Topic Index,
 * Learning Tracks. CTA / footer UI deferred.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <LatestResearch />
        <TopicIndex />
        <LearningTracks />

        <SectionLandmark
          id="about"
          eyebrow="04 · About"
          title="About"
          note="CipherDesk is a cybersecurity editorial demo product identity."
          surface="ink"
        />
      </main>
    </>
  );
}

function SectionLandmark({
  id,
  eyebrow,
  title,
  note,
  surface,
}: {
  id: string;
  eyebrow: string;
  title: string;
  note: string;
  surface: "ink" | "paper";
}) {
  const onPaper = surface === "paper";

  return (
    <section
      id={id}
      className={
        onPaper
          ? "scroll-mt-20 border-b border-border-light bg-paper section-padding text-text-on-light"
          : "scroll-mt-20 border-b border-border-dark bg-ink section-padding text-text-on-dark"
      }
    >
      <Container>
        <p
          className={
            onPaper
              ? "text-meta m-0 text-muted-on-light"
              : "text-meta m-0 text-accent"
          }
        >
          {eyebrow}
        </p>
        <h2
          className={
            onPaper
              ? "text-heading-3 mt-3 m-0 text-text-on-light"
              : "text-heading-3 mt-3 m-0 text-text-on-dark"
          }
        >
          {title}
        </h2>
        <p
          className={
            onPaper
              ? "text-body measure-body mt-3 m-0 text-muted-on-light"
              : "text-body measure-body mt-3 m-0 text-muted-on-dark"
          }
        >
          {note}
        </p>
      </Container>
    </section>
  );
}
