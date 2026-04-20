import { SlideLayout } from "@/slides/_layout/SlideLayout";

const roles = ["Viewer", "Commenter", "Editor", "Owner"];
const actions = [
  { name: "View content", v: [true, true, true, true] },
  { name: "Copy to my account", v: [true, true, true, true] },
  { name: "Add comment", v: [false, true, true, true] },
  { name: "React (emoji)", v: [false, true, true, true] },
  { name: "Edit items", v: [false, false, true, true] },
  { name: "Add / remove items", v: [false, false, true, true] },
  { name: "Move / rename collection", v: [false, false, true, true] },
  { name: "Manage shares & roles", v: [false, false, false, true] },
  { name: "Delete collection", v: [false, false, false, true] },
];

export default function PermissionsMatrix() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.04">
      <div className="h-full flex flex-col pt-8">
        <h1 className="text-5xl font-bold tracking-tight mb-2">
          Permissions · <span className="text-[hsl(var(--slide-accent))]">four roles</span>
        </h1>
        <p className="text-lg text-[hsl(var(--slide-muted))] mb-6 max-w-5xl">
          Roles are additive: each one is a strict superset of the previous. Easier to reason about than fine-grained ACLs.
        </p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1 min-h-0">
          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))]">
                <th className="text-left px-6 py-3 font-semibold">Action</th>
                {roles.map((r) => (
                  <th key={r} className="px-6 py-3 font-semibold text-center">{r}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {actions.map((a) => (
                <tr key={a.name} className="border-b border-[hsl(var(--slide-border))] last:border-0">
                  <td className="px-6 py-2.5 text-[hsl(var(--slide-muted))]">{a.name}</td>
                  {a.v.map((ok, i) => (
                    <td key={i} className="px-6 py-2.5 text-center">
                      {ok ? (
                        <span className="text-[hsl(var(--slide-accent))] text-xl">●</span>
                      ) : (
                        <span className="text-[hsl(var(--slide-border))] text-xl">○</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SlideLayout>
  );
}
