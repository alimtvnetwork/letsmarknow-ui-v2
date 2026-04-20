import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ApiBadge } from "@/slides/_components/ApiBadge";
import {
  User,
  Building2,
  FolderOpen,
  FolderTree,
  Layers,
  FileText,
  Star,
  MoreHorizontal,
  Globe,
  Lock,
  ChevronRight,
} from "lucide-react";

type Method = "GET" | "POST" | "PATCH" | "DELETE";

interface Level {
  l: string;
  name: string;
  icon: typeof User;
  blurb: string;
  apis: { method: Method; path: string; label: string }[];
  ui: React.ReactNode;
}

/* ---------- tiny UI mock helpers (all use slide tokens) ---------- */

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg))] p-3 h-full flex flex-col gap-2 overflow-hidden">
    {children}
  </div>
);

const AccountUI = () => (
  <Card>
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--slide-accent))] to-violet-500 flex items-center justify-center text-sm font-bold shrink-0">
        AL
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold truncate">Alim Latif</div>
        <div className="text-[10px] text-[hsl(var(--slide-muted))] truncate">alim@example.com</div>
      </div>
    </div>
    <div className="space-y-1 text-[11px]">
      {["Profile", "Security · MFA", "Devices · 3"].map((r) => (
        <div key={r} className="flex items-center justify-between rounded-md px-2 py-1 bg-[hsl(var(--slide-surface))]">
          <span className="truncate">{r}</span>
          <ChevronRight className="w-3 h-3 text-[hsl(var(--slide-muted))] shrink-0" />
        </div>
      ))}
    </div>
  </Card>
);

const OrgUI = () => (
  <Card>
    <div className="text-[10px] uppercase tracking-widest text-[hsl(var(--slide-muted))]">Org switcher</div>
    {[
      { n: "Personal", tag: "PE", plan: "Pro", active: true },
      { n: "Atto Property", tag: "AP", plan: "Team", active: false },
    ].map((o) => (
      <div
        key={o.n}
        className={`flex items-center gap-3 rounded-lg px-2.5 py-2 ${
          o.active
            ? "bg-[hsl(var(--slide-accent)_/_0.12)] border border-[hsl(var(--slide-accent)_/_0.4)]"
            : "bg-[hsl(var(--slide-surface))]"
        }`}
      >
        <div className="w-8 h-8 rounded-md bg-[hsl(var(--slide-fg)_/_0.08)] flex items-center justify-center text-[10px] font-bold">
          {o.tag}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold truncate">{o.n}</div>
          <div className="text-[10px] text-[hsl(var(--slide-muted))]">{o.plan} · billing root</div>
        </div>
      </div>
    ))}
    <div className="mt-1 text-[10px] text-[hsl(var(--slide-muted))]">+ New organization</div>
  </Card>
);

const SpaceUI = () => (
  <Card>
    <div className="text-[10px] uppercase tracking-widest text-[hsl(var(--slide-muted))]">Spaces · Personal</div>
    {[
      { n: "My Collections", priv: true, count: 12 },
      { n: "Evatix", priv: false, count: 8 },
      { n: "Research", priv: true, count: 24 },
    ].map((s) => (
      <div
        key={s.n}
        className="flex items-center gap-2 rounded-md px-2 py-1.5 bg-[hsl(var(--slide-surface))]"
      >
        <FolderOpen className="w-3.5 h-3.5 text-[hsl(var(--slide-accent))] shrink-0" />
        <div className="flex-1 min-w-0 text-[11px] font-medium truncate">{s.n}</div>
        {s.priv ? (
          <Lock className="w-3 h-3 text-[hsl(var(--slide-muted))]" />
        ) : (
          <Globe className="w-3 h-3 text-[hsl(var(--slide-muted))]" />
        )}
        <div className="text-[10px] text-[hsl(var(--slide-muted))] tabular-nums">{s.count}</div>
      </div>
    ))}
  </Card>
);

const CollectionUI = () => (
  <Card>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 min-w-0">
        <FolderTree className="w-4 h-4 text-[hsl(var(--slide-accent))] shrink-0" />
        <div className="text-sm font-semibold truncate">Marketing</div>
      </div>
      <Star className="w-3.5 h-3.5 text-[hsl(var(--slide-warning))] fill-[hsl(var(--slide-warning))] shrink-0" />
    </div>
    <div className="text-[10px] text-[hsl(var(--slide-muted))]">14 items · 2 groups · shared</div>
    <div className="grid grid-cols-2 gap-1.5">
      {["7 Habits", "Book Reviews", "Campaign", "Analytics"].map((t) => (
        <div
          key={t}
          className="rounded-md bg-[hsl(var(--slide-surface))] px-2 py-1 text-[10px] truncate border border-[hsl(var(--slide-border))]"
        >
          {t}
        </div>
      ))}
    </div>
  </Card>
);

const GroupUI = () => (
  <Card>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-sm">🐤</span>
        <div className="text-sm font-semibold truncate">Quick Tools</div>
      </div>
      <span className="text-[10px] text-[hsl(var(--slide-muted))] shrink-0">in "React"</span>
    </div>
    <div className="space-y-1">
      {[
        { t: "ChatGPT", d: "chatgpt.com" },
        { t: "Drive", d: "drive.google.com" },
        { t: "Figma", d: "figma.com" },
      ].map((i) => (
        <div
          key={i.t}
          className="flex items-center gap-2 rounded-md bg-[hsl(var(--slide-surface))] px-2 py-1"
        >
          <div className="w-3.5 h-3.5 rounded bg-[hsl(var(--slide-accent)_/_0.25)] shrink-0" />
          <div className="text-[11px] font-medium truncate flex-1">{i.t}</div>
          <div className="text-[10px] text-[hsl(var(--slide-muted))] truncate">{i.d}</div>
        </div>
      ))}
    </div>
  </Card>
);

const ItemUI = () => (
  <Card>
    <div className="flex items-start gap-2">
      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-xs font-bold shrink-0">
        C
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold truncate">ChatGPT</div>
        <div className="text-[10px] text-[hsl(var(--slide-muted))] truncate">chatgpt.com</div>
      </div>
      <MoreHorizontal className="w-4 h-4 text-[hsl(var(--slide-muted))] shrink-0" />
    </div>
    <div className="text-[10px] text-[hsl(var(--slide-fg)_/_0.8)] line-clamp-2">
      Daily driver for drafting + research.
    </div>
    <div className="flex flex-wrap gap-1">
      {["#ai", "#daily", "#tools"].map((t) => (
        <span
          key={t}
          className="text-[10px] px-1.5 py-0.5 rounded bg-[hsl(var(--slide-accent)_/_0.15)] text-[hsl(var(--slide-accent))]"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="flex items-center justify-between text-[10px] text-[hsl(var(--slide-muted))] pt-1 border-t border-[hsl(var(--slide-border))] mt-auto">
      <span>Opened 42×</span>
      <span>★ starred</span>
    </div>
  </Card>
);

const levels: Level[] = [
  {
    l: "L0",
    name: "Account",
    icon: User,
    blurb: "One per human. The login identity that owns Orgs.",
    apis: [
      { method: "POST", path: "/v1/auth/signup", label: "create" },
      { method: "GET", path: "/v1/me", label: "read profile" },
      { method: "DELETE", path: "/v1/me", label: "delete (GDPR)" },
    ],
    ui: <AccountUI />,
  },
  {
    l: "L1",
    name: "Organization",
    icon: Building2,
    blurb: "Billing root. Members, plan, seats, audit log live here.",
    apis: [
      { method: "POST", path: "/v1/organizations", label: "create" },
      { method: "GET", path: "/v1/organizations", label: "list mine" },
      { method: "POST", path: "/v1/organizations/:id/switch", label: "select" },
    ],
    ui: <OrgUI />,
  },
  {
    l: "L2",
    name: "Space",
    icon: FolderOpen,
    blurb: "Top-level container per team or topic. Private or shared.",
    apis: [
      { method: "POST", path: "/v1/spaces", label: "create" },
      { method: "GET", path: "/v1/spaces?org_id=…", label: "list" },
      { method: "POST", path: "/v1/spaces/:id/members", label: "invite" },
    ],
    ui: <SpaceUI />,
  },
  {
    l: "L3",
    name: "Collection",
    icon: FolderTree,
    blurb: "A board of related items. The thing you actually share.",
    apis: [
      { method: "POST", path: "/v1/collections", label: "create" },
      { method: "GET", path: "/v1/collections/:id", label: "open" },
      { method: "POST", path: "/v1/collections/:id/move", label: "move" },
    ],
    ui: <CollectionUI />,
  },
  {
    l: "L4a",
    name: "Group",
    icon: Layers,
    blurb: "Optional sub-folder inside a Collection. Never nests.",
    apis: [
      { method: "POST", path: "/v1/groups", label: "create" },
      { method: "GET", path: "/v1/groups?collection_id=…", label: "list" },
      { method: "POST", path: "/v1/groups/:id/open-all", label: "open all" },
    ],
    ui: <GroupUI />,
  },
  {
    l: "L4b",
    name: "Item",
    icon: FileText,
    blurb: "The leaf. A tab, link, note, or file.",
    apis: [
      { method: "POST", path: "/v1/items", label: "create" },
      { method: "POST", path: "/v1/items/:id/opens", label: "click / open" },
      { method: "PATCH", path: "/v1/items/:id", label: "edit" },
    ],
    ui: <ItemUI />,
  },
];

export default function HierarchyLevelsUiAndApi() {
  return (
    <SlideLayout chapter="Chapter 9 · Browsing Hierarchy" pageLabel="09.07">
      <div className="h-full flex flex-col pt-4">
        <h1 className="text-4xl font-bold tracking-tight mb-1">
          Each level: <span className="text-[hsl(var(--slide-accent))]">UI + API</span>
        </h1>
        <p className="text-base text-[hsl(var(--slide-muted))] mb-4 max-w-5xl">
          What the user sees at every tier of the tree, and the exact endpoint that fires when they create or open it.
        </p>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 flex-1 min-h-0">
          {levels.map((lv) => {
            const Icon = lv.icon;
            return (
              <div
                key={lv.l}
                className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-3 flex flex-col gap-2 min-h-0 overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="w-9 h-9 rounded-lg bg-[hsl(var(--slide-accent)_/_0.15)] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-[10px] text-[hsl(var(--slide-accent))]">{lv.l}</span>
                      <span className="text-base font-bold truncate">{lv.name}</span>
                    </div>
                    <div className="text-[10px] text-[hsl(var(--slide-muted))] line-clamp-1">{lv.blurb}</div>
                  </div>
                </div>

                {/* UI mock */}
                <div className="flex-1 min-h-0 overflow-hidden">{lv.ui}</div>

                {/* API list */}
                <div className="space-y-0.5 shrink-0">
                  {lv.apis.map((a) => (
                    <div key={a.path + a.method} className="flex items-center gap-2">
                      <ApiBadge method={a.method} path={a.path} className="text-[10px] py-0.5" />
                      <span className="text-[10px] text-[hsl(var(--slide-muted))] truncate">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
