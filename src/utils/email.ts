import nodemailer from 'nodemailer';

class Email {
  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 0,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(subject: string, text: string, name: string, from: string) {
    const mailOptions = {
      from: `"CISSA Contact Form" <${process.env.EMAIL_USERNAME}>`,
      to: 'cissa@students.unilorin.edu.ng',
      subject: `[CISSA Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #814226;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>From:</strong> ${name} (${from})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <p style="white-space: pre-wrap;">${text}</p>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the CISSA website contact form.
          </p>
        </div>
      `,
    };

    try {
      // Create a transport and send email
      await this.newTransport().sendMail(mailOptions);
      console.log('Contact form email sent successfully');
    } catch (error) {
      console.error('Error sending contact form email:', error);
      throw error;
    }
  }
}

export default Email;
