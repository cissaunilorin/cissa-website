import nodemailer from 'nodemailer';

class Email {
  newTransport() {
    console.log(process.env.NODE_ENV);
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
      from: process.env.EMAIL_USERNAME,
      to: 'cissa@students.unilorin.edu.ng',
      subject,
      text: `${from}
      ${text}`,
      name,
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }
}

export default Email;
