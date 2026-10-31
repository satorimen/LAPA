# LAPA — local PWA prototype

Mobile-first interactive prototype based on the supplied LAPA reference. Next.js 16, React 19, TypeScript, self-hosted Rubik, Lucide icons, IndexedDB. No accounts or remote services are required.

## Run

Node.js 24 LTS and npm:

```sh
cd /workspace/LAPA
npm ci
npm run dev
```

Development server uses port 3000. For service worker and offline testing, use the production build:

```sh
npm run build
npm start
```

Deploy to a Node.js host with HTTPS for PWA installation. Localhost is also a secure browser context. Chrome/Android: browser menu → Install app. iOS Safari: Share → Add to Home Screen. Installation availability depends on browser and device.

## Try the prototype

1. First launch is Hebrew. Switch HE / EN / RU in the header.
2. Enter an Israeli contact number, e.g. `050-123-4567`. It is not verified and is not a login credential.
3. Describe a problem, optionally attach up to two photos. A clearly labelled local demonstration asks one relevant question using keyword rules. It is **not AI**, does not understand images and is not a medical/safety or technical diagnosis.
4. Review and edit the request. Fill city, street and house. Select urgency; nonurgent requests require a future Israeli time window.
5. Save the request locally. No request is sent to an actual handyman.
6. Hold the header LAPA logo for **7 seconds**. Select **Open demo workspace**. Server login fields are intentionally disabled; there is no real authentication.
7. Open the same request, accept it, start work and mark work complete. Return to client through the menu and confirm completion.
8. Master settings can add synthetic sample requests. Sample phone/contact actions do not place calls. Calendar shows accepted/in-progress work. Master private notes are separated from the client presentation, but **are not security-protected in this local prototype**.

The master session is memory-only; reload requires re-entering demo mode. Three-hour inactivity locks the UI. Hidden entry is not an authorization boundary.

## Included

- Three short random splash motion variants with reduced-motion support.
- Hebrew-first RTL, English and Russian UI, local language preference.
- Contact validation/normalization, local saved name and addresses.
- Persistent single draft, resume/discard, photo compression to 1600px JPEG (metadata stripped through canvas), gallery/camera picker, photo removal/viewer.
- Editable structured preview, urgent/scheduled requests, local request history and filters.
- Client and master status lifecycle; editing/cancellation blocked once work starts.
- Local dashboard, calendar, settings, optional decline reason, private note and request copy.
- PWA manifest/icons, offline shell, private data kept in IndexedDB rather than service-worker cache. No localStorage credentials.
- Explicit user-controlled service worker updates, flushing draft before reload.

## Validation

```sh
npm run typecheck
npm test
npm run build
# Start production server separately, then:
npm run test:e2e
```

Playwright uses `/usr/bin/chromium` in this cloud machine. For another machine install Chromium with `npx playwright install chromium` and adjust `executablePath` in `playwright.config.ts`.

Unit tests cover Israeli phone normalization, allowed status transitions, edit restrictions, Israeli schedule logic, locale coverage and the local intake adapter. Browser tests cover complete client→master→client lifecycle, initial Hebrew/RTL, draft persistence, offline reload, photo processing and the two-photo limit.

## Structure and future connections

- `src/components/lapa.tsx`: app workflow/state and client/master screens.
- `src/components/ui.tsx`: reusable branded UI components.
- `src/lib/model.ts`: typed entities, state rules and explicit demo intake adapter.
- `src/lib/storage.ts`: IndexedDB persistence and photo optimization.
- `src/locales/messages.ts`: Hebrew/English/Russian UI strings.
- `public/sw.js`: allowlisted public app-shell cache.

This is a prototype, not the production-ready implementation described in the long brief. Supabase, server authorization/HttpOnly sessions, WebAuthn, actual AI, automatic translation, real push, scheduled urgent reminders, 24h closure, 90-day retention and official address autocomplete are **not connected or simulated as working services**. Contact details are not configured. There is no analytics or outbound data submission.

Future integration should replace browser request storage with a same-origin BFF repository and server-validated ownership/status transitions. Add Supabase migrations, private Storage with signed URLs, server-only AI provider validation/sanitization and cost controls, server sessions and WebAuthn, push subscription infrastructure and scheduled jobs. Keep local drafts/addresses in IndexedDB. Never deploy this prototype as a secure multi-user service.

Local records are shared only between client/master UI in the same origin/browser profile; separate devices do not synchronize. Clearing site data deletes everything. Browser storage may be evicted; no recovery is supported. Offline first launch before one online load is unsupported. HTTPS, real-device installation, Safari/iOS push and accessibility should be validated before release. Production privacy policy and store legal disclosures are outstanding.

## Artwork

The lynx illustration was generated for this prototype from the user's visual brief. Source and generation prompts are recorded in `public/assets/PROVENANCE.md`. Do not commit real client data or secrets.

## GitHub Pages

The repository contains `.github/workflows/pages.yml` for the `main` branch. Set repository **Settings → Pages → Source → GitHub Actions** once. The published address is `https://satorimen.github.io/LAPA/` after the workflow succeeds.

`npm run build:pages` exports `out/` with `/LAPA` as the default deployment prefix. `NEXT_PUBLIC_BASE_PATH` overrides the prefix. The manifest uses relative URLs; the worker derives its scope from its registration, and cache names are app-path-specific. Image paths and metadata share a compile-time deployment helper. The normal `npm run build` / `npm start` workflow remains a root-host Node deployment.

Run browser checks against a static server mounted at `/LAPA/` with `PLAYWRIGHT_BASE_URL=http://127.0.0.1:4173/LAPA/ npm run test:e2e`.
