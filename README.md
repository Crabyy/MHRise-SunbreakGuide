# Sunbreak Matchups Native v0.15

Personal Monster Hunter Rise: Sunbreak matchup reference for Dual Blades, Spread Bow, and rapid-fire elemental LBG.

Changes in v0.15:
- Footer with author credit (Craby), version, GitHub source link, and Capcom fan-content note.

Changes in v0.14:
- Navigation moved from a top navbar to a left sidebar (brand, Weapon group, Monster Materials group, theme toggle at the bottom). Collapses back to a compact top bar on narrow screens.
- Scrollbars are hidden everywhere; scrolling still works with wheel, trackpad, and keyboard.

Changes in v0.13:
- Afflicted materials can be pinned with an "amount needed" counter (stepper or direct input on the material card).
- Pinned materials appear in a **Pinned** section at the top of the material list with their ×amount, clickable even when filtered out.
- Pins and amounts persist in localStorage across sessions.
- A pinned material is removed from the main Material list while pinned (it lives only in the Pinned section, and returns on unpin).

Changes in v0.12:
- Dark mode with a header toggle; the choice is remembered and defaults to the system preference.
- Header nav is grouped and labeled: **Weapon** (Dual Blades / Spread Bow / RF Elemental LBG) and **Monster Materials** (Afflicted).
- Monster Sources on a material shows as a bulleted list when there is more than one source.
- Switched the whole app to the Poppins typeface (Google Fonts).

Changes in v0.11:
- Full visual redesign: light editorial theme (paper background, serif headings, hairline rules, single rust accent) replacing the dark gradient look.
- Matchup card now shows all data: shot type (Bow), ammo and handling (LBG), and per-monster notes.
- Afflicted material detail now shows the anomaly level range and uses the same card layout as matchups.
- Active tab highlights correctly on the Afflicted view.

Changes in v0.10:
- Slightly larger monster panel and rows for easier reading.
- List header now says **Monster** instead of showing the matchup count.
