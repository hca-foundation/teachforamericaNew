import React, { createContext, useReducer } from 'react';

import globalReducer from './globalReducer';

export const initialState = {
  formData: {},
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
