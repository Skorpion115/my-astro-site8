const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
  console.log("🚀 Funktion aufgerufen!");

  if (event.httpMethod !== "POST") {
    console.log("❌ Methode nicht erlaubt:", event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  console.log("📩 Event Body:", event.body);

  let formData;
  try {
    formData = JSON.parse(event.body);
  } catch (error) {
    console.log("❌ JSON-Fehler:", error.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON format" }),
    };
  }

  const { name, email, message } = formData;

  if (!name || !email || !message) {
    console.log("❌ Fehlende Felder:", { name, email, message });
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "All fields are required" }),
    };
  }

  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.log("❌ Fehlende Umgebungsvariablen");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "E-Mail-Konfiguration fehlt!" }),
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_USER,
    subject: `Neue Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\nNachricht:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ E-Mail gesendet!");
    return {
      statusCode: 200,
      body: JSON.stringify({ success: "E-Mail wurde gesendet!" }),
    };
  } catch (error) {
    console.log("❌ E-Mail konnte nicht gesendet werden:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "E-Mail konnte nicht gesendet werden", details: error.message }),
    };
  }
};
