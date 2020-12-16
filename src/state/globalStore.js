import React, { createContext, useReducer } from 'react';

import globalReducer from './globalReducer';

export const formState = {
  guardians: [],
  students: []
};
  // students: [
    // {
    //   ethnicities: [
    //     {
    //       value: 'Alaskan, Native, or American Indian',
    //       selected: false,
    //     },
    //     {
    //       value: 'Asian',
    //       selected: false,
    //     },
    //     {
    //       value: 'Black or African-American',
    //       selected: false,
    //     },
    //     {
    //       value: 'Latino or Hispanic',
    //       selected: false,
    //     },
    //     {
    //       value: 'Middle Eastern, North African, or Arab American',
    //       selected: false,
    //     },
    //     {
    //       value: 'White',
    //       selected: false,
    //     },
    //   ],
      // grossIncome: '',
      // householdNumber: '',
      // address: '',
      // address2: '',
      // allergiesList: '',
      // city: '',
      // currentGrade: '',
      // currentSchool: '',
      // emergencyContact: '',
      // emergencyContactPhoneNumber: '',
      // hasAllergies: '',
      // medicineConditionDesc: '',
      // mnpsId: '',
      // needMedicine: '',
      // needTransportation: '',
      // primaryLanguage: '',
      // relationship: '',
      // state: '',
      // studentBirthday: '',
      // studentFirstName: '',
      // studentGender: '',
      // studentLastName: '',
      // summerSchool: '',
      // zipCode: '',
    // }
  // ],

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
