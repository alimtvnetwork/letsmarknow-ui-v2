import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Trash2, Clock, ShieldAlert, MailWarning } from "lucide-react";

const timeline = [
  { d: "Day 0", t: "User clicks 'Delete account'", note: "Email confirm + password re-entry" },
  { d: "Day 0", t: "Soft delete · status=pending_delete", note: "Sign-out · all sessions revoked · banner: 'reactivate within 30 d'" },
  { d: "Day 30", t: "Hard delete cron", note: "Wipe Account · cascade leave Orgs · purge from search index" },
  { d: "Day 30", t: "Backups expire", note: "Encrypted backups roll off after 35 d" },
];

export default function AuthAccountDeletion() {
  return (
    <SlideLayout chapter="Chapter 5 · Auth & Account" pageLabel="05.07">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Account deletion · <span className="text-[hsl(var(--slide-accent))]">30-day grace window</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">Two-step: soft-delete first, hard-delete after 30 days. Account export lives in Ch 16.</p>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div>
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3 flex items-center gap-2"><Clock className="w-4 h-4" /> Deletion timeline</div>
            <div className="space-y-3">
              {timeline.map((s, i) => (
                <div key={i} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 flex gap-4">
                  <div className="text-[hsl(var(--slide-accent))] font-bold text-lg w-16 shrink-0">{s.d}</div>
                  <div>
                    <div className="text-base font-semibold flex items-center gap-2">{i === 0 ? <Trash2 className="w-4 h-4" /> : null}{s.t}</div>
                    <div className="text-sm text-[hsl(var(--slide-muted))]">{s.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-1 flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> What deletion does</div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 space-y-3">
              <div><div className="font-semibold text-base mb-1">Cascades</div><div className="text-sm text-[hsl(var(--slide-muted))]">Owned Orgs orphan to next Admin · sole-Owner Orgs require transfer or also delete · membership in other Orgs is dropped.</div></div>
              <div><div className="font-semibold text-base mb-1">Survives deletion</div><div className="text-sm text-[hsl(var(--slide-muted))]">Comments & shares author tombstoned to "Deleted user" · audit log keeps user_id hash for 1 year (compliance).</div></div>
              <div><div className="font-semibold text-base mb-1">Reactivation</div><div className="text-sm text-[hsl(var(--slide-muted))]">Sign in during the 30-day window restores everything. Day 31 — gone, no recovery path.</div></div>
            </div>
            <div className="rounded-xl border border-[hsl(var(--slide-accent)/0.4)] bg-[hsl(var(--slide-accent)/0.06)] p-4 flex gap-3">
              <MailWarning className="w-5 h-5 text-[hsl(var(--slide-accent))] shrink-0 mt-0.5" />
              <div className="text-sm">Want your data <em>before</em> you delete? Trigger Account Export first — see Chapter 16 · GDPR export.</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
