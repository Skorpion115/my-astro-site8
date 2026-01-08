import fs from "fs";
import path from "path";
import crypto from "crypto";

export async function handler(event) {
  // 1️⃣ Zufälligen Token erzeugen
  const token = crypto.randomBytes(16).toString("hex");

  // 2️⃣ Ablaufdatum: 60 Tage
  const expires = new Date();
  expires.setDate(expires.getDate() + 60);

  // 3️⃣ Pfad zur Tokens-Datei (das ist die Zeile, die du meintest)
  const filePath = path.resolve("data/tokens.json");

  // 4️⃣ JSON-Datei einlesen, falls sie existiert
  let data = [];
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  // 5️⃣ Neuen Token hinzufügen
  data.push({
    token,
    product: "yesterday",
    expires: expires.toISOString()
  });

  // 6️⃣ Speichern
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  // 7️⃣ Weiterleitung zur Download-Seite
  return {
    statusCode: 302,
    headers: {
      Location: `/kunden-login/thanks-yesterday?token=${token}`
    }
  };
}