import crypto from "crypto";

export async function handler(event) {
  try {
    // 1. Eindeutigen Token erzeugen
    const token = crypto.randomUUID();

    // 2. Download-URL bauen
    // WICHTIG: Domain anpassen!
    const downloadUrl = `https://musicstudio-ziebart.de/.netlify/functions/download?token=${token}`;

    // 3. Erfolgreiche Antwort
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        downloadUrl,
      }),
    };
  } catch (error) {
    // Sicherheitsnetz – sollte praktisch nie auftreten
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: "Token konnte nicht erzeugt werden",
      }),
    };
  }
}