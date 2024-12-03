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

const creditSend = (req, res) => {

  let message = `<p style="text-align: center;"><strong>Credit Application</strong></p>
<strong>Name:</strong> ${req.body.state.name}<br /><strong>Date:</strong> ${req.body.state.date}<br /><strong>Email Address:</strong> ${req.body.state.email}<br /><strong>Phone#:</strong> ${req.body.state.phone}<br /><strong>Fax#:</strong> ${req.body.state.fax}<br /><strong>Accounts Payable Phone#:</strong> ${req.body.state.payablePhone}<br /><strong>Accounts Payable Email:</strong> ${req.body.state.payableEmail}<br /><strong>Billing Address:</strong> ${req.body.state.billing}<br /><strong>Mailing Address:</strong> ${req.body.state.mailing}<br /><strong>Type of Business:</strong> ${req.body.state.businessType}<br /><strong>Federal ID Number:</strong> ${req.body.state.federalId}<br /><strong>Principals:</strong><br />(1 of 3)<br /><strong>Name:</strong> ${req.body.state.princName1}<br /><strong>Title:</strong> ${req.body.state.princTitle1}<br /><strong>Phone#:</strong> ${req.body.state.princPhone1}<br /><strong>Email Address:</strong> ${req.body.state.princEmail1}<br /><strong>Mailing Address:</strong> ${req.body.state.princMailing1}<br />(2 of 3)<br /><strong>Name:</strong> ${req.body.state.princName2}<br /><strong>Title:</strong> ${req.body.state.princTitle2}<br /><strong>Phone#:</strong> ${req.body.state.princPhone2}<br /><strong>Email Address:</strong> ${req.body.state.princEmail2}<br /><strong>Mailling Address:</strong> ${req.body.state.princMailing2}<br />(3 of 3)<br /><strong>Name:</strong> ${req.body.state.princName3}<br /><strong>Title:</strong> ${req.body.state.princTitle3}<br /><strong>Phone#:</strong> ${req.body.state.princPhone3}<br /><strong>Email Address:</strong> ${req.body.state.princEmail3}<br /><strong>Mailing Address:</strong> ${req.body.state.princMailing3}<br /><strong>Referernces:</strong><br />(1 of 3)<br /><strong>Name:</strong> ${req.body.state.refName1}<br /><strong>Phone#:</strong> ${req.body.state.refPhone1}<br /><strong>Email:</strong> ${req.body.state.refEmail1}<br /><strong>Address:</strong> ${req.body.state.refAddress1}<br /><strong>Account Number:</strong> ${req.body.state.refAccount1}<br /><strong>Contact:</strong> ${req.body.state.refContact1}<br />(2 of 3)<br /><strong>Name:</strong> ${req.body.state.refName2}<br /><strong>Phone#:</strong> ${req.body.state.refPhone2}<br /><strong>Email:</strong> ${req.body.state.refEmail2}<br /><strong>Address:</strong> ${req.body.state.refAddress2}<br /><strong>Account Number:</strong> ${req.body.state.refAccount2}<br /><strong>Contact:</strong>&nbsp;${req.body.state.refContact2}<br />(3 of 3)<br /><strong>Name:</strong> ${req.body.state.refName3}<br /><strong>Phone#:</strong> ${req.body.state.refPhone3}<br /><strong>Email:</strong> ${req.body.state.refEmail3}<br /><strong>Address:</strong> ${req.body.state.refAddress3}<br /><strong>Account Number:</strong> ${req.body.state.refAccount3}<br /><strong>Contact:</strong> ${req.body.state.refContact3}<br /><strong>Bank References:</strong><br /><strong>Name:</strong> ${req.body.state.bankName}<br /><strong>Address:</strong> ${req.body.state.bankAddress}<br /><strong>Account Number:</strong> ${req.body.state.bankAccount}<br /><strong>Officer:</strong> ${req.body.state.bankOfficer}<br /><strong>Phone#:</strong> ${req.body.state.bankPhone}<br /><strong>Fax#:</strong> ${req.body.state.bankFax}<br/>TERMS OF PAYMENT ARE NET THIRTY (30) DAYS FROM THE DATE OF THE INVOICE, UNLESS EXPRESSLY STATED OTHERWISE ON THE FRONT OF THE INVOICE. ALL UNPAID BALANCES ARE DEEMED PAST DUE THIRTY (30) DAYS AFTER THE INVOICE DATE. SELLER MAY, IN ITS SOLE AND ABSOLUTE DISCRETION, DELAY ANY SHIPMENTS WITHOUT ANY NOTICE WHATSOEVER TO ANY ACCOUNTS WHICH ARE PAST DUE. INTEREST WILL ACCRUE AT THE RATE OF ONE AND ONE-HALF PERCENT (1.5%) PER MONTH ON ALL UNPAID AMOUNTS COMMENCING THIRTY (30) DAYS AFTER THE DATE OF THE INVOICE. SELLER RESERVES THE RIGHT TO INSIST ON FULL PAYMENT IN CASH PRIOR TO DELIVERING GOODS TO THE BUYER. IN THE EVENT SELLER REFERS THIS ACCOUNT TO AN ATTORNEY TO ENFORCE ITS RIGHTS, THE BUYER SHALL PAY EXPENSES THEREOF, INCLUDING ATTORNEY'S FEES AND COLLECTION FEES.<br/>${req.body.state.terms}`

  const mailOptions = {
    from: 'admin@resteelexpressservices.com',
    to: 'sales@resteelexpress.com',
    subject: 'Credit Application',
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

module.exports = creditSend
