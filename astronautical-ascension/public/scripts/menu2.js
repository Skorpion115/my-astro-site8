document.addEventListener("DOMContentLoaded", function () {
  console.log("menu2.js wurde geladen!");

  const vendorList1 = document.getElementById("cmpvendorlist");
  const vendorList2 = document.querySelector(".cmpvendorlistb018a967f10b6");

  function toggleMenu() {
    console.log("Vendorlist wurde angeklickt!");
    const menu = document.getElementById("menu");
    if (menu) {
      menu.style.display = menu.style.display === "none" ? "block" : "none";
    }
  }

  if (vendorList1) {
    vendorList1.addEventListener("click", toggleMenu);
    console.log("Event-Listener für vendorList1 hinzugefügt.");
  } else {
    console.warn("vendorList1 nicht gefunden!");
  }

  if (vendorList2) {
    vendorList2.addEventListener("click", toggleMenu);
    console.log("Event-Listener für vendorList2 hinzugefügt.");
  } else {
    console.warn("vendorList2 nicht gefunden!");
  }

  // Neue Event-Listener für cmpvendorlistheader-Elemente
  const headers = document.querySelectorAll(".cmpvendorlistheader");
  if (headers.length > 0) {
    console.log(`Gefundene cmpvendorlistheader-Elemente: ${headers.length}`);
  } else {
    console.warn("Keine cmpvendorlistheader-Elemente gefunden!");
  }

  headers.forEach(header => {
    header.addEventListener("click", function () {
      const vendorId = this.dataset.vendor; // Holt den Wert aus data-vendor
      console.log("Klick auf Vendor:", vendorId);

      if (vendorId) {
        if (typeof cmp_expandvendor === "function") {
          console.log(`Aufruf von cmp_expandvendor mit ID: ${vendorId}`);
          cmp_expandvendor(vendorId);
        } else {
          console.error("Fehler: cmp_expandvendor ist nicht definiert!");
        }
      } else {
        console.warn("Kein data-vendor-Wert gefunden!");
      }
    });
  });
});


