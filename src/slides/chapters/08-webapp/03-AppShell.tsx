import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Search, Settings, Bell, ChevronDown, Plus, Star, Hash, Trash2, Users, Activity } from "lucide-react";

export default function WebAppShell() {
  return (
    <SlideLayout chapter="Chapter 8 · Web App Shell" pageLabel="08.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          App shell · <span className="text-[hsl(var(--slide-accent))]">rail · sidebar · top bar</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">
          Persistent across every authed page. Org switching re-mounts the entire scope.
        </p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1 flex flex-col shadow-2xl">
          {/* Top bar */}
          <div className="h-14 border-b border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] flex items-center px-5 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-[hsl(var(--slide-accent))]" />
              <span className="font-bold text-lg">LMN</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border))] text-sm">
              <div className="w-5 h-5 rounded bg-[hsl(var(--slide-accent))]" />
              Personal
              <ChevronDown className="w-4 h-4 text-[hsl(var(--slide-muted))]" />
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border))] text-sm text-[hsl(var(--slide-muted))] w-72">
              <Search className="w-4 h-4" /> Search…
              <kbd className="ml-auto text-xs px-1.5 py-0.5 rounded bg-[hsl(var(--slide-surface-2))] font-mono">⌘K</kbd>
            </div>
            <Bell className="w-5 h-5 text-[hsl(var(--slide-muted))]" />
            <Settings className="w-5 h-5 text-[hsl(var(--slide-muted))]" />
            <div className="w-8 h-8 rounded-full bg-[hsl(var(--slide-accent))]" />
          </div>

          <div className="flex flex-1">
            {/* Org rail */}
            <div className="w-16 bg-[hsl(var(--slide-surface-2))] border-r border-[hsl(var(--slide-border))] flex flex-col items-center py-4 gap-3">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-accent))] ring-2 ring-[hsl(var(--slide-fg))] flex items-center justify-center font-bold text-sm text-[hsl(var(--slide-accent-fg))]">PE</div>
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-muted)_/_0.3)] flex items-center justify-center font-bold text-sm">EV</div>
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-muted)_/_0.3)] flex items-center justify-center font-bold text-sm">AP</div>
              <div className="w-10 h-10 rounded-lg border border-dashed border-[hsl(var(--slide-border))] flex items-center justify-center text-[hsl(var(--slide-muted))]">
                <Plus className="w-4 h-4" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-72 border-r border-[hsl(var(--slide-border))] p-5 text-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))]">Spaces</span>
                <Plus className="w-4 h-4 text-[hsl(var(--slide-muted))]" />
              </div>
              <div className="space-y-1 mb-5">
                <div className="font-semibold">▾ My Collections</div>
                <div className="font-semibold">▾ Evatix</div>
                <div className="pl-4 space-y-1 text-[hsl(var(--slide-fg))]/80">
                  <div>• Scrum</div>
                  <div className="text-[hsl(var(--slide-accent))] font-medium">• React</div>
                  <div>• Tools</div>
                </div>
              </div>
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2 flex items-center gap-1.5">
                <Star className="w-3 h-3" /> Starred
              </div>
              <div className="space-y-1 mb-5 text-[hsl(var(--slide-fg))]/80">
                <div>★ Quick Tools</div>
                <div>★ Marketing Improvements</div>
              </div>
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2 flex items-center gap-1.5">
                <Hash className="w-3 h-3" /> Tags
              </div>
              <div className="text-[hsl(var(--slide-muted))] text-xs mb-5">#react #ui #ai</div>
              <div className="border-t border-[hsl(var(--slide-border))] pt-3 flex flex-col gap-1.5 text-xs text-[hsl(var(--slide-muted))]">
                <div className="flex items-center gap-2"><Trash2 className="w-3 h-3" /> Trash</div>
                <div className="flex items-center gap-2"><Activity className="w-3 h-3" /> Activity</div>
                <div className="flex items-center gap-2"><Users className="w-3 h-3" /> Members</div>
                <div className="flex items-center gap-2"><Settings className="w-3 h-3" /> Settings</div>
              </div>
            </div>

            {/* Main */}
            <div className="flex-1 p-8">
              <div className="flex flex-col gap-3">
                <div className="rounded-lg bg-[hsl(var(--slide-warning)_/_0.15)] border border-[hsl(var(--slide-warning)_/_0.3)] px-4 py-2.5 text-sm">
                  ⚠ Trial ends in 2 days · <span className="underline cursor-pointer">Upgrade</span>
                </div>
                <h2 className="text-3xl font-bold mt-4">Main route outlet</h2>
                <p className="text-[hsl(var(--slide-muted))]">
                  Banners stack here · skip-link sits above for a11y · ⌘K opens command palette globally
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-5 text-xs text-[hsl(var(--slide-muted))]">
          <div>≥1280: full layout</div>
          <div>1024–1279: sidebar 240px</div>
          <div>768–1023: hamburger overlay</div>
          <div>&lt;768: bottom-tab mobile shell</div>
        </div>
      </div>
    </SlideLayout>
  );
}
