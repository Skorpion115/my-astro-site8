(function () {
    function deleteGACookies() {
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "_ga_CXBFDX52C7=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "test_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      console.log("[iubenda] Google Analytics Cookies gelöscht.");
    }
  
    function onIubendaLoaded() {
      if (typeof _iub !== "undefined" && _iub.cs) {
        console.log("[iubenda] Consent-Manager geladen.");
  
        if (typeof _iub.cs.on === "function") {
          _iub.cs.on("consent.reject", function () {
            console.log("[iubenda] Analytics abgelehnt – lösche GA-Cookies...");
            deleteGACookies();
          });
  
          _iub.cs.on("consent.given", function () {
            console.log("[iubenda] Einwilligung für Analytics gegeben.");
          });
        } else {
          console.warn("[iubenda] _iub.cs.on ist nicht verfügbar.");
        }
      }
    }
  
    function waitForIubenda(retries) {
      if (typeof _iub !== "undefined" && _iub.cs) {
        onIubendaLoaded();
      } else if (retries > 0) {
        setTimeout(function () {
          waitForIubenda(retries - 1);
        }, 500);
      } else {
        console.warn("[iubenda] Konnte Consent-Manager nicht laden.");
      }
    }
  
    document.addEventListener("DOMContentLoaded", function () {
      waitForIubenda(10); // Maximal 10 Versuche (5 Sekunden Wartezeit)
    });
  })();
  