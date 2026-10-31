# LAPA application

Mode: **Operate**. Route: `/`. Platform: mobile-first Next.js PWA with a centered desktop workspace. Authority: the user-supplied cream/forest app reference. The screenshots in `.impeccable/review/` record mobile, desktop, Hebrew, and master examples; source CSS and components remain the implementation truth.

## User task and composition

A client describes a household problem, answers one diagnostic question, reviews the request, supplies an address and urgency or preferred time, and submits it to the local demonstration. The entry screen is a calm composition of sticky navigation, the illustrated lynx, a short prompt, one composer, and a small prototype notice. Subsequent screens prioritize form sections, request details, and divided lists.

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
