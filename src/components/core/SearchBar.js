import React, { useContext, useState, useEffect } from "react";
import { floorOptions, propertyFeatures, roomsAmmounts } from "../../actions/FormActions";
import { AdDisplayContext } from "../../context/AdDisplayContext";
import { AdSearchContext } from "../../context/AdSearchContext";
import { getAdsToDisplay } from "../../server/adManagement";
import PropFeature from "../search/PropFeature";
import PropTypes from "../search/PropTypes";
import Rooms from "../search/Rooms";

const SearchBar = () => {
    const [propTypesExtended, setPropTypesExtended] = useState(false)
    const [roomsExtended, setRoomsExtended] = useState(false)
    const [advancedSearch, setAdvancedSearch] = useState(false)

    const { setDisplayContext } = useContext(AdDisplayContext)

    const { searchContext, updateSearchContextPriceRange, updateSearchContextFloorRange,
        updateSearchContextSizeRange, updateSearchContextEntryDate } = useContext(AdSearchContext)

    useEffect(() => {
        console.log(searchContext)
    }, [searchContext]);



    const [areaValue, setAreaValue] = useState('')

    const [entryDate, setEntryDate] = useState('')
    const [isImmidiateEntry, setIsImmidiateEntry] = useState(false)


    const togglePropTypesExtended = () => {
        if (!propTypesExtended) setRoomsExtended(false)
        setPropTypesExtended(!propTypesExtended)
    }
    const toggleRoomsExtended = () => {
        if (!roomsExtended) setPropTypesExtended(false)
        setRoomsExtended(!roomsExtended)
    }
    const toggleAdvancedSearch = () => {
        setAdvancedSearch(!advancedSearch)
        if (advancedSearch) {
            setPropTypesExtended(false)
            setRoomsExtended(false)
        }
    }


    const handleChangePrice = (key, value) => {
        console.log(key, value)
        const {
            low,
            high
        } = searchContext.priceRange

        if (key === 'low')
            updateSearchContextPriceRange(value, high)
        else updateSearchContextPriceRange(low, value)
    }

    const handleUpdateFloorRange = (key, value) => {
        console.log(key, value)
        const {
            low,
            high
        } = searchContext.sizeRange

        if (key === 'low')
            updateSearchContextFloorRange(value, high)
        else updateSearchContextFloorRange(low, value)
    }


    const handleUpdateSizeRange = (key, value) => {
        console.log(key, value)
        const {
            low,
            high
        } = searchContext.sizeRange

        if (key === 'low')
            updateSearchContextSizeRange(value, high)
        else updateSearchContextSizeRange(low, value)
    }


    const handleSearchButton = () => {

        getAdsToDisplay(searchContext).then((res) => {
            setDisplayContext(res.data)
        })

        setAdvancedSearch(false)
        setRoomsExtended(false)
        setPropTypesExtended(false)
    }


    return (
        <div id='search-bar-container'>

            <div id='search-form-row1'>
                <h3>איזה נכס למכירה תרצו לחפש?</h3>
            </div>

            <div id='search-form-row2'>

                <div id='search-col1'>

                    <div className='search-plain-text'>
                        חפשו אזור, עיר, שכונה או רחוב
                    </div>

                    <div className='search-input-container'>
                        <input id='city-input'
                            className='input-box'

                            placeholder='לדוגמה: עיר ימים, נתניה'

                            onChange={(event) => {
                                setAreaValue(event.target.value)
                            }}
                        ></input>
                    </div>

                </div>


                <div id='search-col2'>

                    <div className='search-plain-text'>
                        סוג נכס
                    </div>

                    <div className='search-input-container grey-font'
                        id='prop-types-input'
                        onClick={() => { togglePropTypesExtended() }}
                    >
                        בחרו סוגי נכסים
                        <div className={propTypesExtended ? 'extension-icon-open' : 'extension-icon-closed'} />

                    </div>

                    <PropTypes propTypesExtended={propTypesExtended} togglePropTypesExtended={togglePropTypesExtended} />
                </div>

                <div id='search-col3'>

                    <div className='search-plain-text'>
                        חדרים
                    </div>

                    <div className='search-input-container grey-font'
                        id='prop-types-input'
                        onClick={() => { toggleRoomsExtended() }}
                    >
                        חדרים
                        <div className={roomsExtended ? 'extension-icon-open' : 'extension-icon-closed'} />

                    </div>
                    <Rooms roomsExtended={roomsExtended} />
                </div>

                <div id='search-col4'>
                    <div className='search-plain-text'>
                        מחיר
                    </div>

                    <div className="flex-row">
                        <div className='search-input-container grey-font narrow-container'>
                            <input id='city-input'
                                className='input-box'

                                placeholder='מ-'

                                onChange={(event) => {
                                    handleChangePrice('low', event.target.value)
                                }}
                            ></input>
                        </div>
                        <div className='search-input-container grey-font narrow-container'>
                            <input id='city-input'
                                className='input-box'

                                placeholder='עד-'

                                onChange={(event) => {
                                    handleChangePrice('high', event.target.value)

                                }}
                            ></input>
                        </div>
                    </div>

                </div>

                <div id='search-col5'
                    className="flex-col-end">
                    <div className="search-input-container advanced-search-button"
                        onClick={() => toggleAdvancedSearch()}>
                        חיפוש מתקדם
                    </div>
                </div>

                <div id='search-col6'
                    className="flex-col-end">
                    <div className="search-input-container search-button"
                        onClick={() => { handleSearchButton() }}
                    >
                        חיפוש
                    </div>
                </div>

            </div>


            {!!advancedSearch &&

                <div id="advanced-search">

                    <div className="advanced-search-rows-spacer" />

                    <div id='search-form-row3'>

                        <h4>מאפייני דירה</h4>

                        <div className='property-features'>
                            {
                                propertyFeatures.map((elm, i) => {
                                    return <PropFeature key={i} elm={elm} />
                                })
                            }
                        </div>

                    </div>

                    <div className="advanced-search-rows-spacer limit-width" />

                    <div id='search-form-row4' className="flex-row">

                        <div>

                            <div className='search-plain-text'>
                                קומה
                            </div>

                            <div className="flex-row">
                                <div
                                // className="select-container "
                                >
                                    <select
                                        className='search-input-container dropdown-box grey-font floor-options-container'
                                        defaultValue={!!searchContext.floorRange.low ? searchContext.floorRange.low : 'DEFAULT'}
                                        onChange={(event) => {
                                            handleUpdateFloorRange('low', event.target.value)
                                        }}
                                    >

                                        <option value={'DEFAULT'} hidden>מ-</option>

                                        {floorOptions.map((elm, i) => {
                                            return <option key={i} value={elm}>{elm}</option>
                                        })}

                                    </select>
                                </div>

                                <div
                                // className="select-container "
                                >
                                    <select
                                        className='search-input-container dropdown-box grey-font floor-options-container'
                                        defaultValue={!!searchContext.floorRange.high ? searchContext.floorRange.high : 'DEFAULT'}
                                        onChange={(event) => {
                                            handleUpdateFloorRange('high', event.target.value)
                                        }}
                                    >
                                        <option value={'DEFAULT'} hidden>מ-</option>
                                        {floorOptions.map((elm, i) => {
                                            return <option key={i} value={elm}>{elm}</option>
                                        })}

                                    </select>
                                </div>
                            </div>

                        </div>

                        <div>

                            <div className='search-plain-text'>
                                גודל דירה (במ"ר)
                            </div>

                            <div className="flex-row">

                                <div className='search-input-container grey-font floor-options-container'>
                                    <input
                                        className='input-box'

                                        placeholder='מ-'

                                        defaultValue={!!searchContext.sizeRange.low ? searchContext.sizeRange.low : null}
                                        onChange={(event) => {
                                            handleUpdateSizeRange('low', event.target.value)
                                        }}

                                    ></input>
                                </div>

                                <div className='search-input-container grey-font floor-options-container'>
                                    <input
                                        className='input-box'

                                        placeholder='עד-'

                                        defaultValue={!!searchContext.sizeRange.high ? searchContext.sizeRange.high : null}
                                        onChange={(event) => {
                                            handleUpdateSizeRange('high', event.target.value)
                                        }}

                                    ></input>
                                </div>

                            </div>

                        </div>

                        <div>

                            <div className='search-plain-text'>
                                תאריך כניסה
                            </div>

                            <div className="flex-row">
                                {/* <div className="select-container">
                                    <input
                                        type='date'
                                        disabled={isImmidiateEntry ? true : false}
                                        value={entryDate.length > 0 ? entryDate : "2021-10-22"}
                                        className='input-box'
                                        onChange={(event) => {
                                            setEntryDate(event.target.value)
                                        }}
                                    ></input>
                                </div> */}
                                <div className='search-input-container grey-font' id='date-input'>

                                    <input
                                        className='input-box'

                                        placeholder='החל מ- הזינו תאריך'

                                        onChange={(event) => {
                                        }}
                                    />
                                    <input
                                        type='date'
                                        // disabled={isImmidiateEntry ? true : false}
                                        // value={entryDate.length > 0 ? entryDate : "2021-10-22"}
                                        className='input-box date-input'
                                        onChange={(event) => {
                                            setEntryDate(event.target.value)
                                        }}
                                    />
                                </div>
                            </div>

                        </div>

                        <div id='immediate-entry-container'>
                            <div className="enlarged-input-wrapper props-cell">
                                <label className="container">
                                    <input
                                        id='immediate-entry'
                                        type="checkbox"
                                        onChange={(event) => {
                                            setIsImmidiateEntry(!isImmidiateEntry)
                                            updateSearchContextEntryDate(!isImmidiateEntry ? "IMMEDIATE" : entryDate)
                                        }} />

                                    <span className="checkmark"></span>
                                </label>

                                <label className='clickable' id='immediate-entry-label' htmlFor='immediate-entry'>כניסה מיידית</label>
                            </div>
                        </div>

                    </div>


                    <div className="advanced-search-rows-spacer limit-width" />


                    <div id='search-form-row5' className="flex-row">

                        <div >

                            <div className='search-plain-text' >
                                חיפוש חופשי
                            </div>

                            <div className='search-input-container' id='free-text'>
                                <input
                                    className='input-box'

                                    onChange={(event) => {
                                    }}
                                ></input>
                            </div>

                        </div>

                        <div id='immediate-entry-container'>
                            <div className="enlarged-input-wrapper grey-font">
                                <label className="container">
                                    <input
                                        disabled={true}
                                        id='moshavim'
                                        type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className='clickable' id='moshavim-label' htmlFor='moshavim'>הצגת מושבים וקיבוצים בלבד</label>

                                <div className="question-icon">
                                    ?
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="advanced-search-rows-spacer limit-width" />

                    <div id='search-form-row6' className="flex-row">
                        <div />

                        <div className="search-input-container search-button"
                            onClick={() => { handleSearchButton() }}

                        >
                            חיפוש
                        </div>

                        <div className='clear-button'>
                            נקה
                        </div>
                    </div>


                </div>
            }


        </div >
    );

};

export default SearchBar;