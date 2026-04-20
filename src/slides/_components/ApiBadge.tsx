import { cn } from "@/lib/utils";

interface ApiBadgeProps {
  method?: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
  path: string;
  className?: string;
}

const methodColor: Record<string, string> = {
  GET: "bg-[hsl(var(--slide-accent)/0.15)] text-[hsl(var(--slide-accent))]",
  POST: "bg-[hsl(var(--slide-success)/0.15)] text-[hsl(var(--slide-success))]",
  PATCH: "bg-[hsl(var(--slide-warning)/0.15)] text-[hsl(var(--slide-warning))]",
  PUT: "bg-[hsl(var(--slide-warning)/0.15)] text-[hsl(var(--slide-warning))]",
  DELETE: "bg-[hsl(var(--slide-danger)/0.15)] text-[hsl(var(--slide-danger))]",
};

export function ApiBadge({ method = "POST", path, className }: ApiBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-sm",
        "border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))]",
        className
      )}
    >
      <span className={cn("rounded-full px-2 py-0.5 text-xs font-bold", methodColor[method])}>
        {method}
      </span>
      <span className="text-[hsl(var(--slide-fg))]">{path}</span>
    </span>
  );
}
