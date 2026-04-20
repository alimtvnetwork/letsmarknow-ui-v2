import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Plus, Minus } from "lucide-react";

const deltas = [
  { feature: "Hover-to-jump", ext: "chrome.tabs.query", web: "Bridge if installed; otherwise opens new tab" },
  { feature: "Save current tab", ext: "Native popup", web: "Sends LMN_SAVE_TAB to extension; bookmarklet fallback" },
  { feature: "Save Session", ext: "Built-in (Alt+Shift+W)", web: "Only when extension installed" },
  { feature: "Notes editor", ext: "Basic textarea", web: "Markdown-lite + split preview at ≥1024px" },
  { feature: "Item detail", ext: "Inline expand", web: "Dedicated /i/:id modal route" },
  { feature: "Embed previews", ext: "Favicon only", web: "YouTube · X · PDF · GitHub · images (Pro+)" },
  { feature: "URL state", ext: "n/a", web: "?q ?tag ?view ?org — back/forward + shareable" },
  { feature: "Realtime", ext: "Service worker push", web: "WebSocket; polling fallback every 30s" },
];

export default function WebDashboardDeltas() {
  return (
    <SlideLayout chapter="Chapter 8 · Web App Shell" pageLabel="08.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Dashboard <span className="text-[hsl(var(--slide-accent))]">deltas</span> vs extension
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8 max-w-5xl">
          80% of the dashboard is the same component as the extension new-tab. Web app adds these.
        </p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1">
          <div className="grid grid-cols-12 px-6 py-3 bg-[hsl(var(--slide-surface-2))] border-b border-[hsl(var(--slide-border))] text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))]">
            <div className="col-span-3">Feature</div>
            <div className="col-span-4 flex items-center gap-2">
              <Minus className="w-3 h-3" /> Extension
            </div>
            <div className="col-span-5 flex items-center gap-2 text-[hsl(var(--slide-accent))]">
              <Plus className="w-3 h-3" /> Web app
            </div>
          </div>
          {deltas.map((d, i) => (
            <div
              key={d.feature}
              className={`grid grid-cols-12 px-6 py-4 items-center text-base border-b border-[hsl(var(--slide-border))] last:border-0 ${
                i % 2 === 1 ? "bg-[hsl(var(--slide-surface-2)_/_0.4)]" : ""
              }`}
            >
              <div className="col-span-3 font-semibold">{d.feature}</div>
              <div className="col-span-4 text-[hsl(var(--slide-fg))]/70">{d.ext}</div>
              <div className="col-span-5 text-[hsl(var(--slide-fg))]">{d.web}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
