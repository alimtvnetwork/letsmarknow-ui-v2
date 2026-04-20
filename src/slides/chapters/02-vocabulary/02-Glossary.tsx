import { SlideLayout } from "@/slides/_layout/SlideLayout";

const sharing = [
  { term: "Share", def: "Configuration that exposes a Space, Collection, Group, or Item externally." },
  { term: "Share link", def: "Public URL: letsmarknow.com/t/{slug}" },
  { term: "Slug", def: "Unique ID in the link. Random by default; custom in Pro+." },
  { term: "Public Share", def: "Anyone with the link can view. No auth." },
  { term: "Password Share", def: "Link + password required." },
  { term: "Expiring Share", def: "Stops working after a chosen date/time." },
  { term: "Invite-only", def: "Only specific email addresses, after auth." },
];

const tabs = [
  { term: "Open Tab", def: "A tab open in any of the user's Chrome windows." },
  { term: "Window", def: "A Chrome window. Numbered Window 1, 2, … by open order." },
  { term: "Save Session", def: "Save all tabs in window (or all windows) in one click." },
  { term: "Jump to Tab", def: "Focus matching tab if open; otherwise open new." },
  { term: "Close on Save", def: "After saving a session, close the saved tabs." },
];

const history = [
  { term: "Action", def: "Any user-initiated mutation (create, delete, move…)." },
  { term: "History Event", def: "A record of an Action, stored in the user's log." },
  { term: "Undo / Redo", def: "Revert / re-apply most-recent History Event." },
  { term: "History Window", def: "Retention period for Undo. Default 30 days." },
];

const views = [
  { term: "List", def: "One Item per row, vertical stack." },
  { term: "Grid", def: "Items as cards in a responsive grid." },
  { term: "Compact", def: "Favicon-only, dense (Tab-Extend Quick Tools style)." },
  { term: "Mind-map", def: "Bubbles for Spaces / Collections, optionally connected. (Phase 3)" },
  { term: "Column", def: "Tab-Extend-style horizontal columns side by side." },
];

function Group({ title, items, accent }: { title: string; items: { term: string; def: string }[]; accent: string }) {
  return (
    <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-7 rounded-full" style={{ background: accent }} />
        <div className="text-2xl font-bold">{title}</div>
      </div>
      <dl className="space-y-2">
        {items.map((it) => (
          <div key={it.term} className="grid grid-cols-[180px_1fr] gap-3 items-baseline">
            <dt className="text-base font-bold" style={{ color: accent }}>
              {it.term}
            </dt>
            <dd className="text-sm text-[hsl(var(--slide-muted))] leading-snug">{it.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function GlossarySlide() {
  return (
    <SlideLayout chapter="Chapter 2 · Glossary" pageLabel="08">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-5xl font-bold leading-tight">
            The locked vocabulary.
          </h2>
          <p className="text-lg text-[hsl(var(--slide-muted))] mt-2">
            Beyond the hierarchy — sharing, tabs, history, and views all have exact names.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 flex-1">
          <Group title="Sharing" items={sharing} accent="hsl(var(--slide-accent-2))" />
          <Group title="Tabs & Windows" items={tabs} accent="hsl(var(--slide-accent))" />
          <Group title="Actions & History" items={history} accent="hsl(var(--slide-success))" />
          <Group title="View Modes" items={views} accent="hsl(var(--slide-warning))" />
        </div>
      </div>
    </SlideLayout>
  );
}
