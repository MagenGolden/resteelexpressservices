import React from 'react';
import PropTypes from 'prop-types';

const Agree = ({state, handleValue}) => {

  return (
    <fieldset className='terms'>
      <textarea id='agree' name='agree' value={`TERMS OF PAYMENT ARE NET THIRTY (30) DAYS FROM THE DATE OF THE INVOICE, UNLESS EXPRESSLY STATED OTHERWISE ON THE FRONT OF THE INVOICE. ALL UNPAID BALANCES ARE DEEMED PAST DUE THIRTY (30) DAYS AFTER THE INVOICE DATE. SELLER MAY, IN ITS SOLE AND ABSOLUTE DISCRETION, DELAY ANY SHIPMENTS WITHOUT ANY NOTICE WHATSOEVER TO ANY ACCOUNTS WHICH ARE PAST DUE. INTEREST WILL ACCRUE AT THE RATE OF ONE AND ONE-HALF PERCENT (1.5%) PER MONTH ON ALL UNPAID AMOUNTS COMMENCING THIRTY (30) DAYS AFTER THE DATE OF THE INVOICE. SELLER RESERVES THE RIGHT TO INSIST ON FULL PAYMENT IN CASH PRIOR TO DELIVERING GOODS TO THE BUYER. IN THE EVENT SELLER REFERS THIS ACCOUNT TO AN ATTORNEY TO ENFORCE ITS RIGHTS, THE BUYER SHALL PAY EXPENSES THEREOF, INCLUDING ATTORNEY'S FEES AND COLLECTION FEES.`} readOnly/>
      <br />
      <div>
      <label>I agree<input id='terms' type='radio' name='terms' value='I agree' checked={state.terms === 'I agree'} onChange={handleValue} required/></label> &nbsp;
      <label>I disagree<input type='radio' name='terms' value='I disagree' checked={state.terms === 'I disagree'} onChange={handleValue}/></label>
      </div>
    </fieldset>
  );
};

Agree.propTypes = {
  state: PropTypes.object,
  handleValue: PropTypes.func,
}

export default Agree;
