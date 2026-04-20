import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { PanelRight, GripVertical } from "lucide-react";

export default function ExtSidePanel() {
  return (
    <SlideLayout chapter="Chapter 7 · Extension" pageLabel="07.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">Side Panel · <span className="text-[hsl(var(--slide-accent))]">always-on companion</span></h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">Persistent across navigation. Drag URLs from the address bar, drop into Collections. Shares 80% of UI with the popup.</p>
        <div className="flex-1 flex gap-8">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1 flex">
            <div className="flex-1 p-6 border-r border-[hsl(var(--slide-border))] flex items-center justify-center text-[hsl(var(--slide-muted))]">
              <div className="text-center"><div className="text-2xl font-mono mb-2">browsing tab</div><div className="text-sm">drag a URL →</div></div>
            </div>
            <div className="w-96 bg-[hsl(var(--slide-surface-2))] p-5">
              <div className="flex items-center gap-2 mb-4"><PanelRight className="w-5 h-5 text-[hsl(var(--slide-accent))]" /><span className="font-semibold">Lets Mark Now</span></div>
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">Spaces</div>
              <div className="space-y-1.5 mb-5">
                {["📚 Read later", "🔧 Quick Tools", "📈 Marketing"].map((c) => (
                  <div key={c} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-[hsl(var(--slide-bg))] text-sm"><GripVertical className="w-3 h-3 text-[hsl(var(--slide-muted))]" />{c}</div>
                ))}
              </div>
              <div className="rounded-xl border-2 border-dashed border-[hsl(var(--slide-accent))] p-6 text-center text-sm text-[hsl(var(--slide-accent))]">Drop URL to save here</div>
            </div>
          </div>
          <div className="w-96 space-y-4">
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2">When to use</div>
              <ul className="text-base space-y-2 text-[hsl(var(--slide-fg))]/85"><li>• Long research sessions</li><li>• Drag-drop heavy organizing</li><li>• Multi-monitor power users</li><li>• Cross-Org browsing</li></ul>
            </div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2">Trigger</div>
              <code className="text-sm font-mono text-[hsl(var(--slide-accent))] block">chrome.sidePanel.open()</code>
              <div className="text-sm text-[hsl(var(--slide-muted))] mt-2">from popup, context menu, or Chrome's side-panel button</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
