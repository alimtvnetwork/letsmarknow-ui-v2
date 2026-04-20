import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Eye, Clock, BarChart3 } from "lucide-react";

const events = [
  { time: "14:02", actor: "alim@evatix", action: "share.create", target: "/t/q2-reading", meta: "mode=public" },
  { time: "14:05", actor: "sara@evatix", action: "share.unlock", target: "/t/internal-rfc", meta: "mode=password" },
  { time: "14:11", actor: "—", action: "share.view", target: "/t/q2-reading", meta: "ip=hashed · ref=twitter.com" },
  { time: "14:18", actor: "ben@partner", action: "share.unlock", target: "/t/atto-roadmap", meta: "mode=invite" },
  { time: "14:30", actor: "alim@evatix", action: "share.revoke", target: "/t/old-deck", meta: "reason=manual" },
];

export default function ShareAnalyticsAudit() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.08">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Analytics &amp; audit · <span className="text-[hsl(var(--slide-accent))]">who · when · how</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">Share analytics for owners (Pro+). Audit log for compliance (Team).</p>

        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <div className="text-lg font-semibold">Share analytics · Pro+</div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { k: "Views", v: "1,284", d: "last 30 d" },
                { k: "Uniques", v: "412", d: "by hashed IP" },
                { k: "Avg time", v: "1m 47s", d: "per session" },
              ].map((s) => (
                <div key={s.k} className="rounded-lg border border-[hsl(var(--slide-border))] p-3">
                  <div className="text-xs text-[hsl(var(--slide-muted))]">{s.k}</div>
                  <div className="text-2xl font-bold text-[hsl(var(--slide-accent))]">{s.v}</div>
                  <div className="text-[10px] text-[hsl(var(--slide-muted))]">{s.d}</div>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border))] p-3 flex-1">
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-2">Top referrers</div>
              <div className="space-y-1.5 text-sm">
                {[["twitter.com", 312], ["news.ycombinator.com", 188], ["direct", 142], ["linkedin.com", 96]].map(([d, n]) => (
                  <div key={d as string} className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[hsl(var(--slide-fg))]/85 w-44 truncate">{d}</span>
                    <div className="flex-1 h-2 rounded bg-[hsl(var(--slide-surface-2))] overflow-hidden">
                      <div className="h-full bg-[hsl(var(--slide-accent))]" style={{ width: `${((n as number) / 312) * 100}%` }} />
                    </div>
                    <span className="text-xs text-[hsl(var(--slide-muted))] w-10 text-right">{n}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 text-xs text-[hsl(var(--slide-muted))]">No PII collected · IP hashed with daily-rotated salt</div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <div className="text-lg font-semibold">Audit log · Team</div>
            </div>
            <div className="rounded-lg bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border))] overflow-hidden flex-1">
              <div className="grid grid-cols-12 px-3 py-2 bg-[hsl(var(--slide-surface-2))] text-[10px] uppercase tracking-widest text-[hsl(var(--slide-muted))]">
                <div className="col-span-2">Time</div>
                <div className="col-span-3">Actor</div>
                <div className="col-span-3">Action</div>
                <div className="col-span-4">Target / meta</div>
              </div>
              {events.map((e, i) => (
                <div key={i} className="grid grid-cols-12 px-3 py-2 text-[11px] font-mono text-[hsl(var(--slide-fg))]/85 border-t border-[hsl(var(--slide-border))] items-center">
                  <div className="col-span-2 text-[hsl(var(--slide-muted))]">{e.time}</div>
                  <div className="col-span-3 truncate">{e.actor}</div>
                  <div className="col-span-3 text-[hsl(var(--slide-accent))] truncate">{e.action}</div>
                  <div className="col-span-4 truncate text-[hsl(var(--slide-muted))]">{e.target} · {e.meta}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-[hsl(var(--slide-muted))]">
              <Clock className="w-3 h-3" />
              <span>Retained 12 months · CSV export · webhook stream available</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
