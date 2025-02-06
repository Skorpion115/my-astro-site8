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

// Event-Listener für den Button setzen
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("meinButton");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Button funktioniert!");
    });
  }
});
