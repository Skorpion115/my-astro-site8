document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    if (isDark) {
      element.classList.remove("light");
    } else {
      element.classList.add("light");
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  themeToggle.addEventListener("click", handleToggleClick);
});

