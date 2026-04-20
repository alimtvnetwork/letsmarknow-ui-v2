import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrowserMockProps {
  url?: string;
  children: ReactNode;
  className?: string;
}

/** A Chrome-like browser frame for screenshots / mockups inside slides. */
export function BrowserMock({ url = "letsmarknow.com", children, className }: BrowserMockProps) {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden border shadow-2xl",
        "border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))]",
        className
      )}
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-[hsl(var(--slide-surface-2))] border-b border-[hsl(var(--slide-border))]">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[hsl(var(--slide-danger))]" />
          <span className="w-3 h-3 rounded-full bg-[hsl(var(--slide-warning))]" />
          <span className="w-3 h-3 rounded-full bg-[hsl(var(--slide-success))]" />
        </div>
        <div className="flex-1 mx-4 px-4 py-1.5 rounded-md bg-[hsl(var(--slide-bg))] text-sm text-[hsl(var(--slide-muted))] font-mono truncate">
          {url}
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-bg))]">{children}</div>
    </div>
  );
}
