import { ComponentType } from "react";
import CoverSlide from "./chapters/00-cover/CoverSlide";
import VisionHero from "./chapters/01-vision/01-VisionHero";
import Problem from "./chapters/01-vision/02-Problem";
import Solution from "./chapters/01-vision/03-Solution";
import Personas from "./chapters/01-vision/04-Personas";
import AntiPersonas from "./chapters/01-vision/05-AntiPersonas";

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
  },
  // ── Chapter 1 — Vision & Personas ─────────────────────────────
  {
    id: "vision-hero",
    title: "Vision",
    chapter: "Vision & Personas",
    chapterNumber: 1,
    component: VisionHero,
    notes: "One-line pitch. Replacement for Toby + Tab Extend.",
  },
  {
    id: "vision-problem",
    title: "The Problem",
    chapter: "Vision & Personas",
    chapterNumber: 1,
    component: Problem,
  },
  {
    id: "vision-solution",
    title: "The Vision",
    chapter: "Vision & Personas",
    chapterNumber: 1,
    component: Solution,
  },
  {
    id: "vision-personas",
    title: "Personas",
    chapter: "Vision & Personas",
    chapterNumber: 1,
    component: Personas,
  },
  {
    id: "vision-anti",
    title: "Anti-personas",
    chapter: "Vision & Personas",
    chapterNumber: 1,
    component: AntiPersonas,
  },
];

export const chapters = Array.from(
  new Map(
    slides.map((s) => [s.chapterNumber, { number: s.chapterNumber, title: s.chapter }])
  ).values()
).sort((a, b) => a.number - b.number);
