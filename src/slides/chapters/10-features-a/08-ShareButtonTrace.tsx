import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { StepTrace, StepTraceData } from "@/slides/_components/StepTrace";
import { Share2, Lock, Mail, Code2 } from "lucide-react";

const trace: StepTraceData = {
  click:  "User opens a Collection → clicks the Share button (top-right, share icon). Modal slides in from right (320ms cubic-bezier).",
  ui:     "Modal shows 4 tabs: Public link · Password · Invite · Embed. Default tab = Public. Toggle 'Anyone with link can view' flips on → link generated instantly and copied to clipboard with subtle pulse.",
  api: [
    { method: "POST", path: "/v1/shares" },
    { method: "GET",  path: "/v1/shares?target_id=…" },
    { method: "PATCH", path: "/v1/shares/:id" },
    { method: "DELETE", path: "/v1/shares/:id" },
  ],
  db:     "INSERT into shares (target_type='collection', target_id, mode, slug, password_hash?, expires_at?, created_by). Slug = 8-char nanoid. Public URL: /t/:slug",
  event:  "INSERT into history_events (kind='share.created', target_id=collection.id, payload={mode, slug, expires_at}). Powers Audit log + Activity feed.",
  notify: {
    toast:    "🔗 Link copied · anyone can view",
    channel:  "collection:{id} · share:{slug}",
    audience: "Editors of the Collection see a 'Sharing turned on' chip in their header; viewers on /t/:slug get live updates as items change.",
  },
};

const modes = [
  { icon: Share2, name: "Public link", detail: "Anyone with link · view-only" },
  { icon: Lock,   name: "Password",    detail: "+ password gate before /t/:slug" },
  { icon: Mail,   name: "Invite",      detail: "Email → Guest role · revocable" },
  { icon: Code2,  name: "Embed",       detail: "<iframe> widget · sandboxed" },
];

export default function ShareButtonTrace() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.08">
      <div className="h-full flex flex-col pt-4">
        <h1 className="text-4xl font-bold tracking-tight mb-1">
          Click <span className="text-[hsl(var(--slide-accent))]">Share</span> · what happens next
        </h1>
        <p className="text-base text-[hsl(var(--slide-muted))] mb-4 max-w-5xl">
          One button, four share modes — each one writes a row, fires an event, and broadcasts to the right audience.
        </p>

        {/* Modes strip */}
        <div className="grid grid-cols-4 gap-2.5 mb-4">
          {modes.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.name} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold truncate">{m.name}</div>
                  <div className="text-[10px] text-[hsl(var(--slide-muted))] truncate">{m.detail}</div>
                </div>
              </div>
            );
          })}
        </div>

        <StepTrace data={trace} className="flex-1 min-h-0" />
      </div>
    </SlideLayout>
  );
}
