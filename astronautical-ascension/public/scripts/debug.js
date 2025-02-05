// scripts/debug.js
document.addEventListener("DOMContentLoaded", function () {
  const scripts = document.querySelectorAll("script");
  scripts.forEach((script, index) => {
    console.log(
      `Script ${index + 1} nonce:`,
      script.nonce || "Nicht vorhanden"
    );
  });
});
