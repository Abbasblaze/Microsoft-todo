const nodeMailer = require("nodemailer");
// require("dotenv").config;

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 8080,
  secure: false,
  auth: {
    user: "keaton.waelchi47@ethereal.email",
    pass: "MBXmZkJGJ7R9hGpCzC",
  },
});

const mailBody = {
  from: '"HI 👻" <keaton.waelchi47@ethereal.email>',
  to: "abbas.raazaa40@gmail.com",
  subject: "Hello ✔",
  text: "Hello world?",
  html: "<b>Hello world?</b>",
};

const sendMail = async (transporter, mailBody) => {
  try {
    await transporter.sendMail();
    console.log("email has been send successfully");
  } catch (error) {
    console.log(error);
  }
};

sendMail(transporter, mailBody);

//

app.get("/mail", sendMail);
