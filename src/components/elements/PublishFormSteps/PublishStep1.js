import React, { useEffect } from "react";
import StepNavigationButtons from "../StepNavigationButtons";


const PublishStep1 = (props) => {

    const updateFormFields = () =>{}
    const validateFields = () =>{
        return true
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

                    <div className='step-title'/>אני רוצה למכור נכס
                </div>

                {props.stepID < props.activeStep &&
                    <div className='edit-wrapper'>
                        <div className='edit'/>עריכה
                    </div>
                }
            </div>

            { props.stepID === props.activeStep &&
                <div className='step-form-container'>
                    <StepNavigationButtons validateFields={validateFields} goToStep={props.goToStep} stepID={props.stepID} activeStep={props.activeStep}></StepNavigationButtons>
                </div>
            }

        </div>
    );

};

export default PublishStep1;