import { SlideLayout } from "@/slides/_layout/SlideLayout";

const steps = [
  { n: 1, t: "Email + password (or OAuth)", d: "Form posts to /v1/auth/signup" },
  { n: 2, t: "Verify email", d: "6-digit code · 10 min · 5 attempts" },
  { n: 3, t: "Create starter Org", d: "Auto: '<name>'s workspace' (Personal kind)" },
  { n: 4, t: "Issue session", d: "JWT (15 min) + refresh cookie (30 d)" },
  { n: 5, t: "Redirect to /onboarding", d: "or ?next=… if deep-linked" },
];

const guards = [
  "hCaptcha after 3 failures from same IP/15 min",
  "Disposable-email block list (10minutemail, etc.)",
  "Soft rate-limit: 5 signups / IP / hour",
  "Honeypot field + minimum form-fill time",
];

export default function AuthSignup() {
  return (
    <SlideLayout chapter="Chapter 5 · Auth & Account" pageLabel="05.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Signup · <span className="text-[hsl(var(--slide-accent))]">five steps to a session</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">From form post to /onboarding — typically under 30 seconds.</p>
        <div className="grid grid-cols-3 gap-8 flex-1">
          <div className="col-span-2 space-y-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex gap-5 items-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-accent-fg))] flex items-center justify-center text-xl font-bold shrink-0">{s.n}</div>
                <div>
                  <div className="text-2xl font-semibold">{s.t}</div>
                  <div className="text-base text-[hsl(var(--slide-muted))]">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-4">Anti-abuse guards</div>
            <ul className="space-y-3 text-base">
              {guards.map((g) => <li key={g} className="flex gap-2"><span className="text-[hsl(var(--slide-accent))]">▸</span>{g}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
