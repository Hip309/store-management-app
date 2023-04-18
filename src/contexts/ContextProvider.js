import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    cart: false,
    userProfile: false,
    notifications: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)

    const handleClick = (clickedObj) => {
        setIsClicked( {...initialState, [clickedObj]: true});
    }

    return (
        <StateContext.Provider
        value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick}}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);