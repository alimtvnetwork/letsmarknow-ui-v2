import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Lock, Mail, Calendar } from "lucide-react";

export default function PasswordInvite() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Password & <span className="text-[hsl(var(--slide-accent))]">email invite</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Two ways to gate: a shared secret (password) or an account-bound list (invite).
        </p>

        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8">
            <Lock className="w-10 h-10 text-[hsl(45_90%_60%)] mb-5" />
            <h3 className="text-3xl font-bold mb-4">Password share</h3>
            <ul className="space-y-3 text-lg text-[hsl(var(--slide-muted))]">
              <li>• Bcrypt-hashed, 8 char minimum</li>
              <li>• Cookie-bound for 24h after entry</li>
              <li>• 5 wrong attempts → 15 min lockout per IP</li>
              <li>• Owner can rotate password without changing URL</li>
              <li>• Audit log records every successful unlock</li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-[hsl(var(--slide-muted))]" />
              <span className="text-[hsl(var(--slide-muted))]">Optional expiry: 1d / 7d / 30d / never</span>
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8">
            <Mail className="w-10 h-10 text-[hsl(280_70%_65%)] mb-5" />
            <h3 className="text-3xl font-bold mb-4">Email invite</h3>
            <ul className="space-y-3 text-lg text-[hsl(var(--slide-muted))]">
              <li>• Allowlist by email; recipient must sign in</li>
              <li>• Per-recipient role: Viewer / Commenter / Editor</li>
              <li>• Resend / revoke per email</li>
              <li>• Pending invites visible to owner</li>
              <li>• Auto-removes when recipient leaves the org</li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <span className="text-[hsl(var(--slide-muted))]">Cap: 50 invites per share (Pro: 500)</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
