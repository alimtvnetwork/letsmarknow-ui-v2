import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ArrowRight, Mail, Link2, CheckCircle2, ShieldCheck } from "lucide-react";

const hops = [
  { icon: Mail, t: "Request", d: "POST /v1/auth/magic { email }", time: "0s" },
  { icon: Link2, t: "Email sent", d: "Single-use token in URL · 15 min TTL", time: "+2s" },
  { icon: CheckCircle2, t: "Click", d: "GET /auth/magic?token=… consumed once", time: "user" },
  { icon: ShieldCheck, t: "Session", d: "JWT issued · refresh cookie set · token revoked", time: "+0.3s" },
];

export default function AuthMagicLink() {
  return (
    <SlideLayout chapter="Chapter 5 · Auth & Account" pageLabel="05.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Magic link · <span className="text-[hsl(var(--slide-accent))]">passwordless in four hops</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-12">No password to leak. Token is short-lived, single-use, and bound to the email.</p>
        <div className="flex items-center gap-4 flex-1">
          {hops.map((h, i) => {
            const Icon = h.icon;
            return (
              <div key={h.t} className="flex items-center gap-4 flex-1">
                <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex-1 flex flex-col items-center text-center">
                  <Icon className="w-10 h-10 text-[hsl(var(--slide-accent))] mb-3" />
                  <div className="text-xl font-semibold mb-1">{h.t}</div>
                  <div className="text-sm text-[hsl(var(--slide-muted))] mb-3">{h.d}</div>
                  <div className="text-xs font-mono px-2 py-1 rounded bg-[hsl(var(--slide-surface-2))]">{h.time}</div>
                </div>
                {i < hops.length - 1 && <ArrowRight className="w-6 h-6 text-[hsl(var(--slide-muted))]" />}
              </div>
            );
          })}
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            ["TTL", "15 minutes"],
            ["Reuse", "Single-use · revoked on consume"],
            ["Binding", "Email + IP class + UA hash"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-[hsl(var(--slide-border))] p-4">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))]">{k}</div>
              <div className="text-lg font-semibold mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
