import fs from "fs";
import path from "path";
import crypto from "crypto";

export async function handler(event) {
  // Ein zufälliger Token für den Download
  const token = crypto.randomBytes(16).toString("hex");

  // Ablaufdatum: 60 Tage ab jetzt
  const expires = new Date();
  expires.setDate(expires.getDate() + 60);

  // Pfad zur JSON-Datei, die die Tokens speichert
  const filePath = path.resolve("netlify/functions/tokens.json");

  // JSON-Datei einlesen, wenn nicht existiert, leeres Array
  let data = [];
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  // Neuen Token hinzufügen
  data.push({
    token,
    product: "yesterday",
    expires: expires.toISOString()
  });

  // Speichern
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  // Weiterleitung zur Download-Seite
  return {
    statusCode: 302,
    headers: {
      Location: `/kunden-login/thanks-yesterday?token=${token}`
    }
  };
}
