import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ArrowDownCircle, AlertTriangle } from "lucide-react";

const cases = [
  { from: "Pro", to: "Free", impact: "Mind-map locked · password shares revoked · 3rd+ collections become read-only" },
  { from: "Team", to: "Pro", impact: "Workspace deleted (after 30d grace) · members downgraded to Viewer of owner's personal" },
  { from: "Team", to: "Free", impact: "Combined Team→Pro→Free pipeline applied with two-step confirmation" },
];

export default function DowngradeFlow() {
  return (
    <SlideLayout chapter="Chapter 15 · Settings, Pricing & Plans" pageLabel="15.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Downgrade · <span className="text-[hsl(var(--slide-accent))]">no silent data loss</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Downgrades preview every consequence. Nothing deletes — features lock, content stays read-only & exportable.
        </p>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {cases.map((c) => (
            <div key={`${c.from}-${c.to}`} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-mono px-2 py-0.5 rounded bg-[hsl(var(--slide-surface-2))]">{c.from}</span>
                <ArrowDownCircle className="w-4 h-4 text-[hsl(var(--slide-muted))]" />
                <span className="text-sm font-mono px-2 py-0.5 rounded bg-[hsl(var(--slide-surface-2))]">{c.to}</span>
              </div>
              <p className="text-sm text-[hsl(var(--slide-muted))] leading-relaxed">{c.impact}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border-2 border-[hsl(45_90%_60%_/_0.5)] bg-[hsl(var(--slide-surface))] p-8 flex-1">
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="w-6 h-6 text-[hsl(45_90%_60%)]" />
            <h2 className="text-2xl font-bold">Confirm downgrade to Free</h2>
          </div>
          <p className="text-base text-[hsl(var(--slide-muted))] mb-5">
            On May 1 (end of billing period), the following will change. You won't lose any data — features will lock.
          </p>
          <ul className="space-y-2 mb-6 text-sm">
            {[
              "Mind-map view → locked (your collections stay)",
              "Password shares → revoked (URLs become public-link)",
              "Collections 4–12 → read-only (export anytime)",
              "Trash → trimmed to 7 days",
            ].map((x) => (
              <li key={x} className="flex gap-3"><span className="text-[hsl(45_90%_60%)]">•</span><span className="text-[hsl(var(--slide-muted))]">{x}</span></li>
            ))}
          </ul>
          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-lg bg-[hsl(var(--slide-surface-2))] text-sm">Keep Pro</button>
            <button className="px-5 py-2 rounded-lg bg-[hsl(45_90%_60%)] text-black font-semibold text-sm">I understand · downgrade</button>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
