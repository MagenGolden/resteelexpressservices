import React from 'react';
import { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrivacyHeader from '../components/Extra/PrivacyHead';
import '../components/Extra/extra.scss';

const Privacy = () => {

  useEffect(() => {
	  window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <PrivacyHeader />
      <main className='legal'>
        <h3>Last updated October 18, 2023</h3>
        <p>This privacy notice for Re-Steel Express Services, Inc. ("we", "us", or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:</p>
        <ul>
          <li> Visit our website at <Link to='/'>https://resteelexpressservices.com</Link></li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p><b>Questions or concerns?</b> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact-us@resteelexpress.com</p>
        <h3>SUMMARY OF KEY POINTS</h3>
        <p><em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <Link to='/privacy-policy#contents'>table of contents</Link> below to find the section you are looking for.</em></p>
        <p><b>What person information do we process?</b> When you visit, use, or navigate our Services, we may process presonal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <Link to='/privacy-policy#personal'>personal information you disclose to us.</Link></p>
        <p><b>Do we process any sensitive personal information?</b> Some of the information may be considered "special" or "sensative" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about <Link to='/privacy-policy#sensitive'>sensitive information we process</Link></p>
        <p><b>Do we collect any information from third parties?</b> We do ot collect any information from third parties.</p>
        <p><b>How do we process your information?</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process information only when we have a valid legal reason to do so. Learn more about <Link to='/privacy-policy#process'>how we process your information.</Link></p>
        <p><b>In what situations and with which parties do we share personal information?</b> We may share information in specific situations and with specific third parties. Learn more about <Link to='/privacy-policy#share'>when and with whom we share your personal information.</Link></p>
        <p><b>How do we keep your information safe?</b> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <Link to='/privacy-policy#safe'>how we keep your information safe.</Link></p>
        <p><b>What are your rights?</b> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <Link to='/privacy-policy#rights'>your privacy rights.</Link></p>
        <p><b>How do you exercise your rights?</b> The easiest way to exercise your rights is by submitting a <Link to='https://app.termly.io/notify/cb26fdce-d2f5-452c-b83e-b02b30602c3b?_gl=1*192qiuo*_up*MQ..&gclid=CjwKCAjw9p24BhB_EiwA8ID5BtitkaEIyJs7FNcUPzVYehykJ39xJB_8mf9fbKdvgyPi-84But16PxoCqsMQAvD_BwE' target='_blank'>data subject access request, </Link>or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
        <p>Want to learn more about what we do with any information we collect? <Link to='/privacy-policy#infoCollect'>Review the Privacy Notice in full.</Link></p>
        <h3 id='contents'>TABLE OF CONTENTS</h3>
        <p><Link to='/privacy-policy#infoCollect'>1. WHAT INFORMATION DO WE COLLECT?</Link></p>
        <p><Link to='/privacy-policy#process'>2. HOW DO WE PROCESS YOUR INFORMATION?</Link></p>
        <p><Link to='/privacy-policy#share'>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Link></p>
        <p><Link to='/privacy-policy#cookies'>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Link></p>
        <p><Link to='/privacy-policy#keep'>5. HOW LONG DO WE KEEP YOUR INFORMATION?</Link></p>
        <p><Link to='/privacy-policy#safe'>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</Link></p>
        <p><Link to='/privacy-policy#minors'>7. DO WE COLLECT INFORMATION FROM MINORS?</Link></p>
        <p><Link to='/privacy-policy#rights'>8. WHAT ARE YOUR PRIVACY RIGHTS?</Link></p>
        <p><Link to='/privacy-policy#track'>9. CONTROLS FOR DO-NOT-TRACK FEATURES</Link></p>
        <p><Link to='/privacy-policy#states'>10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Link></p>
        <p><Link to='/privacy-policy#updates'>11. DO WE MAKE UPDATES TO THIS NOTICE?</Link></p>
        <p><Link to='/privacy-policy#contact'>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link></p>
        <p><Link to='/privacy-policy#review'>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Link></p>
        <h3 id='infoCollect'>1. WHAT INFORMATION DO WE COLLECT?</h3>
        <h4 id='personal'>Personal information you disclose to us</h4>
        <p><em><b>In Short:</b> We collect personal information that you provide to us.</em></p>
        <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when participate in activities on the Services, or otherwise when you contact us.</p>
        <p><b>Personal Information Provided by You.</b> The personal information that we collect depends on the context to your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect my include the following:</p>
        <ul>
          <li>names</li>
          <li>phone numbers</li>
          <li>email addresses</li>
          <li>mailing addresses</li>
          <li>job titles</li>
          <li>contact preferences</li>
          <li>billing addresses</li>
          <li>account numbers</li>
          <li>federal id numbers</li>
          <li>driver's license numbers</li>
          <li>social security numbers</li>
        </ul>
        <p id='sensitive'><b>Sensitive Information.</b> When necessary, with your consent or otherwise permitted by applicable law, we process the following categories of sensitve information:</p>
        <ul>
          <li>credit worthiness data</li>
          <li>social security numbers or other government identifiers</li>
          <li>student data</li>
        </ul>
        <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
        <h4>Information automatically collected</h4>
        <p><em><b>In Short:</b> Some information -- such as your Internet Protocol (IP) address and/or browser and device characteristics -- is collected automatically when you visit our Services.</em></p>
        <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLS, security and operation of our Services, and for our internal analytics and reporting purposes.</p>
        <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
        <p>The information we collected includes:</p>
        <ul>
          <li><em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (base on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
        </ul>
        <h4>Google API</h4>
        <p>Our use of information received from Google APIs will adhere to <Link to='https://developers.google.com/terms/api-services-user-data-policy'>Google API Services User Data Policy</Link>, including the <Link to ='https://developers.google.com/terms/api-services-user-data-policy#limited-use'>Limited Use requirements</Link>.</p>
        <h3 id='process'>2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
        <p><em><b>In Short:</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></p>
        <p><b>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</b></p>
        <ul>
          <li><b>To deliver and facilitate delivery of services to the user.</b> We may process your information to provide you with the requested service</li>
          <li><b>To respond to user inquireies/offer support to users.</b> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
          <li><b>To send administrative information to you.</b> We may process your information to send  you details about our products and services, changes to our terms and policies, and other similar information.</li>
        </ul>
        <h3 id='share'>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
        <p><em><b>In Short:</b> We may share information in specific situations described in this section and/or with the following third parties.</em></p>
        <p>We may need to share your personal information in the following situations:</p>
        <ul>
          <li><b>Business Transfers.</b> We may share or transfer your information in connection with, or during negotiations of, any merger, slae of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><b>When we use Google Maps Platform APIs.</b> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). Google Maps use GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise.</li>
        </ul>
        <h3 id='cookies'>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
        <p><em><b>In Short:</b> We may use cookies and other tracking technologies to collect and store your information.</em></p>
        <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, and prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
        <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics.</p>
        <p>To the extent these online tracking technologies are deemed to be a "sale/sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under the section <Link to='/privacy-policy#states'>"DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"</Link></p>
        <h3 id='keep'>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
        <p><em><b>In Short:</b> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></p>
        <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
        <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
        <h3 id='safe'>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
        <p><em><b>In Short:</b> We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
        <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure enviroment.</p>
        <h3 id='minor'>7. DO WE COLLECT INFORMATION FROM MINORS?</h3>
        <p><em><b>In Short:</b> We do not knowingly collect data from or market to children under 18 years of age.</em></p>
        <p>We do not knowingly collect, solicit data from, or market to children under the age of 18 years old, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and conset to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonale measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under the age of 18, please contact us at contact-us@resteelexpress.com</p>
        <h3 id='rights'>8. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
        <p><em><b>In Short:</b> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></p>
        <p><b><u>Withdrawing your consent:</u></b> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw our consent at any time by contacting us by using contact details provided in the section <Link to='contact'>"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</Link> below.</p>
        <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
        <p><b><u>Cookies and similar technologies:</u></b> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</p>
        <p>If you have questions or comments about your privacy rights, you may email us at contact-us@resteelexpress.com</p>
        <h3 id='track'>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
        <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
        <p>California law requires us to let you know how to respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>
        <h3 id='states'>10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
        <p><em><b>In Short:</b> If you are a residents of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Montana, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</em></p>
        <h4>Categories of Personal Information We Collect</h4>
        <p>We have collected the following categories of personal information in the past twelve (12) months:</p>
        <ul>
          <li><b>Identifiers:</b> Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name.</li>
          <li><b>Personal information as defined in the California Customer Records statue:</b> Name, contact information, education, employment, employment history, and financial information.</li>
          <li><b>Protected classification characteristics under state or federal law:</b> Gender, age, date of birth, race, and ethnicity, national origin, maritial status, and other demographic data.</li>
          <li><b>Professional or employment-related information:</b> Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us.</li>
          <li><b>Education information:</b> Student records and directory information.</li>
          <li><b>Sensitive personal information:</b> Financial information including account access details, citizenship or immigration status, social security numbers and state id card numbers.</li>
        </ul>
        <p>We only collect sensitive personal information, as defiined by applicable privacy laws or purposes allowed by law or with your consent. Sensitive personal information may be used, or disclosed to a service provider or contractor, for additional, specified purposes. You may have the right to limit the use or disclosure of your sensitive personal information. We do not collect or process sensitive personal information for the purpose of inferring characteristics about you.</p>
        <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
        <ul>
          <li>Receiving help through our customer support channels</li>
          <li>Participation in customer surveys or contests</li>
          <li>Facilitation in the delivery of our Services and to respond to your inquires</li>
        </ul>
        <p>We will use and retain the collected personal information as needed to provide the Services or for 1 year.</p>
        <h4>Sources of Personal Information</h4>
        <p>Learn more about the sources of personal information we collected in <Link to='/privacy-policy#infoCollect'>"WHAT INFORMATION DO WE COLLECT?"</Link></p>
        <h4>How We Use and Share Personal Information</h4>
        <p>Learn about how we use your personal information in the section <Link to='/privacy-policy#process'>"HOW DO WE PROCESS YOUR INFORMATION?"</Link></p>
        <p><b>Will your information be shared with anyone else?</b></p>
        <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, <Link to='/privacy-policy#share'>"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</Link></p>
        <p>We may use your personal information for our own business pruposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>
        <p>We have not disclosed, sold, or shared any personal information to third parties for a business or commerical purpose in the preceding twelve (12) months. We will not see or share personal information in the future belonging to website vistors, users, or other consumers.</p>
        <h4>Your Rights</h4>
        <p>You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
        <ul>
          <li><b>Right to know</b> whether or not we are processing your personal data</li>
          <li><b>Right to access</b> your personal data</li>
          <li><b>Right to correct</b> inaccuracies to your personal data</li>
          <li><b>Right to request</b> the deletion of your personal data</li>
          <li><b>Right to obtain a copy</b> of the personal data you previously shared with us</li>
          <li><b>Right to non-discrimination</b> for exercising your rights</li>
          <li><b>Right to opt out</b> of the processing of your personal data if it is used for targeted advertising (or sharing as definded under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
        </ul>
        <p>Depending upon the state where you live, you may also have the following rights:</p>
        <ul>
          <li>Right to obtain a list of categories of third parties to which we have disclosed personal data (as permitted by applicable law, including California's and Delaware's privacy law)</li>
          <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including Oregon's privacy law)</li>
          <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including California's privacy law)</li>
          <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including Florida's privacy law)</li>
        </ul>
        <h4>How to Exercise Your Rights</h4>
        <p>To exerise these rights, you can contact us by submitting a <Link to='https://app.termly.io/notify/cb26fdce-d2f5-452c-b83e-b02b30602c3b'>data subject access request</Link>, by emailing us at contact-us@resteelexpress.com, or by referring to the contact details at the bottom of this document.</p>
        <p>Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validy authorized to act on your behalf in accordance with applicable laws.</p>
        <h4>Request Verification</h4>
        <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may requrest that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>
        <p>If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>
        <h4>Appeals</h4>
        <p>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at contact-us@resteelexpress.com. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>
        <h4>California "Shine The Light" Law</h4>
        <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to use by using the contact detailes provided in the section <Link to='privacy-policy#contact'>"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</Link></p>
        <h3 id='updates'>11. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
        <p><em><b>In Short:</b> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
        <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
        <h3 id='contact'>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
        <p>If you have questions or comments about this notice, you may email us at contact-us@resteelexpress.com or contact us by post at:</p>
        <p>Re-Steel Express Services, Inc.</p>
        <p>9 Saw Road</p>
        <p>Poplarville, MS 39470</p>
        <p>United States</p>
        <h3 id='review'>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
        <p>Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <Link to='https://app.termly.io/notify/cb26fdce-d2f5-452c-b83e-b02b30602c3b'>data subject access request.</Link></p>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
