// scripts/onclick.js
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    if (event.target.matches(".cmpvendorlistb018a967f10b6 button")) {
      console.log("Button wurde geklickt:", event.target);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function fixButtons() {
    document.querySelectorAll("[onclick]").forEach(function (el) {
      const onclickCode = el.getAttribute("onclick");
      if (onclickCode) {
        el.removeAttribute("onclick");  // Entfernt das Attribut
        el.addEventListener("click", function (event) {
          // Hier kannst du den onclickCode direkt als Callback ausführen
          console.log("Button mit onclick wurde geklickt");
          // Falls nötig, kannst du den ursprünglichen Code manuell implementieren
        });
      }
    });
  }

  // Direkt beim Laden reparieren
  fixButtons();

  // Überwacht Änderungen im DOM und repariert neue Buttons
  new MutationObserver(fixButtons).observe(document.body, { childList: true, subtree: true });
});

  