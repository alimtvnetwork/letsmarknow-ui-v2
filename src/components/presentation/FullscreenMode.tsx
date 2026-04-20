import { useEffect, useRef, useState } from "react";
import { ScaledSlide } from "@/slides/_layout/ScaledSlide";
import { SlideEntry } from "@/slides/manifest";

interface Props {
  slides: SlideEntry[];
  index: number;
  onChangeIndex: (i: number) => void;
  onExit: () => void;
}

export function FullscreenMode({ slides, index, onChangeIndex, onExit }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [cursorHidden, setCursorHidden] = useState(false);
  const idleTimer = useRef<number | null>(null);

  // Request fullscreen on mount, exit on unmount
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.requestFullscreen?.().catch(() => {});

    const onFsChange = () => {
      if (!document.fullscreenElement) onExit();
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    };
  }, [onExit]);

  // Idle cursor hiding
  useEffect(() => {
    const reset = () => {
      setCursorHidden(false);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => setCursorHidden(true), 2500);
    };
    reset();
    window.addEventListener("mousemove", reset);
    return () => {
      window.removeEventListener("mousemove", reset);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, []);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        onChangeIndex(Math.min(slides.length - 1, index + 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        onChangeIndex(Math.max(0, index - 1));
      } else if (e.key === "Escape") {
        onExit();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, slides.length, onChangeIndex, onExit]);

  const Comp = slides[index].component;

  return (
    <div
      ref={ref}
      className={`slide-fullscreen fixed inset-0 z-[100] bg-black flex items-center justify-center ${
        cursorHidden ? "cursor-hidden" : ""
      }`}
    >
      <div className="w-full h-full">
        <ScaledSlide>
          <Comp />
        </ScaledSlide>
      </div>
    </div>
  );
}
