import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Globe, ExternalLink, Search } from "lucide-react";

export default function PublicShares() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Public shares · <span className="text-[hsl(var(--slide-accent))]">/t/&#123;slug&#125;</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">SEO-controllable read-only viewer. Anyone with the link sees the Collection.</p>

        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))] overflow-hidden flex flex-col">
            <div className="px-4 py-2 border-b border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] flex items-center gap-2 text-xs">
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--slide-muted)_/_0.5)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--slide-muted)_/_0.5)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--slide-muted)_/_0.5)]" />
              </div>
              <code className="ml-3 font-mono text-[hsl(var(--slide-fg))]/70">letsmarknow.com/t/q2-reading</code>
              <ExternalLink className="w-3 h-3 ml-auto text-[hsl(var(--slide-muted))]" />
            </div>
            <div className="p-6 flex-1">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2">Public collection · alim@evatix</div>
              <div className="text-3xl font-bold mb-2">Q2 Reading queue</div>
              <p className="text-sm text-[hsl(var(--slide-fg))]/75 mb-5 max-w-xl">RFCs, design teardowns, and threads I work through this quarter. Open in your browser, no login required.</p>
              <div className="grid grid-cols-2 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-lg border border-[hsl(var(--slide-border))] p-3 flex gap-3">
                    <div className="w-12 h-12 rounded bg-gradient-to-br from-[hsl(var(--slide-accent)_/_0.3)] to-[hsl(var(--slide-surface-2))] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold truncate">Article {i + 1}</div>
                      <div className="text-[10px] text-[hsl(var(--slide-muted))]">linear.app</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                <div className="text-sm font-semibold">SEO controls</div>
              </div>
              <ul className="text-xs text-[hsl(var(--slide-fg))]/80 space-y-1">
                <li>• <code className="font-mono">noindex</code> by default</li>
                <li>• Owner toggles: index, follow, sitemap inclusion</li>
                <li>• Per-share OG image (auto or upload)</li>
                <li>• JSON-LD <code className="font-mono">CollectionPage</code></li>
              </ul>
            </div>
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                <div className="text-sm font-semibold">Viewer chrome</div>
              </div>
              <ul className="text-xs text-[hsl(var(--slide-fg))]/80 space-y-1">
                <li>• Owner branding · favicon · footer attribution</li>
                <li>• View-mode switcher (list / grid / column)</li>
                <li>• "Save to my Lets Mark Now" CTA → signup</li>
                <li>• <code className="font-mono">?embed=1</code> strips chrome for iframes</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 text-xs text-[hsl(var(--slide-muted))]">
              Cached on CDN · 60 s edge TTL · revocation purges within 5 s.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
