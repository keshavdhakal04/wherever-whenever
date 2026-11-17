# Wherever, whenever.

A one-page personal website, opened by a QR code on the back of a watch.

## Update the location

Edit **`src/config/location.ts`** (the only file you need to touch):

```ts
export const LOCATION = {
  latitude: 45.4215,
  longitude: -75.6972,
  updatedAt: "November 17, 2026",
  label: "Here",
};
```

Both map buttons and the coordinates on the page update automatically.
Out-of-range values disable the buttons instead of opening a wrong place.

## Run

```bash
npm install
npm run dev      # local preview
npm test         # map URL tests
npm run build    # production build in dist/
```

## Deploy (so the QR code has a permanent address)

Push to GitHub and import into Vercel, Netlify or Cloudflare Pages
(build command `npm run build`, output directory `dist`). Use a custom
domain for the QR code so the link never changes. To update the location
later: edit the file, commit, and the host redeploys in about a minute.
