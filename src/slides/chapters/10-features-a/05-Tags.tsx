import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Hash, Combine, Trash2 } from "lucide-react";

const sampleTags = ["react", "design-system", "spec"];

export default function Tags() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Tags · <span className="text-[hsl(var(--slide-accent))]">flat, fast, mergeable</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">One namespace per Org. No hierarchy. Rename merges. Delete detaches.</p>

        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Hash className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <span className="font-semibold text-lg">Autocomplete on type</span>
            </div>
            <div className="rounded-lg border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))] p-3 mb-4">
              <div className="text-xs text-[hsl(var(--slide-muted))] mb-2">Tags</div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {sampleTags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-[hsl(var(--slide-accent)_/_0.15)] text-[hsl(var(--slide-accent))] border border-[hsl(var(--slide-accent)_/_0.3)]">#{t}</span>
                ))}
                <span className="px-2 py-0.5 text-xs font-mono text-[hsl(var(--slide-muted))]">des|</span>
              </div>
              <div className="border-t border-[hsl(var(--slide-border))] pt-2 space-y-1 text-sm">
                <div className="px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))] flex items-center justify-between">
                  <span className="font-mono">#design-system</span>
                  <span className="text-xs text-[hsl(var(--slide-muted))]">42 items · ↵</span>
                </div>
                <div className="px-2 py-1 text-[hsl(var(--slide-muted))] flex items-center justify-between">
                  <span className="font-mono">#design</span>
                  <span className="text-xs">12 items</span>
                </div>
                <div className="px-2 py-1 text-[hsl(var(--slide-accent))] flex items-center justify-between">
                  <span className="font-mono">+ create "des"</span>
                  <span className="text-xs">⇧↵</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[hsl(var(--slide-muted))] mt-auto">
              Lower-case enforced · max 40 chars · disallowed: spaces, <code className="font-mono">/ \ # @</code>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Combine className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
                <span className="font-semibold text-lg">Rename = merge</span>
              </div>
              <div className="text-sm text-[hsl(var(--slide-fg))]/85 space-y-2">
                <div>Renaming <code className="font-mono">react</code> → <code className="font-mono">reactjs</code>:</div>
                <ul className="ml-4 space-y-1 text-[hsl(var(--slide-fg))]/75">
                  <li>• If <code className="font-mono">reactjs</code> exists → all items merge into it</li>
                  <li>• If not → simple rename, same UUID</li>
                  <li>• Confirmation dialog with affected count</li>
                  <li>• Undoable for 10 s, audit-logged</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Trash2 className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
                <span className="font-semibold text-lg">Delete = detach</span>
              </div>
              <div className="text-sm text-[hsl(var(--slide-fg))]/85">Tag is removed from every item in one transaction. Items themselves stay. Undo restores all attachments.</div>
            </div>

            <div className="rounded-xl border border-[hsl(var(--slide-border))] p-4 text-xs text-[hsl(var(--slide-muted))]">Org-wide singleton. Two members tagging the same word produce one tag, not two.</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
