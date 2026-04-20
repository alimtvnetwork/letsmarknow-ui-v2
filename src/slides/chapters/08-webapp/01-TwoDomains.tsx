import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Globe, Lock, Zap, Search } from "lucide-react";

export default function WebTwoDomains() {
  return (
    <SlideLayout chapter="Chapter 8 · Web App Shell" pageLabel="08.01">
      <div className="h-full flex flex-col pt-8">
        <h1 className="text-6xl font-bold tracking-tight mb-2">
          Two domains, <span className="text-[hsl(var(--slide-accent))]">one product</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-6 max-w-5xl">
          Marketing is server-rendered for SEO. The app is a client-side SPA built for speed.
        </p>

        <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
          {/* Marketing */}
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col min-h-0">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
              <code className="font-mono text-2xl">letsmarknow.com</code>
            </div>
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">
              SSR · public · cached at edge
            </div>
            <div className="space-y-2 mb-5">
              {[
                ["/", "Marketing home"],
                ["/pricing", "Plans + comparison"],
                ["/blog · /docs", "Content & changelog"],
                ["/legal/* · /security", "Trust pages"],
                ["/welcome", "Post-install landing"],
                ["/t/:slug", "Public Share Viewer"],
              ].map(([p, d]) => (
                <div key={p} className="flex gap-4 text-base">
                  <code className="font-mono text-[hsl(var(--slide-accent))] w-44 shrink-0">{p}</code>
                  <span className="text-[hsl(var(--slide-fg))]/85">{d}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-3 gap-3">
              {[
                { v: "1h", l: "edge cache" },
                { v: "<150ms", l: "TTFB p75" },
                { v: "100%", l: "OG previews" },
              ].map((m) => (
                <div key={m.l} className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-3 text-center">
                  <div className="text-xl font-bold text-[hsl(var(--slide-accent))]">{m.v}</div>
                  <div className="text-xs text-[hsl(var(--slide-muted))]">{m.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* App */}
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col min-h-0">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
              <code className="font-mono text-2xl">app.letsmarknow.com</code>
            </div>
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">
              CSR SPA · authed · TanStack Router
            </div>
            <div className="space-y-2 mb-5">
              {[
                ["/dashboard", "Default landing"],
                ["/s · /c · /i", "Browse hierarchy"],
                ["/search · /trash · /activity", "Workspace tools"],
                ["/me/*", "Account settings"],
                ["/org/:id/*", "Org admin & billing"],
                ["/onboarding · /invite/:token", "First-run flows"],
              ].map(([p, d]) => (
                <div key={p} className="flex gap-4 text-base">
                  <code className="font-mono text-[hsl(var(--slide-accent))] w-44 shrink-0">{p}</code>
                  <span className="text-[hsl(var(--slide-fg))]/85">{d}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-3 gap-3">
              {[
                { v: "<350ms", l: "paint p75" },
                { v: "PWA", l: "installable" },
                { v: "Realtime", l: "WebSocket sync" },
              ].map((m) => (
                <div key={m.l} className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-3 text-center">
                  <div className="text-xl font-bold text-[hsl(var(--slide-accent))]">{m.v}</div>
                  <div className="text-xs text-[hsl(var(--slide-muted))]">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-[hsl(var(--slide-muted))]">
          <Search className="w-4 h-4" /> SEO lives on apex
          <span className="text-[hsl(var(--slide-border))]">·</span>
          <Zap className="w-4 h-4" /> Speed lives on app subdomain
        </div>
      </div>
    </SlideLayout>
  );
}
