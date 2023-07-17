import nodemailer from 'nodemailer';

class Email {
  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 0,
      secure: process.env.NODE_ENV === 'production' ? true : false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(subject: string, text: string, name: string, from: string) {
    const mailOptions = {
      from,
      to: 'cissa@students.unilorin.edu.ng',
      subject,
      text: `${name}
      ${text}`,
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }
}

export default Email;
