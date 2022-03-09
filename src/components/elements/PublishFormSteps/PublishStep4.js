import React, { useContext, useState } from "react";
import { FormContext } from "../../../context/FormContext";
import StepNavigationButtons from "../StepNavigationButtons";

const PublishStep4 = (props) => {
    const { formData, setFormData } = useContext(FormContext)

    const [builtArea, setBuiltArea] = useState('')
    const [overallArea, setOverallArea] = useState('')
    const [overallAreaError, setOverallAreaError] = useState(false)
    const [price, setPrice] = useState(0)
    const [priceError, setPriceError] = useState(false)
    const [entryDate, setEntryDate] = useState('')
    const [entryDateError, setEntryDateError] = useState(false)
    const [isImmidiateEntry, setIsImmidiateEntry] = useState(false)
    
    const validateFields = () =>{
        let isFormValid = true

        if(!(overallArea?.length>0)){
            setOverallAreaError(true)
            isFormValid = false
        } else {
            setOverallAreaError(false)
            formData['overallArea'] = overallArea
        }

        if(isImmidiateEntry===true){
            setEntryDateError(false)
            formData['entryDate'] = 'מיידי'
        } else if(entryDate.length>0){
            setEntryDateError(false)
            formData['entryDate'] = entryDate
        } else {
            setEntryDateError(true)
            isFormValid = false
        }

        if(price > 100000){
            formData['price'] = price
        } else{
            setPriceError(true)
            isFormValid = false
        }

        if(isFormValid){
            formData['builtArea'] = builtArea
            setFormData(formData)
        }

        console.log(formData)
        return isFormValid
    }

    const selectStep = () =>{
        if(props.stepID < props.activeStep)
            props.goToStep(props.stepID)
    }
    
    const stepClass = props.stepID === props.activeStep ? 'steps active-step' :'steps inactive-step'
    
    const stepIDClass = props.stepID === props.activeStep ? 'active-step-icon':
    props.stepID < props.activeStep ? 'edited-step-icon' : 'inactive-step-icon'

    return (

        <div 
            className={stepClass}
            onClick={selectStep}
            >

            <div className="step-base-container">

                <div className='title-wrapper'>

                    <div
                        className={stepIDClass}>
                        {props.stepID}
                    </div>

                    <div className='step-title'/>תשלומים, תאריכים ועוד 
                </div>

                { props.stepID === props.activeStep && 

                    <div id='video-tip-wrapper'>
                        <div id="tip-2-icon"/>
                        <div>
                            <div id='tip-title'>
                                גם לנו היה קשה להאמין!
                            </div>
                            <div id='tip-text'>
                                מודעות שעולות עם מחירים לא עגולים מוכרות מהר יותר
                            </div>
                        </div>
                    </div>
                }

                {props.stepID < props.activeStep &&
                    <div className='edit-wrapper'>
                        <div className='edit'/>עריכה
                    </div>
                }
            </div>

            { props.stepID === props.activeStep &&
                <div className='step-form-container'>

                    <div className='input-title'>
                        מ"ר בנוי 
                    </div>
                    <div className="select-container">
                        <input className='input-box'
                            placeholder='כמה מ"ר יש בנכס'
                            onChange={(event)=>{
                                setBuiltArea(event.target.value)
                            }}
                        ></input>
                    </div>

                    <div className='input-title'>
                        גודל במ"ר סך הכל*
                    </div>
                    <div className={overallAreaError?"select-container red-border":"select-container"}>
                        <input className='input-box'
                            onChange={(event)=>{
                                setOverallArea(event.target.value)
                                setOverallAreaError(false)
                            }}
                        ></input>
                    </div>

                    {
                        !!overallAreaError&&
                        <div className='red-font'>שדה חובה גודל במ"ר סך הכל</div>
                    }

                    <div className='input-title'>
                        מחיר    
                    </div>
                    <div className="select-container">
                        <input 
                            id='price-input'
                            className='input-box'
                            placeholder='סכום מינימלי 100,000₪'
                            onChange={(event)=>{
                                setPrice(event.target.value)
                                setPriceError(false)
                            }}
                        ></input>
                    </div>
                    
                    {
                        !!priceError&&
                        <div className='red-font short'>סכום מינימלי לפרסום הינו ₪100,000</div>
                    }

                    <div className='input-title'>
                        תאריך כניסה* 
                    </div>

                    <div className='vertical-container'>
                        <div className="select-container">
                            <input 
                                type='date'
                                disabled={isImmidiateEntry?true:false}
                                value={entryDate.length>0?entryDate:"2021-10-22"}
                                className='input-box'
                                onChange={(event)=> {
                                    setEntryDate(event.target.value)
                                    setEntryDateError(false)
                                }}
                            ></input>
                        </div>

                        <div 
                            className='enlarged-input-wrapper'
                        >
                            <input type="checkbox" id="on-pillars-checkbox" value=""
                                onChange={()=>{
                                    setIsImmidiateEntry(!isImmidiateEntry)
                                }}
                            />  
                            <div>
                                <label id='on-pillars-label' htmlFor="on-pillars-checkbox">מיידי</label>

                            </div>
                        </div>

                    </div>
                    
                    
                    



                    <StepNavigationButtons validateFields={validateFields} goToStep={props.goToStep} stepID={props.stepID} activeStep={props.activeStep}></StepNavigationButtons>
                </div>
            }

        </div>
    );

};

export default PublishStep4;