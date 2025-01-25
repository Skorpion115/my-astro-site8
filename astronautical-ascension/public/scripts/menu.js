document.addEventListener("astro:page-load", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("expanded");
      hamburger.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }

  // Menü schließen, wenn man außerhalb des Menüs klickt
  document.addEventListener("click", (event) => {
    const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInside) {
      navLinks.classList.remove("expanded");
      hamburger.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
});