import React from 'react';
import PropTypes from 'prop-types';

const Terms = ({state, handleValue}) => {

  return (
    <fieldset>
      <textarea rows='20' cols='85' value={`Application Form Waiver:
In exchange for consideration of my job application by Re-Steel Express Services, Inc. (hereinafter, called “The Company”), I agree that: Neither the acceptance of this application nor the subsequent entry into any type of employment relationship, either in the position applied for or any other position, and regardless of the contents of employee handbooks, personnel manuals, benefit plans, policy statements, and the like as they may exist from time to time, or other Company practices, shall serve to create an actual or implied contract of employment, or to confer any right to remain an employee of Re-Steel Express Services, Inc., or otherwise to change in any respect the employment at will relationship between it and the undersigned, and that relationship cannot be altered except by a written instrument signed by the Present/General Manager of the Company. Both the undersigned and Re-Steel Express Services, Inc. may end the employment relationship at any time, without specified notice or reason. If employed, I understand that the Company may unilaterally change or revise their benefits, policies and procedures and such changes may include reduction in benefits. I authorize investigation of all statements contained in this application. I understand the misrepresentation or omission of facts called for is cause for dismissal at any time without any previous notice. I hereby give the Company permission to contact schools, previous employers (unless otherwise indicated), references, and others and hereby release the Company from any liability as a result of such contact. I also understand that (1) the Company has a drug and alcohol policy that provides for pre-employment testing as well as testing after employment, (2) content to and compliance with such policy is a condition of my employment, and (3) continued employment is based on the successful passing of testing under such policy. I further understand that continued employment may be based on the successful passing of job-related physical examinations. I further understand that my employment with the Company shall be probationary for a period of sixty (60) days, and further that at any time during the probationary period or thereafter, my employment relation with the Company is terminable at will for any reason by either party.`} readOnly /><br />
      <input id='terms' name='terms' checked={state.terms} type='checkbox' onChange={handleValue} required /><label htmlFor='terms'>I have read and agree to the terms and conditions within the Application Form Waiver.</label>
    </fieldset>
  );
};

Terms.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
};

export default Terms;
