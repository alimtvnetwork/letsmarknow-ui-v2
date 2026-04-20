import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { ArrowRight, Ban } from "lucide-react";

const swaps: { wrong: string; right: string; why: string }[] = [
  { wrong: "Folder", right: "Collection", why: "Folders nest infinitely. Collections do not." },
  { wrong: "Subfolder", right: "Group", why: "Only ONE level allowed inside a Collection." },
  { wrong: "Bookmark", right: "Item", why: "Items can be tabs, notes, files — not just URLs." },
  { wrong: "Workspace", right: "Organization or Space", why: "Two distinct concepts; pick one." },
  { wrong: "Team", right: "Organization", why: "Team is the plan name, not the entity." },
  { wrong: "Board", right: "Collection", why: "Reserved for future Trello-style view." },
  { wrong: "Card", right: "Item", why: "'Card' is a render style, not a data type." },
  { wrong: "Page", right: "Collection or Item", why: "Ambiguous between container and content." },
  { wrong: "User", right: "Account or Member", why: "Account = identity. Member = role in an Org." },
  { wrong: "Project", right: "Space or Collection", why: "Pick the right level explicitly." },
];

export default function Forbidden() {
  return (
    <SlideLayout chapter="Chapter 2 · Forbidden synonyms" pageLabel="09">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            Words we never ship.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            UI copy, docs, and AI prompts must use the right term — every time.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-3 content-start">
          {swaps.map((s) => (
            <div
              key={s.wrong}
              className="flex items-center gap-4 rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-5 py-3"
            >
              <div className="flex items-center gap-2 w-44 shrink-0">
                <Ban className="w-4 h-4 text-[hsl(var(--slide-warning))]" />
                <span className="text-lg font-bold line-through text-[hsl(var(--slide-warning))]">
                  {s.wrong}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-[hsl(var(--slide-muted))] shrink-0" />
              <div className="w-52 shrink-0">
                <span className="text-lg font-bold text-[hsl(var(--slide-success))]">
                  {s.right}
                </span>
              </div>
              <div className="text-sm text-[hsl(var(--slide-muted))] flex-1 truncate">
                {s.why}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
