// перенести в сервисы

const nodemailer = require("nodemailer");
const config = require("./environment");

async function sendVerificationMail(userEmail, emailText) {
  let transporter = nodemailer.createTransport({
    service: `${config.mail.service}`,
    port: 587,
    secure: false,
    auth: {
      user: config.mail.address,
      pass: config.mail.password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: `"Awesome Cleaning" <${config.mail.address}>`,
    to: `${userEmail}`,
    subject: "Awesome Cleaning email confirmation",
    html: emailText
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    // delete
    console.log(info);
  }
  catch (err) {
    // should handle error
    console.log(err)
  }
}

module.exports = sendVerificationMail;



