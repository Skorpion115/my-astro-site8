// Beispiel für das Laden eines externen Skripts
const nonce = document.currentScript.getAttribute('nonce');

const script = document.createElement('script');
script.src = 'https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=de&h=musicstudio-ziebart.de';
script.type = 'text/javascript';
script.nonce = nonce;
script.async = true;
document.body.appendChild(script);

console.log("Script für VendorList geladen mit Nonce:", nonce);