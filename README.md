# Kestrine

A free landing page template for a made-up product called Kestrine, a document desk for specialty lenders in equipment finance, venture debt and franchise lending. It reads borrower files, tests covenants and drafts credit memos. It comes with five animated illustrations in the HUD style by [Illos](https://illos.dev), in light and dark.

The page has a hero with a covenant test illustration, three headline figures, a workflows section with a sticky index and four illustrated entries, a loan type picker that opens and closes, lender quotes, a security list, a contact form and a footer.

Kestrine is not a real company, and every lender, person and figure on the page is made up. Change the name, the copy and the numbers to your own.

## Run it

You need Node 18 or later.

```
npm install
npm run dev
```

Then open http://localhost:4883.

## Build it

```
npm run build
```

The finished site goes to `dist/`. It is plain HTML, CSS and JavaScript, so any static host can serve it. `npm run preview` serves `dist/` locally so you can check the build.

## What's inside

- `index.html` holds the page and all its copy.
- `src/style.css` holds the styles. Colours (light and dark), the spacing scale and the type scale are CSS variables at the top.
- `src/main.js` runs the theme switch, the mobile menu, the sticky index, the demo form and the illustrations.
- `illos/` holds the five animated illustrations as SVG files.
- `public/fonts/` holds Inter as a variable woff2 file, with its licence (SIL Open Font License).

Each illustration sits in the page as a comment such as `<!-- illos:covenant -->`. The build swaps the comment for the SVG inline, so the illustration can read the page's colours and follow the theme switch. To move an illustration, move its comment. Use each one once per page.

The illustrations take their colours from the `--illos-*` variables at the top of `src/style.css`, set once for light and once for dark. Change `--illos-accent` with `--accent` and every illustration follows.

## How the motion behaves

- Each illustration loops while it is on screen and pauses when it scrolls away.
- With reduced motion turned on in the system settings, each illustration shows one still frame, and the menu and loan type panels open without animating.
- Nothing else on the page moves on its own: no scroll effects, no carousels.

## Licence

The code is MIT. The animated illustrations are free to use in sites you build from this template, but not to redistribute on their own. See `LICENSE.md`.

## Credit

Animated illustrations by [Illos](https://illos.dev/?utm_source=kestrine-template&utm_medium=example). The footer carries a small "Animated assets by Illos" credit link; please keep it. More illustrations in the same style are at illos.dev, along with the skills that let your coding agent make new ones.
