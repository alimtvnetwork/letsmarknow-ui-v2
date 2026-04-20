import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  /** Optional eyebrow/chapter label shown top-left */
  chapter?: string;
  /** Optional slide number / total shown bottom-right */
  pageLabel?: string;
  /** Padding preset */
  padded?: boolean;
}

/**
 * SlideLayout — every slide renders inside this 1920x1080 canvas.
 * Uses slide-deck design tokens. Always wrap content in <SlideLayout>.
 */
export function SlideLayout({
  children,
  className,
  chapter,
  pageLabel,
  padded = true,
}: SlideLayoutProps) {
  return (
    <div
      className={cn(
        "slide-content relative w-full h-full overflow-hidden",
        "bg-[hsl(var(--slide-bg))] text-[hsl(var(--slide-fg))]",
        padded && "px-24 py-20",
        className
      )}
      style={{ width: 1920, height: 1080 }}
    >
      {chapter && (
        <div className="absolute top-10 left-24 text-sm uppercase tracking-[0.25em] text-[hsl(var(--slide-muted))] font-medium">
          {chapter}
        </div>
      )}
      {children}
      {pageLabel && (
        <div className="absolute bottom-8 right-24 text-sm text-[hsl(var(--slide-muted))] tabular-nums">
          {pageLabel}
        </div>
      )}
      {/* Subtle accent gradient corner */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--slide-accent)) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
