import { SlideLayout } from "@/slides/_layout/SlideLayout";

export default function Groups() {
  return (
    <SlideLayout chapter="Chapter 10 · Capture & Organize" pageLabel="10.04">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          Groups · <span className="text-[hsl(var(--slide-accent))]">optional one level of structure</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          A Group is a labelled bucket inside a Collection. v1 forbids Group-in-Group — keeps the column view sane.
        </p>

        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-4">
              Allowed
            </div>
            <pre className="text-sm font-mono leading-relaxed text-[hsl(var(--slide-fg))]/90">{`Collection "React"
├── Group "Hooks"
│   ├── Item useEffect docs
│   └── Item react-spring
├── Group "State libs"
│   ├── Item zustand
│   └── Item jotai
└── Item (ungrouped) Vite blog`}</pre>
            <div className="mt-5 text-sm text-[hsl(var(--slide-fg))]/80 space-y-1.5">
              <div>✓ Item belongs to <strong>0 or 1</strong> Group within a Collection</div>
              <div>✓ Same Item may appear in Groups of <em>different</em> Collections (via duplicate-link)</div>
              <div>✓ Group has color · icon · WIP limit (Pro+)</div>
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="text-sm uppercase tracking-widest text-[hsl(var(--slide-muted))] mb-4">
              Forbidden in v1
            </div>
            <pre className="text-sm font-mono leading-relaxed text-[hsl(var(--slide-muted))]/80 line-through">{`Collection "X"
└── Group "Outer"
    └── Group "Inner"   ← rejected
        └── Item …`}</pre>
            <div className="mt-5 space-y-3 text-sm text-[hsl(var(--slide-fg))]/85">
              <div className="rounded-lg border border-[hsl(var(--slide-border))] p-3">
                <div className="text-[hsl(var(--slide-accent))] text-xs uppercase tracking-widest mb-1">
                  Why
                </div>
                Column view assumes flat groups. Nested groups would force a tree-in-tree control we are not building in v1.
              </div>
              <div className="rounded-lg border border-[hsl(var(--slide-border))] p-3">
                <div className="text-[hsl(var(--slide-accent))] text-xs uppercase tracking-widest mb-1">
                  Workaround
                </div>
                Use a sub-Collection. Move is one drag.
              </div>
              <div className="rounded-lg border border-[hsl(var(--slide-border))] p-3">
                <div className="text-[hsl(var(--slide-accent))] text-xs uppercase tracking-widest mb-1">
                  Re-evaluate
                </div>
                Phase 3 if &gt; 5% of users request it (instrumented event <code className="font-mono">attempt_nested_group</code>).
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
