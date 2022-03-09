import React from "react";
import StepNavigationButtons from "../StepNavigationButtons";

const PublishStep7 = (props) => {

    const stepClass = props.stepID === props.activeStep ? 'steps active-step' : 'steps inactive-step'

    const stepIDClass = props.stepID === props.activeStep ? 'active-step-icon' :
        props.stepID < props.activeStep ? 'edited-step-icon' : 'inactive-step-icon'

    return (

        <div
            className={stepClass}
        >

            <div className="step-base-container">

                <div className='title-wrapper'>

                    <div
                        className={stepIDClass}>
                        {props.stepID}
                    </div>

                    <div className='step-title' />סיום פרסום
                </div>

                {props.stepID < props.activeStep &&
                    <div className='edit-wrapper'>
                        <div className='edit' />עריכה
                    </div>
                }
            </div>

            {props.stepID === props.activeStep &&
                <div className='step-form-container'>

                    <div id='title1' className='subtitle'>זהו, אנחנו בסוף. לנו נשאר לשמור את המודעה שלך, לך נשאר לבחור את מסלול הפרסום.</div>

                    <div className='subtitle'>אגב, רצינו לספר לך שיש באתר עוד {<span id='ads-counter'>{36}</span>} מודעות דומות לשלך באזור</div>

                    <div className='subtitle'>המלצה שלנו? {<span id='upgrade-tip'>לשדרג</span>} {<span id='rocket-icon-small'></span>} את המודעה, להופיע לפני כולם ולהתקדם להסכם תיק תק</div>

                    <div id='long-grey-line'></div>

                    <hr id='long-grey-line'></hr>

                    <div>באיזה מסלול לפרסם את המודעה? זה הרגע לבלוט מעל כולם</div>

                    <div id='plans-container'>
                        <div className='plan-wrapper'>
                            <div className='plan-title'>בסיסי</div>

                            <div id='basic-plan-icon'></div>

                            <div className='plan-description-container'>
                                <div>מודעה רגילה</div>
                                <div className='grey-font'>הקפצה אוטומטית לחסכון בזמן</div>
                            </div>

                            <div className='select-plan-button-wrapper'>
                                <span className='plan-price'>חינם</span>
                                <span className='plan-days'>/ 120 ימים</span>
                            </div>
                        </div>

                        <div id='vip' className='plan-wrapper'>
                            <div className='plan-title'>VIP</div>

                            <div id='recommended-wrapper'>
                                <div id='crown-icon'></div>
                                <div>מומלץ</div>
                            </div>

                            <div id='vip-plan-icon'></div>

                            <div className='plan-description-container'>
                                <div>מודעה מודגשת בצבע צהוב</div>
                                <div>הקפצה אוטומטית לחסכון בזמן</div>
                                <div>הופעה לפני מודעות רגילות וורודות</div>
                                <div>מסלול זה מייצר יותר חשיפות ופניות!</div>
                            </div>

                            <div id='vip-button' className='select-plan-button-wrapper'>
                                <span className='plan-price'>199 ₪</span>
                                <span className='plan-days'>/ 28 ימים</span>
                            </div>
                        </div>

                        <div id='advanced' className='plan-wrapper'>
                            <div className='plan-title'>מודגשת</div>

                            <div id='advanced-plan-icon'></div>

                            <div className='plan-description-container'>
                                <div>מודעה מודגשת בצבע ורוד</div>
                                <div>הקפצה אוטומטית לחסכון בזמן</div>
                                <div>הופעה לפני מודעות רגילות</div>
                            </div>

                            <div className='select-plan-button-wrapper'>
                                <span className='plan-price'>99 ₪</span>
                                <span className='plan-days'>/ 28 ימים</span>
                            </div>
                        </div>
                    </div>




                    <div id='promotional-email' className='enlarged-input-wrapper'>
                        <label id='final' class="container">
                            <input id="updates-accept" type="checkbox"
                            // checked='checked'
                            />
                            <span class="checkmark"></span>
                        </label>
                        <label className='clickable'>אני מאשר קבלת דיוור פרסומי הקשור למודעה שפרסמתי באתר יד 2 (להסרה - יש להוריד את הסימון בתיבה) </label>
                    </div>
                </div>
            }
        </div>
    );

};

export default PublishStep7;