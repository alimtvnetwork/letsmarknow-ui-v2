import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Globe, Lock, Mail, Users } from "lucide-react";

const modes = [
  { icon: Globe, name: "Public link", sub: "Anyone with URL", color: "hsl(var(--slide-accent))" },
  { icon: Lock, name: "Password", sub: "URL + secret", color: "hsl(45 90% 60%)" },
  { icon: Mail, name: "Email invite", sub: "Account-bound", color: "hsl(280 70% 65%)" },
  { icon: Users, name: "Workspace", sub: "Org members", color: "hsl(160 70% 55%)" },
];

export default function ShareModel() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Share model · <span className="text-[hsl(var(--slide-accent))]">four gates</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-12 max-w-5xl">
          Every shareable surface (Collection, Item, Group) picks one of four access modes. Layered, never combined.
        </p>

        <div className="grid grid-cols-4 gap-6 flex-1">
          {modes.map((m) => (
            <div key={m.name} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 flex flex-col">
              <m.icon className="w-12 h-12 mb-6" style={{ color: m.color }} />
              <h3 className="text-3xl font-bold mb-2">{m.name}</h3>
              <p className="text-lg text-[hsl(var(--slide-muted))]">{m.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))] p-6">
          <p className="text-lg text-[hsl(var(--slide-muted))]">
            <span className="text-[hsl(var(--slide-fg))] font-semibold">Locked:</span> A share has exactly one access mode at a time. Switching modes revokes the previous URL.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
