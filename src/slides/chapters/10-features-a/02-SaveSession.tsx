import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Layers, Filter, Undo2 } from "lucide-react";

const tabs = [
  { domain: "github.com", title: "lovable-dev / lovable", keep: true },
  { domain: "linear.app", title: "Roadmap — Q2 2026", keep: true },
  { domain: "figma.com", title: "Wireframes v2", keep: true },
  { domain: "twitter.com", title: "Home / X", keep: false },
  { domain: "mail.google.com", title: "Inbox (12)", keep: false },
  { domain: "stackoverflow.com", title: "How to debounce in React?", keep: true },
  { domain: "youtube.com", title: "Lo-fi study mix", keep: false },
  { domain: "notion.so", title: "Spec audit phase 12", keep: true },
];

export default function SaveSession() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Save session · <span className="text-[hsl(var(--slide-accent))]">whole window, one Collection</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">
          Window scan → smart filter → preview → confirm. One undo erases the entire batch.
        </p>

        <div className="grid grid-cols-5 gap-6 flex-1">
          <div className="col-span-3 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <span className="font-semibold">Window · 8 tabs</span>
              <span className="ml-auto text-sm text-[hsl(var(--slide-muted))]">5 selected</span>
            </div>
            <div className="space-y-1.5 flex-1 overflow-auto">
              {tabs.map((t) => (
                <div
                  key={t.title}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg border ${
                    t.keep
                      ? "border-[hsl(var(--slide-accent)_/_0.4)] bg-[hsl(var(--slide-accent)_/_0.06)]"
                      : "border-[hsl(var(--slide-border))] opacity-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={t.keep}
                    readOnly
                    className="accent-[hsl(var(--slide-accent))]"
                  />
                  <div className="w-3 h-3 rounded-sm bg-[hsl(var(--slide-muted)_/_0.5)]" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{t.title}</div>
                    <div className="text-xs text-[hsl(var(--slide-muted))]">{t.domain}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 space-y-4">
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
                <span className="font-semibold">Smart filter</span>
              </div>
              <ul className="text-sm space-y-1.5 text-[hsl(var(--slide-fg))]/85">
                <li>✓ Skip pinned tabs</li>
                <li>✓ Skip <code className="font-mono">chrome://</code> + <code className="font-mono">about:</code></li>
                <li>✓ Skip duplicates (same URL)</li>
                <li>✓ Skip ephemeral domains (mail, social feeds)</li>
                <li className="text-[hsl(var(--slide-muted))]">User can override any rule</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2">Destination</div>
              <div className="px-3 py-2 rounded-lg border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] text-sm">
                Personal · <strong>Reading queue</strong>
              </div>
              <button className="mt-4 w-full px-4 py-3 rounded-lg bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-bg))] font-semibold">
                Save 5 tabs to Collection
              </button>
            </div>

            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface)_/_0.5)] p-3 flex items-center gap-3 text-xs text-[hsl(var(--slide-fg))]/85">
              <Undo2 className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
              <span>One <code className="font-mono">correlation_id</code> · Undo restores entire batch within 10 s</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
