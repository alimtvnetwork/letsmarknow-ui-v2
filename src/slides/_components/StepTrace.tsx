import { ReactNode } from "react";
import {
  MousePointerClick,
  Eye,
  Plug,
  Database,
  History,
  Bell,
} from "lucide-react";
import { ApiBadge } from "./ApiBadge";
import { cn } from "@/lib/utils";

type Method = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

export interface StepTraceData {
  /** 1. Click path — exactly how user reaches it. e.g. "Popup → Save tab" or "⌘K → 'Share'" */
  click: string;
  /** 2. UI shown after click — what appears on screen */
  ui: string;
  /** 3. API endpoint(s) hit */
  api: { method: Method; path: string }[];
  /** 4. Where it persists */
  db: string;
  /** 5. history_events row written */
  event: string;
  /** 6. Toast text + broadcast channel + who sees the realtime push */
  notify: {
    toast: string;
    channel: string;
    audience: string;
  };
}

const STEPS = [
  { key: "click",  label: "1. Click path",        icon: MousePointerClick, tone: "accent" as const },
  { key: "ui",     label: "2. UI shown",          icon: Eye,               tone: "accent" as const },
  { key: "api",    label: "3. API call",          icon: Plug,              tone: "success" as const },
  { key: "db",     label: "4. DB write",          icon: Database,          tone: "warning" as const },
  { key: "event",  label: "5. history_events",    icon: History,           tone: "warning" as const },
  { key: "notify", label: "6. Notify + realtime", icon: Bell,              tone: "danger" as const },
];

const toneVar: Record<string, string> = {
  accent:  "--slide-accent",
  success: "--slide-success",
  warning: "--slide-warning",
  danger:  "--slide-danger",
};

/**
 * StepTrace — strict 6-step trace for any user action.
 * Click path → UI shown → API → DB write → history_events → notification/broadcast.
 */
export function StepTrace({
  data,
  className,
}: {
  data: StepTraceData;
  className?: string;
}) {
  const renderBody = (key: string): ReactNode => {
    if (key === "api") {
      return (
        <div className="flex flex-wrap gap-1.5">
          {data.api.map((a) => (
            <ApiBadge key={a.method + a.path} method={a.method} path={a.path} className="text-xs py-0.5" />
          ))}
        </div>
      );
    }
    if (key === "notify") {
      return (
        <div className="space-y-1.5">
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[hsl(var(--slide-muted))] shrink-0">toast</span>
            <span className="text-sm">{data.notify.toast}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[hsl(var(--slide-muted))] shrink-0">channel</span>
            <code className="text-xs font-mono text-[hsl(var(--slide-accent))]">{data.notify.channel}</code>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[hsl(var(--slide-muted))] shrink-0">to</span>
            <span className="text-sm text-[hsl(var(--slide-fg))]/85">{data.notify.audience}</span>
          </div>
        </div>
      );
    }
    const text = (data as any)[key] as string;
    return <div className="text-sm text-[hsl(var(--slide-fg))]/90 leading-snug">{text}</div>;
  };

  return (
    <div className={cn("grid grid-cols-3 gap-3", className)}>
      {STEPS.map((s) => {
        const Icon = s.icon;
        const v = toneVar[s.tone];
        return (
          <div
            key={s.key}
            className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4 flex flex-col gap-2 min-h-0"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                style={{ backgroundColor: `hsl(var(${v}) / 0.15)` }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: `hsl(var(${v}))` }} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: `hsl(var(${v}))` }}>
                {s.label}
              </div>
            </div>
            {renderBody(s.key)}
          </div>
        );
      })}
    </div>
  );
}
