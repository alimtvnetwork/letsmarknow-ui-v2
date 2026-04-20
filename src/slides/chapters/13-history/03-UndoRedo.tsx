import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Undo2, Redo2 } from "lucide-react";

const stack = [
  { op: "Bulk move · 12 items → Reading", time: "3s", current: false },
  { op: "Tag added · #pricing", time: "8s", current: true },
  { op: "Renamed · 'Stuff' → 'Q3 Launch'", time: "1m", current: false },
  { op: "Saved 4 tabs to Inbox", time: "3m", current: false },
];

export default function UndoRedo() {
  return (
    <SlideLayout chapter="Chapter 13 · History, Activity & Conflicts" pageLabel="13.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Undo & redo · <span className="text-[hsl(var(--slide-accent))]">per user, per gesture</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Stack is per-user, scoped to your own changes. Bundled by correlation_id — undoing a bulk move undoes all 12 items as one.
        </p>

        <div className="grid grid-cols-3 gap-8 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Undo2 className="w-6 h-6 text-[hsl(var(--slide-accent))]" />
              <h3 className="text-xl font-bold">Your undo stack</h3>
              <code className="ml-auto text-xs font-mono px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-muted))]">⌘Z · ⇧⌘Z</code>
            </div>
            <div className="space-y-2">
              {stack.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg ${
                    s.current
                      ? "bg-[hsl(var(--slide-accent)_/_0.1)] border border-[hsl(var(--slide-accent)_/_0.4)]"
                      : "bg-[hsl(var(--slide-surface-2))]"
                  }`}
                >
                  <span className="text-base">{s.op}</span>
                  <span className="text-sm text-[hsl(var(--slide-muted))]">{s.time} ago</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-[hsl(var(--slide-muted))]">
              <Redo2 className="w-4 h-4" />
              <span>Redo available · stack persists 24h</span>
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <h3 className="text-xl font-bold mb-4">Rules</h3>
            <ul className="space-y-3 text-sm text-[hsl(var(--slide-muted))]">
              <li>• Per-user stack (no global undo)</li>
              <li>• Bundled by correlation_id</li>
              <li>• Inverse event written, not deletion</li>
              <li>• Skips events you can't undo (other users' moves)</li>
              <li>• Limit: 100 entries / 24h</li>
              <li>• Hard-deletes, billing, and auth never undoable</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
