import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Hand, ChevronsLeft, MoreHorizontal, Move } from "lucide-react";

const gestures = [
  { icon: ChevronsLeft, name: "Swipe left", action: "Archive item", feedback: "Card slides · gold tint · undo toast" },
  { icon: Move, name: "Long-press", action: "Multi-select mode", feedback: "Haptic · checkboxes appear · toolbar slides up" },
  { icon: Hand, name: "Pull down", action: "Refresh", feedback: "Spinner appears at 80px · fires at 120px" },
  { icon: MoreHorizontal, name: "3-finger tap", action: "Switch view mode", feedback: "Cycles List → Grid → Compact" },
];

const breakpoints = [
  { px: "< 480", name: "Mobile", layout: "Single column · drawer nav · bottom action bar" },
  { px: "480–768", name: "Tablet portrait", layout: "Single column · sidebar drawer · top toolbar" },
  { px: "768–1024", name: "Tablet landscape", layout: "2-column · persistent sidebar · top toolbar" },
  { px: "> 1024", name: "Desktop", layout: "Full app shell · sidebar + main + inspector" },
];

export default function MobileGestures() {
  return (
    <SlideLayout chapter="Chapter 17 · PWA & Mobile" pageLabel="17.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Mobile · <span className="text-[hsl(var(--slide-accent))]">gestures + responsive</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Touch-first interactions feel native. Same data, four layouts. Every gesture has a keyboard equivalent on desktop.
        </p>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <h3 className="text-xl font-bold mb-5">Gestures</h3>
            <div className="space-y-3">
              {gestures.map((g) => (
                <div key={g.name} className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-4">
                  <div className="flex items-center gap-3 mb-1">
                    <g.icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                    <span className="font-semibold text-sm">{g.name}</span>
                    <span className="text-[hsl(var(--slide-muted))] text-sm">→ {g.action}</span>
                  </div>
                  <p className="text-xs text-[hsl(var(--slide-muted))] ml-7">{g.feedback}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <h3 className="text-xl font-bold mb-5">Breakpoints</h3>
            <div className="space-y-3">
              {breakpoints.map((b) => (
                <div key={b.px} className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-4">
                  <div className="flex items-baseline gap-3 mb-1">
                    <code className="text-sm font-mono text-[hsl(var(--slide-accent))]">{b.px} px</code>
                    <span className="font-semibold text-sm">{b.name}</span>
                  </div>
                  <p className="text-xs text-[hsl(var(--slide-muted))]">{b.layout}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-[hsl(var(--slide-muted))] mt-6">
          Touch targets ≥ 44×44 px · safe-area-inset for notches · `viewport-fit=cover` · reduced-motion respected.
        </p>
      </div>
    </SlideLayout>
  );
}
