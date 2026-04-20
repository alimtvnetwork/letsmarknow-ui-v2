import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Mail, KeyRound, ShieldCheck, ArrowRight } from "lucide-react";

const flow = [
  { icon: Mail, t: "Enter email", d: "Always returns 200 (no enumeration)" },
  { icon: ArrowRight, t: "Email arrives", d: "Reset link · 30 min · single-use" },
  { icon: KeyRound, t: "Set new password", d: "zxcvbn ≥ 3 · breach check via k-anon" },
  { icon: ShieldCheck, t: "Sign in", d: "All other sessions revoked automatically" },
];

const rules = [
  ["Min length", "10 characters"],
  ["No max length", "Up to 256 chars"],
  ["Strength", "zxcvbn score ≥ 3"],
  ["Breach check", "Pwned Passwords k-anonymity API"],
  ["No rotation policy", "NIST 800-63B aligned"],
  ["No composition rules", "No forced symbols/digits"],
];

export default function AuthPasswordReset() {
  return (
    <SlideLayout chapter="Chapter 5 · Auth & Account" pageLabel="05.06">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Forgot password · <span className="text-[hsl(var(--slide-accent))]">NIST-aligned</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">No silly composition rules. Strength-based. No forced rotation.</p>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="space-y-3">
            {flow.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.t} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center"><Icon className="w-5 h-5 text-[hsl(var(--slide-accent))]" /></div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold">{i + 1}. {f.t}</div>
                    <div className="text-sm text-[hsl(var(--slide-muted))]">{f.d}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-4">Password rules</div>
            <div className="space-y-3">
              {rules.map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-[hsl(var(--slide-border))]/50 pb-2 last:border-0">
                  <span className="text-base font-medium">{k}</span>
                  <span className="text-base text-[hsl(var(--slide-muted))]">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
