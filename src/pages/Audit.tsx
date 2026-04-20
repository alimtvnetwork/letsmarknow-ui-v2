import { useEffect, useState } from "react";
import { slides } from "@/slides/manifest";

/**
 * Audit page: renders each slide at exactly 1920x1080 and checks if its
 * inner `.slide-content` has scrollHeight/scrollWidth larger than 1080/1920.
 * Reports overflow per slide id.
 */
export default function Audit() {
  const [results, setResults] = useState<
    { id: string; index: number; title: string; overflowY: number; overflowX: number }[]
  >([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (activeIdx >= slides.length) {
      setDone(true);
      return;
    }
    // Wait one frame after mount, then measure
    const t = setTimeout(() => {
      const el = document.querySelector(".audit-stage .slide-content") as HTMLElement | null;
      if (el) {
        const oy = el.scrollHeight - 1080;
        const ox = el.scrollWidth - 1920;
        setResults((r) => [
          ...r,
          {
            id: slides[activeIdx].id,
            index: activeIdx + 1,
            title: slides[activeIdx].title,
            overflowY: oy,
            overflowX: ox,
          },
        ]);
      }
      setActiveIdx((i) => i + 1);
    }, 60);
    return () => clearTimeout(t);
  }, [activeIdx]);

  const Comp = !done && activeIdx < slides.length ? slides[activeIdx].component : null;

  const problems = results.filter((r) => r.overflowY > 2 || r.overflowX > 2);

  return (
    <div style={{ padding: 20, fontFamily: "system-ui", background: "#111", color: "#eee", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>
        Slide overflow audit · {results.length}/{slides.length} {done ? "✓" : "…"}
      </h1>
      {!done && (
        <div style={{ marginBottom: 12, color: "#888" }}>
          Measuring slide {activeIdx + 1}: {slides[activeIdx]?.title}
        </div>
      )}
      <div style={{ marginBottom: 16 }}>
        <strong style={{ color: "#f87171" }}>Problems ({problems.length}):</strong>
        <ul style={{ marginTop: 8, fontFamily: "monospace", fontSize: 13, lineHeight: 1.6 }}>
          {problems.map((p) => (
            <li key={p.id} style={{ color: p.overflowY > 50 || p.overflowX > 50 ? "#f87171" : "#fbbf24" }}>
              #{p.index} · {p.id} · {p.title} · Y+{p.overflowY}px X+{p.overflowX}px
            </li>
          ))}
        </ul>
      </div>
      <details>
        <summary style={{ cursor: "pointer" }}>All results</summary>
        <ul style={{ fontFamily: "monospace", fontSize: 12, lineHeight: 1.5 }}>
          {results.map((r) => (
            <li key={r.id}>
              #{r.index} · {r.id} · Y{r.overflowY >= 0 ? "+" : ""}{r.overflowY} X{r.overflowX >= 0 ? "+" : ""}{r.overflowX}
            </li>
          ))}
        </ul>
      </details>

      {/* Off-screen 1920x1080 stage (no scaling) so we measure real content size */}
      <div
        className="audit-stage"
        style={{
          position: "fixed",
          left: -99999,
          top: 0,
          width: 1920,
          height: 1080,
          pointerEvents: "none",
        }}
      >
        {Comp && <Comp />}
      </div>
    </div>
  );
}
