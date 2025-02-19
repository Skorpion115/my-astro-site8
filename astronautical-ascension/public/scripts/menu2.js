document.addEventListener("DOMContentLoaded", function () {
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
    console.log("menu2.js wurde geladen!");
  }

  if (vendorList2) {
    vendorList2.addEventListener("click", toggleMenu);
    console.log("menu2.js wurde geladen!");
  }

  // Neue Event-Listener für cmpvendorlistheader-Elemente
  document.querySelectorAll(".cmpvendorlistheader").forEach(header => {
    header.addEventListener("click", function () {
      const vendorId = this.dataset.vendor; // Holt den Wert aus data-vendor
      console.log("Klick auf Vendor:", vendorId);

      if (typeof cmp_expandvendor === "function") {
        cmp_expandvendor(vendorId);
      } else {
        console.error("Fehler: cmp_expandvendor ist nicht definiert!");
      }
    });
  });
});

