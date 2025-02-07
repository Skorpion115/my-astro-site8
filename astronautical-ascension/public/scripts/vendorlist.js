// Die Nonce aus einem existierenden Script-Tag holen
const nonceValue = document.querySelector("script[data-nonce]")?.getAttribute("data-nonce");

// Neues Script für die Vendorlist laden
const script = document.createElement("script");
script.src = "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=automatic";
script.type = "text/javascript";
if (nonceValue) {
  script.setAttribute("nonce", nonceValue);
}
script.async = true;
document.head.appendChild(script);

// Warten, bis das Script geladen ist, und die Vendorlist initialisieren
script.onload = function () {
  if (typeof cmpShowVendorList !== "undefined") {
    cmpShowVendorList("cmpvendorlist");
  } else {
    console.warn("Consentmanager Vendorlist konnte nicht geladen werden.");
  }
};

// Sicherstellen, dass das Cookie-Info-Skript ebenfalls funktioniert
document.addEventListener("DOMContentLoaded", function () {
  if (typeof cmpShowCookieInfo !== "undefined") {
    cmpShowCookieInfo("cmpcookieinfo");
  } else {
    console.warn("Consentmanager Cookie Info konnte nicht geladen werden.");
  }
});
