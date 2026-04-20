import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Wifi, WifiOff, CheckCircle2 } from "lucide-react";

export default function OptimisticOffline() {
  return (
    <SlideLayout chapter="Chapter 13 · History, Activity & Conflicts" pageLabel="13.06">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Optimistic UI · <span className="text-[hsl(var(--slide-accent))]">offline first</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Edits apply locally instantly with a UUIDv7 temp ID. Server reconciles, rolls back rejected mutations gracefully.
        </p>

        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8">
            <Wifi className="w-10 h-10 text-[hsl(var(--slide-accent))] mb-5" />
            <h3 className="text-2xl font-bold mb-4">Online happy path</h3>
            <ol className="space-y-3 text-base text-[hsl(var(--slide-muted))]">
              <li><span className="text-[hsl(var(--slide-fg))] font-semibold">1.</span> User edits title → applied locally</li>
              <li><span className="text-[hsl(var(--slide-fg))] font-semibold">2.</span> Mutation queued with optimistic UUIDv7</li>
              <li><span className="text-[hsl(var(--slide-fg))] font-semibold">3.</span> Server assigns canonical seq</li>
              <li><span className="text-[hsl(var(--slide-fg))] font-semibold">4.</span> Concurrent event arrives via Realtime</li>
              <li><span className="text-[hsl(var(--slide-fg))] font-semibold">5.</span> Apply theirs first, re-apply ours</li>
              <li><span className="text-[hsl(var(--slide-fg))] font-semibold">6.</span> Server LWW chooses final state</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8">
            <WifiOff className="w-10 h-10 text-[hsl(45_90%_60%)] mb-5" />
            <h3 className="text-2xl font-bold mb-4">Offline → reconnect</h3>
            <ul className="space-y-3 text-base text-[hsl(var(--slide-muted))]">
              <li>• Mutations queued in <code className="text-[hsl(var(--slide-fg))]">pending_mutations</code></li>
              <li>• UI shows "Saved locally · will sync"</li>
              <li>• On reconnect: queue replayed in order</li>
              <li>• Idempotency-Key dedupes duplicates</li>
              <li>• Conflicts resolved per merge rules</li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
              <span className="text-[hsl(var(--slide-accent))]">Synced 14 changes</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
