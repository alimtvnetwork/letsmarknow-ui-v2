import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { TrendingUp, Eye, Globe2 } from "lucide-react";

const stats = [
  { label: "Total views", value: "1,284", icon: Eye },
  { label: "Unique visitors", value: "412", icon: Globe2 },
  { label: "Avg time on page", value: "2m 14s", icon: TrendingUp },
];

const recent = [
  { who: "anya@evatix.co", what: "Viewed", where: "Chrome · Singapore", when: "12 min ago" },
  { who: "anonymous", what: "Unlocked password", where: "Safari · iOS", when: "1h ago" },
  { who: "marcus@evatix.co", what: "Downloaded copy", where: "Chrome · Tokyo", when: "3h ago" },
  { who: "anonymous", what: "Failed password (3/5)", where: "Edge · unknown", when: "5h ago" },
];

export default function ShareAnalyticsAudit() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.08">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Share analytics & <span className="text-[hsl(var(--slide-accent))]">audit log</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Pro tier: see who opened a share, when, from where. Audit log is forever; analytics rolls up after 90 days.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
              <s.icon className="w-7 h-7 text-[hsl(var(--slide-accent))] mb-4" />
              <div className="text-4xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-[hsl(var(--slide-muted))]">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] flex-1 overflow-hidden">
          <div className="px-6 py-4 border-b border-[hsl(var(--slide-border))] font-semibold bg-[hsl(var(--slide-surface-2))]">
            Recent activity
          </div>
          <div className="divide-y divide-[hsl(var(--slide-border))]">
            {recent.map((r, i) => (
              <div key={i} className="px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <code className="text-sm text-[hsl(var(--slide-muted))]">{r.who}</code>
                  <span className="text-base">{r.what}</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-[hsl(var(--slide-muted))]">
                  <span>{r.where}</span>
                  <span className="w-20 text-right">{r.when}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
