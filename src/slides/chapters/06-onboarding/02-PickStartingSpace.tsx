import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { User, Users, Sparkles } from "lucide-react";

export default function PickStartingSpace() {
  return (
    <SlideLayout chapter="Chapter 6 · Branch 1 · Step 1" pageLabel="26">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Step 1 — Pick your starting Space.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            Two cards. Both seed "Read Later" and "Favorites" automatically.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-5xl">
            {/* Progress */}
            <div className="flex items-center gap-2 justify-center mb-10">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`h-2 rounded-full transition-all ${
                    n === 1
                      ? "w-12 bg-[hsl(var(--slide-accent))]"
                      : "w-8 bg-[hsl(var(--slide-fg)/0.15)]"
                  }`}
                />
              ))}
              <div className="ml-4 text-sm font-semibold text-[hsl(var(--slide-muted))]">
                Step 1 of 4
              </div>
            </div>

            <div className="grid grid-cols-2 gap-7">
              {/* Personal */}
              <div className="rounded-2xl border-2 border-[hsl(var(--slide-accent))] bg-[hsl(var(--slide-accent)/0.06)] p-8 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--slide-accent)/0.18)] flex items-center justify-center">
                    <User className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[hsl(var(--slide-accent))]">
                    Default
                  </span>
                </div>
                <div className="text-3xl font-bold mb-2">Personal</div>
                <div className="text-base text-[hsl(var(--slide-muted))] mb-5">
                  For your own bookmarks, sessions, and projects. Fastest path to first save.
                </div>
                <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold mb-2">
                  We'll create
                </div>
                <ul className="text-sm space-y-1 mb-6">
                  <li>📁 Space "My Collections"</li>
                  <li>📚 Collection "Read Later"</li>
                  <li>⭐ Collection "Favorites"</li>
                </ul>
                <button className="mt-auto w-full px-5 py-3 rounded-xl bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-bg))] font-bold">
                  Continue with Personal
                </button>
              </div>

              {/* Team */}
              <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--slide-success)/0.15)] flex items-center justify-center mb-5">
                  <Users className="w-7 h-7 text-[hsl(var(--slide-success))]" />
                </div>
                <div className="text-3xl font-bold mb-2">Team</div>
                <div className="text-base text-[hsl(var(--slide-muted))] mb-5">
                  Invite teammates now. We jump straight to the invite UI.
                </div>
                <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold mb-2">
                  We'll create
                </div>
                <ul className="text-sm space-y-1 mb-6">
                  <li>🏢 Team Org (free 14-day trial)</li>
                  <li>📁 Personal Space (silently, in background)</li>
                  <li>📨 Invite up to 25 teammates by email</li>
                </ul>
                <button className="mt-auto w-full px-5 py-3 rounded-xl border border-[hsl(var(--slide-border))] font-bold">
                  Set up a Team
                </button>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 justify-center text-sm text-[hsl(var(--slide-muted))]">
              <Sparkles className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
              You can switch later — Personal and Team Orgs coexist on the same Account.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
