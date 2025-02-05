document.addEventListener("DOMContentLoaded", function () {
  // Klick-Event für den Button der Vendor-Liste
  document.body.addEventListener("click", function (event) {
    // Überprüfen, ob das geklickte Element ein Button aus der Vendor-Liste ist
    if (event.target.matches(".cmpvendorlistb018a967f10b6 button")) {
      console.log("Button wurde geklickt:", event.target);

      // Hier kannst du sicherstellen, dass der Button auch das erwartete Verhalten hat
      const panel = event.target.nextElementSibling;  // Wenn der Button das nächste Panel öffnet
      if (panel) {
        panel.classList.toggle('is-visible');  // Toggle für Sichtbarkeit des Panels
      }
    }
  });

  // Funktion, um onclick-Attribute zu entfernen und durch Event-Listener zu ersetzen
  function fixButtons() {
    document.querySelectorAll("[onclick]").forEach(function (el) {
      const onclickCode = el.getAttribute("onclick");
      if (onclickCode) {
        el.removeAttribute("onclick");  // Entfernt das onclick-Attribut
        el.addEventListener("click", function (event) {
          console.log("Button mit onclick wurde geklickt");

          // Hier kannst du den ursprünglichen Code des onclick-Attributs manuell implementieren,
          // falls erforderlich. Zum Beispiel, wenn du den ursprünglichen Code speichern möchtest
          // oder eine zusätzliche Aktion ausführen möchtest.
        });
      }
    });
  }

  // Direkt beim Laden reparieren
  fixButtons();

  // Beobachte Änderungen im DOM und repariere neue Buttons
  new MutationObserver(fixButtons).observe(document.body, { childList: true, subtree: true });
});
