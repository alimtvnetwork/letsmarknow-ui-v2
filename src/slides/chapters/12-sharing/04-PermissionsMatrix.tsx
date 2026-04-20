import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Check, X, Minus } from "lucide-react";

const roles = ["Owner", "Admin", "Editor", "Member", "Viewer", "Guest", "Public"];
type Cell = true | false | "view";
const rows: Array<{ cap: string; vals: Cell[] }> = [
  { cap: "Read items", vals: [true, true, true, true, true, true, true] },
  { cap: "Create / edit items", vals: [true, true, true, true, false, false, false] },
  { cap: "Delete items (soft)", vals: [true, true, true, true, false, false, false] },
  { cap: "Manage Collections", vals: [true, true, true, false, false, false, false] },
  { cap: "Manage Spaces", vals: [true, true, false, false, false, false, false] },
  { cap: "Create shares", vals: [true, true, true, false, false, false, false] },
  { cap: "Invite members", vals: [true, true, false, false, false, false, false] },
  { cap: "Billing & plan", vals: [true, false, false, false, false, false, false] },
  { cap: "Audit log (Team)", vals: [true, true, false, false, false, false, false] },
  { cap: "Comments (Pro+)", vals: [true, true, true, true, "view", "view", false] },
];

const Icon = ({ v }: { v: Cell }) => {
  if (v === true) return <Check className="w-5 h-5 text-[hsl(var(--slide-accent))] mx-auto" />;
  if (v === false) return <X className="w-4 h-4 text-[hsl(var(--slide-muted))]/50 mx-auto" />;
  return <Minus className="w-4 h-4 text-[hsl(var(--slide-muted))] mx-auto" />;
};

export default function PermissionsMatrix() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Permissions matrix · <span className="text-[hsl(var(--slide-accent))]">7 roles × 10 capabilities</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-6">
          Server is sole authority. Client checks are UX hints only.
        </p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1">
          <div className="grid grid-cols-[2.5fr_repeat(7,1fr)] px-5 py-3 bg-[hsl(var(--slide-surface-2))] border-b border-[hsl(var(--slide-border))] text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))]">
            <div>Capability</div>
            {roles.map((r) => (<div key={r} className="text-center text-xs">{r}</div>))}
          </div>
          {rows.map((r, i) => (
            <div key={r.cap} className={`grid grid-cols-[2.5fr_repeat(7,1fr)] px-5 py-3 items-center border-b border-[hsl(var(--slide-border))] last:border-0 ${i % 2 === 1 ? "bg-[hsl(var(--slide-surface-2)_/_0.4)]" : ""}`}>
              <div className="text-sm font-medium">{r.cap}</div>
              {r.vals.map((v, j) => (<div key={j} className="text-center"><Icon v={v} /></div>))}
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-6 text-xs text-[hsl(var(--slide-muted))]">
          <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[hsl(var(--slide-accent))]" /> allowed</span>
          <span className="flex items-center gap-1.5"><Minus className="w-3 h-3" /> view-only</span>
          <span className="flex items-center gap-1.5"><X className="w-3 h-3" /> denied</span>
          <span className="ml-auto">Source: <code className="font-mono">08-sharing-collab/permissions-matrix.json</code></span>
        </div>
      </div>
    </SlideLayout>
  );
}
