import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import StateContext from './context/StateContext'

const Questions = () => {

  const { state, handleValue } = useContext(StateContext);

  return (
    <fieldset>
      <div className='quest zero'>
        <label id='contactEmployer' className='required'>May we contact your current employer?</label>
        <div className='left'><label><input name='contactEmployer' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='contactEmployer' type='radio' value='no' onChange={handleValue} />No</label></div>
        <p className=''>Please fill out the below if apploying to work in the shop or outside.</p>
        <label>Can you lift as least 65lbs?</label>
        <div className='left'><label><input name='minlbs' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='minlbs' type='radio' value='no' onChange={handleValue} />No</label></div>
        <label>If no, what is the max number of weight you can lift?
          <input className='military' name='maxlbs' value={state.maxlbs} type='number' max='300' min='1' onChange={handleValue} /></label>
        <label>Do you have any physical limitations that might prevent you from working with heavy machinery?</label>
        <div className='left'><label><input name='limits' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='limits' type='radio' value='no' onChange={handleValue} />No</label></div>
        <p className=''>Please fill out theb elow if apploying to work in the office.</p>
        <label>Are you experienced in autocad?</label>
        <div className='left'><label><input name='autocad' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='autocad' type='radio' value='no' onChange={handleValue} />No</label></div>
        <label>Are you epxerienced in microsfot or google applications (such as google docs and excel)?</label>
        <div className='left'><label><input name='micro' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='micro' type='radio' value='no' onChange={handleValue} />No</label></div>
      </div>
    </fieldset>
  );
};

Questions.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
};

export default Questions;
