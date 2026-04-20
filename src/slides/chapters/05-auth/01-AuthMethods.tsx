import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Mail, Wand2, Github, Apple, Chrome, Building2 } from "lucide-react";

const methods = [
  { icon: Mail, title: "Email + password", sub: "Primary path. Argon2id hash, HIBP-checked, no composition rules.", color: "hsl(var(--slide-accent))" },
  { icon: Wand2, title: "Magic link", sub: "Passwordless. 32-byte token, sha256 at rest, 15-min TTL, single-use.", color: "hsl(var(--slide-accent-2))" },
  { icon: Chrome, title: "OAuth — Google", sub: "PKCE on extension via chrome.identity. Code flow on web.", color: "hsl(var(--slide-success))" },
  { icon: Apple, title: "OAuth — Apple", sub: "Sign in with Apple. Hidden-email aliases supported.", color: "hsl(var(--slide-fg))" },
  { icon: Github, title: "OAuth — GitHub", sub: "For the developer persona. Scope limited to email + profile.", color: "hsl(var(--slide-warning))" },
  { icon: Building2, title: "SAML SSO", sub: "Team Enterprise only. JIT provisioning, role mapping from IdP groups.", color: "hsl(var(--slide-accent))" },
];

export default function AuthMethods() {
  return (
    <SlideLayout chapter="Chapter 5 · Auth methods" pageLabel="18">
      <div className="h-full flex flex-col">
        <div className="mb-8">
          <h2 className="text-6xl font-bold leading-tight">Six ways in.</h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            Same identity, six surfaces. Linked Accounts can sign in with any linked method.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 flex-1">
          {methods.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${m.color.replace(")", " / 0.15)")}` }}>
                  <Icon className="w-7 h-7" style={{ color: m.color }} />
                </div>
                <div className="text-2xl font-bold mb-2">{m.title}</div>
                <div className="text-base text-[hsl(var(--slide-muted))]">{m.sub}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-5 py-3">
            <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold">Web app</div>
            <div className="font-mono text-sm mt-1">/signin · /signup · /signin/magic</div>
          </div>
          <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-5 py-3">
            <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold">Extension</div>
            <div className="font-mono text-sm mt-1">popup → opens /signin?from=ext</div>
          </div>
          <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-5 py-3">
            <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] font-semibold">OAuth callback</div>
            <div className="font-mono text-sm mt-1">/auth/callback/:provider</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
