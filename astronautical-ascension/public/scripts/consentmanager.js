console.log("ConsentManager-Skript wird geladen...");

(() => {
  const script = document.createElement("script");
  script.src = "https://cdn.consentmanager.net/trackless/delivery/61b9c2e26ad2.js";
  script.async = true;
  script.type = "text/javascript";
  document.head.appendChild(script);

  script.onload = () => console.log("ConsentManager-Skript erfolgreich geladen.");
})();