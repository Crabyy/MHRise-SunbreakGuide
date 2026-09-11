# MHRise: Sunbreak Guide

**Version: v1.20** · Author: [Craby](https://github.com/Crabyy)

A personal Monster Hunter Rise: Sunbreak reference web app. It answers three questions fast:

1. **Monster Matchups** — for a given monster, which weapon build to bring for **Dual Blades**, **Spread Bow**, or **rapid-fire elemental Light Bowgun**: recommended element, weapon, rampage decoration, priority hit zones, and (for LBG) ammo and handling skills.
2. **Afflicted Materials** — which anomaly materials drop from which monsters, the best farm target for each, and the anomaly level range. Materials can be **pinned** with an "amount needed" counter to use as a farming checklist.
3. **Monster Drops** — per-monster reward tables (Target/Capture/Carving/Broken Parts merged into one compact list per material) with drop-rate percentages, filterable by Low Rank / High Rank / Master Rank exactly like the Afflicted Materials tier filter. Search by monster *or* material name. **Complete for all 78 large monsters.**

> Monster Hunter Rise: Sunbreak © Capcom. This is an unofficial fan-made reference.

## Features

- Matchup browser per weapon (Dual Blades / Spread Bow / RF Elemental LBG) with element filter and live search
- Simple standalone Home page with a short welcome, creator credit, and unofficial fan-reference disclaimer
- Full matchup detail: recommended weapon, element, rampage decoration, priority targets, shot type (Bow), ammo + handling (LBG)
- Afflicted material database with tier filter (A1–A9) and live search
- Material pinning with per-material "amount needed" stepper; pinned items move to a dedicated Pinned section
- Monster Drops: per-rank reward tables with percentages, filterable by rank (same pill-filter pattern as Afflicted Materials' tier filter); handles monsters that only exist in certain ranks and monsters that cannot be captured; includes Dropped Materials; excludes afflicted/anomaly investigation materials because those live in the Afflicted Materials tab; search matches monster names or material names
- In-app Changelog page under App, driven by `data/changelog-data.js`
- Ctrl/Cmd+F focuses the current page's in-app search box when one is available
- Light and dark themes (follows system preference, toggleable, remembered)
- Sidebar navigation; collapses to a top bar on mobile
- Everything persists in the browser (localStorage): current view, filters, selected entries, pins, and theme

## Tech

Plain static site — HTML + CSS + vanilla JavaScript. No framework, no dependencies, no build step. Poppins is loaded from Google Fonts.

| File | Purpose |
| --- | --- |
| `index.html` | Page shell: sidebar, nav, footer |
| `app.js` | All app logic and rendering |
| `styles.css` | Theme tokens (light/dark) and all styling |
| `data/game-data.js` | Weapons and per-monster matchup data (`window.SUNBREAK_DATA`) |
| `data/materials-data.js` | Afflicted material data (`window.afflictedMaterials`) |
| `data/changelog-data.js` | Version history shown on the in-app Changelog page (`window.APP_CHANGELOG`) |
| `data/drops-data.js` | Monster Drops reward tables (`window.MONSTER_DROPS`) — see schema notes in the file header |
| `data/monster-order.js` | Canonical monster display order (`window.MONSTER_ORDER`) used to sort the Monster Matchups and Monster Drops lists |

## Run locally

Serve the folder with any static server and open the printed URL, e.g.:

```bash
python -m http.server 8613
```

(Opening `index.html` directly from disk also works in most browsers.)

## Deployment

Deployed on **Vercel** from this repository: framework preset **Other**, no build command, output directory = repo root. Every push to `main` auto-deploys.

## Versioning & changelog policy

This project keeps two changelogs on purpose, and they are not meant to match line-for-line:

- **This README's Changelog section** is the exhaustive record. Every change gets documented here in full detail, no matter how small — this file is the source of truth for what actually happened and why.
- **The in-app changelog** (`data/changelog-data.js`, shown on the app's Changelog page) is written for end users and stays terse:
  - A **small** tweak or fix (wording, a minor visual nit, a small bug fix that doesn't change how a feature works) does **not** get its own version bump. Add it as a bullet (or fold it into an existing "Small changes." bullet) under the **current** version's entry.
  - Bump the **minor/patch** number (v1.20 → v1.21) for an update that's a bit more than small — a real fix users would notice, a small feature, a meaningful UI change.
  - Bump the **major** number (v1.x → v2.0) only for a major update — a redesign, a new core feature area, a significant rework of how the app is used.

If you're an AI agent picking up this repo: read this section before touching `data/changelog-data.js` or the "Version" line at the top of this README, and apply the same judgment call above rather than defaulting to a new version entry for every change.

## Changelog

### v1.20
- Added a standalone **Home** tab with a simple welcome, creator credit, and Capcom/unofficial fan-reference disclaimer.
- Ctrl/Cmd+F now focuses the current page's search box when one is available, instead of jumping straight to the browser's find popup.
- Fixed **Monster Drops** search/filter confusion: material searches now respect the selected rank, so Master Rank-only monsters/materials do not fall back to a default Low Rank monster.
- Added **Dropped Materials** to Monster Drops and made the reward table columns constant: Target Rewards, Capture Rewards, Broken Part Rewards, Carves, and Dropped Materials.
- Removed Monster Drops pinning, redundant rank notes, and afflicted/anomaly investigation materials from Monster Drops. Checklist tracking and afflicted materials stay in the **Afflicted Materials** tab.
- Shortened the Monster Drops monster list panel for easier scanning.
- Updated the Home creator credit from "By: Craby" to a cleaner "Made by Craby" line.
- Fixed **Monster Drops**: the reward table had a fixed minimum width, so on mobile and mid-size displays (roughly anything narrower than ~1050px) it silently overflowed off-screen with no visible scrollbar, hiding the Broken Part Rewards / Carves / Dropped Materials columns. It's now `table-layout: fixed` with proportional columns and wrapping cell text, so the full table (all 6 columns) always fits within the viewport at any screen size — no horizontal scrolling required.
- Monster lists on **Monster Matchups** and **Monster Drops** now follow a fixed game-progression order (`data/monster-order.js`) instead of alphabetical.
- Small changes.

### v1.19
- New **Monster Drops** page under Monster Materials (alongside Afflicted Materials).
- Handles the real variety of MH Rise: Sunbreak reward structures, not just a uniform LR/HR/MR table: base-game species (LR + HR + MR), Sunbreak-exclusive species that only exist from High Rank onward, monsters with no Low Rank quest at all (Bazelgeuse, Jyuratodus), and Apex monsters (Anomaly Investigation only, no Capture Reward — replaced with a Field Drops section, since Apex monsters can't be captured).
- **Redesigned to match Afflicted Materials' UI**, per Craby's feedback that the first pass was too cluttered: a **Low Rank / High Rank / Master Rank pill filter** (identical pattern to the A1–A9 tier filter) replaces the old in-card rank tabs and narrows the monster list to only monsters that have that rank, exactly like the tier filter does for materials. The card shows a "Showing: (Rank)" badge in its hero, mirroring the Tier badge on a material card.
- Reward data is shown as a real **table**: one row per material, one column per category (Target / Capture / Carve / Break — only the columns that actually have data for that monster/rank are shown), so a material appearing in multiple categories is one row instead of repeating across four stacked sections. Scrolls horizontally on narrow screens rather than squeezing.
- **Search now matches material names, not just monster names** — searching "Wyvern Gem" finds every monster that drops it, with a "Drops: (item name)" hint under the matched monster.
- **Status: 78 of 78 large monsters added** - the Monster Drops dataset now covers every large monster in the matchup database. Data is sourced from public MH Rise: Sunbreak reference databases (Game8 and Kiranico); small monsters are a deliberate follow-up phase, not included yet.

### v0.18
- Refreshing the page no longer jumps back to Monster Matchups: the current section (Matchups / Afflicted Materials / Changelog), the selected material, the element filter, and the tier filter are all saved in localStorage and restored on load. (Weapon, selected monster, pins, and theme were already persisted.)
- The Pinned section moved from the top of the material list to the right column below the material details, using the previously empty space.
- "Unpin all" button in the Pinned panel header; it asks for confirmation (turns into "Sure?" for 2.5s) before clearing all pins.

### v0.17
- Mobile navigation redesigned as a hamburger menu: a compact top bar with a menu button opens the full sidebar as a slide-in drawer with backdrop; tapping a section or the backdrop closes it. (Previously the nav sections scrolled horizontally with no visual hint, so Afflicted Materials and Changelog were undiscoverable on phones.)
- Fixed layouts breaking on mid-size displays: between ~900–1120px (small laptops, landscape tablets) the fixed 350px monster list plus the sidebar crushed the matchup card. The layout now stacks into one column with a two-column monster list at those widths.
- Sidebar slims from 232px to 204px below 1280px viewports.
- The monster/material list height now adapts to the window height instead of a fixed 600px.
- Page headings wrap instead of squeezing the search toolbar; the material pin bar wraps on narrow screens.

### v0.16
- In-app changelog page (**App → Changelog** in the sidebar), driven by `data/changelog-data.js`; the footer version number now reads from it automatically.
- Fixed: the Afflicted search box lost keyboard focus after every character typed (the whole view re-rendered per keystroke; now only the material list refreshes).
- Removed the "Dragon-primary: use X LBG fallback" notes from the LBG matchup data.
- Removed the "Source on GitHub" link from the footer.
- README rewritten as full app documentation with this changelog.

### v0.15
- Footer with author credit (Craby), version, GitHub source link, and Capcom fan-content note.

### v0.14
- Navigation moved from a top navbar to a left sidebar (brand, Weapon group, Monster Materials group, theme toggle at the bottom). Collapses back to a compact top bar on narrow screens.
- Scrollbars are hidden everywhere; scrolling still works with wheel, trackpad, and keyboard.

### v0.13
- Afflicted materials can be pinned with an "amount needed" counter (stepper or direct input on the material card).
- Pinned materials appear in a **Pinned** section at the top of the material list with their ×amount, clickable even when filtered out.
- Pins and amounts persist in localStorage across sessions.
- A pinned material is removed from the main Material list while pinned (it lives only in the Pinned section, and returns on unpin).

### v0.12
- Dark mode with a header toggle; the choice is remembered and defaults to the system preference.
- Header nav is grouped and labeled: **Weapon** (Dual Blades / Spread Bow / RF Elemental LBG) and **Monster Materials** (Afflicted).
- Monster Sources on a material shows as a bulleted list when there is more than one source.
- Switched the whole app to the Poppins typeface (Google Fonts).

### v0.11
- Full visual redesign: light editorial theme (paper background, serif headings, hairline rules, single rust accent) replacing the dark gradient look.
- Matchup card now shows all data: shot type (Bow), ammo and handling (LBG), and per-monster notes.
- Afflicted material detail now shows the anomaly level range and uses the same card layout as matchups.
- Active tab highlights correctly on the Afflicted view.

### v0.10
- Slightly larger monster panel and rows for easier reading.
- List header now says **Monster** instead of showing the matchup count.
