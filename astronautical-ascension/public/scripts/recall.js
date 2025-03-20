document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Verhindert normales Absenden

    const formData = new FormData(this);
    const jsonData = Object.fromEntries(formData.entries()); // Formulardaten in JSON umwandeln

    const response = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData),
    });

    if (response.ok) {
      alert("Nachricht erfolgreich gesendet! 🎉");
      this.reset(); // Leert das Formular nach dem Absenden
    } else {
      alert("Fehler beim Senden der Nachricht! 😞");
    }
  });
