import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Check, X, Minus } from "lucide-react";

type Cell = "yes" | "no" | "scoped";

const rows: { action: string; cells: Record<string, Cell> }[] = [
  { action: "Read content", cells: { owner: "yes", admin: "yes", editor: "yes", viewer: "yes", billing: "no", guest: "scoped" } },
  { action: "Create / edit / delete items", cells: { owner: "yes", admin: "yes", editor: "yes", viewer: "no", billing: "no", guest: "scoped" } },
  { action: "Share publicly", cells: { owner: "yes", admin: "yes", editor: "yes", viewer: "no", billing: "no", guest: "no" } },
  { action: "Invite / remove members", cells: { owner: "yes", admin: "yes", editor: "no", viewer: "no", billing: "no", guest: "no" } },
  { action: "Change roles (non-owner)", cells: { owner: "yes", admin: "yes", editor: "no", viewer: "no", billing: "no", guest: "no" } },
  { action: "Manage billing & invoices", cells: { owner: "yes", admin: "yes", editor: "no", viewer: "no", billing: "yes", guest: "no" } },
  { action: "Configure SSO / audit log", cells: { owner: "yes", admin: "yes", editor: "no", viewer: "no", billing: "no", guest: "no" } },
  { action: "Transfer ownership", cells: { owner: "yes", admin: "no", editor: "no", viewer: "no", billing: "no", guest: "no" } },
  { action: "Delete organization", cells: { owner: "yes", admin: "no", editor: "no", viewer: "no", billing: "no", guest: "no" } },
];

const cols = [
  { key: "owner", label: "Owner" },
  { key: "admin", label: "Admin" },
  { key: "editor", label: "Editor" },
  { key: "viewer", label: "Viewer" },
  { key: "billing", label: "Billing" },
  { key: "guest", label: "Guest" },
];

function CellIcon({ value }: { value: Cell }) {
  if (value === "yes") return <div className="inline-flex w-9 h-9 rounded-full items-center justify-center bg-[hsl(var(--slide-success)/0.18)]"><Check className="w-5 h-5 text-[hsl(var(--slide-success))]" /></div>;
  if (value === "no") return <div className="inline-flex w-9 h-9 rounded-full items-center justify-center bg-[hsl(var(--slide-fg)/0.06)]"><X className="w-5 h-5 text-[hsl(var(--slide-muted))]" /></div>;
  return <div className="inline-flex w-9 h-9 rounded-full items-center justify-center bg-[hsl(var(--slide-warning)/0.18)]"><Minus className="w-5 h-5 text-[hsl(var(--slide-warning))]" /></div>;
}

export default function PermissionMatrix() {
  return (
    <SlideLayout chapter="Chapter 3 · Permissions" pageLabel="11">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">Permission matrix.</h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">One source of truth across API, UI, and audit log.</p>
        </div>
        <div className="flex-1 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden">
          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-fg)/0.04)]">
                <th className="text-left px-6 py-4 font-semibold">Action</th>
                {cols.map((c) => (<th key={c.key} className="px-3 py-4 font-semibold text-center">{c.label}</th>))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.action} className={i % 2 ? "bg-[hsl(var(--slide-fg)/0.02)]" : ""}>
                  <td className="px-6 py-3 font-medium">{r.action}</td>
                  {cols.map((c) => (<td key={c.key} className="px-3 py-3 text-center"><CellIcon value={r.cells[c.key]} /></td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 flex items-center gap-7 text-sm text-[hsl(var(--slide-muted))]">
          <span className="flex items-center gap-2"><CellIcon value="yes" /> Allowed</span>
          <span className="flex items-center gap-2"><CellIcon value="no" /> Denied</span>
          <span className="flex items-center gap-2"><CellIcon value="scoped" /> Scoped — only on resources explicitly granted</span>
        </div>
      </div>
    </SlideLayout>
  );
}
