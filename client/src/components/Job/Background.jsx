import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import StateContext from './context/StateContext'

const Background = () => {

  const { state, handleValue} = useContext(StateContext);



  return (
    <fieldset>
      <div className='quest'>
        <label id='drugTest' className='required'>Can you pass a drug test?</label>
        <div className='left'><label><input name='drugTest' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='drugTest' type='radio' value='no' onChange={handleValue} />No</label></div>
        <label id='vehicle' className='required'>Do you have a dependable vehicle to travel to and from work?</label>
        <div className='left'><label><input name='vehicle' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='vehicle' type='radio' value='no' onChange={handleValue} />No</label></div>
        <label id="license" className='required'>Do you have a driver's license?</label>
        <div className='left'><label><input name='license' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='license' type='radio' value='no' onChange={handleValue} />No</label></div>
        <label>Driver's License Number: <input name='licenseNum' value={state.licenseNum} type='text' size='10' onChange={handleValue} /></label>
        <label>State of Issue: <input name='licenseState' value={state.licenseState} type='text' size='5' onChange={handleValue} /></label>
        <label>Type of License:
          <select name='licenseType' onChange={handleValue} value={state.licenseType}>
            <option value='null'>Please choose an option</option>
            <option value='Class D'>Class D (everyday)</option>
            <option value='Operator'>Operator</option>
            <option value='Commercial'>Commercial</option>
          </select>
        </label>
        <label>Expiration Date:<input name='licenseExpir' value={state.licenseExpir} type='date' onChange={handleValue} /></label>
        <label id='accidents' className='required'>Have you had any accidents during the past three years?</label>
        <div className='left'><label><input name='accidents' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='accidents' type='radio' value='no' onChange={handleValue} />No</label></div>
        <label>If yes, how many?<input name='accidentsNum' value={state.accidentsNum} type='number' min="1" max='10' onChange={handleValue} /></label>
        <label id='violations' className='required'>Have you had any violations during the past three years?</label>
        <div className='left'><label><input name='violations' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='violations' type='radio' value='no' onChange={handleValue} />No</label></div>
        <label>If yes, how many?<input name='violationsNum' value={state.violationsNum} type='number' min='1' max='10' onChange={handleValue} /></label>
        <label id='convicted' className='required'>Have you ever been convicted of a crime?</label>
        <div className='left'><label><input name='convicted' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='convicted' type='radio' value='no' onChange={handleValue} />No</label></div>
        <label>
          If yes, explain the number of convictions, nature of offense(s) leading to conviction(s), how recently such offense(s) was/were committed, sentence(s) imposed, and type(s) of rehabilitation.
          <br /><textarea name='convictedEx' value={state.convictedEx} onChange={handleValue} />
        </label>
      </div>
    </fieldset>
  );
};

Background.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
};

export default Background;
