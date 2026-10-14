# Little Moments — Photobooth Studio

A private, browser-based photobooth for capturing, decorating, exporting, and saving photo strips. Photos and saved sessions stay in your browser's local storage; the app has no photo-upload service or paid API.

## Run locally

Install Node.js 18 or newer, then from this folder run:

```sh
npm run dev
```

Open the printed address (normally <http://localhost:5173>) in a current Chrome, Edge, Firefox, or Safari browser. Camera access requires `localhost` or HTTPS; opening `index.html` directly as a `file://` URL will not provide camera access. To use another port, set `PORT` before starting the server.

## Use on a phone

For a quick tryout, connect your phone and computer to the same Wi-Fi and open the `http://...` phone address printed by the server. The **Take a photo** button opens your phone's rear camera, and **Add photos** opens the photo picker. These work as uploads even though the local-network HTTP address cannot grant a phone browser direct live-camera access.

For live camera preview, app installation, and offline launch on your phone, host the static app on an HTTPS origin (for example, GitHub Pages or another static host with HTTPS), then visit that HTTPS address on the phone. Choose **Add to Home Screen** in Safari, or **Install app** in Chrome's browser menu. On iOS, select **Take a photo** if camera permission is unavailable or you prefer the built-in camera interface.

## Publish with GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` publishes the app to <https://deverahanz42-beep.github.io/photobooth/> whenever changes are pushed to `main`. After the first workflow run completes, enable **Settings → Pages → Build and deployment → Source: GitHub Actions** if Pages is not already configured for the repository.

```sh
npm run build
npm start
```

`npm run build` checks the JavaScript syntax. `npm start` serves the same app as `npm run dev`; there are no runtime package dependencies or compile step.

## Use the studio

1. **Choose your look:** select a frame, photo count, and filter. The **Customize your strip** preview updates immediately so you can check the design and layout before taking photos.
2. **Take your photos:** choose a camera filter for the live preview and captured photos, set the countdown, then capture or add pictures from your device. Replace or zoom individual shots in the review row.
3. **Keep your moment:** preview the result, optionally apply different filters to individual shots and add decorations, then download, print, or save to **My gallery**.

Use the step bar or Back/Continue buttons to move through the studio. Step 3 is available after at least one photo has been captured or added.

Camera trouble: check the browser's site permissions, confirm another app is not using the camera, and try the camera selector if you have multiple devices. Upload remains available without camera access. The mirror option changes only the live preview; saved captures are not mirrored.

## Frames and local data

Fifty-three original frame designs are defined as data in `FRAME_CATALOG` near the top of `app.js`, across classic, K-inspired, cute, couple, friends, seasonal, event, travel, nature, aesthetic, playful, and vintage categories. Designed frame treatments include botanical corner art, citrus slices, rainbow arches, scrapbook tape, neon outlines, waves, star fields, geometric borders, postage details, film perforations, aged-paper borders, and the Classic White editorial portrait layout. Add an entry with a unique `id`, `name`, `category`, layout (`strip`, `polaroid`, or `grid`), background/accent/ink colors, and a short label; optional `motif`, `detail`, and `design` fields add artwork to the composited export.

The filter picker includes 32 choices: original, monochrome, noir, warm film, honey, sunset, arctic, mint, faded print, espresso, rosy, lavender, glow, matte, cinematic, retro, disposable camera, instant print, analog film, grainy film, light leak, and more. Apply a photo filter to all photos or select an individual shot from the **Apply to** menu. A separate **Camera filter** applies to the live camera preview and is baked into photos as they are captured. The selected photo filters and camera filter are composited into PNG/JPEG downloads, printing, and saved sessions. Film grain, vignette, and light-leak effects are drawn into vintage film exports.

Frame favorites and a few lightweight settings use `localStorage`. Saved sessions, including original photo blobs, are stored in IndexedDB. Browser storage limits vary by device; if saving fails, remove older sessions or export your keepsake first. **Clear local data** in My gallery deletes saved projects and favorites. Clearing browser site data also removes them.

The app is designed to work offline after its files are available locally, except for the optional web fonts. It does not currently generate QR links because there is no hosted sharing service.
