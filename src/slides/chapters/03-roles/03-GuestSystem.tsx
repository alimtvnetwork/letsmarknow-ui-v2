import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { RoleBadge } from "@/slides/_components/RoleBadge";
import { UserPlus, Bot, Lock, Webhook, FileClock, ShieldAlert } from "lucide-react";

export default function GuestSystem() {
  return (
    <SlideLayout chapter="Chapter 3 · Edge actors" pageLabel="12">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">Two roles people misunderstand.</h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            <span className="font-semibold text-[hsl(var(--slide-fg))]">Guest</span> is a person with a tiny door.{" "}
            <span className="font-semibold text-[hsl(var(--slide-fg))]">System</span> is not a person at all.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-7 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--slide-warning)/0.18)] flex items-center justify-center">
                <UserPlus className="w-7 h-7 text-[hsl(var(--slide-warning))]" />
              </div>
              <div>
                <div className="text-3xl font-bold">Guest</div>
                <RoleBadge role="guest" className="mt-1" />
              </div>
            </div>
            <div className="text-lg text-[hsl(var(--slide-muted))] mb-5">
              An external person invited to one specific Space or share — never the whole Org.
            </div>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3"><Lock className="w-5 h-5 mt-1 text-[hsl(var(--slide-warning))] shrink-0" /><span>Sees only the Spaces explicitly listed on their member row.</span></li>
              <li className="flex items-start gap-3"><ShieldAlert className="w-5 h-5 mt-1 text-[hsl(var(--slide-warning))] shrink-0" /><span>Cannot invite, share, or browse other Spaces.</span></li>
              <li className="flex items-start gap-3"><FileClock className="w-5 h-5 mt-1 text-[hsl(var(--slide-warning))] shrink-0" /><span>Counts as a "guest seat" — usually free or discounted on Team plans.</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--slide-fg)/0.08)] flex items-center justify-center">
                <Bot className="w-7 h-7 text-[hsl(var(--slide-fg))]" />
              </div>
              <div>
                <div className="text-3xl font-bold">System</div>
                <RoleBadge role="system" className="mt-1" />
              </div>
            </div>
            <div className="text-lg text-[hsl(var(--slide-muted))] mb-5">
              The server itself, acting on the user's behalf. Not assignable from any UI — enforced by SQL <code className="font-mono">CHECK</code>.
            </div>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3"><Webhook className="w-5 h-5 mt-1 text-[hsl(var(--slide-accent))] shrink-0" /><span>Webhook handlers (Stripe, Paddle), background jobs, scheduled tasks.</span></li>
              <li className="flex items-start gap-3"><FileClock className="w-5 h-5 mt-1 text-[hsl(var(--slide-accent))] shrink-0" /><span>Audit-log entries from automated cleanups appear with <code className="font-mono">actor_role="system"</code>.</span></li>
              <li className="flex items-start gap-3"><Lock className="w-5 h-5 mt-1 text-[hsl(var(--slide-accent))] shrink-0" /><span>Cannot sign in. Cannot own resources. Cannot be billed.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
