"use strict";
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const { convertSkypackImportMapToLockfile } = require("snowpack/lib/cjs/util");


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


exports.contact = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Contact Sent", {structuredData: true});
  response.set("Access-Control-Allow-Origin", "*");
  response.ok = true;
  response.send();
  const body = JSON.parse(request.body);

  const mail = async () => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'sigmund.tromp66@ethereal.email',
            pass: 'hfFyNmKDS4J3qQHu8j'
        }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `<${body.email}>`, // sender address
      to: "admin@tanukitech.dev", // list of receivers
      subject: "TanukiTech.dev Contact", // Subject line
      text: `${body.message}`, // plain text body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  mail().catch(console.error);
});
