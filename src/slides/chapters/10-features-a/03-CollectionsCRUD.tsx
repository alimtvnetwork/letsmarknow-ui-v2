import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { FolderPlus, Edit3, Move, Archive, Trash2 } from "lucide-react";

const ops = [
  { icon: FolderPlus, name: "Create", chord: "C", detail: "From sidebar, palette, or popup. Auto-slug, editable." },
  { icon: Edit3, name: "Rename", chord: "F2", detail: "Inline. Slug stays — links don't break." },
  { icon: Move, name: "Move", chord: "drag / ⌘M", detail: "Within Org only. Re-parents with cascade." },
  { icon: Archive, name: "Archive", chord: "—", detail: "Hides from sidebar. Read-only. Counts toward limit." },
  { icon: Trash2, name: "Delete", chord: "⌘⌫", detail: "Soft · 30-day Trash · cascades to Items." },
];

export default function CollectionsCRUD() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Collections · <span className="text-[hsl(var(--slide-accent))]">five operations</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">
          Slug is permanent. Name is cosmetic. Delete is reversible. Move respects Org boundary.
        </p>

        <div className="space-y-3 flex-1">
          {ops.map((o) => {
            const Icon = o.icon;
            return (
              <div
                key={o.name}
                className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-6 py-5 flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="w-32 shrink-0">
                  <div className="text-2xl font-bold">{o.name}</div>
                </div>
                <code className="text-sm font-mono px-3 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-accent))] w-32 text-center shrink-0">
                  {o.chord}
                </code>
                <div className="flex-1 text-base text-[hsl(var(--slide-fg))]/85">{o.detail}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 text-sm flex items-center gap-3">
          <span className="text-[hsl(var(--slide-accent))] font-mono text-xs uppercase tracking-widest">
            Locked rule
          </span>
          <span className="text-[hsl(var(--slide-fg))]/85">
            Slug is generated once at creation and never changes. Rename only updates display name. Old links keep resolving forever.
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
