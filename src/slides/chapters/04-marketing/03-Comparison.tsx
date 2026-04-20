import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Check, X, Minus } from "lucide-react";

type V = "yes" | "no" | "partial";
const cols = ["LMN", "Toby", "Tab Extend", "Raindrop", "Pocket"];

const rows: { feature: string; values: V[] }[] = [
  { feature: "Save full session (one click)", values: ["yes", "yes", "yes", "no", "no"] },
  { feature: "Mind-map view", values: ["yes", "no", "no", "no", "no"] },
  { feature: "Tab Extend column view", values: ["yes", "no", "yes", "no", "no"] },
  { feature: "Public + password + invite shares", values: ["yes", "partial", "no", "yes", "no"] },
  { feature: "Custom-domain shared boards", values: ["yes", "no", "no", "no", "no"] },
  { feature: "Real-time team presence", values: ["yes", "no", "no", "no", "no"] },
  { feature: "Hover-to-jump to open tab", values: ["yes", "no", "yes", "no", "no"] },
  { feature: "30-day undo on every change", values: ["yes", "no", "no", "partial", "no"] },
  { feature: "First-party only analytics (no GA/FB)", values: ["yes", "no", "no", "no", "no"] },
  { feature: "Lifetime deal available", values: ["yes", "no", "no", "no", "no"] },
  { feature: "Open import & export (incl. competitors)", values: ["yes", "partial", "partial", "yes", "partial"] },
];

function Cell({ v }: { v: V }) {
  if (v === "yes") return <div className="inline-flex w-9 h-9 rounded-full items-center justify-center bg-[hsl(var(--slide-success)/0.18)]"><Check className="w-5 h-5 text-[hsl(var(--slide-success))]" /></div>;
  if (v === "partial") return <div className="inline-flex w-9 h-9 rounded-full items-center justify-center bg-[hsl(var(--slide-warning)/0.18)]"><Minus className="w-5 h-5 text-[hsl(var(--slide-warning))]" /></div>;
  return <div className="inline-flex w-9 h-9 rounded-full items-center justify-center bg-[hsl(var(--slide-fg)/0.06)]"><X className="w-5 h-5 text-[hsl(var(--slide-muted))]" /></div>;
}

export default function Comparison() {
  return (
    <SlideLayout chapter="Chapter 4 · Comparison" pageLabel="15">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">Why switch.</h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">The features Toby and Tab Extend never shipped — and we did.</p>
        </div>
        <div className="flex-1 rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden">
          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-fg)/0.04)]">
                <th className="text-left px-6 py-4 font-semibold">Feature</th>
                {cols.map((c) => (<th key={c} className={`px-3 py-4 font-bold text-center ${c === "LMN" ? "text-[hsl(var(--slide-accent))] text-lg" : "text-[hsl(var(--slide-muted))]"}`}>{c}</th>))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} className={i % 2 ? "bg-[hsl(var(--slide-fg)/0.02)]" : ""}>
                  <td className="px-6 py-3 font-medium">{r.feature}</td>
                  {r.values.map((v, j) => (<td key={j} className={`px-3 py-3 text-center ${j === 0 ? "bg-[hsl(var(--slide-accent)/0.06)]" : ""}`}><Cell v={v} /></td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-[hsl(var(--slide-muted))]">
          Imports from Toby, Tab Extend, Raindrop, Pocket, and HTML bookmarks ship in v1 — see Chapter 16.
        </div>
      </div>
    </SlideLayout>
  );
}
