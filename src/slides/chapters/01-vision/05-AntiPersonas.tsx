import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Ban } from "lucide-react";

const antiPersonas = [
  {
    label: "Casual web user",
    detail: "< 10 bookmarks. Chrome's bookmark bar is enough.",
  },
  {
    label: "Notion power user",
    detail: "Wants full WYSIWYG inside notes. Use Notion.",
  },
  {
    label: "Read-it-later reader",
    detail: "No offline article rendering — that's Pocket / Instapaper.",
  },
  {
    label: "Password manager",
    detail: "We never store credentials. Use 1Password / Bitwarden.",
  },
];

const secondary = [
  { label: "Researcher / PhD student", detail: "Long-lived Spaces of citations. Behaves like Riad." },
  { label: "Designer", detail: "Heavy use of Compact view (favicon walls of inspiration)." },
  { label: "Enterprise IT admin", detail: "Provisions seats, configures SSO, sets retention." },
];

export default function AntiPersonasSlide() {
  return (
    <SlideLayout chapter="Chapter 1 · Scope" pageLabel="06">
      <div className="h-full flex flex-col">
        <div className="mb-10">
          <h2 className="text-6xl font-bold leading-tight mb-3">
            Who we're <span className="text-[hsl(var(--slide-danger))]">not</span> building for.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))]">
            Saying no is a feature. These users have better tools elsewhere.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 flex-1">
          {/* Anti-personas */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Ban className="w-6 h-6 text-[hsl(var(--slide-danger))]" />
              <div className="text-2xl font-bold">Anti-personas</div>
            </div>
            <div className="space-y-4">
              {antiPersonas.map((a) => (
                <div
                  key={a.label}
                  className="rounded-xl border border-[hsl(var(--slide-danger)/0.25)] bg-[hsl(var(--slide-danger)/0.05)] p-5"
                >
                  <div className="text-xl font-bold text-[hsl(var(--slide-fg))] mb-1">
                    {a.label}
                  </div>
                  <div className="text-base text-[hsl(var(--slide-muted))]">{a.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary personas */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-[hsl(var(--slide-accent)/0.2)] flex items-center justify-center">
                <span className="text-xs font-bold text-[hsl(var(--slide-accent))]">+</span>
              </div>
              <div className="text-2xl font-bold">Secondary personas — supported, not optimized for</div>
            </div>
            <div className="space-y-4">
              {secondary.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5"
                >
                  <div className="text-xl font-bold text-[hsl(var(--slide-fg))] mb-1">
                    {s.label}
                  </div>
                  <div className="text-base text-[hsl(var(--slide-muted))]">{s.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
