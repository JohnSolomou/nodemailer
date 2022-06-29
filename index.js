const nodemailer = require("nodemailer");
require("dotenv").config();
let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jsolomou79@gmail.com",
    pass: process.env.PASSWORD,
  },
});
let details = {
  from: "jsolomou79@gmail.com",
  to: "msolomou02@gmail.com",
  subject: "testing nodemailer emailing you from vscode",
  text: "testing our first email with node. let me know if this has been sent to your email.",
};

mailTransporter.sendMail(details, (err) => {
  if (err) {
    console.log("there is an error", err);
  } else {
    console.log("email has sent!");
  }
});
