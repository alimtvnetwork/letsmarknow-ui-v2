import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ArrowRight, Mail, ShieldCheck, Sparkles } from "lucide-react";

const steps = [
  { icon: Mail, t: "1. Submit form", s: "email + password + optional display name. IP+email throttle." },
  { icon: ShieldCheck, t: "2. Server validates", s: "Email format · password rules · HIBP check · disposable domain block." },
  { icon: Sparkles, t: "3. Account created", s: "Account row · Personal Org · Member(owner) — all in one txn." },
  { icon: Mail, t: "4. Verify email sent", s: "Single-use token, 24h TTL. User signed in immediately." },
  { icon: ShieldCheck, t: "5. Session issued", s: "Access JWT (15 min) + rolling refresh cookie (30 d)." },
];

export default function Signup() {
  return (
    <SlideLayout chapter="Chapter 5 · Signup" pageLabel="19">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">Signup — five steps, no friction.</h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">Sign in immediately. Verification is a banner, not a wall.</p>
        </div>
        <div className="flex-1 grid grid-cols-5 gap-7">
          <div className="col-span-3 flex flex-col gap-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.t} className="flex items-start gap-4 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
                  <div className="w-11 h-11 rounded-lg bg-[hsl(var(--slide-accent)/0.15)] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg">{step.t}</div>
                    <div className="text-sm text-[hsl(var(--slide-muted))] mt-0.5">{step.s}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[hsl(var(--slide-muted))] mt-3" />
                </div>
              );
            })}
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-[hsl(var(--slide-warning)/0.4)] bg-[hsl(var(--slide-warning)/0.08)] p-5">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-warning))] font-bold mb-2">Until verified</div>
              <ul className="space-y-2 text-base">
                <li>✗ Cannot create public shares</li>
                <li>✗ Cannot invite others</li>
                <li>✗ Cannot change email</li>
                <li>✓ Everything else works</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex-1">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold mb-3">Anti-abuse</div>
              <ul className="space-y-2 text-sm">
                <li><span className="font-mono">10/h</span> signups per IP</li>
                <li><span className="font-mono">3/24h</span> per email address</li>
                <li>reCAPTCHA Enterprise when abuse score &gt; 0.7</li>
                <li>5-fail lockout · 15 min per (email, IP)</li>
                <li>Password never logged · never echoed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
