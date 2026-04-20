import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Fingerprint, Link2, FileText, Hash } from "lucide-react";

const stages = [
  { n: "01", icon: Link2, title: "URL canonicalization", body: "Lowercase host · strip trailing slash · drop utm_* / fbclid / ref · resolve known shorteners" },
  { n: "02", icon: Fingerprint, title: "Hash & match", body: "SHA-256 of canonical URL → lookup in user's existing items. Exact match → merge." },
  { n: "03", icon: FileText, title: "Title fuzzy match", body: "Levenshtein on title within same collection. >0.85 similarity + same domain → merge." },
  { n: "04", icon: Hash, title: "Tag union", body: "Existing tags preserved · new tags added · timestamp = oldest of the two" },
];

export default function DedupAlgorithm() {
  return (
    <SlideLayout chapter="Chapter 16 · Import / Export" pageLabel="16.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Dedup · <span className="text-[hsl(var(--slide-accent))]">four-stage pipeline</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Every imported item runs through the same matcher. Conservative: when uncertain, keep both with a "possible duplicate" badge.
        </p>
        <div className="grid grid-cols-4 gap-4 flex-1">
          {stages.map((s) => (
            <div key={s.n} className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6 flex flex-col">
              <div className="text-xs font-mono text-[hsl(var(--slide-muted))] mb-3">{s.n}</div>
              <s.icon className="w-9 h-9 text-[hsl(var(--slide-accent))] mb-4" />
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-[hsl(var(--slide-muted))] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5">
          <div className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--slide-muted))] mb-3">Preview before commit</div>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div><div className="text-3xl font-bold text-[hsl(var(--slide-accent))]">1,284</div><div className="text-[hsl(var(--slide-muted))]">Total imported</div></div>
            <div><div className="text-3xl font-bold">412</div><div className="text-[hsl(var(--slide-muted))]">Merged into existing</div></div>
            <div><div className="text-3xl font-bold text-[hsl(45_90%_60%)]">23</div><div className="text-[hsl(var(--slide-muted))]">Possible duplicates · review</div></div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
