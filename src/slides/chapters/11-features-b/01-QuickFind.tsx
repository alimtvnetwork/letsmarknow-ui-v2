import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Search, Clock, ArrowRight } from "lucide-react";

const results = [
  { kind: "Item", title: "Linear pricing teardown", path: "Personal · Reading queue", boost: "recent" },
  { kind: "Item", title: "Lovable launch thread", path: "Evatix · Marketing", boost: "starred" },
  { kind: "Collection", title: "React resources", path: "Personal · Dev", boost: null },
  { kind: "Tag", title: "#design-system", path: "42 items", boost: null },
  { kind: "Item", title: "Designing for keyboard", path: "Personal · Reading queue", boost: null },
];

export default function QuickFind() {
  return (
    <SlideLayout chapter="Chapter 11 · Find & Visualize" pageLabel="11.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Quick find · <span className="text-[hsl(var(--slide-accent))]">type, jump, done</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Fuzzy on title + URL + tags + notes. Recents and stars boost ranking. Open in 2 keystrokes.
        </p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1 flex flex-col max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[hsl(var(--slide-border))]">
            <Search className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
            <input
              readOnly
              value="lin pric"
              className="flex-1 bg-transparent outline-none text-lg"
            />
            <code className="text-xs font-mono px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-muted))]">⌘K</code>
          </div>

          <div className="flex-1 p-2 space-y-1 overflow-auto">
            {results.map((r, i) => (
              <div
                key={r.title}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg ${
                  i === 0
                    ? "bg-[hsl(var(--slide-accent)_/_0.1)] border border-[hsl(var(--slide-accent)_/_0.4)]"
                    : "border border-transparent"
                }`}
              >
                <span className="text-[10px] uppercase tracking-widest font-mono text-[hsl(var(--slide-muted))] w-20">
                  {r.kind}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-base font-medium truncate">{r.title}</div>
                  <div className="text-xs text-[hsl(var(--slide-muted))] truncate">{r.path}</div>
                </div>
                {r.boost && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-accent))] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {r.boost}
                  </span>
                )}
                {i === 0 && <ArrowRight className="w-4 h-4 text-[hsl(var(--slide-accent))]" />}
              </div>
            ))}
          </div>

          <div className="px-5 py-2.5 border-t border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] flex items-center gap-4 text-xs text-[hsl(var(--slide-muted))]">
            <span><code className="font-mono">↑↓</code> navigate</span>
            <span><code className="font-mono">↵</code> open</span>
            <span><code className="font-mono">⌘↵</code> open in new tab</span>
            <span><code className="font-mono">⌥↵</code> reveal in tree</span>
            <span className="ml-auto">5 of 18 results</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
