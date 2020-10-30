import React, { createContext, useReducer } from 'react';

import globalReducer from './globalReducer';

export const formState = {
  parentFirstName: '',
  parentLastName: '',
  phoneNumber: '',
  email: '',
  ethnicities: [],
  grossIncome: '',
  householdNumber: '',
  address: '',
  address2: '',
  allergiesList: '',
  city: '',
  currentGrade: '',
  currentSchool: '',
  emergencyContact: '',
  emergencyContactPhoneNumber: '',
  hasAllergies: '',
  medicineConditionDesc: '',
  mnpsId: '',
  needMedicine: '',
  needTransportation: '',
  participatingStudents: '',
  participatingStudentAddress: '',
  primaryLanguage: '',
  relationship: '',
  state: '',
  studentBirthday: '',
  studentFirstName: '',
  studentGender: '',
  studentLastName: '',
  summerSchool: '',
  zipCode: '',
};

export const initialState = {
  formData: formState,
};

export const GlobalStateContext = createContext({ state: initialState, dispatch: () => {} });

const GlobalStateProvider = ({ children }) => {
  const [globalState, dispatchToGlobal] = useReducer(globalReducer, initialState);

  return (
        <GlobalStateContext.Provider value={{ state: globalState, dispatch: dispatchToGlobal }}>
            {children}
        </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
