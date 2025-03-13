(function () {
    function deleteGACookies() {
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "_ga_CXBFDX52C7=; expires=Thu, 01 Jan 1970 00:01:00 UTC; path=/;";
      document.cookie = "test_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  
    function iubendaEventListener() {
      if (typeof _iub !== "undefined" && _iub.cons) {
        if (!_iub.cons.consent.analytics) {
          console.log("Consent für Analytics wurde abgelehnt. Lösche GA-Cookies...");
          deleteGACookies();
        }
      }
    }
  
    // Warte auf das Laden von iubenda
    document.addEventListener("DOMContentLoaded", function () {
      if (typeof _iub !== "undefined") {
        _iub.csConfiguration.callbacks.onPreferenceExpressed = function (acceptance) {
          if (!acceptance.analytics) {
            console.log("Consent für Analytics wurde abgelehnt. Lösche GA-Cookies...");
            deleteGACookies();
          }
        };
      } else {
        console.warn("iubenda nicht geladen!");
      }
    });
  })();
  