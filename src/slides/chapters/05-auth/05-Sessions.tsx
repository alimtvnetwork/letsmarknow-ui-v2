import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Cookie, Key, Smartphone, Monitor, Tablet, Shield, Zap, Chrome } from "lucide-react";

const devices = [
  { icon: Monitor, name: "MacBook Pro", kind: "Web · v1.4.2", loc: "Kuala Lumpur, MY · 2 min ago", current: true },
  { icon: Chrome, name: "Chrome extension", kind: "Ext · v1.4.0", loc: "Kuala Lumpur, MY · just now", current: false },
  { icon: Smartphone, name: "iPhone 15", kind: "PWA · v1.4.2", loc: "Kuala Lumpur, MY · 1 hour ago", current: false },
  { icon: Tablet, name: "iPad Air", kind: "PWA · v1.3.9", loc: "Singapore, SG · 3 days ago", current: false },
];

export default function Sessions() {
  return (
    <SlideLayout chapter="Chapter 5 · Sessions" pageLabel="22">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Sessions: short JWT, rotating refresh.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            15-min access token in memory · 30-day rolling refresh cookie · per-device list.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-6">
          {/* Token shapes */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-accent)/0.15)] flex items-center justify-center">
                  <Key className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="text-xl font-bold">Access JWT</div>
              </div>
              <ul className="space-y-1.5 text-sm text-[hsl(var(--slide-muted))]">
                <li><span className="font-mono text-[hsl(var(--slide-fg))]">EdDSA</span> · 15-min TTL</li>
                <li>Claims: <span className="font-mono">sub · org · roles · tv · ent_h · mfa</span></li>
                <li>In memory (web) or <span className="font-mono">chrome.storage.local</span> (ext)</li>
                <li className="text-[hsl(var(--slide-warning))]">Never localStorage on web.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-success)/0.15)] flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-[hsl(var(--slide-success))]" />
                </div>
                <div className="text-xl font-bold">Refresh cookie</div>
              </div>
              <ul className="space-y-1.5 text-sm text-[hsl(var(--slide-muted))]">
                <li><span className="font-mono text-[hsl(var(--slide-fg))]">__Host-lmn_refresh</span></li>
                <li>HttpOnly · Secure · SameSite=Strict · Path=/</li>
                <li>Opaque 32 bytes · sha256 at rest · 30-d rolling TTL</li>
                <li className="text-[hsl(var(--slide-warning))]">Reused after rotation → theft alert + revoke.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[hsl(var(--slide-warning)/0.4)] bg-[hsl(var(--slide-warning)/0.08)] px-4 py-3 flex items-center gap-3">
              <Zap className="w-5 h-5 text-[hsl(var(--slide-warning))]" />
              <span className="text-sm">
                <span className="font-bold">"Sign out everywhere"</span> bumps <span className="font-mono">token_version</span> — every JWT dies in &lt; 5 s.
              </span>
            </div>
          </div>

          {/* Device list */}
          <div className="col-span-3 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xl font-bold">/me/security/devices</div>
              <button className="px-3 py-1.5 rounded-lg border border-[hsl(var(--slide-border))] text-sm font-semibold flex items-center gap-2">
                <Shield className="w-4 h-4" /> Revoke all others
              </button>
            </div>
            <div className="space-y-3 flex-1">
              {devices.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.name}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 ${
                      d.current
                        ? "border border-[hsl(var(--slide-accent)/0.5)] bg-[hsl(var(--slide-accent)/0.06)]"
                        : "border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))]"
                    }`}
                  >
                    <div className="w-11 h-11 rounded-lg bg-[hsl(var(--slide-fg)/0.06)] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold flex items-center gap-2">
                        {d.name}
                        {d.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[hsl(var(--slide-accent))] text-[hsl(var(--slide-bg))]">
                            this device
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-[hsl(var(--slide-muted))]">{d.kind} · {d.loc}</div>
                    </div>
                    {!d.current && (
                      <button className="px-3 py-1.5 rounded-lg border border-[hsl(var(--slide-border))] text-sm font-semibold">
                        Revoke
                      </button>
                    )}
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
