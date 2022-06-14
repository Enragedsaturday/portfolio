const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


exports.contact = functions.https.onRequest(async (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  response.ok = true;
  response.send();
  const body = JSON.parse(request.body);
  console.log(body);

  const mail = async () => {
    const transporter = nodemailer.createTransport({
      host: "premium63.web-hosting.com",
      port: 465,
      auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.KEY}`,
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `<${process.env.EMAIL}>`, // sender address
      replyTo: `${body.email}`,
      to: `${body.to}`, // list of receivers
      subject: `${body.subject}`, // Subject line
      text: `${body.message}`, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  };

  mail().catch(console.error);
});
