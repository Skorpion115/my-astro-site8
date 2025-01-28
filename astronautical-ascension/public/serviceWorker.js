const cacheVersion = "v5";
const cacheAssets = [
  "/",
  "/blog/",
  "/instrumentenkauf/",
  "/contact_2/",
  "/thankyou/",
  "/danke-seite/",
  "/contact_4/",
  "/honorar/",
  "/unterricht/",
  "/faq/",
  "/download/",
  "/harmonielehre/",
  "/impressum/",
  "/datenschutz/",
  "/klavierunterricht/",
  "/klavier-videoanleitung/",
  "/keyboardunterricht/",
  "/keyboard-videoanleitung/",
  "/gitarrenunterricht/",
  "/gitarre-videoanleitung/",
  "/e-bassunterricht/",
  "/e-gitarrenunterricht/",
  "/e-gitarre-videoanleitung/",
  "/banjounterricht/",
  "/banjo-videoanleitung/",
  "/akkordeonunterricht/",
  "/akkordeon-videoanleitung/",
  "/saxophonunterricht/",
  "/pupils-download/",
  "/querfloetenunterricht/",
  "/klarinettenunterricht/",
  "/anbieter/",
  // Weitere URLs hinzufügen...
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheVersion).then((cache) => {
      return cache.addAll(cacheAssets).catch((error) => {
        console.error("Failed to cache assets during install", error);
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Verhindere das Caching und die Bearbeitung von nicht unterstützten Schemas wie 'chrome-extension://'
  if (event.request.url.startsWith("chrome-extension://") || event.request.url.startsWith("chrome://")) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        if (event.request.method === "GET" && response.ok) {
          return caches.open(cacheVersion).then((cache) => {
            // Überprüfe, ob die Antwort von einer erlaubten Quelle stammt
            if (response.url.startsWith("https://www.musicstudio-ziebart.de")) {
              cache.put(event.request, response.clone());
            }
            return response;
          });
        }
        return response;
      }).catch(() => {
        // Optional: Rückfall auf eine offline-freundliche Antwort
        return caches.match("/offline.html");
      });
    })
  );
});

