const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_MAIL_API_KEY);

const mailSender = async (email, title, body) => {
  try {
    const msg = {
      to: email,
      from: `StudyNotion <${process.env.MAIL_USER}>`,
      subject: title,
      html: body,
    };

    const info = await sgMail.send(msg);

    console.log("Message sent: ", info);

    return info;
  } catch (error) {
    console.log("Error: ", error, error.message);
  }
};

module.exports = mailSender;
