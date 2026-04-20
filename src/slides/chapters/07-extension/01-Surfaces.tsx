import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { MousePointerClick, LayoutDashboard, PanelRight, Keyboard, Search, Menu, Bell, Settings } from "lucide-react";

const surfaces = [
  { icon: MousePointerClick, name: "Toolbar Popup", size: "380×540", trigger: "Click icon · Alt+S", spec: "04-popup" },
  { icon: LayoutDashboard, name: "New Tab Dashboard", size: "Full page", trigger: "chrome://newtab override", spec: "05-new-tab" },
  { icon: PanelRight, name: "Side Panel", size: "Persistent", trigger: "Side-panel button", spec: "shares popup UI" },
  { icon: Search, name: "Omnibox", size: "URL bar", trigger: "Type 'lmn '", spec: "06-omnibox" },
  { icon: Menu, name: "Context Menu", size: "Right-click", trigger: "Page · Link · Image · Selection", spec: "07-context-menu" },
  { icon: Keyboard, name: "Keyboard Shortcuts", size: "4 commands", trigger: "Alt+S · Alt+Shift+S · Alt+Shift+W · Alt+K", spec: "08-keyboard" },
  { icon: Bell, name: "Notifications", size: "OS toast", trigger: "Auto on save (popup closed)", spec: "02-surfaces" },
  { icon: Settings, name: "Options Page", size: "Full tab", trigger: "Gear icon · about:addons", spec: "options" },
];

export default function ExtensionSurfaces() {
  return (
    <SlideLayout chapter="Chapter 7 · Extension Surfaces" pageLabel="07.01">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-4">
          Eight surfaces, <span className="text-[hsl(var(--slide-accent))]">one capture engine</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-12 max-w-5xl">
          Chrome MV3 extension. Every surface routes to the same service worker, which calls the same API.
        </p>

        <div className="grid grid-cols-4 gap-6 flex-1">
          {surfaces.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="text-2xl font-semibold mb-1">{s.name}</div>
                <div className="text-sm text-[hsl(var(--slide-muted))] font-mono mb-3">{s.size}</div>
                <div className="text-base text-[hsl(var(--slide-fg))]/80 mt-auto">{s.trigger}</div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
