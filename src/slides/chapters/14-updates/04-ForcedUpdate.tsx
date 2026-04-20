import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ShieldAlert, Clock } from "lucide-react";

export default function ForcedUpdate() {
  return (
    <SlideLayout chapter="Chapter 14 · Updates & Release Channels" pageLabel="14.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Forced updates · <span className="text-[hsl(var(--slide-accent))]">rare, but loud</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Reserved for critical security or breaking API changes. Three escalations, never silent.
        </p>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="space-y-4">
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="flex items-center gap-3 mb-2"><Clock className="w-5 h-5 text-[hsl(var(--slide-accent))]" /><span className="font-semibold">T+0h · Soft prompt</span></div>
              <p className="text-sm text-[hsl(var(--slide-muted))]">Banner: "Important update available. Refresh when ready."</p>
            </div>
            <div className="rounded-xl border border-[hsl(45_90%_60%_/_0.5)] bg-[hsl(var(--slide-surface))] p-5">
              <div className="flex items-center gap-3 mb-2"><Clock className="w-5 h-5 text-[hsl(45_90%_60%)]" /><span className="font-semibold">T+24h · Persistent</span></div>
              <p className="text-sm text-[hsl(var(--slide-muted))]">Banner reappears after dismissal. Save warnings if mutating.</p>
            </div>
            <div className="rounded-xl border border-[hsl(0_70%_60%_/_0.5)] bg-[hsl(var(--slide-surface))] p-5">
              <div className="flex items-center gap-3 mb-2"><ShieldAlert className="w-5 h-5 text-[hsl(0_70%_60%)]" /><span className="font-semibold">T+72h · Required</span></div>
              <p className="text-sm text-[hsl(var(--slide-muted))]">Modal blocks the app. Pending mutations preserved & re-applied post-reload.</p>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-[hsl(0_70%_60%_/_0.5)] bg-[hsl(var(--slide-surface))] p-8 flex flex-col">
            <ShieldAlert className="w-12 h-12 text-[hsl(0_70%_60%)] mb-5" />
            <h3 className="text-2xl font-bold mb-3">Update required</h3>
            <p className="text-base text-[hsl(var(--slide-muted))] mb-6">
              We've patched a security issue. To keep your data safe, we need to reload the app. Your unsaved changes are preserved.
            </p>
            <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-4 mb-6 text-xs font-mono text-[hsl(var(--slide-muted))]">
              v2.4.1 → v2.4.3 · CVE-2026-0142 · 14 pending mutations queued
            </div>
            <button className="mt-auto w-full py-3 rounded-lg bg-[hsl(var(--slide-accent))] text-black font-semibold">Reload to update</button>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
