import {useContext, createContext, useState} from 'react';

const WorkContext = createContext({});

export const WorkProvider = ({ children }) => {

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

  return (
    <WorkContext.Provider value={{
      work, addWork, deleteWork, handleWork
    }}>
    {children}
    </WorkContext.Provider>
  );
};

export default WorkContext;
