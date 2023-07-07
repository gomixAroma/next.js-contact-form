import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendMail(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const ToHostMail = {
    from: req.body.email,
    to: "xj665488@gmail.com",
    subject: `[お問い合わせ]${req.body.name} 様より`,
    text: `${req.body.message} Send form ${req.body.email}`,
    html: `
        <p>[お名前]</p>
        <p>${req.body.name}</p>
        <p>[内容]</p>
        <p>${req.body.message}</p>
        <p>[メールアドレス]</p>
        <p>${req.body.email}</p>
    `,
  };

  transporter.sendMail(ToHostMail, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  return res.send("成功");
}
