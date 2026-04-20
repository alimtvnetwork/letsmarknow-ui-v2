import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Check, ArrowRight } from "lucide-react";

const alsoServed = [
  {
    label: "Researcher / PhD student",
    detail: "Long-lived Spaces of citations. Behaves like Riad at scale.",
  },
  {
    label: "Designer",
    detail: "Compact view turns saved tabs into favicon walls of inspiration.",
  },
  {
    label: "Enterprise IT admin",
    detail: "Provisions seats, configures SSO, sets retention policies.",
  },
];

const outOfScope = [
  { us: "Casual web user (<10 bookmarks)", them: "Chrome bookmarks bar" },
  { us: "Full WYSIWYG note editing", them: "Notion" },
  { us: "Offline article reading", them: "Pocket / Instapaper" },
  { us: "Credential storage", them: "1Password / Bitwarden" },
];

export default function AntiPersonasSlide() {
  return (
    <SlideLayout chapter="Chapter 1 · Scope" pageLabel="06">
      <div className="h-full flex flex-col">
        <div className="mb-10">
          <h2 className="text-6xl font-bold leading-tight mb-3">
            Who we're <span className="text-[hsl(var(--slide-accent))]">also</span> building for.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))]">
            Beyond Riad, Sara, and Alex — three more groups get a great experience by default.
          </p>
        </div>

        {/* Also served — the positive frame */}
        <div className="grid grid-cols-3 gap-5 mb-10">
          {alsoServed.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[hsl(var(--slide-accent)/0.18)] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="text-xl font-bold text-[hsl(var(--slide-fg))]">{s.label}</div>
              </div>
              <div className="text-base text-[hsl(var(--slide-muted))] leading-snug">
                {s.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Out of scope — minimal honest footer */}
        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))] p-6 flex-1">
          <div className="flex items-baseline justify-between mb-4">
            <div className="text-sm uppercase tracking-[0.25em] font-semibold text-[hsl(var(--slide-muted))]">
              Out of scope · use the right tool for the job
            </div>
            <div className="text-xs text-[hsl(var(--slide-muted))]">Saying no keeps the product sharp</div>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {outOfScope.map((o) => (
              <div
                key={o.us}
                className="flex items-center gap-3 text-base"
              >
                <span className="text-[hsl(var(--slide-fg))] flex-1">{o.us}</span>
                <ArrowRight className="w-4 h-4 text-[hsl(var(--slide-muted))] shrink-0" />
                <span className="text-[hsl(var(--slide-muted))] font-mono text-sm w-44 text-right">
                  {o.them}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
