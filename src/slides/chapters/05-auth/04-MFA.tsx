import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Smartphone, KeyRound, Shield, RefreshCw, AlertTriangle } from "lucide-react";

export default function MFA() {
  return (
    <SlideLayout chapter="Chapter 5 · MFA" pageLabel="21">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">MFA — TOTP today, WebAuthn next.</h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            Required for Team Owners. Optional but prompted for Pro. WebAuthn ships post-v1.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-accent)/0.15)] flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-[hsl(var(--slide-accent))]" />
            </div>
            <div className="text-2xl font-bold mb-3">Enrolment</div>
            <ol className="space-y-2 text-base list-decimal list-inside text-[hsl(var(--slide-muted))]">
              <li>Show QR code + manual base32 secret</li>
              <li>Scan with authenticator app</li>
              <li><span className="text-[hsl(var(--slide-fg))]">Two consecutive valid codes</span> required to confirm</li>
              <li>Generate <span className="text-[hsl(var(--slide-fg))]">10 recovery codes</span></li>
              <li>User must download or copy them</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-success)/0.15)] flex items-center justify-center mb-4">
              <KeyRound className="w-6 h-6 text-[hsl(var(--slide-success))]" />
            </div>
            <div className="text-2xl font-bold mb-3">Sign-in flow</div>
            <ol className="space-y-2 text-base list-decimal list-inside text-[hsl(var(--slide-muted))]">
              <li>Password verified (argon2id)</li>
              <li>Server returns <code className="font-mono text-xs">mfa_required:true</code> + 5-min ephemeral token</li>
              <li>Client prompts for 6-digit TOTP</li>
              <li>±1 window tolerance for clock drift</li>
              <li>5 fails → 15-min lockout on the ephemeral session</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-warning)/0.15)] flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[hsl(var(--slide-warning))]" />
            </div>
            <div className="text-2xl font-bold mb-3">Recovery & breach</div>
            <ul className="space-y-2 text-base text-[hsl(var(--slide-muted))]">
              <li>10 single-use codes · sha256-hashed at rest</li>
              <li>"Trust this device" cookie: 30 days, fingerprint-bound</li>
              <li>Lost both? → manual ID verification, 24-72h SLA</li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[hsl(var(--slide-warning))]" />
                <span>Daily HIBP scan → forced reset on match</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-5 py-3 flex items-center gap-3 text-base">
          <RefreshCw className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
          <span>
            <span className="font-bold">Org enforcement:</span> Admins can require MFA Org-wide; non-MFA Members get a 14-day grace then are blocked from sensitive ops.
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
