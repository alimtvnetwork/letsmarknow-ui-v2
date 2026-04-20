import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Lock, Eye, Keyboard, Hand, Type, Palette } from "lucide-react";

const rules = [
  { icon: Palette, title: "HSL only", body: "Every color in tokens is `hsl(H S% L%)`. No hex in components. No raw RGB." },
  { icon: Lock, title: "Tokens, not values", body: "Components reference `--primary`, never `#3b82f6`. Theme swap is one variable change." },
  { icon: Type, title: "One H1 per page", body: "Heading levels never skip. Semantic HTML wins over visual hierarchy." },
  { icon: Eye, title: "Focus visible always", body: "Outline 2px, 2px offset, in `--ring`. Never remove outline without replacement." },
  { icon: Hand, title: "Touch ≥ 44×44 px", body: "On mobile. Desktop ≥ 32×32 with 8px hit-slop. Spacing accounts for fingers." },
  { icon: Keyboard, title: "No hover-only affordances", body: "Every hover action also reachable via keyboard or right-click menu." },
];

export default function LockedRules() {
  return (
    <SlideLayout chapter="Chapter 18 · Design System Primer" pageLabel="18.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Locked rules · <span className="text-[hsl(var(--slide-accent))]">non-negotiable</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          The rails. Lint-enforced where possible, code-reviewed where not. Saying "no" to drift is how the system stays coherent.
        </p>
        <div className="grid grid-cols-3 gap-5 flex-1">
          {rules.map((r) => (
            <div key={r.title} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--slide-accent)_/_0.15)] flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              </div>
              <h3 className="text-lg font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-[hsl(var(--slide-muted))] leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
          {[
            "No emoji as icons in production UI",
            "No color-only signaling — use color + icon + text",
            "No styled-components · no CSS modules · no inline styles",
            "shadcn + Radix primitives — never forked into codebase",
            "Tailwind v3 utility classes only",
            "Dark mode is the default · light is a peer, not an afterthought",
          ].map((r) => (
            <div key={r} className="rounded-lg bg-[hsl(var(--slide-surface-2))] px-3 py-2 text-[hsl(var(--slide-muted))]">{r}</div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
