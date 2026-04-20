import { SlideLayout } from "@/slides/_layout/SlideLayout";

export default function ListGridCompact() {
  return (
    <SlideLayout chapter="Chapter 11 · Find & Visualize" pageLabel="11.04">
      <div className="h-full flex flex-col pt-10">
        <h1 className="text-6xl font-bold tracking-tight mb-2">
          Density preview · <span className="text-[hsl(var(--slide-accent))]">same data, three densities</span>
        </h1>
        <p className="text-lg text-[hsl(var(--slide-muted))] mb-6">Visual side-by-side of the three densities listed on the previous slide. No new options — just how they actually look.</p>

        <div className="grid grid-cols-3 gap-4 flex-1">
          {/* List */}
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] flex flex-col overflow-hidden">
            <div className="px-4 py-2 border-b border-[hsl(var(--slide-border))] text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))]">
              List
            </div>
            <div className="p-2 space-y-1 flex-1 overflow-hidden">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2 px-2 py-2 rounded border border-[hsl(var(--slide-border))]">
                  <div className="w-3 h-3 rounded-sm bg-[hsl(var(--slide-muted)_/_0.5)]" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium truncate">Article title goes here {i + 1}</div>
                    <div className="text-[10px] text-[hsl(var(--slide-muted))]">domain.com</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] flex flex-col overflow-hidden">
            <div className="px-4 py-2 border-b border-[hsl(var(--slide-border))] text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))]">
              Grid
            </div>
            <div className="p-2 grid grid-cols-2 gap-2 flex-1 overflow-hidden content-start">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded border border-[hsl(var(--slide-border))] overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-[hsl(var(--slide-accent)_/_0.2)] to-[hsl(var(--slide-surface-2))]" />
                  <div className="p-1.5">
                    <div className="text-[10px] font-medium truncate">Card {i + 1}</div>
                    <div className="text-[9px] text-[hsl(var(--slide-muted))]">domain.com</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compact */}
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] flex flex-col overflow-hidden">
            <div className="px-4 py-2 border-b border-[hsl(var(--slide-border))] text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))]">
              Compact
            </div>
            <div className="p-2 flex-1 overflow-hidden font-mono text-[10px] leading-tight">
              {Array.from({ length: 22 }).map((_, i) => (
                <div key={i} className="flex items-center gap-1.5 px-1 py-0.5">
                  <span className="text-[hsl(var(--slide-muted))] w-4">{i + 1}.</span>
                  <span className="w-2 h-2 rounded-sm bg-[hsl(var(--slide-muted)_/_0.5)]" />
                  <span className="truncate flex-1">Article title goes here {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-4 text-xs">
          {[
            ["List", "8 items visible · 1.2× row · subtitle"],
            ["Grid", "6 cards · OG image · ideal for design libraries"],
            ["Compact", "22+ items · keyboard-only navigation"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-[hsl(var(--slide-border))] p-3">
              <div className="text-[hsl(var(--slide-accent))] uppercase tracking-widest">{k}</div>
              <div className="text-[hsl(var(--slide-fg))]/80 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
