import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { KeyRound, Shield, Mail } from "lucide-react";

export default function PasswordInvite() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Gated shares · <span className="text-[hsl(var(--slide-accent))]">password &amp; invite-only</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">Two ways to keep a link semi-private. Both rate-limited at the edge.</p>

        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <KeyRound className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <div className="text-xl font-semibold">Password share</div>
            </div>
            <div className="rounded-lg border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))] p-5 mb-4">
              <div className="text-xs text-[hsl(var(--slide-muted))] mb-2">Protected collection</div>
              <div className="text-lg font-bold mb-3">Enter password</div>
              <input className="w-full px-3 py-2 rounded-lg bg-[hsl(var(--slide-surface-2))] border border-[hsl(var(--slide-border))] text-sm" placeholder="••••••••" readOnly />
              <button className="mt-3 w-full px-3 py-2 rounded-lg bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-bg))] text-sm font-semibold">Unlock</button>
            </div>
            <ul className="text-sm text-[hsl(var(--slide-fg))]/85 space-y-1.5 mt-auto">
              <li>• Owner sets password · stored as Argon2id hash</li>
              <li>• 5 attempts / 15 min per IP · then captcha</li>
              <li>• Successful unlock → 24 h JWT cookie</li>
              <li>• Owner can rotate without breaking slug</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <div className="text-xl font-semibold">Invite-only share</div>
            </div>
            <div className="rounded-lg border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))] p-5 mb-4">
              <div className="text-xs text-[hsl(var(--slide-muted))] mb-2">Allowed emails</div>
              <div className="space-y-1.5 text-sm font-mono">
                {["sara@evatix.com", "ben@partner.io", "ops@atto.my"].map((e) => (
                  <div key={e} className="flex items-center gap-2 px-3 py-1.5 rounded bg-[hsl(var(--slide-surface-2))]">
                    <Mail className="w-3 h-3 text-[hsl(var(--slide-accent))]" />
                    {e}
                  </div>
                ))}
              </div>
            </div>
            <ul className="text-sm text-[hsl(var(--slide-fg))]/85 space-y-1.5 mt-auto">
              <li>• Visitor enters email → magic-link sent</li>
              <li>• Magic-link TTL 30 min · single-use</li>
              <li>• Email not on list → polite "no access" page (no leak)</li>
              <li>• Each unlock creates an audit-log entry</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 text-sm flex items-center gap-3">
          <Shield className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
          <span className="text-[hsl(var(--slide-fg))]/85">Both modes inherit the Public viewer chrome. Read-only. Notes hidden unless explicitly opted-in per share.</span>
        </div>
      </div>
    </SlideLayout>
  );
}
