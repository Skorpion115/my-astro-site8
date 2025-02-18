document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("script").forEach((script, index) => {
    console.log(
      `Script ${index + 1}:`,
      script.src || "[Inline Script]",
      "Nonce:",
      script.nonce || "Nicht vorhanden"
    );
  });
});
