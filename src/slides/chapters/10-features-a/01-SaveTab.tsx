import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { StepTrace, StepTraceData } from "@/slides/_components/StepTrace";
import { MousePointerClick, Keyboard, Menu, Globe } from "lucide-react";

const triggers = [
  { icon: MousePointerClick, name: "Toolbar popup", chord: "click",       blurb: "Default · last-used Collection" },
  { icon: Keyboard,          name: "Keyboard",      chord: "Alt+S",       blurb: "Silent save · Undo toast" },
  { icon: Menu,              name: "Context menu",  chord: "right-click", blurb: "Save link · page · selection" },
  { icon: Globe,             name: "Omnibox",       chord: "lmn ⏎",       blurb: "Type-to-find or save tab" },
];

const trace: StepTraceData = {
  click:  "User presses Alt+S (or any of the 4 triggers). Background script reads active tab — title, url, favicon.",
  ui:     "Bottom-right toast slides up: '✓ Saved to Marketing'. New item card appears at top of the open Collection list with a 400ms fade-in.",
  api: [
    { method: "POST", path: "/v1/items" },
    { method: "GET",  path: "/v1/items/dedupe?url=…" },
  ],
  db:     "INSERT into items (collection_id, url, title, favicon, created_by). Dedupe: if (collection_id, url) exists → bump updated_at instead.",
  event:  "INSERT into history_events (kind='item.created', actor_id, target_id=item.id, payload={url,title}). Drives Activity feed + Undo.",
  notify: {
    toast:    "✓ Saved to Marketing · Undo (10s)",
    channel:  "collection:{id}",
    audience: "Owner's other devices + every member of the Collection get a realtime push; their list re-renders the new card in place.",
  },
};

export default function SaveTab() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.01">
      <div className="h-full flex flex-col pt-4">
        <h1 className="text-4xl font-bold tracking-tight mb-1">
          Save tab · <span className="text-[hsl(var(--slide-accent))]">click → toast in 6 steps</span>
        </h1>
        <p className="text-base text-[hsl(var(--slide-muted))] mb-4 max-w-5xl">
          Four triggers, one trace. Same payload, same DB write, same broadcast — surface is just a shortcut.
        </p>

        {/* Triggers strip */}
        <div className="grid grid-cols-4 gap-2.5 mb-4">
          {triggers.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.name} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold truncate">{t.name}</span>
                    <code className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[hsl(var(--slide-bg))] text-[hsl(var(--slide-accent))] shrink-0">{t.chord}</code>
                  </div>
                  <div className="text-[10px] text-[hsl(var(--slide-muted))] truncate">{t.blurb}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* The 6-step trace */}
        <StepTrace data={trace} className="flex-1 min-h-0" />
      </div>
    </SlideLayout>
  );
}
