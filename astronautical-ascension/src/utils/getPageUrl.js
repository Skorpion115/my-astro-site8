export function getPageUrl(Astro) {
    return new URL(Astro.url.pathname, Astro.site).toString(); // wird an pageUrl übergeben
    // => https://www.musicstudio-ziebart.de/akkordeonunterricht/
  }  
