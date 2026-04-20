import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Image, Code2, Globe } from "lucide-react";

export default function EmbedsPreviews() {
  return (
    <SlideLayout chapter="Chapter 11 · Find & Visualize" pageLabel="11.07">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Embeds & previews · <span className="text-[hsl(var(--slide-accent))]">three pipelines</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">
          OG-image generation, oEmbed for known providers, iframe widget for shared Collections.
        </p>

        <div className="grid grid-cols-3 gap-5 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Image className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <div className="font-semibold text-lg">OG image</div>
            </div>
            <div className="aspect-video rounded-lg bg-gradient-to-br from-[hsl(var(--slide-accent)_/_0.3)] to-[hsl(var(--slide-surface-2))] mb-3 flex items-center justify-center">
              <span className="text-xs text-[hsl(var(--slide-fg))]/70">1200×630 · cached</span>
            </div>
            <div className="text-sm text-[hsl(var(--slide-fg))]/80 space-y-1.5 flex-1">
              <div>• Fetched on save · refreshed weekly</div>
              <div>• Fallback: favicon + title gradient</div>
              <div>• Stored on CDN · 7-day stale-while-revalidate</div>
            </div>
            <code className="mt-3 text-xs font-mono text-[hsl(var(--slide-muted))] truncate">
              cdn.lmn.com/og/{`{item_id}`}.jpg
            </code>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <div className="font-semibold text-lg">oEmbed</div>
            </div>
            <div className="space-y-1.5 mb-3 text-sm">
              {["YouTube", "Twitter / X", "Figma", "CodePen", "Loom", "Spotify"].map((p) => (
                <div key={p} className="flex items-center gap-2 px-2 py-1 rounded border border-[hsl(var(--slide-border))]">
                  <span className="w-2 h-2 rounded-full bg-[hsl(var(--slide-accent))]" />
                  <span className="text-xs">{p}</span>
                </div>
              ))}
            </div>
            <div className="text-xs text-[hsl(var(--slide-fg))]/75 mt-auto">
              Inline rich preview · sandboxed iframe · CSP-locked.
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <div className="font-semibold text-lg">Embed widget</div>
            </div>
            <div className="rounded-lg bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border))] p-3 font-mono text-[10px] leading-relaxed text-[hsl(var(--slide-fg))]/85 mb-3 break-all">
              {`<iframe`}<br/>
              {`  src="https://lmn.com/embed/`}<br/>
              {`    {slug}?theme=dark"`}<br/>
              {`  width="100%" height="600"`}<br/>
              {`  loading="lazy" />`}
            </div>
            <div className="text-xs text-[hsl(var(--slide-fg))]/80 space-y-1">
              <div>• Read-only Collection viewer</div>
              <div>• Theme · view-mode params</div>
              <div>• Honours share TTL & revocation</div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 text-sm flex items-center gap-3">
          <span className="text-[hsl(var(--slide-accent))] font-mono text-xs uppercase tracking-widest">Locked</span>
          <span className="text-[hsl(var(--slide-fg))]/85">
            All three pipelines run server-side. Client never fetches third-party content directly — keeps CSP strict and avoids tracker leakage.
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
