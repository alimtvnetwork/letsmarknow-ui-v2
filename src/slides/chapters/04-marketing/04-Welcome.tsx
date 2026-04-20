import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { CheckCircle2, ArrowRight, Pin, KeyRound } from "lucide-react";

export default function Welcome() {
  return (
    <SlideLayout chapter="Chapter 4 · /welcome" pageLabel="16">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">The /welcome page.</h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            The browser opens this tab automatically the moment the extension installs. We have ~30 seconds to earn the next click.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-5 gap-7">
          <div className="col-span-3 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex flex-col">
            <div className="px-5 py-3 border-b border-[hsl(var(--slide-border))] flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--slide-warning))]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--slide-warning)/0.6)]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--slide-success))]" />
              <div className="ml-4 text-sm font-mono text-[hsl(var(--slide-muted))]">letsmarknow.com/welcome</div>
            </div>
            <div className="flex-1 p-10 flex flex-col">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[hsl(var(--slide-success)/0.15)] text-[hsl(var(--slide-success))] text-sm font-semibold mb-4">
                <CheckCircle2 className="w-4 h-4" /> Extension installed
              </div>
              <div className="text-4xl font-bold leading-tight mb-3">You're in. Three quick steps.</div>
              <div className="text-base text-[hsl(var(--slide-muted))] mb-6">~60 seconds to a fully working setup.</div>
              <div className="space-y-3 flex-1">
                {[
                  { n: "1", icon: Pin, t: "Pin the LMN icon", s: "Click the puzzle in the toolbar → pin LMN." },
                  { n: "2", icon: KeyRound, t: "Create your account or sign in", s: "Email · Google · Apple · GitHub. Magic-link option." },
                  { n: "3", icon: ArrowRight, t: "Save your first session", s: "Click LMN → 'Save this window'. 47 tabs become a tidy Collection." },
                ].map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.n} className="flex items-start gap-4 p-4 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))]">
                      <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-accent)/0.15)] text-[hsl(var(--slide-accent))] font-bold flex items-center justify-center shrink-0">{step.n}</div>
                      <div className="flex-1">
                        <div className="font-bold text-lg flex items-center gap-2"><Icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" /> {step.t}</div>
                        <div className="text-sm text-[hsl(var(--slide-muted))] mt-0.5">{step.s}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold">Why this page matters</div>
            {[
              { t: "Auto-opens on install", s: "chrome.runtime.onInstalled → opens /welcome." },
              { t: "Owns the activation funnel", s: "Pin → signup → first-save measured here." },
              { t: "Detects install context", s: "?src=marketing|store|invite personalises CTA." },
              { t: "Falls back to /signup gracefully", s: "If account exists, jumps to sign-in." },
              { t: "Ends at the dashboard", s: "Last step deep-links to the popup or /app." },
            ].map((it) => (
              <div key={it.t} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-4 py-3">
                <div className="font-bold mb-1">{it.t}</div>
                <div className="text-sm text-[hsl(var(--slide-muted))]">{it.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
