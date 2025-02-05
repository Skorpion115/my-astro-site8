document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    // Prüfen, ob das geklickte Element ein Button aus der Vendor-Liste ist
    if (event.target.matches(".cmpvendorlistb018a967f10b6 button")) {
      console.log("Button wurde geklickt:", event.target);

      // Wenn der Button ein `onclick`-Attribut hat, dieses als Funktion ausführen
      const onclickCode = event.target.getAttribute("onclick");
      if (onclickCode) {
        event.preventDefault(); // Standardverhalten blockieren (falls nötig)
        new Function(onclickCode).call(event.target);
      }
    }
  });

  // Funktion, um inline `onclick` in Event-Listener umzuwandeln
  function fixButtons() {
    document.querySelectorAll(".cmpvendorlistb018a967f10b6 button[onclick]").forEach((el) => {
      const onclickCode = el.getAttribute("onclick");
      if (onclickCode) {
        el.removeAttribute("onclick"); // Entferne das Attribut
        el.addEventListener("click", function (event) {
          console.log("Fix für onclick-Button:", event.target);
          event.preventDefault(); // Optional, falls das ursprüngliche Verhalten blockiert wird
          new Function(onclickCode).call(el); // Führe den ursprünglichen Code aus
        });
      }
    });
  }

  // Direkt beim Laden reparieren
  fixButtons();

  // Falls neue Buttons geladen werden, automatisch anpassen
  new MutationObserver(fixButtons).observe(document.body, { childList: true, subtree: true });
});
