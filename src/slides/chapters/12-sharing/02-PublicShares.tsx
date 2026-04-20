import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Globe, Eye, ExternalLink } from "lucide-react";

export default function PublicShares() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Public links · <span className="text-[hsl(var(--slide-accent))]">read-only by default</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Anyone with the URL can view. SEO-indexable optional. Comments off unless owner enables.
        </p>

        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
              <h3 className="text-2xl font-bold">Share dialog</h3>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-4 font-mono text-sm flex items-center justify-between">
                <span>letsmarknow.com/s/<span className="text-[hsl(var(--slide-accent))]">k7p2-design</span></span>
                <ExternalLink className="w-4 h-4 text-[hsl(var(--slide-muted))]" />
              </div>
              <label className="flex items-center justify-between text-lg">
                <span>Allow comments</span>
                <span className="w-12 h-6 rounded-full bg-[hsl(var(--slide-surface-2))] relative">
                  <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-[hsl(var(--slide-muted))]" />
                </span>
              </label>
              <label className="flex items-center justify-between text-lg">
                <span>Index in search engines</span>
                <span className="w-12 h-6 rounded-full bg-[hsl(var(--slide-accent)_/_0.4)] relative">
                  <span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-[hsl(var(--slide-accent))]" />
                </span>
              </label>
              <label className="flex items-center justify-between text-lg">
                <span>Show owner profile</span>
                <span className="w-12 h-6 rounded-full bg-[hsl(var(--slide-accent)_/_0.4)] relative">
                  <span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-[hsl(var(--slide-accent))]" />
                </span>
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
              <h3 className="text-2xl font-bold">What viewers get</h3>
            </div>
            <ul className="space-y-3 text-lg">
              {[
                "Branded share viewer (org accent + logo)",
                "Same density toggle as the app",
                "Save copy to my account (CTA)",
                "OG card preview when pasted in Slack",
                "No edit, no member list, no analytics",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-[hsl(var(--slide-accent))]">→</span>
                  <span className="text-[hsl(var(--slide-muted))]">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
