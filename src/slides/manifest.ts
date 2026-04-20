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
import AuthSignup from "./chapters/05-auth/02-Signup";
import AuthMagicLink from "./chapters/05-auth/03-MagicLink";
import AuthMFA from "./chapters/05-auth/04-MFA";
import AuthSessions from "./chapters/05-auth/05-Sessions";
import AuthPasswordReset from "./chapters/05-auth/06-PasswordReset";
import AuthAccountDeletion from "./chapters/05-auth/07-AccountDeletion";
import OnboardingBranches from "./chapters/06-onboarding/01-Branches";
import OnboardingPickStartingSpace from "./chapters/06-onboarding/02-PickStartingSpace";
import OnboardingBringBookmarks from "./chapters/06-onboarding/03-BringBookmarks";
import OnboardingInstallExtension from "./chapters/06-onboarding/04-InstallExtension";
import OnboardingTryIt from "./chapters/06-onboarding/05-TryIt";
import OnboardingShortcutBranches from "./chapters/06-onboarding/06-ShortcutBranches";
import ExtSurfaces from "./chapters/07-extension/01-Surfaces";
import ExtManifest from "./chapters/07-extension/02-Manifest";
import ExtPopup from "./chapters/07-extension/03-Popup";
import ExtNewTab from "./chapters/07-extension/04-NewTab";
import ExtSidePanel from "./chapters/07-extension/05-SidePanel";
import ExtOmnibox from "./chapters/07-extension/06-Omnibox";
import ExtContextMenu from "./chapters/07-extension/07-ContextMenu";
import ExtKeyboardShortcuts from "./chapters/07-extension/08-KeyboardShortcuts";
import WebTwoDomains from "./chapters/08-webapp/01-TwoDomains";
import WebRoutesMap from "./chapters/08-webapp/02-RoutesMap";
import WebAppShell from "./chapters/08-webapp/03-AppShell";
import WebDashboardDeltas from "./chapters/08-webapp/04-DashboardDeltas";
import WebCommandPalette from "./chapters/08-webapp/05-CommandPalette";
import WebUrlStatePwa from "./chapters/08-webapp/06-UrlStatePwa";
import HierSixLevels from "./chapters/09-hierarchy/01-SixLevels";
import HierAsciiTree from "./chapters/09-hierarchy/02-AsciiTree";
import HierCapabilitiesMatrix from "./chapters/09-hierarchy/03-CapabilitiesMatrix";
import HierCardinalityLimits from "./chapters/09-hierarchy/04-CardinalityLimits";
import HierMoveAndShareRules from "./chapters/09-hierarchy/05-MoveAndShareRules";
import HierColumnView from "./chapters/09-hierarchy/06-ColumnView";

export interface SlideEntry {
  id: string;
  title: string;
  chapter: string;
  chapterNumber: number;
  component: ComponentType;
  notes?: string;
}

const C = (chapterNumber: number, chapter: string) =>
  (id: string, title: string, component: ComponentType, notes?: string): SlideEntry => ({
    id, title, chapter, chapterNumber, component, notes,
  });

const intro = C(0, "Intro");
const vision = C(1, "Vision & Personas");
const vocab = C(2, "Vocabulary");
const roles = C(3, "Roles & Permissions");
const marketing = C(4, "Marketing & First Touch");
const auth = C(5, "Auth & Account Lifecycle");
const onboarding = C(6, "Onboarding");
const extension = C(7, "Extension Surfaces");
const webapp = C(8, "Web App Shell & Routes");
const hierarchy = C(9, "Browsing Hierarchy");

export const slides: SlideEntry[] = [
  intro("cover", "Cover", CoverSlide),

  // Ch 1
  vision("vision-hero", "Vision", VisionHero, "One-line pitch. Replacement for Toby + Tab Extend."),
  vision("vision-problem", "The Problem", Problem),
  vision("vision-solution", "The Vision", Solution),
  vision("vision-personas", "Personas", Personas),
  vision("vision-anti", "Anti-personas", AntiPersonas),

  // Ch 2
  vocab("vocab-hierarchy", "Hierarchy", Hierarchy),
  vocab("vocab-glossary", "Glossary", Glossary),
  vocab("vocab-forbidden", "Forbidden synonyms", Forbidden),

  // Ch 3
  roles("roles-overview", "Seven roles", RolesOverview),
  roles("roles-matrix", "Permission matrix", PermissionMatrix),
  roles("roles-edge", "Guest & system", GuestSystem),

  // Ch 4
  marketing("marketing-home", "Marketing home", MarketingHome),
  marketing("marketing-pricing", "Pricing", Pricing),
  marketing("marketing-comparison", "Comparison", Comparison),
  marketing("marketing-welcome", "/welcome", Welcome),
  marketing("marketing-trust", "Trust pages", Trust),

  // Ch 5
  auth("auth-methods", "Auth methods", AuthMethods),
  auth("auth-signup", "Signup flow", AuthSignup),
  auth("auth-magic", "Magic link", AuthMagicLink),
  auth("auth-mfa", "MFA", AuthMFA),
  auth("auth-sessions", "Sessions & devices", AuthSessions),
  auth("auth-reset", "Password reset", AuthPasswordReset),
  auth("auth-deletion", "Deletion & GDPR", AuthAccountDeletion),

  // Ch 6
  onboarding("onb-branches", "Three branches", OnboardingBranches),
  onboarding("onb-pick-space", "Pick starting Space", OnboardingPickStartingSpace),
  onboarding("onb-bookmarks", "Bring bookmarks", OnboardingBringBookmarks),
  onboarding("onb-install", "Install extension", OnboardingInstallExtension),
  onboarding("onb-try", "Try it now", OnboardingTryIt),
  onboarding("onb-shortcut", "Invite & install branches", OnboardingShortcutBranches),

  // Ch 7
  extension("ext-surfaces", "Eight surfaces", ExtSurfaces),
  extension("ext-manifest", "Manifest v3", ExtManifest),
  extension("ext-popup", "Toolbar popup", ExtPopup),
  extension("ext-newtab", "New tab dashboard", ExtNewTab),
  extension("ext-sidepanel", "Side panel", ExtSidePanel),
  extension("ext-omnibox", "Omnibox", ExtOmnibox),
  extension("ext-contextmenu", "Context menu", ExtContextMenu),
  extension("ext-shortcuts", "Keyboard shortcuts", ExtKeyboardShortcuts),

  // Ch 8
  webapp("web-two-domains", "Two domains", WebTwoDomains, "letsmarknow.com SSR · app.* CSR SPA"),
  webapp("web-routes", "Routes map", WebRoutesMap),
  webapp("web-shell", "App shell", WebAppShell),
  webapp("web-dashboard-deltas", "Dashboard deltas vs ext", WebDashboardDeltas),
  webapp("web-command-palette", "Command palette + keymap", WebCommandPalette),
  webapp("web-url-pwa", "URL state & PWA", WebUrlStatePwa),

  // Ch 9
  hierarchy("hier-six-levels", "Six levels", HierSixLevels),
  hierarchy("hier-ascii-tree", "A real user's tree", HierAsciiTree),
  hierarchy("hier-capabilities", "Capabilities matrix", HierCapabilitiesMatrix),
  hierarchy("hier-limits", "Cardinality limits", HierCardinalityLimits),
  hierarchy("hier-move-share", "Move, share, soft-delete", HierMoveAndShareRules),
  hierarchy("hier-column-view", "Column view (Tab Extend)", HierColumnView),
];

export const chapters = Array.from(
  new Map(slides.map((s) => [s.chapterNumber, { number: s.chapterNumber, title: s.chapter }])).values()
).sort((a, b) => a.number - b.number);
