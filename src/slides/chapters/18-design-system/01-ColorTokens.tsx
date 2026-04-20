import { SlideLayout } from "@/slides/_layout/SlideLayout";

const semantic = [
  { name: "--background", hsl: "220 18% 8%", role: "Page background" },
  { name: "--foreground", hsl: "0 0% 96%", role: "Primary text" },
  { name: "--surface", hsl: "220 16% 12%", role: "Cards · panels" },
  { name: "--surface-2", hsl: "220 14% 16%", role: "Inset · hover" },
  { name: "--border", hsl: "220 12% 22%", role: "Dividers · outlines" },
  { name: "--muted", hsl: "220 8% 60%", role: "Secondary text" },
  { name: "--accent", hsl: "200 100% 60%", role: "Primary action · brand" },
  { name: "--ring", hsl: "200 100% 60%", role: "Focus outline" },
];

const status = [
  { name: "--success", hsl: "160 70% 55%" },
  { name: "--warning", hsl: "45 90% 60%" },
  { name: "--danger", hsl: "0 70% 60%" },
  { name: "--info", hsl: "210 80% 60%" },
];

export default function ColorTokens() {
  return (
    <SlideLayout chapter="Chapter 18 · Design System Primer" pageLabel="18.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Color tokens · <span className="text-[hsl(var(--slide-accent))]">HSL only</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Components reference semantic names, never hex. HSL keeps tonal shifts predictable across themes.
        </p>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <h3 className="text-xl font-bold mb-4">Semantic palette</h3>
            <div className="space-y-2">
              {semantic.map((c) => (
                <div key={c.name} className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 border border-[hsl(var(--slide-border))]" style={{ background: `hsl(${c.hsl})` }} />
                  <code className="font-mono text-[hsl(var(--slide-accent))] w-32">{c.name}</code>
                  <code className="font-mono text-xs text-[hsl(var(--slide-muted))] w-28">{c.hsl}</code>
                  <span className="text-[hsl(var(--slide-muted))] flex-1 text-right">{c.role}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
              <h3 className="text-xl font-bold mb-4">Status</h3>
              <div className="grid grid-cols-2 gap-3">
                {status.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg" style={{ background: `hsl(${s.hsl})` }} />
                    <code className="font-mono text-xs text-[hsl(var(--slide-accent))]">{s.name}</code>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border-2 border-[hsl(0_70%_60%_/_0.4)] bg-[hsl(0_70%_60%_/_0.05)] p-6">
              <h3 className="text-lg font-bold mb-3 text-[hsl(0_70%_60%)]">Locked rules</h3>
              <ul className="space-y-2 text-sm text-[hsl(var(--slide-muted))]">
                <li>· Never `#hex` in components</li>
                <li>· Never raw `rgb()` in CSS</li>
                <li>· Always reference `hsl(var(--name))`</li>
                <li>· Status uses color + icon + text</li>
                <li>· Contrast ≥ AA (4.5:1) verified per pair</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
