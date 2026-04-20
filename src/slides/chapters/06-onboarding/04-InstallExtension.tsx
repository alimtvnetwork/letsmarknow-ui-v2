import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Chrome, MousePointer2, CheckCircle2, Link2 } from "lucide-react";

export default function InstallExtension() {
  return (
    <SlideLayout chapter="Chapter 6 · Branch 1 · Step 3" pageLabel="28">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Step 3 — Install the extension.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            v1 ships Chrome only. We say so honestly and offer a fallback.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-7">
          {/* Step content mock */}
          <div className="col-span-3 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`h-2 rounded-full transition-all ${
                    n < 3 ? "w-8 bg-[hsl(var(--slide-success))]"
                    : n === 3 ? "w-12 bg-[hsl(var(--slide-accent))]"
                    : "w-8 bg-[hsl(var(--slide-fg)/0.15)]"
                  }`}
                />
              ))}
              <div className="ml-4 text-sm font-semibold text-[hsl(var(--slide-muted))]">
                Step 3 of 4
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-3xl bg-[hsl(var(--slide-accent)/0.15)] flex items-center justify-center mb-6">
                <Chrome className="w-12 h-12 text-[hsl(var(--slide-accent))]" />
              </div>
              <div className="text-3xl font-bold mb-2">Save tabs in one click.</div>
              <div className="text-base text-[hsl(var(--slide-muted))] mb-7 max-w-md">
                The LMN extension adds a toolbar button, an Alt+S shortcut, and the
                "Save this window" command.
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--slide-success)/0.15)] text-[hsl(var(--slide-success))] text-sm font-semibold mb-5">
                <CheckCircle2 className="w-4 h-4" /> Detected: Chrome 124
              </div>

              <button className="px-7 py-3.5 rounded-xl bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-bg))] font-bold text-base flex items-center gap-2 mb-5">
                <Chrome className="w-5 h-5" /> Add to Chrome
              </button>

              <div className="text-sm text-[hsl(var(--slide-muted))] italic">
                Coming soon for Edge, Brave, Arc, Firefox, and Safari.
              </div>
            </div>
          </div>

          {/* Side - what we don't do + fallback */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-[hsl(var(--slide-warning)/0.4)] bg-[hsl(var(--slide-warning)/0.08)] p-5">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-warning))] font-bold mb-3">
                What v1 does NOT do
              </div>
              <ul className="space-y-2 text-base">
                <li>✗ Per-browser CTAs for non-Chrome</li>
                <li>✗ Pretend the Edge build exists</li>
                <li>✗ Block onboarding if user skips</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex-1">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold mb-3">
                Fallback: bookmarklet
              </div>
              <div className="text-sm text-[hsl(var(--slide-muted))] mb-4">
                For non-Chrome users today: drag the "Save to LMN" button to the bookmark bar.
              </div>
              <div className="rounded-lg border border-dashed border-[hsl(var(--slide-border))] px-4 py-3 flex items-center gap-3">
                <Link2 className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
                <span className="font-mono text-sm">javascript:(LMN.save())</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-[hsl(var(--slide-muted))]">
                <MousePointer2 className="w-4 h-4" /> Detection polls chrome.runtime — auto-advance on install.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
