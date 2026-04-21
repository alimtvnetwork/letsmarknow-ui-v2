import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { StepTrace, StepTraceData } from "@/slides/_components/StepTrace";

const screens = [
  { n: 1, t: "/signup",        d: "Email + password (or Google/Apple)" },
  { n: 2, t: "/verify-email",  d: "6-digit code · 10 min · 5 tries" },
  { n: 3, t: "/onboarding",    d: "Pick starting Space · branches" },
  { n: 4, t: "/app",           d: "Dashboard · seeded sample Collection" },
];

const trace: StepTraceData = {
  click:  "Visitor on marketing site clicks the 'Create account' CTA in the navbar. Routes to /signup. Submits email + password.",
  ui:     "Submit button shows spinner. On success → fade-out signup card, slide-in /verify-email card with 6 boxes. After code entered → /onboarding wizard appears with Space picker.",
  api: [
    { method: "POST", path: "/v1/auth/signup" },
    { method: "POST", path: "/v1/auth/verify-email" },
    { method: "POST", path: "/v1/organizations" },
    { method: "POST", path: "/v1/auth/session" },
  ],
  db:     "INSERT auth.users (email, hashed_password). On verify: INSERT public.profiles + INSERT organizations (kind='personal', name=\"<Name>'s workspace\") + INSERT user_roles (org_id, role='owner').",
  event:  "Three events: account.created · org.created · membership.created. All written in a single transaction so onboarding can't see an org without an owner.",
  notify: {
    toast:    "🎉 Welcome to Lets Mark Now",
    channel:  "user:{id}",
    audience: "Only the new user (their other devices). No org members yet — nothing else to broadcast. Welcome email queued via /v1/notifications/email.",
  },
};

export default function CreateAccountTrace() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.09">
      <div className="h-full flex flex-col pt-4">
        <h1 className="text-4xl font-bold tracking-tight mb-1">
          Click <span className="text-[hsl(var(--slide-accent))]">Create account</span> · what happens next
        </h1>
        <p className="text-base text-[hsl(var(--slide-muted))] mb-4 max-w-5xl">
          Four screens, three DB rows, one transaction. From CTA click to a usable dashboard in under 30 seconds.
        </p>

        {/* Screen flow */}
        <div className="grid grid-cols-4 gap-2.5 mb-4">
          {screens.map((s, i) => (
            <div key={s.n} className="relative rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-accent-fg))] flex items-center justify-center text-sm font-bold shrink-0">
                {s.n}
              </div>
              <div className="min-w-0 flex-1">
                <code className="text-xs font-mono text-[hsl(var(--slide-accent))] truncate block">{s.t}</code>
                <div className="text-[10px] text-[hsl(var(--slide-muted))] truncate">{s.d}</div>
              </div>
              {i < screens.length - 1 && (
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-[hsl(var(--slide-muted))] text-base z-10">›</div>
              )}
            </div>
          ))}
        </div>

        <StepTrace data={trace} className="flex-1 min-h-0" />
      </div>
    </SlideLayout>
  );
}
