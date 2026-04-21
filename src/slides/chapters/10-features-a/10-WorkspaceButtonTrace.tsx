import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { StepTrace, StepTraceData } from "@/slides/_components/StepTrace";
import { Building2, Plus, ArrowLeftRight, Settings } from "lucide-react";

const trace: StepTraceData = {
  click:  "User clicks the Workspace chip in the top-left of the app shell (shows current Org name + avatar). Dropdown opens beneath it.",
  ui:     "Dropdown lists every Org the user belongs to with role badge + plan. Below: 'New organization' and 'Org settings'. Clicking another Org → entire app shell fades, sidebar reloads with new Org's Spaces, URL updates to /o/:slug.",
  api: [
    { method: "GET",  path: "/v1/organizations" },
    { method: "POST", path: "/v1/organizations/:id/switch" },
    { method: "GET",  path: "/v1/spaces?org_id=…" },
    { method: "POST", path: "/v1/organizations" },
  ],
  db:     "Switch: UPDATE sessions SET active_org_id=:id WHERE id=:session. Create: INSERT organizations + INSERT user_roles (role='owner') + seed default Space 'Quick saves' in one transaction.",
  event:  "Switch → org.switched (audit only, not in feed). Create → org.created + space.created + membership.created. All scoped to the new org_id so RLS filters cleanly.",
  notify: {
    toast:    "Switched to Atto Property",
    channel:  "user:{id} (switch) · org:{id} (create)",
    audience: "Switch is silent to others — only your tabs/devices update. Create broadcasts to invited members the moment their invite is accepted.",
  },
};

const actions = [
  { icon: ArrowLeftRight, name: "Switch org",     detail: "Sidebar reloads · URL → /o/:slug" },
  { icon: Plus,           name: "New org",        detail: "Modal · name + plan · seeded Space" },
  { icon: Building2,      name: "Manage members", detail: "Roles · invites · seat usage" },
  { icon: Settings,       name: "Org settings",   detail: "Billing · domain · audit log" },
];

export default function WorkspaceButtonTrace() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.10">
      <div className="h-full flex flex-col pt-4">
        <h1 className="text-4xl font-bold tracking-tight mb-1">
          Click <span className="text-[hsl(var(--slide-accent))]">Workspace</span> · what happens next
        </h1>
        <p className="text-base text-[hsl(var(--slide-muted))] mb-4 max-w-5xl">
          The Workspace chip is the entry point to your Org world. Switch, create, or manage — every path traces the same six steps.
        </p>

        <div className="grid grid-cols-4 gap-2.5 mb-4">
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.name} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[hsl(var(--slide-accent)_/_0.12)] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold truncate">{a.name}</div>
                  <div className="text-[10px] text-[hsl(var(--slide-muted))] truncate">{a.detail}</div>
                </div>
              </div>
            );
          })}
        </div>

        <StepTrace data={trace} className="flex-1 min-h-0" />
      </div>
    </SlideLayout>
  );
}
