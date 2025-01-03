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

const quoteSend = (req, res) => {

  let message = `<p style="text-align: center;"><strong>Quote</strong></p><b>Name:</b> ${req.body.state.name}<br/> <b>Phone #:</b> ${req.body.state.phone}<br/> <b>Email:</b> ${req.body.state.email}<br/> <b>Company Name:</b> ${req.body.state.company}<br/> <b>Project Name:</b> ${req.body.state.project}<br/> <b>Company Address:</b> ${req.body.state.address}<br/> <b>Shipping Address:</b> ${req.body.state.shipping}<br/> <b>Interested In:</b> <br/><b>Mesh:</b>${req.body.state.mesh} <b>Rebar:</b>${req.body.state.rebar} <b>Accessories:</b>${req.body.state.access}<br/> <b>Comments:</b> ${req.body.state.comments}<br/> <b>Files</b> ${req.body.state.files}`

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
