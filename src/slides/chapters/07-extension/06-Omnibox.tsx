import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Search, ArrowRight } from "lucide-react";

const suggestions = [
  { match: "Chat", rest: "GPT", meta: "chatgpt.com · in Quick Tools" },
  { match: "Chat", rest: " UI library", meta: "shadcn/ui · in Components" },
  { match: "Chat", rest: "ham House", meta: "chathamhouse.org · in Read Later" },
];

export default function ExtensionOmnibox() {
  return (
    <SlideLayout chapter="Chapter 7 · Extension" pageLabel="07.06">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Omnibox · type <span className="text-[hsl(var(--slide-accent))]">"lmn "</span> in the URL bar
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">
          Local IndexedDB cache renders instantly. Server replaces results &lt; 150 ms.
        </p>

        <div className="grid grid-cols-2 gap-12 flex-1">
          {/* Mock omnibox */}
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 flex items-center gap-3">
              <Search className="w-5 h-5 text-[hsl(var(--slide-muted))]" />
              <div className="flex-1 font-mono text-lg">
                <span className="text-[hsl(var(--slide-accent))]">lmn</span> chat
              </div>
            </div>

            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden">
              <div className="px-4 py-3 bg-[hsl(var(--slide-accent)_/_0.1)] border-b border-[hsl(var(--slide-border))]">
                <div className="text-sm">
                  Search your saved tabs in <strong>Lets Mark Now</strong>
                </div>
              </div>
              {suggestions.map((s, i) => (
                <div
                  key={i}
                  className="px-4 py-3 border-b border-[hsl(var(--slide-border))] last:border-0 hover:bg-[hsl(var(--slide-surface-2))]"
                >
                  <div className="text-base">
                    <span className="bg-[hsl(var(--slide-accent)_/_0.25)] text-[hsl(var(--slide-accent))] font-semibold">
                      {s.match}
                    </span>
                    {s.rest}
                  </div>
                  <div className="text-xs text-[hsl(var(--slide-muted))] mt-0.5">{s.meta}</div>
                </div>
              ))}
              <div className="px-4 py-3 text-sm text-[hsl(var(--slide-muted))] flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search "chat" in dashboard
              </div>
            </div>
          </div>

          {/* Algorithm */}
          <div className="space-y-5">
            <div>
              <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">
                Suggestion pipeline
              </div>
              <div className="space-y-3">
                {[
                  { n: 1, t: "Debounce 80 ms" },
                  { n: 2, t: "Local IndexedDB → render up to 5 instantly" },
                  { n: 3, t: "Parallel: GET /v1/search/quick?recent_boost=true" },
                  { n: 4, t: "Server response replaces local (< 150 ms p95)" },
                  { n: 5, t: "Fallback: 'Search in dashboard' opens /?q=…" },
                ].map(({ n, t }) => (
                  <div key={n} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-accent-fg))] flex items-center justify-center text-sm font-bold">
                      {n}
                    </div>
                    <ArrowRight className="w-3 h-3 text-[hsl(var(--slide-muted))]" />
                    <div className="text-base">{t}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 mt-4">
              <div className="text-sm text-[hsl(var(--slide-muted))] mb-1">Jump-to-tab</div>
              <div className="text-base">
                If URL is open in any window → switch focus instead of opening a new tab.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
