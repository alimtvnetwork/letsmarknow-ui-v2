import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ApiBadge } from "@/slides/_components/ApiBadge";

export default function CoverSlide() {
  return (
    <SlideLayout chapter="Frontend Walkthrough">
      <div className="h-full flex flex-col justify-center max-w-[1400px]">
        <div className="text-sm uppercase tracking-[0.3em] text-[hsl(var(--slide-accent))] font-semibold mb-6">
          Lets Mark Now
        </div>
        <h1 className="text-8xl font-bold leading-[1.05] tracking-tight">
          Every tab, <br />
          <span className="text-[hsl(var(--slide-accent))]">beautifully organized.</span>
        </h1>
        <p className="mt-10 text-2xl text-[hsl(var(--slide-muted))] max-w-[1100px] leading-relaxed">
          A frontend walkthrough of the LMN extension and web app — every screen, every click,
          every flow, from the user's point of view.
        </p>

        <div className="mt-16 flex items-center gap-4">
          <ApiBadge method="GET" path="/v1/spec" />
          <span className="text-base text-[hsl(var(--slide-muted))]">
            Press <kbd className="px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-fg))] font-mono text-sm">→</kbd> to begin · <kbd className="px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-fg))] font-mono text-sm">F</kbd> for fullscreen
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
