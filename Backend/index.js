const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'businessdevdev75@gmail.com',
    pass: 'sandesh123*'
  }
});

app.post('/send-email', (req, res) => {
  const { Email, code } = req.body;

  const mailOptions = {
    from: 'bk10sandesh@gmail.com',
    to: Email,
    subject: 'Your Verification Code',
    text: `Your verification code is: ${code}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
