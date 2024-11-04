import React from 'react';
import PropTypes from 'prop-types';

const Work = ({work, handleWork, addWork, deleteWork}) => {

  return (
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
  );
};

Work.propTypes = {
  work: PropTypes.array,
  handleWork: PropTypes.func,
  addWork: PropTypes.func,
  deleteWork: PropTypes.func,
};

export default Work;
