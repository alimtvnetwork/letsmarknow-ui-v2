import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Chrome, Bookmark, FileJson, Inbox, Layers, ArrowRight } from "lucide-react";

const sources = [
  { icon: Chrome, name: "Chrome bookmarks", desc: "Folder structure → Spaces & Collections" },
  { icon: Layers, name: "Toby export (.json)", desc: "Native fidelity · Collection groups preserved" },
  { icon: Bookmark, name: "Pocket archive", desc: "Tags become tags · favorites become starred" },
  { icon: FileJson, name: "Raindrop / Pinboard", desc: "OPML · CSV · JSON" },
];

export default function OnboardingBringBookmarks() {
  return (
    <SlideLayout chapter="Chapter 6 · Onboarding" pageLabel="06.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Step 2 · <span className="text-[hsl(var(--slide-accent))]">bring your bookmarks</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">Optional. Skipping is one click. Imports run async; user can keep onboarding.</p>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="space-y-3">
            {sources.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex gap-4 items-center">
                  <Icon className="w-9 h-9 text-[hsl(var(--slide-accent))] shrink-0" />
                  <div>
                    <div className="text-xl font-semibold">{s.name}</div>
                    <div className="text-sm text-[hsl(var(--slide-muted))]">{s.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3 flex items-center gap-2"><Inbox className="w-4 h-4" /> Import pipeline</div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 space-y-3">
              {["Upload file → presigned URL", "Parse + validate · stream rows", "Map → Spaces · Collections · Items", "Dedupe by canonical URL", "Land in 'Imported' Space · review + merge"].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-accent-fg))] text-sm font-bold flex items-center justify-center">{i + 1}</div>
                  <ArrowRight className="w-3 h-3 text-[hsl(var(--slide-muted))]" />
                  <div className="text-base">{step}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-[hsl(var(--slide-muted))]">Up to 50,000 items · email when ready · always preview before merge.</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
