import { SlideLayout } from "@/slides/_layout/SlideLayout";

const cursors = [
  { name: "Anya", color: "hsl(var(--slide-accent))", x: 28, y: 38 },
  { name: "Marcus", color: "hsl(280 70% 65%)", x: 62, y: 24 },
  { name: "Sora", color: "hsl(45 90% 60%)", x: 48, y: 64 },
];

export default function RealtimePresence() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Live presence · <span className="text-[hsl(var(--slide-accent))]">cursors, selections, typing</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Supabase Realtime channel per collection. Throttled to 30Hz, paused when tab is hidden.
        </p>

        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="col-span-2 relative rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden">
            <div className="grid grid-cols-3 gap-3 p-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-video rounded-lg bg-[hsl(var(--slide-surface-2))] border border-[hsl(var(--slide-border))]" />
              ))}
            </div>

            {cursors.map((c) => (
              <div key={c.name} className="absolute pointer-events-none" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path d="M2 2 L18 10 L10 12 L8 18 Z" fill={c.color} />
                </svg>
                <span className="ml-3 px-2 py-1 rounded text-xs font-medium text-black" style={{ background: c.color }}>
                  {c.name}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <h3 className="text-xl font-bold mb-4">In this collection</h3>
            <div className="space-y-3">
              {cursors.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-black" style={{ background: c.color }}>
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-[hsl(var(--slide-muted))]">editing · 2s ago</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[hsl(var(--slide-border))] text-xs text-[hsl(var(--slide-muted))] space-y-1">
              <div>channel: <code className="text-[hsl(var(--slide-fg))]">collection:c_8x2k</code></div>
              <div>events: cursor · selection · typing</div>
              <div>throttle: 33ms · idle 60s → drop</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
