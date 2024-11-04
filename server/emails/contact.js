import express from 'express';
const app = express();
import nodemailer from 'nodemailer';

  const transport = nodemailer.createTransport ({
    host: 'smtpout.secureserver.net',
    secure: true,
    secureConnection: false,
    tls: {
      ciphers: 'SSLv3'
    },
    requireTLS: true,
    port: 465,
    auth: {
      user: 'sales@resteelexpress.com',
      pass: '!1RESteelsales',
    }
  });

const contactSend = (req, res) => {

  const mailOptions = {
    from: 'admin@resteelexpressservices.com',
    to: 'contact-us@resteelexpress.com',
    text: `From: ${req.body.email}\n\n${req.body.name}\n\n${req.body.message}`,
  };

  transport.sendMail(mailOptions, (error, infor) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('Email sent');
      res.json({ status: 'success' });
    }
  });
};

export default contactSend;
