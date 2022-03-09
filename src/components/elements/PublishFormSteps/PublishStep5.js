import React from "react";
import { useState, useContext } from "react/cjs/react.development";
import { publishAdRequest } from "../../../server/adManagement";
import { FormContext } from "../../../context/FormContext";
import { uploadImage } from "../../../server/images";
import StepNavigationButtons from "../StepNavigationButtons";
import UploadPhotoTile from "../UploadPhotoTile";
import { useHistory } from "react-router-dom";


const PublishStep5 = (props) => {

    const { formData, setFormData } = useContext(FormContext)
    const history = useHistory()
    const [photoUrls, setPhotoUrls] = useState([])

    const addPhotoUrl = (url) => {
        photoUrls.push(url)
        setPhotoUrls(photoUrls)
    }

    const validateFields = async () => {
        let isFormValid = true
        formData['photoUrls'] = photoUrls
        setFormData(formData)


        await publishAdRequest(formData)
        history.push("/")
        return isFormValid
    }

    const selectStep = () => {
        if (props.stepID < props.activeStep)
            props.goToStep(props.stepID)
    }
    const photoTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const stepClass = props.stepID === props.activeStep ? 'steps active-step' : 'steps inactive-step'

    const stepIDClass = props.stepID === props.activeStep ? 'active-step-icon' :
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

                    <div className='step-title' />תמונות וסרטונים
                </div>

                {props.stepID === props.activeStep &&
                    <div id='photo-tip-wrapper'>
                        <div id="tip-2-icon" />
                        <div>
                            <div id='tip-text'>
                                לא לדאוג, גם אם רואים את התמונה באופן לא ברור כעת, לאחר הפרסום הכל יראה כמו שצריך
                            </div>
                        </div>
                    </div>
                }

                {props.stepID < props.activeStep &&
                    <div className='edit-wrapper'>
                        <div className='edit' />עריכה
                    </div>
                }
            </div>

            {props.stepID === props.activeStep &&
                <div className='step-form-container'>
                    <div className='bolder-text'>ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות?</div>
                    <div className='bolder-text'>לא להסס להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים הטובים ביותר של הנכס</div>

                    <div id='upload-media-wrapper-1'>
                        <div id='upload-video-container'>
                            <div id='upload-video-icon' />
                            <div>
                                העלאת סרטון
                            </div>
                        </div>

                        <div id='primary-photo-container'>
                            <div id='primary-photo-elm1-wrapper'>תמונה ראשית</div>

                            {/* <div id='c'>

                                <div className='plus-icon'>

                                </div>

                                <div>
                                    העלאת תמונות
                                </div>
                            </div> */}
                            <UploadPhotoTile formData={formData} addPhotoUrl={addPhotoUrl} id={'main-photo'} />

                        </div>
                    </div>

                    <div id='upload-photo-title'>
                        תמונות שיופיעו בגוף המודעה
                    </div>

                    <form id='upload-media-wrapper-2'>
                        {
                            photoTiles.map((tile, i) => {
                                return <UploadPhotoTile formData={formData} addPhotoUrl={addPhotoUrl} id={'photoTile' + i} key={i} />
                            })

                        }
                    </form>

                    <div id='wesnapp-container'>
                        <div id='wesnapp-icon' />

                        <div id='wesnapp-context-wrapper'>
                            <div id='wesnapp-context-elm1'>צילום מקצועי מוכר יותר</div>

                            <div id='wesnapp-context-elm2'>מחקרים קובעים: צילום מקצועי מגדיל חשיפה, מושך יותר את העין ומעלה את ערך הנכס בעיני המתבונן.</div>

                            <div id='wesnapp-checkbox-container'>
                                <input type="checkbox" id="wesnapp-checkbox" value="" />
                                <label id='wesnapp-checkbox-label' htmlFor="wesnapp-checkbox">WeSnapp במבצע בלעדי ללקוחות יד2! סמנו עכשיו ונחזור אליכם עוד היום</label>
                            </div>
                        </div>


                    </div>


                    <StepNavigationButtons validateFields={validateFields} goToStep={props.goToStep} stepID={props.stepID} activeStep={props.activeStep}></StepNavigationButtons>
                </div>
            }

        </div>
    );

};

export default PublishStep5;