/*
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".menu-button").forEach(button => {
      button.addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("open");
      });
    });
  }); */
  

// Beispiel in menu2.js
/*
document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.getElementById("menuButton");
  menuButton.addEventListener("click", function() {
    // Code für das Aufklappen des Menüs
    alert("Menü aufgeklappt!");
  });
}); */

/*
document.addEventListener("DOMContentLoaded", function() {
  const vendorList = document.getElementById("cmpvendorlist");
  
  if (vendorList) {
    vendorList.addEventListener("click", function() {
      // Deine Logik zum Aufklappen des Menüs oder der Liste
      alert("Vendorlist wurde angeklickt!");
    });
  }
}); */
/*
document.addEventListener("DOMContentLoaded", function() {
  const vendorList = document.getElementById("cmpvendorlist");
  
  if (vendorList) {
    vendorList.addEventListener("click", function() {
      // Beispiel: Menü anzeigen oder ausblenden
      const menu = document.getElementById("menu");
      if (menu) {
        menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
      }
      // Weitere Logik kann hier hinzugefügt werden
    });
  }
}); */

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


