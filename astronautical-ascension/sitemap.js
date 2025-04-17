// sitemap.js
import { create } from "xmlbuilder2";
import fs from "fs";
import path from "path";
import { glob } from "glob";
import { pages } from "./pages.js"; // deine statischen Seiten
import { videos } from "./videos.js"; // deine Video-Metadaten

const SITE_URL = "https://www.musicstudio-ziebart.de";

// 📄 Deine statischen Seiten definieren gilt hier für Markdown Seiten
const today = new Date().toISOString().split('T')[0];

// Markdown Blogposts sammeln
const postFiles = glob.sync("./src/pages/posts/*.md");
const posts = postFiles.map((file) => {
  const slug = path.basename(file, ".md");
  return `/posts/${slug}/`;
});

// URLs kombinieren: posts als Objekte einfügen
const urls = [
  ...pages,
  ...posts.map((post) => ({
    loc: `${SITE_URL}${post}`,
    changefreq: "weekly",
    lastmod: today,
  })),
];


// Videos zu URLs zuordnen (z. B. "/gitarre-videoanleitung/" oder "/keyboard-videoanleitung/")
const videosByUrl = {};
videos.forEach((video) => {
  const urlPath = video.loc.replace(SITE_URL, '');
  if (!videosByUrl[urlPath]) videosByUrl[urlPath] = [];
  videosByUrl[urlPath].push(video);
});

// Sitemap-Dokument aufbauen
const doc = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
  xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  "xmlns:video": "http://www.google.com/schemas/sitemap-video/1.1",
});

function formatDate(date) {
  return new Date(date).toISOString();
}

urls.forEach((entry) => {
  const urlEle = doc.ele("url");

  // Wenn 'entry' ein einfacher String (z. B. von posts) ist
  const loc = typeof entry === "string" ? `${SITE_URL}${entry}` : entry.loc;
  const changefreq = entry.changefreq || "weekly";
  const lastmod = entry.lastmod || today;

  urlEle.ele("loc").txt(loc);
  urlEle.ele("changefreq").txt(changefreq);
  urlEle.ele("lastmod").txt(lastmod);

  const urlPath = entry.loc
    ? entry.loc.replace(SITE_URL, "")
    : entry; // für Markdown-Posts

  const relatedVideos = videosByUrl[urlPath] || [];
  relatedVideos.forEach((video) => {
    const videoEle = urlEle.ele("video:video");
    videoEle.ele("video:thumbnail_loc").txt(video.thumbnail_loc);
    videoEle.ele("video:title").txt(video.title);
    videoEle.ele("video:description").txt(video.description);
    videoEle.ele("video:content_loc").txt(video.content_loc);
    videoEle.ele("video:publication_date").txt(formatDate(video.publication_date));
    if (video.duration) {
      videoEle.ele("video:duration").txt(video.duration.toString());
    }
  });
});

// XML schreiben
const xml = doc.end({ prettyPrint: true });
fs.writeFileSync("./dist/sitemap.xml", xml, "utf8");

console.log("✅ Sitemap erfolgreich erstellt: dist/sitemap.xml");
