import { SlideLayout } from "@/slides/_layout/SlideLayout";

const groups = [
  {
    title: "Inputs",
    items: ["Button (5 variants)", "Input · Textarea", "Select · Combobox", "Checkbox · Radio · Switch", "Slider", "Date picker"],
  },
  {
    title: "Layout",
    items: ["Card", "Separator", "Tabs", "Accordion", "Resizable panels", "Scroll area"],
  },
  {
    title: "Overlay",
    items: ["Dialog (modal)", "Sheet (drawer)", "Popover", "Tooltip", "Hover card", "Context menu", "Dropdown menu", "Command palette"],
  },
  {
    title: "Feedback",
    items: ["Toast (Sonner)", "Banner (alert)", "Skeleton loader", "Progress", "Empty state", "Error boundary"],
  },
  {
    title: "Data display",
    items: ["Table (TanStack)", "Avatar (+ stack)", "Badge", "Tag chip", "Item card (3 densities)"],
  },
  {
    title: "Custom",
    items: ["KbdHint", "DragHandle", "TreeNode", "MindmapNode", "PresenceCursor", "ColumnPanel"],
  },
];

export default function ComponentLibrary() {
  return (
    <SlideLayout chapter="Chapter 18 · Design System Primer" pageLabel="18.03">
      <div className="h-full flex flex-col pt-8">
        <h1 className="text-5xl font-bold tracking-tight mb-2">
          Components · <span className="text-[hsl(var(--slide-accent))]">shadcn + Radix base</span>
        </h1>
        <p className="text-lg text-[hsl(var(--slide-muted))] mb-6 max-w-5xl">
          Forty primitives, six custom. Variants extend via `cva`. Never fork a primitive into the codebase.
        </p>
        <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 min-h-0 overflow-hidden">
              <h3 className="text-base font-bold mb-3">{g.title}</h3>
              <ul className="space-y-1.5 text-sm text-[hsl(var(--slide-muted))]">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-[hsl(var(--slide-accent))]">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-[hsl(var(--slide-muted))] mt-4">
          All composable. All keyboard-navigable. All focus-trapped where needed. All themable from one token file.
        </p>
      </div>
    </SlideLayout>
  );
}
