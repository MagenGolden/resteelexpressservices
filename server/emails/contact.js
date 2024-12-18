const nodemailer = require('nodemailer');
const {user, pass} = require('./logAuth');
const logEvents = require('../logEvents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));


const transport = nodemailer.createTransport ({
  host: 'smtp.office365.com',
  secure: false,
  secureConnection: false,
  tls: {
      ciphers: 'SSLv3'
    },
    requireTLS: true,
    port: 587,
    auth: {
      user: user,
      pass: pass,
    }
  });

const contactSend = (req, res) => {

  let message = `<b>From:</b> ${req.body.email}<br /> <b>Name:</b> ${req.body.name}<br /> <b>Message:</b> ${req.body.message}`

  const mailOptions = {
    from: 'admin@resteelexpressservices.com',
    to: 'contact-us@resteelexpress.com',
    subject: 'Contact Form',
    html: message,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      myEmitter.emit('log', `${error.name}: ${error.message}`, 'error.txt');
      res.send(error);
    } else {
      console.log('Email sent');
      res.json({ status: 'success' });
    }
  });
};

module.exports = contactSend
