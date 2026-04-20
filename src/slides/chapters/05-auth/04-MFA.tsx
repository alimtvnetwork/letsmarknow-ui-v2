import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Smartphone, Key, Lock } from "lucide-react";

export default function AuthMFA() {
  return (
    <SlideLayout chapter="Chapter 5 · Auth & Account" pageLabel="05.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          MFA · <span className="text-[hsl(var(--slide-accent))]">TOTP today, WebAuthn next</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">Org Owners can require MFA for all members on the Team plan.</p>
        <div className="grid grid-cols-3 gap-6 flex-1">
          {[
            { icon: Smartphone, t: "Enroll", body: ["1. Settings → Security → Add MFA", "2. Scan QR (RFC 6238)", "3. Confirm 6-digit code", "4. Save 10 backup codes"] },
            { icon: Key, t: "Sign in", body: ["1. Email + password ✓", "2. Prompt: 'Enter 6-digit code'", "3. 30-sec window · ±1 step drift", "4. JWT issued"] },
            { icon: Lock, t: "Org enforce", body: ["Team plan only", "30-day grace for existing members", "New members: blocked at first sign-in", "Audit-logged change"] },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.t} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
                <Icon className="w-9 h-9 text-[hsl(var(--slide-accent))] mb-3" />
                <div className="text-2xl font-semibold mb-3">{c.t}</div>
                <ul className="space-y-2 text-base text-[hsl(var(--slide-fg))]/85">
                  {c.body.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 text-sm text-[hsl(var(--slide-muted))]">
          <strong className="text-[hsl(var(--slide-fg))]">Recovery</strong> — backup codes are one-shot · admin can issue temp bypass (audit-logged) · lost device → re-enroll after email verification.
        </div>
      </div>
    </SlideLayout>
  );
}
