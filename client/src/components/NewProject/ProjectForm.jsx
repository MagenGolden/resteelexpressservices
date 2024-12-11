import React from 'react';
import { useEffect, useState } from 'react';
import './project.scss';
import api from '../api';

const ProjectForm = () => {

  const [sending, setSending] = useState(false);
  const buttonText = sending ? 'Sending' : 'Submit';

  const [state, setState] = useState({
    contractor: '',
    mailing: '',
    purchaser: '',
    billing: '',
    project: '',
    job: '',
    po: '',
    address: '',
    contactName: '',
    contactNum: '',
    managerName: '',
    managerNum: '',
    payment: '',
    tax: '',
    date: '',
    deliver: '',
    certs: '',
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
      { id: 'deliver', value: `${state.deliver}` },
    ];
    const emptyQuests = requiredQuests.filter( item => !item.value );

    if ( (emptyFields.length === 0) && (emptyQuests.length === 0) ) {
      const projectInfo = state;
      try {
        setSending(true);
        const response = await api.post('/project', projectInfo);
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
    <main className='project'>
      <strong>Fill out the below form to start a New Project with us.</strong>
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset className='wrap'>
          <div>
            <label className='required' htmlFor="contractor">Contractor:</label>
            <input name='contractor' id='contractor' type='text' value={state.contractor} onChange={handleValue} required/>
          </div>
          <div>
            <label className='required' htmlFor="mailing">Mailing Address:</label>
            <input name='mailing' id='mailing' type='text' value={state.mailing} onChange={handleValue} required/>
          </div>
          <div>
            <label htmlFor="purchaser">Purchasing Agent:</label>
            <input name='purchaser' id='purchaser' type='text' value={state.purchaser} onChange={handleValue} />
          </div>
        </fieldset>
        <fieldset className='wrap'>
          <div>
            <label htmlFor="billing">Billing Address:</label>
            <input name='billing' id='billing' type='text' value={state.billing} onChange={handleValue} />
          </div>
          <div>
            <label className='required' htmlFor="project">Project Name:</label>
            <input name='project' id='project' type='text' value={state.project} onChange={handleValue} required/>
          </div>
          <div>
            <label htmlFor="job">Job#:</label>
            <input name='job' id='job' type='text' value={state.job} onChange={handleValue} />
          </div>
        </fieldset>
        <fieldset className='wrap'>
          <div>
            <label htmlFor="po">PO#:</label>
            <input name='po' id='po' type='text' value={state.po} onChange={handleValue} />
          </div>
          <div>
            <label className='required' htmlFor="address">Project Address:</label>
            <input name='address' id='address' type='text' value={state.address} onChange={handleValue} autoComplete='off' required/>
          </div>
        </fieldset>
          <p className='left'><strong>Site Contact:</strong></p>
          <fieldset className='flex'>
            <div>
              <label htmlFor='contactName'>Name:</label>
              <input name='contactName' id='contactName' type='text' value={state.contactName} onChange={handleValue} />
            </div>
            <div>
              <label htmlFor='contactNum'>Phone Number:</label>
              <input name='contactNum' id='contactNum' type='text' value={state.contactNum} onChange={handleValue} />
            </div>
          </fieldset>
          <p className='required left'><strong>Project Manager:</strong></p>
          <fieldset className='flex'>
            <div>
              <label className='required' htmlFor='managerName'>Name:</label>
              <input name='managerName' id='managerName' type='text' value={state.managerName} onChange={handleValue} required/>
            </div>
            <div>
              <label className='required' htmlFor='managerNum'>Phone Number:</label>
              <input name='managerNum' id='managerNum' type='text' value={state.managerNum} onChange={handleValue} required/>
            </div>
          </fieldset>
          <fieldset className='left'>
            <div>
              <label htmlFor='date'>Start Date:</label>
              <input name='date' id='date' type='date' value={state.date} onChange={handleValue} />
            </div>
            <div>
              <p>Payment Type: <strong>(all card transactions have a 4% fee)</strong></p>
              <label><input name='payment' type='radio' value='Cash' onChange={handleValue} />Cash</label>
              <label><input name='payment' type='radio' value='Check' onChange={handleValue} />Check</label>
              <label><input name='payment' type='radio' value='Credit' onChange={handleValue} />Credit Card</label>
            </div>
            <div>
              <p>Are you tax exempt? </p>
              <label><input name='tax' type='radio' value='Yes' onChange={handleValue} />Yes</label>
              <label><input name='tax' type='radio' value='No' onChange={handleValue} />No</label>
            </div>
            <div>
              <p id='deliver' className='required'>Will materials  be delivered or picked up?</p>
              <label><input name='deliver' type='radio' value='Delivered' onChange={handleValue} />Delivered</label>
              <label><input name='deliver' type='radio' value='Pick Up' onChange={handleValue} />Picked Up</label>
            </div>
            <div>
              <p>Will your project require mill test reports?</p>
              <label><input name='certs' type='radio' value='Yes' onChange={handleValue} />Yes</label>
              <label><input name='certs' type='radio' value='No' onChange={handleValue} />No</label>
            </div>
          </fieldset>
          <button onClick={handleSubmit}>{buttonText}</button>
      </form>
    </main>

  );
};

export default ProjectForm;
