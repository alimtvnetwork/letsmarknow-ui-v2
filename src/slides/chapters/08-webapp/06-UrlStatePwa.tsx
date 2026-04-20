import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Link2, ArrowLeftRight, Share2, Smartphone } from "lucide-react";

const params = [
  { p: "q", d: "Search query", ex: "?q=react+hooks" },
  { p: "tag", d: "Repeatable tag filter", ex: "?tag=ai&tag=ui" },
  { p: "view", d: "View override", ex: "?view=column" },
  { p: "org", d: "Pin Org for this nav", ex: "?org=evatix" },
  { p: "next", d: "Post-auth redirect", ex: "/login?next=/c/scrum" },
  { p: "from", d: "Analytics source", ex: "?from=ext · marketing · email" },
];

export default function WebUrlStatePwa() {
  return (
    <SlideLayout chapter="Chapter 8 · Web App Shell" pageLabel="08.06">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          The URL is the <span className="text-[hsl(var(--slide-accent))]">source of truth</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Every filter, view, and selection lives in the URL. Back/forward works. Links are shareable. Plus: PWA install for off-Chrome users.
        </p>

        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* URL params */}
          <div>
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3 flex items-center gap-2">
              <Link2 className="w-4 h-4" /> Reserved query params
            </div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] divide-y divide-[hsl(var(--slide-border))]">
              {params.map((p) => (
                <div key={p.p} className="px-5 py-3 flex items-center gap-4">
                  <code className="font-mono text-base text-[hsl(var(--slide-accent))] w-16 shrink-0">{p.p}</code>
                  <div className="flex-1">
                    <div className="text-base">{p.d}</div>
                    <code className="text-xs text-[hsl(var(--slide-muted))] font-mono">{p.ex}</code>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { i: ArrowLeftRight, t: "Back/fwd works" },
                { i: Share2, t: "Shareable links" },
                { i: Link2, t: "Deep-linkable from ext" },
              ].map(({ i: Icon, t }) => (
                <div
                  key={t}
                  className="rounded-lg border border-[hsl(var(--slide-border))] p-3 flex items-center gap-2 text-sm"
                >
                  <Icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* PWA */}
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
              <h3 className="text-3xl font-bold">PWA · for off-Chrome users</h3>
            </div>
            <p className="text-base text-[hsl(var(--slide-muted))] mb-5">
              Mobile, Safari desktop, ChromeOS — installable as a native-feeling app.
            </p>

            <div className="space-y-3 mb-5">
              {[
                ["Manifest", "standalone · WCO · maskable icons"],
                ["Service worker", "Workbox · SWR API cache · offline shell"],
                ["Share target", "Android share sheet → /save?url=…"],
                ["Protocol handler", "web+lmn:// opens installed PWA"],
                ["Push (VAPID)", "invites · share comments · billing"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4 text-sm">
                  <span className="font-semibold w-32 shrink-0">{k}</span>
                  <span className="text-[hsl(var(--slide-fg))]/85">{v}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-1.5 text-xs text-center">
              {[
                ["Chrome", "✅"],
                ["Edge", "✅"],
                ["Android", "✅"],
                ["iOS 16.4+", "A2HS"],
                ["Firefox", "partial"],
              ].map(([b, s]) => (
                <div key={b} className="rounded-md bg-[hsl(var(--slide-surface-2))] p-2">
                  <div className="text-[hsl(var(--slide-fg))]/70">{b}</div>
                  <div className="font-semibold text-[hsl(var(--slide-accent))]">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
