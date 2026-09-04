import type { LearningTrack } from "@/types/content";
import { cn } from "@/lib/utils";

type LearningTrackStepProps = {
  track: LearningTrack;
  isLast?: boolean;
  className?: string;
};

/**
 * One step in the curriculum map.
 * Presentational only — no course routes, no progress state.
 */
export function LearningTrackStep({
  track,
  isLast = false,
  className,
}: LearningTrackStepProps) {
  const number = String(track.order).padStart(2, "0");

  return (
    <li className={cn("relative flex flex-col", className)}>
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-[0.8125rem] leading-none tracking-[0.08em] tabular-nums text-accent"
          aria-hidden="true"
        >
          {number}
        </span>

        {/* Desktop: horizontal connector toward the next step */}
        {!isLast ? (
          <span
            aria-hidden="true"
            className="relative hidden h-px min-w-0 flex-1 bg-border-dark lg:block"
          >
            <span className="absolute right-0 top-1/2 size-1 -translate-y-1/2 rounded-full bg-accent" />
          </span>
        ) : null}
      </div>

      <h3 className="text-title mt-4 m-0 text-text-on-dark">{track.title}</h3>

      <p className="text-body mt-2 m-0 max-w-[28ch] text-muted-on-dark">
        {track.description}
      </p>

      <p className="text-meta mt-4 m-0 text-muted-on-dark">{track.level}</p>

      {/* Mobile: vertical connector */}
      {!isLast ? (
        <div
          aria-hidden="true"
          className="mt-6 mb-2 flex flex-col items-start gap-1 lg:hidden"
        >
          <span className="ml-[0.55rem] h-7 w-px bg-border-dark" />
          <span className="ml-[0.2rem] font-mono text-[0.65rem] leading-none text-accent">
            ↓
          </span>
        </div>
      ) : null}
    </li>
  );
}
