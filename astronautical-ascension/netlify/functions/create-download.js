import crypto from "crypto";

export async function handler(event) {
  try {
    // 1️⃣ Basis-URL aus Netlify Environment Variable
    const siteUrl = process.env.SITE_URL;

    if (!siteUrl) {
      throw new Error("SITE_URL ist nicht gesetzt");
    }

    // 2️⃣ Eindeutigen, sicheren Token erzeugen
    const token = crypto.randomUUID();

    // 3️⃣ Download-URL bauen
    const downloadUrl = `${siteUrl}/.netlify/functions/download?token=${token}`;

    // 4️⃣ Erfolgreiche Antwort
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        token,
        downloadUrl,
      }),
    };
  } catch (error) {
    console.error("create-download Fehler:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        error: "Download-Link konnte nicht erzeugt werden",
      }),
    };
  }
}