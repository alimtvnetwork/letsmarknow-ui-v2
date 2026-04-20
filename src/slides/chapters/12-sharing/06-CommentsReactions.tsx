import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { MessageCircle, Smile } from "lucide-react";

const thread = [
  { who: "Anya", when: "2h", body: "Should this go under Q2 or Q3?", reacts: ["👍 2"] },
  { who: "Marcus", when: "1h", body: "Q3 — it's tied to the launch.", reacts: ["✅ 1"] },
  { who: "Anya", when: "12m", body: "Moved. Thanks!", reacts: [] },
];

export default function CommentsReactions() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.06">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Comments · <span className="text-[hsl(var(--slide-accent))]">threaded, lightweight</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          One thread per item. @mentions notify by email + in-app. Reactions are one-click sentiment.
        </p>

        <div className="grid grid-cols-3 gap-8 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[hsl(var(--slide-border))]">
              <MessageCircle className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <span className="font-semibold">3 comments</span>
            </div>

            <div className="space-y-5 flex-1">
              {thread.map((t, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-[hsl(var(--slide-surface-2))] flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {t.who[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold">{t.who}</span>
                      <span className="text-xs text-[hsl(var(--slide-muted))]">{t.when}</span>
                    </div>
                    <p className="text-[hsl(var(--slide-muted))] mt-1">{t.body}</p>
                    {t.reacts.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {t.reacts.map((r) => (
                          <span key={r} className="px-2 py-0.5 rounded-full bg-[hsl(var(--slide-surface-2))] text-xs">{r}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[hsl(var(--slide-border))]">
              <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] px-4 py-3 text-[hsl(var(--slide-muted))]">
                Reply… <span className="text-xs ml-2">(@ to mention · ⌘↵ to send)</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <Smile className="w-8 h-8 text-[hsl(var(--slide-accent))] mb-4" />
            <h3 className="text-xl font-bold mb-3">Six reactions</h3>
            <div className="grid grid-cols-3 gap-3 text-3xl text-center mb-6">
              {["👍", "❤️", "✅", "👀", "🎉", "🤔"].map((e) => (
                <div key={e} className="aspect-square rounded-lg bg-[hsl(var(--slide-surface-2))] flex items-center justify-center">{e}</div>
              ))}
            </div>
            <p className="text-sm text-[hsl(var(--slide-muted))]">
              Locked set. No custom emoji — keeps the surface scannable across teams.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
