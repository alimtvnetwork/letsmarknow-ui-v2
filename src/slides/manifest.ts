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
import AuthMethods from "./chapters/05-auth/01-AuthMethods";
import Signup from "./chapters/05-auth/02-Signup";
import MagicLink from "./chapters/05-auth/03-MagicLink";
import MFA from "./chapters/05-auth/04-MFA";
import Sessions from "./chapters/05-auth/05-Sessions";
import PasswordReset from "./chapters/05-auth/06-PasswordReset";
import AccountDeletion from "./chapters/05-auth/07-AccountDeletion";

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
  // ── Chapter 4 — Marketing Site & First Touch ───────────────────
  {
    id: "marketing-home",
    title: "Marketing home",
    chapter: "Marketing & First Touch",
    chapterNumber: 4,
    component: MarketingHome,
  },
  {
    id: "marketing-pricing",
    title: "Pricing",
    chapter: "Marketing & First Touch",
    chapterNumber: 4,
    component: Pricing,
  },
  {
    id: "marketing-comparison",
    title: "Comparison",
    chapter: "Marketing & First Touch",
    chapterNumber: 4,
    component: Comparison,
  },
  {
    id: "marketing-welcome",
    title: "/welcome",
    chapter: "Marketing & First Touch",
    chapterNumber: 4,
    component: Welcome,
  },
  {
    id: "marketing-trust",
    title: "Trust pages",
    chapter: "Marketing & First Touch",
    chapterNumber: 4,
    component: Trust,
  },
  // ── Chapter 5 — Auth & Account Lifecycle ───────────────────────
  {
    id: "auth-methods",
    title: "Auth methods",
    chapter: "Auth & Account Lifecycle",
    chapterNumber: 5,
    component: AuthMethods,
  },
  {
    id: "auth-signup",
    title: "Signup flow",
    chapter: "Auth & Account Lifecycle",
    chapterNumber: 5,
    component: Signup,
  },
  {
    id: "auth-magic-link",
    title: "Magic link",
    chapter: "Auth & Account Lifecycle",
    chapterNumber: 5,
    component: MagicLink,
  },
  {
    id: "auth-mfa",
    title: "MFA",
    chapter: "Auth & Account Lifecycle",
    chapterNumber: 5,
    component: MFA,
  },
  {
    id: "auth-sessions",
    title: "Sessions & devices",
    chapter: "Auth & Account Lifecycle",
    chapterNumber: 5,
    component: Sessions,
  },
  {
    id: "auth-password-reset",
    title: "Forgot password",
    chapter: "Auth & Account Lifecycle",
    chapterNumber: 5,
    component: PasswordReset,
  },
  {
    id: "auth-deletion",
    title: "Deletion & GDPR",
    chapter: "Auth & Account Lifecycle",
    chapterNumber: 5,
    component: AccountDeletion,
  },
];

export const chapters = Array.from(
  new Map(
    slides.map((s) => [s.chapterNumber, { number: s.chapterNumber, title: s.chapter }])
  ).values()
).sort((a, b) => a.number - b.number);
