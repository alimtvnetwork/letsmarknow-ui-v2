import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { User, Building2, FolderOpen, FolderTree, Layers, FileText } from "lucide-react";

const levels = [
  { l: "L0", icon: User, name: "Account", req: "1 per human", parent: "—", color: "from-slate-500/30" },
  { l: "L1", icon: Building2, name: "Organization", req: "1..N per Account", parent: "Account", color: "from-sky-500/30" },
  { l: "L2", icon: FolderOpen, name: "Space", req: "1..N per Org", parent: "Organization", color: "from-violet-500/30" },
  { l: "L3", icon: FolderTree, name: "Collection", req: "0..N per Space", parent: "Space", color: "from-emerald-500/30" },
  { l: "L4a", icon: Layers, name: "Group", req: "0..N (optional)", parent: "Collection", color: "from-amber-500/30" },
  { l: "L4b", icon: FileText, name: "Item", req: "0..N (leaf)", parent: "Collection or Group", color: "from-rose-500/30" },
];

export default function HierarchySixLevels() {
  return (
    <SlideLayout chapter="Chapter 9 · Browsing Hierarchy" pageLabel="09.01">
      <div className="h-full flex flex-col pt-8">
        <h1 className="text-6xl font-bold tracking-tight mb-2">
          Six levels, <span className="text-[hsl(var(--slide-accent))]">no surprises</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-6 max-w-5xl">
          Account → Organization → Space → Collection → Group → Item. Locked for v1.
        </p>
        <div className="space-y-2 flex-1 min-h-0">
          {levels.map((lv, i) => {
            const Icon = lv.icon;
            return (
              <div
                key={lv.l}
                className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-5 py-3 flex items-center gap-5"
                style={{ marginLeft: `${i * 28}px` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="text-xl font-mono text-[hsl(var(--slide-accent))] w-14 shrink-0">{lv.l}</div>
                <div className="flex-1">
                  <div className="text-xl font-bold">{lv.name}</div>
                  <div className="text-sm text-[hsl(var(--slide-muted))]">{lv.req}</div>
                </div>
                <div className="text-sm text-[hsl(var(--slide-fg))]/70 w-56 text-right">
                  parent: <span className="font-semibold text-[hsl(var(--slide-fg))]">{lv.parent}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
