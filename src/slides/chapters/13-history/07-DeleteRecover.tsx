import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Trash2, RotateCcw, AlertOctagon } from "lucide-react";

const stages = [
  { day: "Day 0", icon: Trash2, color: "hsl(var(--slide-accent))", title: "Soft-deleted", body: "Hidden from views. Restorable in 1 click. URL → 410." },
  { day: "Day 1–30", icon: RotateCcw, color: "hsl(45 90% 60%)", title: "Trash window", body: "Visible in /trash. Owner can restore. Counts toward quota at 50%." },
  { day: "Day 30+", icon: AlertOctagon, color: "hsl(0 70% 60%)", title: "Hard-delete", body: "Removed from primary. Backups purged within 7 days. Irreversible." },
];

const conflicts = [
  { a: "Edits title", b: "Trashes item", result: "Trash wins (later); edit visible in trash" },
  { a: "Trashes", b: "Trashes", result: "Single trash; deduped" },
  { a: "Trashes", b: "Restores", result: "Most recent action wins (LWW)" },
  { a: "Hard-deletes", b: "Anything later", result: "Rejected with TARGET_GONE" },
];

export default function DeleteRecover() {
  return (
    <SlideLayout chapter="Chapter 13 · History, Activity & Conflicts" pageLabel="13.07">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Delete & recover · <span className="text-[hsl(var(--slide-accent))]">30-day grace</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Two-stage delete. Hard-delete is the only irreversible operation in the app — and it takes a month to get there.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {stages.map((s) => (
            <div key={s.day} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
              <div className="text-xs font-mono text-[hsl(var(--slide-muted))] uppercase tracking-wider mb-3">{s.day}</div>
              <s.icon className="w-9 h-9 mb-4" style={{ color: s.color }} />
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-[hsl(var(--slide-muted))] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1">
          <div className="px-6 py-3 bg-[hsl(var(--slide-surface-2))] border-b border-[hsl(var(--slide-border))] grid grid-cols-12 text-xs font-mono text-[hsl(var(--slide-muted))] uppercase tracking-wider">
            <span className="col-span-3">User A</span>
            <span className="col-span-3">User B</span>
            <span className="col-span-6">Resolution</span>
          </div>
          <div className="divide-y divide-[hsl(var(--slide-border))]">
            {conflicts.map((c, i) => (
              <div key={i} className="px-6 py-3 grid grid-cols-12 text-sm">
                <span className="col-span-3">{c.a}</span>
                <span className="col-span-3">{c.b}</span>
                <span className="col-span-6 text-[hsl(var(--slide-muted))]">{c.result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
