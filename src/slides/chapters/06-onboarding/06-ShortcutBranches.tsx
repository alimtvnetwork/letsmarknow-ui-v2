import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Mail, Chrome, ArrowRight } from "lucide-react";

export default function OnboardingShortcutBranches() {
  return (
    <SlideLayout chapter="Chapter 6 · Onboarding" pageLabel="06.06">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Shortcut branches · <span className="text-[hsl(var(--slide-accent))]">invite & install entries</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-12">Two side-doors collapse the funnel. Both still land at 'first save'.</p>
        <div className="grid grid-cols-2 gap-8 flex-1">
          {[
            { icon: Mail, title: "Invite branch", entry: "/invite/:token", flow: ["Click invite link in email", "Sign in or sign up (token preserved)", "Auto-join Org · skip 'pick Space'", "Tour shared Collections · install extension", "Done"] },
            { icon: Chrome, title: "Extension-first branch", entry: "/welcome (post-install)", flow: ["Install ext from Web Store", "Auto-open /welcome", "Sign in (auth handoff via content script)", "Onboarding skips 'install' step", "Pick Space → first save"] },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3"><Icon className="w-9 h-9 text-[hsl(var(--slide-accent))]" /><div className="text-2xl font-bold">{b.title}</div></div>
                <code className="text-sm font-mono text-[hsl(var(--slide-muted))] mb-5">entry: {b.entry}</code>
                <ol className="space-y-2.5 text-base">
                  {b.flow.map((step, i) => (
                    <li key={step} className="flex gap-3 items-start">
                      <span className="w-7 h-7 rounded-full bg-[hsl(var(--slide-accent)_/_0.15)] text-[hsl(var(--slide-accent))] text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <ArrowRight className="w-3 h-3 text-[hsl(var(--slide-muted))] mt-2 shrink-0" />
                      <span className="text-[hsl(var(--slide-fg))]/85">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
