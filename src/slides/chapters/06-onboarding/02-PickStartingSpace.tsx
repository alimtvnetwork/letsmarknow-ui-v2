import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Briefcase, FlaskConical, Heart, Code, GraduationCap, Sparkles } from "lucide-react";

const templates = [
  { icon: Briefcase, name: "Work", count: "5 collections", c: ["📥 Inbox", "🔧 Tools", "📚 Learning", "👥 Meetings", "✅ Done"] },
  { icon: FlaskConical, name: "Research", count: "4 collections", c: ["📑 Papers", "💡 Ideas", "🧪 Experiments", "📝 Notes"] },
  { icon: Heart, name: "Personal", count: "5 collections", c: ["📺 Watch later", "🎵 Listen", "🍳 Recipes", "✈️ Travel", "🛍 Shopping"] },
  { icon: Code, name: "Developer", count: "5 collections", c: ["🐙 Repos", "📚 Docs", "🛠 Tools", "🎓 Tutorials", "🐛 Issues"] },
  { icon: GraduationCap, name: "Student", count: "4 collections", c: ["📖 Reading", "✍️ Assignments", "🧠 Study", "📅 Schedule"] },
  { icon: Sparkles, name: "Empty", count: "Start fresh", c: ["I'll create my own"] },
];

export default function OnboardingPickStartingSpace() {
  return (
    <SlideLayout chapter="Chapter 6 · Onboarding" pageLabel="06.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Step 1 · <span className="text-[hsl(var(--slide-accent))]">pick your starting Space</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">Six templates. Each seeds Collections you can rename or delete.</p>
        <div className="grid grid-cols-3 gap-5 flex-1">
          {templates.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.name} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col">
                <div className="flex items-center gap-3 mb-2"><Icon className="w-7 h-7 text-[hsl(var(--slide-accent))]" /><div className="text-2xl font-bold">{t.name}</div></div>
                <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">{t.count}</div>
                <ul className="space-y-1.5 text-base">
                  {t.c.map((c) => <li key={c} className="text-[hsl(var(--slide-fg))]/85">{c}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
