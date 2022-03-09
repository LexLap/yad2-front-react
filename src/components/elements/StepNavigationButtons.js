import React from "react";

const StepNavigationButtons = (props) => {

    const goToStep = (stepID) => {
        if (stepID > props.stepID) {
            const isFormValid = props.validateFields()
            if (isFormValid) {
                props.goToStep(stepID)
            }
        } else props.goToStep(stepID)
    }

    const prevStepID = props.stepID - 1
    const nextStepID = props.stepID + 1

    return (

        <div className='step-nav-buttons-container'>
            <div
                onClick={() => goToStep(prevStepID)}
                className='step-backward-wrapper'>
                <div className='step-backward'>
                    חזרה
                </div>
            </div>

            <div
                onClick={() => goToStep(nextStepID)}
                className='step-forward-wrapper'>
                <div className='step-forward'>
                    להמשיך לשלב הבא
                </div>
            </div>
        </div>

    );

};

export default StepNavigationButtons;