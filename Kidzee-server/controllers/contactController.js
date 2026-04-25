import nodemailer from "nodemailer";

export const sendEnquiry = async (req, res) => {
  try {
    const { parentName, childName, age, phone, email, message } = req.body;

    // ✅ TRANSPORTER (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ EMAIL CONTENT
    const mailOptions = {
      from: `"Kidzee Enquiry" <${process.env.EMAIL_USER}>`,
      to: 'fuloriajyoti25@gmail.com',
      subject: "New Enquiry Received 🚀",
      html: `
        <h2>New Enquiry Form Submission</h2>
        <p><b>Parent Name:</b> ${parentName}</p>
        <p><b>Child Name:</b> ${childName}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Email failed" });
  }
};
