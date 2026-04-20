import { ComponentType } from "react";
import CoverSlide from "./chapters/00-cover/CoverSlide";

export interface SlideEntry {
  id: string;
  title: string;
  chapter: string;
  chapterNumber: number;
  component: ComponentType;
  notes?: string;
}

/**
 * Ordered manifest of all slides in the deck.
 * Add new slides here in chapter order.
 */
export const slides: SlideEntry[] = [
  {
    id: "cover",
    title: "Cover",
    chapter: "Intro",
    chapterNumber: 0,
    component: CoverSlide,
    notes: "Welcome slide. Set expectations: this is a frontend-only walkthrough.",
  },
];

export const chapters = Array.from(
  new Map(
    slides.map((s) => [s.chapterNumber, { number: s.chapterNumber, title: s.chapter }])
  ).values()
).sort((a, b) => a.number - b.number);
