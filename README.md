# MHRise: Sunbreak Guide

**Version: v0.16** · Author: [Craby](https://github.com/Crabyy)

A personal Monster Hunter Rise: Sunbreak reference web app. It answers two questions fast:

1. **Monster Matchups** — for a given monster, which weapon build to bring for **Dual Blades**, **Spread Bow**, or **rapid-fire elemental Light Bowgun**: recommended element, weapon, rampage decoration, priority hit zones, and (for LBG) ammo and handling skills.
2. **Afflicted Materials** — which anomaly materials drop from which monsters, the best farm target for each, and the anomaly level range. Materials can be **pinned** with an "amount needed" counter to use as a farming checklist.

> Monster Hunter Rise: Sunbreak © Capcom. This is an unofficial fan-made reference.

## Features

- Matchup browser per weapon (Dual Blades / Spread Bow / RF Elemental LBG) with element filter and live search
- Full matchup detail: recommended weapon, element, rampage decoration, priority targets, shot type (Bow), ammo + handling (LBG)
- Afflicted material database with tier filter (A1–A9) and live search
- Material pinning with per-material "amount needed" stepper; pinned items move to a dedicated Pinned section
- Light and dark themes (follows system preference, toggleable, remembered)
- Sidebar navigation; collapses to a top bar on mobile
- Everything persists in the browser (localStorage): weapon, selected monster, pins, theme

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

## Run locally

Serve the folder with any static server and open the printed URL, e.g.:

```bash
python -m http.server 8613
```

(Opening `index.html` directly from disk also works in most browsers.)

## Deployment

Deployed on **Vercel** from this repository: framework preset **Other**, no build command, output directory = repo root. Every push to `main` auto-deploys.

## Changelog

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
