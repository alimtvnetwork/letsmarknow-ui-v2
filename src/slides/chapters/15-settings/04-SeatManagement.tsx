import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { UserPlus, MoreHorizontal } from "lucide-react";

const members = [
  { name: "Anya Tan", email: "anya@evatix.co", role: "Owner", color: "hsl(var(--slide-accent))", status: "Active" },
  { name: "Marcus Lee", email: "marcus@evatix.co", role: "Admin", color: "hsl(280 70% 65%)", status: "Active" },
  { name: "Sora Park", email: "sora@evatix.co", role: "Member", color: "hsl(45 90% 60%)", status: "Active" },
  { name: "Jenna Wu", email: "jenna@evatix.co", role: "Member", color: "hsl(160 70% 55%)", status: "Active" },
  { name: "—", email: "kai@evatix.co", role: "Member", color: "hsl(var(--slide-muted))", status: "Invited" },
  { name: "—", email: "ravi@evatix.co", role: "Viewer", color: "hsl(var(--slide-muted))", status: "Invited" },
];

export default function SeatManagement() {
  return (
    <SlideLayout chapter="Chapter 15 · Settings, Pricing & Plans" pageLabel="15.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Seats · <span className="text-[hsl(var(--slide-accent))]">prorated, per member</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Add a member → seat added & charged prorated. Remove → seat freed at next cycle. Invited seats count immediately.
        </p>
        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] flex-1 overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-[hsl(var(--slide-border))] flex items-center justify-between bg-[hsl(var(--slide-surface-2))]">
            <div>
              <span className="font-semibold">8 members</span>
              <span className="text-sm text-[hsl(var(--slide-muted))] ml-2">· 4 active · 2 invited · 2 seats free</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[hsl(var(--slide-accent))] text-black font-semibold text-sm">
              <UserPlus className="w-4 h-4" /> Invite
            </button>
          </div>
          <div className="divide-y divide-[hsl(var(--slide-border))] flex-1">
            {members.map((m) => (
              <div key={m.email} className="px-6 py-3 flex items-center gap-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-black" style={{ background: m.color }}>
                  {m.name === "—" ? "?" : m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-[hsl(var(--slide-muted))] truncate">{m.email}</div>
                </div>
                <div className="w-24 text-sm text-[hsl(var(--slide-muted))]">{m.status}</div>
                <div className="w-28">
                  <span className="px-2 py-1 rounded text-xs font-mono bg-[hsl(var(--slide-surface-2))]">{m.role}</span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-[hsl(var(--slide-muted))]" />
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-[hsl(var(--slide-muted))] mt-6">
          Owner can downgrade / remove anyone. Admins can invite & remove Members + Viewers. Roles enforced server-side per `03-roles/`.
        </p>
      </div>
    </SlideLayout>
  );
}
