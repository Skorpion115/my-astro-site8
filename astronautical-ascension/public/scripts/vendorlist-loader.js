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
    script.nonce = "";
    script.async = true;
    vendorListContainer.appendChild(script);
    console.log("vendorlist.php wurde durch vendorlist-loader.js geladen.");
  } else {
    console.error("Vendor list container nicht gefunden");
  }
});
