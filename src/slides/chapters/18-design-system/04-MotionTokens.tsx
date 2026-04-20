import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Zap } from "lucide-react";

const durations = [
  { name: "instant", ms: 0, use: "Reduced-motion fallback" },
  { name: "fast", ms: 120, use: "Hover · button states · focus" },
  { name: "base", ms: 200, use: "Toast · popover · panel slide" },
  { name: "slow", ms: 320, use: "Modal · sheet · page transition" },
  { name: "lazy", ms: 600, use: "Hero reveal · onboarding choreography" },
];

const easings = [
  { name: "linear", curve: "linear", use: "Loops · spinners · progress" },
  { name: "out", curve: "cubic-bezier(0.16, 1, 0.3, 1)", use: "Default — element entering" },
  { name: "in", curve: "cubic-bezier(0.7, 0, 0.84, 0)", use: "Element leaving" },
  { name: "in-out", curve: "cubic-bezier(0.65, 0, 0.35, 1)", use: "State swaps · two-way" },
  { name: "spring", curve: "spring(1, 80, 12, 0)", use: "DnD · drawer · tactile feel" },
];

export default function MotionTokens() {
  return (
    <SlideLayout chapter="Chapter 18 · Design System Primer" pageLabel="18.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Motion · <span className="text-[hsl(var(--slide-accent))]">five durations, five curves</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Animation tokens are first-class. Every motion picks one duration + one easing. Reduced-motion always respected.
        </p>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="flex items-center gap-2 mb-5"><Zap className="w-5 h-5 text-[hsl(var(--slide-accent))]" /><h3 className="text-xl font-bold">Durations</h3></div>
            <div className="space-y-3">
              {durations.map((d) => (
                <div key={d.name} className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-3">
                  <div className="flex items-baseline gap-3 mb-1">
                    <code className="font-mono text-sm text-[hsl(var(--slide-accent))] w-16">{d.name}</code>
                    <code className="font-mono text-xs text-[hsl(var(--slide-muted))]">{d.ms}ms</code>
                  </div>
                  <p className="text-xs text-[hsl(var(--slide-muted))]">{d.use}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <h3 className="text-xl font-bold mb-5">Easings</h3>
            <div className="space-y-3">
              {easings.map((e) => (
                <div key={e.name} className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-3">
                  <div className="flex items-baseline gap-3 mb-1">
                    <code className="font-mono text-sm text-[hsl(var(--slide-accent))] w-16">{e.name}</code>
                    <code className="font-mono text-[10px] text-[hsl(var(--slide-muted))] truncate flex-1">{e.curve}</code>
                  </div>
                  <p className="text-xs text-[hsl(var(--slide-muted))]">{e.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-accent)_/_0.4)] bg-[hsl(var(--slide-accent)_/_0.05)] p-4 text-sm text-[hsl(var(--slide-muted))]">
          <span className="text-[hsl(var(--slide-fg))] font-semibold">prefers-reduced-motion:</span> motion under 200ms passes through · longer becomes instant or fades · parallax & autoplay always disabled.
        </div>
      </div>
    </SlideLayout>
  );
}
