import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shekaigarcia@gmail.com",
    pass: "qbrs qsyc voda ltit",
  },
});

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const { name, email, company, message } = body;

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e9d5ff;border-radius:12px;">
      <h2 style="color:#7c3aed;margin-bottom:8px;">New Portfolio Message</h2>
      <p style="color:#6b7280;font-size:14px;margin-bottom:24px;">Someone reached out via the contact form</p>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:100px;">Name</td><td style="padding:8px 0;font-weight:600;color:#111827;">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td><td style="padding:8px 0;font-weight:600;color:#111827;"><a href="mailto:${email}" style="color:#7c3aed;">${email}</a></td></tr>
        ${company ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Company</td><td style="padding:8px 0;font-weight:600;color:#111827;">${company}</td></tr>` : ""}
      </table>
      <div style="margin-top:20px;background:#fdf4ff;border-radius:8px;padding:16px;">
        <p style="color:#6b7280;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
        <p style="color:#111827;line-height:1.6;white-space:pre-wrap;">${message}</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: '"Portfolio Contact" <shekaigarcia@gmail.com>',
      to: ["shekaigarcia@gmail.com", "berlyneugenio657@gmail.com"],
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html,
    });
    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("[CONTACT_MAIL_ERROR]", error);
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 });
  }
}
