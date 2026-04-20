import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { CreditCard, Download, AlertCircle } from "lucide-react";

const invoices = [
  { date: "Apr 1, 2026", amount: "$96.00", desc: "Team · 8 seats", status: "Paid" },
  { date: "Mar 1, 2026", amount: "$96.00", desc: "Team · 8 seats", status: "Paid" },
  { date: "Feb 1, 2026", amount: "$84.00", desc: "Team · 7 seats", status: "Paid" },
];

export default function BillingPortal() {
  return (
    <SlideLayout chapter="Chapter 15 · Settings, Pricing & Plans" pageLabel="15.03">
      <div className="h-full flex flex-col pt-12">
        <h1 className="text-7xl font-bold tracking-tight mb-3">
          Billing portal · <span className="text-[hsl(var(--slide-accent))]">Stripe-hosted, embedded</span>
        </h1>
        <p className="text-2xl text-[hsl(var(--slide-muted))] mb-10 max-w-5xl">
          Plan, payment method, and invoices live in one panel. Stripe owns PCI scope; we own the chrome.
        </p>
        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="text-xs uppercase tracking-wider text-[hsl(var(--slide-muted))] mb-2">Current plan</div>
            <div className="text-3xl font-bold mb-1">Team</div>
            <div className="text-sm text-[hsl(var(--slide-muted))] mb-6">$12 / seat · billed monthly</div>
            <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-4 mb-4">
              <div className="text-xs text-[hsl(var(--slide-muted))] mb-1">Seats used</div>
              <div className="flex items-end gap-2"><span className="text-2xl font-bold">8</span><span className="text-sm text-[hsl(var(--slide-muted))]">/ 10 paid</span></div>
              <div className="h-2 mt-3 rounded-full bg-[hsl(var(--slide-bg))] overflow-hidden">
                <div className="h-full bg-[hsl(var(--slide-accent))] rounded-full" style={{ width: "80%" }} />
              </div>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-[hsl(var(--slide-surface-2))] text-sm font-semibold">Manage seats</button>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
              <span className="text-xs uppercase tracking-wider text-[hsl(var(--slide-muted))]">Payment method</span>
            </div>
            <div className="rounded-lg bg-[hsl(var(--slide-surface-2))] p-4 mb-3 flex items-center justify-between">
              <div>
                <div className="font-mono text-sm">•••• 4242</div>
                <div className="text-xs text-[hsl(var(--slide-muted))] mt-1">Visa · expires 09/28</div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-[hsl(var(--slide-accent)_/_0.15)] text-[hsl(var(--slide-accent))]">Default</span>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-[hsl(var(--slide-surface-2))] text-sm font-semibold mb-3">+ Add method</button>
            <div className="rounded-lg border border-[hsl(45_90%_60%_/_0.4)] bg-[hsl(45_90%_60%_/_0.05)] p-3 flex gap-2">
              <AlertCircle className="w-4 h-4 text-[hsl(45_90%_60%)] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[hsl(var(--slide-muted))]">Card expires soon. Update before Sep 1.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-6">
            <div className="text-xs uppercase tracking-wider text-[hsl(var(--slide-muted))] mb-4">Invoices</div>
            <div className="space-y-2">
              {invoices.map((i) => (
                <div key={i.date} className="flex items-center justify-between py-2 border-b border-[hsl(var(--slide-border))] last:border-0">
                  <div>
                    <div className="text-sm font-medium">{i.date}</div>
                    <div className="text-xs text-[hsl(var(--slide-muted))]">{i.desc}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono">{i.amount}</span>
                    <Download className="w-4 h-4 text-[hsl(var(--slide-muted))]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
