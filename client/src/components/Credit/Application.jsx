import React from 'react';
import './creditApp.scss';
import { useState } from 'react';
import Bank from './Bank';
import Person from './Person';
import Principals from './Principals';
import Refer from './Refer';
import Agree from './Agree';
import api from '../api';

const Application = () => {

  const [state, setState] = useState ({
    name: '', date: '', email: '', phone: '', fax: '', payablePhone: '', payableEmail: '', billing: '', mailing: '', businessType: '', federalId: '', princName1: '', princTitle1: '', princPhone1: '', princEmail1: '', princMailing1: '', princName2: '', princTitle2: '', princPhone2: '', princEmail2: '', princMailing2: '', princName3: '', princTitle3: '', princPhone3: '', princEmail3: '', princMailing3: '', refName1: '', refPhone1: '', refEmail1: '', refAddress1: '', refAccount1: '', refContact1: '', refName2: '', refPhone2: '', refEmail2: '', refAddress2: '', refAccount2: '', refContact2: '', refName3: '', refPhone3: '', refEmail3: '', refAddress3: '', refAccount3: '', refContact3: '', bankName: '', bankAddress: '', bankAccount: '', bankOfficer: '', bankPhone: '', bankFax: '', terms: '',
  });

  const handleValue = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredInputs = document.querySelectorAll('[required]');
    let requiredFields = Array.from(requiredInputs);
    const emptyFields = requiredFields.filter(item =>
      (!item.value && item.required && item.id)
    );
    const requiredQuests = [
      { id: 'agree', value: `${state.terms}` },
    ];
    const emptyQuests = requiredQuests.filter( item => (!item.value) || (item.value === "false") );

    if ( (emptyFields.length === 0) && (emptyQuests.length === 0) ) {
      const creditInfo = state;
      try {
        const response = await api.post('/credit', creditInfo);
        if (response.statusText === 'OK') {
          alert(
            'Great! Your application has been sent. We will get back to you as soon as possible!'
          );
          window.location.reload();
        } else {
          alert('Opps. Something went wrong. Please try again later.')
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Please fill in all required fields.');
      emptyFields.forEach(element => {
        const emptyElement = document.getElementById(element.id);
        emptyElement.classList.add('required-highlight')
      });
      emptyQuests.forEach(item => {
        const emptyItem = document.getElementById(item.id);
        emptyItem.classList.add('required-highlight')
      });
      if ( emptyFields.length !== 0 ) {
        const firstEmptyField = emptyFields[0];
        firstEmptyField.focus();
      } else if (emptyQuests.length !== 0) {
        const emptyId = document.getElementById(emptyQuests[0].id);
        emptyId.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

      return (
        <main className='app'>
          <p>All clients who wish to open a line of credit with us must fill out our customer credit application. A line of credit allows clients an extra 30 days from date of invoice to pay in full.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <Person state={state} handleValue={handleValue} />
            <p className='sub'>Principals:</p>
            <Principals state={state} handleValue={handleValue} />
            <p className='sub'>References:</p>
            <Refer state={state} handleValue={handleValue} />
            <p className='sub'>Bank Reference:</p>
            <Bank state={state} handleValue={handleValue} />
            <Agree state={state} handleValue={handleValue} />
            <button className='subButt' type='button' onClick={handleSubmit}>Submit</button>
          </form>
        </main>
      );
    };

export default Application;