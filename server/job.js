const nodemailer = require('nodemailer');
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
      user: process.env.ADMIN,
      pass: process.env.PASS,
    }
  });

const jobSend = (req, res) => {

  let education = req.body.education;
  let work = req.body.work;
  let message = `<p style="text-align: center;"><strong>Job Application</strong></p>
<p style="text-align: left;"><strong>Name:</strong> ${req.body.state.name}</p>
<p style="text-align: left;"><strong>Date:</strong> ${req.body.state.date}</p>
<p style="text-align: left;"><strong>Present Address:&nbsp;</strong> ${req.body.state.address}</p>
<p style="text-align: left;"><strong>How long have you lived at current address?</strong> ${req.body.state.addressYears}</p>
<p style="text-align: left;"><strong>Phone#:&nbsp;</strong> ${req.body.state.phone}</p>
<p style="text-align: left;"><strong>Social Security#:&nbsp;</strong> ${req.body.state.social}</p>
<p style="text-align: left;"><strong>Date of Birth:&nbsp;</strong>${req.body.state.dob}</p>
<p style="text-align: left;"><strong>Position applied for:&nbsp;</strong> ${req.body.state.position}</p>
<hr />
<p style="text-align: left;"><strong>Days/Hours Available to work:</strong></p>
<p style="text-align: left;">No Preference: ${req.body.state.noPerf}&emsp;Mon: ${req.body.state.mon}&emsp;Tue: ${req.body.state.tue}&emsp;Wed: ${req.body.state.wed}&emsp;Thu: ${req.body.state.thu}&emsp;Fri: ${req.body.state.fri}&emsp;Sat:&nbsp;${req.body.state.sat}</p>
<p style="text-align: left;">&nbsp;<strong>How many hours can you work weekly?</strong> ${req.body.state.weekly}</p>
<p style="text-align: left;"><strong>Employment type desired:&nbsp;</strong> ${req.body.state.employType}</p>
<p style="text-align: left;"><strong>Date Available for Employment:&nbsp;</strong> ${req.body.state.employDate}</p>
<hr />
<p style="text-align: left;"><strong>Educational Background:</strong></p>
  ${education.map(ed =>
  `<p style="text-align: left;"><strong>Name of School:</strong> ${ed.school}</p>
  <p style="text-align: left;"><strong>Type of School:</strong> ${ed.schoolType}</p>
  <p style="text-align: left;"><strong>Location:</strong> ${ed.schoolLocation}</p>
  <p style="text-align: left;"><strong>Number of Years Completed:</strong> ${ed.schoolNum}</p>
  <p style="text-align: left;"><strong>Major &amp; Degree:</strong> ${ed.degree}</p>`
  )}
  <hr />
  <p style="text-align: left;"><strong>Background Information:</strong></p>
  <p style="text-align: left;"><strong>Can you pass a drug test?&nbsp;</strong>${req.body.state.drugTest}</p>
  <p style="text-align: left;"><strong>Do you have a dependable vehicle to travel to and from work?&nbsp;</strong>${req.body.state.vehicle}</p>
  <p style="text-align: left;"><strong>Do you have a driver's license?&nbsp;</strong>${req.body.state.license}</p>
<p style="text-align: left;"><strong>Driver's License Number:&nbsp;</strong>${req.body.state.licenseNum}</p>
  <p style="text-align: left;"><strong>State of Issue:&nbsp;</strong>${req.body.state.licenseState}</p>
  <p style="text-align: left;"><strong>Type of License:&nbsp;</strong>${req.body.state.licenseType}</p>
  <p style="text-align: left;"><strong>Expiration Date:&nbsp;</strong>${req.body.state.licenseExpir}</p>
  <p style="text-align: left;"><strong>Have you had any accidents during the past three years?&nbsp;</strong>${req.body.state.accidents}</p>
  <p style="text-align: left;"><strong>If yes, how many?&nbsp;</strong>${req.body.state.accidentsNum}</p>
  <p style="text-align: left;"><strong>Have you had any moving violations in the past three years?&nbsp;</strong>${req.body.state.violations}</p>
  <p style="text-align: left;"><strong>If yes, how many?&nbsp;</strong>${req.body.state.violationsNum}</p>
  <p style="text-align: left;"><strong>Have you ever been convicted of a crime?&nbsp;</strong>${req.body.state.convicted}</p>
  <p style="text-align: left;"><strong>If yes, explain the number of convictions, nature of the offense(s) leading to conviction(s), how recently such offense(s) was/were committed, sentence(s) imposed, and type(s) of rehabilitation.&nbsp;</strong></p>${req.body.state.convictedEx}
<hr />
<p style="text-align: left;"><strong>Military History:</strong></p>
<p style="text-align: left;"><strong>Have you ever been in the Armed Forces?&nbsp;</strong>${req.body.state.served}</p>
<p style="text-align: left;"><strong>Are you now a member of the National Guard?</strong>${req.body.state.guard}</p>
<p style="text-align: left;"><strong>Position Held:&nbsp;</strong>${req.body.state.servicePosition}</p>
<p style="text-align: left;"><strong>Date Entered:&nbsp;</strong>${req.body.state.serviceStart}</p>
<p style="text-align: left;"><strong>Date Discharged:&nbsp;</strong>${req.body.state.serviceEnd}</p>
<hr />
<p style="text-align: left;"><strong>References:&nbsp;</strong></p>
<p style="text-align: left;"><strong>(1)</strong></p>
<p style="text-align: left;"><strong>Name:&nbsp;</strong>${req.body.state.refName1}</p>
<p style="text-align: left;"><strong>Relationship:&nbsp;</strong>${req.body.state.refRelate1}</p>
<p style="text-align: left;"><strong>Job Title:&nbsp;</strong>${req.body.state.refJob1}</p>
<p style="text-align: left;"><strong>Employer (Company Name):&nbsp;</strong>${req.body.state.refEmployer1}</p>
<p style="text-align: left;"><strong>Years Known:&nbsp;</strong>${req.body.state.refYears1}</p>
<p style="text-align: left;"><strong>Phone#:&nbsp;</strong>${req.body.state.refPhone1}</p>
<p style="text-align: left;"><strong>(2)</strong></p>
<p style="text-align: left;"><strong>Name:&nbsp;</strong>${req.body.state.refName2}</p>
<p style="text-align: left;"><strong>Relationship:&nbsp;</strong>${req.body.state.refRelate2}</p>
<p style="text-align: left;"><strong>Job Title:&nbsp;</strong>${req.body.state.refJob2}</p>
<p style="text-align: left;"><strong>Employer (Company Name):&nbsp;</strong>${req.body.state.refEmployer2}</p>
<p style="text-align: left;"><strong>Years Known:&nbsp;</strong>${req.body.state.refYears2}</p>
<p style="text-align: left;"><strong>Phone#:&nbsp;</strong>${req.body.state.refPhone2}</p>
<hr />
<p style="text-align: left;"><strong>Work Experience:</strong></p>
${work.map(work =>
  `<p style="text-align: left;"><strong>Name of Employer:&nbsp;</strong>${work.workEmployer}</p>
  <p style="text-align: left;"><strong>Phone#:&nbsp;</strong>${work.workNum}</p>
  <p style="text-align: left;"><strong>Address:&nbsp;</strong>${work.workAddress}</p>
  <p style="text-align: left;"><strong>Name of Last Supervisor:&nbsp;</strong>${work.workSuper}</p>
  <p style="text-align: left;"><strong>Employment Dates:</strong></p>
  <p style="text-align: left;"><strong>From:</strong> ${work.workStart}&emsp;<strong>To:&nbsp;</strong>${work.workEnd}</p>
  <p style="text-align: left;"><strong>Start Pay:</strong> ${work.workPayStart}&emsp;<strong>End Pay:&nbsp;</strong>${work.workPayEnd}</p>
  <p style="text-align: left;"><strong>Hourly or Salary:&nbsp;</strong>${work.workPayType}</p>
  <p style="text-align: left;"><strong>Highest Held Job Title:&nbsp;</strong>${work.workTitle}</p>
  <p style="text-align: left;"><strong>List of jobs and responsibilities while working at this company:</strong></p>
  <p>${work.workRespon}</p>
  <p style="text-align: left;"><strong>Reason for leaving (be specific):</strong></p>
  <p>${work.workLeave}</p>`
  )}
<p style="text-align: left;"><strong>Documents:</strong>${req.body.files}</p>
<p style="text-align: left;"><strong>May we contact your current employer?&nbsp;</strong>${req.body.state.contactEmployer}</p>
<hr />
<p style="text-align: left;"><strong>Can you lift at least 65lbs?</strong>${req.body.state.minlbs}</p>
<p style="text-align: left;"><strong>If no, what is the max number of weight you can lift?</strong>${req.body.state.maxlbs}</p>
<p style="text-align: left;"><strong>Do you have any physical limitations that might prevent you from working with heavy machinery?</strong>${req.body.state.limits}</p>
<p style="text-align: left;"><strong>Are you experienced in autocad?&nbsp;</strong>${req.body.state.autocad}</p>
<p style="text-align: left;"><strong>Are you experienced in microsoft or google applications (such as google docs and excel)?&nbsp;</strong>${req.body.state.micro}</p>
<hr />
<p style="text-align: left;"><strong>Application Form Waiver:</strong></p>
<p style="text-align: left;">Application Form Waiver:<br />In exchange for consideration of my job application by Re-Steel Express Services, Inc. (hereinafter, called &ldquo;The Company&rdquo;), I agree that: Neither the acceptance of this application nor the subsequent entry into any type of employment relationship, either in the position applied for or any other position, and regardless of the contents of employee handbooks, personnel manuals, benefit plans, policy statements, and the like as they may exist from time to time, or other Company practices, shall serve to create an actual or implied contract of employment, or to confer any right to remain an employee of Re-Steel Express Services, Inc., or otherwise to change in any respect the employment at will relationship between it and the undersigned, and that relationship cannot be altered except by a written instrument signed by the Present/General Manager of the Company. Both the undersigned and Re-Steel Express Services, Inc. may end the employment relationship at any time, without specified notice or reason. If employed, I understand that the Company may unilaterally change or revise their benefits, policies and procedures and such changes may include reduction in benefits. I authorize investigation of all statements contained in this application. I understand the misrepresentation or omission of facts called for is cause for dismissal at any time without any previous notice. I hereby give the Company permission to contact schools, previous employers (unless otherwise indicated), references, and others and hereby release the Company from any liability as a result of such contact. I also understand that (1) the Company has a drug and alcohol policy that provides for pre-employment testing as well as testing after employment, (2) content to and compliance with such policy is a condition of my employment, and (3) continued employment is based on the successful passing of testing under such policy. I further understand that continued employment may be based on the successful passing of job-related physical examinations. I further understand that my employment with the Company shall be probationary for a period of sixty (60) days, and further that at any time during the probationary period or thereafter, my employment relation with the Company is terminable at will for any reason by either party.</p>
<p style="text-align: left;">&nbsp;</p>${req.body.state.terms}`

  const mailOptions = {
    from: 'admin@resteelexpressservices.com',
    to: 'contact-us@resteelexpress.com',
    subject: 'Job Application',
    html: message,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      myEmitter.emit('log',`${error.name}: ${error.message}`, 'errLog.txt');
      res.send(error);
    } else {
      console.log('Email sent');
      res.json({ status: 'success' });
    }
  });
};

module.exports = jobSend
