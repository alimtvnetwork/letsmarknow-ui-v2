import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free", price: "$0", per: "forever", accent: false,
    feats: ["Unlimited tabs & items", "3 collections", "1 workspace", "7-day trash", "Public shares"],
    limits: ["No mind-map view", "No team features", "No analytics"],
  },
  {
    name: "Pro", price: "$8", per: "/ month", accent: true,
    feats: ["Everything in Free", "Unlimited collections", "Mind-map view", "30-day trash", "Share analytics", "Password shares", "Priority support"],
    limits: [],
  },
  {
    name: "Team", price: "$12", per: "/ seat / month",
    feats: ["Everything in Pro", "Unlimited workspaces", "Member roles", "Audit log", "SSO (SAML)", "SCIM provisioning", "99.9% SLA"],
    limits: [],
  },
];

export default function PlanPicker() {
  return (
    <SlideLayout chapter="Chapter 15 · Settings, Pricing & Plans" pageLabel="15.02">
      <div className="h-full flex flex-col pt-10">
        <h1 className="text-6xl font-bold tracking-tight mb-2">
          Plan management · <span className="text-[hsl(var(--slide-accent))]">upgrade, downgrade, current state</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8 max-w-5xl">
          This is the in-app settings view after signup — not the marketing pricing page. It shows the current plan, what unlocks next, and where upgrades happen.
        </p>
        <div className="grid grid-cols-3 gap-6 flex-1">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-6 flex flex-col min-h-0 ${
                p.accent
                  ? "border-2 border-[hsl(var(--slide-accent))] bg-[hsl(var(--slide-accent)_/_0.05)]"
                  : "border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))]"
              }`}
            >
              {p.accent && (
                <div className="self-start px-2 py-0.5 rounded-full bg-[hsl(var(--slide-accent))] text-black text-xs font-bold mb-4">MOST POPULAR</div>
              )}
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-[hsl(var(--slide-muted))] ml-2">{p.per}</span>
              </div>
              <ul className="space-y-2 mb-4 flex-1">
                {p.feats.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-[hsl(var(--slide-accent))] flex-shrink-0 mt-0.5" />
                    <span className="text-[hsl(var(--slide-muted))]">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-lg font-semibold ${
                  p.accent
                    ? "bg-[hsl(var(--slide-accent))] text-black"
                    : "bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-fg))]"
                }`}
              >
                {p.name === "Free" ? "Current plan" : `Upgrade to ${p.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
