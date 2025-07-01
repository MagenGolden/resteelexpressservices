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

const projectSend = (req, res) => {

  let message = `<p><strong>Contractor</strong>:&nbsp;${req.body.contractor}</p>
<p><strong>Mailing Address</strong>:&nbsp;${req.body.mailing}</p>
<p><strong>Purchasing Agent</strong>:&nbsp;${req.body.purchaser}</p>
<p><strong>Billing Address</strong>:&nbsp;${req.body.billing}</p>
<p><strong>Project Name</strong>:&nbsp;${req.body.project}</p>
<p><strong>Job#</strong>:&nbsp;${req.body.job}</p>
<p><strong>PO#</strong>:&nbsp;${req.body.po}</p>
<p><strong>Project Address</strong>:&nbsp;${req.body.address}</p>
<p><strong>Site contact</strong></p>
<p>&emsp;Name: ${req.body.contactName}&emsp;&emsp;Phone#:&nbsp;${req.body.contactNum}</p>
<p><strong>Project Manager</strong></p>
<p>&emsp;Name: ${req.body.managerName}&emsp;&emsp;Phone#:&nbsp;${req.body.managerNum}</p>
<p>Start Date:&nbsp;${req.body.date}</p>
<p><strong>Payment Type</strong>:&nbsp;${req.body.payment}</p>
<p>Are you tax exempt?&nbsp;${req.body.tax}</p>
<p>Will materials&nbsp; be delivered or picked up?&nbsp;${req.body.deliver}</p>
<p>Will your project require mill test reports?&nbsp;${req.body.certs}</p>`

  const mailOptions = {
    from: 'admin@resteelexpressservices.com',
    to: 'sales@resteelexpress.com',
    subject: 'New Project Form',
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

module.exports = projectSend
