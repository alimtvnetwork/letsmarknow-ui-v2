import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ArrowRightLeft, Share2, Trash2, Lock } from "lucide-react";

export default function HierarchyMoveAndShareRules() {
  return (
    <SlideLayout chapter="Chapter 9 · Browsing Hierarchy" pageLabel="09.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Move, share, <span className="text-[hsl(var(--slide-accent))]">soft-delete</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">
          The three operations that bend the tree. Each has one rule that prevents data loss.
        </p>

        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <ArrowRightLeft className="w-8 h-8 text-[hsl(var(--slide-accent))]" />
              <div className="text-2xl font-bold">Move</div>
            </div>
            <div className="text-sm text-[hsl(var(--slide-muted))] mb-4">Within an Org · Editor+ role</div>
            <ul className="space-y-2 text-base text-[hsl(var(--slide-fg))]/85 mb-4">
              <li>✓ Space ↔ Space</li>
              <li>✓ Collection ↔ Collection</li>
              <li>✓ Item ↔ Group ↔ Collection</li>
              <li className="text-[hsl(var(--slide-muted))]">✗ Across Orgs (export-import only)</li>
              <li className="text-[hsl(var(--slide-muted))]">✗ Group → Group</li>
            </ul>
            <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-3 text-xs text-[hsl(var(--slide-muted))] mt-auto">
              Position uses 1024-step gaps · midpoint insert · re-balance is silent
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Share2 className="w-8 h-8 text-[hsl(var(--slide-accent))]" />
              <div className="text-2xl font-bold">Share</div>
            </div>
            <div className="text-sm text-[hsl(var(--slide-muted))] mb-4">Recursive · child can override</div>
            <ul className="space-y-2 text-base text-[hsl(var(--slide-fg))]/85 mb-4">
              <li>✓ Space · Collection · Group · Item</li>
              <li>✗ Account · Organization (invite-only)</li>
              <li>↳ Sharing parent exposes descendants</li>
              <li>↳ Children may have own share with different perms</li>
            </ul>
            <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-3 text-xs text-[hsl(var(--slide-muted))] mt-auto">
              Slug is independent of UUID · stays after move within Org
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Trash2 className="w-8 h-8 text-[hsl(var(--slide-accent))]" />
              <div className="text-2xl font-bold">Soft-delete</div>
            </div>
            <div className="text-sm text-[hsl(var(--slide-muted))] mb-4">30-day grace · cascades atomically</div>
            <ul className="space-y-2 text-base text-[hsl(var(--slide-fg))]/85 mb-4">
              <li>✓ Restore via Undo or Trash</li>
              <li>✓ Parent restore restores its operation set</li>
              <li>✗ Independently-trashed children stay trashed</li>
              <li className="text-[hsl(var(--slide-muted))]">⚠ GDPR DSR bypasses the 30 d grace</li>
            </ul>
            <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-3 text-xs text-[hsl(var(--slide-muted))] mt-auto">
              Empty Trash → immediate hard-delete · audit-logged
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 flex items-center gap-4 text-sm">
          <Lock className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
          <span className="text-[hsl(var(--slide-fg))]/85">
            Every operation emits a <strong>History Event</strong> with <code className="font-mono">correlation_id</code> so cascades undo as one action.
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
