import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Wand2, Mail, MousePointer2, Clock, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function MagicLink() {
  return (
    <SlideLayout chapter="Chapter 5 · Magic link" pageLabel="20">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">Magic link — passwordless, in 4 hops.</h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            32-byte CSPRNG token · sha256 at rest · 15-minute TTL · single-use.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-4 gap-5">
          {[
            { icon: Wand2, n: "01", t: "Request", s: "POST /v1/auth/magic-link/send → always 202, no enumeration.", color: "hsl(var(--slide-accent))" },
            { icon: Mail, n: "02", t: "Email", s: "CTA button + requesting IP + UA + expiry. 'Didn't request? Ignore.'", color: "hsl(var(--slide-success))" },
            { icon: MousePointer2, n: "03", t: "Click", s: "GET /v1/auth/magic/callback?t=… consumes token, sets consumed_at.", color: "hsl(var(--slide-accent-2))" },
            { icon: CheckCircle2, n: "04", t: "Sign in", s: "JWT + refresh cookie issued. 302 → ?next= or /dashboard.", color: "hsl(var(--slide-warning))" },
          ].map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.n} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
                <div className="text-xs font-bold tabular-nums text-[hsl(var(--slide-muted))] mb-3">{step.n}</div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${step.color.replace(")", " / 0.15)")}` }}>
                  <Icon className="w-7 h-7" style={{ color: step.color }} />
                </div>
                <div className="text-2xl font-bold mb-2">{step.t}</div>
                <div className="text-sm text-[hsl(var(--slide-muted))]">{step.s}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-5 py-3 flex items-center gap-3">
            <Clock className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
            <div className="text-sm"><span className="font-bold">15 min</span> token TTL · denylisted 24h after consume</div>
          </div>
          <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-5 py-3 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[hsl(var(--slide-warning))]" />
            <div className="text-sm"><span className="font-mono">1/60s</span>, <span className="font-mono">5/24h</span> per email · <span className="font-mono">10/h</span> per IP</div>
          </div>
          <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-5 py-3 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[hsl(var(--slide-success))]" />
            <div className="text-sm">No-account flow auto-creates Account + Personal Org</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
