import React from 'react';
import PropTypes from 'prop-types';

const Background = ({state, handleValue}) => {

  const background = [
    { tag: 'input', label: 'Can you pass a drug test?', required: 'required', name: 'drugTest', type: 'radio' },
    { tag: 'input', label: 'Do you have a dependable vehicle to travel to and from work?', required: 'required', name: 'vehicle', type: 'radio' },
    { tag: 'input', label: 'Do you have a drivers license?', required: 'required', name: 'license', type: 'radio' },
    { tag: 'input', label: `Driver's License Number:`, type: 'text', name: 'licenseNum', value: `${state.licenseNum}`, required: 'required', size: '15' },
    { tag: 'input', label: 'State of Issue', type: 'text', name: 'licenseState', value:`${state.licenseState}`, required: 'required', size: '10' },
    { tag: 'select', label: 'Type of License', required: 'required', name: 'licenseType', value: `${state.licenseType}`, label2: 'Class D (everyday)', value2: 'D', label3: 'Operator', value3: 'operator', label4: 'commercial', value4: 'commercial' },
    { tag: 'input', label: 'Expiration Date:', required: 'required', name: 'licenseExpir', value:`${state.licenseExpir}`, type: 'date',  },
    { tag: 'input', label: 'Have you had any accidents during the past three years?', required: 'required', name: 'accidents', type: 'radio' },
    { tag: 'input', label: 'If yes, how many?', name: 'accidentsNum', value: `${state.accidentsNum}`, type: 'number', min: '1', max: '50' },
    { tag: 'input', label: 'Have you had any violations during the past three years?', required: 'required', name: 'violations', type: 'radio' },
    { tag: 'input', label: 'If yes, how many?', name: 'violationsNum', value: `${state.violationsNum}`, type: 'number', min: '1', max: '50' },
    { tag: 'input', label: 'Have you ever been convicted of a crime?', required: 'required', name: 'convicted', type: 'radio' },
  ]

  return (
    <fieldset className='break left'>
      {background.map((input) => (
        input.tag === 'select' ?
        <div key={input.name}>
          <label className={input.required} htmlFor={input.name}>{input.label}</label>
          <select id={input.name} name={input.name} onChange={handleValue} value={input.value}>
            <option value='null'>Please choose an option</option>
            <option value={input.value2}>{input.label2}</option>
            <option value={input.value3}>{input.label3}</option>
            <option value={input.value4}>{input.label4}</option>
          </select>
        </div> :
        input.type === 'radio' ?
        <div key={input.name}>
          <label className={input.required}>{input.label}</label>
          <label><input name={input.name} type={input.type} value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name={input.name} type={input.type} value='no' onChange={handleValue} />No</label>
        </div> :
        <div key={input.name}>
          <label className={input.required} hmtlFor={input.name}>{input.label}</label>
          <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} onChange={handleValue} size={input.size} min={input.min} max={input.max} />
        </div>
      ))}
        <label>
          If yes, explain the number of convictions, nature of offense(s) leading to conviction(s), how recently such offense(s) was/were committed, sentence(s) imposed, and type(s) of rehabilitation.
          <br /><textarea name='convictedEx' value={state.convictedEx} rows='10' cols='65' onChange={handleValue} />
        </label>
    </fieldset>
  );
};

Background.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
};

export default Background;
