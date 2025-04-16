import { create } from "xmlbuilder2";
import fs from "fs";
import path from "path";
import glob from "fast-glob";

const SITE_URL = process.env.SITE_URL || "https://www.musicstudio-ziebart.de";

const pages = [
  "/",
  "/instrumentenkauf/",
  "/blog/",
  "/anmeldung/",
  "/thankyou/",
  "/recall/",
  "/danke-seite/",
  "/honorar/",
  "/unterricht/",
  "/faq/",
  "/download/",
  "/harmonielehre/",
  "/datenschutz/",
  "/impressum/",
  "/klavierunterricht/",
  "/klavier-videoanleitung/",
  "/keyboardunterricht/",
  "/keyboard-videoanleitung/",
  "/gitarrenunterricht/",
  "/gitarre-videoanleitung/",
  "/e-bassunterricht/",
  "/e-gitarrenunterricht/",
  "/e-gitarre-videoanleitung/",
  "/e-gitarre-videoanleitung2/",
  "/banjounterricht/",
  "/banjo-videoanleitung/",
  "/akkordeonunterricht/",
  "/akkordeon-videoanleitung/",
  "/saxophonunterricht/",
  "/querfloetenunterricht/",
  "/klarinettenunterricht/",
];

const videos = [
  {
    url: "/banjo-videoanleitung/",
    title: "Flint Hill Special - Banjo Lesson",
    description: "Lerne das Banjostück 'Flint Hill Special von Earl Scruggs'. Es wird in dem Stück ein sogenannter D-Tuner verwendet. Ich erkläre genau wie man so einen D-Tuner benutzt und einstellt.",
    thumbnail_loc: "https://i.ytimg.com/vi/R75ZetEwmtw/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/R75ZetEwmtw",
    publication_date: "2023-06-17T14:00:00+02:00",
    duration: "812"
  },
  {
    url: "/banjo-videoanleitung/",
    title: "Train 45 - Bluegrass Banjo",
    description: "Lerne das Banjostück Train 45 - Bluegrass Banjo.",
    thumbnai_loc: "https://i.ytimg.com/vi/uo5ojnmRHPo/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/uo5ojnmRHPo",
    publication_date: "2023-05-26T14:00:00+02:00",
    duration: "391"
  },
  {
    url: "/banjo-videoanleitung/",
    title: "Banjo Beginner Lesson 2",
    description: "Lerne das Banjostück 'Cripple Creek'. Mit diesem Stück hat Earl Scruggs als kleiner Junge schon einen Preis gewonnen.",
    thumbnail_loc: "https://i.ytimg.com/vi/WmYlSqvpUkw/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/WmYlSqvpUkw",
    publication_date: "2023-04-05T14:00:00+02:00",
    duration: "167"
  },
  {
    url: "/klavier-videoanleitung/",
    title: "PRAELUDIUM BMV 927 - Johann Sebastian Bach",
    description: "Klassisches Klavierstück auswendig lernen! Für mich ist dies eins der schwierigsten Dinge. Dieses Stück hat nur eine Seite, da geht es noch einigermaßen.",
    thumbnail_loc: "https://i.ytimg.com/vi/vxX0WiQhSUE/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE",
    publication_date: "2021-05-20T14:00:00+02:00",
    duration: "154"
  },
  {
    url: "/klavier-videoanleitung/",
    title: "Aus der neuen Welt - Antonin Dvorak",
    description: "Klavier Tutorial für das klassische Stück von Antonin Dvorak. Ich spiele hier nur der zweiten Satz das 'Largo'. Antonin Dvorak hat es für Orchester aber auch für Klavier zu vier Händen geschrieben. Ich habe es für 2 Händen umgeschrieben.",
    thumbnail_loc: "https://i.ytimg.com/vi/ytcQ-I1BTNk/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/ytcQ-I1BTNk",
    publication_date: "2021-04-21T00:00:00+02:00",
    duration: "779"
  },
  {
    url: "/e-gitarre-videoanleitung/",
    title: "Joe Satriani - Ten Words Guitar Lesson+Tab",
    description: "Lerne das Gitarrenstück 'Ten Words' von Joe Satriani mit dieser detaillierten Gitarrenstunde.",
    thumbnail_loc: "https://i.ytimg.com/vi/8ucTzPOBzAo/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/8ucTzPOBzAo",
    publication_date: "2021-07-17T14:00:00+02:00",
    duration: "239"
  },
  {
    url: "/e-gitarre-videoanleitung2/",
    title: "Take Good Care Of My Baby - Bobby Vee Cover",
    description: "Lerne das Gitarrenstück 'Take Good Care Of My Baby' von Bobby Vee mit dieser detaillierten Gitarrenstunde.",
    thumbnail_loc: "https://i.ytimg.com/vi/nUC_b1L_IM4/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/nUC_b1L_IM4",
    publication_date: "2025-01-04T14:00:00+02:00",
    duration: "1072"
  },
  {
    url: "/gitarre-videoanleitung/",
    title: "Catch The Wind - Donovan",
    description: "Ein besonders schönes Gitarrenstück ist 'Catch The Wind' von Donovan. Es eignet sich sehr gut, um es alleine auf der Gitarre zu spielen. Im Video hörst du die Originalaufnahme von Donavan. Du möchtest das Stück gerne selbst lernen? Dann schreib mir! Ich helfe dir gerne beim Einstieg und gebe dir Tipps zum Nachspielen!",
    thumbnail_loc: "https://www.musicstudio-ziebart.de/images/thumbnail-catch-the-wind.png",
    content_loc: "https://www.youtube.com/embed/9yQKDj_V4Gk",
    publication_date: "2018-04-18T14:00:00+02:00",
    duration: "183"
  },
  {
    url: "/gitarre-videoanleitung/",
    title: "Beatles - Yesterday Gitarre Tutorial",
    description: "Lernevideo und Gitarrentutorial für das Gitarrenstück 'Yesterday von den Beatles'. Dieses Stück kann man wunderbar alleine spielen, also ohne Bass, Drums usw. Die Gitarre wird in einer Double Flatstimmung umgestimmt.",
    thumbnail_loc: "https://i.ytimg.com/vi/oqko5Mk_UBk/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/oqko5Mk_UBk",
    publication_date: "2023-07-01T14:00:00+02:00",
    duration: "761"
  },
  {
    url: "/gitarre-videoanleitung/",
    title: "City Of New Orleans - Arlo Guthrie",
    description: "Ein schönes Beispiel für ein Fingerpicking mit Gitarre und Gesang: Ich habe mir damals den Song von Arlo Guthrie rausgesucht. Es heißt 'City Of New Orleans'. Er selbst spielt übrigens bei diesem Song ein Klavier. Es ist ein Lernvideo und Gitarren Tutorial. Dieses Stück war Arlo Guthries einziger Welthit. Als damals Steve Goodman, der Komponist des berühmten Songs zu ihm sagte: Ich hätte da einen guten Hit für dich, sagte Arlo Guthrie: 'Ich hasse Hits!'. Warum das weiß ich nicht.",
    thumbnail_loc: "https://i.ytimg.com/vi/yEF6e2ZSZ0k/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/yEF6e2ZSZ0k",
    publication_date: "2021-08-26T14:00:00+02:00",
    duration: "289"
  },
  {
    url: "/keyboard-videoanleitung/",
    title: "Hammond Organ - Hammond Flip - Klaus Wunderlich",
    description: "Keyboard Tutorial über eine Klaus Wunderlich Komposition. Das Stück heißt 'Hammond Flip'.",
    thumbnail_loc: "https://i.ytimg.com/vi/y2KtSx3-W3w/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=244HlpB3JoA",
    publication_date: "2021-07-08T14:00:00+02:00",
    duration: "186"
  },
  {
    url: "/keyboard-videoanleitung/",
    title: "Hammond Organ Komponist: Klaus Wunderlich Titel: H-schisch",
    description: "Ein Keyboard Tutorial über den Komponist Klaus Wunderlich. Das Stück das ich spiele heißt 'H-schisch'. Das ist in einem Notenheft von ihm mit 12 Kompositionen. Klaus Wunderlich brachte ein Notenbuch heraus mit 12 Kompositionen von ihm. Für jede Tonart komponierte er ein Stück. Ich habe das Stück in H Durgewählt. Ich habe es mit einem HAMMOND XM-1 Expander aufgenommen.",
    thumbnail_loc: "https://i.ytimg.com/vi/y2KtSx3-W3w/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=y2KtSx3-W3w",
    publication_date: "2023-05-19T14:00:00+02:00",
    duration: "256"
  },
  {
    url: "/keyboard-videoanleitung/",
    title: "Hammond Organ Komponist: Klaus Wunderlich Titel: E-Hering",
    description: "Noch ein Stück aus dem Heft 12 Kompositionen von Klaus Wunderlich. Ein Keyboard Tutorial über den Komponisten Klaus Wunderlich. Titel: E-Hering.",
    thumbnail_loc: "https://i.ytimg.com/vi/t0tOQfL2qSE/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/t0tOQfL2qSE",
    publication_date: "2023-04-12T14:00:00+02:00",
    duration: "338"
  },
  {
    url: "/harmonielehre/",
    title: "Notenschrift",
    description: "Ich möchte mit diesem Video die Notenschrift erklären die ja doch so wichtig für die Musik ist! Ich möchte den Schülern, Musikinteressierte oder Hobbymusiker auf diese Weise das Noten lesen und die Harmonielehre ein bisschen näher bringen! Die Videos sind so aufgebaut das man zuerst die Noten lesen kann, dann kommen die Intervalle, dann die Dreiklänge und zuletzt die Funktiontheorie. Also bitte nach der Reihenfolge lernen! Ich werde mit dem ersten Video das Noten lesen erklären.",
    thumbnail_loc: "https://i.ytimg.com/vi/Hu4ef1IkuG0/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=Hu4ef1IkuG0",
    publication_date: "2021-04-19T00:00:00+02:00",
    duration: "832"
  },
  {
    url: "/harmonielehre/",
    title: "Intervalle",
    description: "Ich werde in diesem Video versuchen die Intervalle zu erklären und zu bestimmen. Ein Intervall ist der Tonabstand zweier Töne. Also Prime, Sekunde, Terz, Quarte, Quinte, Sexte, Septime und Oktave.",
    thumbnail_loc: "https://i.ytimg.com/vi/804rrOOFzAQ/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=804rrOOFzAQ",
    publication_date: "2023-04-27T00:00:00+02:00",
    duration: "1075"
  },
  {
    url: "/harmonielehre/",
    title: "Dreiklänge",
    description: "Ich werde in diesem Video versuchen die Dreiklänge besser zu verstehen. Sie sind wichtig da diese zum Beispiel eintscheiden ob ein Akkord ein Durakkord ist oder ein Mollakkord und noch vieles mehr.",
    thumbnail_loc: "https://i.ytimg.com/vi/fgzboODvlQ4/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=fgzboODvlQ4",
    publication_date: "2021-05-05T00:00:00+02:00",
    duration: "1244"
  },
  {
    url: "/akkordeon-videoanleitung/",
    title: "L'accordeon Triste - Frnzösische Akkordeonmusik",
    description: "Lerne das Akkordeonstück 'L'accordeon Triste' von Sergio Castelli. Das steht rechts unten auf YouTube ansehen. Darauf klicken dann kann man unten bei der Videobeschreibung die Noten downloaden",
    thumbnail_loc: "https://i.ytimg.com/vi/Va-gkuUp1KI/hqdefault.jpg",
    content_loc: "https://www.youtube.com/embed/Va-gkuUp1KI",
    publication_date: "2024-11-10T10:00:00+02:00",
    duration: "258"
  },
];

const postFiles = glob.sync("./src/pages/posts/*.md");
const posts = postFiles.map((file) => {
  const slug = path.basename(file, ".md");
  return `/posts/${slug}/`;
});

const urls = [...pages, ...posts];
const doc = create({ version: "1.0", encoding: "UTF-8" })
  .ele('urlset', {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    "xmlns:video": "http://www.google.com/schemas/sitemap-video/1.1",
  });

urls.forEach((url) => {
  const urlEle = doc.ele('url');
  urlEle.ele("loc").txt(`${SITE_URL}${url}`);

  const video = videos.find((v) => v.url === url);
  if (video) {
    const videoEle = urlEle.ele("video:video");
    videoEle.ele("video:thumbnail_loc").txt(video.thumbnail_loc);
    videoEle.ele("video:title").txt(video.title);
    videoEle.ele("video:description").txt(video.description);
    videoEle.ele("video:content_loc").txt(video.content_loc);
    videoEle.ele("video:publication_date").txt(video.publication_date);
    videoEle.ele("video:duration").txt(video.duration);
  }
});

const xml = doc.end({ prettyPrint: true });

fs.writeFileSync("./dist/sitemap.xml", xml);
console.log("✅ Sitemap erfolgreich erstellt!");
