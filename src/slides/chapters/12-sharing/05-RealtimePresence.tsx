import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Wifi, Eye, MousePointer2 } from "lucide-react";

const presence = [
  { name: "Sara", initials: "SR", color: "bg-violet-500", action: "viewing", target: "Reading queue" },
  { name: "Ben", initials: "BN", color: "bg-emerald-500", action: "editing", target: "Marketing" },
  { name: "Alim", initials: "AM", color: "bg-sky-500", action: "viewing", target: "Reading queue" },
  { name: "Zara", initials: "ZA", color: "bg-amber-500", action: "idle", target: "—" },
];

export default function RealtimePresence() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Real-time presence · <span className="text-[hsl(var(--slide-accent))]">cursors &amp; badges</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">WebSocket channel per Collection. Avatars float on hovered rows. Editing badge locks for 5 s after last keystroke.</p>

        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 relative overflow-hidden">
            <div className="text-xs uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-3">Reading queue · 4 viewers</div>
            <div className="space-y-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-[hsl(var(--slide-border))]">
                  <div className="w-3 h-3 rounded-sm bg-[hsl(var(--slide-muted)_/_0.5)]" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">Article title #{i + 1}</div>
                    <div className="text-xs text-[hsl(var(--slide-muted))]">domain.com</div>
                  </div>
                  {i === 1 && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      BN editing
                    </span>
                  )}
                  {i === 3 && (
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-violet-500 ring-2 ring-[hsl(var(--slide-surface))] flex items-center justify-center text-[9px] font-bold text-white">SR</div>
                      <div className="w-6 h-6 rounded-full bg-sky-500 ring-2 ring-[hsl(var(--slide-surface))] flex items-center justify-center text-[9px] font-bold text-white">AM</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* fake cursor */}
            <MousePointer2 className="absolute top-44 right-32 w-5 h-5 text-violet-400 fill-violet-400/30 rotate-12" />
            <div className="absolute top-52 right-20 px-2 py-0.5 rounded bg-violet-500 text-white text-[10px] font-semibold">Sara</div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
              <div className="flex items-center gap-2 mb-3">
                <Wifi className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                <div className="text-sm font-semibold">In this Collection now</div>
              </div>
              <div className="space-y-2">
                {presence.map((p) => (
                  <div key={p.name} className="flex items-center gap-2.5 text-xs">
                    <div className={`w-7 h-7 rounded-full ${p.color} flex items-center justify-center text-[10px] font-bold text-white`}>{p.initials}</div>
                    <div className="flex-1">
                      <div className="font-medium">{p.name}</div>
                      <div className="text-[hsl(var(--slide-muted))]">{p.action} · {p.target}</div>
                    </div>
                    <span className={`w-2 h-2 rounded-full ${p.action === "idle" ? "bg-[hsl(var(--slide-muted))]" : "bg-emerald-500"}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                <div className="text-sm font-semibold">Transport</div>
              </div>
              <ul className="text-xs text-[hsl(var(--slide-fg))]/80 space-y-1">
                <li>• WebSocket · auto-reconnect · 30 s heartbeat</li>
                <li>• Cursor throttled to 30 fps</li>
                <li>• Idle &gt; 60 s → fades to dot</li>
                <li>• Disconnect → presence purged in 10 s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
