import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Building2, Layers, FolderOpen, FolderTree, Bookmark, ChevronRight } from "lucide-react";

const levels = [
  {
    icon: Building2,
    name: "Organization",
    sub: "PE / AU / XL …",
    detail: "Top-level container. Holds members, billing, Spaces.",
    example: "Atto Property",
    color: "hsl(var(--slide-accent-2))",
  },
  {
    icon: Layers,
    name: "Space",
    sub: "logical group",
    detail: "A logical grouping inside an Org. Sharable as a unit.",
    example: "Personal · Evatix · Gaming PC",
    color: "hsl(var(--slide-accent))",
  },
  {
    icon: FolderOpen,
    name: "Collection",
    sub: "primary container",
    detail: "The main container of saved tabs. Color · icon · tags · notes.",
    example: "Marketing Improvements · Quick Tools",
    color: "hsl(var(--slide-success))",
  },
  {
    icon: FolderTree,
    name: "Group",
    sub: "optional · 1 level only",
    detail: "Optional sub-container inside a Collection. No nesting.",
    example: "Atto Property (inside Atto Quick)",
    color: "hsl(var(--slide-warning))",
  },
  {
    icon: Bookmark,
    name: "Item",
    sub: "single saved tab",
    detail: "URL + title + favicon (+ description, tags, notes, position).",
    example: "react.dev/learn",
    color: "hsl(var(--slide-danger))",
  },
];

export default function HierarchySlide() {
  return (
    <SlideLayout chapter="Chapter 2 · Vocabulary" pageLabel="07">
      <div className="h-full flex flex-col">
        <div className="mb-8">
          <h2 className="text-6xl font-bold leading-tight mb-3">
            Five levels. <span className="text-[hsl(var(--slide-accent))]">One nesting rule.</span>
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] max-w-[1300px]">
            Every UI string, API field, and database column uses these exact terms.
            Synonyms from Toby or Tab Extend are not allowed.
          </p>
        </div>

        {/* Flow */}
        <div className="flex items-stretch gap-3 mb-8">
          {levels.map((lvl, i) => {
            const Icon = lvl.icon;
            return (
              <div key={lvl.name} className="flex items-stretch gap-3 flex-1">
                <div
                  className="flex-1 rounded-2xl border p-5 flex flex-col"
                  style={{
                    borderColor: `${lvl.color.replace(")", " / 0.4)")}`,
                    background: `${lvl.color.replace(")", " / 0.08)")}`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${lvl.color.replace(")", " / 0.2)")}` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: lvl.color }} />
                  </div>
                  <div className="text-2xl font-bold leading-tight" style={{ color: lvl.color }}>
                    {lvl.name}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[hsl(var(--slide-muted))] mb-2">
                    {lvl.sub}
                  </div>
                  <div className="text-sm text-[hsl(var(--slide-fg))] leading-snug mb-3 flex-1">
                    {lvl.detail}
                  </div>
                  <div className="text-xs text-[hsl(var(--slide-muted))] font-mono border-t border-[hsl(var(--slide-border))] pt-2">
                    e.g. {lvl.example}
                  </div>
                </div>
                {i < levels.length - 1 && (
                  <ChevronRight className="self-center w-7 h-7 text-[hsl(var(--slide-muted))] shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* Nesting rule callout */}
        <div className="rounded-2xl border-2 border-[hsl(var(--slide-accent)/0.4)] bg-[hsl(var(--slide-accent)/0.08)] p-6 flex items-center gap-6">
          <div className="text-4xl">📌</div>
          <div>
            <div className="text-base uppercase tracking-widest text-[hsl(var(--slide-accent))] font-bold mb-1">
              Nesting rule (v1)
            </div>
            <div className="text-2xl font-mono font-semibold">
              Organization → Space → Collection → Group? → Item
            </div>
            <div className="text-base text-[hsl(var(--slide-muted))] mt-1">
              Maximum 1 level of Group inside Collection. <strong>No Group-inside-Group.</strong>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
