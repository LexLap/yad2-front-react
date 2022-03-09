import React, { useContext, useState } from "react";
import { propertyFeatures, roomsAmmounts } from "../../../actions/FormActions";
import { FormContext } from "../../../context/FormContext";
import StepNavigationButtons from "../StepNavigationButtons";

const PublishStep3 = (props) => {
    const { formData, setFormData } = useContext(FormContext)
    const [roomsAmmount, setRoomsAmmount] = useState(null)
    const [roomsAmmountError, setRoomsAmmountError] = useState(false)
    const [feature0, setFeature0] = useState(false)
    const [feature1, setFeature1] = useState(false)
    const [feature2, setFeature2] = useState(false)
    const [feature3, setFeature3] = useState(false)
    const [feature4, setFeature4] = useState(false)
    const [feature5, setFeature5] = useState(false)
    const [feature6, setFeature6] = useState(false)
    const [feature7, setFeature7] = useState(false)
    const [feature8, setFeature8] = useState(false)
    const [feature9, setFeature9] = useState(false)
    const [feature10, setFeature10] = useState(false)
    const [feature11, setFeature11] = useState(false)

    const [activeParkingInput, setActiveParkingInput] = useState('0')
    const [activeBalconyInput, setActiveBalconyInput] = useState('0')
    const [descriptionInput, setDescriptionInput] = useState('')
    const [textAreaTempInput, setTextAreaTempInput] = useState('')

    const selectStep = () => {
        if (props.stepID < props.activeStep)
            props.goToStep(props.stepID)
    }

    const validateFields = () => {
        let isFormValid = true

        if (!(roomsAmmount?.length > 0)) {
            setRoomsAmmountError(true)
            isFormValid = false
            console.log(roomsAmmount)
        } else {
            setRoomsAmmountError(false)
            formData['roomsAmmount'] = roomsAmmount
        }

        if (isFormValid) {
            formData['parkingLotsAmmount'] = activeParkingInput
            formData['balconiesAmmount'] = activeBalconyInput
            formData['feature0'] = feature0
            formData['feature1'] = feature1
            formData['feature2'] = feature2
            formData['feature3'] = feature3
            formData['feature4'] = feature4
            formData['feature5'] = feature5
            formData['feature6'] = feature6
            formData['feature7'] = feature7
            formData['feature8'] = feature8
            formData['feature9'] = feature9
            formData['feature10'] = feature10
            formData['feature11'] = feature11
            formData['description'] = descriptionInput
            setFormData(formData)
        }
        console.log(formData)
        return isFormValid
    }

    const stepClass = props.stepID === props.activeStep ? 'steps active-step' : 'steps inactive-step'
    const stepIDClass = props.stepID === props.activeStep ? 'active-step-icon' :
        props.stepID < props.activeStep ? 'edited-step-icon' : 'inactive-step-icon'

    const activeInputClass = 'input-cell active-cell'
    const nonActiveInputClass = 'input-cell'

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

                    <div>על הנכס</div>
                </div>

                {props.stepID < props.activeStep &&
                    <div className='edit-wrapper'>
                        <div className='edit' />עריכה
                    </div>
                }
            </div>

            {props.stepID === props.activeStep &&
                <div className='step-form-container'>

                    <div className='input-title'>
                        מספר חדרים *
                    </div>
                    <div className="select-container ">
                        <select
                            className={roomsAmmountError ? 'dropdown-box red-border' : 'dropdown-box'}
                            defaultValue={'DEFAULT'}
                            onChange={(event) => {
                                setRoomsAmmount(event.target.value)
                                setRoomsAmmountError(false)
                            }}
                        >
                            <option value="DEFAULT" hidden>בחירת מספר חדרים</option>
                            {roomsAmmounts.map((roomsAmmount, i) => {
                                return <option key={i} value={roomsAmmount}>{roomsAmmount}</option>
                            })}

                        </select>
                    </div>

                    {
                        !!roomsAmmountError &&
                        <div className='red-font'>שדה חובה מספר חדרים</div>
                    }

                    <div className='input-title'>
                        חניה
                    </div>
                    <div id='input-container'>
                        <div
                            onClick={() => setActiveParkingInput('0')}
                            className={activeParkingInput === '0' ? activeInputClass : nonActiveInputClass}>ללא
                        </div>
                        <div
                            onClick={() => setActiveParkingInput('1')}
                            className={activeParkingInput === '1' ? activeInputClass : nonActiveInputClass}>1
                        </div>
                        <div
                            onClick={() => setActiveParkingInput('2')}
                            className={activeParkingInput === '2' ? activeInputClass : nonActiveInputClass}>2
                        </div>
                        <div
                            onClick={() => setActiveParkingInput('3')}
                            className={activeParkingInput === '3' ? activeInputClass : nonActiveInputClass}
                            id='parking-input-cell-4'>3
                        </div>
                    </div>

                    <div className='input-title'>
                        מרפסת
                    </div>
                    <div id='input-container'>
                        <div
                            onClick={() => setActiveBalconyInput('0')}
                            className={activeBalconyInput === '0' ? activeInputClass : nonActiveInputClass}>ללא
                        </div>
                        <div
                            onClick={() => setActiveBalconyInput('1')}
                            className={activeBalconyInput === '1' ? activeInputClass : nonActiveInputClass}>1
                        </div>
                        <div
                            onClick={() => setActiveBalconyInput('2')}
                            className={activeBalconyInput === '2' ? activeInputClass : nonActiveInputClass}>2
                        </div>
                        <div
                            onClick={() => setActiveBalconyInput('3')}
                            className={activeBalconyInput === '3' ? activeInputClass : nonActiveInputClass}
                            id='balcony-input-cell-4'>3
                        </div>
                    </div>

                    <div
                        id='property-features-title'
                        className='input-title'>
                        מאפייני הנכס
                    </div>

                    <div
                        id='property-features-container'
                    >
                        <div className={feature0 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature0(!feature0)
                            }}>
                            {propertyFeatures[0]}
                        </div>

                        <div className={feature1 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature1(!feature1)
                            }}>
                            {propertyFeatures[1]}
                        </div>

                        <div className={feature2 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature2(!feature2)
                            }}>
                            {propertyFeatures[2]}
                        </div>

                        <div className={feature3 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature3(!feature3)
                            }}>
                            {propertyFeatures[3]}
                        </div>

                        <div className={feature4 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature4(!feature4)
                            }}>
                            {propertyFeatures[4]}
                        </div>

                        <div className={feature5 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature5(!feature5)
                            }}>
                            {propertyFeatures[5]}
                        </div>

                        <div className={feature6 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature6(!feature6)
                            }}>
                            {propertyFeatures[6]}
                        </div>

                        <div className={feature7 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature7(!feature7)
                            }}>
                            {propertyFeatures[7]}
                        </div>

                        <div className={feature8 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature8(!feature8)
                            }}>
                            {propertyFeatures[8]}
                        </div>

                        <div className={feature9 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature9(!feature9)
                            }}>
                            {propertyFeatures[9]}
                        </div>

                        <div className={feature10 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature10(!feature10)
                            }}>
                            {propertyFeatures[10]}
                        </div>

                        <div className={feature11 ? 'feature-container active-cell' : 'feature-container orange-font-onhover'}
                            onClick={() => {
                                setFeature11(!feature11)
                            }}>
                            {propertyFeatures[11]}
                        </div>

                        {/* {
                                propertyFeatures.map((propertyFeature, i) =>{
                                    return <div 
                                        onClick={()=>{
                                            featureStatuses[i] = !featureStatuses[i]
                                            setFeaturesStatuses(featureStatuses)
                                            setActiveParkingInput('2')
                                        }}
                                        className={featureStatuses[i]?'feature-container active-cell':'feature-container'}

                                        key={i}>
                                            <div key={i} id={'feature-'+i}></div>
                                            {propertyFeature}
                                        </div>
                                })
                            } */}
                    </div>

                    <div
                        id='property-features-title'
                        className='input-title'>
                        מה חשוב לך שידעו על הנכס?
                    </div>

                    <div id='property-description-container'>

                        <div id='property-description-title-wrapper'>
                            <div className='input-title'>
                                פרוט הנכס
                            </div>

                            <div
                                id='char-counter'
                                className='input-title'>
                                {descriptionInput.length}/400

                            </div>
                        </div>

                        <div
                            id='property-description-input-wrapper'>
                            {/* <input id='property-description-input'
                                        placeholder="זה המקום לתאר את הפרטים הבולטים, למשל,
                                        האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר,
                                        האווירה ברחוב וכו'"
                                        // onChange={updateDescriptionInput}
                            ></input> */}
                            <textarea
                                id='property-description-input'
                                placeholder="זה המקום לתאר את הפרטים הבולטים, למשל, האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכו'"
                                // placeholder={formData.toString()}    
                                value={textAreaTempInput}
                                onChange={(event) => {
                                    setTextAreaTempInput(event.target.value)
                                    setDescriptionInput(event.target.value)
                                }}
                            >
                            </textarea>

                            {
                                !!descriptionInput.length > 0 &&
                                <div id='property-description-clear' className='clear-field-button'
                                    onClick={() => {
                                        setTextAreaTempInput('')
                                        setDescriptionInput('')
                                    }}
                                >
                                </div>
                            }

                        </div>




                    </div>



                    <StepNavigationButtons validateFields={validateFields} goToStep={props.goToStep} stepID={props.stepID} activeStep={props.activeStep}></StepNavigationButtons>
                </div>
            }

        </div>
    );

};

export default PublishStep3;