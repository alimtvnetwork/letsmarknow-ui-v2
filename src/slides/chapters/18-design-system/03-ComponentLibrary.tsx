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
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Components · <span className="text-[hsl(var(--slide-accent))]">shadcn + Radix base</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Forty primitives, six custom. Variants extend via `cva`. Never fork a primitive into the codebase.
        </p>
        <div className="grid grid-cols-3 gap-5 flex-1">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
              <h3 className="text-lg font-bold mb-4">{g.title}</h3>
              <ul className="space-y-2 text-sm text-[hsl(var(--slide-muted))]">
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
        <p className="text-sm text-[hsl(var(--slide-muted))] mt-6">
          All composable. All keyboard-navigable. All focus-trapped where needed. All themable from one token file.
        </p>
      </div>
    </SlideLayout>
  );
}
