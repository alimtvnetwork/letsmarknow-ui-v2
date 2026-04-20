import { Moon, Sun, Play, ChevronLeft, ChevronRight, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onPresent: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Toolbar({
  index,
  total,
  onPrev,
  onNext,
  onPresent,
  isDark,
  onToggleTheme,
  sidebarOpen,
  onToggleSidebar,
}: Props) {
  return (
    <header className="h-14 shrink-0 flex items-center justify-between px-5 border-b border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))]">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? "Hide slides panel" : "Show slides panel"}
          aria-pressed={sidebarOpen}
        >
          <PanelLeft className="w-4 h-4" />
        </Button>
        <div className="w-7 h-7 rounded-md bg-[hsl(var(--slide-accent))] flex items-center justify-center text-[hsl(var(--slide-bg))] font-bold text-sm">
          L
        </div>
        <div className="text-sm font-semibold text-[hsl(var(--slide-fg))]">
          LMN · Frontend Walkthrough
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onPrev} aria-label="Previous">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <span className="text-sm tabular-nums text-[hsl(var(--slide-muted))] min-w-[60px] text-center">
          {index + 1} / {total}
        </span>
        <Button variant="ghost" size="icon" onClick={onNext} aria-label="Next">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onToggleTheme} aria-label="Toggle theme">
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
        <Button onClick={onPresent} size="sm" className="gap-2">
          <Play className="w-3.5 h-3.5" /> Present
        </Button>
      </div>
    </header>
  );
}
