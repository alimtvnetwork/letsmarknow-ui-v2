import { SlideLayout } from "@/slides/_layout/SlideLayout";

const channels = [
  { name: "Stable", users: "All", cadence: "Every 2 weeks", risk: "Low", color: "hsl(var(--slide-accent))", desc: "Default for new accounts. Battle-tested in beta for 1 week first." },
  { name: "Beta", users: "Opt-in · ~5%", cadence: "Weekly", risk: "Medium", color: "hsl(45 90% 60%)", desc: "Features 1 week ahead. Telemetry on. Toggle in Settings." },
  { name: "Canary", users: "Internal · ~50", cadence: "On every merge", risk: "High", color: "hsl(0 70% 60%)", desc: "Latest main. Team only. Bugs expected; one-click rollback." },
];

export default function ReleaseChannels() {
  return (
    <SlideLayout chapter="Chapter 14 · Updates & Release Channels" pageLabel="14.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Three channels · <span className="text-[hsl(var(--slide-accent))]">stable / beta / canary</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-12 max-w-5xl">
          Same web app, three deploy lanes. Beta is opt-in. Canary is internal. Stable is the default.
        </p>
        <div className="grid grid-cols-3 gap-6 flex-1">
          {channels.map((c) => (
            <div key={c.name} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 flex flex-col">
              <div className="w-3 h-3 rounded-full mb-4" style={{ background: c.color }} />
              <h3 className="text-3xl font-bold mb-1">{c.name}</h3>
              <p className="text-sm text-[hsl(var(--slide-muted))] mb-6">{c.desc}</p>
              <div className="mt-auto space-y-2 pt-6 border-t border-[hsl(var(--slide-border))] text-sm">
                <div className="flex justify-between"><span className="text-[hsl(var(--slide-muted))]">Users</span><span>{c.users}</span></div>
                <div className="flex justify-between"><span className="text-[hsl(var(--slide-muted))]">Cadence</span><span>{c.cadence}</span></div>
                <div className="flex justify-between"><span className="text-[hsl(var(--slide-muted))]">Risk</span><span style={{ color: c.color }}>{c.risk}</span></div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-[hsl(var(--slide-muted))] mt-6">
          Channel routed by cookie + JWT claim. Server picks the right asset bundle at the edge — no client-side bundle swap.
        </p>
      </div>
    </SlideLayout>
  );
}
