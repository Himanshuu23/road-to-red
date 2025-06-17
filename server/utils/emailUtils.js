const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || "himanshusagar_23ee105@dtu.ac.in",
    pass: process.env.EMAIL_PASS || "mxxm gmrg vpzj xbgx"
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendReminderEmail = async (to, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Get Back to Solving Problems!',
    text: `Hi ${name},\n\nYou haven't solved any problems on Codeforces recently. Time to get back on track! 🚀`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendReminderEmail };
