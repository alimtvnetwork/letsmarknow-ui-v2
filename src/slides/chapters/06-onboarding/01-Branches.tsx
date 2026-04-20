import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { UserPlus, Mail, Chrome, ArrowRight, GitBranch } from "lucide-react";

const branches = [
  {
    icon: UserPlus,
    name: "Brand-new signup",
    route: "/onboarding",
    desc: "Email or OAuth signup with no invite, no extension yet.",
    next: "4-step welcome flow",
    color: "hsl(var(--slide-accent))",
  },
  {
    icon: Mail,
    name: "Accepted invite",
    route: "/invite/:token → /dashboard",
    desc: "Invitee opens an invite link from email.",
    next: "Lands directly on the shared Space + 1-step coach",
    color: "hsl(var(--slide-success))",
  },
  {
    icon: Chrome,
    name: "Post-extension install",
    route: "/welcome → /onboarding-ext",
    desc: "Browser auto-opens /welcome the moment the extension installs.",
    next: "Sign in then 1-step 'Try saving a tab'",
    color: "hsl(var(--slide-warning))",
  },
];

export default function OnboardingBranches() {
  return (
    <SlideLayout chapter="Chapter 6 · Branching" pageLabel="25">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Three doors, one destination.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            We detect the entry context and pick the shortest path to first save.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {branches.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.name}
                className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col"
              >
                <div className="text-xs font-bold text-[hsl(var(--slide-muted))] tabular-nums mb-3">
                  Branch 0{i + 1}
                </div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${b.color.replace(")", " / 0.15)")}` }}
                >
                  <Icon className="w-7 h-7" style={{ color: b.color }} />
                </div>
                <div className="text-2xl font-bold mb-2">{b.name}</div>
                <div className="font-mono text-xs px-2 py-1 rounded bg-[hsl(var(--slide-fg)/0.06)] inline-block self-start mb-4">
                  {b.route}
                </div>
                <div className="text-base text-[hsl(var(--slide-muted))] mb-5 flex-1">
                  {b.desc}
                </div>
                <div className="pt-4 border-t border-[hsl(var(--slide-border))] flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 shrink-0" style={{ color: b.color }} />
                  <span className="text-base font-semibold">{b.next}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4">
          {[
            ["TTFS", "< 90 sec median", "Time-to-first-save"],
            ["Activation", "70% save in session 1", "from any branch"],
            ["Install rate", "40% within 7 days", "of signup"],
            ["Forced steps", "0", "Skip is always available"],
          ].map(([k, v, sub]) => (
            <div key={k} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-4 py-3">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold">{k}</div>
              <div className="text-lg font-bold text-[hsl(var(--slide-accent))]">{v}</div>
              <div className="text-xs text-[hsl(var(--slide-muted))]">{sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-[hsl(var(--slide-muted))]">
          <GitBranch className="w-4 h-4" /> Returning users skip onboarding entirely → /dashboard.
        </div>
      </div>
    </SlideLayout>
  );
}
