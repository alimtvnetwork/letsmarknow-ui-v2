import { SlideLayout } from "@/slides/_layout/SlideLayout";

const groups = [
  {
    title: "Browsing",
    color: "from-sky-500/20",
    routes: [
      ["/dashboard", "active Org · default Space"],
      ["/s/:space_slug", "Space overview (column mode)"],
      ["/c/:collection_slug", "Single Collection"],
      ["/c/:slug/g/:group_slug", "Focused on a Group"],
      ["/i/:item_id", "Item detail modal"],
      ["/search?q=…", "Search results"],
    ],
  },
  {
    title: "Workspace",
    color: "from-violet-500/20",
    routes: [
      ["/trash", "30-day soft delete"],
      ["/activity", "History event stream"],
    ],
  },
  {
    title: "Account · /me/*",
    color: "from-emerald-500/20",
    routes: [
      ["/me/profile", "name, avatar, locale"],
      ["/me/security", "password, MFA, sessions"],
      ["/me/notifications", "email + push prefs"],
      ["/me/connected", "OAuth providers"],
      ["/me/danger", "delete account"],
    ],
  },
  {
    title: "Org · /org/:id/*",
    color: "from-amber-500/20",
    routes: [
      ["/settings", "profile · theme · ownership"],
      ["/members", "invite, roles"],
      ["/billing", "plans, seats, invoices"],
      ["/import · /export", "bulk data flows"],
      ["/shares", "all shares this Org"],
      ["/trash · /activity", "scoped views"],
    ],
  },
  {
    title: "Auth (public)",
    color: "from-rose-500/20",
    routes: [
      ["/login · /signup", "with ?next, ?invite_token"],
      ["/auth/callback/:provider", "OAuth handler"],
      ["/auth/magic · /auth/reset", "token consumers"],
      ["/invite/:token", "accept + redirect"],
    ],
  },
  {
    title: "First-run · misc",
    color: "from-cyan-500/20",
    routes: [
      ["/onboarding", "first-run wizard"],
      ["/org/new", "create Org wizard"],
      ["/changelog · /help", "→ apex domain"],
      ["*", "branded 404"],
    ],
  },
];

export default function WebRoutesMap() {
  return (
    <SlideLayout chapter="Chapter 8 · Web App Shell" pageLabel="08.02">
      <div className="h-full flex flex-col pt-8">
        <h1 className="text-5xl font-bold tracking-tight mb-2">
          Routes map · <span className="text-[hsl(var(--slide-accent))]">type-safe with TanStack Router</span>
        </h1>
        <p className="text-lg text-[hsl(var(--slide-muted))] mb-6 max-w-5xl">
          Active Org is <strong>not</strong> in URLs by default — server picks last-used. Pin with <code className="font-mono">?org=slug</code>.
        </p>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 flex-1 min-h-0">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 flex flex-col min-h-0 overflow-hidden"
            >
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-accent))] font-semibold mb-2">
                {g.title}
              </div>
              <div className="space-y-1 flex-1">
                {g.routes.map(([p, d]) => (
                  <div key={p}>
                    <code className="font-mono text-sm text-[hsl(var(--slide-fg))]">{p}</code>
                    <div className="text-xs text-[hsl(var(--slide-muted))] pl-2 leading-tight">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
