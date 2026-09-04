import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SITE_NAME } from "@/lib/constants";

/**
 * Shared 404 — used by notFound() for unknown article slugs and missing routes.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col bg-ink text-text-on-dark">
      <Container className="flex flex-1 flex-col justify-center py-20">
        <p className="text-meta m-0 text-accent">404</p>
        <h1 className="text-heading-2 mt-4 m-0">Page not found</h1>
        <p className="text-body-lg measure-hero mt-4 m-0 text-muted-on-dark">
          That route is not part of the {SITE_NAME} demo content.
        </p>
        <p className="mt-8 m-0">
          <Link
            href="/#research"
            className="text-body font-medium text-text-on-dark transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-accent"
          >
            Browse research →
          </Link>
        </p>
      </Container>
    </div>
  );
}
