import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Casual savers, trial users",
    cta: "Add to Chrome",
    accent: false,
    features: ["200 active items", "20 collections", "1 member", "3 public shares", "30 tabs / session"],
  },
  {
    name: "Pro",
    price: "$5",
    period: "/month · billed monthly",
    desc: "Power users, freelancers",
    cta: "Start 14-day trial",
    accent: true,
    badge: "Most popular",
    features: [
      "10,000 active items",
      "Unlimited collections",
      "100 public shares",
      "Password & invite shares",
      "Auto-tag · Rich previews",
      "Email-in capture",
    ],
  },
  {
    name: "Team",
    price: "$9",
    period: "/seat/month · 3–25 seats",
    desc: "Small teams & agencies",
    cta: "Add your team",
    accent: false,
    features: [
      "100,000 active items",
      "25 members included",
      "Unlimited shares + custom domain",
      "Smart tags · Webhooks · API",
      "Audit log (1 year)",
      "Email priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <SlideLayout chapter="Chapter 4 · Pricing" pageLabel="14">
      <div className="h-full flex flex-col">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-6xl font-bold leading-tight">
              Three plans. One lifetime deal.
            </h2>
            <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
              Yearly saves ~20%. 14-day Pro trial — no card.
            </p>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-1">
            <button className="px-4 py-2 rounded-full text-sm font-semibold text-[hsl(var(--slide-muted))]">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-semibold bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-bg))]">
              Yearly · save 20%
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 flex-1">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-7 flex flex-col border ${
                p.accent
                  ? "border-[hsl(var(--slide-accent)/0.5)] bg-[hsl(var(--slide-accent)/0.06)] shadow-[0_0_60px_hsl(var(--slide-accent)/0.15)]"
                  : "border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))]"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-7 px-3 py-1 rounded-full text-xs font-bold bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-bg))]">
                  {p.badge}
                </div>
              )}
              <div className="text-2xl font-bold mb-1">{p.name}</div>
              <div className="text-sm text-[hsl(var(--slide-muted))] mb-5">{p.desc}</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-bold">{p.price}</span>
              </div>
              <div className="text-sm text-[hsl(var(--slide-muted))] mb-6">{p.period}</div>

              <button
                className={`w-full px-5 py-3 rounded-xl font-bold text-base mb-6 ${
                  p.accent
                    ? "bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-bg))]"
                    : "border border-[hsl(var(--slide-border))]"
                }`}
              >
                {p.cta}
              </button>

              <ul className="space-y-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 text-[hsl(var(--slide-success))] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-[hsl(var(--slide-warning)/0.4)] bg-[hsl(var(--slide-warning)/0.08)] px-5 py-3 flex items-center gap-3 text-base">
          <Sparkles className="w-5 h-5 text-[hsl(var(--slide-warning))]" />
          <span>
            <span className="font-bold text-[hsl(var(--slide-warning))]">Lifetime deal:</span>{" "}
            Pay once — $79 (Pro) or $249 (Team, 5 seats). Pay once. Use forever.
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
