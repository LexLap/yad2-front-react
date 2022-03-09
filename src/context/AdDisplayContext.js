import React, { createContext, useState } from 'react';

export const AdDisplayContext = createContext();

const AdDisplayContextProvider = (props) => {

    const [displayContext, setDisplayContext] = useState(null)


    return (
        <AdDisplayContext.Provider value={{ displayContext, setDisplayContext }}>
            {props.children}
        </AdDisplayContext.Provider>
    );
};

export default AdDisplayContextProvider;