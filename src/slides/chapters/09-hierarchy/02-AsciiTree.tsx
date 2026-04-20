import { SlideLayout } from "@/slides/_layout/SlideLayout";

const tree = `Account · alim@example.com
│
├── Organization "Personal" (PE)            ← rail bubble #1
│   ├── Members: [alim (Owner)]
│   ├── Subscription: Pro
│   └── Spaces:
│       ├── Space "My Collections"          (private)
│       │   ├── Collection "Marketing"
│       │   │   ├── Item "7 Habits…"
│       │   │   └── Item "Book Reviews"
│       │   └── Collection "Downloads"      (empty)
│       └── Space "Evatix"                  (shared with team)
│           ├── Collection "Scrum"
│           └── Collection "React"
│               ├── Group "Quick Tools"     ← Tab Extend style
│               │   ├── Item "ChatGPT"
│               │   └── Item "Drive"
│               └── Item "react-spring"
│
└── Organization "Atto Property" (AP)       ← rail bubble #2
    ├── Members: [alim (Owner), sara (Editor)]
    ├── Subscription: Team
    └── Spaces:
        └── Space "Atto Quick"
            └── Collection "Atto Property"
                └── Items…`;

export default function HierarchyAsciiTree() {
  return (
    <SlideLayout chapter="Chapter 9 · Browsing Hierarchy" pageLabel="09.02">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          A real <span className="text-[hsl(var(--slide-accent))]">user's tree</span>
        </h1>
        <p className="text-xl text-[hsl(var(--slide-muted))] mb-8">
          Two Orgs · four Spaces · live Group nesting · shared Spaces. This is the canonical example.
        </p>
        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-8 flex-1 overflow-auto">
          <pre className="text-sm font-mono leading-relaxed text-[hsl(var(--slide-fg))]/90 whitespace-pre">
            {tree}
          </pre>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl border border-[hsl(var(--slide-border))] p-3">
            <div className="text-[hsl(var(--slide-muted))] text-xs uppercase tracking-widest">Group rule</div>
            <div className="mt-1">No Group inside Group · v1 locked</div>
          </div>
          <div className="rounded-xl border border-[hsl(var(--slide-border))] p-3">
            <div className="text-[hsl(var(--slide-muted))] text-xs uppercase tracking-widest">Naming</div>
            <div className="mt-1">Sibling names need not be unique</div>
          </div>
          <div className="rounded-xl border border-[hsl(var(--slide-border))] p-3">
            <div className="text-[hsl(var(--slide-muted))] text-xs uppercase tracking-widest">Cross-Org move</div>
            <div className="mt-1">Export → import only · never a drag</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
