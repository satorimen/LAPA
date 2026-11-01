---
name: LAPA
description: A soft golden 3D lynx, charcoal app chrome, white working panels, and lime actions.
colors:
  canvas: "#f2f4ed"
  paper: "#ffffff"
  charcoal: "#171e19"
  charcoal-hover: "#303a30"
  sage: "#e2f0d6"
  lime: "#c2f36b"
  hero: "#b5da91"
  ink: "#1b211c"
  muted: "#5f695d"
  line: "#dbe1d5"
  urgent: "#ad3525"
  field: "#f7f9f3"
  focus: "#477e25"
typography:
  display:
    fontFamily: "Rubik, sans-serif"
    fontSize: "clamp(2.5rem, 4vw, 3.625rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  display-mobile:
    fontFamily: "Rubik, sans-serif"
    fontSize: "clamp(2rem, 9vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Rubik, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.375rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Rubik, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Rubik, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Rubik, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.6
  button:
    fontFamily: "Rubik, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  field: "14px"
  action: "16px"
  panel: "24px"
  composer: "28px"
  hero: "32px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
  3xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.action}"
    padding: "15px 20px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.charcoal-hover}"
    textColor: "{colors.paper}"
  button-next:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.charcoal}"
    typography: "{typography.button}"
    rounded: "{rounded.action}"
    padding: "15px 22px"
    height: "56px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.charcoal}"
    typography: "{typography.button}"
    rounded: "{rounded.action}"
    padding: "15px 20px"
    height: "56px"
  field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "15px 16px"
  detail-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "6px 24px"
---

# Design System: LAPA

## Overview

**Creative North Star: "A friendly workshop"**

The user's two redesign references define the current visual world: a premium, soft 3D golden and cream lynx, paired with charcoal app chrome, generous white working panels, large near-black typography, and fresh green/lime emphasis inspired by the supplied ToyCAD interface. The mascot brings warmth; clear labels and comfortable controls make the handyman workflow feel straightforward.

This direction replaces the earlier cream/forest, hand-inked hoodie illustration. Keep the character friendly and tactile, with full ear tufts and its greeting paw visible. Product tasks and local prototype limits remain in PRODUCT.md and `.impeccable/surfaces/app.md`.

**Key Characteristics:**

- Charcoal navigation around white working surfaces on a pale green-gray canvas.
- A fresh green hero and lime next/send actions.
- One unclothed golden and cream 3D lynx with soft studio shading.
- Rubik across Hebrew, Latin, and Cyrillic, with clear size and weight hierarchy.
- Rounded panels, readable rows, and generous touch targets.

## Colors

The normative values above match `src/app/globals.css`. Legacy CSS variable names `--cream`, `--green`, `--orange`, and `--leaf` map to canvas, charcoal, lime, and hero respectively; their names do not restore the earlier palette.

### Primary

- **Charcoal** anchors the header, master navigation, selected filters, and ordinary primary actions. Its hover shade signals interaction.
- **Lime** highlights the intake next action, send controls, selected language, and selected master destination.

### Secondary

- **Fresh green hero** supports the mascot and introductory copy; **sage** provides quiet hover and supporting selection fills.
- **Urgent** identifies urgent and destructive states, always alongside readable labels or icons.

### Neutral

- **Canvas** surrounds the workspace; **paper** separates composers, request lists, detail panels, and dialogs.
- **Ink** carries text; **muted** carries secondary explanations and metadata.
- **Line** divides structured content. **Field** distinguishes editable form surfaces.
- **Focus** provides visible outlines on light backgrounds; charcoal chrome uses a lime focus outline.

**The Readable Contrast Rule.** Keep text and state labels legible independently of color. Checked foreground/background pairs are white on charcoal (16.99:1), ink on canvas (14.79:1), muted on canvas (5.17:1), hero supporting text on green (6.99:1), and charcoal on lime (13.21:1). These checks describe the named pairs, not every possible token combination.

## Typography

Rubik is self-hosted through `@fontsource/rubik`, with Hebrew, Latin, and Cyrillic subsets at weights 400, 500, 600, and 700. The wordmark is bold and remains left-to-right. Headings use tight tracking and balanced wrapping; body copy is open and calm.

Use the display roles for the home prompt, headline for ordinary page titles, title for sections, body for reading and form values, label for form labels, and button for full-width actions. Tablet home headings use 2.625rem; mobile page headings use 1.875rem. At the narrowest breakpoint the home heading is 2rem. Body remains 1rem at the root, form text never drops below 1rem, and the smallest supporting metadata is 0.75rem. Individual mobile supporting paragraphs may use 0.875–0.9375rem. Do not shrink field text to make a small layout fit.

**The Clear Hierarchy Rule.** Give the task heading, editable content, and next action distinct size and spacing before adding decorative emphasis.

## Layout

Standard content is centered at a maximum of 740px, home at 1200px, master at 920px, chat at 800px, and phone/master entry at 536px. The header inner area is capped at 1240px, with a 92px minimum height plus the top safe area. Standard desktop content uses 32px horizontal padding; the header uses 40px.

Above 900px, the home hero and writing workspace form two columns with a 24px gap. At 900px and below, home content stacks into a single column, capped at 700px; the shorter hero arranges copy and character side by side internally. At 600px and below, content uses 20px side padding, the header has an 82px minimum height, and scheduling fields stack. At 380px and below, content padding reduces to 16px and paired fields stack. Master statistics use four columns on desktop and two on smaller screens. Request metadata and status stack within each row on mobile.

Use logical properties for space and alignment. Hebrew is RTL; English and Russian are LTR. Phone numbers, the wordmark, and the language switch remain LTR. Directional action and back icons adapt to the locale. Wrap long content without hiding essential controls.

**The Comfortable Reach Rule.** Interactive targets are at least 44px, full-width primary actions at least 56px, and form text at least 16px. Treat these as minimums, allowing content and text scaling to increase height.

The master navigation floats in a fixed charcoal bar above the bottom safe area. Reserve 112px plus the safe area beneath master content and toasts. Sticky form actions and chat replies also account for the safe area. Keep scrollable content reachable above fixed controls; the narrow calendar uses its available width to preserve day targets.

## Elevation & Depth

Color blocks and generous spacing establish most hierarchy. White panels remain quiet; the composer has a faint shadow (`0 10px 36px #1a291108`). The fixed master bar uses `0 10px 32px #14251426`; dialogs use `0 24px 80px #12221925`. Request rows rely on dividers rather than individual shadows. The mascot supplies soft dimensional texture without turning controls into 3D objects.

Motion is limited to the brief startup mascot greeting, paw loading feedback, and a short toggle transition. Hover states change fill directly. Under `prefers-reduced-motion: reduce`, remove animation, transitions, and smooth scrolling.

## Shapes

Controls are comfortably rounded: fields use the field radius, full-width actions use the action radius, and request/detail panels use the panel radius. Desktop composers and dialogs use the composer radius; the hero uses the largest radius. Mobile hero/composer radii reduce to 26px/24px, and detail/list panels to 22px. Icon controls use 14px corners; status badges use 10px. A circular avatar, greeting check, and photo removal controls are purposeful exceptions. Preserve the lynx silhouette using contained transparent imagery.

## Components

### Buttons

Ordinary primary actions are charcoal with white text. The intake next action and chat send use lime with charcoal text. Secondary actions are white with a quiet border; destructive actions use urgent text with a pale red surface and border. Full-width buttons have a minimum height of 56px. Icon actions are normally 48px square, reducing to 44px in compact contexts. Disabled next/send actions use a pale neutral fill and remain distinguishable from enabled actions. Shared keyboard focus uses a 3px outline with a 4px offset.

### Inputs and composer

Fields use a pale fill, a quiet green-gray stroke, a 54px minimum input/select height, and 1rem text. Their stroke strengthens on focus. The white home composer groups a visible label, unframed textarea, attachment action, photo count, and full-width next action. Its focus-within outline surrounds the writing surface. Photo thumbnails offer separate 44px removal targets and a full-screen preview.

### Lists, filters, and status

Group requests in a white rounded list with divided rows. Each row provides an icon, title, secondary metadata, status, and optional urgency/demo labels. Filters have quiet outlines until selected, then fill charcoal with white text. Status badges pair distinct pale fills with readable labels. Detail panels group icon-led rows behind subtle dividers. Preserve scanning order when mobile rows wrap.

### Navigation and overlays

The sticky charcoal header holds menu, centered wordmark, and a language switch with 44px targets and a lime selected state. A pale canvas drawer holds secondary navigation. Master views use the fixed charcoal navigation bar with lime selection. Dialogs are white and rounded, centered on desktop and bottom aligned on mobile. Lightboxes use a dark full-screen backdrop. Overlays support keyboard dismissal, focus trapping and restoration, and internal scrolling.

### Illustration

Use `/assets/lynx.webp`, the transparent soft 3D golden and cream lynx, for identity, intake, empty, and outcome states. `public/assets/PROVENANCE.md` records the native-alpha master and web derivative. Place the mascot on fresh green introductory panels or neutral surfaces. Lucide supplies interface icons. Keep the mascot secondary to writing and essential information.

## Do's and Don'ts

- **Do** preserve the new charcoal, white, green, lime, and soft 3D lynx direction.
- **Do** use Rubik, logical layout properties, and correct direction for all three scripts.
- **Do** keep targets at least 44px, full-width primary actions at least 56px, and fields at least 16px.
- **Do** use labels, spacing, contrast, and visible focus to make actions easy to scan.
- **Do** reserve safe-area and fixed-navigation space and respect reduced motion.
- **Don't** restore the hand-inked hoodie mascot or the earlier cream/forest visual instructions.
- **Don't** add ToyCAD catalog or toy-shopping mechanics to the handyman workflow.
- **Don't** add extra figurative characters, heavy shadows on request rows, or decoration that competes with writing.
