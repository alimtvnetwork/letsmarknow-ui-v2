import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Sparkles } from "lucide-react";

export default function OnboardingTryIt() {
  return (
    <SlideLayout chapter="Chapter 6 · Onboarding" pageLabel="06.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Step 4 · <span className="text-[hsl(var(--slide-accent))]">try it now</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">Seeded sample items · interactive coachmarks · finishes when user does one real save.</p>
        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] flex-1 p-8 flex flex-col">
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { t: "Welcome to Lets Mark Now", d: "lmn.docs", tag: "intro" },
              { t: "Press Alt+Shift+S to save", d: "tip.tutorial", tag: "shortcut" },
              { t: "Drag to reorder", d: "tip.tutorial", tag: "drag" },
              { t: "★ Star to pin", d: "tip.tutorial", tag: "starring" },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] p-4">
                <div className="w-3 h-3 rounded bg-[hsl(var(--slide-accent))] mb-2" />
                <div className="text-base font-semibold mb-1 leading-tight">{c.t}</div>
                <div className="text-xs text-[hsl(var(--slide-muted))] font-mono mb-2">{c.d}</div>
                <span className="text-xs px-2 py-0.5 rounded bg-[hsl(var(--slide-bg))]">#{c.tag}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-[hsl(var(--slide-accent)_/_0.12)] border border-[hsl(var(--slide-accent)_/_0.3)] p-6 flex items-center gap-4 mt-auto">
            <Sparkles className="w-8 h-8 text-[hsl(var(--slide-accent))] shrink-0" />
            <div>
              <div className="text-xl font-semibold">Now save your first real tab.</div>
              <div className="text-base text-[hsl(var(--slide-muted))]">Pick any open tab in this window. We'll celebrate, then take you to your dashboard.</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
