// Die Nonce aus dem aktuell laufenden Script-Tag holen
const currentScript = document.currentScript;
const nonceValue = currentScript ? currentScript.nonce : "";

// Neues Script-Element für die Vendorliste erstellen
const script = document.createElement("script");
script.src = "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=automatic";
script.type = "text/javascript";
script.async = true;

// Script in den <head> einfügen
document.head.appendChild(script);

// Debugging: Prüfen, ob die Nonce korrekt gesetzt wurde
console.log("Gesetzte Nonce:", document.querySelector('script[src*="vendorlist.php"]')?.getAttribute("nonce"));
