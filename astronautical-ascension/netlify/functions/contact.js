const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    // E-Mail Konfiguration mit Outlook SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Aus Netlify Environment Variables
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'musikstudio-ziebart@outlook.de',
      subject: 'Neue Nachricht vom Kontaktformular',
      text: `Name: ${data.name}\nE-Mail: ${data.email}\nNachricht:\n${data.message}`
    };

    await transporter.sendMail(mailOptions);

    return { statusCode: 200, body: JSON.stringify({ message: 'E-Mail gesendet!' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Fehler beim Senden der E-Mail' }) };
  }
};
