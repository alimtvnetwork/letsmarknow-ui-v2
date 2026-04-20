import { SlideLayout } from "@/slides/_layout/SlideLayout";

const Kbd = ({ children }: { children: React.ReactNode }) => (
  <kbd className="px-2.5 py-1 rounded-md border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] font-mono text-base shadow-sm">{children}</kbd>
);

const shortcuts = [
  { cmd: "_execute_action", keys: ["Alt", "S"], action: "Open popup", note: "Default action" },
  { cmd: "save_current_tab", keys: ["Alt", "Shift", "S"], action: "Save active tab to last-used Collection", note: "No popup — instant save + toast" },
  { cmd: "save_session", keys: ["Alt", "Shift", "W"], action: "Save all tabs in window as a session", note: "Opens preview popup" },
  { cmd: "quick_find", keys: ["Alt", "K"], action: "Open popup focused on search", note: "Mirrors ⌘K in dashboard" },
];

export default function ExtKeyboardShortcuts() {
  return (
    <SlideLayout chapter="Chapter 7 · Extension" pageLabel="07.08">
      <div className="h-full flex flex-col pt-8">
        <h1 className="text-5xl font-bold tracking-tight mb-2">Four shortcuts · <span className="text-[hsl(var(--slide-accent))]">user-rebindable</span></h1>
        <p className="text-lg text-[hsl(var(--slide-muted))] mb-6 max-w-5xl">Chrome's max with default keys. We chose <code className="font-mono">Alt</code> (Option on Mac) to avoid collisions.</p>
        <div className="space-y-3 flex-1">
          {shortcuts.map((s) => (
            <div key={s.cmd} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-6 py-3.5 flex items-center gap-6">
              <div className="flex items-center gap-1.5 w-72 shrink-0">
                {s.keys.map((k, i) => (<span key={i} className="flex items-center gap-1.5">{i > 0 && <span className="text-[hsl(var(--slide-muted))]">+</span>}<Kbd>{k}</Kbd></span>))}
              </div>
              <div className="flex-1"><div className="text-2xl font-semibold">{s.action}</div><div className="text-sm text-[hsl(var(--slide-muted))] font-mono mt-0.5">commands.{s.cmd}</div></div>
              <div className="text-base text-[hsl(var(--slide-fg))]/75 max-w-xs text-right">{s.note}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2">Conflicts</div>
            <div className="text-base">On install we read <code className="font-mono text-sm">chrome.commands.getAll()</code> and banner any unset binding.</div>
          </div>
          <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2">Cheat sheet</div>
            <div className="text-base">Press <Kbd>?</Kbd> in any LMN surface to open the full keymap.</div>
          </div>
          <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2">Rebind</div>
            <div className="text-base font-mono text-sm">chrome://extensions/shortcuts</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
