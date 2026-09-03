import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

/**
 * Homepage shell during Phase 2 header work.
 * Section landmarks exist so navigation anchors are real — not dead links.
 * Hero and full section compositions are intentionally deferred.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          aria-label="Publication introduction"
          className="border-b border-border-dark bg-ink py-16 md:py-20"
        >
          <Container>
            <p className="text-meta m-0 text-accent">Editorial shell</p>
            <h1 className="text-heading-2 mt-4 m-0 max-w-3xl text-text-on-dark">
              {SITE_NAME}
            </h1>
            <p className="text-body-lg measure-hero mt-4 m-0 text-muted-on-dark">
              {SITE_TAGLINE}
            </p>
            <p className="text-body measure-body mt-6 m-0 text-muted-on-dark">
              Header navigation is live. Hero and featured research arrive in
              the next Phase 2 step.
            </p>
          </Container>
        </section>

        <SectionLandmark
          id="research"
          eyebrow="01 · Research"
          title="Research"
          note="Latest research section placeholder — content in Phase 3."
          surface="paper"
        />
        <SectionLandmark
          id="topics"
          eyebrow="02 · Topics"
          title="Topics"
          note="Topic index placeholder — content in Phase 3."
          surface="paper"
        />
        <SectionLandmark
          id="learning"
          eyebrow="03 · Learning"
          title="Learning"
          note="Learning tracks placeholder — content in Phase 3."
          surface="ink"
        />
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
