import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Inbox, Mail, Bell } from "lucide-react";

const items = [
  { who: "Sara", action: "commented on", target: "Linear pricing teardown", time: "2 m", read: false },
  { who: "Ben", action: "mentioned you in", target: "Marketing roadmap doc", time: "1 h", read: false },
  { who: "Zara", action: "shared", target: "Q2 Reading queue", time: "5 h", read: true },
  { who: "System", action: "Trash auto-emptied", target: "12 items removed", time: "1 d", read: true },
  { who: "Alim", action: "invited you to", target: "Atto Property Org", time: "2 d", read: true },
];

export default function Notifications() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.07">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Notifications · <span className="text-[hsl(var(--slide-accent))]">inbox · email · push</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">One inbox. Three delivery channels. Per-event opt-out.</p>

        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex flex-col">
            <div className="px-5 py-3 border-b border-[hsl(var(--slide-border))] flex items-center gap-3">
              <Inbox className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <span className="font-semibold">Inbox</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--slide-accent)_/_0.15)] text-[hsl(var(--slide-accent))]">2 unread</span>
              <button className="ml-auto text-xs text-[hsl(var(--slide-muted))] hover:text-[hsl(var(--slide-accent))]">Mark all read</button>
            </div>
            <div className="flex-1 overflow-auto">
              {items.map((it, i) => (
                <div key={i} className={`px-5 py-3 border-b border-[hsl(var(--slide-border))] last:border-0 flex items-start gap-3 ${!it.read ? "bg-[hsl(var(--slide-accent)_/_0.04)]" : ""}`}>
                  {!it.read && <div className="w-2 h-2 rounded-full bg-[hsl(var(--slide-accent))] mt-2" />}
                  {it.read && <div className="w-2 h-2 mt-2" />}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm">
                      <span className="font-semibold">{it.who}</span>
                      <span className="text-[hsl(var(--slide-fg))]/70"> {it.action} </span>
                      <span className="font-medium">{it.target}</span>
                    </div>
                    <div className="text-xs text-[hsl(var(--slide-muted))] mt-0.5">{it.time} ago</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
              <div className="flex items-center gap-2 mb-3">
                <Inbox className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                <div className="text-sm font-semibold">In-app inbox</div>
              </div>
              <div className="text-xs text-[hsl(var(--slide-fg))]/80">Always on. Lives in app shell badge. Real-time via WS.</div>
            </div>
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                <div className="text-sm font-semibold">Email</div>
              </div>
              <div className="text-xs text-[hsl(var(--slide-fg))]/80">Default: mentions + invites only. Daily digest opt-in. Plain text + HTML.</div>
            </div>
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
              <div className="flex items-center gap-2 mb-3">
                <Bell className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                <div className="text-sm font-semibold">Web push</div>
              </div>
              <div className="text-xs text-[hsl(var(--slide-fg))]/80">Opt-in only. PWA + extension. Throttled to 1 per 5 min per origin.</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
