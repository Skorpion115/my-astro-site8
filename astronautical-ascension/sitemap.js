// sitemap.js
import { create } from "xmlbuilder2";
import fs from "fs";
import path from "path";
// import glob from "glob";
import { glob } from "glob";
// import { pages } from "./pages.js"; // deine statischen Seiten
import { videos } from "./videos.js"; // deine Video-Metadaten

const SITE_URL = "https://www.musicstudio-ziebart.de";

// 📄 Deine statischen Seiten definieren
const today = new Date().toISOString().split('T')[0];

const pages = [
  {
    loc: SITE_URL, // oder `${SITE_URL}/` – beides geht
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/instrumentenkauf/`,
    changefreq: "weekly",
    lastmod: today, // ← hier wird's verwendet
  },
  {
    loc: `${SITE_URL}/blog/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/anmeldung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/thankyou/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/recall/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/danke-seite/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/honorar/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/unterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/faq/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/download/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/harmonielehre/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/Datenschutz/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/impressum/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/klavierunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/klavier-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/keyboardunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/keyboard-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/gitarrenunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/gitarre-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/e-bassunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/e-gitarrenunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/e-gitarre-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/e-gitarre-videoanleitung2/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/banjounterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/banjo-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/akkordeonunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/akkordeon-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/saxophonunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/querfloetenunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/klarinettenunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
];


// Markdown Blogposts sammeln
const postFiles = glob.sync("./src/pages/posts/*.md");
const posts = postFiles.map((file) => {
  const slug = path.basename(file, ".md");
  return `/posts/${slug}/`;
});

// URLs kombinieren
/*
const urls = [...pages, ...posts]; */

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
/*
urls.forEach((url) => {
  const urlEle = doc.ele("url");
  urlEle.ele("loc").txt(`${SITE_URL}${url}`); */

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
