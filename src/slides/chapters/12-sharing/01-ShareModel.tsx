import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Lock, Globe, KeyRound, Mail } from "lucide-react";

const types = [
  { icon: Lock, name: "Private", who: "Org members only", url: "in-app", brute: "n/a" },
  { icon: Globe, name: "Public", who: "Anyone with the link", url: "/t/{slug}", brute: "rate-limited per IP" },
  { icon: KeyRound, name: "Password", who: "Anyone with link + password", url: "/t/{slug}", brute: "5 tries / 15 min, then captcha" },
  { icon: Mail, name: "Invite-only", who: "Allow-listed emails", url: "/t/{slug}?token=…", brute: "magic-link, 30-min TTL" },
];

export default function ShareModel() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Share model · <span className="text-[hsl(var(--slide-accent))]">one entity, four link types</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          A Collection has at most one Share. The Share has many ShareLinks — each with its own mode, expiry, and permissions.
        </p>

        <div className="space-y-3 flex-1">
          {types.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.name} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-6 py-5 flex items-center gap-6">
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="w-32 shrink-0">
                  <div className="text-2xl font-bold">{t.name}</div>
                </div>
                <div className="flex-1 text-base text-[hsl(var(--slide-fg))]/85">{t.who}</div>
                <code className="text-sm font-mono px-3 py-1 rounded bg-[hsl(var(--slide-surface-2))] text-[hsl(var(--slide-accent))] w-48 text-center shrink-0">{t.url}</code>
                <div className="w-56 text-right text-xs text-[hsl(var(--slide-muted))]">{t.brute}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 text-sm flex items-center gap-3">
          <span className="text-[hsl(var(--slide-accent))] font-mono text-xs uppercase tracking-widest">Locked</span>
          <span className="text-[hsl(var(--slide-fg))]/85">Public &amp; Password shares are <strong>read-only</strong> in v1. Write access requires Member role on the Org.</span>
        </div>
      </div>
    </SlideLayout>
  );
}
