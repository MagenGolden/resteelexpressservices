import {useContext, createContext, useState} from 'react';

const EdContext = createContext({});

export const EdProvider = ({ children }) => {

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

  return (
    <EdContext.Provider value={{
      deleteEducation, addEducation, education, handleEducation
    }}>
    {children}
    </EdContext.Provider>
  );
};

export default EdContext;
