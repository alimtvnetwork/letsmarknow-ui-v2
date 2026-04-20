import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Filter, X } from "lucide-react";

const facets = [
  { name: "Type", options: ["Item", "Collection", "Group", "Tag"], active: ["Item"] },
  { name: "Tag", options: ["#react", "#spec", "#auth", "#perf", "#a11y"], active: ["#react", "#spec"] },
  { name: "Domain", options: ["github.com", "linear.app", "figma.com", "notion.so"], active: [] },
  { name: "Saved", options: ["Today", "This week", "This month", "This year"], active: ["This week"] },
  { name: "Author", options: ["Me", "sara@evatix", "alim@atto"], active: [] },
  { name: "Has note", options: ["Yes", "No"], active: ["Yes"] },
];

export default function SearchFilters() {
  return (
    <SlideLayout chapter="Chapter 11 · Find & Visualize" pageLabel="11.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Filters · <span className="text-[hsl(var(--slide-accent))]">six facets, AND-combined</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">
          URL-encoded so filtered views are shareable. <code className="font-mono">/search?q=auth&tag=react,spec&type=item</code>
        </p>

        <div className="grid grid-cols-3 gap-4 flex-1">
          {facets.map((f) => (
            <div
              key={f.name}
              className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                  <span className="font-semibold">{f.name}</span>
                </div>
                {f.active.length > 0 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--slide-accent)_/_0.15)] text-[hsl(var(--slide-accent))]">
                    {f.active.length} active
                  </span>
                )}
              </div>
              <div className="space-y-1.5 flex-1">
                {f.options.map((o) => {
                  const active = f.active.includes(o);
                  return (
                    <div
                      key={o}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                        active
                          ? "bg-[hsl(var(--slide-accent)_/_0.12)] text-[hsl(var(--slide-accent))] border border-[hsl(var(--slide-accent)_/_0.3)]"
                          : "border border-[hsl(var(--slide-border))]"
                      }`}
                    >
                      <input type="checkbox" checked={active} readOnly className="accent-[hsl(var(--slide-accent))]" />
                      <span className="flex-1">{o}</span>
                      {active && <X className="w-3 h-3" />}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-4 text-xs">
          {[
            ["Within facet", "OR (e.g. tag=react OR tag=spec)"],
            ["Across facets", "AND (must satisfy every facet)"],
            ["Negation", "Click chip again → exclude (red ring)"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-[hsl(var(--slide-border))] p-3">
              <div className="text-[hsl(var(--slide-accent))] uppercase tracking-widest">{k}</div>
              <div className="text-[hsl(var(--slide-fg))]/80 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
