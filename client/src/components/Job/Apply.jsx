import React from 'react';
import { useState, useEffect } from 'react';
import './jobApp.scss';
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

const Apply = () => {

  useEffect (() => {
    console.log(files)
  })

  const [state, setState] = useState ({
    name: '',
    date: '',
    address: '',
    addressYears: '',
    phone: '',
    social: '',
    dob: '',
    position: '',
    noPerf: '',
    mon: '',
    tue: '',
    wed: '',
    thu: '',
    fri: '',
    sat: '',
    weekly: '',
    employType: '',
    employDate: '',
    schoolName: '',
    schoolType: '',
    location: '',
    schoolYears: '',
    degree: '',
    convicted: '',
    convictedEx: '',
    drugTest: '',
    vehicle: '',
    license: '',
    licenseNum: '',
    licenseState: '',
    licenseType: '',
    licenseExpir: '',
    accidents: '',
    accidentsNum: '',
    violations: '',
    violationsNum: '',
    served: '',
    guard: '',
    servicePosition: '',
    serviceStart: '',
    serviceEnd: '',
    refName1: '',
    refRelate1: '',
    refJob1: '',
    refEmployer1: '',
    refYears1: '',
    refPhone1: '',
    refName2: '',
    refRelate2: '',
    refJob2: '',
    refEmployer2: '',
    refYears2: '',
    refPhone2: '',
    contactEmployer: '',
    minlbs: '',
    maxlbs: '',
    limits: '',
    autocad: '',
    micro: '',
    terms: false,
  });

  const  handleValue = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const [education, setEducation] = useState([{
    school: '',
    schoolType: '',
    schoolLocation: '',
    schoolNum: '',
    degree: '',
  }]);

  const addEducation = () => {
    setEducation([
      ...education,
      {school: '',
       schoolType: '',
       schoolLocation: '',
       schoolNum: '',
       degree: '',}
    ]);
  };

  const deleteEducation = (index) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
  };

  const handleEducation = (e, index) => {
    let { name, value } = e.target;
    let onChangeValue = [...education];
    onChangeValue[index][name] = value;
    setEducation(onChangeValue);
  };

  const [work, setWork] = useState([{
    workEmployer: '',
    workNum: '',
    workAddress: '',
    workSuper: '',
    workStart: '',
    workEnd: '',
    workPayStart: '',
    workPayEnd: '',
    workPayType: '',
    workTitle: '',
    workRespon: '',
    workLeave: '',
  }]);

  const addWork = () => {
    setWork([
      ...work,
      {workEmployer: '',
       workNum: '',
       workAddress: '',
       workSuper: '',
       workStart: '',
       workEnd: '',
       workPayStart: '',
       workPayEnd: '',
       workPayType: '',
       workTitle: '',
       workRespon: '',
       workLeave: '',}
    ]);
  };

  const deleteWork = (index) => {
    const newWork = [...work];
    newWork.splice(index, 1);
    setWork(newWork);
  };

  const handleWork = (e, index) => {
    let { name, value } = e.target;
    let onChangeValue = [...work];
    onChangeValue[index][name] = value;
    setWork(onChangeValue);
  };

  const [files, setFiles] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFiles(file);
      setDragActive(false);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.dataTransfer.files[0];
      setFiles(file);
    }
  };


  return (
    <main className='job'>
      <br />
      <p>(if no position is currently open, applications wil be put on file until a position is available)</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <Personal state={state} handleValue={handleValue}/>
        <p className='break'>Days/Hours Available to work:</p>
        <Hours state={state} handleValue={handleValue} />
        <p className='break'>Educational Background:</p>
        <Education education={education} addEducation={addEducation} deleteEducation={deleteEducation} handleEducation={handleEducation} />
        <p className='break'>Background Information:</p>
        <Background state={state} handleValue={handleValue} />
        <p className='break'>Military History:</p>
        <Military state={state} handleValue={handleValue} />
        <p className='break'>References:</p>
        <p className='break'>Please list two references other than relatives or previous employers.</p>
        <References state={state} handleValue={handleValue} />
        <p className='break'>Work Experience:</p>
        <p className='break thin'>Please list your work experience for the <b>past five years</b> beginning with your <b>most recent</b> job held. If you were self-employed, provide registered company name or client information who can prove work history. Attach any additional information you think might be necessary to prove employment.</p>
        <Work work={work} addWork={addWork} deleteWork={deleteWork} handleWork={handleWork}/>
        <Files files={files} dragActive={dragActive} handleDrag={handleDrag} handleUpload={handleUpload} handleDrop={handleDrop} />
        <br />
        <Questions state={state} handleValue={handleValue} />
        <p className='break'>Please read Application Form Waiver</p>
        <Terms state={state} handleValue={handleValue} />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default Apply;
