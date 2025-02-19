document.addEventListener("DOMContentLoaded", function () {
  const vendorList = document.getElementById("cmpvendorlist");

  if (vendorList) {
    vendorList.addEventListener("click", function () {
      // Hier sollte das Öffnen des Menüs passieren
      console.log("Vendorlist wurde angeklickt!");
      // Beispiel: Menu aufklappen
      const menu = document.getElementById("menu");
      if (menu) {
        menu.style.display = menu.style.display === "none" ? "block" : "none";
      }
    });
  }
});


