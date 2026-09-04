import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/ui/container";
import { NAV_CTA, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Global publication header — typographic mark, editorial nav, restrained CTA.
 * Server Component; only MobileNav is a client island.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-dark bg-ink">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link
          href="/"
          className="shrink-0 text-base font-medium tracking-[-0.02em] text-text-on-dark transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-accent sm:text-lg"
        >
          {SITE_NAME}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center lg:flex"
        >
          <ul className="m-0 flex list-none items-center gap-8 p-0">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm text-muted-on-dark transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
                    "hover:text-text-on-dark",
                    "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-[var(--duration-fast)] after:ease-[var(--ease-standard)]",
                    "hover:after:scale-x-100 focus-visible:text-text-on-dark focus-visible:after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href={NAV_CTA.href}
            className="group inline-flex items-center gap-2 text-sm font-medium text-text-on-dark transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-accent"
          >
            <span className="underline-offset-4 group-hover:underline">
              {NAV_CTA.label}
            </span>
            <span
              aria-hidden="true"
              className="text-accent transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
