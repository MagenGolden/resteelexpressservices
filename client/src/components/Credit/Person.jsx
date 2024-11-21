import React from 'react';
import PropTypes from 'prop-types';

const Person = ({state, handleValue}) => {

  const personal = [
    { label: 'Name:', name: 'name', type: 'text', value: `${state.name}` },
    { label: 'Date:', name: 'date', type: 'date', value: `${state.date}` },
    { label: 'Email Address:', name: 'email', type: 'email', value: `${state.email}`, size: '25' },
    { label: 'Phone#:', name: 'phone', type: 'text', value: `${state.phone}`, size: '15' },
    { label: 'Fax:', name: 'fax', type: 'text', value: `${state.fax}`, size: '15' },
    { label: 'Accounts Payable Phone#:', name: 'payablePhone', type: 'text', value: `${state.payablePhone}`, size: '15' },
    { label: 'Accounts Payable Email:', name: 'payableEmail', type: 'email', value: `${state.payableEmail}`, size: '25' },
    { label: 'Billing Address:', name: 'billing', type: 'text', value: `${state.billing}`, size: '30' },
    { label: 'Mailing Address:', name: 'mailing', type: 'text', value: `${state.mailing}`, size: '30' },
    { label: 'Type of Business:', name: 'businessType', type: 'text', value: `${state.businessType}` },
    { label: 'Federal ID Number:', name: 'federalId', type: 'text', value: `${state.federalId}` },
  ]

  return (
    <fieldset>
      {personal.map((input) => (
        <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} autoComplete='off' onChange={ handleValue } /></div>
      ))}
    </fieldset>
  );
};

Person.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
}

export default Person;
