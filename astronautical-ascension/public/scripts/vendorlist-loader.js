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

  
document.addEventListener("DOMContentLoaded", function () {
  const vendorListContainer = document.getElementById("cmpvendorlist");
  if (vendorListContainer) {
    const script = document.createElement("script");
    script.src = "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=de&h=musicstudio-ziebart.de";
    script.type = "text/javascript";
    script.nonce = document.currentScript?.nonce || "";
    script.async = true;
    vendorListContainer.appendChild(script);
  } else {
    console.error("Vendor list container not found");
  }
});
