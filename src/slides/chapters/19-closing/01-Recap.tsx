import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { chapters } from "@/slides/manifest";

export default function Recap() {
  const real = chapters.filter((c) => c.number > 0);
  return (
    <SlideLayout chapter="Chapter 19 · Closing" pageLabel="19.01">
      <div className="h-full flex flex-col pt-8">
        <h1 className="text-5xl font-bold tracking-tight mb-2">
          What we walked through · <span className="text-[hsl(var(--slide-accent))]">18 chapters</span>
        </h1>
        <p className="text-lg text-[hsl(var(--slide-muted))] mb-6 max-w-5xl">
          From vocabulary to motion tokens. Every surface, every role, every rule — one self-contained spec.
        </p>
        <div className="grid grid-cols-3 gap-3 flex-1 min-h-0">
          {real.map((c) => (
            <div
              key={c.number}
              className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-4 py-3 flex items-center gap-3"
            >
              <div className="text-xl font-bold text-[hsl(var(--slide-accent))] tabular-nums w-8">
                {String(c.number).padStart(2, "0")}
              </div>
              <div className="text-sm font-medium leading-tight">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
