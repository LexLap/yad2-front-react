import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = (props) => {

    const timestamp = require('time-stamp');
    const newTimeStamp = timestamp('YYMMDDHHmmms')

    const [formData, setFormData] = useState({
        formID: newTimeStamp
    })


    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {props.children}
        </FormContext.Provider>
    );
};

export default FormContextProvider;