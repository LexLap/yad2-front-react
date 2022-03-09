import React, { useEffect, useState } from "react";
import FormContextProvider from "../../context/FormContext";
import PublishStep1 from "./PublishFormSteps/PublishStep1";
import PublishStep2 from "./PublishFormSteps/PublishStep2";
import PublishStep3 from "./PublishFormSteps/PublishStep3";
import PublishStep4 from "./PublishFormSteps/PublishStep4";
import PublishStep5 from "./PublishFormSteps/PublishStep5";
import PublishStep6 from "./PublishFormSteps/PublishStep6";
import PublishStep7 from "./PublishFormSteps/PublishStep7";

const PublishForm = () => {

    const [activeStep, setActiveStep] = useState(1)

    const goToStep = (stepID) => {
        if (stepID > 0) setActiveStep(stepID)
    }

    return (

        <div id='publish-form-wrapper'>
            <FormContextProvider>
                <PublishStep1 goToStep={goToStep} stepID={1} activeStep={activeStep} />
                <PublishStep2 goToStep={goToStep} stepID={2} activeStep={activeStep} />
                <PublishStep3 goToStep={goToStep} stepID={3} activeStep={activeStep} />
                <PublishStep4 goToStep={goToStep} stepID={4} activeStep={activeStep} />
                <PublishStep5 goToStep={goToStep} stepID={5} activeStep={activeStep} />
                <PublishStep6 goToStep={goToStep} stepID={6} activeStep={activeStep} />
                <PublishStep7 goToStep={goToStep} stepID={7} activeStep={activeStep} />
            </FormContextProvider>
        </div>
    );
};

export default PublishForm;