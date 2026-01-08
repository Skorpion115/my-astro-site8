import fs from "fs";
import path from "path";

// Beispielhafte Tokens-Liste (kannst du später dynamisch erzeugen)
let validTokens = [
  // Beispiel:
  // { token: "cd2c1339-0e62-4d2e-97fb-1c093588a82f", file: "Yesterday.pdf", expires: "2026-03-08T12:00:00Z" }
];

export async function handler(event) {
  try {
    const token = event.queryStringParameters?.token;
    const file = event.queryStringParameters?.file;

    if (!token || !file) {
      return { statusCode: 400, body: "Token oder Datei fehlt" };
    }

    // Prüfen, ob Token gültig ist
    const now = new Date();
    const valid = validTokens.find(
      t => t.token === token && t.file === file && new Date(t.expires) > now
    );

    if (!valid) {
      return { statusCode: 403, body: "❌ Download-Link ungültig oder abgelaufen" };
    }

    // Pfad zur Datei im public/downloads-Ordner
    const filePath = path.resolve(`public/downloads/${file}`);
    if (!fs.existsSync(filePath)) {
      return { statusCode: 404, body: "Datei nicht gefunden" };
    }

    const fileBuffer = fs.readFileSync(filePath);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${file}"`,
      },
      body: fileBuffer.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: "Fehler beim Download" };
  }
}
