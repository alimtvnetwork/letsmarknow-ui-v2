import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Chrome, Bookmark, Layers, Mail } from "lucide-react";

const sources = [
  { icon: Layers, name: "Toby", desc: "JSON export · collections + tabs", maps: "Collection → Collection · session → Group", auto: "Auto-detect on /import/toby" },
  { icon: Layers, name: "Tab Extend", desc: "Native — column data preserved", maps: "Column → Group · 1:1 mapping", auto: "Sign-in to TE account → 1-click" },
  { icon: Chrome, name: "Browser bookmarks", desc: "HTML or NETSCAPE format", maps: "Folders → Collections (nested flattened)", auto: "Drag .html into uploader" },
  { icon: Bookmark, name: "Pocket", desc: "RSS / CSV export", maps: "Tags preserved · archived → starred", auto: "OAuth or .csv upload" },
];

export default function ImportSources() {
  return (
    <SlideLayout chapter="Chapter 16 · Import / Export" pageLabel="16.01">
      <div className="h-full flex flex-col pt-10">
        <h1 className="text-6xl font-bold tracking-tight mb-2">
          Four importers · <span className="text-[hsl(var(--slide-accent))]">covers 90% of users</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8 max-w-5xl">
          Every importer normalizes to the same canonical shape, then runs through the same dedup pipeline.
        </p>
        <div className="grid grid-cols-2 gap-6 flex-1">
          {sources.map((s) => (
            <div key={s.name} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-[hsl(var(--slide-surface-2))] flex items-center justify-center flex-shrink-0">
                <s.icon className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold mb-1">{s.name}</h3>
                <p className="text-sm text-[hsl(var(--slide-muted))] mb-4">{s.desc}</p>
                <div className="space-y-2 text-xs">
                  <div className="flex gap-2"><span className="text-[hsl(var(--slide-muted))] w-12">Maps</span><span>{s.maps}</span></div>
                  <div className="flex gap-2"><span className="text-[hsl(var(--slide-muted))] w-12">Flow</span><span>{s.auto}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] p-4 flex items-center gap-3">
          <Mail className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
          <span className="text-sm text-[hsl(var(--slide-muted))]">Plus: <span className="text-[hsl(var(--slide-fg))]">email-in</span> — forward any email to <code>save@in.letsmarknow.com</code> → captured to Inbox.</span>
        </div>
      </div>
    </SlideLayout>
  );
}
