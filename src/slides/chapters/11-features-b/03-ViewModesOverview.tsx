import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { List, LayoutGrid, AlignJustify, Network, Columns3 } from "lucide-react";

const modes = [
  { icon: List, name: "List", desc: "Title + favicon + tags · 1 line per Item · densest text view", best: "Triage, search results" },
  { icon: LayoutGrid, name: "Grid", desc: "OG-image cards · 3–6 cols · scannable thumbnails", best: "Visual / design content" },
  { icon: AlignJustify, name: "Compact", desc: "Title only · 40 lines per page · keyboard nav", best: "Power users, large libraries" },
  { icon: Network, name: "Mind-map", desc: "Items orbit Collection node · zoom + pan · Phase 3", best: "Exploration, presentations" },
  { icon: Columns3, name: "Column", desc: "Tab Extend kanban · one column per Group · drag", best: "Workflows, queues" },
];

export default function ViewModesOverview() {
  return (
    <SlideLayout chapter="Chapter 11 · Find & Visualize" pageLabel="11.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          View modes · <span className="text-[hsl(var(--slide-accent))]">five lenses, one library</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">
          Per-Collection preference · per-user override · synced across devices.
        </p>

        <div className="space-y-3 flex-1">
          {modes.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.name}
                className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-6 py-5 flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="w-32 shrink-0">
                  <div className="text-2xl font-bold">{m.name}</div>
                </div>
                <div className="flex-1 text-base text-[hsl(var(--slide-fg))]/85">{m.desc}</div>
                <div className="w-64 text-right text-sm">
                  <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))]">Best for</div>
                  <div className="text-[hsl(var(--slide-fg))]/85">{m.best}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 text-sm flex items-center gap-3">
          <code className="font-mono text-xs px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-accent))]">⌘1</code>
          <code className="font-mono text-xs px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-accent))]">⌘2</code>
          <code className="font-mono text-xs px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-accent))]">⌘3</code>
          <code className="font-mono text-xs px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-accent))]">⌘4</code>
          <code className="font-mono text-xs px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-accent))]">⌘5</code>
          <span className="text-[hsl(var(--slide-fg))]/85">switch view modes anywhere</span>
        </div>
      </div>
    </SlideLayout>
  );
}
