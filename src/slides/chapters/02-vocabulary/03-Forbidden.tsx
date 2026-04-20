import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ArrowRight, Ban } from "lucide-react";

const replacements = [
  { wrong: "Folder", right: "Collection or Group", reason: "Vague. We have two distinct levels." },
  { wrong: "Bookmark", right: "Item", reason: "We're not Chrome bookmarks. Items have notes, tags, position." },
  { wrong: "Category", right: "Collection", reason: "Tab Extend's term. We use Collection." },
  { wrong: "Project", right: "Space", reason: "Project implies temporary. Spaces are long-lived." },
  { wrong: "Team", right: "Organization", reason: "Team is a billing plan, not a content container." },
  { wrong: "Tab group", right: "Collection or Group", reason: "Reserved for Chrome's native feature." },
  { wrong: "Workspace", right: "Organization or Space", reason: "Tab Extend conflates two levels — we don't." },
  { wrong: "Card", right: "Item", reason: "Card is a render style, not a data concept." },
];

export default function ForbiddenSynonymsSlide() {
  return (
    <SlideLayout chapter="Chapter 2 · Don't say this" pageLabel="09">
      <div className="h-full flex flex-col">
        <div className="mb-8">
          <h2 className="text-6xl font-bold leading-tight mb-3">
            Forbidden synonyms.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] max-w-[1300px]">
            These words appear in <em>other</em> tools. They <strong>never</strong> appear in our UI,
            code, or copy. Drift here causes user confusion and API ambiguity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 flex-1">
          {replacements.map((r) => (
            <div
              key={r.wrong}
              className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5"
            >
              <div className="flex items-center gap-4">
                {/* Wrong */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[hsl(var(--slide-danger)/0.12)] border border-[hsl(var(--slide-danger)/0.3)]">
                  <Ban className="w-4 h-4 text-[hsl(var(--slide-danger))]" />
                  <span className="font-mono text-base text-[hsl(var(--slide-danger))] line-through">
                    {r.wrong}
                  </span>
                </div>

                <ArrowRight className="w-5 h-5 text-[hsl(var(--slide-muted))] shrink-0" />

                {/* Right */}
                <div className="px-3 py-1.5 rounded-lg bg-[hsl(var(--slide-success)/0.12)] border border-[hsl(var(--slide-success)/0.3)]">
                  <span className="font-mono text-base font-bold text-[hsl(var(--slide-success))]">
                    {r.right}
                  </span>
                </div>
              </div>
              <div className="mt-3 text-sm text-[hsl(var(--slide-muted))] leading-snug pl-1">
                {r.reason}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-[hsl(var(--slide-muted))] italic">
          🔒 The glossary is locked. Use these names everywhere.
        </div>
      </div>
    </SlideLayout>
  );
}
