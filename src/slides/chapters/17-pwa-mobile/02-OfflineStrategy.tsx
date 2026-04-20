import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { WifiOff, Database, RefreshCw, FileText } from "lucide-react";

const layers = [
  { icon: FileText, name: "App shell", strategy: "Cache-first", lifetime: "Versioned · purged on update", color: "hsl(var(--slide-accent))" },
  { icon: Database, name: "Item data", strategy: "Stale-while-revalidate", lifetime: "IndexedDB · 7 days TTL", color: "hsl(280 70% 65%)" },
  { icon: RefreshCw, name: "Mutations", strategy: "Background Sync queue", lifetime: "Until ACK or 7 days", color: "hsl(45 90% 60%)" },
  { icon: WifiOff, name: "Embeds & images", strategy: "Network-first, cache fallback", lifetime: "LRU · 50MB cap", color: "hsl(160 70% 55%)" },
];

export default function OfflineStrategy() {
  return (
    <SlideLayout chapter="Chapter 17 · PWA & Mobile" pageLabel="17.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Offline · <span className="text-[hsl(var(--slide-accent))]">read always, write soon</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Four cache layers. Reads work fully offline. Writes queue locally and sync on reconnect via Background Sync API.
        </p>
        <div className="grid grid-cols-2 gap-6 mb-8">
          {layers.map((l) => (
            <div key={l.name} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex gap-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${l.color.replace(")", " / 0.15)").replace("hsl(", "hsl(")}` }}>
                <l.icon className="w-6 h-6" style={{ color: l.color }} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{l.name}</h3>
                <p className="text-sm text-[hsl(var(--slide-accent))] mb-2">{l.strategy}</p>
                <p className="text-xs text-[hsl(var(--slide-muted))]">{l.lifetime}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-[hsl(45_90%_60%_/_0.4)] bg-[hsl(var(--slide-surface))] p-5 flex items-center gap-4">
          <WifiOff className="w-5 h-5 text-[hsl(45_90%_60%)]" />
          <span className="text-sm">You're offline · 14 changes will sync when you reconnect</span>
          <code className="ml-auto text-xs font-mono text-[hsl(var(--slide-muted))]">queue: pending_mutations</code>
        </div>
        <p className="text-sm text-[hsl(var(--slide-muted))] mt-6">
          Conflict resolution rules per Ch 13 · Same merge logic as multi-device editing · UUIDv7 idempotency keys.
        </p>
      </div>
    </SlideLayout>
  );
}
