import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { create } from 'xmlbuilder2';

const SITE_URL = process.env.SITE_URL || "https://www.musicstudio-ziebart.de"; // Fallback, falls Umgebungsvariable nicht gesetzt ist
// Seiten-URLs
const pages = [
  { url: `${SITE_URL}`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/instrumentenkauf/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/blog/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/anmeldung/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/thankyou/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/danke-seite/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/recall/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/honorar/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/unterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/faq/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/download/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/harmonielehre/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/impressum/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/datenschutz/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/klavierunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/klavier-videoanleitung/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/keyboardunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/keyboard-videoanleitung/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/gitarrenunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/gitarre-videoanleitung/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/e-bassunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/e-gitarrenunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/e-gitarre-videoanleitung/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/e-gitarre-videoanleitung2/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/banjounterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/banjo-videoanleitung/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/akkordeonunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/akkordeon-videoanleitung/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/saxophonunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/querfloetenunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/klarinettenunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/blog/banjo-daempfer/`, changefreq: "monthly", lastmod: new Date() },
  { url: `${SITE_URL}/blog/d-tuner`, changefreq: "monthly", lastmod: new Date() },
  { url: `${SITE_URL}/blog/gitarre-stimmen/`, changefreq: "monthly", lastmod: new Date() },
  { url: `${SITE_URL}/blog/mundharmonika/`, changefreq: "monthly", lastmod: new Date() },
  { url: `${SITE_URL}/blog/website-erstellen/`, changefreq: "monthly", lastmod: new Date() },
];

// Video-Informationen
const videos = [
  {
    loc: `${SITE_URL}/banjo-videoanleitung/`,
    title: "Flint Hill Special - Banjo Lesson",
    description:
      "Lerne das Banjostück 'Flint Hill Special von Earl Scruggs'. Es wird in dem Stück ein sogenannter D-Tuner verwendet. Ich erkläre genau wie man so einen D-Tuner benutzt und einstellt.",
    content_loc: "https://www.youtube.com/embed/R75ZetEwmtw",
    thumbnail_loc: "https://i.ytimg.com/vi/R75ZetEwmtw/hqdefault.jpg",
    publication_date: "2023-06-17T14:00:00+02:00",
    duration: "PT13M32S",
  },
  {
    loc: `${SITE_URL}/banjo-videoanleitung/`,
    title: "Train 45 - Bluegrass Banjo",
    description: "Lerne das Banjostück Train 45 - Bluegrass Banjo.",
    content_loc: "https://www.youtube.com/embed/uo5ojnmRHPo",
    thumbnail_loc: "https://i.ytimg.com/vi/uo5ojnmRHPo/hqdefault.jpg",
    publication_date: "2023-05-26T14:00:00+02:00",
    duration: "PT2M42S"
  },
  {
    loc: `${SITE_URL}/banjo-videoanleitung/`,
    title: "Banjo Beginner Lesson 2",
    description: "Lerne das Banjostück 'Cripple Creek'. Mit diesem Stück hat Earl Scruggs als kleiner Junge schon einen Preis gewonnen.",
    content_loc: "https://www.youtube.com/embed/WmYlSqvpUkw",
    thumbnail_loc: "https://i.ytimg.com/vi/WmYlSqvpUkw/hqdefault.jpg",
    publication_date: "2023-04-05T14:00:00+02:00",
    duration: "PT2M47S"
  },
  {
    loc: `${SITE_URL}/klavier-videoanleitung/`,
    title: "PRAELUDIUM BMV 927 - Johann Sebastian Bach",
    description: "Klassisches Klavierstück auswendig lernen! Für mich ist dies eins der schwierigsten Dinge. Dieses Stück hat nur eine Seite, da geht es noch einigermaßen.",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE",
    thumbnail_loc: "https://i.ytimg.com/vi/vxX0WiQhSUE/hqdefault.jpg",
    publication_date: "2021-05-20T14:00:00+02:00",
    duration: "PT02M34S"
  },
  {
    loc: `${SITE_URL}/klavier-videoanleitung/`,
    title: "Aus der neuen Welt - Antonin Dvorak",
    description: "Klavier Tutorial für das klassische Stück von Antonin Dvorak. Ich spiele hier nur der zweiten Satz das 'Largo'. Antonin Dvorak hat es für Orchester aber auch für Klavier zu vier Händen geschrieben. Ich habe es für 2 Händen umgeschrieben.",
    content_loc: "https://www.youtube.com/embed/ytcQ-I1BTNk",
    thumbnail_loc: "https://i.ytimg.com/vi/ytcQ-I1BTNk/hqdefault.jpg",
    publication_date: "2021-04-21T00:00:00+02:00",
    duration: "PT12M59S",
  },
  {
    loc: `${SITE_URL}/e-gitarre-videoanleitung/`,
    title: "Joe Satriani - Ten Words Guitar Lesson+Tab",
    description: "Lerne das Gitarrenstück 'Ten Words' von Joe Satriani mit dieser detaillierten Gitarrenstunde.",
    content_loc: "https://www.youtube.com/embed/8ucTzPOBzAo",
    thumbnail_loc: "https://i.ytimg.com/vi/8ucTzPOBzAo/hqdefault.jpg",
    publication_date: "2021-07-17T14:00:00+02:00",
    duration: "PT3M59S"
  },
  {
    loc: `${SITE_URL}/e-gitarre-videoanleitung2/`,
    title: "Take Good Care Of My Baby - Bobby Vee Cover",
    description: "Lerne das Gitarrenstück 'Take Good Care Of My Baby' von Bobby Vee mit dieser detaillierten Gitarrenstunde.",
    content_loc: "https://www.youtube.com/embed/nUC_b1L_IM4",
    thumbnail_loc: "https://i.ytimg.com/vi/nUC_b1L_IM4/hqdefault.jpg",
    publication_date: "2025-01-04T14:00:00+02:00",
    duration: "PT17M52S"
  },
  {
    loc: `${SITE_URL}/gitarre-videoanleitung/`,
    title: "Catch The Wind - Donovan",
    description: "Ein besonders schönes Gitarrenstück ist 'Catch The Wind' von Donovan. Es eignet sich sehr gut, um es alleine auf der Gitarre zu spielen. Im Video hörst du die Originalaufnahme von Donavan. Du möchtest das Stück gerne selbst lernen? Dann schreib mir! Ich helfe dir gerne beim Einstieg und gebe dir Tipps zum Nachspielen!",
    content_loc: "https://www.youtube.com/embed/9yQKDj_V4Gk",
    thumbnail_loc: "",
    publication_date: "2018-04-18T14:00:00+02:00",
    duration: "PT03M03S"
  },
  {
    loc: `${SITE_URL}/gitarre-videoanleitung/`,
    title: "Beatles - Yesterday Gitarre Tutorial",
    description: "Lernevideo und Gitarrentutorial für das Gitarrenstück 'Yesterday von den Beatles'. Dieses Stück kann man wunderbar alleine spielen, also ohne Bass, Drums usw. Die Gitarre wird in einer Double Flatstimmung umgestimmt.",
    content_loc: "https://www.youtube.com/embed/oqko5Mk_UBk",
    thumbnail_loc: "https://i.ytimg.com/vi/oqko5Mk_UBk/hqdefault.jpg",
    publication_date: "2023-07-01T14:00:00+02:00",
    duration: "PT12M41S"
  },
  {
    loc: `${SITE_URL}/gitarre-videoanleitung/`,
    title: "City Of New Orleans - Arlo Guthrie",
    description: "Ein schönes Beispiel für ein Fingerpicking mit Gitarre und Gesang: Ich habe mir damals den Song von Arlo Guthrie rausgesucht. Es heißt 'City Of New Orleans'. Er selbst spielt übrigens bei diesem Song ein Klavier. Es ist ein Lernvideo und Gitarren Tutorial. Dieses Stück war Arlo Guthries einziger Welthit. Als damals Steve Goodman, der Komponist des berühmten Songs zu ihm sagte: Ich hätte da einen guten Hit für dich, sagte Arlo Guthrie: 'Ich hasse Hits!'. Warum das weiß ich nicht.",
    content_loc: "https://www.youtube.com/embed/yEF6e2ZSZ0k",
    thumbnail_loc: "https://i.ytimg.com/vi/yEF6e2ZSZ0k/hqdefault.jpg",
    publication_date: "2021-08-26T14:00:00+02:00",
    duration: "PT4M49S"
  },
  {
    loc: `${SITE_URL}/keyboard-videoanleitung/`,
    title: "Hammond Organ - Hammond Flip - Klaus Wunderlich",
    description: "Keyboard Tutorial über eine Klaus Wunderlich Komposition. Das Stück heißt 'Hammond Flip'.",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=244HlpB3JoA",
    thumbnail_loc: "https://i.ytimg.com/vi/y2KtSx3-W3w/hqdefault.jpg",
    publication_date: "2021-07-08T14:00:00+02:00",
    duration: "PT3M6S"
  },
  {
    loc: `${SITE_URL}/keyboard-videoanleitung/`,
    title: "Hammond Organ Komponist: Klaus Wunderlich Titel: H-schisch",
    description: "Ein Keyboard Tutorial über den Komponist Klaus Wunderlich. Das Stück das ich spiele heißt 'H-schisch'. Das ist in einem Notenheft von ihm mit 12 Kompositionen. Klaus Wunderlich brachte ein Notenbuch heraus mit 12 Kompositionen von ihm. Für jede Tonart komponierte er ein Stück. Ich habe das Stück in H Durgewählt. Ich habe es mit einem HAMMOND XM-1 Expander aufgenommen.",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=y2KtSx3-W3w",
    thumbnail_loc: "https://i.ytimg.com/vi/y2KtSx3-W3w/hqdefault.jpg",
    publication_date: "2023-05-19T14:00:00+02:00",
    duration: "PT4M16S"
  },
  {
    loc: `${SITE_URL}/keyboard-videoanleitung/`,
    title: "Hammond Organ Komponist: Klaus Wunderlich Titel: E-Hering",
    description: "Noch ein Stück aus dem Heft 12 Kompositionen von Klaus Wunderlich. Ein Keyboard Tutorial über den Komponisten Klaus Wunderlich. Titel: E-Hering.",
    content_loc: "https://www.youtube.com/embed/t0tOQfL2qSE",
    thumbnail_loc: "https://i.ytimg.com/vi/t0tOQfL2qSE/hqdefault.jpg",
    publication_date: "2023-04-12T14:00:00+02:00",
    duration: "PT5M38S"
  },
  {
    loc: `${SITE_URL}/harmonielehre/`,
    title: "Notenschrift",
    description: "Ich möchte mit diesem Video die Notenschrift erklären die ja doch so wichtig für die Musik ist! Ich möchte den Schülern, Musikinteressierte oder Hobbymusiker auf diese Weise das Noten lesen und die Harmonielehre ein bisschen näher bringen! Die Videos sind so aufgebaut das man zuerst die Noten lesen kann, dann kommen die Intervalle, dann die Dreiklänge und zuletzt die Funktiontheorie. Also bitte nach der Reihenfolge lernen! Ich werde mit dem ersten Video das Noten lesen erklären.",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=Hu4ef1IkuG0",
    thumbnail_loc: "https://i.ytimg.com/vi/Hu4ef1IkuG0/hqdefault.jpg",
    publication_date: "2021-04-19T00:00:00+02:00",
    duration: "PT13M52S"
  },
  {
    loc: `${SITE_URL}/harmonielehre/`,
    title: "Intervalle",
    description: "Ich werde in diesem Video versuchen die Intervalle zu erklären und zu bestimmen. Ein Intervall ist der Tonabstand zweier Töne. Also Prime, Sekunde, Terz, Quarte, Quinte, Sexte, Septime und Oktave.",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=804rrOOFzAQ",
    thumbnail_loc: "https://i.ytimg.com/vi/804rrOOFzAQ/hqdefault.jpg",
    publication_date: "2023-04-27T00:00:00+02:00",
    duration: "PT17M55S"
  },
  {
    loc: `${SITE_URL}/harmonielehre/`,
    title: "Dreiklänge",
    description: "Ich werde in diesem Video versuchen die Dreiklänge besser zu verstehen. Sie sind wichtig da diese zum Beispiel eintscheiden ob ein Akkord ein Durakkord ist oder ein Mollakkord und noch vieles mehr.",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=fgzboODvlQ4",
    thumbnail_loc: "https://i.ytimg.com/vi/fgzboODvlQ4/hqdefault.jpg",
    publication_date: "2021-05-05T00:00:00+02:00",
    duration: "PT20M44S"
  },
  {
    loc: `${SITE_URL}/akkordeon-videoanleitung/`,
    title: "L'accordeon Triste - Frnzösische Akkordeonmusik",
    description: "Lerne das Akkordeonstück 'L'accordeon Triste' von Sergio Castelli. Das steht rechts unten auf YouTube ansehen. Darauf klicken dann kann man unten bei der Videobeschreibung die Noten downloaden",
    content_loc: "https://www.youtube.com/embed/Va-gkuUp1KI",
    thumbnail_loc: "https://i.ytimg.com/vi/Va-gkuUp1KI/hqdefault.jpg",
    publication_date: "2024-11-10T10:00:00+02:00",
    duration: "PT4M18S"
  }
];

// Funktion zur Umwandlung der ISO 8601-Dauer in Sekunden
const parseISODuration = (isoDuration) => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = regex.exec(isoDuration);
  if (!matches) return 0;

  const hours = parseInt(matches[1] || 0, 10);
  const minutes = parseInt(matches[2] || 0, 10);
  const seconds = parseInt(matches[3] || 0, 10);

  return (hours * 3600) + (minutes * 60) + seconds;
};

// Funktion zur Erstellung von Seiten-URLs
const addPagesToSitemap = (doc, pages) => {
  pages.forEach(page => {
    const url = doc.ele('url');
    url.ele('loc').txt(page.url);
    url.ele('changefreq').txt(page.changefreq);
    url.ele('lastmod').txt(page.lastmod.toISOString());
  });
};

// Funktion zur Erstellung von Video-URLs
const addVideosToSitemap = (doc, videos) => {
  videos.forEach(video => {
    const url = doc.ele('url');
    url.ele('loc').txt(video.loc);
    const videoTag = url.ele('video:video');
    videoTag.ele('video:title').txt(video.title);
    videoTag.ele('video:description').txt(video.description);
    videoTag.ele('video:content_loc').txt(video.content_loc);
    videoTag.ele('video:thumbnail_loc').txt(video.thumbnail_loc);
    videoTag.ele('video:publication_date').txt(video.publication_date);
    videoTag.ele('video:duration').txt(parseISODuration(video.duration));
  });
};

// XML-Dokument erstellen
const doc = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:news': 'http://www.google.com/schemas/sitemap-news/0.9',
    'xmlns:xhtml': 'http://www.w3.org/1999/xhtml', 
    'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',   
    'xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1'
  });

  

// Seiten- und Video-URLs zur Sitemap hinzufügen
addPagesToSitemap(doc, pages);
addVideosToSitemap(doc, videos);

const xmlString = doc.end({ pretty: true });

// Ordner erstellen und Sitemap speichern mit Fehlerbehandlung
try {
  mkdirSync(join(process.cwd(), 'dist'), { recursive: true });
  writeFileSync(join(process.cwd(), 'dist', 'sitemap.xml'), xmlString);
  console.log('Sitemap successfully created!');
} catch (error) {
  console.error('Error creating sitemap:', error);
}
