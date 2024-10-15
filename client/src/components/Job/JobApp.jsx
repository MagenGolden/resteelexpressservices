import React from 'react';
import '../Job/jobApp.scss';
import { useState, useEffect, useRef } from 'react';

const JobApp = () => {

  useEffect (() => {
  console.log(state)
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

  const personal = [
    { tag: 'input', label: 'Name:', required: 'required', name: 'name', type: 'text', value: `${state.name}` },
    { tag: 'input', label: 'Date:', required: 'required', name: 'date', type: 'date', value: `${state.date}` },
    { tag: 'input', label: 'Present Address:', required: 'required', name: 'address', type: 'text', value: `${state.address}`, size: '40' },
    { tag: 'input', label: 'How long have you lived at current address?', required: 'required', name: 'addressYears', type: 'number', value: `${state.addressYears}`, min: '1', max: '99' },
    { tag: 'input', label: 'Phone#:', required: 'required', name: 'phone', type: 'text', value: `${state.phone}` },
    { tag: 'input', label: 'Social Security#:', required: 'required', name: 'social', type: 'text', value: `${state.social}` },
    { tag: 'input', label: 'Date of Birth:', required: 'required', name: 'dob', type: 'date', value: `${state.dob}`, size: '' },
    { tag: 'select', label: 'Position applied for:', name: 'position', value: `${state.position}`, label2: 'Any Open Position', value2: 'any', label3: 'Shop', value3: 'shop', label4: 'Office', value4: 'office'}
  ]
  const hours = [
    { tag: 'input', label: 'No Preference', name: 'noPerf', type: 'checkbox', checked: `${state.noPerf}` },
    { tag: 'input', label: 'Mon:', name: 'mon', type: 'number', value: `${state.mon}`, min: '1', max: '20' },
    { tag: 'input', label: 'Tue:', name: 'tue', type: 'number', value: `${state.tue}`, min: '1', max: '20' },
    { tag: 'input', label: 'Wed:', name: 'wed', type: 'number', value: `${state.wed}`, min: '1', max: '20' },
    { tag: 'input', label: 'Thu:', name: 'thu', type: 'number', value: `${state.thu}`, min: '1', max: '20' },
    { tag: 'input', label: 'Fri:', name: 'fri', type: 'number', value: `${state.fri}`, min: '1', max: '20' },
    { tag: 'input', label: 'Sat:', name: 'sat', type: 'number', value: `${state.sat}`, min: '1', max: '20' },
    { tag: 'input', label: 'How many hours can you work weekly?', required: 'required', name: 'weekly', type: 'number', value: `${state.weekly}`, min: '10', max: '60' },
    { tag: 'select', label: 'Employment type desired:', required: 'required', name: 'employType', value: `${state.employType}`, label2: 'Full-time', value2: 'full', label3: 'Part-time', value3: 'part' },
    { tag: 'input', label: 'Date Available for Employment:', required: 'required', name: 'employDate', value: `${state.employDate}`, type: 'date' }
  ]
  const background = [
    { tag: 'input', label: 'Can you pass a drug test?', required: 'required', name: 'drugTest', type: 'radio' },
    { tag: 'input', label: 'Do you have a dependable vehicle to travel to and from work?', required: 'required', name: 'vehicle', type: 'radio' },
    { tag: 'input', label: 'Do you have a drivers license?', required: 'required', name: 'license', type: 'radio' },
    { tag: 'input', label: `Driver's License Number:`, type: 'text', name: 'licenseNum', value: `${state.licenseNum}`, required: 'required', size: '15' },
    { tag: 'input', label: 'State of Issue', type: 'text', name: 'licenseState', value:`${state.licenseState}`, required: 'required', size: '10' },
    { tag: 'select', label: 'Type of License', required: 'required', name: 'licenseType', value: `${state.licenseType}`, label2: 'Class D (everyday)', value2: 'D', label3: 'Operator', value3: 'operator', label4: 'commercial', value4: 'commercial' },
    { tag: 'input', label: 'Expiration Date:', required: 'required', name: 'licenseExpir', value:`${state.licenseExpir}`, type: 'date',  },
    { tag: 'input', label: 'Have you had any accidents during the past three years?', required: 'required', name: 'accidents', type: 'radio' },
    { tag: 'input', label: 'If yes, how many?', name: 'accidentsNum', value: `${state.accidentsNum}`, type: 'number', min: '1', max: '50' },
    { tag: 'input', label: 'Have you had any violations during the past three years?', required: 'required', name: 'violations', type: 'radio' },
    { tag: 'input', label: 'If yes, how many?', name: 'violationsNum', value: `${state.violationsNum}`, type: 'number', min: '1', max: '50' },
    { tag: 'input', label: 'Have you ever been convicted of a crime?', required: 'required', name: 'convicted', type: 'radio' },
  ]
  const military = [
    { tag: 'input', label: 'Have you ever been in the Armed Forces?', required: 'required', name: 'served', type: 'radio' },
    { tag: 'input', label: 'Are you now a member of the National Guard?', required: 'required', name: 'guard', type: 'radio' },
    { tag: 'input', label: 'Position Held:', type: 'text', name: 'servicePosition', value:`${state.servicePosition}`, size: '15' },
    { tag: 'input', label: 'Date Entered:', type: 'date', name: 'serviceStart', value: `${state.serviceStart}` },
    { tag: 'input', label: 'Date Discharged:', type: 'date', name: 'serviceEnd', value: `${state.serviceEnd}` }
  ]
  const references1 = [
    { label: 'Name:', name: 'refName1', type: 'text', value: `${state.refName1}`, required: 'required' },
    { label: 'Relationship:', name: 'refRelate1', type: 'text', value: `${state.refRelate1}`, required: 'required' },
    { label: 'Job Title:', name: 'refJob1', type: 'text', value: `${state.refJob1}`, required: 'required' },
    { label: 'Employer (Company Name):', name: 'refEmployer1', type: 'text', value: `${state.refEmployer1}`, size: '30', required: 'required' },
    { label: 'Years Known:', name: 'refYears1', type: 'number', value: `${state.refYears1}`, min: '1', max: '50', required: 'required' },
    { label: 'Phone#:', name: 'refPhone1', type: 'text', value: `${state.refPhone1}`, required: 'required' },
  ]
  const references2 = [
    { label: 'Name:', name: 'refName2', type: 'text', value: `${state.refName2}`, required: 'required' },
    { label: 'Relationship:', name: 'refRelate2', type: 'text', value: `${state.refRelate2}`, required: 'required' },
    { label: 'Job Title:', name: 'refJob2', type: 'text', value: `${state.refJob2}`, required: 'required' },
    { label: 'Employer (Company Name):', name: 'refEmployer2', type: 'text', value: `${state.refEmployer2}`, size: '30', required: 'required' },
    { label: 'Years Known:', name: 'refYears2', type: 'number', value: `${state.refYears2}`, min: '1', max: '50', required: 'required' },
    { label: 'Phone#:', name: 'refPhone2', type: 'text', value: `${state.refPhone2}`, required: 'required' },
  ]

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

const [files, setFiles] = useState(null);

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

const inputRef = useRef(null);

const browse = (e) => {
  e.preventDefault();
  inputRef.current.click();
};


  return (
    <main className='job'>
      <br />
      <p>(if no position is currently open, applications wil be put on file until a position is available)</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset className='field'>
          {personal.map((input) => (
            input.tag === 'select' ?
            <div key={input.name}>
              <label className={input.required} htmlFor={input.name}>{input.label}</label>
              <select id={input.name} name={input.name} onChange={handleValue} value={input.value}>
                <option value='null'>Please choose an option</option>
                <option value={input.value2}>{input.label2}</option>
                <option value={input.value3}>{input.label3}</option>
                <option value={input.value4}>{input.label4}</option>
              </select>
            </div> :
            <div key={input.name}>
              <label className={input.required} htmlFor={input.name}>{input.label}</label>
              <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} onChange={handleValue} size={input.size}/>
            </div>
          ))}
        </fieldset>
        <p className='break'>Days/Hours Available to work:</p>
        <fieldset className='field'>
          {hours.map((input) => (
            input.tag === 'select' ?
            <div key={input.name} className='left'>
              <label className={input.required} htmlFor={input.name}>{input.label}</label>
              <select id={input.name} name={input.name} onChange={handleValue} value={input.value}>
                <option value='null'>Please choose an option</option>
                <option value={input.value2}>{input.label2}</option>
                <option value={input.value3}>{input.label3}</option>
              </select>
            </div> :
            <div key={input.name} className='left'>
              <label className={input.required} htmlFor={input.name}>{input.label}</label>
              <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} onChange={handleValue} min={input.min} max={input.max} checked={input.checked}  />
            </div>
          ))}
        </fieldset>
        <p className='break'>Educational Background:</p>
        <fieldset className='field break'>
          {education.map((input, index) => (
            <div className='zero' key={index}>
              <label className='required' htmlFor='school'>Name of School:</label>
              <input id='school' name='school' required type='text' value={input.school} onChange={(e) => handleEducation(e, index)} size='25' />
              <label className='required' htmlFor='schoolType'>Type of School:</label>
              <select id='schoolType' name='schoolType' onChange={(e) => handleEducation(e, index)} value={input.schoolType}>
                <option value='null'>Please choose an option</option>
                <option value='highSchool'>High School</option>
                <option value='college'>College</option>
                <option value='trade'>Trade</option>
                <option value='business'>Business</option>
                <option value='professional'>Professional</option>
              </select><br />
              <label className='required' htmlFor='schoolLocation'>Location:</label>
              <input id='schoolLocation' name='schoolLocation' required type='text' value={input.schoolLocation} onChange={(e) => handleEducation(e, index)} size='35' />
              <label className='required' htmlFor='schoolNum'>Number of Years Completed</label>
              <input id='schoolNum' name='schoolNum' required type='number' value={input.schoolNum} onChange={(e) => handleEducation(e, index)} min='1' max='50' />
              <label className='required' htmlFor='degree'>Major & Degree:</label>
              <input id='degree' name='degree' required type='text' value={input.degree} onChange={(e) => handleEducation(e, index)} size='15' />
              {education.length > 1 && (
                <button onClick={() => deleteEducation(index)}>Delete</button>
              )}
              {index === education.length - 1 && (
                <button onClick={() => addEducation()}>Add</button>
              )}
            </div>
          ))}
        </fieldset>
        <p className='break'>Background Information:</p>
        <fieldset className='break left'>
          {background.map((input) => (
            input.tag === 'select' ?
            <div key={input.name}>
              <label className={input.required} htmlFor={input.name}>{input.label}</label>
              <select id={input.name} name={input.name} onChange={handleValue} value={input.value}>
                <option value='null'>Please choose an option</option>
                <option value={input.value2}>{input.label2}</option>
                <option value={input.value3}>{input.label3}</option>
                <option value={input.value4}>{input.label4}</option>
              </select>
            </div> :
            input.type === 'radio' ?
            <div key={input.name}>
              <label className={input.required}>{input.label}</label>
              <label><input name={input.name} type={input.type} value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name={input.name} type={input.type} value='no' onChange={handleValue} />No</label>
            </div> :
            <div key={input.name}>
              <label className={input.required} hmtlFor={input.name}>{input.label}</label>
              <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} onChange={handleValue} size={input.size} min={input.min} max={input.max} />
            </div>
          ))}
        </fieldset>
        <div className='break left'>
          <div>
            <label>
              If yes, explain the number of convictions, nature of offense(s) leading to conviction(s), how recently such offense(s) was/were committed, sentence(s) imposed, and type(s) of rehabilitation.
              <br /><textarea name='convictedEx' value={state.convictedEx} rows='10' cols='65' onChange={handleValue} />
            </label>
          </div>
        </div>
        <p className='break'>Military History:</p>
        <fieldset className='break left'>
          {military.map((input) => (
            input.type === 'radio' ?
            <div key={input.name}>
              <label className={input.required}>{input.label}</label>
              <label><input name={input.name} type={input.type} value='yes' onChange={handleValue} />Yes</label><label><input name={input.name} type={input.type} value='no' onChange={handleValue} />No</label>
            </div> :
            <div key={input.name}>
              <label className={input.required} hmtlFor={input.name}>{input.label}</label>
              <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} onChange={handleValue} size={input.size} />
            </div>
          ))}
        </fieldset>
        <p className='break'>References:</p>
        <p className='break'>Please list two references other than relatives or previous employers.</p>
        <fieldset className='field narrow left'>
          (1){references1.map((input) => (
            <div key={input.name}>
              <label className={input.required} htmlFor={input.name}>{input.label}</label>
              <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} size={input.size} min={input.min} max={input.max} onChange={handleValue} />
            </div>
            ))}
        </fieldset>
        <fieldset className='field narrow left'>
          (2){references2.map((input) => (
            <div key={input.name}>
              <label className={input.required} htmlFor={input.name}>{input.label}</label>
              <input id={input.name} name={input.name} required={input.required} type={input.type} value={input.value} size={input.size} min={input.min} max={input.max} onChange={handleValue} />
            </div>
            ))}
        </fieldset>
        <p className='break'>Work Experience:</p>
        <p className='break thin'>Please list your work experience for the <b>past five years</b> beginning with your <b>most recent</b> job held. If you were self-employed, provide registered company name or client information who can prove work history. Attach any additional information you think might be necessary to prove employment.</p>
        <fieldset className='break left'>
          {work.map((input, index) => (
            <div key={index}>
              <label className='required' htmlFor='workEmployer'>Name of Employer:</label>
              <input id='workEmployer' name='workEmployer' required type='text' value={input.workEmployer} onChange={(e) => handleWork(e, index)} size='25' />
              <label className='required' htmlFor='workNum'>Phone #:</label>
              <input id='workNum' name='workNum' required type='text' value={input.workNum} onChange={(e) => handleWork(e, index)} /><br />
              <label className='required' htmlFor='workAddress'>Address:</label>
              <input id='workAddress' name='workAddress' required type='text' value={input.workAddress} onChange={(e) => handleWork(e, index)} size='40' /><br />
              <label className='required' htmlFor='workSuper'>Name of Last Supervisor:</label>
              <input id='workSuper' name='workSuper' required type='text' value={input.workSuper} onChange={(e) => handleWork(e, index)} /><br />
              <label className='required'>Employment Dates:</label><br />
              <label className='required' htmlFor='workStart'>From:</label>
              <input id='workStart' name='workStart' required type='date' value={input.workStart} onChange={(e) => handleWork(e, index)} />
              <label className='required' htmlFor='workEnd'>To:</label>
              <input id='workEnd' name='workEnd' required type='date' value={input.workEnd} onChange={(e) => handleWork(e, index)} /><br />
              <label>(if paid on salary, state weekly pay. If paid hourly, then state hourly pay.)</label>
              <label className='required' htmlFor='workPayStart'>Start Pay:</label>
              <input id='workPayStart' name='workPayStart' required type='text' value={input.workPayStart} onChange={(e) => handleWork(e, index)} size='10' />
              <label className='required' htmlFor='workPayEnd'>End Pay:</label>
              <input id='workPayEnd' name='workPayEnd' required type='text' value={input.workPayEnd} onChange={(e) => handleWork(e, index)} size='10' /><br />
              <label className='required' htmlFor='workPayType'>Hourly of Salary:</label>
              <select id='workPayType' name='workPayType' onChange={(e) => handleWork(e, index)} value={input.workPayType}>
                <option value='null'>Please choose an option</option>
                <option value='workHourly'>hourly</option>
                <option value='workSalary'>salary</option>
              </select><br />
              <label className='required' htmlFor='workTitle'>Highest Held Job Title:</label>
              <input id='workTitle' name='workTitle' required type='text' value={input.workTitle} onChange={(e) => handleWork(e, index)} /><br />
              <label>
                List of jobs and responsibilities while working at this company:
                <br /><textarea name='workRespon' value={input.workRespon} rows='10' cols='65' onChange={(e) => handleWork(e, index)} />
              </label>
              <label><br />
                Reason for leaving (be specific):
                <br /><textarea name='workLeave' value={input.workLeave} rows='10' cols='65' onChange={(e) => handleWork(e, index)} />
              </label>
              {work.length > 1 && (
                <button onClick={() => deleteWork(index)}>Delete</button>
              )}
              {index === work.length - 1 && (
                <button onClick={() => addWork()}>Add</button>
              )}
            </div>
          ))}
        </fieldset>
        <section>
          <label htmlFor='files'><b>Please Upload Any Relevant Documents</b></label>
          <input ref={inputRef} id='files' name='files' type='file' multiple={true} onChange={handleUpload}/>
          <div className={dragActive ? 'dragDropActive' : 'dragDrop' } onDragEnter={handleDrag}>
            <p >Drag and Drop Files Here<br />
              or </p>
            <button className='upload' onClick={browse}>Browse Files</button>
            { dragActive && <div className='cover' onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop} ></div> }
          </div>
        </section>
        <br />
        <fieldset className='break left'>
          <label className='required'>May we contact your current employer?</label>
          <label><input name='contactEmployer' type='radio' value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name='contactEmployer' type='radio' value='no' onChange={handleValue} />No</label>
          <p className='break'>Please fill out the below if apploying to work in the shop or outside.</p>
          <label>Can you lift as least 65lbs?</label>
          <label><input name='minlbs' type='radio' value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name='minlbs' type='radio' value='no' onChange={handleValue} />No</label><br />
          <label htmlFor='maxlbs'>If no, what is the max number of weight you can lift?</label>
          <input name='maxlbs' value={state.maxlbs} type='number' max='300' min='1' onChange={handleValue} /><br />
          <label>Do you have any physical limitations that might prevent you from working with heavy machinery?</label>
          <label><input name='limits' type='radio' value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name='limits' type='radio' value='no' onChange={handleValue} />No</label>
          <p className='break'>Please fill out theb elow if apploying to work in the office.</p>
          <label>Are you experienced in autocad?</label>
          <label><input name='autocad' type='radio' value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name='autocad' type='radio' value='no' onChange={handleValue} />No</label><br />
          <label>Are you epxerienced in microsfot or google applications (such as google docs and excel)?</label>
          <label><input name='micro' type='radio' value='yes' onChange={handleValue} />Yes</label>&nbsp;<label><input name='micro' type='radio' value='no' onChange={handleValue} />No</label>
          <p className='break'>Please read Application Form Waiver</p>
          <textarea rows='20' cols='85' value={`Application Form Waiver:
In exchange for consideration of my job application by Re-Steel Express Services, Inc. (hereinafter, called “The Company”), I agree that: Neither the acceptance of this application nor the subsequent entry into any type of employment relationship, either in the position applied for or any other position, and regardless of the contents of employee handbooks, personnel manuals, benefit plans, policy statements, and the like as they may exist from time to time, or other Company practices, shall serve to create an actual or implied contract of employment, or to confer any right to remain an employee of Re-Steel Express Services, Inc., or otherwise to change in any respect the employment at will relationship between it and the undersigned, and that relationship cannot be altered except by a written instrument signed by the Present/General Manager of the Company. Both the undersigned and Re-Steel Express Services, Inc. may end the employment relationship at any time, without specified notice or reason. If employed, I understand that the Company may unilaterally change or revise their benefits, policies and procedures and such changes may include reduction in benefits. I authorize investigation of all statements contained in this application. I understand the misrepresentation or omission of facts called for is cause for dismissal at any time without any previous notice. I hereby give the Company permission to contact schools, previous employers (unless otherwise indicated), references, and others and hereby release the Company from any liability as a result of such contact. I also understand that (1) the Company has a drug and alcohol policy that provides for pre-employment testing as well as testing after employment, (2) content to and compliance with such policy is a condition of my employment, and (3) continued employment is based on the successful passing of testing under such policy. I further understand that continued employment may be based on the successful passing of job-related physical examinations. I further understand that my employment with the Company shall be probationary for a period of sixty (60) days, and further that at any time during the probationary period or thereafter, my employment relation with the Company is terminable at will for any reason by either party.`} readOnly /><br />
          <input id='terms' name='terms' checked={state.terms} type='checkbox' onChange={handleValue} required /><label htmlFor='terms'>I have read and agree to the terms and conditions within the Application Form Waiver.</label>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default JobApp;
