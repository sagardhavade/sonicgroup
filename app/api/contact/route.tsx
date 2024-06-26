import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const { name, email, message, phone, subject } = await req.json();
  console.log("Server log", name, email, message, phone);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.USER,
    subject: `Website Submission from ${subject}`,
    replyTo: email,
    html: `
      <p>Name:</p>
      <p>  ${name} </p>
      <p>Message:</p>
      <p>  ${message} </p>
      <p>Email:</p>
      <p>  ${email} </p>
      <p>Phone:</p>
      <a href="tel:${phone}">${phone}</a>
    `,
    text: `${message} Send from ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "Ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
};
