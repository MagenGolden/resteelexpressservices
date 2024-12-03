import React from 'react';
import '../Credit/creditApp.scss';
import Personal from './Personal.jsx';
import Hours from './Hours.jsx';
import Education from './Education.jsx';
import Background from './Background.jsx';
import Military from './Military.jsx';
import References from './References.jsx';
import Work from './Work.jsx';
import Files from './Files.jsx';
import Questions from './Questions.jsx';
import Terms from './Terms.jsx';
import { useContext, useEffect } from 'react';
import StateContext from './context/StateContext';
import WorkContext from './context/WorkContext';
import FilesContext from './context/FilesContext';
import EdContext from './context/EdContext';
import api from '../api';

const Apply = () => {

  const {state} = useContext(StateContext);
  const {work} = useContext(WorkContext);
  const {files} = useContext(FilesContext);
  const {education} = useContext(EdContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredInputs = document.querySelectorAll('[required]');
    let requiredFields = Array.from(requiredInputs);
    const emptyFields = requiredFields.filter(item =>
      (!item.value && item.required && item.id)
    );
    const requiredQuests = [
      { id: 'drugTest', value: `${state.drugTest}`},
      { id: 'vehicle', value: `${state.vehicle}` },
      { id: 'license', value: `${state.license}` },
      { id: 'accidents', value: `${state.accidents}` },
      { id: 'violations', value: `${state.violations}` },
      { id: 'convicted', value: `${state.convicted}` },
      { id: 'served', value: `${state.served}` },
      { id: 'guard', value: `${state.guard}` },
      { id: 'contactEmployer', value: `${state.contactEmployer}` },
      { id: 'waiver', value: `${state.terms}` }
    ];
    const emptyQuests = requiredQuests.filter( item => (!item.value) || (item.value === "false") );

    if ( (emptyFields.length === 0 ) && (emptyQuests.length === 0) ) {
      const jobInfo = {state, work, files, education};
      try {
        const response = await api.post('/job', jobInfo);
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
      emptyFields.forEach(function (element) {
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
      <br />
      <p>(if no position is currently open, applications wil be put on file until a position is available)</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <Personal/>
        <p className='sub'>Days/Hours Available to work:</p>
        <Hours />
        <p className='sub'>Educational Background:</p>
          <Education />
          <p className='sub'>Background Information:</p>
          <Background />
          <p className='sub'>Military History:</p>
          <Military />
          <p className='sub'>References:</p>
          <p className='sub thin'>Please list two references other than relatives or previous employers.</p>
          <References />
          <p className='sub'>Work Experience:</p>
          <p className='sub thin'>Please list your work experience for the <b>past five years</b>, beginning with your <b>most recent</b> job held. If you were self-employed, provide registered company name or client information who can prove work history. Attach any additional information you think might be necessary to prove employment.</p>
          <Work/>
          <Files />
          <br />
          <Questions />
          <p className='sub'>Please read Application Form Waiver</p>
          <Terms />
          <button className='subButt' type='button' onClick={handleSubmit}>Submit</button>
      </form>
    </main>
  );
};

export default Apply;
