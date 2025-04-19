// Bedingte CSS-Dateien fuer spezifische Seiten
const styles = {
    "/gitarrenunterricht/": "/styles/gitarrenunterricht.css",
    "/e-gitarrenunterricht/": "/styles/e-gitarrenunterricht.css",
    "/e-bassunterricht/": "/styles/e-bassunterricht.css",
    "/banjounterricht/": "/styles/banjounterricht.css",
    "/klavierunterricht/": "/styles/klavierunterricht.css",
    "/keyboardunterricht/": "/styles/keyboardunterricht.css",
    "/akkordeonunterricht/": "/styles/akkordeonunterricht.css",
    "/saxophonunterricht/": "/styles/saxophonunterricht.css",
    "/klarinettenunterricht/": "/styles/klarinettenunterricht.css",
    "/querfloetenunterricht/": "/styles/querfloetenunterricht.css",
  };

  const href = styles[window.location.pathname];
if (href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.media = "all";
  document.head.appendChild(link);
}
