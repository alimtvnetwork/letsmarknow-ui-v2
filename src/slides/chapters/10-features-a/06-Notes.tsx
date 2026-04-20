import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { FileText, Eye, Lock } from "lucide-react";

export default function Notes() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.06">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Notes & descriptions · <span className="text-[hsl(var(--slide-accent))]">markdown subset</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">Per-Item private notes · per-Collection public description. Different audience, different defaults.</p>

        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <span className="font-semibold text-lg">Item · Note (private)</span>
            </div>
            <div className="rounded-lg bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border))] p-4 font-mono text-xs leading-relaxed flex-1 text-[hsl(var(--slide-fg))]/85">
{`# Why I saved this

Linear's pricing teardown — clean tier
naming. Reuse the **per-seat** anchor
for our Team plan.

- [ ] cross-check with Notion
- [ ] draft 3 alternates

> "Free forever for 1 user" works.`}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-[hsl(var(--slide-border))] p-2.5">
                <div className="flex items-center gap-1.5 text-[hsl(var(--slide-accent))]">
                  <Lock className="w-3 h-3" /> Private by default
                </div>
                <div className="text-[hsl(var(--slide-muted))] mt-1">Excluded from shares unless opted-in per share</div>
              </div>
              <div className="rounded-lg border border-[hsl(var(--slide-border))] p-2.5">
                <div className="text-[hsl(var(--slide-accent))]">Limit · 8,000 chars</div>
                <div className="text-[hsl(var(--slide-muted))] mt-1">CommonMark subset · no raw HTML</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <span className="font-semibold text-lg">Collection · Description (shared)</span>
            </div>
            <div className="rounded-lg bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border))] p-4 text-sm leading-relaxed flex-1 text-[hsl(var(--slide-fg))]/90">
              <div className="text-lg font-bold mb-2">Reading queue · Q2</div>
              <div className="text-[hsl(var(--slide-fg))]/80">Articles, RFCs, and threads I am working through this quarter. Tagged by topic.</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["#spec", "#auth", "#perf"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-[hsl(var(--slide-accent)_/_0.15)] text-[hsl(var(--slide-accent))]">{t}</span>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-[hsl(var(--slide-border))] p-2.5">
                <div className="text-[hsl(var(--slide-accent))]">Public on shares</div>
                <div className="text-[hsl(var(--slide-muted))] mt-1">Renders at top of /t/{`{slug}`} viewer</div>
              </div>
              <div className="rounded-lg border border-[hsl(var(--slide-border))] p-2.5">
                <div className="text-[hsl(var(--slide-accent))]">Limit · 4,000 chars</div>
                <div className="text-[hsl(var(--slide-muted))] mt-1">Same markdown subset · OG image source</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
