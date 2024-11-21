import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import StateContext from './context/StateContext'

const Hours = () => {

  const { state, handleValue } = useContext(StateContext);

  const hours = [
    { tag: 'input', label: 'No Preference', name: 'noPerf', type: 'checkbox', checked: `${state.noPerf}` },
    { tag: 'input', label: 'Mon:', name: 'mon', type: 'number', value: `${state.mon}`, min: '1', max: '20' },
    { tag: 'input', label: 'Tue:', name: 'tue', type: 'number', value: `${state.tue}`, min: '1', max: '20' },
    { tag: 'input', label: 'Wed:', name: 'wed', type: 'number', value: `${state.wed}`, min: '1', max: '20' },
    { tag: 'input', label: 'Thu:', name: 'thu', type: 'number', value: `${state.thu}`, min: '1', max: '20' },
    { tag: 'input', label: 'Fri:', name: 'fri', type: 'number', value: `${state.fri}`, min: '1', max: '20' },
    { tag: 'input', label: 'Sat:', name: 'sat', type: 'number', value: `${state.sat}`, min: '1', max: '20' },
    { tag: 'input', label: 'How many hours can you work weekly?', required: 'required', name: 'weekly', type: 'number', value: `${state.weekly}`, min: '10', max: '60' },
    { tag: 'select', label: 'Employment type desired:', required: 'required', name: 'employType', value: `${state.employType}`, label2: 'Full-time', value2: 'full', label3: 'Part-time', value3: 'part' },
    { tag: 'input', label: 'Date Available for Employment:', required: 'required', name: 'employDate', value: `${state.employDate}`, type: 'date' }
  ]


  return (
    <fieldset>
      {hours.map((input) => (
        input.tag === 'select' ?
        <div key={input.name} className='boxes'>
          <label className={input.required} htmlFor={input.name}>{input.label}</label>
          <select id={input.name} name={input.name} onChange={handleValue} value={input.value} required>
            <option value=''>Please choose an option</option>
            <option value={input.value2}>{input.label2}</option>
            <option value={input.value3}>{input.label3}</option>
          </select>
        </div> :
        <div key={input.name} className='boxes'>
          <label className={input.required} htmlFor={input.name}>{input.label}</label>
          <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} onChange={handleValue} min={input.min} max={input.max} checked={input.checked}  />
        </div>
      ))}
    </fieldset>
  );
};

Hours.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
};


export default Hours;
