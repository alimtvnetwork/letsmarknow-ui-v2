import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Monitor, Smartphone, Tablet, X } from "lucide-react";

const devices = [
  { icon: Monitor, name: "MacBook Pro · Chrome 122", loc: "Kuala Lumpur · MY", last: "Active now", current: true },
  { icon: Smartphone, name: "iPhone 15 · Safari", loc: "Kuala Lumpur · MY", last: "2 hours ago" },
  { icon: Tablet, name: "iPad Air · Safari", loc: "Singapore · SG", last: "3 days ago" },
  { icon: Monitor, name: "Windows · Edge 121", loc: "Penang · MY", last: "9 days ago" },
];

export default function AuthSessions() {
  return (
    <SlideLayout chapter="Chapter 5 · Auth & Account" pageLabel="05.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Sessions & <span className="text-[hsl(var(--slide-accent))]">devices</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10">JWT (15 min) + refresh cookie (30 d, rotating). Revoke any device any time.</p>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div>
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">Token model</div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 space-y-4">
              {[
                ["Access JWT", "15 min · in memory · sent as Bearer"],
                ["Refresh cookie", "30 d · httpOnly · Secure · SameSite=Lax · rotates on each refresh"],
                ["Reuse detection", "Old refresh used → revoke entire family · force sign-in"],
                ["Sign out everywhere", "Bumps token_version → all JWTs invalid"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-base font-semibold">{k}</div>
                  <div className="text-sm text-[hsl(var(--slide-muted))]">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">/me/security · devices</div>
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] divide-y divide-[hsl(var(--slide-border))]">
              {devices.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.name} className="px-5 py-4 flex items-center gap-4">
                    <Icon className="w-6 h-6 text-[hsl(var(--slide-accent))] shrink-0" />
                    <div className="flex-1">
                      <div className="text-base font-semibold flex items-center gap-2">
                        {d.name}
                        {d.current && <span className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--slide-accent)_/_0.2)] text-[hsl(var(--slide-accent))]">this device</span>}
                      </div>
                      <div className="text-sm text-[hsl(var(--slide-muted))]">{d.loc} · {d.last}</div>
                    </div>
                    {!d.current && <button className="p-1.5 rounded-md hover:bg-[hsl(var(--slide-surface-2))]"><X className="w-4 h-4 text-[hsl(var(--slide-muted))]" /></button>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
