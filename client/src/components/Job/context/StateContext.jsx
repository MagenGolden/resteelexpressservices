import {useContext, createContext, useState} from 'react';

const StateContext = createContext({});

export const StateProvider = ({ children }) => {

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


  return (
    <StateContext.Provider value={{
      state, setState, handleValue
    }}>
    {children}
    </StateContext.Provider>
  );
};

export default StateContext;
