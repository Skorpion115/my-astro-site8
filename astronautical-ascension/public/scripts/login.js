// Passwort festlegen
const PASSWORD = "tenwords2026";

// Funktionen
function showContent() {
  const loginBox = document.getElementById("login-box");
  const content = document.getElementById("content");

  if (loginBox) loginBox.style.display = "none";
  if (content) content.style.display = "block";
}

function checkPassword() {
  const inputEl = document.getElementById("password");
  const error = document.getElementById("error");

  if (!inputEl) return;

  const input = inputEl.value.trim();
  if (input === PASSWORD) {
    sessionStorage.setItem("tenwords-login", "ok");
    showContent();
    if (error) error.style.display = "none";
  } else {
    if (error) error.style.display = "block";
  }
}

// Direkt prüfen, ob Login schon in SessionStorage vorhanden ist
if (sessionStorage.getItem("tenwords-login") === "ok") {
  showContent();
}

// Event für Enter-Taste
const inputField = document.getElementById("password");
if (inputField) {
  inputField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      checkPassword();
    }
  });
}

// Event für Button
const loginButton = document.getElementById("login-btn");
if (loginButton) {
  loginButton.addEventListener("click", checkPassword);
}

// Optional: falls sessionStorage über andere Tabs gesetzt wird
window.addEventListener("storage", (e) => {
  if (e.key === "tenwords-login" && e.newValue === "ok") {
    showContent();
  }
});