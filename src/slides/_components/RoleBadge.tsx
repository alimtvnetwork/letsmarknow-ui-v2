import { cn } from "@/lib/utils";

export type Role =
  | "owner"
  | "admin"
  | "editor"
  | "viewer"
  | "billing"
  | "guest"
  | "system";

const roleStyles: Record<Role, string> = {
  owner:
    "bg-[hsl(var(--slide-accent-2)/0.2)] text-[hsl(var(--slide-accent-2))] border-[hsl(var(--slide-accent-2)/0.4)]",
  admin:
    "bg-[hsl(var(--slide-accent)/0.2)] text-[hsl(var(--slide-accent))] border-[hsl(var(--slide-accent)/0.4)]",
  editor:
    "bg-[hsl(var(--slide-success)/0.2)] text-[hsl(var(--slide-success))] border-[hsl(var(--slide-success)/0.4)]",
  viewer:
    "bg-[hsl(var(--slide-muted)/0.2)] text-[hsl(var(--slide-muted))] border-[hsl(var(--slide-muted)/0.4)]",
  billing:
    "bg-[hsl(var(--slide-warning)/0.2)] text-[hsl(var(--slide-warning))] border-[hsl(var(--slide-warning)/0.4)]",
  guest:
    "bg-[hsl(var(--slide-warning)/0.15)] text-[hsl(var(--slide-warning))] border-[hsl(var(--slide-warning)/0.3)]",
  system:
    "bg-[hsl(var(--slide-fg)/0.1)] text-[hsl(var(--slide-fg))] border-[hsl(var(--slide-fg)/0.3)]",
};

export function RoleBadge({
  role,
  className,
}: {
  role: Role;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold uppercase tracking-wider",
        roleStyles[role],
        className
      )}
    >
      {role}
    </span>
  );
}
