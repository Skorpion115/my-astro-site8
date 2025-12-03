document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("expanded");
    hamburger.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Klick außerhalb schließt das Menü
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      navLinks.classList.remove("expanded");
      hamburger.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
});
