import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Grid3x3, List, Rows, Columns } from "lucide-react";

export default function ExtNewTab() {
  const cards = Array.from({ length: 8 });
  return (
    <SlideLayout chapter="Chapter 7 · Extension" pageLabel="07.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">New Tab <span className="text-[hsl(var(--slide-accent))]">replaces chrome://newtab</span></h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">Where users actually live. Org rail · Sidebar tree · Collection canvas.</p>
        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1 flex flex-col">
          <div className="flex items-center gap-3 px-4 py-3 bg-[hsl(var(--slide-surface-2))] border-b border-[hsl(var(--slide-border))]">
            <div className="flex gap-2"><span className="w-3 h-3 rounded-full bg-[hsl(var(--slide-danger))]" /><span className="w-3 h-3 rounded-full bg-[hsl(var(--slide-warning))]" /><span className="w-3 h-3 rounded-full bg-[hsl(var(--slide-success))]" /></div>
            <div className="flex-1 mx-4 px-4 py-1.5 rounded-md bg-[hsl(var(--slide-bg))] text-sm text-[hsl(var(--slide-muted))] font-mono">chrome://newtab</div>
          </div>
          <div className="flex flex-1">
            <div className="w-16 bg-[hsl(var(--slide-surface-2))] border-r border-[hsl(var(--slide-border))] flex flex-col items-center py-4 gap-3">
              <div className="w-9 h-9 rounded-lg bg-[hsl(var(--slide-accent))] flex items-center justify-center font-bold text-sm text-[hsl(var(--slide-accent-fg))]">PE</div>
              <div className="w-9 h-9 rounded-lg bg-[hsl(var(--slide-muted)_/_0.3)] flex items-center justify-center font-bold text-sm">AP</div>
              <div className="w-9 h-9 rounded-lg border border-dashed border-[hsl(var(--slide-border))] flex items-center justify-center text-sm text-[hsl(var(--slide-muted))]">+</div>
            </div>
            <div className="w-64 border-r border-[hsl(var(--slide-border))] p-4">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">Personal</div>
              <div className="space-y-1.5 text-sm">
                {["📚 Read later", "🔧 Quick Tools", "📈 Marketing", "🧪 Experiments", "🏖 Inspiration"].map((c, i) => (
                  <div key={c} className={`px-2 py-1.5 rounded-md ${i === 2 ? "bg-[hsl(var(--slide-accent)_/_0.15)] text-[hsl(var(--slide-accent))]" : ""}`}>{c}</div>
                ))}
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between mb-5">
                <div><h2 className="text-3xl font-bold">Marketing Improvements</h2><div className="text-sm text-[hsl(var(--slide-muted))]">8 items · 2 tags · last edited 2h ago</div></div>
                <div className="flex gap-1 p-1 rounded-lg bg-[hsl(var(--slide-surface-2))]"><Grid3x3 className="w-7 h-7 p-1.5 rounded-md bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-accent-fg))]" /><List className="w-7 h-7 p-1.5 text-[hsl(var(--slide-muted))]" /><Rows className="w-7 h-7 p-1.5 text-[hsl(var(--slide-muted))]" /><Columns className="w-7 h-7 p-1.5 text-[hsl(var(--slide-muted))]" /></div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {cards.map((_, i) => (
                  <div key={i} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] p-3 h-32 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-2"><div className="w-3 h-3 rounded bg-[hsl(var(--slide-muted)_/_0.5)]" /><span className="text-xs text-[hsl(var(--slide-muted))]">domain.com</span></div>
                    <div className="text-sm font-semibold leading-tight mb-auto">Item title placeholder</div>
                    <div className="flex gap-1"><span className="text-[10px] px-1.5 py-0.5 rounded bg-[hsl(var(--slide-bg))]">#tag</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
