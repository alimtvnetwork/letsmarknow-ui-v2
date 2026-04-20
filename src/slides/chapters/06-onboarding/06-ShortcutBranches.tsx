import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Mail, Chrome, PartyPopper, ArrowRight, Hand } from "lucide-react";

export default function ShortcutBranches() {
  return (
    <SlideLayout chapter="Chapter 6 · Branches 2 & 3" pageLabel="30">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Shortcut branches — invite & install.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            Some users land warm. We compress the 4-step flow to a single coachmark.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-7">
          {/* Branch 2 — Invite acceptance */}
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-7 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-success)/0.15)] flex items-center justify-center">
                <Mail className="w-6 h-6 text-[hsl(var(--slide-success))]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-bold">Branch 2</div>
                <div className="text-2xl font-bold">Accepted invite</div>
              </div>
            </div>

            <div className="space-y-3 flex-1">
              {[
                { n: "1", t: "Open /invite/:token from email", s: "Single-use link · 14-day TTL · pre-fills the email field." },
                { n: "2", t: "Sign in or sign up", s: "If new account, signup form is pre-filled and email is locked." },
                { n: "3", t: "POST /v1/members/invites/accept", s: "Server resolves invite, creates the Member row." },
                { n: "4", t: "Land at /dashboard?org=<slug>", s: "Skip the welcome flow entirely — they're already a Member." },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[hsl(var(--slide-success)/0.15)] text-[hsl(var(--slide-success))] font-bold flex items-center justify-center shrink-0 text-sm">
                    {s.n}
                  </div>
                  <div>
                    <div className="font-bold">{s.t}</div>
                    <div className="text-sm text-[hsl(var(--slide-muted))]">{s.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-[hsl(var(--slide-success)/0.4)] bg-[hsl(var(--slide-success)/0.08)] px-4 py-3 flex items-start gap-3">
              <Hand className="w-5 h-5 text-[hsl(var(--slide-success))] mt-0.5" />
              <div className="text-sm">
                <span className="font-bold">One-step coachmark:</span> "You're now a member of <span className="font-bold">Atto Property</span>. Try saving a tab."
              </div>
            </div>
          </div>

          {/* Branch 3 — Post-extension install */}
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-7 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--slide-warning)/0.15)] flex items-center justify-center">
                <Chrome className="w-6 h-6 text-[hsl(var(--slide-warning))]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-bold">Branch 3</div>
                <div className="text-2xl font-bold">Post-extension install</div>
              </div>
            </div>

            <div className="space-y-3 flex-1">
              {[
                { n: "1", t: "Browser auto-opens letsmarknow.com/welcome", s: "chrome.runtime.onInstalled · marketing-domain landing." },
                { n: "2", t: "3 calls-to-action on the page", s: "Pin the icon · use Alt+S · sign in / create account." },
                { n: "3", t: "Sign-in deep-links to /onboarding-ext", s: "Skips the 4-step welcome — they already have the extension." },
                { n: "4", t: "Single step: 'Try saving a tab'", s: "Confetti when first save event arrives via WebSocket." },
                { n: "5", t: "Auto-redirect to /dashboard", s: "On first save, or after 60 s — whichever comes first." },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[hsl(var(--slide-warning)/0.15)] text-[hsl(var(--slide-warning))] font-bold flex items-center justify-center shrink-0 text-sm">
                    {s.n}
                  </div>
                  <div>
                    <div className="font-bold">{s.t}</div>
                    <div className="text-sm text-[hsl(var(--slide-muted))]">{s.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-[hsl(var(--slide-warning)/0.4)] bg-[hsl(var(--slide-warning)/0.08)] px-4 py-3 flex items-start gap-3">
              <PartyPopper className="w-5 h-5 text-[hsl(var(--slide-warning))] mt-0.5" />
              <div className="text-sm">
                <span className="font-bold">Re-onboarding:</span> if user uninstalls and reinstalls, /welcome
                re-runs but /onboarding never does — it's one-shot per Account.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm text-[hsl(var(--slide-muted))]">
          <ArrowRight className="w-4 h-4" />
          A "Restart tour" link lives in /me/profile for users who want to see the welcome flow again.
        </div>
      </div>
    </SlideLayout>
  );
}
