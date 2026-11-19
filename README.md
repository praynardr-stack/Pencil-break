# Pencil Break

The lunch-table classic. Aim, swipe, and snap their pencil before they snap yours.

## What's in this folder
- `index.html` — the game
- `manifest.json` — app name, colors and icons (makes it installable)
- `sw.js` — offline support
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `icon-180.png` — app icons
- `privacy.html` — privacy policy page (Google Play requires a link to one)

## Put it online (GitHub Pages)
1. On github.com, create a new **public** repository named `pencil-break`.
2. Tap **Add file → Upload files** and upload **everything in this folder** (keep the folder layout the same).
3. Go to **Settings → Pages**, set Source to **Deploy from a branch**, pick **main** and **/(root)**, and save.
4. After a minute or two the game is live at:
   `https://YOUR-GITHUB-NAME.github.io/pencil-break/`

## Make the Android app
1. Open **pwabuilder.com** and paste the link above.
2. Choose **Package for stores → Android**, then download the package.
3. Upload the `.aab` file from that download to the Google Play Console.
4. Keep the signing key file PWABuilder gives you. You need it for every future update.

## Before you submit
- Open `privacy.html` and replace `YOUR-EMAIL@example.com` with your email.
- Privacy policy link for Play Console: `https://YOUR-GITHUB-NAME.github.io/pencil-break/privacy.html`
- When you upload a new version of the game, change `pencil-break-v1` in `sw.js` to `pencil-break-v2` (then v3, and so on) so players get the update.
