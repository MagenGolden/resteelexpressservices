const nodemailer = require('nodemailer');
const logEvents = require('./logEvents');
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
      user: process.env.ADMIN,
      pass: process.env.PASS,
    }
  });

const quoteSend = (req, res) => {

  let message = `<p style="text-align: center;"><strong>Quote</strong></p><b>Name:</b> ${req.body.name}<br/> <b>Phone #:</b> ${req.body.phone}<br/> <b>Email:</b> ${req.body.email}<br/> <b>Company Name:</b> ${req.body.company}<br/> <b>Project Name:</b> ${req.body.project}<br/> <b>Company Address:</b> ${req.body.address}<br/> <b>Shipping Address:</b> ${req.body.shipping}<br/> <b>Interested In:</b> <br/><b>Mesh:</b> ${req.body.mesh} <b>Rebar:</b> ${req.body.rebar} <b>Accessories:</b> ${req.body.access}<br/> <b>Comments:</b> ${req.body.comments}<br/>`

  const mailOptions = {
    from: 'admin@resteelexpressservices.com',
    to: 'sales@resteelexpress.com',
    subject: 'Quote Form',
    html: message,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      myEmitter.emit('log', `${error.name}: ${error.message}`, 'errLog.txt');
      res.send(error);
    } else {
      console.log('Email sent');
      res.json({ status: 'success' });
    }
  });
};

module.exports = quoteSend
