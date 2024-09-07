import React from 'react';
import './creditApp.scss';
import { useState, useEffect } from 'react';

const CreditApp = () => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fax, setFax] = useState('');
  const [payablePhone, setPayablePhone] = useState('');
  const [payableEmail, setPayableEmail] = useState('');
  const [billing, setBilling] = useState('');
  const [mailing, setMailing] = useState('');
  const [business, setBusinnes] = useState('');
  const [federalId, setFederalId] = useState('');
  const [princName1, setprincName1] = useState('');
  const [princTitle1, setPrincTitle1] = useState('');
  const [princEmail1, setPrincEmail1] = useState('');
  const [princPhone1, setPrincPhone1] = useState('');
  const [princeAddress1, setPrinceAddress1] = useState('');
  const [princName2, setprincName2] = useState('');
  const [princTitle2, setPrincTitle2] = useState('');
  const [princEmail2, setPrincEmail2] = useState('');
  const [princPhone2, setPrincPhone2] = useState('');
  const [princeAddress2, setPrinceAddress2] = useState('');
  const [princName3, setprincName3] = useState('');
  const [princTitle3, setPrincTitle3] = useState('');
  const [princEmail3, setPrincEmail3] = useState('');
  const [princPhone3, setPrincPhone3] = useState('');
  const [princeAddress3, setPrinceAddress3] = useState('');
  const [refName1, setRefName1] = useState ('');
  const [refPhone1, setRefPhone1] = useState ('');
  const [refemail1, setRefEmail1] = useState ('');
  const [refAddress1, setRefAddress1] = useState ('');
  const [refAccount1, setRefAccount1] = useState ('');
  const [refContact1, setRefContact1] = useState ('');
  const [refName2, setRefName2] = useState ('');
  const [refPhone2, setRefPhone2] = useState ('');
  const [refemail2, setRefEmail2] = useState ('');
  const [refAddress2, setRefAddress2] = useState ('');
  const [refAccount2, setRefAccount2] = useState ('');
  const [refContact2, setRefContact2] = useState ('');
  const [refName3, setRefName3] = useState ('');
  const [refPhone3, setRefPhone3] = useState ('');
  const [refemail3, setRefEmail3] = useState ('');
  const [refAddress3, setRefAddress3] = useState ('');
  const [refAccount3, setRefAccount3] = useState ('');
  const [refContact3, setRefContact3] = useState ('');
  const [bankName, setBankName] = useState ('');
  const [bankAddress, setBankAddress] = useState ('');
  const [bankAccount, setBankAccount] = useState ('');
  const [officer, setOfficer] = useState ('');
  const [bankPhone, setBankPhone] = useState ('');
  const [bankFax, setBankFax] = useState ('');



  return (
    <main className='app'>
    <p></p>
    <form action=''>
    <label className='required' htmlFor='name'>Name:</label>
    <input id='name' required type='text' placeholder='First & Last Name' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='date'>Date:</label>
    <input id='name' required type='date' placeholder='' value={date} size='' onChange={ (e) => setDate(e.target.value) } />
    <label className='required' htmlFor='email'>Email:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='phone'>Phone #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='fax'>Fax #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='payablePhone'>Accounts Payable Phone #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='payableEmail'>Accounts Payable Email:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='billing'>Billing Address:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='mailing'>Mailing Address:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='businessType'>Type of Business:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='federalId'>FederalID Number:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princName1'>Name:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princTitle1'>Title:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princPhone1'>Phone #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princEmail1'>Email:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princMailing1'>Mailing Address:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princName2'>Name:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princTitle2'>Title:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princPhone2'>Phone #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princEmail2'>Email:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princMailing2'>Mailing Address:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princName3'>Name:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princTitle3'>Title:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princPhone3'>Phone #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princEmail3'>Email:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='princMailing3'>Mailing Address:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refName1'>Name:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refPhone1'>Phone #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refEmail1'>Email:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refAddress1'>Address:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refAccount1'>Account Number:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refContact1'>Contact:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refName2'>Name:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refPhone2'>Phone #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refEmail2'>Email:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refAddress2'>Address:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refAccount2'>Account Number:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refContact2'>Contact:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refName3'>Name:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refPhone3'>Phone #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refEmail3'>Email:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refAddress3'>Address:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refAccount3'>Account Number:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='refContact3'>Contact:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='bank'>Name:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='bankAddress'>Address:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='bankAccount'>Account Number:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='officer'>Officer:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='bankPhone'>Phone #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <label className='required' htmlFor='bankFax'>Fax #:</label>
    <input id='name' required type='text' placeholder='' value={name} size='' onChange={ (e) => setName(e.target.value) } />
    <br />
    <button className='formbut hvr-shrink hvr-sweep-to-right' type='submit'>Submit</button>
    </form>
    </main>
  );
};

export default CreditApp;
