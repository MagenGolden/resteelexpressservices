import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Personal = ({state, handleValue}) => {
  const personal = [
    { tag: 'input', label: 'Name:', required: 'required', name: 'name', type: 'text', value: `${state.name}` },
    { tag: 'input', label: 'Date:', required: 'required', name: 'date', type: 'date', value: `${state.date}` },
    { tag: 'input', label: 'Present Address:', required: 'required', name: 'address', type: 'text', value: `${state.address}`, size: '40' },
    { tag: 'input', label: 'How long have you lived at current address?', required: 'required', name: 'addressYears', type: 'number', value: `${state.addressYears}`, min: '1', max: '99' },
    { tag: 'input', label: 'Phone#:', required: 'required', name: 'phone', type: 'text', value: `${state.phone}` },
    { tag: 'input', label: 'Social Security#:', required: 'required', name: 'social', type: 'text', value: `${state.social}` },
    { tag: 'input', label: 'Date of Birth:', required: 'required', name: 'dob', type: 'date', value: `${state.dob}`, size: '' },
    { tag: 'select', label: 'Position applied for:', name: 'position', value: `${state.position}`, label2: 'Any Open Position', value2: 'any', label3: 'Shop', value3: 'shop', label4: 'Office', value4: 'office'}
  ]


  return (
    <fieldset className='field'>
      {personal.map((input) => (
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
        <div key={input.name}>
          <label className={input.required} htmlFor={input.name}>{input.label}</label>
          <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} onChange={handleValue} size={input.size} min={input.min} max={input.max}/>
        </div>
      ))}
    </fieldset>
  );
};

Personal.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
};

export default Personal;
