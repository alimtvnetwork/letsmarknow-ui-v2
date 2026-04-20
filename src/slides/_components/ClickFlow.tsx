import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  label: string;
  detail?: string;
  icon?: ReactNode;
}

/** A horizontal "step → arrow → step" flow visualization. */
export function ClickFlow({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <div className={cn("flex items-stretch gap-4", className)}>
      {steps.map((s, i) => (
        <div key={i} className="flex items-stretch gap-4">
          <div className="flex flex-col justify-center px-6 py-5 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] min-w-[220px]">
            <div className="flex items-center gap-3 text-base font-semibold text-[hsl(var(--slide-fg))]">
              {s.icon}
              {s.label}
            </div>
            {s.detail && (
              <div className="mt-1 text-sm text-[hsl(var(--slide-muted))]">{s.detail}</div>
            )}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="self-center w-8 h-8 text-[hsl(var(--slide-accent))]" />
          )}
        </div>
      ))}
    </div>
  );
}
