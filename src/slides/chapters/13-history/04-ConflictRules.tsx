import { SlideLayout } from "@/slides/_layout/SlideLayout";

const rules = [
  { field: "Title, name, color, position", strategy: "Last-write-wins (server timestamp)" },
  { field: "Tags (set membership)", strategy: "Union of additions; subtract removals" },
  { field: "Notes / descriptions", strategy: "Y.js CRDT (character-level merge)" },
  { field: "Item membership in Collection", strategy: "Most recent move wins; loser visible in History" },
  { field: "Group composition", strategy: "Set-union; fractional indexing for order" },
  { field: "Star / pin / archive", strategy: "LWW per flag" },
  { field: "Share password / expiry", strategy: "LWW; affects all viewers immediately" },
];

export default function ConflictRules() {
  return (
    <SlideLayout chapter="Chapter 13 · History, Activity & Conflicts" pageLabel="13.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Conflict rules · <span className="text-[hsl(var(--slide-accent))]">deterministic merges</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Convergence over correctness-by-fiat. Every client lands on the same state given the same event sequence.
        </p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1">
          <table className="w-full text-lg">
            <thead>
              <tr className="border-b border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))]">
                <th className="text-left px-6 py-4 font-semibold w-2/5">Field type</th>
                <th className="text-left px-6 py-4 font-semibold">Merge strategy</th>
              </tr>
            </thead>
            <tbody>
              {rules.map((r) => (
                <tr key={r.field} className="border-b border-[hsl(var(--slide-border))] last:border-0">
                  <td className="px-6 py-3.5 text-[hsl(var(--slide-fg))] font-medium">{r.field}</td>
                  <td className="px-6 py-3.5 text-[hsl(var(--slide-muted))]">{r.strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[hsl(var(--slide-muted))] mt-6">
          Bias: preserve work · LWW for scalars · set-union for collections · CRDT for free text · surface only when human judgment needed.
        </p>
      </div>
    </SlideLayout>
  );
}
