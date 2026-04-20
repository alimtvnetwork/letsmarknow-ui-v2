import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Trash2, Download, AlertOctagon, Calendar, Undo2, Shield } from "lucide-react";

export default function AccountDeletion() {
  return (
    <SlideLayout chapter="Chapter 5 · Deletion & GDPR" pageLabel="24">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">Leaving — and taking your data with you.</h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            30-day grace · GDPR export anytime · anonymisation in foreign Orgs.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-7">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-warning)/0.15)] flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-[hsl(var(--slide-warning))]" />
              </div>
              <div className="text-2xl font-bold">Delete account</div>
            </div>
            <div className="space-y-3 flex-1">
              {[
                { icon: AlertOctagon, t: "Pre-flight blockers", s: "Sole Owner of any Team Org? Unpaid invoices? Resolve first.", color: "hsl(var(--slide-warning))" },
                { icon: Shield, t: "Re-auth + 'delete my account'", s: "Type the phrase. MFA re-prompt if enabled.", color: "hsl(var(--slide-accent))" },
                { icon: Calendar, t: "T+0 — soft delete", s: "Sessions revoked · Personal Org soft-deleted · public shares auto-revoked.", color: "hsl(var(--slide-accent))" },
                { icon: Undo2, t: "T+7d / T+29d — reminder + restore", s: "Sign in to cancel. One click restores Personal Org.", color: "hsl(var(--slide-success))" },
                { icon: Trash2, t: "T+30d — hard delete", s: "Account row destroyed. created_by → null ('Deleted user').", color: "hsl(var(--slide-warning))" },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.t} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${step.color.replace(")", " / 0.15)")}` }}>
                      <Icon className="w-4 h-4" style={{ color: step.color }} />
                    </div>
                    <div>
                      <div className="font-bold">{step.t}</div>
                      <div className="text-sm text-[hsl(var(--slide-muted))]">{step.s}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-success)/0.15)] flex items-center justify-center">
                <Download className="w-6 h-6 text-[hsl(var(--slide-success))]" />
              </div>
              <div className="text-2xl font-bold">"Download my data"</div>
            </div>
            <div className="text-base text-[hsl(var(--slide-muted))] mb-5">
              <span className="font-mono text-sm text-[hsl(var(--slide-fg))]">/me/security/export</span> — async ZIP, signed URL (24h TTL), also emailed when ready.
            </div>
            <div className="rounded-xl bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border))] p-4 font-mono text-xs flex-1">
              <div className="text-[hsl(var(--slide-muted))] mb-2">lmn-export-2026-04-20.zip</div>
              <div className="space-y-1">
                <div>├── account.json</div>
                <div>├── README.md</div>
                <div>├── orgs/</div>
                <div className="pl-4">├── &lt;org-id&gt;/spaces.json</div>
                <div className="pl-4">├── &lt;org-id&gt;/collections.json</div>
                <div className="pl-4">├── &lt;org-id&gt;/groups.json</div>
                <div className="pl-4">├── &lt;org-id&gt;/items.json</div>
                <div className="pl-4">├── &lt;org-id&gt;/tags.json</div>
                <div className="pl-4">└── &lt;org-id&gt;/notes/*.md</div>
                <div>├── comments.json</div>
                <div>└── audit_log.json <span className="text-[hsl(var(--slide-muted))]">(Owner/Admin only)</span></div>
              </div>
            </div>
            <div className="mt-4 text-sm text-[hsl(var(--slide-muted))]">
              JSON for data + Markdown for notes — human-readable and machine-readable.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
