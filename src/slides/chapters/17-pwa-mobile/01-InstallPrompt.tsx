import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Smartphone, Download, Zap } from "lucide-react";

const triggers = [
  { when: "After 3 sessions", body: "iOS Safari banner: 'Add to Home Screen'", platform: "iOS" },
  { when: "After 'save 5 items'", body: "beforeinstallprompt fired in custom toast", platform: "Android · Chrome" },
  { when: "From settings", body: "Always-available 'Install app' in user menu", platform: "All" },
  { when: "Never", body: "If user dismissed twice — respect for 30 days", platform: "All" },
];

export default function InstallPrompt() {
  return (
    <SlideLayout chapter="Chapter 17 · PWA & Mobile" pageLabel="17.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Install · <span className="text-[hsl(var(--slide-accent))]">earned, not nagged</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          PWA install prompted only after meaningful usage. Standalone manifest, custom icon, splash screen.
        </p>
        <div className="grid grid-cols-3 gap-8 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-[hsl(var(--slide-accent))]" />
              <h3 className="text-xl font-bold">Trigger logic</h3>
            </div>
            <div className="space-y-3">
              {triggers.map((t) => (
                <div key={t.when} className="flex gap-4 px-4 py-3 rounded-lg bg-[hsl(var(--slide-surface-2))]">
                  <div className="w-40 text-sm font-mono text-[hsl(var(--slide-accent))]">{t.when}</div>
                  <div className="flex-1 text-sm text-[hsl(var(--slide-muted))]">{t.body}</div>
                  <div className="text-xs px-2 py-0.5 rounded bg-[hsl(var(--slide-bg))] self-start text-[hsl(var(--slide-muted))]">{t.platform}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[hsl(var(--slide-accent))] to-[hsl(280_70%_65%)] flex items-center justify-center mb-5 shadow-2xl">
              <Smartphone className="w-12 h-12 text-black" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-center">Let's Mark Now</h3>
            <p className="text-xs text-[hsl(var(--slide-muted))] text-center mb-5">letsmarknow.com</p>
            <button className="w-full py-2.5 rounded-lg bg-[hsl(var(--slide-accent))] text-black font-semibold text-sm flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Install
            </button>
            <p className="text-xs text-[hsl(var(--slide-muted))] mt-3 text-center">~2 MB · works offline</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
