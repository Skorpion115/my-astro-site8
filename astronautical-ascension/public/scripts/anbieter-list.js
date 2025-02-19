// Dynamisch das Script für die Anbieter-Liste laden
const script = document.createElement("script");
script.src = "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=automatic";
script.type = "text/javascript";
script.async = true;
document.body.appendChild(script);
