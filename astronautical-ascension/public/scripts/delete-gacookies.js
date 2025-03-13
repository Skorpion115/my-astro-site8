(function (w, d) {
    function deleteGACookies() {
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + location.hostname + ";";
      document.cookie = "_ga_CXBFDX52C7=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "test_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      console.log("Google Analytics Cookies wurden gelöscht.");
    }
  
    function onIubendaLoaded() {
      if (typeof _iub !== "undefined" && _iub.cs && _iub.cs.api) {
        _iub.cs.api.onConsentGiven(function () {
          console.log("[iubenda] Einwilligung erteilt.");
        });
  
        _iub.cs.api.onConsentReject(function () {
          console.log("[iubenda.js] Analytics abgelehnt – lösche Cookies...");
          deleteGACookies();
        });
      } else {
        console.log("Warte auf Iubenda...");
        setTimeout(onIubendaReady, 500);
      }
    }
  
    function onIubendaReady() {
      if (typeof _iub !== "undefined" && _iub.cs && _iub.cs.api) {
        onIubendaReady();
      } else {
        setTimeout(onIubendaReady, 500);
      }
    }
  
    if (document.readyState === "complete") {
      onIubendaReady();
    } else {
      w.addEventListener("load", onIubendaReady);
    }
  })(window, document);
  