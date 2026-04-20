import { SlideLayout } from "@/slides/_layout/SlideLayout";

const events = [
  { kind: "item.created", actor: "Anya", target: "Linear pricing", t: "10:42:18" },
  { kind: "item.tagged", actor: "Anya", target: "+#pricing", t: "10:42:21" },
  { kind: "item.moved", actor: "Marcus", target: "→ Q3 Launch", t: "10:43:02" },
  { kind: "comment.added", actor: "Sora", target: "Should this…", t: "10:44:11" },
  { kind: "share.created", actor: "Anya", target: "Public link", t: "10:45:30" },
  { kind: "item.starred", actor: "Marcus", target: "—", t: "10:46:08" },
];

export default function EventLog() {
  return (
    <SlideLayout chapter="Chapter 13 · History, Activity & Conflicts" pageLabel="13.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Event log · <span className="text-[hsl(var(--slide-accent))]">append-only spine</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Every meaningful change is one event. Keyed by UUIDv7, sequenced per-Org. Source of truth for activity, undo, and conflict resolution.
        </p>

        <div className="grid grid-cols-3 gap-8 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden">
            <div className="px-6 py-3 bg-[hsl(var(--slide-surface-2))] border-b border-[hsl(var(--slide-border))] grid grid-cols-12 text-xs font-mono text-[hsl(var(--slide-muted))] uppercase tracking-wider">
              <span>Time</span>
              <span className="col-span-3">Kind</span>
              <span className="col-span-2">Actor</span>
              <span className="col-span-6">Target</span>
            </div>
            <div className="divide-y divide-[hsl(var(--slide-border))]">
              {events.map((e, i) => (
                <div key={i} className="px-6 py-3 grid grid-cols-12 text-sm font-mono">
                  <span className="text-[hsl(var(--slide-muted))]">{e.t}</span>
                  <span className="col-span-3 text-[hsl(var(--slide-accent))]">{e.kind}</span>
                  <span className="col-span-2">{e.actor}</span>
                  <span className="col-span-6 text-[hsl(var(--slide-muted))]">{e.target}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <h3 className="text-xl font-bold mb-4">Event shape</h3>
            <pre className="text-xs font-mono text-[hsl(var(--slide-muted))] leading-6">{`{
  id: uuidv7,
  seq: 42,
  org_id: "...",
  actor_id: "...",
  kind: "item.moved",
  target: { type, id },
  payload: { from, to },
  correlation_id: uuidv7,
  ts: "2026-04-20T..."
}`}</pre>
            <p className="text-sm text-[hsl(var(--slide-muted))] mt-4">
              <span className="text-[hsl(var(--slide-fg))]">correlation_id</span> groups events from one user gesture (e.g. bulk move = N events, 1 correlation).
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
