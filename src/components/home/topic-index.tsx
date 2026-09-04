import { TopicRow } from "@/components/home/topic-row";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { topics } from "@/content/topics";

/**
 * Topic Index — editorial list from typed taxonomy (Design.md §17).
 * Warm-paper surface at the paper → midnight boundary.
 */
export function TopicIndex() {
  return (
    <section
      id="topics"
      aria-labelledby="topic-index-heading"
      className="scroll-mt-20 border-b border-border-dark bg-paper section-padding text-text-on-light"
    >
      <Container>
        <SectionHeading
          tone="on-light"
          as="h2"
          headingId="topic-index-heading"
          eyebrow="02 · Topics"
          title="Topic Index"
          description="Browse the security subjects CipherDesk covers — from browser boundaries to threat modelling."
        />

        <ol className="m-0 mt-12 list-none border-t border-border-light p-0 pt-2 md:mt-14 md:pt-3">
          {topics.map((topic, index) => (
            <TopicRow key={topic.slug} topic={topic} index={index + 1} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
