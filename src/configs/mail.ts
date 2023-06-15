import nodemailer from "nodemailer";

interface MailOptions {
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (options: MailOptions) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    //@ts-ignore
    host: process.env.EMAIL_HOST || "sandbox.smtp.mailtrap.io",
    port: process.env.EMAIL_PORT || 2525,
    auth: {
      user: process.env.EMAIL_USERNAME || "f7de7083fce3a1",
      pass: process.env.EMAIL_PASSWORD || "71f5d6846bd697",
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: "Admin CBT",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
