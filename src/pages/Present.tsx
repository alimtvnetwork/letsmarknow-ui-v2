import { useCallback, useEffect, useState } from "react";
import { slides } from "@/slides/manifest";
import { Toolbar } from "@/components/presentation/Toolbar";
import { ThumbnailSidebar } from "@/components/presentation/ThumbnailSidebar";
import { SlideCanvas } from "@/components/presentation/SlideCanvas";
import { FullscreenMode } from "@/components/presentation/FullscreenMode";

const THEME_KEY = "lmn-deck-theme";

export default function Present() {
  const [index, setIndex] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
  });

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  }, [isDark]);

  // SEO
  useEffect(() => {
    document.title = "LMN · Frontend Walkthrough Presentation";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "A frontend-focused walkthrough of the Lets Mark Now extension and web app — every screen, every click, every user flow."
    );
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  const goNext = useCallback(
    () => setIndex((i) => Math.min(slides.length - 1, i + 1)),
    []
  );
  const goPrev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  // Keyboard nav (editor mode)
  useEffect(() => {
    if (isPresenting) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        setIsPresenting(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, isPresenting]);

  return (
    <div className="h-screen w-screen flex flex-col bg-[hsl(var(--slide-bg))]">
      <Toolbar
        index={index}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
        onPresent={() => setIsPresenting(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark((d) => !d)}
      />
      <main className="flex-1 min-h-0 flex">
        <ThumbnailSidebar
          slides={slides}
          currentIndex={index}
          onSelect={setIndex}
        />
        <SlideCanvas slide={slides[index]} />
      </main>

      {isPresenting && (
        <FullscreenMode
          slides={slides}
          index={index}
          onChangeIndex={setIndex}
          onExit={() => setIsPresenting(false)}
        />
      )}
    </div>
  );
}
