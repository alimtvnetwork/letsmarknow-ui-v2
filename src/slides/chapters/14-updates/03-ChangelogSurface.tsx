import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Sparkles, Wrench, Bug } from "lucide-react";

const entries = [
  {
    v: "2.4.2",
    date: "Apr 19",
    items: [
      { icon: Wrench, kind: "Fixed", text: "Hover-to-jump preview no longer flashes when scrolling fast" },
      { icon: Bug, kind: "Fixed", text: "Tag merge incorrectly counted detached items in summary" },
    ],
  },
  {
    v: "2.4.0",
    date: "Apr 12",
    items: [
      { icon: Sparkles, kind: "New", text: "Mind-map view for collections (Pro)" },
      { icon: Sparkles, kind: "New", text: "Bulk operations toolbar with undo bundling" },
      { icon: Wrench, kind: "Improved", text: "Quick find ranks recents 2× higher" },
    ],
  },
];

export default function ChangelogSurface() {
  return (
    <SlideLayout chapter="Chapter 14 · Updates & Release Channels" pageLabel="14.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Changelog · <span className="text-[hsl(var(--slide-accent))]">in-app, scannable</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Reachable from "What's new" in the user menu. Auto-opens once after every minor version (never after patch).
        </p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] flex-1 overflow-auto p-8">
          {entries.map((e) => (
            <div key={e.v} className="mb-10 last:mb-0">
              <div className="flex items-baseline gap-4 mb-5">
                <h2 className="text-3xl font-bold">v{e.v}</h2>
                <span className="text-sm text-[hsl(var(--slide-muted))]">{e.date}</span>
              </div>
              <div className="space-y-3">
                {e.items.map((it, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-[hsl(var(--slide-surface-2))] flex items-center justify-center flex-shrink-0">
                      <it.icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                    </div>
                    <p className="text-lg pt-1">
                      <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded mr-2 bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-muted))]">{it.kind}</span>
                      <span className="text-[hsl(var(--slide-muted))]">{it.text}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-[hsl(var(--slide-muted))] mt-6">
          SemVer locked: <code className="text-[hsl(var(--slide-fg))]">major.minor.patch</code> · patch = bugs only · minor = features · major = breaking (rare).
        </p>
      </div>
    </SlideLayout>
  );
}
