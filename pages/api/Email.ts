export default function (req: any, res: any) {
  const { Name, Email, Message, Subject } = req.body;
  console.log(Name, Email, Message, Subject);
  
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "brokar.hsm@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: Email,
    to: "brokar.hsm@gmail.com",
    subject: Subject,
    text: Message,
    html: `<h3>${Name}</h3><br><div>${Message}</div><p>Sent from:
      ${Email}</p>`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
  });
  res.status(200).send("Email sent");
}
