import React from 'react';
import PropTypes from 'prop-types';

const Bank = ({state, handleValue}) => {

  const bank = [
    { label: 'Name:', name: 'bankName', type: 'text', value: `${state.bankName}` },
    { label: 'Address:', name: 'bankAddress', type: 'text', value: `${state.bankAddress}`, size: '30' },
    { label: 'Account Number:', name: 'bankAccount', type: 'text', value: `${state.bankAccount}` },
    { label: 'Officer:', name: 'bankOfficer', type: 'text', hold: 'First & Last Name', value: `${state.bankOfficer}` },
    { label: 'Phone#:', name: 'bankPhone', type: 'text', value: `${state.bankPhone}`, size: '15' },
    { label: 'Fax:', name: 'bankFax', type: 'text', value: `${state.bankFax}`, size: '15' },
  ]


  return (
    <fieldset>
      {bank.map((input) => (
        <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
      ))}
    </fieldset>
  );
};

Bank.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
}

export default Bank;
