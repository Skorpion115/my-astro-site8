const script = document.createElement("script");
script.src =
  "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&l=automatic";
script.type = "text/javascript";

// Hier holen wir die Nonce aus dem ursprünglichen Script-Tag
const parentScript = document.querySelector('script[data-nonce]');
script.nonce = parentScript ? parentScript.getAttribute('data-nonce') : '';

script.async = true;
document.head.appendChild(script);
