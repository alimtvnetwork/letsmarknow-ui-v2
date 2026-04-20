import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ShieldAlert, Gauge, Layers } from "lucide-react";

const limits = [
  { k: "Orgs / Account", v: "50", why: "left-rail UI sanity" },
  { k: "Spaces / Org", v: "500", why: "sidebar render perf" },
  { k: "Collections / Space", v: "5,000", why: "tree virtualization ceiling" },
  { k: "Groups / Collection", v: "500", why: "column view scroll perf" },
  { k: "Items / Collection (direct)", v: "10,000", why: "list virtualization ceiling" },
  { k: "Items / Group", v: "2,000", why: "card render perf" },
  { k: "Tags / entity", v: "32", why: "search index size" },
  { k: "Members / Org (Team)", v: "500", why: "presence channel cap" },
  { k: "Name length", v: "120", why: "UI truncation" },
  { k: "Description length", v: "4,000", why: "UI density" },
  { k: "Note length (markdown)", v: "8,000", why: "editor perf" },
  { k: "Tag length", v: "40", why: "chip layout" },
];

export default function HierarchyCardinalityLimits() {
  return (
    <SlideLayout chapter="Chapter 9 · Browsing Hierarchy" pageLabel="09.04">
      <div className="h-full flex flex-col pt-6">
        <h1 className="text-5xl font-bold tracking-tight mb-2">
          Hard limits · <span className="text-[hsl(var(--slide-accent))]">performance, not pricing</span>
        </h1>
        <p className="text-lg text-[hsl(var(--slide-muted))] mb-5 max-w-5xl">
          These ceilings exist on every plan. Hit one → API returns <code className="font-mono">409 LIMIT_REACHED</code> with a friendly UI explainer.
        </p>

        <div className="grid grid-cols-4 gap-3 flex-1 min-h-0">
          {limits.map((l) => (
            <div
              key={l.k}
              className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 flex flex-col"
            >
              <div className="text-[11px] uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-1 leading-tight">{l.k}</div>
              <div className="text-3xl font-bold text-[hsl(var(--slide-accent))] mb-1 font-mono">{l.v}</div>
              <div className="text-[11px] text-[hsl(var(--slide-fg))]/70 mt-auto leading-tight">{l.why}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { i: ShieldAlert, t: "Hard limit", d: "Same on Free, Pro, Team" },
            { i: Gauge, t: "Soft warning", d: "UI banner at 90% of any limit" },
            { i: Layers, t: "Plan limits", d: "Separate (see Pricing slide)" },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-[hsl(var(--slide-border))] p-3 flex items-center gap-3">
              <Icon className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <div>
                <div className="text-sm font-semibold">{t}</div>
                <div className="text-xs text-[hsl(var(--slide-muted))]">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
