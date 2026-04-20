import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { slides, chapters } from "@/slides/manifest";

export default function ThankYou() {
  const slideCount = slides.length;
  const chapterCount = chapters.filter((c) => c.number > 0).length;

  return (
    <SlideLayout chapter="Chapter 19 · Closing" pageLabel="19.03">
      <div className="h-full flex flex-col items-center justify-center text-center -mt-12">
        <div className="text-sm font-mono uppercase tracking-[0.3em] text-[hsl(var(--slide-accent))] mb-8">
          End of deck
        </div>
        <h1 className="text-[10rem] font-bold tracking-tighter leading-none mb-8">
          Thank&nbsp;<span className="text-[hsl(var(--slide-accent))]">you.</span>
        </h1>
        <p className="text-3xl text-[hsl(var(--slide-muted))] max-w-4xl leading-snug mb-12">
          One spec. {chapterCount} chapters. {slideCount} slides. Hand it to any model, any team — and they'll ship the same product.
        </p>
        <div className="flex items-center gap-10 text-base font-mono text-[hsl(var(--slide-muted))]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--slide-accent))]" />
            letsmarknow.com
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--slide-accent))]" />
            Built with Lovable
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--slide-accent))]" />
            v1.0 · spec-locked
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
