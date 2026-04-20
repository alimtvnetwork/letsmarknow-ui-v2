import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { slides, chapters } from "@/slides/manifest";

export default function TableOfContents() {
  const real = chapters.filter((c) => c.number > 0);
  const counts = new Map<number, number>();
  for (const s of slides) counts.set(s.chapterNumber, (counts.get(s.chapterNumber) ?? 0) + 1);

  const col1 = real.slice(0, 10);
  const col2 = real.slice(10);

  const Row = ({ n, title, count }: { n: number; title: string; count: number }) => (
    <div className="flex items-baseline gap-4 py-2.5 border-b border-[hsl(var(--slide-border))]">
      <div className="text-base font-mono text-[hsl(var(--slide-accent))] tabular-nums w-8">
        {String(n).padStart(2, "0")}
      </div>
      <div className="text-xl font-semibold flex-1 truncate">{title}</div>
      <div className="text-sm font-mono text-[hsl(var(--slide-muted))] tabular-nums">
        {count} {count === 1 ? "slide" : "slides"}
      </div>
    </div>
  );

  return (
    <SlideLayout chapter="Table of contents" pageLabel="00.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          The arc · <span className="text-[hsl(var(--slide-accent))]">19 chapters</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-12 max-w-5xl">
          {slides.length} slides total. From vocabulary to motion tokens — every surface, every role, every rule.
        </p>
        <div className="grid grid-cols-2 gap-x-16 flex-1">
          <div>
            {col1.map((c) => (
              <Row key={c.number} n={c.number} title={c.title} count={counts.get(c.number) ?? 0} />
            ))}
          </div>
          <div>
            {col2.map((c) => (
              <Row key={c.number} n={c.number} title={c.title} count={counts.get(c.number) ?? 0} />
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
