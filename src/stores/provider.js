import React, { createContext } from "react";

export const Context = createContext();

export const Provider = props => {
    
    return (
        <Context.Provider
            value={
                {
                }
            }>
            {props.children}
        </Context.Provider>
    );
};