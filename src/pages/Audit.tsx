import { useEffect, useState } from "react";
import { slides } from "@/slides/manifest";

export default function Audit() {
  const [results, setResults] = useState<{ id: string; index: number; overflowY: number }[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (activeIdx >= slides.length) { setDone(true); return; }
    const t = setTimeout(() => {
      const el = document.querySelector(".audit-stage .slide-content") as HTMLElement | null;
      if (el) {
        setResults((r) => [...r, { id: slides[activeIdx].id, index: activeIdx + 1, overflowY: el.scrollHeight - 1080 }]);
      }
      setActiveIdx((i) => i + 1);
    }, 60);
    return () => clearTimeout(t);
  }, [activeIdx]);

  const Comp = !done && activeIdx < slides.length ? slides[activeIdx].component : null;
  const problems = results.filter((r) => r.overflowY > 2);

  return (
    <div style={{ padding: 20, fontFamily: "system-ui", background: "#111", color: "#eee", minHeight: "100vh" }}>
      <h1>Audit · {results.length}/{slides.length} {done ? "✓" : "…"}</h1>
      <p style={{ color: "#f87171" }}>Problems ({problems.length}):</p>
      <ul style={{ fontFamily: "monospace" }}>
        {problems.map((p) => <li key={p.id}>#{p.index} {p.id} +{p.overflowY}px</li>)}
      </ul>
      <div className="audit-stage" style={{ position: "fixed", left: -99999, top: 0, width: 1920, height: 1080 }}>
        {Comp && <Comp />}
      </div>
    </div>
  );
}
