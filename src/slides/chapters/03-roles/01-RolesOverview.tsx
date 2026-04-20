import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { RoleBadge, type Role } from "@/slides/_components/RoleBadge";
import {
  Crown,
  Shield,
  Pencil,
  Eye,
  CreditCard,
  UserPlus,
  Bot,
} from "lucide-react";

const roles: {
  role: Role;
  icon: typeof Crown;
  title: string;
  who: string;
  power: string;
}[] = [
  {
    role: "owner",
    icon: Crown,
    title: "Owner",
    who: "The person who created the Org. Exactly one per Org.",
    power: "Everything. Only role that can delete the Org or transfer ownership.",
  },
  {
    role: "admin",
    icon: Shield,
    title: "Admin",
    who: "Trusted operators — usually 1–3 per Org.",
    power: "Manage members, billing, SSO, content. Cannot delete the Org.",
  },
  {
    role: "editor",
    icon: Pencil,
    title: "Editor",
    who: "The default seat for working teammates.",
    power: "Create, update, delete content in Spaces they can access.",
  },
  {
    role: "viewer",
    icon: Eye,
    title: "Viewer",
    who: "Read-only teammates — clients, stakeholders, observers.",
    power: "Read content. Cannot edit, share, or invite.",
  },
  {
    role: "billing",
    icon: CreditCard,
    title: "Billing",
    who: "Finance contact who shouldn't see content.",
    power: "Invoices, payment method, plan changes. No content access.",
  },
  {
    role: "guest",
    icon: UserPlus,
    title: "Guest",
    who: "External collaborator on a single Space or share.",
    power: "Scoped access only — never sees the rest of the Org.",
  },
  {
    role: "system",
    icon: Bot,
    title: "System",
    who: "Server-issued actor. Never assigned to humans.",
    power: "Background jobs, webhooks, audit-log automated entries.",
  },
];

export default function RolesOverview() {
  return (
    <SlideLayout chapter="Chapter 3 · Roles" pageLabel="10">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Seven roles. Locked enum.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            Six humans can hold. <span className="font-semibold text-[hsl(var(--slide-fg))]">system</span> is server-only — pinned by SQL <code className="font-mono">CHECK</code>.
          </p>
        </div>

        <div className="flex flex-col gap-5 flex-1">
          {[roles.slice(0, 4), roles.slice(4, 7)].map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`grid gap-5 flex-1 ${rowIdx === 0 ? "grid-cols-4" : "grid-cols-3 max-w-[75%] mx-auto w-full"}`}
            >
              {row.map((r) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.role}
                    className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-accent)/0.12)] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[hsl(var(--slide-accent))]" />
                      </div>
                      <RoleBadge role={r.role} />
                    </div>
                    <div className="text-2xl font-bold mb-2">{r.title}</div>
                    <div className="text-sm text-[hsl(var(--slide-muted))] mb-3">
                      {r.who}
                    </div>
                    <div className="text-base mt-auto pt-3 border-t border-[hsl(var(--slide-border))]">
                      {r.power}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
