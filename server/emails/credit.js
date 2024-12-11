const nodemailer = require('nodemailer');
const {user, pass} = require('./logAuth');

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

const creditSend = (req, res) => {

  let message = `<p style="text-align: center;"><strong>Credit Application</strong></p>
<strong>Name:</strong> ${req.body.name}<br /><strong>Date:</strong> ${req.body.date}<br /><strong>Email Address:</strong> ${req.body.email}<br /><strong>Phone#:</strong> ${req.body.phone}<br /><strong>Fax#:</strong> ${req.body.fax}<br /><strong>Accounts Payable Phone#:</strong> ${req.body.payablePhone}<br /><strong>Accounts Payable Email:</strong> ${req.body.payableEmail}<br /><strong>Billing Address:</strong> ${req.body.billing}<br /><strong>Mailing Address:</strong> ${req.body.mailing}<br /><strong>Type of Business:</strong> ${req.body.businessType}<br /><strong>Federal ID Number:</strong> ${req.body.federalId}<br /><strong>Principals:</strong><br />(1 of 3)<br /><strong>Name:</strong> ${req.body.princName1}<br /><strong>Title:</strong> ${req.body.princTitle1}<br /><strong>Phone#:</strong> ${req.body.princPhone1}<br /><strong>Email Address:</strong> ${req.body.princEmail1}<br /><strong>Mailing Address:</strong> ${req.body.princMailing1}<br />(2 of 3)<br /><strong>Name:</strong> ${req.body.princName2}<br /><strong>Title:</strong> ${req.body.princTitle2}<br /><strong>Phone#:</strong> ${req.body.princPhone2}<br /><strong>Email Address:</strong> ${req.body.princEmail2}<br /><strong>Mailling Address:</strong> ${req.body.princMailing2}<br />(3 of 3)<br /><strong>Name:</strong> ${req.body.princName3}<br /><strong>Title:</strong> ${req.body.princTitle3}<br /><strong>Phone#:</strong> ${req.body.princPhone3}<br /><strong>Email Address:</strong> ${req.body.princEmail3}<br /><strong>Mailing Address:</strong> ${req.body.princMailing3}<br /><strong>Referernces:</strong><br />(1 of 3)<br /><strong>Name:</strong> ${req.body.refName1}<br /><strong>Phone#:</strong> ${req.body.refPhone1}<br /><strong>Email:</strong> ${req.body.refEmail1}<br /><strong>Address:</strong> ${req.body.refAddress1}<br /><strong>Account Number:</strong> ${req.body.refAccount1}<br /><strong>Contact:</strong> ${req.body.refContact1}<br />(2 of 3)<br /><strong>Name:</strong> ${req.body.refName2}<br /><strong>Phone#:</strong> ${req.body.refPhone2}<br /><strong>Email:</strong> ${req.body.refEmail2}<br /><strong>Address:</strong> ${req.body.refAddress2}<br /><strong>Account Number:</strong> ${req.body.refAccount2}<br /><strong>Contact:</strong>&nbsp;${req.body.refContact2}<br />(3 of 3)<br /><strong>Name:</strong> ${req.body.refName3}<br /><strong>Phone#:</strong> ${req.body.refPhone3}<br /><strong>Email:</strong> ${req.body.refEmail3}<br /><strong>Address:</strong> ${req.body.refAddress3}<br /><strong>Account Number:</strong> ${req.body.refAccount3}<br /><strong>Contact:</strong> ${req.body.refContact3}<br /><strong>Bank References:</strong><br /><strong>Name:</strong> ${req.body.bankName}<br /><strong>Address:</strong> ${req.body.bankAddress}<br /><strong>Account Number:</strong> ${req.body.bankAccount}<br /><strong>Officer:</strong> ${req.body.bankOfficer}<br /><strong>Phone#:</strong> ${req.body.bankPhone}<br /><strong>Fax#:</strong> ${req.body.bankFax}<br/>TERMS OF PAYMENT ARE NET THIRTY (30) DAYS FROM THE DATE OF THE INVOICE, UNLESS EXPRESSLY STATED OTHERWISE ON THE FRONT OF THE INVOICE. ALL UNPAID BALANCES ARE DEEMED PAST DUE THIRTY (30) DAYS AFTER THE INVOICE DATE. SELLER MAY, IN ITS SOLE AND ABSOLUTE DISCRETION, DELAY ANY SHIPMENTS WITHOUT ANY NOTICE WHATSOEVER TO ANY ACCOUNTS WHICH ARE PAST DUE. INTEREST WILL ACCRUE AT THE RATE OF ONE AND ONE-HALF PERCENT (1.5%) PER MONTH ON ALL UNPAID AMOUNTS COMMENCING THIRTY (30) DAYS AFTER THE DATE OF THE INVOICE. SELLER RESERVES THE RIGHT TO INSIST ON FULL PAYMENT IN CASH PRIOR TO DELIVERING GOODS TO THE BUYER. IN THE EVENT SELLER REFERS THIS ACCOUNT TO AN ATTORNEY TO ENFORCE ITS RIGHTS, THE BUYER SHALL PAY EXPENSES THEREOF, INCLUDING ATTORNEY'S FEES AND COLLECTION FEES.<br/>${req.body.terms}`

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
