import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Building2, Layers, FolderOpen, Boxes, FileText, ChevronRight } from "lucide-react";

const levels = [
  {
    icon: Building2,
    name: "Organization",
    sub: "Billing root · members · plan",
    example: "Acme Inc.",
  },
  {
    icon: Layers,
    name: "Space",
    sub: "Top-level container per team or topic",
    example: "Marketing",
  },
  {
    icon: FolderOpen,
    name: "Collection",
    sub: "A board of related items",
    example: "Q4 Campaign",
  },
  {
    icon: Boxes,
    name: "Group?",
    sub: "Optional. ONE level deep only.",
    example: "Hero assets",
  },
  {
    icon: FileText,
    name: "Item",
    sub: "The thing — tab, link, note, file",
    example: "figma.com/…",
  },
];

export default function Hierarchy() {
  return (
    <SlideLayout chapter="Chapter 2 · Hierarchy" pageLabel="07">
      <div className="h-full flex flex-col">
        <div className="mb-8">
          <h2 className="text-6xl font-bold leading-tight">
            One nesting rule. Memorise it.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            Organization → Space → Collection → <em>Group?</em> → Item.
            Groups never nest inside Groups.
          </p>
        </div>

        <div className="flex-1 flex items-center">
          <div className="w-full flex items-stretch gap-2">
            {levels.map((l, i) => {
              const Icon = l.icon;
              return (
                <div key={l.name} className="flex items-stretch flex-1 min-w-0">
                  <div className="flex-1 min-w-0 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-accent)/0.15)] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[hsl(var(--slide-accent))]" />
                    </div>
                    <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-1">
                      Level {i + 1}
                    </div>
                    <div className="text-2xl font-bold mb-2">{l.name}</div>
                    <div className="text-sm text-[hsl(var(--slide-muted))] mb-3 flex-1">
                      {l.sub}
                    </div>
                    <div className="text-xs font-mono px-2 py-1 rounded bg-[hsl(var(--slide-fg)/0.06)] truncate">
                      {l.example}
                    </div>
                  </div>
                  {i < levels.length - 1 && (
                    <div className="flex items-center justify-center px-1 shrink-0">
                      <ChevronRight className="w-8 h-8 text-[hsl(var(--slide-muted))]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <div className="flex-1 rounded-xl border border-[hsl(var(--slide-success)/0.4)] bg-[hsl(var(--slide-success)/0.08)] px-5 py-3 text-base">
            <span className="font-bold text-[hsl(var(--slide-success))]">✓ Allowed</span>{" "}
            Space → Collection → Group → Item
          </div>
          <div className="flex-1 rounded-xl border border-[hsl(var(--slide-warning)/0.4)] bg-[hsl(var(--slide-warning)/0.08)] px-5 py-3 text-base">
            <span className="font-bold text-[hsl(var(--slide-warning))]">✗ Forbidden</span>{" "}
            Group → Group, or Collection → Collection
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
