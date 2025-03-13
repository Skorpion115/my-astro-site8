(function () {
    function deleteGACookies() {
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "_ga_CXBFDX52C7=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "test_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      console.log("Google Analytics Cookies wurden gelöscht.");
    }
  
    function onIubendaLoaded() {
      if (typeof _iub !== "undefined" && _iub.cs && _iub.cs.api) {
        console.log("[iubenda] Consent-Manager geladen.");
  
        _iub.cs.api.onConsentReject(function () {
          console.log("[iubenda] Analytics abgelehnt – lösche GA-Cookies...");
          deleteGACookies();
        });
      }
    }
  
    function waitForIubenda(retries) {
      if (typeof _iub !== "undefined" && _iub.cs && _iub.cs.api) {
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
  