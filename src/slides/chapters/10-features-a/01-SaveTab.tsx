import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { MousePointerClick, Keyboard, Menu, Globe } from "lucide-react";

const triggers = [
  { icon: MousePointerClick, name: "Toolbar popup", chord: "click", detail: "Default destination · last-used Collection" },
  { icon: Keyboard, name: "Keyboard", chord: "Alt+S", detail: "Silent save · toast with Undo (10 s)" },
  { icon: Menu, name: "Context menu", chord: "right-click", detail: "Save link · Save page · Save selection · Save image" },
  { icon: Globe, name: "Omnibox", chord: "lmn ⏎", detail: "Type-to-find or save current tab" },
];

export default function SaveTab() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Save tab · <span className="text-[hsl(var(--slide-accent))]">four triggers, one action</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-12 max-w-5xl">
          Same payload, same dedupe, same destination defaulting. Surface is just a shortcut.
        </p>

        <div className="grid grid-cols-2 gap-5 flex-1">
          {triggers.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-7 flex gap-5"
              >
                <div className="w-16 h-16 rounded-xl bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center shrink-0">
                  <Icon className="w-8 h-8 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl font-bold">{t.name}</div>
                    <code className="text-sm font-mono px-2 py-0.5 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-accent))]">
                      {t.chord}
                    </code>
                  </div>
                  <div className="text-base text-[hsl(var(--slide-fg))]/80">{t.detail}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
          {[
            ["Dedupe", "Same URL in same Collection → updates timestamp, shows 'already saved'"],
            ["Destination", "Last-used Collection · overridable in popup before save"],
            ["Tags", "Suggested from URL host + page title · accept with Tab"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-[hsl(var(--slide-border))] p-3">
              <div className="text-[hsl(var(--slide-accent))] text-xs uppercase tracking-widest">{k}</div>
              <div className="text-[hsl(var(--slide-fg))]/80 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
