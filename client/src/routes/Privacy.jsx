import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <p><em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <Link to='#contents'>table of contents</Link> below to find the section you are looking for.</em></p>
        <p><b>What person information do we process?</b> When you visit, use, or navigate our Services, we may process presonal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <Link to=''>personal information you disclose to us.</Link></p>
        <p><b>Do we process any sensitive personal information?</b> Some of the information may be considered "special" or "sensative" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about <Link to=''>sensitive information we process</Link></p>
        <p><b>Do we collect any information from third parties?</b> We do ot collect any information from third parties.</p>
        <p><b>How do we process your information?</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process information only when we have a valid legal reason to do so. Learn more about <Link to=''>how we process your information.</Link></p>
        <p><b>In what situations and with which parties do we share personal information?</b> We may share information in specific situations and with specific third parties. Learn more about <Link to=''>when and with whom we share your personal information.</Link></p>
        <p><b>How do we keep your information safe?</b> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <Link to=''>how we keep your information safe.</Link></p>
        <p><b>What are your rights?</b> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <Link to=''>your privacy rights.</Link></p>
        <p><b>How do you exercise your rights?</b> The easiest way to exercise your rights is by submitting a <Link to='https://app.termly.io/notify/cb26fdce-d2f5-452c-b83e-b02b30602c3b?_gl=1*192qiuo*_up*MQ..&gclid=CjwKCAjw9p24BhB_EiwA8ID5BtitkaEIyJs7FNcUPzVYehykJ39xJB_8mf9fbKdvgyPi-84But16PxoCqsMQAvD_BwE' target='_blank'>data subject access request, </Link>or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
        <p>Want to learn more about what we do with any information we collect? <Link to=''>Review the Privacy Notice in full.</Link></p>
        <h3 id='contents'>TABLE OF CONTENTS</h3>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
