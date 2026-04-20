import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Trash2, Clock, Download, FileJson } from "lucide-react";

const timeline = [
  { d: "Day 0", t: "User clicks 'Delete account'", note: "Email confirm + password re-entry" },
  { d: "Day 0", t: "Soft delete · status=pending_delete", note: "Sign-out · all sessions revoked · banner: 'reactivate within 30 d'" },
  { d: "Day 30", t: "Hard delete cron", note: "Wipe Account · cascade leave Orgs · purge from search index" },
  { d: "Day 30", t: "Backups expire", note: "Encrypted backups roll off after 35 d" },
];

const exportTree = `lmn-export-{user_id}-{date}.zip
├── account.json          # profile, prefs, MFA status
├── orgs/
│   └── {org_id}/
│       ├── org.json
│       ├── members.json
│       └── spaces/
│           └── {space_id}/
│               ├── collections.json
│               ├── items.json
│               └── tags.json
├── shares.json
├── activity.ndjson       # full history events
└── README.md`;

export default function AuthAccountDeletion() {
  return (
    <SlideLayout chapter="Chapter 5 · Auth & Account" pageLabel="05.07">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Deletion & <span className="text-[hsl(var(--slide-accent))]">GDPR export</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">30-day grace. Full data export any time. Hard-delete is irreversible.</p>
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
          <div>
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3 flex items-center gap-2"><Download className="w-4 h-4" /> GDPR export ZIP</div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="flex items-center gap-2 text-sm text-[hsl(var(--slide-muted))] mb-3"><FileJson className="w-4 h-4" /> Generated async · email link when ready</div>
              <pre className="text-xs font-mono leading-relaxed text-[hsl(var(--slide-fg))]/85 overflow-x-auto">{exportTree}</pre>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
