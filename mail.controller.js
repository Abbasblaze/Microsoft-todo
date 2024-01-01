const nodeMailer = require("nodemailer");
require("dotenv").config;

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
    name: Abbas,
    Address: process.env.USER,
  },
  to: "whygaming50@gmail.com",
  subject: "Testing my nodemailer ✔",
  text: "If you get this Email The Nodemailer is working good!! ",
};

const sendMail = async (transporter, sendMail) => {
  try {
    await transporter.sendMail();
    console.log("email has been send successfully");
  } catch (error) {
    console.log(error);
  }
};

sendMail(transporter, mailOptions);

app.get("/mail", sendMail);
