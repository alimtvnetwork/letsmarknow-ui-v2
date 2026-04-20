import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Chrome, PlayCircle, Star } from "lucide-react";

export default function MarketingHome() {
  return (
    <SlideLayout chapter="Chapter 4 · Marketing site" pageLabel="13">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            letsmarknow.com — the front door.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            One job: convert a tab-hoarder into an installed extension in under 90 seconds.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-7">
          {/* Browser mock */}
          <div className="col-span-3 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex flex-col">
            <div className="px-5 py-3 border-b border-[hsl(var(--slide-border))] flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--slide-warning))]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--slide-warning)/0.6)]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--slide-success))]" />
              <div className="ml-4 text-sm font-mono text-[hsl(var(--slide-muted))]">
                letsmarknow.com
              </div>
            </div>
            <div className="flex-1 p-10 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-accent))] font-semibold mb-3">
                The all-in-one tab home
              </div>
              <div className="text-5xl font-bold leading-tight mb-4">
                Stop losing tabs.<br />Start finding them.
              </div>
              <div className="text-lg text-[hsl(var(--slide-muted))] mb-7 max-w-xl">
                Save, organise, and share any tab in one click — across every browser,
                with your team or just for you.
              </div>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 rounded-xl bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-bg))] font-bold text-base flex items-center gap-2">
                  <Chrome className="w-5 h-5" /> Add to Chrome — Free
                </button>
                <button className="px-6 py-3 rounded-xl border border-[hsl(var(--slide-border))] font-semibold text-base flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" /> See how it works
                </button>
              </div>
              <div className="mt-7 flex items-center gap-2 text-sm text-[hsl(var(--slide-muted))]">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(var(--slide-warning))] text-[hsl(var(--slide-warning))]" />
                  ))}
                </div>
                4.8 · 12,400+ users · No credit card · Works offline
              </div>
            </div>
          </div>

          {/* Page sections list */}
          <div className="col-span-2 flex flex-col gap-3">
            <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold mb-1">
              Home page · 9 sections
            </div>
            {[
              ["1", "Sticky nav", "Logo · Features · Pricing · Docs · Login · Add to Chrome"],
              ["2", "Hero", "H1 · subhead · two CTAs · animated screenshot"],
              ["3", "Logo bar", "TechCrunch · ProductHunt · Featured-on proof"],
              ["4", "Why (3-up)", "Save · Organize · Share"],
              ["5", "Demo video", "12s looped MP4 + WebM"],
              ["6", "Comparison", "vs Toby · Tab Extend · Raindrop · Pocket"],
              ["7", "Pricing teaser", "→ /pricing"],
              ["8", "Quotes", "3 customer cards"],
              ["9", "Final CTA + footer", "Newsletter · legal · sitemap"],
            ].map(([n, t, sub]) => (
              <div
                key={n}
                className="flex items-start gap-3 px-4 py-2.5 rounded-lg bg-[hsl(var(--slide-surface))] border border-[hsl(var(--slide-border))]"
              >
                <div className="w-7 h-7 rounded-md bg-[hsl(var(--slide-accent)/0.15)] text-[hsl(var(--slide-accent))] font-bold text-sm flex items-center justify-center shrink-0">
                  {n}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold">{t}</div>
                  <div className="text-xs text-[hsl(var(--slide-muted))] truncate">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
