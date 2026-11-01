# LAPA application

Mode: **Operate**. Route: `/`. Platform: mobile-first Next.js PWA with an adaptive desktop workspace. Authority: the user's new soft 3D mascot reference and ToyCAD interface reference explicitly replace the earlier cream/forest illustration direction. Charcoal navigation, rounded white work panels, large near-black typography, green hero surfaces, and lime actions carry the redesign. Source CSS and components remain the implementation truth; DESIGN.md records the shared visual system.

## User task and composition

A client describes a household problem, answers one diagnostic question, reviews the request, supplies an address and urgency or preferred time, and submits it to the local demonstration. The entry screen places a short prompt and premium soft golden/cream 3D lynx on a green hero panel beside a white labeled writing surface. A separate attachment target, photo count, and full-width lime next action make the input sequence explicit. Above 900px, hero and composer sit in two columns; at 900px and below they stack, with a shorter hero that shares space between copy and mascot. Subsequent screens prioritize form sections, request details, and divided lists. The visual reference supplies interface language; it does not introduce catalog or shopping behavior.

On first use, the prototype collects an Israeli phone number without SMS verification. Hebrew is the initial locale; Hebrew, English, and Russian can be selected in the header and are saved locally. Hebrew switches document direction to RTL. The phone input stays LTR.

## Implemented behavior

- Intake supports a description and up to two JPEG, PNG, or WebP photos. Photos are compressed on the device; the local diagnostic provider uses text keywords and does not interpret images. One question and answer lead to a populated, editable preview.
- Preview requires an address and, for ordinary requests, a future date/time window in Asia/Jerusalem. Urgent requests skip ordinary scheduling. Submission creates a local request and opens its status view.
- Clients can inspect history, maintain saved addresses and contact details, resume a draft, and use available edit/cancel/completion actions. The lifecycle is received → accepted → in progress → awaiting client confirmation → completed, with rejection and cancellation branches enforced by the model.
- Holding the header wordmark for seven seconds opens master entry; pointer and keyboard holds are supported. Real login inputs are disabled. Explicit demo access opens dashboard statistics, request filters, request details, state actions, a monthly calendar, and local work/notification preferences. Optional sample records are visibly marked as demo data.
- Drawers, modals, lightbox, inline errors, empty states, toasts, offline notice, and app-update notice provide feedback. Overlay focus is managed; reduced-motion settings remove animation.

## Prototype limits

This is an interactive local demonstration for a single handyman, with no backend, remote AI, authentication, push delivery, or cross-device synchronization. IndexedDB stores contact details, addresses, drafts, photos, requests, locale, and preferences on this browser/device. Clearing browser storage removes them. Master demo access is an interface state, not a security boundary. Notification settings are demonstrative and do not schedule or send notifications.

The PWA has a manifest, icons, and a production-only service worker. After an initial online production visit, the service worker caches the public app shell and static assets; drafts remain local. Submission is disabled while offline. Install prompts depend on browser support; the UI supplies instructions when a browser prompt is unavailable. No prices, marketplace listings, inventory-based booking, or ratings are part of this surface.


## Responsive and accessibility guidance

Keep at least 44px interactive targets, 56px full-width primary actions, 1rem form values, and 0.75rem minimum metadata. The root body uses 1rem Rubik; the home heading scales from 2rem on narrow phones to a 3.625rem desktop maximum. Maintain strong text contrast, visible keyboard focus, explicit field labels, and labeled request states. Hebrew uses logical spacing and RTL text flow while phone numbers, the wordmark, and language navigation remain LTR. Respect reduced motion.

The sticky charcoal header retains menu and language access. Mobile scheduling and narrow paired fields stack; request status wraps below its metadata. The fixed master navigation remains above the bottom safe area, with matching content and toast clearance. Sticky form actions, chat replies, and overlays must remain reachable on short screens and with enlarged text. Do not use the mascot to carry essential instructions.

## Browser evidence

Current redesign screenshots are `.impeccable/review/mobile.png`, `small.png`, `tablet.png`, `desktop.png`, `hebrew.png`, `chat.png`, `preview.png`, `received.png`, `master.png`, and `calendar.png`. These document the actual rendered app across intake, RTL, client outcome, and master/calendar states. Review screenshots together with the source and the current test report; an image alone does not establish functional or accessibility correctness.
