import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import StateContext from './context/StateContext'

const Military = () => {

  const { state, handleValue } = useContext(StateContext);

  return (
    <fieldset>
      <div className='quest zero'>
        <label id='served' className='required'>Have you ever been in the Armed Forces?</label>
        <div className='left'><label><input name='served' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='served' type='radio' value='no' onChange={handleValue} />No</label></div>
        <label id='guard' className='required'>Are you now a member of the National Guard?</label>
        <div className='left'><label><input name='guard' type='radio' value='yes' onChange={handleValue} />Yes</label><label><input name='guard' type='radio' value='no' onChange={handleValue} />No</label></div>
        <label>Position Held: <input className='military' name='servicePosition' type='text' value={state.servicePosition} onChange={handleValue} size='15' /></label>
        <label>Date Entered: <input className='military' name='serviceStart' type='date' value={state.serviceStart} onChange={handleValue} /></label>
        <label>Date Discharged: <input className='military' name='serviceEnd' type='date' value={state.serviceEnd} onChange={handleValue} /></label>
      </div>
    </fieldset>
  );
};

Military.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
};

export default Military;
