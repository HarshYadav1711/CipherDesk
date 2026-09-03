"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { NAV_CTA, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Narrow-viewport navigation.
 * Isolated client boundary — only open/close state lives here.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) return;

    const frame = window.requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-control border border-border-dark text-text-on-dark transition-[border-color,background-color] duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:border-border-dark-strong hover:bg-ink-raised"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={toggle}
      >
        {open ? (
          <X aria-hidden="true" className="size-5" strokeWidth={1.75} />
        ) : (
          <Menu aria-hidden="true" className="size-5" strokeWidth={1.75} />
        )}
      </button>

      <div
        id={panelId}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={cn(
          "fixed inset-x-0 top-16 z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border-dark bg-ink-raised lg:top-[4.5rem]",
          "transition-[opacity,visibility,transform] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="px-[var(--gutter)] py-4">
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-control px-3 py-3 text-sm text-text-on-dark transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:bg-ink-soft hover:text-accent"
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 border-t border-border-dark pt-3">
            <a
              href={NAV_CTA.href}
              className="group inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-accent transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-accent-hover"
              onClick={close}
            >
              <span>{NAV_CTA.label}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
