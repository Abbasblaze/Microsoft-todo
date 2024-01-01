// "Task has been assigned successfully";
// "Error occurred while creating the task.";

// SELECT id, tasks, reminders, plantasks, assignedtask
// FROM (
//     SELECT id, task AS tasks, NULL AS reminders, NULL AS plantasks, NULL AS assignedtask FROM public.task
//     UNION ALL
//     SELECT id, NULL AS tasks, reminder AS reminders, NULL AS plantasks, NULL AS assignedtask FROM public.reminder
//     UNION ALL
//     SELECT id, NULL AS tasks, NULL AS reminders, plantasks, NULL AS assignedtask FROM public.plannedtasks
//     UNION ALL
//     SELECT id, NULL AS tasks, NULL AS reminders, NULL AS plantasks, assignedtask FROM public.assigned
// ) AS combined
// WHERE tasks IS NOT NULL OR reminders IS NOT NULL OR plantasks IS NOT NULL OR assignedtask IS NOT NULL;

// // const db = require("../db");
// // const mail = require("./mail.controller");

// // const sendMail = async (req, res) => {
// //   try {
// //     const testaccount = await nodeMailer.createTestAccount();

// //     const transporter = nodeMailer.createTransport({
// //       host: "smtp.ethereal.email",
// //       port: 587,
// //       auth: {
// //         user: "keaton.waelchi47@ethereal.email",
// //         pass: "MBXmZkJGJ7R9hGpCzC",
// //       },
// //     });

// //     const info = await transporter.sendMail({
// //       from: '"Abbas Raza👻" <keaton.waelchi47@ethereal.email>',
// //       to: "abbas.raazaa40@gmail.com",
// //       subject: "Hello Abbas ✔",
// //       text: "Hello Raza?",
// //       html: "<b>Hello Raza?</b>",
// //     });

// //     console.log("Email sent: %s", info.messageId);
// //     res.json(info);
// //   } catch (error) {
// //     console.error("Error sending email:", error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // };

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "keaton.waelchi47@ethereal.email",
//     pass: "MBXmZkJGJ7R9hGpCzC",
//   },
// });

// async function main() {
//   const info = await transporter.sendMail({
//     from: '"HI 👻" <keaton.waelchi47@ethereal.email>',
//     to: "abbas.raazaa40@gmail.com",
//     subject: "Hello ✔",
//     text: "Hello world?",
//     html: "<b>Hello world?</b>",
//   });

//   console.log("Message sent: %s", info.messageId);
// }

// main().catch(console.error);

// app.get("/sendMail", sendMail);
