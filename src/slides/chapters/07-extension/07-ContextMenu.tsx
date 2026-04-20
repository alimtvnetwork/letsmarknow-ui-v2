import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ChevronRight, Bookmark } from "lucide-react";

const menuItems = [
  { label: "Save this page", ctx: "page · frame" },
  { label: "Save this link", ctx: "link" },
  { label: "Save this image", ctx: "image · Pro" },
  { label: "Save selection as note", ctx: "selection" },
];

const destinations = [
  { label: "→ Last used: Quick Tools", primary: true },
  { label: "→ Choose collection…", primary: false },
  { label: "→ ★ Marketing", primary: false },
  { label: "→ ★ Read later", primary: false },
];

export default function ExtensionContextMenu() {
  return (
    <SlideLayout chapter="Chapter 7 · Extension" pageLabel="07.07">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Right-click · <span className="text-[hsl(var(--slide-accent))]">save anything</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">
          Page, link, image, or selection. Submenu rebuilds when starred or last-used changes.
        </p>

        <div className="grid grid-cols-2 gap-12 flex-1 items-start">
          {/* Mock right-click menu */}
          <div className="flex justify-center pt-4">
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] shadow-2xl overflow-hidden w-96">
              <div className="px-4 py-2.5 text-sm text-[hsl(var(--slide-muted))] border-b border-[hsl(var(--slide-border))]">
                Open link in new tab
              </div>
              <div className="px-4 py-2.5 text-sm text-[hsl(var(--slide-muted))] border-b border-[hsl(var(--slide-border))]">
                Copy link address
              </div>
              <div className="px-4 py-2.5 flex items-center justify-between bg-[hsl(var(--slide-accent)_/_0.12)] border-b border-[hsl(var(--slide-border))]">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                  <span className="text-sm font-semibold">Lets Mark Now</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
              </div>
              <div className="px-4 py-2.5 text-sm text-[hsl(var(--slide-muted))]">
                Inspect
              </div>
            </div>
            {/* Submenu floating */}
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] shadow-2xl overflow-hidden w-80 -ml-2 mt-12 self-start">
              {menuItems.map((m) => (
                <div
                  key={m.label}
                  className="px-4 py-2.5 text-sm border-b border-[hsl(var(--slide-border))] flex items-center justify-between"
                >
                  <span>{m.label}</span>
                  <span className="text-xs text-[hsl(var(--slide-muted))] font-mono">{m.ctx}</span>
                </div>
              ))}
              <div className="h-px bg-[hsl(var(--slide-border))]" />
              {destinations.map((d) => (
                <div
                  key={d.label}
                  className={`px-4 py-2 text-sm border-b border-[hsl(var(--slide-border))] last:border-0 ${
                    d.primary ? "text-[hsl(var(--slide-accent))] font-medium" : ""
                  }`}
                >
                  {d.label}
                </div>
              ))}
            </div>
          </div>

          {/* Behavior table */}
          <div>
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">
              Per-context behavior
            </div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] divide-y divide-[hsl(var(--slide-border))]">
              {[
                { c: "page", w: "Active tab URL + title + favicon" },
                { c: "link", w: "info.linkUrl + link text (or fetched <title>)" },
                { c: "image", w: "Image URL · kind=image · Pro feature" },
                { c: "selection", w: "URL=page, title=first 60 chars, notes=8000 max" },
                { c: "frame", w: "info.frameUrl instead of top-level URL" },
              ].map((row) => (
                <div key={row.c} className="px-5 py-3 flex gap-4">
                  <code className="text-sm text-[hsl(var(--slide-accent))] font-mono w-24">
                    {row.c}
                  </code>
                  <span className="text-base">{row.w}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-[hsl(var(--slide-muted))]">
              After click → OS notification "Saved to <span className="text-[hsl(var(--slide-fg))]">Quick Tools</span>" with Undo (6s).
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
