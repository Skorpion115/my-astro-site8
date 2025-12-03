const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  // Nur POST erlauben
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Methode nicht erlaubt' }),
    };
  }

  try {
    // Sendgrid API-Key setzen
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Body parsen
    const data = new URLSearchParams(event.body);
    
    // Formulardaten extrahieren
    const name = data.get('name') || 'Unbekannt';
    const email = data.get('email') || '';
    const phone = data.get('phone') || '';
    const subject = data.get('subject') || 'Neue Anfrage';
    const message = data.get('message') || '';
    const instrument = data.get('instrument') || '';
    const fname = data.get('fname') || '';
    const lname = data.get('lname') || '';
    const street = data.get('street') || '';
    const place = data.get('place') || '';
    const postal_code = data.get('postal_code') || '';
    const parents = data.get('parents') || '';
    const born = data.get('born') || '';
    const desired_date = data.get('desired_date') || '';

    // HTML-Email-Template
    const htmlContent = `
      <h2>Neue Anfrage von ${name}</h2>
      <p><strong>Betreff:</strong> ${subject}</p>
      <p><strong>Name:</strong> ${fname} ${lname}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      ${instrument ? `<p><strong>Instrument:</strong> ${instrument}</p>` : ''}
      ${street ? `<p><strong>Straße:</strong> ${street}</p>` : ''}
      ${place ? `<p><strong>Ort:</strong> ${place}</p>` : ''}
      ${postal_code ? `<p><strong>Postleitzahl:</strong> ${postal_code}</p>` : ''}
      ${parents ? `<p><strong>Eltern:</strong> ${parents}</p>` : ''}
      ${born ? `<p><strong>Geburtsdatum:</strong> ${born}</p>` : ''}
      ${desired_date ? `<p><strong>Wunschtermin:</strong> ${desired_date}</p>` : ''}
      <p><strong>Nachricht:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // E-Mail-Objekt für Sendgrid
    const emailMsg = {
      to: process.env.OUTLOOK_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@musicstudio-ziebart.de',
      replyTo: email,
      subject: `[Musicstudio Ziebart] ${subject}`,
      html: htmlContent,
      text: `Neue Anfrage:\n\nBetreff: ${subject}\nName: ${fname} ${lname}\nE-Mail: ${email}\nTelefon: ${phone}\n\nNachricht:\n${message}`,
    };

    // E-Mail versenden
    await sgMail.send(emailMsg);

    // Redirect zur Danke-Seite
    const redirectUrl = data.get('_next') || 'https://www.musicstudio-ziebart.de/danke-seite/';
    
    return {
      statusCode: 302,
      headers: {
        Location: redirectUrl,
      },
      body: '',
    };
  } catch (error) {
    console.error('Mail-Fehler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'E-Mail konnte nicht versendet werden',
        details: error.message,
      }),
    };
  }
};
