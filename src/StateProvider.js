import React, { createContext, useContext, useReducer} from "react";

// Prepare the data layer
export const StateContext = createContext();

// Wrap the app and provide DATA layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext. Provider value={useReducer (reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from DATA layer
export const useStateValue = () => useContext (StateContext);