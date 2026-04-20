import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ShieldCheck, Archive, Trash2 } from "lucide-react";

const contents = [
  "All items · titles, URLs, notes, timestamps",
  "All collections, groups, tags · with hierarchy",
  "All comments & reactions you authored",
  "All shares you created · including viewer logs (Pro)",
  "Profile · email, name, avatar, preferences",
  "Audit log · every action you took, ever",
  "Embedded assets · OG images, screenshots (zip)",
];

export default function GdprExport() {
  return (
    <SlideLayout chapter="Chapter 16 · Import / Export" pageLabel="16.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Account export · <span className="text-[hsl(var(--slide-accent))]">your data, your right</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          GDPR Art. 20 · CCPA · everything we have on you, in one ZIP. Generated on request, available for 30 days.
        </p>
        <div className="grid grid-cols-3 gap-8 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Archive className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
              <h3 className="text-2xl font-bold">What's in the ZIP</h3>
            </div>
            <ul className="space-y-3">
              {contents.map((c) => (
                <li key={c} className="flex gap-3 text-base">
                  <ShieldCheck className="w-4 h-4 text-[hsl(var(--slide-accent))] flex-shrink-0 mt-1" />
                  <span className="text-[hsl(var(--slide-muted))]">{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-[hsl(var(--slide-border))] text-sm text-[hsl(var(--slide-muted))] grid grid-cols-2 gap-3">
              <div><span className="text-[hsl(var(--slide-fg))] font-mono">data.json</span> — full canonical schema</div>
              <div><span className="text-[hsl(var(--slide-fg))] font-mono">data.html</span> — human-readable index</div>
              <div><span className="text-[hsl(var(--slide-fg))] font-mono">assets/</span> — OG images & screenshots</div>
              <div><span className="text-[hsl(var(--slide-fg))] font-mono">README.md</span> — schema docs</div>
            </div>
          </div>
          <div className="rounded-2xl border border-[hsl(0_70%_60%_/_0.4)] bg-[hsl(var(--slide-surface))] p-6">
            <Trash2 className="w-8 h-8 text-[hsl(0_70%_60%)] mb-4" />
            <h3 className="text-xl font-bold mb-3">Delete account</h3>
            <p className="text-sm text-[hsl(var(--slide-muted))] mb-5 leading-relaxed">
              Account → Delete starts a 30-day grace. All shares revoke immediately. Hard delete on day 31. Backups purged within 7 more days.
            </p>
            <div className="text-xs text-[hsl(var(--slide-muted))] space-y-1.5 mb-5">
              <div>· Day 0 — Marked deleted</div>
              <div>· Day 0 — Shares revoked</div>
              <div>· Day 1–30 — Cancel anytime</div>
              <div>· Day 31 — Hard delete</div>
              <div>· Day 38 — Backups purged</div>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-[hsl(var(--slide-surface-2))] text-sm font-semibold text-[hsl(0_70%_60%)]">
              Request export first
            </button>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
