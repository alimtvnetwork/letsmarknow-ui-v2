import { SlideLayout } from "@/slides/_layout/SlideLayout";
import { FileText, Newspaper, History, ShieldCheck, HelpCircle, BookOpen, Scale, Users2 } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "/docs",
    desc: "MDX-driven, sidebar TOC, in-page TOC, search via Algolia DocSearch, version selector, 'was this helpful?' feedback.",
  },
  {
    icon: Newspaper,
    title: "/blog",
    desc: "Categories: Updates · Productivity · Comparisons · Tutorials · Engineering. RSS feed, author pages, auto-OG images.",
  },
  {
    icon: History,
    title: "/changelog",
    desc: "Versioned releases with RSS. Each ship gets a card: version, date, highlights, fixes, breaking notes.",
  },
  {
    icon: HelpCircle,
    title: "/help",
    desc: "Support landing — searchable FAQ, contact form, response-time promise per plan.",
  },
  {
    icon: ShieldCheck,
    title: "/security",
    desc: "Encryption, certifications, bug bounty, sub-processor list. 'No GA, no FB pixel' is a selling point here.",
  },
  {
    icon: Scale,
    title: "/legal",
    desc: "/terms · /privacy · /dpa · /cookies. Plain-language summaries above the formal text.",
  },
  {
    icon: Users2,
    title: "/customers · /about · /jobs",
    desc: "Case studies (Team customers), team page, careers — long-tail trust pages.",
  },
  {
    icon: FileText,
    title: "/integrations · /affiliate",
    desc: "Integrations directory and an affiliate signup flow for creators (Alex persona).",
  },
];

export default function Trust() {
  return (
    <SlideLayout chapter="Chapter 4 · Long-tail trust" pageLabel="17">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-6xl font-bold leading-tight">
            The pages that close the deal.
          </h2>
          <p className="text-xl text-[hsl(var(--slide-muted))] mt-3">
            Beyond the home and pricing pages — the long-tail of the marketing site
            does the heavy lifting on trust, SEO, and support.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 flex-1">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] p-5 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--slide-accent)/0.12)] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[hsl(var(--slide-accent))]" />
                </div>
                <div className="text-xl font-bold mb-2">{s.title}</div>
                <div className="text-sm text-[hsl(var(--slide-muted))]">{s.desc}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-4">
          {[
            ["LCP < 1.8s", "on 4G mobile"],
            ["Lighthouse a11y ≥ 95", "across every page"],
            ["Cookieless analytics", "Plausible · respects DNT · no consent banner"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-xl border border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-surface))] px-5 py-3"
            >
              <div className="text-base font-bold text-[hsl(var(--slide-accent))]">{k}</div>
              <div className="text-sm text-[hsl(var(--slide-muted))]">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
