import { ScaledSlide } from "@/slides/_layout/ScaledSlide";
import { SlideEntry } from "@/slides/manifest";
import { cn } from "@/lib/utils";

interface Props {
  slides: SlideEntry[];
  currentIndex: number;
  onSelect: (i: number) => void;
}

export function ThumbnailSidebar({ slides, currentIndex, onSelect }: Props) {
  return (
    <aside className="w-[240px] shrink-0 h-full border-r border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-y-auto">
      <div className="px-4 py-3 text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold sticky top-0 bg-[hsl(var(--slide-surface))] border-b border-[hsl(var(--slide-border))] z-10">
        Slides · {slides.length}
      </div>
      <ul className="p-3 space-y-2">
        {slides.map((s, i) => {
          const Comp = s.component;
          return (
            <li key={s.id}>
              <button
                onClick={() => onSelect(i)}
                className={cn(
                  "w-full text-left rounded-lg overflow-hidden border transition-all group",
                  i === currentIndex
                    ? "border-[hsl(var(--slide-accent))] ring-2 ring-[hsl(var(--slide-accent)/0.4)]"
                    : "border-[hsl(var(--slide-border))] hover:border-[hsl(var(--slide-accent)/0.6)]"
                )}
              >
                <div className="aspect-video w-full bg-[hsl(var(--slide-bg))]">
                  <ScaledSlide>
                    <Comp />
                  </ScaledSlide>
                </div>
                <div className="px-3 py-2 bg-[hsl(var(--slide-surface-2))]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs tabular-nums text-[hsl(var(--slide-muted))]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-medium text-[hsl(var(--slide-fg))] truncate">
                      {s.title}
                    </span>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
