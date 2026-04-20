import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { CheckSquare, Move, Tag, Trash2, Download } from "lucide-react";

const actions = [
  { icon: Move, label: "Move to…", chord: "M" },
  { icon: Tag, label: "Tag…", chord: "T" },
  { icon: Download, label: "Export", chord: "E" },
  { icon: Trash2, label: "Delete", chord: "⌫" },
];

export default function BulkOps() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.07">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Bulk operations · <span className="text-[hsl(var(--slide-accent))]">select once, act once</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">Click → Shift-click → Cmd-click. Action bar slides in. One <code className="font-mono">correlation_id</code> for clean undo.</p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1 flex flex-col">
          <div className="px-5 py-3 border-b border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] flex items-center gap-3">
            <CheckSquare className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
            <span className="font-semibold">12 items selected</span>
            <span className="text-sm text-[hsl(var(--slide-muted))]">in Reading queue</span>
            <div className="ml-auto flex items-center gap-1.5">
              {actions.map((a) => {
                const Icon = a.icon;
                return (
                  <button key={a.label} className="px-3 py-1.5 rounded-lg border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))] flex items-center gap-2 text-sm hover:border-[hsl(var(--slide-accent))]">
                    <Icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                    {a.label}
                    <code className="text-xs font-mono text-[hsl(var(--slide-muted))]">{a.chord}</code>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 p-4 grid grid-cols-3 gap-2 overflow-auto content-start">
            {Array.from({ length: 18 }).map((_, i) => {
              const selected = i < 12;
              return (
                <div key={i} className={`rounded-lg border px-3 py-2.5 flex items-center gap-3 ${selected ? "border-[hsl(var(--slide-accent)_/_0.5)] bg-[hsl(var(--slide-accent)_/_0.07)]" : "border-[hsl(var(--slide-border))]"}`}>
                  <input type="checkbox" checked={selected} readOnly className="accent-[hsl(var(--slide-accent))]" />
                  <div className="w-3 h-3 rounded-sm bg-[hsl(var(--slide-muted)_/_0.5)] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">Article #{i + 1} — saved last week</div>
                    <div className="text-xs text-[hsl(var(--slide-muted))] truncate">domain-{i}.com</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-4 text-sm">
          {[
            ["Selection survives", "navigation within same Collection · view-mode switch"],
            ["Selection clears", "leave Collection · refresh · explicit Esc"],
            ["Hard cap", "500 items per bulk action · larger → background job"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-[hsl(var(--slide-border))] p-3">
              <div className="text-[hsl(var(--slide-accent))] text-xs uppercase tracking-widest">{k}</div>
              <div className="text-[hsl(var(--slide-fg))]/80 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
