document.addEventListener("DOMContentLoaded", function () {
  const script = document.createElement("script");
  script.src =
    "https://delivery.consentmanager.net/delivery/cookieinfo.php?cdid=b018a967f10b6&l=automatic";
  script.type = "text/javascript";
  script.nonce = document.currentScript?.nonce || "";
  script.async = true;
  document.getElementById("cmpcookieinfo").appendChild(script);
});
