"use server";
import { createTransport } from "nodemailer";

export async function ActionSendMail(
  target: string,
  title: string,
  content: string,
) {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  } as any);

  await transporter.sendMail({
    from: process.env.SMTP_SENDER, // sender address
    to: target, // list of receivers
    subject: title, // Subject line
    text: content, // plain text body
  });
}
