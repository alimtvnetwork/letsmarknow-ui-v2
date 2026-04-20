import { ComponentType } from "react";
import CoverSlide from "./chapters/00-cover/CoverSlide";
import VisionHero from "./chapters/01-vision/01-VisionHero";
import Problem from "./chapters/01-vision/02-Problem";
import Solution from "./chapters/01-vision/03-Solution";
import Personas from "./chapters/01-vision/04-Personas";
import AntiPersonas from "./chapters/01-vision/05-AntiPersonas";
import Hierarchy from "./chapters/02-vocabulary/01-Hierarchy";
import Glossary from "./chapters/02-vocabulary/02-Glossary";
import Forbidden from "./chapters/02-vocabulary/03-Forbidden";
import RolesOverview from "./chapters/03-roles/01-RolesOverview";
import PermissionMatrix from "./chapters/03-roles/02-PermissionMatrix";
import GuestSystem from "./chapters/03-roles/03-GuestSystem";
import MarketingHome from "./chapters/04-marketing/01-Home";
import Pricing from "./chapters/04-marketing/02-Pricing";
import Comparison from "./chapters/04-marketing/03-Comparison";
import Welcome from "./chapters/04-marketing/04-Welcome";
import Trust from "./chapters/04-marketing/05-Trust";

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
  // ── Chapter 2 — Vocabulary ─────────────────────────────────────
  {
    id: "vocab-hierarchy",
    title: "Hierarchy",
    chapter: "Vocabulary",
    chapterNumber: 2,
    component: Hierarchy,
  },
  {
    id: "vocab-glossary",
    title: "Glossary",
    chapter: "Vocabulary",
    chapterNumber: 2,
    component: Glossary,
  },
  {
    id: "vocab-forbidden",
    title: "Forbidden synonyms",
    chapter: "Vocabulary",
    chapterNumber: 2,
    component: Forbidden,
  },
  // ── Chapter 3 — Roles & Permissions ────────────────────────────
  {
    id: "roles-overview",
    title: "Seven roles",
    chapter: "Roles & Permissions",
    chapterNumber: 3,
    component: RolesOverview,
  },
  {
    id: "roles-matrix",
    title: "Permission matrix",
    chapter: "Roles & Permissions",
    chapterNumber: 3,
    component: PermissionMatrix,
  },
  {
    id: "roles-edge",
    title: "Guest & system",
    chapter: "Roles & Permissions",
    chapterNumber: 3,
    component: GuestSystem,
  },
];

export const chapters = Array.from(
  new Map(
    slides.map((s) => [s.chapterNumber, { number: s.chapterNumber, title: s.chapter }])
  ).values()
).sort((a, b) => a.number - b.number);
