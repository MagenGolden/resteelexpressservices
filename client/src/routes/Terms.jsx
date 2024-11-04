import React from 'react';
import { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TermsHeader from '../components/Extra/TermsHead';
import '../components/Extra/extra.scss';

const Terms = () => {

  useEffect(() => {
	  window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <TermsHeader />
      <main className='legal'>
        <h3>Last updated: October 15, 2024</h3>
        <p>Please read these terms and conditions carefully before using Our Services.</p>
        <h3>Interpretation and Definitions</h3>
        <h4>Interpretation</h4>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        <h4>Definitions</h4>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul>
          <li><b>Affiliate:</b> an entity that controls, is controlled by or is under the common control with a party, where "control" means ownership of 50% of more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
          <li><b>Country:</b> refers to Mississippi, United States.</li>
          <li><b>Company:</b> (referred to as either "the Company", "We", "Us", or "Our" in this Agreement) refers to Re-Steel Express Services, Inc., 9 Saw Road, Poplarville, MS.</li>
          <li><b>Device:</b> any device that can access the Service such as a computer, a cellphone, or a digital tablet.</li>
          <li><b>Service:</b> refers to the Website.</li>
          <li><b>Terms and Conditions:</b> (also referred to as "Terms") means these Terms and Conditions that form the entire agreement between you and the Company regarding the use of the Service.</li>
          <li><b>Third-party Social Media Service:</b> any services or content (including data, information, products, or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
          <li><b>Website:</b> Re-Steel Express Services, accessible from <Link to='/'>www.resteelexpressservices.com</Link></li>
          <li><b>You:</b> the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
        </ul>
        <h3>Acknowledgment</h3>
        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
        <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all vistors, users, and others who access or use the Service.</p>
        <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
        <p>you represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
        <p>your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on collection, use and disclosure of Your personal information when you use the Application or Website and tells You and Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
        <h3>Links to Other Websites</h3>
        <p>Our Services may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
        <p>The Company has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>
        <p>We strongly advice You to read the terms and conditions and privacy policies or any third-party websites or services that You visit.</p>
        <h3>Limitation of Liability</h3>
        <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
        <p>To the maximum extent permitted by applicable law, in event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data, or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possiblity of such damages and even if the remedy fails of its essential purpose.</p>
        <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which mean that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
        <h3>Cancellation Policy</h3>
        <p>Cancellations must be made by phone within 3 days of placing an order. Rushed orders cannot be cancelled and are not subject to refunds.</p>
        <h3>Penalties</h3>
        <p>A material storage fee will be applied to any orders that exceed a 3 day pick-up window. A minimum fee of $20 will be applied everyday after the 3 day grace period.</p>
        <h3>Right to Refuse</h3>
        <p>We reserve the right to refuse service to anyone we deem unfit to do business with. Reasons business might be denied include, but are not limited to, the following:</p>
        <ul>
          <li>Lack of past payment</li>
          <li>History of difficulity recieving payment</li>
          <li>Excessive amount of cancelled orders</li>
          <li>Refusal to accept materials on time</li>
        </ul>
        <h3>Customer Procedures</h3>
        <p>Our company does  not unload materials off the trucks. Customers msut be able to unload materials themselves and the delivery area much be safe and clear.</p>
        <h3>"AS IS" and "AS AVAILABLE" Disclaimer</h3>
        <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on the behalf of its Affiliates and its and their respective licensors and services providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of mechantablility, fitness for particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatiable or work with any other software, applications, systems or services, operate withou interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
        <p>Without limiting the foregoing, neither the Company nor any of the company's providers make any representation or warranty of any kind, expressed or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
        <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
        <h3>Governing Law</h3>
        <p>The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
        <h3>Disputes Resolution</h3>
        <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
        <h3>Severability and Waiver</h3>
        <h4>Severability</h4>
        <p>If any provision of these Terms in held to be unenforcable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the reamining provisions will continue in full force and effect.</p>
        <h4>Waiver</h4>
        <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or required such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
        <h3>Translation Interpretation</h3>
        <p>These Terms may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>
        <h3>Changes to These Terms and Conditions</h3>
        <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
        <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If you do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
        <h3>Contact Us</h3>
        <p>If you have any questions about these Terms, You can contact us:</p>
        <ul>
          <li>By email: contact-us@resteelexpress.com</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
