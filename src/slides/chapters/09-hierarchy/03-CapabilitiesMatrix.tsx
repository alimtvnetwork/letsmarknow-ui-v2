import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Check, X } from "lucide-react";

const cols = ["Org", "Space", "Collection", "Group", "Item"];
const rows: Array<{ cap: string; vals: (boolean | string)[] }> = [
  { cap: "Has name", vals: [true, true, true, true, "= title"] },
  { cap: "Has color", vals: [false, false, true, true, "inherits"] },
  { cap: "Has icon / favicon", vals: ["avatar", false, "optional", "optional", "auto"] },
  { cap: "Has tags", vals: [false, false, true, true, true] },
  { cap: "Has notes", vals: [false, true, true, true, true] },
  { cap: "Star / favorite", vals: [false, true, true, true, true] },
  { cap: "Sharable /t/{slug}", vals: [false, true, true, true, true] },
  { cap: "Has members", vals: [true, "inherits", "inherits", "inherits", "inherits"] },
  { cap: "Soft-delete", vals: ["danger zone", true, true, true, true] },
  { cap: "Move within Org", vals: ["n/a", false, true, true, true] },
  { cap: "Duplicate", vals: [false, true, true, true, true] },
  { cap: "Bulk select", vals: ["n/a", "n/a", true, true, true] },
];

const Cell = ({ v }: { v: boolean | string }) => {
  if (v === true) return <Check className="w-5 h-5 text-[hsl(var(--slide-accent))] mx-auto" />;
  if (v === false) return <X className="w-4 h-4 text-[hsl(var(--slide-muted))]/50 mx-auto" />;
  return <span className="text-xs text-[hsl(var(--slide-muted))]">{v}</span>;
};

export default function HierarchyCapabilitiesMatrix() {
  return (
    <SlideLayout chapter="Chapter 9 · Browsing Hierarchy" pageLabel="09.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Entity capabilities · <span className="text-[hsl(var(--slide-accent))]">what lives at each level</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-6">
          Not about people — about <em>things</em>. Twelve capabilities × five entity types (Org, Space, Collection, Group, Item).
        </p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1">
          <div className="grid grid-cols-12 px-5 py-3 bg-[hsl(var(--slide-surface-2))] border-b border-[hsl(var(--slide-border))] text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))]">
            <div className="col-span-4">Capability</div>
            {cols.map((c) => (
              <div key={c} className="col-span-[1.6] text-center" style={{ gridColumn: "span 1.6 / span 1.6" } as any}>
                {c}
              </div>
            ))}
          </div>
          {rows.map((r, i) => (
            <div
              key={r.cap}
              className={`grid grid-cols-12 px-5 py-2.5 items-center border-b border-[hsl(var(--slide-border))] last:border-0 ${
                i % 2 === 1 ? "bg-[hsl(var(--slide-surface-2)_/_0.4)]" : ""
              }`}
            >
              <div className="col-span-4 text-sm font-medium">{r.cap}</div>
              {r.vals.map((v, j) => (
                <div
                  key={j}
                  className="text-center"
                  style={{ gridColumn: "span 1.6 / span 1.6" } as any}
                >
                  <Cell v={v} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
