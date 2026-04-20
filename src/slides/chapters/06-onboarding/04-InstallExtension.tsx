import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Chrome, Pin, Keyboard, MousePointerClick } from "lucide-react";

export default function OnboardingInstallExtension() {
  return (
    <SlideLayout chapter="Chapter 6 · Onboarding" pageLabel="06.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Step 3 · <span className="text-[hsl(var(--slide-accent))]">install the extension</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">The capture surface. Without it, save flow is bookmarklet-only.</p>
        <div className="grid grid-cols-2 gap-10 flex-1 items-start">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 text-center">
            <Chrome className="w-20 h-20 text-[hsl(var(--slide-accent))] mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">Lets Mark Now</div>
            <div className="text-sm text-[hsl(var(--slide-muted))] mb-5">Chrome Web Store · 4.8 ★ · Free</div>
            <button className="px-8 py-3 rounded-lg bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-accent-fg))] font-semibold text-lg">Add to Chrome</button>
            <div className="mt-5 text-xs text-[hsl(var(--slide-muted))]">After install → /welcome auto-opens · auth handoff via content script</div>
          </div>
          <div className="space-y-3">
            {[
              { icon: Pin, t: "Pin the icon", d: "Toolbar → puzzle icon → pin LMN. We coach this on first popup." },
              { icon: Keyboard, t: "Set the shortcut", d: "Default Alt+Shift+S works on most systems. We banner if unset." },
              { icon: MousePointerClick, t: "Try a save", d: "Open any tab → click icon → save. Toast confirms." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex gap-4">
                <Icon className="w-7 h-7 text-[hsl(var(--slide-accent))] shrink-0 mt-1" />
                <div>
                  <div className="text-xl font-semibold">{t}</div>
                  <div className="text-base text-[hsl(var(--slide-muted))]">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
