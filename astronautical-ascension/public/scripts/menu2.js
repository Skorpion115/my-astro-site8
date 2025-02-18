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


document.addEventListener("DOMContentLoaded", function() {
  const vendorList = document.getElementById("cmpvendorlist");
  
  if (vendorList) {
    vendorList.addEventListener("click", function() {
      // Deine Logik zum Aufklappen des Menüs oder der Liste
      alert("Vendorlist wurde angeklickt!");
    });
  }
});
