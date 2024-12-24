/** @format */

const nodemailer = require('nodemailer');
const pug = require('pug');
const path = require('path');
const {convert} = require('html-to-text');

module.exports = class EmailService {
  constructor(user) {
    //  this.to = user.email;
    this.to = 'nqdcntt2002@gmail.com';
    this.from = `Doanh Dev <${process.env.EMAIL_USERNAME}>`;
  }

  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(path.join(__dirname, `templates/${template}.pug`), {
      to: this.to,
      subject,
    });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: convert(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the D-SHOP!');
  }

  async sendPasswordReset() {
    await this.send('passwordReset', 'Your password reset token (valid for only 10 minutes)');
  }

  async notifyOrder() {
    await this.send('thanks', 'Cảm ơn bạn đã mua hàng tại D-SHOP!');
  }
};
