/*
document.addEventListener("DOMContentLoaded", function () {
    const script = document.createElement("script");
    script.src =
      "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=de&h=musicstudio-ziebart.de";
    script.type = "text/javascript";
    script.nonce = document.currentScript?.nonce || "";
    script.async = true;
  
    // Event Listener für das Laden des Scripts
    script.onload = function () {
      console.log("Vendor List script loaded successfully!");
    };
  
    // Event Listener für Fehler beim Laden des Scripts
    script.onerror = function () {
      console.error("Error loading Vendor List script.");
    };
  
    // Script zum DOM hinzufügen
    document.getElementById("cmpvendorlist").appendChild(script);
  }); */

  /*
document.addEventListener("DOMContentLoaded", function () {
  const vendorListContainer = document.getElementById("cmpvendorlist");
  if (vendorListContainer) {
    const script = document.createElement("script");
    script.src = "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=de&l=automatic";
    script.type = "text/javascript";
    script.nonce = document.currentScript?.nonce || "";
    script.async = true;
    vendorListContainer.appendChild(script);
  } else {
    console.error("Vendor list container not found");
  }
}); */

/*

document.addEventListener("DOMContentLoaded", function () {
  const vendorListContainer = document.getElementById("cmpvendorlist");
  if (vendorListContainer && !vendorListContainer.querySelector("script[src*='vendorlist.php']")) {
    const script = document.createElement("script");
    script.src = "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=automatic&h=musicstudio-ziebart.de";
    script.type = "text/javascript";
    script.nonce = document.currentScript?.nonce || "";
    script.async = true;
    vendorListContainer.appendChild(script);
  } else {
    console.error("Vendor list container not found or script already loaded");
  }
}); */
/*
document.addEventListener("DOMContentLoaded", function () {
  const vendorListContainer = document.getElementById("cmpvendorlist");

  if (vendorListContainer) {
    // Prüfen, ob bereits ein Vendorlist-Script existiert
    if (document.querySelector('script[src*="vendorlist.php"]')) {
      console.log("Vendorlist-Script existiert bereits, wird nicht erneut geladen.");
      return; // Doppelladen verhindern
    }

    const script = document.createElement("script");
    script.src = "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=automatic&h=musicstudio-ziebart.de";
    script.type = "text/javascript";
    script.nonce = document.currentScript?.nonce || "";
    script.async = true;

    vendorListContainer.appendChild(script);
  } else {
    console.error("Vendor list container not found");
  }
}); */

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('script[src*="vendorlist.php"]')) {
    console.log("vendorlist.php wird bereits geladen. Abbruch.");
    return;
  }

  const vendorListContainer = document.getElementById("cmpvendorlist");
  if (vendorListContainer) {
    const script = document.createElement("script");
    script.src = "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=automatic&h=musicstudio-ziebart.de";
    script.type = "text/javascript";
    script.nonce = document.currentScript?.nonce || "";
    script.async = true;
    vendorListContainer.appendChild(script);
    console.log("vendorlist.php wurde durch vendorlist-loader.js geladen.");
  } else {
    console.error("Vendor list container nicht gefunden");
  }
});




