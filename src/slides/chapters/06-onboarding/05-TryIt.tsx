import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Sparkles, Star, Tag, Hand, FileText, MousePointer2 } from "lucide-react";

const sampleItems = [
  { title: "How we built Lets Mark Now", domain: "blog.letsmarknow.com", tag: "Engineering", icon: FileText },
  { title: "12 keyboard shortcuts you'll actually use", domain: "letsmarknow.com/docs", tag: "Tip", icon: Star },
  { title: "Tab Extend column-view example", domain: "letsmarknow.com/demo", tag: "Demo", icon: Hand },
  { title: "Mind-map view: a guided tour", domain: "letsmarknow.com/blog", tag: "Feature", icon: Sparkles },
  { title: "Sharing a Collection with a public link", domain: "letsmarknow.com/help", tag: "How-to", icon: Tag },
];

export default function TryIt() {
  return (
    <SlideLayout chapter="Chapter 6 · Branch 1 · Step 4" pageLabel="29">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Step 4 — Try it (with training wheels).
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            We seed a "Welcome" Collection so the dashboard isn't empty on day one.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-7">
          {/* Sample collection mock */}
          <div className="col-span-3 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b border-[hsl(var(--slide-border))] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-accent)/0.15)] flex items-center justify-center text-xl">
                  👋
                </div>
                <div>
                  <div className="font-bold text-lg">Welcome to Lets Mark Now</div>
                  <div className="text-xs text-[hsl(var(--slide-muted))]">5 items · seeded</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[hsl(var(--slide-accent)/0.15)] text-[hsl(var(--slide-accent))]">
                Sample
              </span>
            </div>
            <div className="p-3 space-y-2 flex-1">
              {sampleItems.map((it) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.title}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[hsl(var(--slide-fg)/0.04)] border border-transparent hover:border-[hsl(var(--slide-border))]"
                  >
                    <Star className="w-4 h-4 text-[hsl(var(--slide-warning))] fill-[hsl(var(--slide-warning))]" />
                    <div className="w-7 h-7 rounded bg-[hsl(var(--slide-fg)/0.06)] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[hsl(var(--slide-muted))]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate">{it.title}</div>
                      <div className="text-xs text-[hsl(var(--slide-muted))] truncate">{it.domain}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-xs bg-[hsl(var(--slide-fg)/0.06)]">
                      {it.tag}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="px-5 py-3 border-t border-[hsl(var(--slide-border))] flex items-center justify-between">
              <span className="text-xs text-[hsl(var(--slide-muted))]">Hover an item to see "jump to open tab"</span>
              <button className="px-4 py-2 rounded-lg bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-bg))] text-sm font-bold">
                Open dashboard →
              </button>
            </div>
          </div>

          {/* What we demo */}
          <div className="col-span-2 flex flex-col gap-3">
            <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold mb-1">
              The 5 sample items teach
            </div>
            {[
              { icon: Star, t: "Starring & pinning", s: "Hit S to star, P to pin to top" },
              { icon: Tag, t: "Tags", s: "Auto-tag by domain · manual tags · smart tags (Team)" },
              { icon: Hand, t: "Hover-to-jump", s: "Hover an item → switch to its open tab" },
              { icon: FileText, t: "Notes & descriptions", s: "Markdown notes attached to any item" },
              { icon: MousePointer2, t: "Drag to organize", s: "Drag items between Groups and Collections" },
            ].map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.t} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-4 py-3 flex items-start gap-3">
                  <Icon className="w-5 h-5 text-[hsl(var(--slide-accent))] mt-0.5" />
                  <div>
                    <div className="font-bold">{it.t}</div>
                    <div className="text-sm text-[hsl(var(--slide-muted))]">{it.s}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
