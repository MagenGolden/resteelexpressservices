import React from 'react';
import PropTypes from 'prop-types';

const Principals = ({state, handleValue}) => {

  const principals1 = [
    { label: 'Name:', name: 'princName1', type: 'text', hold: 'First & Last Name', value: `${state.princName1}`},
    { label: 'Title:', name: 'princTitle1', type: 'text', value: `${state.princTitle1}` },
    { label: 'Phone#:', name: 'princPhone1', type: 'text', value: `${state.princPhone1}`, size: '15' },
    { label: 'Email:', name: 'princEmail1', type: 'email', value: `${state.princEmail1}`, size: '25' },
    { label: 'Mailing Address:', name: 'princMailing1', type: 'text', value: `${state.princMailing1}`, size: '30' },
  ]
  const principals2 = [
    { label: 'Name:', name: 'princName2', type: 'text', hold: 'First & Last Name', value: `${state.princName2}` },
    { label: 'Title:', name: 'princTitle2', type: 'text', value: `${state.princTitle2}` },
    { label: 'Phone#:', name: 'princPhone2', type: 'text', value: `${state.princPhone2}`, size: '15' },
    { label: 'Email:', name: 'princEmail2', type: 'email', value: `${state.princEmail2}`, size: '25' },
    { label: 'Mailing Address:', name: 'princMailing2', type: 'text', value: `${state.princMailing2}`, size: '30' },
  ]
  const principals3 = [
    { label: 'Name:', name: 'princName3', type: 'text', hold: 'First & Last Name', value: `${state.princName3}` },
    { label: 'Title:', name: 'princTitle3', type: 'text', value: `${state.princTitle3}` },
    { label: 'Phone#:', name: 'princPhone3', type: 'text', value: `${state.princPhone3}`, size: '15' },
    { label: 'Email:', name: 'princEmail3', type: 'email', value: `${state.princEmail3}`, size: '25' },
    { label: 'Mailing Address:', name: 'princMailing3', type: 'text', value: `${state.princMailing3}`, size: '30' },
  ]

  return (
    <section>
      <fieldset>
        1.{principals1.map((input) => (
          <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
      </fieldset>
      <fieldset>
        2.{principals2.map((input) => (
          <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
      </fieldset>
      <fieldset>
        3.{principals3.map((input) => (
          <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
      </fieldset>
    </section>
  );
};

Principals.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
}

export default Principals;
