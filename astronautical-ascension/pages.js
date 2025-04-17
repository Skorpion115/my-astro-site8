const SITE_URL = "https://www.musicstudio-ziebart.de";
const today = new Date().toISOString().split("T")[0];

export const pages = [
  {
    loc: `${SITE_URL}/`, // oder `${SITE_URL}/` – beides geht
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
