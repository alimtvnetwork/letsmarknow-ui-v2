import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { KeyRound, Mail, Lock, Clock, RefreshCw, ShieldCheck } from "lucide-react";

export default function PasswordReset() {
  return (
    <SlideLayout chapter="Chapter 5 · Forgot password" pageLabel="23">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Forgot password — safe by default.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            No enumeration. Single-use token. Every other session dies on success.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-6">
          {/* Flow */}
          <div className="col-span-3 flex flex-col gap-3">
            {[
              { n: "1", icon: Mail, t: "Request reset", s: "/signin/forgot · Always returns success — no 'email not found' leak." },
              { n: "2", icon: Lock, t: "Email sent (if account exists)", s: "Single-use token · sha256 at rest · 1-hour TTL · 3 requests/24h cap." },
              { n: "3", icon: KeyRound, t: "Set new password", s: "Min 10 chars · HIBP check · differs from last 5 hashes." },
              { n: "4", icon: ShieldCheck, t: "Auto sign-in & revoke", s: "All other sessions revoked · token_version bumped · confirmation email sent." },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.n}
                  className="flex items-start gap-4 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-accent)/0.15)] text-[hsl(var(--slide-accent))] font-bold flex items-center justify-center shrink-0">
                    {step.n}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" /> {step.t}
                    </div>
                    <div className="text-sm text-[hsl(var(--slide-muted))] mt-0.5">{step.s}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side rules */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold mb-3">
                Password rules (NIST-aligned)
              </div>
              <ul className="space-y-2 text-base">
                <li>✓ Min 10 chars · max 128</li>
                <li>✓ No composition rules</li>
                <li>✓ HIBP "pwned passwords" check (k-anon)</li>
                <li>✗ Reject if matches email or display name</li>
                <li>✗ Reject common patterns (<span className="font-mono text-sm">password</span>, <span className="font-mono text-sm">letmein</span>, …)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex-1">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold mb-3">
                Storage
              </div>
              <ul className="space-y-2 text-sm text-[hsl(var(--slide-muted))]">
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                  <span>argon2id · m=64MB · t=3 · p=4 · per-row salt</span>
                </li>
                <li className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                  <span>Re-hash on sign-in if params out of date</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                  <span>Reset token: 1h TTL, sha256-hashed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
