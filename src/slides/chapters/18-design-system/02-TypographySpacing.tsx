import { SlideLayout } from "@/slides/_layout/SlideLayout";

const scale = [
  { name: "Display", size: "72 / 80", weight: 700, sample: "Aa" },
  { name: "H1", size: "48 / 56", weight: 700, sample: "Aa" },
  { name: "H2", size: "32 / 40", weight: 600, sample: "Aa" },
  { name: "H3", size: "24 / 32", weight: 600, sample: "Aa" },
  { name: "Body lg", size: "18 / 28", weight: 400, sample: "Aa" },
  { name: "Body", size: "16 / 24", weight: 400, sample: "Aa" },
  { name: "Caption", size: "13 / 18", weight: 400, sample: "Aa" },
  { name: "Mono", size: "13 / 18", weight: 500, sample: "Aa", mono: true },
];

const space = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80];
const radius = [
  { name: "sm", px: 4 },
  { name: "md", px: 8 },
  { name: "lg", px: 12 },
  { name: "xl", px: 16 },
  { name: "2xl", px: 24 },
  { name: "full", px: 999 },
];

export default function TypographySpacing() {
  return (
    <SlideLayout chapter="Chapter 18 · Design System Primer" pageLabel="18.02">
      <div className="h-full flex flex-col pt-8">
        <h1 className="text-6xl font-bold tracking-tight mb-2">
          Type, space & <span className="text-[hsl(var(--slide-accent))]">radius</span>
        </h1>
        <p className="text-lg text-[hsl(var(--slide-muted))] mb-6 max-w-5xl">
          One scale. Inter for UI · Geist Mono for code. 4-px spacing grid. Six radius tokens.
        </p>
        <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 min-h-0 overflow-hidden">
            <h3 className="text-xl font-bold mb-4">Type scale</h3>
            <div className="space-y-2">
              {scale.map((t) => (
                <div key={t.name} className="flex items-center gap-4 py-1.5 border-b border-[hsl(var(--slide-border))] last:border-0">
                  <span className={`w-12 ${t.mono ? "font-mono" : ""}`} style={{ fontSize: 28, fontWeight: t.weight }}>{t.sample}</span>
                  <span className="font-semibold w-20 text-sm">{t.name}</span>
                  <code className="font-mono text-xs text-[hsl(var(--slide-muted))] w-20">{t.size}</code>
                  <code className="font-mono text-xs text-[hsl(var(--slide-muted))]">w {t.weight}</code>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 min-h-0">
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <h3 className="text-base font-bold mb-3">Spacing · 4px grid</h3>
              <div className="space-y-1">
                {space.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <code className="font-mono text-xs text-[hsl(var(--slide-muted))] w-8">{s}</code>
                    <div className="h-2.5 bg-[hsl(var(--slide-accent)_/_0.6)] rounded-sm" style={{ width: s }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <h3 className="text-base font-bold mb-3">Radius</h3>
              <div className="grid grid-cols-3 gap-3">
                {radius.map((r) => (
                  <div key={r.name} className="text-center">
                    <div className="w-12 h-12 mx-auto bg-[hsl(var(--slide-accent)_/_0.3)] border border-[hsl(var(--slide-accent))]" style={{ borderRadius: r.px }} />
                    <code className="text-xs font-mono text-[hsl(var(--slide-muted))] mt-1 block">{r.name}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
