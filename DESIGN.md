---
name: LAPA
description: Warm cream, forest green, and an illustrated adult lynx.
colors:
  cream: "#fff9ed"
  paper: "#fffdf7"
  forest: "#103f32"
  forest-hover: "#1e5642"
  sage: "#e9eedc"
  orange: "#ee7e25"
  ink: "#23372e"
  muted: "#716d60"
  line: "#e6dfcf"
  urgent: "#ba3e25"
  focus: "#ed9a4c"
typography:
  display:
    fontFamily: "Rubik, sans-serif"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  display-mobile:
    fontFamily: "Rubik, sans-serif"
    fontSize: "38px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Rubik, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Rubik, sans-serif"
    fontSize: "15px"
    lineHeight: 1.5
  body-mobile:
    fontFamily: "Rubik, sans-serif"
    fontSize: "14px"
    lineHeight: 1.5
  button:
    fontFamily: "Rubik, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  field: "12px"
  panel: "16px"
  composer: "20px"
  composer-mobile: "17px"
  dialog: "22px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
  3xl: "32px"
  4xl: "44px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.cream}"
    typography: "{typography.button}"
    rounded: "{rounded.field}"
    padding: "13px 18px"
  button-primary-hover:
    backgroundColor: "{colors.forest-hover}"
    textColor: "{colors.cream}"
  button-secondary:
    textColor: "{colors.forest}"
    rounded: "{rounded.field}"
    padding: "13px 18px"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px 14px"
  detail-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "4px 20px"
---

# Design System: LAPA

## Overview

The user-supplied LAPA app reference is the visual authority. Warm cream surrounds a hand-inked adult lynx in a forest hoodie; dark green typography, a compact italic wordmark, an orange paw, and double chevrons carry the identity. The character feels capable and relaxed, with an editorial illustration style rather than a toy-like finish.

Controls are quiet and legible, with fine borders, restrained tonal fills, and generous space. The same visual language supports Hebrew, English, and Russian. Screen composition and prototype behavior are documented in `.impeccable/surfaces/app.md`.

**Key Characteristics:**

- Cream canvas and paper-colored fields.
- Forest green actions with small orange brand details.
- A single illustrated lynx character.
- Rubik across Hebrew, Latin, and Cyrillic.
- Rounded controls and divided request rows.

## Colors

The normative values above match `src/app/globals.css`.

### Primary

- **Forest** carries headings, the wordmark, primary buttons, active navigation, and selected filters. Forest hover deepens interactive feedback.

### Secondary

- **Orange** marks the paw, double chevrons, calendar activity dots, and small accents.
- **Sage** supports selection, soft hover backgrounds, and request icons.
- **Urgent** marks urgency and destructive actions; pair it with labels and icons.

### Neutral

- **Cream** is the page background; **paper** distinguishes editable and detailed surfaces.
- **Ink** is the body text; **muted** supports explanatory text.
- **Line** separates requests and form sections.
- **Focus** supplies the visible keyboard outline.

## Typography

Rubik is self-hosted through `@fontsource/rubik`, with Hebrew, Latin, and Cyrillic subsets at weights 400, 500, 600, and 700. The hierarchy uses weight and space rather than competing font families.

Home display headings use the display roles above; below the narrowest breakpoint they reduce to 34px. General page headings are smaller than the home prompt. Body copy reduces to the mobile role at the mobile breakpoint. Supporting metadata is typically 10–13px. Keep the wordmark italic and left-to-right in every locale.

## Layout

The application uses one centered content column. Standard content has a maximum width of 620px, home and master views 700px, phone entry 490px, and master entry 460px. The header inner area is capped at 1160px. These widths include internal padding.

Desktop content typically uses 24px horizontal padding; mobile uses 22px, reducing to 17px at 360px and below. The header is 91px tall on larger screens and 74px on mobile. At 1000px and above the header wordmark is centered independently of the outer controls. Mobile styles apply at 600px and below. Safe-area insets protect the header and bottom actions.

Use logical properties for directional space and text alignment. Hebrew is right-to-left; English and Russian are left-to-right. Phone numbers, the wordmark, and the language switch remain left-to-right. The mobile composer stacks scheduling fields into one column; request rows compact their metadata without turning into card grids.

## Elevation & Depth

Fine warm rules and tonal backgrounds establish most hierarchy. The composer has a faint resting shadow (`0 6px 30px #3c3a2505`) and a gentle focus shadow (`0 5px 25px #103f3209`). Drawers and dialogs use stronger diffuse shadows and dimmed, blurred backdrops. Toasts sit above the content with a forest fill. Avoid adding elevation to ordinary request rows.

## Shapes

Inputs and full-width actions share gently rounded corners. Detail panels use the panel radius; the home composer is softer, with its mobile radius reduced alongside its padding. Send actions are circular; request status badges have compact rounded corners. The calendar uses a rounded paper container with square day cells and rounded selection fills. Preserve full ears and paws when presenting the transparent lynx artwork.

## Components

### Buttons

Primary actions use forest and cream; secondary actions use a forest border; destructive actions use urgent text and a warm red border. Full-width actions have a minimum height of 51px. Icon actions are generally 44px square. Hover feedback changes the fill over 180ms. The shared keyboard treatment is a 3px focus outline with a 4px offset. Disabled controls lower their opacity.

### Inputs and composer

Fields use paper, a line-colored border, and the field radius. Inputs and selects are at least 48px tall. The home composer groups the unframed text area, attachment affordance, and circular send button inside one paper outline. Focus changes its border and shadow. Photo thumbnails provide individual removal controls and a full-screen preview.

### Lists, filters, and status

Requests are divided rows with an icon, title, secondary metadata, status badge, and optional urgency or demo labels. Filters use quiet outlines until selected, when they fill forest. Status badges use distinct pale sage, green, amber, and red fills with text labels. Detail panels group icon-led rows behind warm dividers.

### Navigation and overlays

The sticky header contains a menu, the wordmark, and a compact segmented language switch. A cream drawer holds secondary navigation. Master views add a sticky bottom navigation bar. Dialogs center in a dimmed backdrop; photo previews use a dark full-screen lightbox. Overlays support keyboard dismissal and focus management.

### Illustration and motion

Use `/assets/lynx.webp`, the existing transparent hand-inked lynx, for identity, intake, empty, and outcome states. Asset provenance is in `public/assets/PROVENANCE.md`. Lucide supplies interface icons. Startup uses one of three short mascot animations with orange paw steps; drawers and toasts enter briefly. Honor `prefers-reduced-motion` by removing transitions and animation.

## Do's and Don'ts

- **Do** preserve the cream, forest, and illustrated lynx identity from the reference.
- **Do** use Rubik and logical layout properties for all three supported scripts.
- **Do** pair urgency and request states with readable labels.
- **Do** keep request lists orderly and controls visibly focusable.
- **Don't** introduce additional figurative brand characters.
- **Don't** use decorative marketing grids inside this application.
- **Don't** replace quiet outlines and tonal surfaces with heavy shadows.
