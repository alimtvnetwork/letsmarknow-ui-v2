import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { X } from "lucide-react";

const problems = [
  {
    tool: "Toby",
    pain: "Free tier capped at 60 saved tabs. Dated UI. No mind-map view. Mediocre search.",
  },
  {
    tool: "Tab Extend",
    pain: "Free users limited to 8 categories. No undo/redo. No group-level sharing. Broken search.",
  },
  {
    tool: "Both",
    pain: "Not seriously updated in years. Not built for the AI era. No password-protected expiring share links.",
  },
];

export default function ProblemSlide() {
  return (
    <SlideLayout chapter="Chapter 1 · The problem" pageLabel="03">
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-6xl font-bold leading-tight mb-4">
          Knowledge workers live in <span className="text-[hsl(var(--slide-accent))]">80+ tabs</span>.
        </h2>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-14 max-w-[1300px]">
          The two leading tools both fall short — and neither has been seriously updated in years.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.tool}
              className="rounded-2xl border border-[hsl(var(--slide-danger)/0.3)] bg-[hsl(var(--slide-danger)/0.05)] p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--slide-danger)/0.2)] flex items-center justify-center">
                  <X className="w-5 h-5 text-[hsl(var(--slide-danger))]" />
                </div>
                <div className="text-2xl font-bold">{p.tool}</div>
              </div>
              <p className="text-lg text-[hsl(var(--slide-fg))] leading-relaxed">{p.pain}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
