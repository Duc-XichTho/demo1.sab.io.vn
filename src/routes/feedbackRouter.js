import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

router.post("/", async (req, res) => {
  const { senderName, senderEmail, title, body } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    cc: 'dung@xichtho-vn.com',
    subject: `[Feedback] ${title}`,
    text: `
    Người gửi: ${senderName}\n
    Email: ${senderEmail}\n
    Nội dung:\n\n${body}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      code: 'OK',
      message: "Email sent successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 'ERROR',
      message: "Error sending email"
    });
  }
})

export default router;