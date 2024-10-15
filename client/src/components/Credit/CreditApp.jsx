import React from 'react';
import './creditApp.scss';
import { useState } from 'react';

const CreditApp = () => {

  const [state, setState] = useState ({
    name: '',
    date: '',
    email: '',
    phone: '',
    fax: '',
    payablePhone: '',
    payableEmail: '',
    billing: '',
    mailing: '',
    businessType: '',
    federalId: '',
    princName1: '',
    princTitle1: '',
    princPhone1: '',
    princEmail1: '',
    princMailing1: '',
    princName2: '',
    princTitle2: '',
    princPhone2: '',
    princEmail2: '',
    princMailing2: '',
    princName3: '',
    princTitle3: '',
    princPhone3: '',
    princEmail3: '',
    princMailing3: '',
    refName1: '',
    refPhone1: '',
    refEmail1: '',
    refAddress1: '',
    refAccount1: '',
    refContact1: '',
    refName2: '',
    refPhone2: '',
    refEmail2: '',
    refAddress2: '',
    refAccount2: '',
    refContact2: '',
    refName3: '',
    refPhone3: '',
    refEmail3: '',
    refAddress3: '',
    refAccount3: '',
    refContact3: '',
    bankName: '',
    bankAddress: '',
    bankAccount: '',
    bankOfficer: '',
    bankPhone: '',
    bankFax: '',
    terms: '',
  });

  const handleValue = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const personal = [
    { label: 'Name:', name: 'name', type: 'text', hold: '', value: `${state.name}`, size: '' },
    { label: 'Date:', name: 'date', type: 'date', hold: '', value: `${state.date}`, size: '' },
    { label: 'Email Address:', name: 'email', type: 'email', hold: '', value: `${state.email}`, size: '30' },
    { label: 'Phone#:', name: 'phone', type: 'text', hold: '', value: `${state.phone}`, size: '' },
    { label: 'Fax:', name: 'fax', type: 'text', hold: '', value: `${state.fax}`, size: '' },
    { label: 'Accounts Payable Phone#:', name: 'payablePhone', type: 'text', hold: '', value: `${state.payablePhone}`, size: '' },
    { label: 'Accounts Payable Email:', name: 'payableEmail', type: 'email', hold: '', value: `${state.payableEmail}`, size: '30' },
    { label: 'Billing Address:', name: 'billing', type: 'text', hold: '', value: `${state.billing}`, size: '40' },
    { label: 'Mailing Address:', name: 'mailing', type: 'text', hold: '', value: `${state.mailing}`, size: '40' },
    { label: 'Type of Business:', name: 'businessType', type: 'text', hold: '', value: `${state.businessType}`, size: '' },
    { label: 'Federal ID Number:', name: 'federalId', type: 'text', hold: '', value: `${state.federalId}`, size: '' },
  ]
  const principals1 = [
    { label: 'Name:', name: 'princName1', type: 'text', hold: 'First & Last Name', value: `${state.princName1}`, size: '' },
    { label: 'Title:', name: 'princTitle1', type: 'text', hold: '', value: `${state.princTitle1}`, size: '' },
    { label: 'Phone#:', name: 'princPhone1', type: 'text', hold: '', value: `${state.princPhone1}`, size: '' },
    { label: 'Email:', name: 'princEmail1', type: 'email', hold: '', value: `${state.princEmail1}`, size: '30' },
    { label: 'Mailing Address:', name: 'princMailing1', type: 'text', hold: '', value: `${state.princMailing1}`, size: '40' },
  ]
  const principals2 = [
    { label: 'Name:', name: 'princName2', type: 'text', hold: 'First & Last Name', value: `${state.princName2}`, size: '' },
    { label: 'Title:', name: 'princTitle2', type: 'text', hold: '', value: `${state.princTitle2}`, size: '' },
    { label: 'Phone#:', name: 'princPhone2', type: 'text', hold: '', value: `${state.princPhone2}`, size: '' },
    { label: 'Email:', name: 'princEmail2', type: 'email', hold: '', value: `${state.princEmail2}`, size: '30' },
    { label: 'Mailing Address:', name: 'princMailing2', type: 'text', hold: '', value: `${state.princMailing2}`, size: '40' },
  ]
  const principals3 = [
    { label: 'Name:', name: 'princName3', type: 'text', hold: 'First & Last Name', value: `${state.princName3}`, size: '' },
    { label: 'Title:', name: 'princTitle3', type: 'text', hold: '', value: `${state.princTitle3}`, size: '' },
    { label: 'Phone#:', name: 'princPhone3', type: 'text', hold: '', value: `${state.princPhone3}`, size: '' },
    { label: 'Email:', name: 'princEmail3', type: 'email', hold: '', value: `${state.princEmail3}`, size: '30' },
    { label: 'Mailing Address:', name: 'princMailing3', type: 'text', hold: '', value: `${state.princMailing3}`, size: '40' },
  ]
  const references1 = [
    { label: 'Name:', name: 'refName1', type: 'text', hold: '', value: `${state.refName1}`, size: '' },
    { label: 'Phone#:', name: 'refPhone1', type: 'text', hold: '', value: `${state.refPhone1}`, size: '' },
    { label: 'Email:', name: 'refEmail1', type: 'email', hold: '', value: `${state.refEmail1}`, size: '30' },
    { label: 'Address:', name: 'refAddress1', type: 'text', hold: '', value: `${state.refAddress1}`, size: '40' },
    { label: 'Account Number:', name: 'refAccount1', type: 'text', hold: '', value: `${state.refAccount1}`, size: '' },
    { label: 'Contact:', name: 'refContact1', type: 'text', hold: '', value: `${state.refContact1}`, size: '' },
  ]
  const references2 = [
    { label: 'Name:', name: 'refName2', type: 'text', hold: '', value: `${state.refName2}`, size: '' },
    { label: 'Phone#:', name: 'refPhone2', type: 'text', hold: '', value: `${state.refPhone2}`, size: '' },
    { label: 'Email:', name: 'refEmail2', type: 'email', hold: '', value: `${state.refEmail2}`, size: '30' },
    { label: 'Address:', name: 'refAddress2', type: 'text', hold: '', value: `${state.refAddress2}`, size: '40' },
    { label: 'Account Number:', name: 'refAccount2', type: 'text', hold: '', value: `${state.refAccount2}`, size: '' },
    { label: 'Contact:', name: 'refContact2', type: 'text', hold: '', value: `${state.refContact2}`, size: '' },
  ]
  const references3 = [
    { label: 'Name:', name: 'refName3', type: 'text', hold: '', value: `${state.refName3}`, size: '' },
    { label: 'Phone#:', name: 'refPhone3', type: 'text', hold: '', value: `${state.refPhone3}`, size: '' },
    { label: 'Email:', name: 'refEmail3', type: 'email', hold: '', value: `${state.refEmail3}`, size: '30' },
    { label: 'Address:', name: 'refAddress3', type: 'text', hold: '', value: `${state.refAddress3}`, size: '40' },
    { label: 'Account Number:', name: 'refAccount3', type: 'text', hold: '', value: `${state.refAccount3}`, size: '' },
    { label: 'Contact:', name: 'refContact3', type: 'text', hold: '', value: `${state.refContact3}`, size: '' },
  ]
  const bank = [
    { label: 'Name:', name: 'bankName', type: 'text', hold: '', value: `${state.bankName}`, size: '' },
    { label: 'Address:', name: 'bankAddress', type: 'text', hold: '', value: `${state.bankAddress}`, size: '40' },
    { label: 'Account Number:', name: 'bankAccount', type: 'text', hold: '', value: `${state.bankAccount}`, size: '' },
    { label: 'Officer:', name: 'bankOfficer', type: 'text', hold: 'First & Last Name', value: `${state.bankOfficer}`, size: '' },
    { label: 'Phone#:', name: 'bankPhone', type: 'text', hold: '', value: `${state.bankPhone}`, size: '' },
    { label: 'Fax:', name: 'bankFax', type: 'text', hold: '', value: `${state.bankFax}`, size: '' },
  ]



  return (
    <main className='app'>
      <p>All clients who wish to open a line of credit with us must fill out our customer credit application. A line of credit allows clients an extra 30 days from date of invoice to pay in full.</p>
      <form action=''>
        <fieldset className='fields center'>
          {personal.map((input) => (
            <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
        </fieldset>
        <p className='break'>Principals:</p>
        <fieldset className='fields'>
          1.{principals1.map((input) => (
            <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
        </fieldset>
        <fieldset className='fields'>
          2.{principals2.map((input) => (
            <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
        </fieldset>
        <fieldset className='fields'>
          3.{principals3.map((input) => (
            <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
        </fieldset>
        <p className='break'>References:</p>
        <fieldset className='fields'>
          1.{references1.map((input) => (
            <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
        </fieldset>
        <fieldset className='fields'>
          2.{references2.map((input) => (
            <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
        </fieldset>
        <fieldset className='fields'>
          3.{references3.map((input) => (
            <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
        </fieldset>
        <p className='break'>Bank Reference:</p>
        <fieldset className='fields center'>
          {bank.map((input) => (
            <div className='boxes' key={input.name}><label className='required' htmlFor={input.name}>{input.label}</label><input id={input.name} name={input.name} required type={input.type} placeholder={input.hold} value={input.value} size={input.size} onChange={ handleValue } /></div>
          ))}
        </fieldset>
        <textarea rows="9" cols="85" value={`TERMS OF PAYMENT ARE NET THIRTY (30) DAYS FROM THE DATE OF THE INVOICE, UNLESS EXPRESSLY STATED OTHERWISE ON THE FRONT OF THE INVOICE. ALL UNPAID BALANCES ARE DEEMED PAST DUE THIRTY (30) DAYS AFTER THE INVOICE DATE. SELLER MAY, IN ITS SOLE AND ABSOLUTE DISCRETION, DELAY ANY SHIPMENTS WITHOUT ANY NOTICE WHATSOEVER TO ANY ACCOUNTS WHICH ARE PAST DUE. INTEREST WILL ACCRUE AT THE RATE OF ONE AND ONE-HALF PERCENT (1.5%) PER MONTH ON ALL UNPAID AMOUNTS COMMENCING THIRTY (30) DAYS AFTER THE DATE OF THE INVOICE. SELLER RESERVES THE RIGHT TO INSIST ON FULL PAYMENT IN CASH PRIOR TO DELIVERING GOODS TO THE BUYER. IN THE EVENT SELLER REFERS THIS ACCOUNT TO AN ATTORNEY TO ENFORCE ITS RIGHTS, THE BUYER SHALL PAY EXPENSES THEREOF, INCLUDING ATTORNEY'S FEES AND COLLECTION FEES.`} readOnly/>
        <br />
        <label>I agree<input type='radio' name='terms' value='I agree' checked={state.terms === 'I agree'} onChange={handleValue}/></label> &nbsp;
        <label>I disagree<input type='radio' name='terms' value='I disagree' checked={state.terms === 'I disagree'} onChange={handleValue}/></label>
        <button className='formbut' type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default CreditApp;
