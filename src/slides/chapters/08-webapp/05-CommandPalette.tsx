import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Search, ArrowRight, Zap, HelpCircle } from "lucide-react";

const Kbd = ({ children }: { children: React.ReactNode }) => (
  <kbd className="px-1.5 py-0.5 rounded border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] font-mono text-xs">
    {children}
  </kbd>
);

const tabs = [
  { name: "Find", icon: Search, desc: "items · collections · groups · tags" },
  { name: "Go", icon: ArrowRight, desc: "navigate Spaces & Settings" },
  { name: "Do", icon: Zap, desc: "new collection · save tab · sign out" },
  { name: "Help", icon: HelpCircle, desc: "shortcut cheatsheet" },
];

const keys = [
  { k: ["⌘", "K"], a: "Open command palette" },
  { k: ["/"], a: "Focus search" },
  { k: ["?"], a: "Show cheat sheet" },
  { k: ["g", "d"], a: "Go to dashboard" },
  { k: ["g", "s"], a: "Go to search" },
  { k: ["g", "t"], a: "Go to trash" },
  { k: ["n", "c"], a: "New collection" },
  { k: ["n", "s"], a: "New space" },
  { k: ["j", "/", "k"], a: "Next / prev card" },
  { k: ["e"], a: "Edit selected" },
  { k: ["m"], a: "Move selected" },
  { k: ["t"], a: "Tag selected" },
  { k: ["s"], a: "Star toggle" },
  { k: ["J"], a: "Jump to open tab" },
  { k: ["⌫"], a: "Soft-delete (with undo)" },
  { k: ["Esc"], a: "Close modal · clear selection" },
];

export default function WebCommandPalette() {
  return (
    <SlideLayout chapter="Chapter 8 · Web App Shell" pageLabel="08.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Command palette · <span className="text-[hsl(var(--slide-accent))]">keyboard-first</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">
          One palette, four tabs. Same component as the extension. Single source of truth: <code className="font-mono">shared/keymap.ts</code>.
        </p>

        <div className="grid grid-cols-2 gap-10 flex-1">
          {/* Palette mock */}
          <div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] shadow-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[hsl(var(--slide-border))] flex items-center gap-3">
                <Search className="w-5 h-5 text-[hsl(var(--slide-muted))]" />
                <div className="flex-1 text-lg">new collection in marketing</div>
                <Kbd>esc</Kbd>
              </div>
              <div className="flex border-b border-[hsl(var(--slide-border))]">
                {tabs.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={t.name}
                      className={`flex-1 px-4 py-3 text-sm flex items-center justify-center gap-2 ${
                        i === 2
                          ? "border-b-2 border-[hsl(var(--slide-accent))] text-[hsl(var(--slide-accent))]"
                          : "text-[hsl(var(--slide-muted))]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {t.name}
                    </div>
                  );
                })}
              </div>
              <div className="p-2 space-y-1">
                {[
                  { t: "New collection in Marketing", k: "↵", active: true },
                  { t: "New collection (pick space)", k: "" },
                  { t: "New space", k: "n s" },
                  { t: "Save current tab (extension)", k: "" },
                  { t: "Sign out", k: "" },
                ].map((r) => (
                  <div
                    key={r.t}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base ${
                      r.active ? "bg-[hsl(var(--slide-accent)_/_0.12)]" : ""
                    }`}
                  >
                    <span>{r.t}</span>
                    {r.k && <Kbd>{r.k}</Kbd>}
                  </div>
                ))}
              </div>
              <div className="px-5 py-2.5 border-t border-[hsl(var(--slide-border))] text-xs text-[hsl(var(--slide-muted))] flex items-center gap-4">
                <span><Kbd>↑↓</Kbd> navigate</span>
                <span><Kbd>↵</Kbd> select</span>
                <span><Kbd>tab</Kbd> switch tab</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-[hsl(var(--slide-muted))] text-center">
              Tabs: {tabs.map((t) => t.name).join(" · ")}
            </div>
          </div>

          {/* Keymap */}
          <div>
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">
              In-app keymap
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2.5">
              {keys.map((row, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1 w-20 shrink-0">
                    {row.k.map((kk, j) => (
                      <Kbd key={j}>{kk}</Kbd>
                    ))}
                  </div>
                  <span className="text-[hsl(var(--slide-fg))]/85">{row.a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
