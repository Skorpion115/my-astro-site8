// scripts/load-iframes.js
document.addEventListener("DOMContentLoaded", function () {
  var iframes = document.querySelectorAll("iframe[data-src]");
  iframes.forEach(function (iframe) {
    var src = iframe.dataset.src;
    if (src) {
      iframe.src = src;
    }
  });
});
