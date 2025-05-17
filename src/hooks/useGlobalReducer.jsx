import React, { createContext, useContext, useState } from "react";
import getState from "../store";

const GlobalContext = createContext(null);

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState(
        getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updatedStore) =>
                setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: { ...state.actions }
                })
        })
    );

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
