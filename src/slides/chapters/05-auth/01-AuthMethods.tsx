import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Mail, Sparkles, Github, Chrome, Apple, Building2 } from "lucide-react";

const methods = [
  { icon: Mail, name: "Email + password", note: "NIST 800-63B · zxcvbn ≥ 3", plan: "All plans" },
  { icon: Sparkles, name: "Magic link", note: "15-min single-use token", plan: "All plans" },
  { icon: Chrome, name: "Google OAuth", note: "OIDC · primary social provider", plan: "All plans" },
  { icon: Github, name: "GitHub OAuth", note: "For developer-leaning users", plan: "All plans" },
  { icon: Apple, name: "Apple Sign In", note: "Required for iOS App Store", plan: "All plans" },
  { icon: Building2, name: "SAML SSO", note: "Org-enforced · IdP-initiated", plan: "Team plan" },
];

export default function AuthMethods() {
  return (
    <SlideLayout chapter="Chapter 5 · Auth & Account" pageLabel="05.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Six ways to <span className="text-[hsl(var(--slide-accent))]">sign in</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-12 max-w-5xl">
          One Account. Multiple identity providers. Linkable post-signup.
        </p>
        <div className="grid grid-cols-3 gap-6 flex-1">
          {methods.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.name} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="text-2xl font-semibold mb-1">{m.name}</div>
                <div className="text-sm text-[hsl(var(--slide-muted))] mb-3">{m.note}</div>
                <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-accent))] font-semibold mt-auto">{m.plan}</div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
