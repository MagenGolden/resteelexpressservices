import React from 'react';
import PropTypes from 'prop-types';

const References = ({state, handleValue}) => {

  const references1 = [
    { label: 'Name:', name: 'refName1', type: 'text', value: `${state.refName1}`, required: 'required' },
    { label: 'Relationship:', name: 'refRelate1', type: 'text', value: `${state.refRelate1}`, required: 'required' },
    { label: 'Job Title:', name: 'refJob1', type: 'text', value: `${state.refJob1}`, required: 'required' },
    { label: 'Employer (Company Name):', name: 'refEmployer1', type: 'text', value: `${state.refEmployer1}`, size: '30', required: 'required' },
    { label: 'Years Known:', name: 'refYears1', type: 'number', value: `${state.refYears1}`, min: '1', max: '50', required: 'required' },
    { label: 'Phone#:', name: 'refPhone1', type: 'text', value: `${state.refPhone1}`, required: 'required' },
  ]
  const references2 = [
    { label: 'Name:', name: 'refName2', type: 'text', value: `${state.refName2}`, required: 'required' },
    { label: 'Relationship:', name: 'refRelate2', type: 'text', value: `${state.refRelate2}`, required: 'required' },
    { label: 'Job Title:', name: 'refJob2', type: 'text', value: `${state.refJob2}`, required: 'required' },
    { label: 'Employer (Company Name):', name: 'refEmployer2', type: 'text', value: `${state.refEmployer2}`, size: '30', required: 'required' },
    { label: 'Years Known:', name: 'refYears2', type: 'number', value: `${state.refYears2}`, min: '1', max: '50', required: 'required' },
    { label: 'Phone#:', name: 'refPhone2', type: 'text', value: `${state.refPhone2}`, required: 'required' },
  ]

  return (
    <>
      <fieldset className='field narrow left'>
        (1){references1.map((input) => (
          <div key={input.name}>
            <label className={input.required} htmlFor={input.name}>{input.label}</label>
            <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} size={input.size} min={input.min} max={input.max} onChange={handleValue} />
          </div>
          ))}
      </fieldset>
    <fieldset className='field narrow left'>
      (2){references2.map((input) => (
        <div key={input.name}>
          <label className={input.required} htmlFor={input.name}>{input.label}</label>
          <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} size={input.size} min={input.min} max={input.max} onChange={handleValue} />
        </div>
        ))}
    </fieldset>
    </>
  );
};

References.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
};


export default References;
