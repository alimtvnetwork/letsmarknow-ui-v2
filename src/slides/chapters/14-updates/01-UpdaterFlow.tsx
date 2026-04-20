import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Download, RefreshCw, CheckCircle2 } from "lucide-react";

const stages = [
  { icon: RefreshCw, title: "Detect", body: "SW polls /version every 6h. New version → cached silently.", state: "Background" },
  { icon: Download, title: "Stage", body: "New assets pre-fetched. Old version still serving the tab.", state: "Invisible" },
  { icon: CheckCircle2, title: "Apply", body: "Subtle banner: 'Update ready · refresh'. One click reloads.", state: "User-prompted" },
];

export default function UpdaterFlow() {
  return (
    <SlideLayout chapter="Chapter 14 · Updates & Release Channels" pageLabel="14.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Updater · <span className="text-[hsl(var(--slide-accent))]">stage, then prompt</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-12 max-w-5xl">
          Updates never interrupt mid-task. Pre-fetched in the background; user picks the moment to reload.
        </p>
        <div className="grid grid-cols-3 gap-6 flex-1">
          {stages.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 relative">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border))] text-xs font-mono text-[hsl(var(--slide-muted))]">
                {String(i + 1).padStart(2, "0")} · {s.state}
              </div>
              <s.icon className="w-12 h-12 text-[hsl(var(--slide-accent))] mb-6 mt-3" />
              <h3 className="text-3xl font-bold mb-3">{s.title}</h3>
              <p className="text-lg text-[hsl(var(--slide-muted))] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-[hsl(var(--slide-accent)_/_0.4)] bg-[hsl(var(--slide-accent)_/_0.08)] px-6 py-4 flex items-center gap-4">
          <RefreshCw className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
          <span className="text-base">Update ready · v2.4.1 → v2.4.2</span>
          <button className="ml-auto px-4 py-1.5 rounded-lg bg-[hsl(var(--slide-accent))] text-black font-semibold text-sm">Refresh</button>
          <button className="text-sm text-[hsl(var(--slide-muted))]">Later</button>
        </div>
      </div>
    </SlideLayout>
  );
}
