import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { FileJson, FileCode, FileText, Table } from "lucide-react";

const formats = [
  { icon: FileJson, name: "JSON", ext: ".json", scope: "Lossless · full schema", use: "Migration, backup, API ingest", color: "hsl(var(--slide-accent))" },
  { icon: FileCode, name: "HTML", ext: ".html", scope: "NETSCAPE bookmark format", use: "Re-import to any browser", color: "hsl(45 90% 60%)" },
  { icon: FileText, name: "Markdown", ext: ".md", scope: "Human-readable · per collection", use: "Notion, Obsidian, Bear", color: "hsl(280 70% 65%)" },
  { icon: Table, name: "CSV", ext: ".csv", scope: "Flat · URL · title · tags · notes", use: "Spreadsheets, BI tools", color: "hsl(160 70% 55%)" },
];

export default function ExportPipeline() {
  return (
    <SlideLayout chapter="Chapter 16 · Import / Export" pageLabel="16.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Export · <span className="text-[hsl(var(--slide-accent))]">four formats, one click</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Export by scope (Item / Collection / Workspace / Account). Pre-signed download URL valid for 24h. Email notification on completion.
        </p>
        <div className="grid grid-cols-4 gap-5 mb-8">
          {formats.map((f) => (
            <div key={f.name} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
              <f.icon className="w-9 h-9 mb-4" style={{ color: f.color }} />
              <h3 className="text-2xl font-bold">{f.name}</h3>
              <code className="text-xs text-[hsl(var(--slide-muted))]">{f.ext}</code>
              <p className="text-sm text-[hsl(var(--slide-muted))] mt-4 mb-2">{f.scope}</p>
              <p className="text-xs text-[hsl(var(--slide-muted))]">→ {f.use}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 flex-1">
          <div className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--slide-muted))] mb-5">Pipeline</div>
          <div className="grid grid-cols-5 gap-3 items-center text-sm">
            {["Request", "Queue (large)", "Stream rows → S3", "Sign URL", "Email + in-app"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] px-3 py-2 flex-1 text-center">{step}</div>
                {i < 4 && <span className="text-[hsl(var(--slide-muted))]">→</span>}
              </div>
            ))}
          </div>
          <p className="text-sm text-[hsl(var(--slide-muted))] mt-5">
            Small exports (&lt;5MB): synchronous. Larger: queued, processed in `exports` worker, retry policy 3× exponential.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
