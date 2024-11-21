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

  let message = `<b>Name:</b> ${state.name}<br/><b>Date:</b> ${state.date}<br/><b>Email Address:</b> ${state.email}<br/><b>Phone#:</b> ${state.phone}<br/><b>Fax#:</b> ${state.fax}<br/><b>Accounts Payable Phone#:</b> ${state.payablePhone}<br/><b>Accounts Payable Email:</b> ${state.payableEmail}<br/><b>Billing Address:</b> ${state.billing}<br/><b>Mailing Address:</b> ${state.mailing}<br/><b>Type of Business:</b> ${state.businessType}<br/><b>Federal ID Number:</b> ${state.federalId}<br/><b>Principals:</b><br/>(1 of 3)<br/><b>Name:</b> ${state.princName1}<br/><b>Title:</b> ${state.princTitle1}<br/><b>Phone#:</b> ${state.princPhone1}<br/><b>Email Address:</b> ${state.princEmail1}<br/><b>Mailing Address:</b> ${state.princMailing1}<br/>(2 of 3)<br/><b>Name:</b> ${state.princName2}<br/><b>Title:</b> ${state.princTitle2}<br/><b>Phone#:</b> ${state.princPhone2}<br/><b>Email Address:</b> ${state.princEmail2}<br/><b>Mailling Address:</b> ${state.princMailing2}<br/>(3 of 3)<br/><b>Name:</b> ${state.princName3}<br/><b>Title:</b> ${state.princTitle3}<br/><b>Phone#:</b> ${state.princPhone3}<br/><b>Email Address:</b> ${state.princEmail3}<br/><b>Mailing Address:</b> ${state.princMailing3}<br/><b>Referernces:</b><br/>(1 of 3)<br/><b>Name:</b> ${state.refName1}<br/><b>Phone#:</b> ${state.refPhone1}<br/><b>Email:</b> ${state.refEmail1}<br/><b>Address:</b> ${state.refAddress1}<br/><b>Account Number:</b> ${state.refAccount1}<br/><b>Contact:</b> ${state.refContact1}<br/>(2 of 3)<br/><b>Name:</b> ${state.refName2}<br/><b>Phone#:</b> ${state.refPhone2}<br/><b>Email:</b> ${state.refEmail2}<br/><b>Address:</b> ${state.refAddress2}<br/><b>Account Number:</b> ${state.refAccount2}<br/><b>Contact:</b> <${state.refContact2}br/>(3 of 3)<br/><b>Name: ${state.refName3}<br/><b>Phone#:</b> ${state.refPhone3}<br/><b>Email:</b> ${state.refEmail3}<br/><b>Address:</b> ${state.refAddress3}<br/><b>Account Number:</b> ${state.refAccount3}<br/><b>Contact:</b> ${state.refContact3}<br/><b>Bank References:</b><br/><b>Name:</b> ${state.bankName}<br/><b>Address:</b> ${state.bankAddress}<br/><b>Account Number:</b> ${state.bankAccount}<br/><b>Officer:</b> ${state.bankOfficer}<br/><b>Phone#:</b> ${state.bankPhone}<br/><b>Fax#:</b> ${state.bankFax}<br/>`

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
