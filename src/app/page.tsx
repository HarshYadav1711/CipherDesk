import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { LatestResearch } from "@/components/home/latest-research";
import { LearningTracks } from "@/components/home/learning-tracks";
import { NewsletterCta } from "@/components/home/newsletter-cta";
import { TopicIndex } from "@/components/home/topic-index";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

/**
 * CipherDesk homepage — complete required one-page scope.
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
        <About />
        <NewsletterCta />
      </main>
      <SiteFooter />
    </>
  );
}
