import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Search, ChevronDown, Tag, FileText, Star } from "lucide-react";

export default function ExtPopup() {
  return (
    <SlideLayout chapter="Chapter 7 · Extension" pageLabel="07.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">Toolbar popup · <span className="text-[hsl(var(--slide-accent))]">380×540</span></h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">Open → save → close. p75 round-trip under 1.5 seconds.</p>
        <div className="grid grid-cols-2 gap-12 flex-1 items-start">
          <div className="flex justify-center">
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] shadow-2xl overflow-hidden" style={{ width: 480, height: 660 }}>
              <div className="flex items-center justify-between px-4 py-3 bg-[hsl(var(--slide-surface-2))] border-b border-[hsl(var(--slide-border))]">
                <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-md bg-[hsl(var(--slide-accent))]" /><span className="font-semibold">Personal</span><ChevronDown className="w-4 h-4 text-[hsl(var(--slide-muted))]" /></div>
                <div className="text-xs text-[hsl(var(--slide-muted))]">⚙ 👤</div>
              </div>
              <div className="px-4 py-3 border-b border-[hsl(var(--slide-border))] flex items-center gap-2"><Search className="w-4 h-4 text-[hsl(var(--slide-muted))]" /><input className="bg-transparent text-base flex-1 outline-none" placeholder="Quick find…" readOnly /></div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2">Saving</div>
                <div className="rounded-xl border border-[hsl(var(--slide-border))] p-3 mb-4">
                  <div className="flex items-center gap-2 mb-1"><div className="w-4 h-4 rounded bg-[hsl(var(--slide-accent))]" /><span className="text-sm font-semibold truncate">Spec for the perfect bookmark app</span></div>
                  <div className="text-xs text-[hsl(var(--slide-muted))] font-mono mb-2">letsmarknow.com/spec</div>
                  <div className="flex gap-2"><span className="text-xs px-2 py-1 rounded-md bg-[hsl(var(--slide-surface-2))] flex items-center gap-1"><Tag className="w-3 h-3" /> Tags</span><span className="text-xs px-2 py-1 rounded-md bg-[hsl(var(--slide-surface-2))] flex items-center gap-1"><FileText className="w-3 h-3" /> Notes</span></div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-[hsl(var(--slide-muted))]">Save to</span>
                  <div className="flex-1 px-3 py-2 rounded-md border border-[hsl(var(--slide-border))] flex items-center justify-between text-sm">Quick Tools<ChevronDown className="w-4 h-4 text-[hsl(var(--slide-muted))]" /></div>
                  <button className="px-4 py-2 rounded-md bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-accent-fg))] font-semibold text-sm">Save</button>
                </div>
                <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2">Recent</div>
                <div className="space-y-2">
                  {["Notion roadmap doc", "Figma wireframes v2", "Stripe pricing page"].map((t, i) => (
                    <div key={t} className="flex items-center gap-2 text-sm"><div className="w-3 h-3 rounded bg-[hsl(var(--slide-muted)_/_0.4)]" /><span className="flex-1 truncate">{t}</span><span className="text-xs text-[hsl(var(--slide-muted))]">{["just now", "2m", "12m"][i]}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-4">
            <div>
              <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">State machine</div>
              <div className="font-mono text-sm space-y-1.5 text-[hsl(var(--slide-fg))]/85">
                <div>idle → saving → saved → (2s) → close</div>
                <div>saving → duplicate → [Replace] [Add] [Cancel]</div>
                <div>any → error → [Retry] [Dismiss]</div>
                <div>offline → queued → synced → saved</div>
              </div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">Default destination</div>
              <div className="text-base text-[hsl(var(--slide-fg))]/85 leading-relaxed">Last used · Starred (5) · Recent (5) · All collections · + New</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">Performance budget</div>
              <div className="grid grid-cols-3 gap-3">
                {[{ v: "<80kb", l: "popup chunk" }, { v: "<100ms", l: "TTFCP" }, { v: "1.5s", l: "save→close p75" }].map((m) => (
                  <div key={m.l} className="rounded-xl border border-[hsl(var(--slide-border))] p-3 text-center">
                    <div className="text-xl font-bold text-[hsl(var(--slide-accent))]">{m.v}</div>
                    <div className="text-xs text-[hsl(var(--slide-muted))]">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2 text-sm text-[hsl(var(--slide-muted))]"><Star className="w-4 h-4" /> ⌘/Ctrl+Enter saves from anywhere in popup</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
