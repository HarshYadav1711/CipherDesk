import { Container } from "@/components/ui/container";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Compact editorial footer (Design.md §20).
 * In-page anchors only — no fabricated company or social facts.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-text-on-dark">
      <Container className="py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-md">
            <p className="m-0 text-base font-medium tracking-[-0.02em]">
              {SITE_NAME}
            </p>
            <p className="text-body mt-2 m-0 text-muted-on-dark">
              {SITE_TAGLINE}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-3 p-0">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "text-sm text-muted-on-dark transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
                      "hover:text-accent focus-visible:text-accent",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border-dark pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-meta m-0 text-muted-on-dark">
            Built for people who want to understand why.
          </p>
          <p className="text-meta m-0 text-muted-on-dark">
            © {year} {SITE_NAME}
          </p>
        </div>
      </Container>
    </footer>
  );
}
