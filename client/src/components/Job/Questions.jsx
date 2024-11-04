import React from 'react';
import PropTypes from 'prop-types';

const Questions = ({state, handleValue}) => {

  return (
    <fieldset className='break left'>
      <label className='required'>May we contact your current employer?</label>
      <label><input name='contactEmployer' type='radio' value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name='contactEmployer' type='radio' value='no' onChange={handleValue} />No</label>
      <p className='break'>Please fill out the below if apploying to work in the shop or outside.</p>
      <label>Can you lift as least 65lbs?</label>
      <label><input name='minlbs' type='radio' value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name='minlbs' type='radio' value='no' onChange={handleValue} />No</label><br />
      <label htmlFor='maxlbs'>If no, what is the max number of weight you can lift?</label>
      <input name='maxlbs' value={state.maxlbs} type='number' max='300' min='1' onChange={handleValue} /><br />
      <label>Do you have any physical limitations that might prevent you from working with heavy machinery?</label>
      <label><input name='limits' type='radio' value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name='limits' type='radio' value='no' onChange={handleValue} />No</label>
      <p className='break'>Please fill out theb elow if apploying to work in the office.</p>
      <label>Are you experienced in autocad?</label>
      <label><input name='autocad' type='radio' value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name='autocad' type='radio' value='no' onChange={handleValue} />No</label><br />
      <label>Are you epxerienced in microsfot or google applications (such as google docs and excel)?</label>
      <label><input name='micro' type='radio' value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name='micro' type='radio' value='no' onChange={handleValue} />No</label>
    </fieldset>
  );
};

Questions.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
};

export default Questions;
