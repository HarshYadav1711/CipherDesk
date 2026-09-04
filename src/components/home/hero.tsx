import { FeaturedStory } from "@/components/home/featured-story";
import { Container } from "@/components/ui/container";
import { EditorialLink } from "@/components/ui/editorial-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getFeaturedArticle } from "@/content/articles";

/**
 * Asymmetric editorial hero — copy left, featured story right.
 * Not a centered SaaS template.
 */
export function Hero() {
  const featured = getFeaturedArticle();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border-dark bg-ink"
    >
      <HeroMotif />

      <Container className="relative py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <Eyebrow>CipherDesk / Security Research</Eyebrow>

            <h1
              id="hero-heading"
              className="text-hero mt-5 m-0 text-text-on-dark sm:mt-6"
            >
              <span className="block">Understand the systems</span>
              <span className="block">attackers depend on.</span>
            </h1>

            <p className="text-body-lg measure-hero mt-5 m-0 text-muted-on-dark sm:mt-6">
              Practical cybersecurity research, engineering notes and technical
              deep dives into the systems modern applications depend on.
            </p>

            <div className="mt-7 sm:mt-8">
              <EditorialLink href="/#research">Explore research</EditorialLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <FeaturedStory article={featured} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroMotif() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-motif-grid absolute inset-y-0 right-0 w-full max-w-3xl opacity-[0.32]" />

      <span className="absolute top-8 right-[var(--gutter)] hidden font-mono text-meta text-muted-on-dark/45 lg:block">
        0.0 · 12
      </span>
      <span className="absolute right-[var(--gutter)] bottom-8 hidden font-mono text-meta text-muted-on-dark/45 lg:block">
        COL 8–12
      </span>

      <div className="absolute top-0 left-[var(--gutter)] h-px w-14 bg-accent/35 md:left-[max(var(--gutter),calc((100%-80rem)/2+var(--gutter)))]" />
    </div>
  );
}
