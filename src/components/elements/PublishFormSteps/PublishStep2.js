import React, { useState, useContext, useEffect } from "react";
// import Select from "react-select/src/Select";
import { default as Select } from "react-select";
import { getEstateRegion, getSuggestedCities, getSuggestedHouseNums, getSuggestedStreets, propertyConditions, propertyTypes } from "../../../actions/FormActions";
import { FormContext } from "../../../context/FormContext";
import StepNavigationButtons from "../StepNavigationButtons";

const PublishStep2 = (props) => {
    const { formData, setFormData } = useContext(FormContext)
    const [propertyType, setPropertyType] = useState(null)
    const [propertyTypeError, setPropertyTypeError] = useState(false)
    const [propertyCondition, setPropertyCondition] = useState(null)
    const [propertyConditionError, setPropertyConditionError] = useState(false)
    const [city, setCity] = useState(null)
    const [cityError, setCityError] = useState(null)
    const [cityCode, setCityCode] = useState(null)
    const [street, setStreet] = useState(null)
    const [streetError, setStreetError] = useState(null)
    const [houseNum, setHouseNum] = useState(null)
    const [houseNumError, setHouseNumError] = useState(null)
    const [floor, setFloor] = useState('')
    const [floorError, setFloorError] = useState(false)
    const [totalFloors, setTotalFloors] = useState('')
    const [totalFloorsError, setTotalFloorsError] = useState(false)
    const [isOnPillars, setIsOnPillars] = useState(false)
    const [hood, setHood] = useState(null)
    const [region, setRegion] = useState('')
    const [isMailUpdatesAccepted, setIsMailUpdatesAccepted] = useState(false)
    const [suggestedCities, setSuggestedCities] = useState([])
    const [suggestedStreets, setSuggestedStreets] = useState([])
    const [suggestedHouseNums, setSuggestedHouseNums] = useState([])
    const [cityTempInput, setCityTempInput] = useState('')
    const [streetTempInput, setStreetTempInput] = useState('')
    const [houseNumTempInput, setHouseNumTempInput] = useState('')



    const validateFields = () => {
        let isFormValid = true

        if (!(propertyType?.length > 0)) {
            console.log('invalid propertyType ', propertyType)
            setPropertyTypeError(true)
            isFormValid = false
        } else {
            setPropertyTypeError(false)
            formData['propertyType'] = propertyType
        }

        if (!(propertyCondition?.length > 0)) {
            console.log('invalid propertyCondition ', propertyCondition)
            setPropertyConditionError(true)
            isFormValid = false
        } else {
            setPropertyConditionError(false)
            formData['propertyCondition'] = propertyCondition
        }

        if (!(city?.length > 0)) {
            console.log('invalid city ', city)
            setCityError(true)
            isFormValid = false
        } else {
            setCityError(false)
            formData['city'] = city
        }

        if (!(street?.length > 0)) {
            console.log('invalid street ', street)
            setStreetError(true)
            isFormValid = false
        } else {
            setStreetError(false)
            formData['street'] = street
        }

        if (!(houseNum?.length > 0)) {
            console.log('invalid houseNum ', houseNum)
            setHouseNumError(true)
            isFormValid = false
        } else {
            setHouseNumError(false)
            formData['houseNum'] = houseNum
        }

        if (!(floor?.length > 0)) {
            console.log('invalid floor ', floor)
            setFloorError(true)
            isFormValid = false
        } else {
            setFloorError(false)
            formData['floor'] = floor
        }

        if (!(totalFloors?.length > 0)) {
            console.log('invalid totalFloors ', totalFloors)
            setTotalFloorsError(true)
            isFormValid = false
        } else {
            setTotalFloorsError(false)
            formData['totalFloors'] = totalFloors
        }


        if (isFormValid) {
            formData['isOnPillars'] = isOnPillars
            formData['hood'] = hood
            formData['isMailUpdatesAccepted'] = isMailUpdatesAccepted
            setFormData(formData)
        }

        console.log(formData)
        return isFormValid
    }

    const selectStep = () => {
        if (props.stepID < props.activeStep)
            props.goToStep(props.stepID)
    }

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

                    <div>
                        כתובת הנכס
                    </div>


                </div>

                {props.stepID === props.activeStep &&

                    <div id='video-tip-wrapper'>

                        <div id="tip-1-icon" />

                        <div id='tip-title'>
                            המלצה שלנו
                        </div>

                        <div id='tip-text'>
                            העלאת וידאו של הנכס תמשוך יותר מתעניינים למודעה שלך
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
                    <div>סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</div>

                    <div className='input-title'>
                        סוג הנכס*
                    </div>
                    <div className="select-container ">
                        <select
                            className={propertyTypeError ? 'dropdown-box red-border' : 'dropdown-box'}
                            defaultValue={'DEFAULT'}
                            onChange={(event) => {
                                setPropertyTypeError(false)
                                setPropertyType(event.target.value)
                            }}
                        >
                            <option value="DEFAULT" hidden>דירה או אולי פנטהאוז?</option>
                            {propertyTypes.map((propertyType, i) => {
                                return <option key={i} value={propertyType}>{propertyType}</option>
                            })}

                        </select>
                    </div>
                    {
                        !!propertyTypeError &&
                        <div className='red-font'>שדה חובה סוג הנכס</div>
                    }

                    <div className='input-title'>
                        מצב הנכס*
                    </div>
                    <div className="select-container">
                        <select
                            className={propertyConditionError ? 'dropdown-box red-border' : 'dropdown-box'}
                            defaultValue={'DEFAULT'}
                            onChange={(event) => {
                                setPropertyConditionError(false)
                                setPropertyCondition(event.target.value)
                            }}                         >
                            <option value="DEFAULT" hidden>משופץ? חדש מקבלן?</option>
                            {propertyConditions.map((propertyType, i) => {
                                return <option key={i} value={propertyType}>{propertyType}</option>
                            })}

                        </select>
                    </div>
                    {
                        !!propertyConditionError &&
                        <div className='red-font'>שדה חובה מצב הנכס</div>
                    }

                    <div className='input-title'>
                        ישוב*
                    </div>
                    <div
                        // className="select-container zindex6"
                        className={cityError ? 'select-container zindex6 red-border' : 'select-container zindex6'}
                    >
                        <input id='city-input'
                            className='input-box'

                            placeholder='איפה נמצא הנכס?'
                            value={cityTempInput}
                            onChange={async (event) => {
                                setCityError(false)
                                setCity('')
                                setCityCode('')
                                setRegion('')
                                setCityTempInput(event.target.value)
                                setSuggestedCities(await getSuggestedCities(event.target.value))
                            }}
                        ></input>

                        {
                            !!city &&
                            <span className='clear-field-button'
                                onClick={() => {
                                    setCity('')
                                    setRegion('')
                                    setCityCode('')
                                    setCityTempInput('')
                                    setSuggestedCities([])
                                }}
                            >
                            </span>
                        }
                    </div>

                    {
                        !!cityError &&
                        <div className='red-font'>יש לבחור ישוב מתוך הרשימה</div>
                    }

                    {
                        suggestedCities.length > 0 &&
                        <Select
                            onChange={async (event) => {
                                setCity(event.label)
                                setCityCode(event.value)
                                setCityTempInput(event.label)
                                setSuggestedCities([])
                                setRegion(await getEstateRegion(event.value))
                            }}
                            defaultMenuIsOpen={true}
                            options={suggestedCities}
                            closeMenuOnSelect={true}
                            className='input-selector zindex5'
                        >
                        </Select>
                    }

                    <div className='input-title'>
                        רחוב*
                    </div>
                    <div
                        className={streetError ? 'select-container zindex4 red-border' : 'select-container zindex4'}
                    >
                        <input className='input-box'
                            placeholder='הכנסת שם הרחוב'
                            value={streetTempInput}
                            onChange={async (event) => {
                                setStreetError(false)
                                setStreet('')
                                setStreetTempInput(event.target.value)
                                setSuggestedStreets(await getSuggestedStreets(event.target.value, cityCode))
                            }}
                        ></input>

                        {
                            !!street &&
                            <span className='clear-field-button'
                                onClick={() => {
                                    setStreet('')
                                    setStreetTempInput('')
                                    setSuggestedStreets([])
                                }}
                            >
                            </span>
                        }
                    </div>

                    {
                        suggestedStreets.length > 0 &&
                        <Select
                            onChange={(event) => {
                                setStreet(event.value)
                                setStreetTempInput(event.value)
                                setSuggestedStreets([])
                            }}
                            defaultMenuIsOpen={true}
                            options={suggestedStreets}
                            closeMenuOnSelect={true}
                            className='input-selector zindex3'
                        >
                        </Select>
                    }


                    <div className='gov-tip'>
                        המידע הזה מגיע מגוף ממשלתי, אם הרחוב שלך לא מופיע, מומלץ לבחור רחוב קרוב אליך.
                    </div>

                    {
                        !!streetError &&
                        <div className='red-font'>יש לבחור רחוב מתוך הרשימה</div>
                    }

                    <div className='input-title'>
                        מס' בית*
                    </div>
                    <div
                        className={houseNumError ? 'select-container zindex2 shorter red-border' : 'select-container zindex2 shorter'}
                    >
                        <input className='input-box'
                            value={houseNumTempInput}
                            // value={region}
                            onChange={async (event) => {
                                setHouseNumError(false)
                                setHouseNum('')
                                setHouseNumTempInput(event.target.value)
                                setSuggestedHouseNums(await getSuggestedHouseNums(event.target.value, cityCode, street))
                            }}
                        ></input>

                        {
                            !!houseNum &&
                            <span className='clear-field-button'
                                onClick={() => {
                                    setHouseNum('')
                                    setHouseNumTempInput('')
                                    setSuggestedHouseNums([])
                                }}
                            >
                            </span>
                        }
                    </div>
                    {
                        !!houseNumError &&
                        <div className='red-font shorter'>יש לבחור מס' בית מתוך הרשימה</div>
                    }
                    {
                        suggestedHouseNums.length > 0 &&
                        <Select
                            onChange={(event) => {
                                setHouseNum(event.label)
                                setHouseNumTempInput(event.label)
                                setSuggestedHouseNums([])
                            }}
                            defaultMenuIsOpen={true}
                            options={suggestedHouseNums}
                            closeMenuOnSelect={true}
                            className='input-selector shorter'
                        >
                        </Select>
                    }

                    <div className='vertical-container'>

                        <div id='floors-wrapper1'>

                            <div className='input-title'>
                                קומה*
                            </div>
                            <div
                                className={floorError ? 'select-container zindex2 short red-border' : 'select-container zindex2 short'}
                            >
                                <input className='input-box'
                                    placeholder='הכנסת מספר קומה'
                                    value={floor}
                                    onChange={(event) => {
                                        if (event.target.value > -1) {
                                            setFloorError(false)
                                            setFloor(event.target.value)
                                            setFloorError(false)
                                        } else setFloorError(true)
                                    }}
                                ></input>
                            </div>
                        </div>

                        <div id='floors-wrapper2'>
                            <div className='input-title'>
                                סה"כ קומות בבניין*
                            </div>
                            <div
                                className={floorError ? 'select-container zindex2 short red-border' : 'select-container zindex2 short'}
                            >
                                <input className='input-box'
                                    placeholder='הכנסת מספר קומה'
                                    value={totalFloors}
                                    onChange={(event) => {
                                        setTotalFloors(event.target.value)
                                        if (event.target.value > floor)
                                            setTotalFloorsError(false)
                                        else setTotalFloorsError(true)
                                    }}
                                ></input>
                            </div>
                        </div>

                        <div id='floors-wrapper3'>
                            <input type="checkbox" id="on-pillars-checkbox"
                                onChange={() => {
                                    setIsOnPillars(!isOnPillars)
                                    validateFields()
                                }}
                            />
                            <div>
                                <label id='on-pillars-label' htmlFor="on-pillars-checkbox">על עמודים</label>

                            </div>
                        </div>

                    </div>

                    <br />

                    <div className='input-title'>
                        שכונה*
                    </div>
                    <div className="select-container">
                        <input className='input-box'
                            value={region}
                            disabled={true}
                        // placeholder='הכנסת שם הרחוב'
                        // onChange={updateCityInput}
                        ></input>
                    </div>

                    <div className='gov-tip'>
                        המידע הזה מגיע מגוף ממשלתי ולא ניתן לשינוי
                    </div>

                    <div className='input-title'>
                        אזור מכירה
                    </div>
                    <div className="select-container">
                        <select className='dropdown-box'
                            defaultValue={'DEFAULT'}
                            disabled={true}
                        >
                            <option value="DEFAULT" hidden>בחירת אזור מכירה</option>

                        </select>
                    </div>

                    <div className='gov-tip'>
                        המידע הזה מגיע מגוף ממשלתי ולא ניתן לשינוי
                    </div>

                    <div id='updates-agreement-container'>
                        <input type="checkbox" id="updates-agreement-checkbox" value=""
                            onChange={() => {
                                setIsMailUpdatesAccepted(!isMailUpdatesAccepted)
                            }} />
                        <div>
                            <label id='updates-agreement' htmlFor="updates-agreement-checkbox">אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן </label>
                        </div>
                    </div>

                    <StepNavigationButtons validateFields={validateFields} goToStep={props.goToStep} stepID={props.stepID} activeStep={props.activeStep}></StepNavigationButtons>
                </div>
            }
        </div>
    );
};

export default PublishStep2;