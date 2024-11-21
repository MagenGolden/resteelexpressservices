import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import WorkContext from './context/WorkContext'


const Work = () => {

  const { work, handleWork, addWork, deleteWork } = useContext(WorkContext);

  return (
    <fieldset>
      {work.map((input, index) => (
        <div className='work' key={index}>
          <div className='wbx'>
            <label className='required' htmlFor='workEmployer'>Name of Employer:</label>
            <input id='workEmployer' name='workEmployer' required type='text' value={input.workEmployer} onChange={(e) => handleWork(e, index)} size='25' />
          </div>
          <div className='wbx'>
            <label className='required' htmlFor='workNum'>Phone #:</label>
            <input id='workNum' name='workNum' required type='text' size='15' value={input.workNum} onChange={(e) => handleWork(e, index)} />
          </div>
          <div className='wbx'>
            <label className='required' htmlFor='workAddress'>Address:</label>
            <input id='workAddress' name='workAddress' required type='text' value={input.workAddress} onChange={(e) => handleWork(e, index)} size='30' />
          </div>
          <div className='wbx'>
            <label className='required' htmlFor='workSuper'>Name of Last Supervisor:</label>
            <input id='workSuper' name='workSuper' required type='text' value={input.workSuper} onChange={(e) => handleWork(e, index)} />
          </div>
          <label className='required'>Employment Dates:</label><br />
          <div className='wbx'>
            <label className='required' htmlFor='workStart'>From:</label>
            <input id='workStart' name='workStart' required type='date' value={input.workStart} onChange={(e) => handleWork(e, index)} />
            <label className='required' htmlFor='workEnd'>To:</label>
            <input id='workEnd' name='workEnd' required type='date' value={input.workEnd} onChange={(e) => handleWork(e, index)} />
          </div>
          <label>(if paid on salary, state weekly pay. If paid hourly, then state hourly pay.)</label>
          <div className='wbx'>
            <label className='required' htmlFor='workPayStart'>Start Pay:</label>
            <input id='workPayStart' name='workPayStart' required type='text' value={input.workPayStart} onChange={(e) => handleWork(e, index)} size='5' />
            <label className='required' htmlFor='workPayEnd'>End Pay:</label>
            <input id='workPayEnd' name='workPayEnd' required type='text' value={input.workPayEnd} onChange={(e) => handleWork(e, index)} size='5' />
          </div>
          <div className='wbx'>
            <label className='required' htmlFor='workPayType'>Hourly of Salary:</label>
            <select id='workPayType' name='workPayType' onChange={(e) => handleWork(e, index)} value={input.workPayType} required>
              <option value=''>Please choose an option</option>
              <option value='workHourly'>hourly</option>
              <option value='workSalary'>salary</option>
            </select>
          </div>
          <div className='wbx'>
            <label className='required' htmlFor='workTitle'>Highest Held Job Title:</label>
            <input id='workTitle' name='workTitle' required type='text' value={input.workTitle} onChange={(e) => handleWork(e, index)} />
          </div>
          <label htmlFor='workRespon' className='required'>List of jobs and responsibilities while working at this company:</label>
            <br /><textarea required id='workRespon' name='workRespon' value={input.workRespon} onChange={(e) => handleWork(e, index)} />
          <br/><label htmlFor='workLeave' className="required">Reason for leaving (be specific):</label>
            <br /><textarea required id='workLeave' name='workLeave' value={input.workLeave} onChange={(e) => handleWork(e, index)} />
          {work.length > 1 && (
            <button className='formbutt' onClick={() => deleteWork(index)}>Delete</button>
          )}
          {index === work.length - 1 && (
            <button className='formbutt' onClick={() => addWork()}>Add</button>
          )}
        </div>
      ))}
    </fieldset>
  );
};

Work.propTypes = {
  work: PropTypes.array,
  handleWork: PropTypes.func,
  addWork: PropTypes.func,
  deleteWork: PropTypes.func,
};

export default Work;
