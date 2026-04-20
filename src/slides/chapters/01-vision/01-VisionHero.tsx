import { SlideLayout } from "@/slides/_layout/SlideLayout";

export default function VisionHeroSlide() {
  return (
    <SlideLayout chapter="Chapter 1 · Vision & Personas" pageLabel="02">
      <div className="h-full flex flex-col justify-center max-w-[1500px]">
        <div className="text-base uppercase tracking-[0.3em] text-[hsl(var(--slide-accent))] font-semibold mb-8">
          The pitch
        </div>
        <h1 className="text-7xl font-bold leading-[1.05] tracking-tight mb-10">
          The AI-era replacement for{" "}
          <span className="text-[hsl(var(--slide-muted))] line-through">Toby</span> and{" "}
          <span className="text-[hsl(var(--slide-muted))] line-through">Tab Extend</span>.
        </h1>
        <p className="text-3xl text-[hsl(var(--slide-fg))] leading-snug mb-12 max-w-[1200px]">
          The fastest, most beautiful, no-limits way to{" "}
          <span className="text-[hsl(var(--slide-accent))] font-semibold">save</span>,{" "}
          <span className="text-[hsl(var(--slide-accent))] font-semibold">organize</span>,{" "}
          <span className="text-[hsl(var(--slide-accent))] font-semibold">share</span>, and{" "}
          <span className="text-[hsl(var(--slide-accent))] font-semibold">re-open</span>{" "}
          everything that lives in a browser tab.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-8">
          {[
            { metric: "<100ms", label: "Search-to-jump latency" },
            { metric: "5 levels", label: "Org → Space → Collection → Group → Item" },
            { metric: "Always", label: "Ctrl+Z works. No data loss." },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6"
            >
              <div className="text-5xl font-bold text-[hsl(var(--slide-accent))] tabular-nums">
                {m.metric}
              </div>
              <div className="text-base text-[hsl(var(--slide-muted))] mt-2">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
