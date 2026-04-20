import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Plus, MoreHorizontal } from "lucide-react";

const columns = [
  { name: "Inbox", count: 12, color: "bg-sky-500", items: ["Pricing teardown — Linear", "RFC: Auth flow v3", "Notion · roadmap doc", "Tweet thread on RAG"] },
  { name: "Reading", count: 3, color: "bg-violet-500", items: ["MV3 service worker patterns", "shadcn/ui customization", "Designing for keyboard"] },
  { name: "Done", count: 47, color: "bg-emerald-500", items: ["Stripe pricing 2026", "Figma · wireframes v2", "Spec audit — phase 12"] },
  { name: "Archive", count: 210, color: "bg-slate-500", items: ["(210 items)"] },
];

export default function HierarchyColumnView() {
  return (
    <SlideLayout chapter="Chapter 9 · Browsing Hierarchy" pageLabel="09.06">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Column view · <span className="text-[hsl(var(--slide-accent))]">Tab Extend's gift, fixed</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8 max-w-5xl">
          Each column is a Group. Columns are draggable. WIP limits and auto-archive on Pro+.
        </p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex-1 overflow-hidden">
          <div className="grid grid-cols-4 gap-4 h-full">
            {columns.map((col) => (
              <div
                key={col.name}
                className="rounded-xl bg-[hsl(var(--slide-surface-2))] border border-[hsl(var(--slide-border))] flex flex-col overflow-hidden"
              >
                <div className="flex items-center gap-2 px-3 py-2.5 border-b border-[hsl(var(--slide-border))]">
                  <span className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                  <span className="font-semibold text-base flex-1">{col.name}</span>
                  <span className="text-xs text-[hsl(var(--slide-muted))] px-1.5 py-0.5 rounded bg-[hsl(var(--slide-bg))]">
                    {col.count}
                  </span>
                  <MoreHorizontal className="w-4 h-4 text-[hsl(var(--slide-muted))]" />
                </div>
                <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
                  {col.items.map((it) => (
                    <div
                      key={it}
                      className="rounded-md bg-[hsl(var(--slide-surface))] border border-[hsl(var(--slide-border))] p-2.5"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-3 h-3 rounded-sm bg-[hsl(var(--slide-muted)_/_0.5)]" />
                        <span className="text-[10px] text-[hsl(var(--slide-muted))]">domain.com</span>
                      </div>
                      <div className="text-sm font-medium leading-snug line-clamp-2">{it}</div>
                    </div>
                  ))}
                </div>
                <div className="p-2 border-t border-[hsl(var(--slide-border))] text-sm text-[hsl(var(--slide-muted))] flex items-center gap-2 hover:text-[hsl(var(--slide-accent))]">
                  <Plus className="w-3.5 h-3.5" /> Add link
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-3 text-xs">
          {[
            ["Drag card", "moves Item between Groups"],
            ["Drag header", "reorders columns within Collection"],
            ["Cmd+→ / Cmd+←", "move focused card between columns"],
            ["WIP limit · Pro+", "warns at 80% · blocks at 100%"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-[hsl(var(--slide-border))] p-3">
              <div className="text-[hsl(var(--slide-accent))] font-mono text-xs">{k}</div>
              <div className="text-[hsl(var(--slide-fg))]/80 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
