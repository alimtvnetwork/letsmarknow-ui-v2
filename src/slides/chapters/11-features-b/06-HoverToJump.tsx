import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { MousePointer2, ExternalLink } from "lucide-react";

export default function HoverToJump() {
  return (
    <SlideLayout chapter="Chapter 11 · Find & Visualize" pageLabel="11.06">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Hover to jump · <span className="text-[hsl(var(--slide-accent))]">peek without leaving</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">
          Hover any Item · 250 ms delay · preview card · open without losing your place.
        </p>

        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 relative">
            <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">List</div>
            <div className="space-y-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-2 py-2 rounded ${
                    i === 2 ? "bg-[hsl(var(--slide-accent)_/_0.1)] border border-[hsl(var(--slide-accent)_/_0.4)]" : ""
                  }`}
                >
                  <div className="w-3 h-3 rounded-sm bg-[hsl(var(--slide-muted)_/_0.5)]" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">Article title {i + 1}</div>
                    <div className="text-xs text-[hsl(var(--slide-muted))]">domain.com</div>
                  </div>
                  {i === 2 && <MousePointer2 className="w-4 h-4 text-[hsl(var(--slide-accent))]" />}
                </div>
              ))}
            </div>

            {/* preview card */}
            <div className="absolute top-32 left-72 w-72 rounded-xl border border-[hsl(var(--slide-accent)_/_0.5)] bg-[hsl(var(--slide-bg))] shadow-2xl shadow-[hsl(var(--slide-accent)_/_0.2)] overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[hsl(var(--slide-accent)_/_0.3)] to-[hsl(var(--slide-surface-2))]" />
              <div className="p-3">
                <div className="text-sm font-bold mb-1">Article title 3</div>
                <div className="text-xs text-[hsl(var(--slide-muted))] mb-2">linear.app · saved 3 days ago</div>
                <p className="text-xs text-[hsl(var(--slide-fg))]/75 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur. The OG description renders here so you can decide
                  whether to open the tab without leaving your current view.
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-[hsl(var(--slide-accent))]">
                  <ExternalLink className="w-3 h-3" /> Click to open · ⌘ for new tab
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              ["Trigger", "Hover for 250 ms · cursor must be still"],
              ["Dismiss", "Move cursor away or press Esc"],
              ["Click behaviour", "Open in current tab · ⌘ for new tab · ⌥ to reveal in tree"],
              ["Preview content", "OG image · description · domain · tags · saved-at"],
              ["Performance", "Preview cached on first hover · subsequent <16 ms"],
              ["Accessibility", "Respects prefers-reduced-motion · keyboard-only users get focus-card on Tab"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
                <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-accent))] mb-1">{k}</div>
                <div className="text-sm text-[hsl(var(--slide-fg))]/85">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
