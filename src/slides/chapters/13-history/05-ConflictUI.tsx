import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { AlertTriangle } from "lucide-react";

export default function ConflictUI() {
  return (
    <SlideLayout chapter="Chapter 13 · History, Activity & Conflicts" pageLabel="13.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Surfacing conflicts · <span className="text-[hsl(var(--slide-accent))]">when humans must decide</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Auto-merge handles 99% of cases. The 1%: simultaneous renames to different values. We ask, never guess.
        </p>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-3xl rounded-2xl border-2 border-[hsl(45_90%_60%_/_0.5)] bg-[hsl(var(--slide-surface))] p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-[hsl(45_90%_60%)]" />
              <h2 className="text-2xl font-bold">Resolve naming conflict</h2>
            </div>
            <p className="text-[hsl(var(--slide-muted))] mb-6">
              You and Marcus renamed this collection at the same time. Pick one — or write something new.
            </p>

            <div className="space-y-3 mb-6">
              <button className="w-full text-left px-5 py-4 rounded-lg border-2 border-[hsl(var(--slide-accent)_/_0.5)] bg-[hsl(var(--slide-accent)_/_0.08)]">
                <div className="text-xs text-[hsl(var(--slide-muted))] mb-1">Anya wrote (you)</div>
                <div className="text-lg font-semibold">Marketing Plan</div>
              </button>
              <button className="w-full text-left px-5 py-4 rounded-lg border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))]">
                <div className="text-xs text-[hsl(var(--slide-muted))] mb-1">Marcus wrote</div>
                <div className="text-lg font-semibold">Q2 Marketing Plan</div>
              </button>
              <button className="w-full text-left px-5 py-4 rounded-lg border border-dashed border-[hsl(var(--slide-border))] text-[hsl(var(--slide-muted))]">
                + Write a custom name
              </button>
              <button className="w-full text-left px-5 py-4 rounded-lg border border-dashed border-[hsl(var(--slide-border))] text-[hsl(var(--slide-muted))]">
                Keep both (creates a duplicate)
              </button>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-5 py-2 rounded-lg text-[hsl(var(--slide-muted))]">Cancel</button>
              <button className="px-5 py-2 rounded-lg bg-[hsl(var(--slide-accent))] text-black font-semibold">Resolve</button>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
