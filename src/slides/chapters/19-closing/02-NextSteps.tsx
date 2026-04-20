import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Sparkles, Smartphone, Network, Bot, Globe, Workflow } from "lucide-react";

const phases = [
  {
    label: "Phase 3 · Q2",
    accent: true,
    items: [
      { icon: Network, title: "Mind-map editor", body: "Drag nodes, snap-to-grid, export PNG/SVG. The flagship view goes interactive." },
      { icon: Sparkles, title: "Smart collections", body: "Saved filters that auto-update. e.g. 'all unread tabs older than 30 days'." },
      { icon: Bot, title: "AI summarize", body: "On-demand TL;DR per item. On-device for privacy tier, server for free tier." },
    ],
  },
  {
    label: "Phase 4 · H2",
    accent: false,
    items: [
      { icon: Smartphone, title: "Native iOS / Android", body: "Share-sheet save, widgets, full offline. PWA stays for the long tail." },
      { icon: Globe, title: "Public profiles", body: "Optional `letsmark.now/@you`. Curated collections become a content surface." },
      { icon: Workflow, title: "Automation API", body: "Webhooks + Zapier. Save a tab when a Linear ticket closes. Tag on import." },
    ],
  },
];

export default function NextSteps() {
  return (
    <SlideLayout chapter="Chapter 19 · Closing" pageLabel="19.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          What's next · <span className="text-[hsl(var(--slide-accent))]">the roadmap</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          This deck covered Phase 1 + 2 — the foundation. Phase 3 turns the mind-map from view-only into a workspace.
        </p>
        <div className="grid grid-cols-2 gap-6 flex-1">
          {phases.map((p) => (
            <div
              key={p.label}
              className={`rounded-2xl border p-6 flex flex-col gap-4 ${
                p.accent
                  ? "border-[hsl(var(--slide-accent)_/_0.4)] bg-[hsl(var(--slide-accent)_/_0.05)]"
                  : "border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))]"
              }`}
            >
              <div className="text-sm font-mono uppercase tracking-wider text-[hsl(var(--slide-accent))]">
                {p.label}
              </div>
              <div className="space-y-4">
                {p.items.map((it) => (
                  <div key={it.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border))] flex items-center justify-center shrink-0">
                      <it.icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1">{it.title}</h3>
                      <p className="text-sm text-[hsl(var(--slide-muted))] leading-relaxed">{it.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
