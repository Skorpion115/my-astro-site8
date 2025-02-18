document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".menu-button").forEach(button => {
      button.addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("open");
      });
    });
  });
  