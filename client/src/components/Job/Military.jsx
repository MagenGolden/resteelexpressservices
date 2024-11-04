import React from 'react';
import PropTypes from 'prop-types';

const Military = ({state, handleValue}) => {

    const military = [
    { tag: 'input', label: 'Have you ever been in the Armed Forces?', required: 'required', name: 'served', type: 'radio' },
    { tag: 'input', label: 'Are you now a member of the National Guard?', required: 'required', name: 'guard', type: 'radio' },
    { tag: 'input', label: 'Position Held:', type: 'text', name: 'servicePosition', value:`${state.servicePosition}`, size: '15' },
    { tag: 'input', label: 'Date Entered:', type: 'date', name: 'serviceStart', value: `${state.serviceStart}` },
    { tag: 'input', label: 'Date Discharged:', type: 'date', name: 'serviceEnd', value: `${state.serviceEnd}` }
    ]

  return (
    <fieldset className='break left'>
      {military.map((input) => (
        input.type === 'radio' ?
        <div key={input.name}>
          <label className={input.required}>{input.label}</label>
          <label><input name={input.name} type={input.type} value='yes' onChange={handleValue} />Yes</label><label><input name={input.name} type={input.type} value='no' onChange={handleValue} />No</label>
        </div> :
        <div key={input.name}>
          <label className={input.required} hmtlFor={input.name}>{input.label}</label>
          <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} onChange={handleValue} size={input.size} />
        </div>
      ))}
    </fieldset>
  );
};

Military.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
};

export default Military;
