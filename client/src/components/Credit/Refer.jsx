import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Refer = ({state, handleValue}) => {

  const references1 = [
    { label: 'Name:', name: 'refName1', type: 'text', value: `${state.refName1}` },
    { label: 'Phone#:', name: 'refPhone1', type: 'text', value: `${state.refPhone1}`, size: '15' },
    { label: 'Email:', name: 'refEmail1', type: 'email', value: `${state.refEmail1}`, size: '25' },
    { label: 'Address:', name: 'refAddress1', type: 'text', value: `${state.refAddress1}`, size: '30' },
    { label: 'Account Number:', name: 'refAccount1', type: 'text', value: `${state.refAccount1}` },
    { label: 'Contact:', name: 'refContact1', type: 'text', value: `${state.refContact1}` },
  ]
  const references2 = [
    { label: 'Name:', name: 'refName2', type: 'text', value: `${state.refName2}` },
    { label: 'Phone#:', name: 'refPhone2', type: 'text', value: `${state.refPhone2}`, size: '15' },
    { label: 'Email:', name: 'refEmail2', type: 'email', value: `${state.refEmail2}`, size: '25' },
    { label: 'Address:', name: 'refAddress2', type: 'text', value: `${state.refAddress2}`, size: '30' },
    { label: 'Account Number:', name: 'refAccount2', type: 'text', value: `${state.refAccount2}` },
    { label: 'Contact:', name: 'refContact2', type: 'text', value: `${state.refContact2}` },
  ]
  const references3 = [
    { label: 'Name:', name: 'refName3', type: 'text', value: `${state.refName3}` },
    { label: 'Phone#:', name: 'refPhone3', type: 'text', value: `${state.refPhone3}`, size: '15' },
    { label: 'Email:', name: 'refEmail3', type: 'email', value: `${state.refEmail3}`, size: '25' },
    { label: 'Address:', name: 'refAddress3', type: 'text', value: `${state.refAddress3}`, size: '30' },
    { label: 'Account Number:', name: 'refAccount3', type: 'text', value: `${state.refAccount3}` },
    { label: 'Contact:', name: 'refContact3', type: 'text', value: `${state.refContact3}` },
  ]



  return (
    <section>
      <fieldset>
        1.{references1.map((input) => (
          <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
      </fieldset>
      <fieldset>
        2.{references2.map((input) => (
          <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
      </fieldset>
      <fieldset>
        3.{references3.map((input) => (
          <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
      </fieldset>
    </section>
  );
};

Refer.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
}

export default Refer;
