import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScaledSlideProps {
  children: ReactNode;
  className?: string;
  /** Force a specific scale instead of fit-to-container */
  forceScale?: number;
}

/**
 * ScaledSlide — wraps a 1920x1080 slide and scales it to fit its parent
 * container while preserving aspect ratio. Symmetric scale around center.
 */
export function ScaledSlide({ children, className, forceScale }: ScaledSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(forceScale ?? 0.5);

  useEffect(() => {
    if (forceScale != null) {
      setScale(forceScale);
      return;
    }
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      const s = Math.min(width / 1920, height / 1080);
      setScale(s > 0 ? s : 0.01);
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [forceScale]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", className)}
    >
      <div className="slide-wrapper" style={{ ["--slide-scale" as string]: scale }}>
        {children}
      </div>
    </div>
  );
}
