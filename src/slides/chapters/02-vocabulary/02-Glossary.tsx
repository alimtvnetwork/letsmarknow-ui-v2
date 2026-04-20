import { SlideLayout } from "@/slides/_layout/SlideLayout";

const groups = [
  {
    title: "Sharing",
    color: "hsl(var(--slide-accent))",
    items: [
      ["Share", "A revocable link to a Collection or Item."],
      ["Public share", "Anyone with the URL can view."],
      ["Password share", "URL + password required."],
      ["Invite-only share", "Sign-in required, allow-listed emails."],
      ["Viewer", "Person opening a share — not always a Member."],
    ],
  },
  {
    title: "Tabs & sessions",
    color: "hsl(var(--slide-success))",
    items: [
      ["Save Tab", "Capture one open tab into a Collection."],
      ["Save Session", "Capture all tabs in the current window."],
      ["Jump to Tab", "Switch focus to an already-open matching tab."],
      ["Hover-to-Jump", "Hover an Item to reveal its open-tab match."],
    ],
  },
  {
    title: "Actions & history",
    color: "hsl(var(--slide-accent-2))",
    items: [
      ["History event", "Every mutation logged — undo-able for 30 s."],
      ["Trash", "Soft-deleted items, kept 30 days."],
      ["Audit log", "Org-wide, admin-only, immutable."],
    ],
  },
  {
    title: "View modes",
    color: "hsl(var(--slide-warning))",
    items: [
      ["List", "Dense rows. Default for keyboard users."],
      ["Grid", "Cards with thumbnails."],
      ["Compact", "Title-only, max density."],
      ["Mind-map", "Spatial canvas with edges."],
      ["Column (Tab Extend)", "Horizontal lanes per Group."],
    ],
  },
];

export default function Glossary() {
  return (
    <SlideLayout chapter="Chapter 2 · Glossary" pageLabel="08">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Speak the same language.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            Every team term has exactly one meaning. No aliases.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 flex-1">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: g.color }}
                />
                <div className="text-2xl font-bold">{g.title}</div>
              </div>
              <ul className="space-y-2.5 flex-1">
                {g.items.map(([term, def]) => (
                  <li key={term} className="flex gap-3 text-base">
                    <span
                      className="font-bold whitespace-nowrap"
                      style={{ color: g.color }}
                    >
                      {term}
                    </span>
                    <span className="text-[hsl(var(--slide-muted))]">— {def}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
