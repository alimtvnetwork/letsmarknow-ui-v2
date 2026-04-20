import { ScaledSlide } from "@/slides/_layout/ScaledSlide";
import { SlideEntry } from "@/slides/manifest";

export function SlideCanvas({ slide }: { slide: SlideEntry }) {
  const Comp = slide.component;
  return (
    <div className="flex-1 min-w-0 bg-[hsl(var(--slide-bg))] p-8 flex items-center justify-center">
      <div className="w-full h-full max-w-[1600px] max-h-[900px] aspect-video rounded-xl shadow-2xl overflow-hidden border border-[hsl(var(--slide-border))]">
        <ScaledSlide>
          <Comp />
        </ScaledSlide>
      </div>
    </div>
  );
}
