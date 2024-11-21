import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import EdContext from './context/EdContext'

const Education = () => {

  const { deleteEducation, addEducation, education, handleEducation } = useContext(EdContext);

  return (
    <fieldset>
      {education.map((input, index) => (
        <div className='flex' key={index}>
        <div className='boxes'>
          <label className='required' htmlFor='school'>Name of School:</label>
          <input id='school' name='school' required type='text' value={input.school} onChange={(e) => handleEducation(e, index)} size='25' />
        </div>
        <div className='boxes'>
          <label className='required' htmlFor='schoolType'>Type of School:</label>
          <select id='schoolType' name='schoolType' onChange={(e) => handleEducation(e, index)} value={input.schoolType} required>
            <option value=''>Please choose an option</option>
            <option value='highSchool'>High School</option>
            <option value='college'>College</option>
            <option value='trade'>Trade</option>
            <option value='business'>Business</option>
            <option value='professional'>Professional</option>
          </select>
        </div>
        <div className='boxes'>
          <label className='required' htmlFor='schoolLocation'>Location:</label>
          <input id='schoolLocation' name='schoolLocation' required type='text' value={input.schoolLocation} onChange={(e) => handleEducation(e, index)} size='30' />
        </div>
        <div className='boxes'>
          <label className='required' htmlFor='schoolNum'>Number of Years Completed</label>
          <input id='schoolNum' name='schoolNum' required type='number' value={input.schoolNum} onChange={(e) => handleEducation(e, index)} min='1' max='50' />
        </div>
        <div className='boxes'>
          <label className='required' htmlFor='degree'>Major & Degree:</label>
          <input id='degree' name='degree' required type='text' value={input.degree} onChange={(e) => handleEducation(e, index)} size='15' />
        </div>
          {education.length > 1 && (
            <button className='formbutt' onClick={() => deleteEducation(index)}>Delete</button>
          )}
          {index === education.length - 1 && (
            <button className='formbutt' onClick={() => addEducation()}>Add</button>
          )}
        </div>
      ))}
    </fieldset>
  );
};

Education.propTypes = {
  education: PropTypes.array,
  handleEducation: PropTypes.func,
  addEducation: PropTypes.func,
  deleteEducation: PropTypes.func,
};

export default Education;
