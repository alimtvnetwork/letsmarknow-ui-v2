import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Briefcase, GraduationCap, Globe } from "lucide-react";

const branches = [
  { icon: Briefcase, name: "Solo professional", color: "from-sky-500/20", path: ["Pick starting Space (Personal)", "Bring bookmarks (Chrome / Toby / Pocket)", "Install extension", "Try first save"] },
  { icon: GraduationCap, name: "Student / researcher", color: "from-violet-500/20", path: ["Pick starting Space (Research)", "Skip import (start fresh)", "Install extension", "Save 3 sample items"] },
  { icon: Globe, name: "Team invitee", color: "from-emerald-500/20", path: ["Accept invite → join Org", "Tour shared Spaces", "Install extension", "Star a Collection"] },
];

export default function OnboardingBranches() {
  return (
    <SlideLayout chapter="Chapter 6 · Onboarding" pageLabel="06.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Three <span className="text-[hsl(var(--slide-accent))]">branches</span>, one funnel
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-12 max-w-5xl">Entry context decides the path. All branches converge on 'first save'.</p>
        <div className="grid grid-cols-3 gap-6 flex-1">
          {branches.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.name} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
                <Icon className="w-10 h-10 text-[hsl(var(--slide-accent))] mb-3" />
                <div className="text-2xl font-bold mb-4">{b.name}</div>
                <ol className="space-y-2 text-base text-[hsl(var(--slide-fg))]/85">
                  {b.path.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-[hsl(var(--slide-accent)_/_0.15)] text-[hsl(var(--slide-accent))] text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      {step}
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
