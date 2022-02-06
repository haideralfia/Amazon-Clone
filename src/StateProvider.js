import React, {
    // createContex,
    createContext,
    useContext,
    useReducer,
  } from "react";
  //prepare the DataLayer
  export const StateContext = createContext();
   
  //wrap our app and provide the Data Layer
  export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
   
  //Pull information
  export const useStateValue = () => useContext(StateContext);