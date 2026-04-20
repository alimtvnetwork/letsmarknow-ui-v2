import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Filter } from "lucide-react";

const groups = [
  {
    when: "Today",
    items: [
      { who: "Marcus", verb: "moved", what: "3 items", into: "Q3 Launch" },
      { who: "Anya", verb: "shared", what: "Q3 Launch", into: "as public link" },
      { who: "Sora", verb: "commented on", what: "Linear pricing", into: "" },
    ],
  },
  {
    when: "Yesterday",
    items: [
      { who: "Anya", verb: "created", what: "Q3 Launch", into: "" },
      { who: "You", verb: "saved", what: "12 tabs", into: "Reading queue" },
    ],
  },
];

export default function ActivityFeed() {
  return (
    <SlideLayout chapter="Chapter 13 · History, Activity & Conflicts" pageLabel="13.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Activity feed · <span className="text-[hsl(var(--slide-accent))]">grouped, scannable</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Events get a human verb and bundle by correlation. Filter by actor, kind, or scope.
        </p>

        <div className="grid grid-cols-3 gap-8 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 overflow-auto">
            {groups.map((g) => (
              <div key={g.when} className="mb-8 last:mb-0">
                <div className="text-sm font-semibold text-[hsl(var(--slide-muted))] uppercase tracking-wider mb-4">{g.when}</div>
                <div className="space-y-4">
                  {g.items.map((it, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[hsl(var(--slide-surface-2))] flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {it.who[0]}
                      </div>
                      <p className="text-lg pt-1.5">
                        <span className="font-semibold">{it.who}</span>
                        <span className="text-[hsl(var(--slide-muted))]"> {it.verb} </span>
                        <span className="font-semibold">{it.what}</span>
                        {it.into && <span className="text-[hsl(var(--slide-muted))]"> {it.into.startsWith("as") || it.into.startsWith("into") ? it.into : `→ ${it.into}`}</span>}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="flex items-center gap-2 mb-5">
              <Filter className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <h3 className="text-xl font-bold">Filters</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-[hsl(var(--slide-muted))] mb-2">Actor</div>
                <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] px-3 py-2">Anyone ▾</div>
              </div>
              <div>
                <div className="text-[hsl(var(--slide-muted))] mb-2">Kind</div>
                <div className="flex flex-wrap gap-1.5">
                  {["item", "comment", "share", "tag"].map((k) => (
                    <span key={k} className="px-2 py-1 rounded bg-[hsl(var(--slide-accent)_/_0.15)] text-[hsl(var(--slide-accent))] text-xs">{k}.*</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[hsl(var(--slide-muted))] mb-2">Scope</div>
                <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] px-3 py-2">Q3 Launch ▾</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
