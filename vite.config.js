import { readFileSync } from "node:fs";
import { defineConfig } from "vite";

// Each <!-- illos:name --> comment in index.html becomes the inline SVG from illos/name.svg,
// so the illustrations read the page's colours (the --illos-* variables in src/style.css) and follow the theme switch.
// It runs after Vite's own HTML pass, so the illustrations' inline styles reach the page untouched.
const inlineIllos = {
  name: "inline-illos",
  transformIndexHtml: {
    order: "post",
    handler: (html) =>
      html.replace(/<!--\s*illos:([\w-]+)\s*-->/g, (_, name) =>
        readFileSync(new URL(`./illos/${name}.svg`, import.meta.url), "utf8").trim()
      ),
  },
};

export default defineConfig({
  plugins: [inlineIllos],
  server: { port: 4883 },
  preview: { port: 4883 },
});
