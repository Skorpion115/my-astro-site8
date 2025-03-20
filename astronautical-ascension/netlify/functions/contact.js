const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "All fields are required" }),
    };
  }

  // Umgebungsvariablen verwenden
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;

  if (!EMAIL_USER || !EMAIL_PASS) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "E-Mail-Konfiguration fehlt!" }),
    };
  }

  // Transporter für den Versand der E-Mail
  const transporter = nodemailer.createTransport({
    service: "Outlook", // Alternativ: "Gmail" oder SMTP-Daten deines Providers
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_USER, // Du bekommst die Nachricht
    subject: `Neue Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\nNachricht:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: "E-Mail wurde gesendet!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "E-Mail konnte nicht gesendet werden", details: error.message }),
    };
  }
};
