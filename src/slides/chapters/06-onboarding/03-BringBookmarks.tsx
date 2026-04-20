import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Chrome, Upload, Bookmark, FileJson, MoreHorizontal } from "lucide-react";

const tiles = [
  {
    icon: Chrome,
    title: "Chrome bookmarks",
    sub: "One click via the extension. We read chrome.bookmarks.getTree() after a one-time grant.",
    cta: "Import from Chrome",
    color: "hsl(var(--slide-accent))",
    highlight: true,
  },
  {
    icon: FileJson,
    title: "Toby JSON",
    sub: "Drop your Toby export — collections become Collections, lists become Groups.",
    cta: "Upload .json",
    color: "hsl(var(--slide-success))",
    highlight: false,
  },
  {
    icon: MoreHorizontal,
    title: "Pocket · Raindrop · Other",
    sub: "HTML bookmarks, CSV, or any of the supported third-party exports — see Chapter 16.",
    cta: "Choose a file",
    color: "hsl(var(--slide-accent-2))",
    highlight: false,
  },
];

export default function BringBookmarks() {
  return (
    <SlideLayout chapter="Chapter 6 · Branch 1 · Step 2" pageLabel="27">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Step 2 — Bring your bookmarks.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            Skippable. We never block onboarding on a successful import.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl">
            {/* Progress */}
            <div className="flex items-center gap-2 justify-center mb-10">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`h-2 rounded-full transition-all ${
                    n < 2 ? "w-8 bg-[hsl(var(--slide-success))]"
                    : n === 2 ? "w-12 bg-[hsl(var(--slide-accent))]"
                    : "w-8 bg-[hsl(var(--slide-fg)/0.15)]"
                  }`}
                />
              ))}
              <div className="ml-4 text-sm font-semibold text-[hsl(var(--slide-muted))]">
                Step 2 of 4
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {tiles.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.title}
                    className={`rounded-2xl p-7 flex flex-col border ${
                      t.highlight
                        ? "border-[hsl(var(--slide-accent)/0.5)] bg-[hsl(var(--slide-accent)/0.06)]"
                        : "border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))]"
                    }`}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${t.color.replace(")", " / 0.15)")}` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: t.color }} />
                    </div>
                    <div className="text-2xl font-bold mb-2">{t.title}</div>
                    <div className="text-base text-[hsl(var(--slide-muted))] mb-6 flex-1">
                      {t.sub}
                    </div>
                    <button
                      className="w-full px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                      style={{
                        background: t.highlight ? t.color : "transparent",
                        color: t.highlight ? "hsl(var(--slide-bg))" : "hsl(var(--slide-fg))",
                        border: t.highlight ? "none" : "1px solid hsl(var(--slide-border))",
                      }}
                    >
                      <Upload className="w-4 h-4" /> {t.cta}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button className="text-base font-semibold text-[hsl(var(--slide-muted))] underline">
                I'll add them later
              </button>
              <span className="text-sm text-[hsl(var(--slide-muted))]">·</span>
              <span className="flex items-center gap-2 text-sm text-[hsl(var(--slide-muted))]">
                <Bookmark className="w-4 h-4" /> Imports run async — onboarding never waits on them.
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
