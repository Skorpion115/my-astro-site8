/*
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
}); */
/*
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
  }

  if (vendorList2) {
    vendorList2.addEventListener("click", toggleMenu);
  }
}); */

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
  }

  if (vendorList2) {
    vendorList2.addEventListener("click", toggleMenu);
  }
});




