const nodemailer = require('nodemailer');
const {user, pass} = require('./logAuth');

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
      user: user,
      pass: pass,
    }
  });

const jobSend = (req, res) => {

  let message = ``

  const mailOptions = {
    from: 'admin@resteelexpressservices.com',
    to: 'contact-us@resteelexpress.com',
    subject: 'Job Application',
    html: message,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('Email sent');
      res.json({ status: 'success' });
    }
  });
};

module.exports = jobSend
