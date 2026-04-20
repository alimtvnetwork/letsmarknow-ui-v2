import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { User, Building2, CreditCard, Shield, Bell, Palette, Plug, Code2 } from "lucide-react";

const sections = [
  { icon: User, title: "Profile", items: ["Name & avatar", "Email & password", "Connected accounts", "Sessions"] },
  { icon: Building2, title: "Workspace", items: ["Name & logo", "Members & roles", "Domains", "Default visibility"] },
  { icon: CreditCard, title: "Billing", items: ["Current plan", "Seats & usage", "Invoices", "Payment method"] },
  { icon: Bell, title: "Notifications", items: ["Channels matrix", "Quiet hours", "Digest schedule", "Mute scopes"] },
  { icon: Palette, title: "Appearance", items: ["Theme", "Density", "Accent color", "Reduced motion"] },
  { icon: Shield, title: "Security", items: ["MFA", "Audit log", "Trusted devices", "Data export"] },
  { icon: Plug, title: "Integrations", items: ["Slack", "Notion", "Zapier", "Webhooks"] },
  { icon: Code2, title: "Developer", items: ["API keys", "Webhook log", "Rate limits", "Beta features"] },
];

export default function SettingsIA() {
  return (
    <SlideLayout chapter="Chapter 15 · Settings, Pricing & Plans" pageLabel="15.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Settings IA · <span className="text-[hsl(var(--slide-accent))]">eight sections, flat</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          One sidebar, no nested submenus. Personal vs workspace scopes labeled inline, never separate trees.
        </p>
        <div className="grid grid-cols-4 gap-4 flex-1">
          {sections.map((s) => (
            <div key={s.title} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
              <s.icon className="w-6 h-6 text-[hsl(var(--slide-accent))] mb-3" />
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <ul className="space-y-1 text-sm text-[hsl(var(--slide-muted))]">
                {s.items.map((it) => <li key={it}>· {it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
