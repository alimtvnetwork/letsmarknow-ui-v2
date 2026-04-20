import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { MessageSquare, Smile, AtSign } from "lucide-react";

const comments = [
  { author: "Sara", initials: "SR", color: "bg-violet-500", time: "2h", text: "Love this teardown — let's discuss the per-seat model in standup tomorrow.", reactions: [{ e: "👍", n: 3 }, { e: "🔥", n: 1 }] },
  { author: "Ben", initials: "BN", color: "bg-emerald-500", time: "1h", text: "@alim worth comparing to Notion's tier names too?", reactions: [{ e: "👀", n: 2 }] },
  { author: "Alim", initials: "AM", color: "bg-sky-500", time: "12m", text: "Good call. Adding to the spec audit doc.", reactions: [] },
];

export default function CommentsReactions() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.06">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Comments &amp; reactions · <span className="text-[hsl(var(--slide-accent))]">Pro+ feature</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">Per-Item discussion. @-mentions trigger inbox notifications. Emoji reactions for low-effort agreement.</p>

        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col">
            <div className="rounded-lg border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))] p-4 mb-4 flex gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-[hsl(var(--slide-accent)_/_0.3)] to-[hsl(var(--slide-surface-2))]" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold">Linear pricing teardown</div>
                <div className="text-xs text-[hsl(var(--slide-muted))]">linear.app · saved 3 days ago</div>
              </div>
              <span className="text-xs text-[hsl(var(--slide-muted))]">3 comments</span>
            </div>

            <div className="space-y-3 flex-1 overflow-auto">
              {comments.map((c, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`w-8 h-8 rounded-full ${c.color} flex items-center justify-center text-[10px] font-bold text-white shrink-0`}>{c.initials}</div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm font-semibold">{c.author}</span>
                      <span className="text-xs text-[hsl(var(--slide-muted))]">{c.time}</span>
                    </div>
                    <div className="text-sm text-[hsl(var(--slide-fg))]/90 leading-snug">{c.text}</div>
                    {c.reactions.length > 0 && (
                      <div className="flex gap-1.5 mt-2">
                        {c.reactions.map((r) => (
                          <span key={r.e} className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--slide-surface-2))] border border-[hsl(var(--slide-border))]">
                            {r.e} {r.n}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))] px-3 py-2 flex items-center gap-2 text-sm text-[hsl(var(--slide-muted))]">
              <MessageSquare className="w-4 h-4" />
              <span className="flex-1">Add a comment… (markdown supported)</span>
              <code className="text-xs font-mono">⌘↵</code>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
              <div className="flex items-center gap-2 mb-2">
                <AtSign className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                <div className="text-sm font-semibold">Mentions</div>
              </div>
              <div className="text-xs text-[hsl(var(--slide-fg))]/80">Autocomplete from Org members. Triggers inbox + email (per-user preference).</div>
            </div>
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
              <div className="flex items-center gap-2 mb-2">
                <Smile className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                <div className="text-sm font-semibold">Reactions</div>
              </div>
              <div className="text-xs text-[hsl(var(--slide-fg))]/80">Curated 12-emoji palette. One reaction per user per emoji. Free for Viewers on shared Collections.</div>
            </div>
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 text-xs text-[hsl(var(--slide-muted))]">
              Comments soft-delete with the parent Item. 30-day Trash window applies.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
