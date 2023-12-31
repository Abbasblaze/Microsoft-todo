const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testaccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "kaela.parisian41@ethereal.email",
      pass: "YEc6vGcHPbhS9JAX7D",
    },
  });

  const info = await transporter.sendMail({
    from: '"Abbas Razq👻" <kaela.parisian41@ethereal.email>',
    to: "abbas.raazaa40@gmail.com",
    subject: "Hello Abbas ✔",
    text: "Hello Raza?",
    html: "<b>Hello Raza?</b>",
  });

  console.log("I hate you %s", info.messageId);
  res.json(info);
  req.send("I am sending mail");
};

module.exports = nodemailer;
