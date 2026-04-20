import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { Bell, Mail, Smartphone } from "lucide-react";

const events = [
  { kind: "Mention", inApp: true, email: true, push: true },
  { kind: "Reply to your comment", inApp: true, email: true, push: false },
  { kind: "Reaction on your comment", inApp: true, email: false, push: false },
  { kind: "Item added to shared collection", inApp: true, email: false, push: false },
  { kind: "Invite accepted", inApp: true, email: true, push: false },
  { kind: "Role changed", inApp: true, email: true, push: false },
  { kind: "Share viewed (Pro only)", inApp: false, email: false, push: false },
];

export default function Notifications() {
  return (
    <SlideLayout chapter="Chapter 12 · Sharing & Collaboration" pageLabel="12.07">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Notifications · <span className="text-[hsl(var(--slide-accent))]">three channels</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          User picks which events fire which channels. Defaults bias toward "important only".
        </p>

        <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] overflow-hidden flex-1">
          <table className="w-full text-lg">
            <thead>
              <tr className="border-b border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface-2))]">
                <th className="text-left px-6 py-4 font-semibold">Event</th>
                <th className="px-6 py-4 font-semibold text-center"><Bell className="inline w-5 h-5" /> In-app</th>
                <th className="px-6 py-4 font-semibold text-center"><Mail className="inline w-5 h-5" /> Email</th>
                <th className="px-6 py-4 font-semibold text-center"><Smartphone className="inline w-5 h-5" /> Push</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e) => (
                <tr key={e.kind} className="border-b border-[hsl(var(--slide-border))] last:border-0">
                  <td className="px-6 py-3 text-[hsl(var(--slide-muted))]">{e.kind}</td>
                  {[e.inApp, e.email, e.push].map((on, i) => (
                    <td key={i} className="px-6 py-3 text-center">
                      <span className={on ? "text-[hsl(var(--slide-accent))] text-2xl" : "text-[hsl(var(--slide-border))] text-2xl"}>
                        {on ? "●" : "○"}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[hsl(var(--slide-muted))] mt-6">
          Quiet hours respected globally. Email digest option batches non-urgent events into a 9am UTC summary.
        </p>
      </div>
    </SlideLayout>
  );
}
