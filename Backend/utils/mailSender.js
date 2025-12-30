const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    console.log("Sending mail to: ", email);

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false, 
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,
    });

    console.log("Transporter created: ", transporter);

    let info = await transporter.sendMail({
      from: "StudyNotion -by Ujjwal Saini",
      to: email,
      subject: title,
      html: body,
    });

    console.log("Message sent: ", info);

    return info;
  } catch (error) {
    console.log("Error: ", error, error.message);
  }
};

module.exports = mailSender;
