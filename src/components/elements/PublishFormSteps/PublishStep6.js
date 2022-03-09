import React from "react";
import StepNavigationButtons from "../StepNavigationButtons";

const PublishStep6 = (props) => {
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

                    <div className='step-title'/>פרטים ליצירת קשר   
                </div>

                {props.stepID < props.activeStep && 
                    <div className='edit-wrapper'>
                        <div className='edit'/>עריכה
                    </div>
                }
            </div>

            { props.stepID === props.activeStep &&
                <div className='step-form-container'>
                    <div id='step6-title'>רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים</div>
                    
                    <div className='input-title'>
                        שם איש קשר*  
                    </div>
                    <div className="select-container">
                        <input className='input-box'>
                        </input>
                    </div>

                    <div className='input-title'>
                        טלפון ראשי
                    </div>
                    <div className="select-container">
                        <div className='input-box clickable'>
                            <input 
                                className='borderless'
                            >
                            </input>

                            <div id='add-number-button'>
                                <div className='plus-icon-orange'/>
                            </div>
                        </div>                   
                    </div>

                    <div id='grey-line'/>

                    <div id='add-contact-wrapper'>
                        <div className='orange-circle'>
                            <div className='plus-icon-orange'/>                           
                        </div>

                        <div className='orange-font'>הוספת איש קשר נוסף</div>
                    </div>

                    <div className='regular-input-wrapper'>
                        <input type="checkbox" id="vnum-accept" value=""/>  
                        <label id='vnum-accept-label' htmlFor="vnum-accept"> אני רוצה שיופיע מספר וירטואלי במודעה שלי</label>
                        <div className='orange-question-mark'></div>
                    </div>
                    
                    <div className='orange-font read-eula'>לקריאת התקנון</div>

                    <div className='regular-input-wrapper'>
                        <input type="checkbox" id="weekend-accept" value=""/>  
                        <label id='weekend-accept-label' htmlFor="weekend-accept">אני רוצה לקבל שיחות מגולשי האתר גם בסופ"ש</label>
                        <div className='orange-question-mark'></div>
                    </div>

                    <div className='input-title'>
                        דוא"ל   
                    </div>
                    <div className="select-container">
                        <input className='input-box'>
                        </input>
                    </div>

                    <div id='eula-input' 
                    className='enlarged-input-wrapper'
                    >
                        <label className="container">
                            <input id="eula-accept" type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        {/* <input className='orange-styled-checkbox' type="checkbox" id="eula-accept" value=""/>   */}
                        <label className='clickable bolder-text' id='eula-accept-label1' htmlFor="eula-accept">קראתי ואישרתי את</label>
                        <label className='clickable bolder-text orange-font' id='eula-accept-label2' htmlFor="eula-accept">התקנון</label>
                        <label className='clickable bolder-text' id='eula-accept-label3' htmlFor="eula-accept">*</label>
                    </div>

                    <div id='updates-input' className='enlarged-input-wrapper'>
                        <label className="container">
                            <input id="updates-accept" type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>                        
                        <label className='clickable' id='updates-accept-label' htmlFor="updates-accept">אני רוצה שתשלחו לי עדכונים למייל</label>
                    </div>

                    

                    <StepNavigationButtons goToStep={props.goToStep} stepID={props.stepID} activeStep={props.activeStep}></StepNavigationButtons>
                </div>
            }

        </div>
    );

};

export default PublishStep6;

