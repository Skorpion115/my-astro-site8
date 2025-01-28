// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";


// Convert import.meta.url to __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.SITE_URL,

  devToolbar: {
    enabled: false,
  },
  
  build: {
    format: "directory", // Erzeugt `page/index.html` statt `page.html`
    // sourcemap: true, // Aktiviert Source Maps in Vite
    //chunkSizeWarningLimit: 3420 // Setze hier deine bevorzugte Grenze ein
  },

  vite: {
    resolve: {
      alias: {
        "@scripts": resolve(__dirname, "public/scripts"), // Alias für Scripts im public-Ordner
        "@": resolve(__dirname, "src"), // Alias für den src-Ordner
      },
    },
  },

  output: "static",
  adapter: netlify(),
  
    // Project root directory
  root: ".",

  outDir: "dist", // Ensure this is correctly set
  
  publicDir: "public",
  
  // site: "https://www.musicstudio-ziebart.de",

  trailingSlash: "always",

  markdown: {
    syntaxHighlight: "shiki", // Optional: Enables syntax highlighting with Shiki
    gfm: true, // Optional: Enables GitHub Flavored Markdown
    smartypants: true, // Optional: Smart typographic replacements
  },
  
});
