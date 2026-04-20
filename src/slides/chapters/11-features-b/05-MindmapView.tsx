import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Network, ZoomIn, MousePointer2, Sparkles } from "lucide-react";

export default function MindmapView() {
  return (
    <SlideLayout chapter="Chapter 11 · Find & Visualize" pageLabel="11.05">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Mind-map view · <span className="text-[hsl(var(--slide-accent))]">Phase 3</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">
          Items orbit their Collection node. Tags become coloured edges. Zoom = density.
        </p>

        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] relative overflow-hidden">
            <svg viewBox="0 0 600 360" className="absolute inset-0 w-full h-full">
              {/* edges */}
              {[
                [300, 180, 120, 80], [300, 180, 480, 70], [300, 180, 100, 280],
                [300, 180, 500, 280], [300, 180, 300, 50], [300, 180, 300, 320],
                [300, 180, 200, 150], [300, 180, 400, 150], [300, 180, 200, 220],
                [300, 180, 400, 220],
              ].map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="hsl(var(--slide-accent))" strokeOpacity="0.25" strokeWidth="1.5" />
              ))}
              {/* leaf nodes */}
              {[
                [120, 80, "react-spring"], [480, 70, "Stripe pricing"], [100, 280, "MV3 SW"],
                [500, 280, "shadcn"], [300, 50, "Linear teardown"], [300, 320, "Notion roadmap"],
                [200, 150, "Auth RFC"], [400, 150, "Figma v2"], [200, 220, "Spec audit"], [400, 220, "Vite blog"],
              ].map(([x, y, label], i) => (
                <g key={i}>
                  <circle cx={x as number} cy={y as number} r="18" fill="hsl(var(--slide-bg))"
                    stroke="hsl(var(--slide-accent))" strokeOpacity="0.6" strokeWidth="1.5" />
                  <text x={x as number} y={(y as number) + 35} textAnchor="middle"
                    fill="hsl(var(--slide-fg))" fontSize="9" opacity="0.8">{label as string}</text>
                </g>
              ))}
              {/* center node */}
              <circle cx="300" cy="180" r="44" fill="hsl(var(--slide-accent))" />
              <text x="300" y="178" textAnchor="middle" fill="hsl(var(--slide-bg))"
                fontSize="11" fontWeight="700">React</text>
              <text x="300" y="192" textAnchor="middle" fill="hsl(var(--slide-bg))"
                fontSize="9" opacity="0.8">42 items</text>
            </svg>
          </div>

          <div className="space-y-3">
            {[
              { i: Network, t: "Topology", d: "Force-directed · stable layout cached server-side per Collection" },
              { i: ZoomIn, t: "Semantic zoom", d: "Far → cluster heatmap · near → titles · closest → previews" },
              { i: MousePointer2, t: "Drag to pin", d: "User-pinned positions persist (override layout)" },
              { i: Sparkles, t: "AI clustering", d: "Phase 3 · suggests groupings via embeddings (opt-in)" },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-[hsl(var(--slide-accent))]" />
                  <div className="text-sm font-semibold">{t}</div>
                </div>
                <div className="text-xs text-[hsl(var(--slide-fg))]/75">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
