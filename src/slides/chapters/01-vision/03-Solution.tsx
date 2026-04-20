import { SlideLayout } from "@/slides/_layout/SlideLayout";
import {
  Sparkles,
  Layers,
  Share2,
  Zap,
  Undo2,
  Eye,
  Award,
} from "lucide-react";

const pillars = [
  { icon: Sparkles, title: "Looks better", detail: "Apple-system + Ubuntu typography, dark-first, polished motion." },
  { icon: Layers, title: "Organizes deeper", detail: "5-level hierarchy, no caps in paid tiers." },
  { icon: Share2, title: "Shares richer", detail: "Public · password · expiring · invite-only at every level." },
  { icon: Zap, title: "Works faster", detail: "Instant fuzzy search, jump-to-tab, full keyboard control." },
  { icon: Undo2, title: "Never loses data", detail: "Every action in history. Ctrl+Z always works." },
  { icon: Eye, title: "Visualizes uniquely", detail: "List · Grid · Compact · Mind-map · Tab-Extend Column." },
  { icon: Award, title: "Earns trust", detail: "Real license manager, real support, real updater." },
];

export default function SolutionSlide() {
  return (
    <SlideLayout chapter="Chapter 1 · The vision" pageLabel="04">
      <div className="h-full flex flex-col">
        <div className="mb-10">
          <h2 className="text-6xl font-bold leading-tight mb-3">
            One tool. <span className="text-[hsl(var(--slide-accent))]">Seven principles.</span>
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] max-w-[1200px]">
            Make every tab in every browser instantly findable, beautifully organized,
            and effortlessly shareable — for one person or a whole team.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 flex-1">
          {pillars.map(({ icon: Icon, title, detail }, i) => (
            <div
              key={title}
              className={`rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 ${
                i === 6 ? "col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-accent)/0.15)] flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[hsl(var(--slide-accent))]" />
              </div>
              <div className="text-2xl font-bold mb-2">{title}</div>
              <div className="text-base text-[hsl(var(--slide-muted))] leading-snug">{detail}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
