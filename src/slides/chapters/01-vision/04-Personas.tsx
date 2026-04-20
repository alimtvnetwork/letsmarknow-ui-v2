import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { User, Users, Megaphone, Check } from "lucide-react";

const personas = [
  {
    icon: User,
    name: "Riad",
    role: "Solo Power User",
    subtitle: "Senior dev / founder · 80+ tabs daily",
    accent: "hsl(var(--slide-accent))",
    goals: [
      "Save & re-find any tab in <5s",
      "Group by client / project / topic",
      "Never lose context on restart",
      "Strict separation: work · personal · side",
    ],
    plan: "Pro / Lifetime",
  },
  {
    icon: Users,
    name: "Sara",
    role: "Small Team Lead",
    subtitle: "Marketing manager · 12-person agency",
    accent: "hsl(var(--slide-success))",
    goals: [
      "One shared Space per client",
      "Onboard hires with a single share link",
      "Audit who added or removed what",
      "Google Workspace SSO for the whole team",
    ],
    plan: "Team",
  },
  {
    icon: Megaphone,
    name: "Alex",
    role: "Public Sharer / Creator",
    subtitle: "YouTuber · curates tools, gear, courses",
    accent: "hsl(var(--slide-accent-2))",
    goals: [
      "Public link letsmarknow.com/t/my-gear",
      "Edits reflected on viewer instantly",
      "Password-protect premium lists",
      "View & click analytics per item",
    ],
    plan: "Pro",
  },
];

export default function PersonasSlide() {
  return (
    <SlideLayout chapter="Chapter 1 · Personas" pageLabel="05">
      <div className="h-full flex flex-col">
        <div className="mb-8">
          <h2 className="text-6xl font-bold leading-tight">
            Three users drive every decision.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            When in doubt — Riad first, Sara second, Alex third.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 flex-1">
          {personas.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="relative rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-7 flex flex-col"
              >
                <div className="absolute top-5 right-5 text-sm font-bold text-[hsl(var(--slide-muted))] tabular-nums">
                  0{i + 1}
                </div>

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${p.accent.replace(")", " / 0.18)")}` }}
                >
                  <Icon className="w-8 h-8" style={{ color: p.accent }} />
                </div>

                <div className="text-3xl font-bold mb-1">{p.name}</div>
                <div className="text-lg font-semibold" style={{ color: p.accent }}>
                  {p.role}
                </div>
                <div className="text-sm text-[hsl(var(--slide-muted))] mb-5">{p.subtitle}</div>

                <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold mb-3">
                  Key flows we must nail
                </div>
                <ul className="space-y-2 flex-1">
                  {p.goals.map((g) => (
                    <li key={g} className="flex items-start gap-2 text-base">
                      <Check
                        className="w-4 h-4 mt-1 shrink-0"
                        style={{ color: p.accent }}
                      />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-[hsl(var(--slide-border))] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))]">
                    Plan they buy
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-bold"
                    style={{
                      background: `${p.accent.replace(")", " / 0.15)")}`,
                      color: p.accent,
                    }}
                  >
                    {p.plan}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
