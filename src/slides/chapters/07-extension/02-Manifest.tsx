import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Shield, Globe, Zap } from "lucide-react";

const permissions = [
  { name: "storage", reason: "Local cache + preferences" },
  { name: "tabs", reason: "Read active tab URL/title to save" },
  { name: "contextMenus", reason: "Right-click save targets" },
  { name: "notifications", reason: "Save toast + Undo" },
  { name: "alarms", reason: "Background sync every 5 min" },
  { name: "sidePanel", reason: "Companion panel surface" },
  { name: "commands", reason: "Keyboard shortcuts" },
  { name: "omnibox", reason: "URL-bar 'lmn' keyword" },
];

export default function ExtManifest() {
  return (
    <SlideLayout chapter="Chapter 7 · Extension" pageLabel="07.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">Manifest <span className="text-[hsl(var(--slide-accent))]">v3</span>, minimal permissions</h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">Every permission is justified. Reviewers and users see the same list.</p>
        <div className="grid grid-cols-5 gap-8 flex-1">
          <div className="col-span-2 space-y-5">
            {[
              { icon: Shield, t: "Manifest v3", d: "Service worker, declarativeNetRequest." },
              { icon: Globe, t: "Host permissions", d: "Only letsmarknow.com + app subdomain. No <all_urls>." },
              { icon: Zap, t: "Min Chrome 116", d: "Side Panel API + chrome.action.openPopup support." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex gap-4">
                <Icon className="w-8 h-8 text-[hsl(var(--slide-accent))] shrink-0 mt-1" />
                <div><div className="text-2xl font-semibold mb-1">{t}</div><div className="text-base text-[hsl(var(--slide-muted))]">{d}</div></div>
              </div>
            ))}
          </div>
          <div className="col-span-3 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-4">permissions[]</div>
            <div className="space-y-2">
              {permissions.map((p) => (
                <div key={p.name} className="flex items-center gap-4 py-2 border-b border-[hsl(var(--slide-border))]/50 last:border-0">
                  <code className="text-base text-[hsl(var(--slide-accent))] font-mono w-44">"{p.name}"</code>
                  <span className="text-base text-[hsl(var(--slide-fg))]/80">{p.reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
