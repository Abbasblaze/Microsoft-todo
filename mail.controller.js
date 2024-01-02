const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: "Abbas",
      address: process.env.USER,
    },
    to: "whygaming50@gmail.com",
    subject: "Testing my nodemailer ✔",
    text: "If you get this email, Nodemailer is working well!",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error.message);
    } else {
      console.log("Email has been sent successfully:", info.response);
    }
  });
};

module.exports = { sendMail };
