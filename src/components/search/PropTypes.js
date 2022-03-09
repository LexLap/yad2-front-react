import React, { useEffect, useState } from "react";
import { useContext } from "react/cjs/react.development";
import { getPropTypes, propertyTypes } from "../../actions/FormActions";
import { AdSearchContext } from "../../context/AdSearchContext";
import PropChild from "./PropChild";

const PropTypes = (props) => {

    const [propTypesExt1, setPropTypesExt1] = useState(false)
    const [propTypesExt2, setPropTypesExt2] = useState(false)
    const [propTypesExt3, setPropTypesExt3] = useState(false)

    const [allPropTypesChecked, setAllPropTypesChecked] = useState(false)
    const [propTypes1Checked, setPropTypes1Checked] = useState(false)
    const [propTypes2Checked, setPropTypes2Checked] = useState(false)
    const [propTypes3Checked, setPropTypes3Checked] = useState(false)


    const handleCheckAllTypes = () => {

        if (propTypes1Checked && propTypes2Checked && propTypes3Checked) {
            setPropTypes1Checked(false)
            setPropTypes2Checked(false)
            setPropTypes3Checked(false)
            setAllPropTypesChecked(false)
        } else {
            setPropTypes1Checked(true)
            setPropTypesExt1(true)
            setPropTypes2Checked(true)
            setPropTypesExt2(true)
            setPropTypes3Checked(true)
            setPropTypesExt3(true)
            setAllPropTypesChecked(true)
        }
    }

    const handleCheckTypes1 = () => {
        setPropTypes1Checked(!propTypes1Checked)
        if (!propTypes1Checked) setPropTypesExt1(true)

    }
    const handleCheckTypes2 = () => {
        setPropTypes2Checked(!propTypes2Checked)
        if (!propTypes2Checked) setPropTypesExt2(true)
    }
    const handleCheckTypes3 = () => {
        setPropTypes3Checked(!propTypes3Checked)
        if (!propTypes3Checked) setPropTypesExt3(true)

    }


    return (
        <div className='dropdown'>
            {!!props.propTypesExtended &&
                <div
                    className='dropdown-content'
                >

                    <div
                        className='enlarged-input-wrapper grey-background props-parent'
                    >
                        <label className="container">
                            <input
                                onChange={handleCheckAllTypes}
                                checked={allPropTypesChecked}
                                id="all-types"
                                type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className='clickable' id='all-types-label' htmlFor="all-types">כל סוגי הנכסים</label>
                    </div>


                    <div className='enlarged-input-wrapper grey-background props-parent'>

                        <label className="container">
                            <input
                                onChange={handleCheckTypes1}
                                checked={propTypes1Checked}
                                id="types1"
                                type="checkbox" />
                            <span className="checkmark"></span>
                        </label>

                        <label className='clickable' id='types1-label' htmlFor="types1">דירות</label>

                        <div className="chosen-amount"></div>

                        <label className={propTypesExt1 ? 'extension-icon-open' : 'extension-icon-closed'}
                            onClick={() => { setPropTypesExt1(!propTypesExt1) }}
                        />


                    </div>


                    {!!propTypesExt1 &&
                        getPropTypes(0, 9).map((elm, i) => {
                            return <PropChild key={i} elm={elm} propId={i} isPropParentChecked={propTypes1Checked} />
                        })
                    }


                    <div
                        className='enlarged-input-wrapper grey-background props-parent'
                    >
                        <label className="container">
                            <input
                                onChange={() => { handleCheckTypes2() }}
                                checked={propTypes2Checked}
                                id="types2"
                                type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className='clickable' id='types2-label' htmlFor="types2">בתים</label>

                        <div className="chosen-amount"></div>

                        <label className={propTypesExt2 ? 'extension-icon-open' : 'extension-icon-closed'}
                            onClick={() => { setPropTypesExt2(!propTypesExt2) }}
                        />

                    </div>

                    {!!propTypesExt2 &&
                        getPropTypes(9, 13).map((elm, i) => {
                            return <PropChild key={i} elm={elm} propId={i + 9} isPropParentChecked={propTypes2Checked} />
                        })
                    }

                    <div
                        className='enlarged-input-wrapper grey-background props-parent'
                    >
                        <label className="container">
                            <input
                                onChange={handleCheckTypes3}
                                checked={propTypes3Checked}
                                id="types3"
                                type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className='clickable' id='types3-label' htmlFor="types3">סוגים נוספים</label>

                        <div className="chosen-amount"></div>

                        <label className={propTypesExt3 ? 'extension-icon-open' : 'extension-icon-closed'}
                            onClick={() => { setPropTypesExt3(!propTypesExt3) }}
                        />
                    </div>

                    {!!propTypesExt3 &&
                        getPropTypes(13, 20).map((elm, i) => {
                            return <PropChild key={i} elm={elm} propId={i + 13} isPropParentChecked={propTypes3Checked} />
                        })
                    }

                    <div className="props-spacer"></div>

                    <div id="choice-flex-row">
                        <div className="pointer"
                            onClick={() => props.togglePropTypesExtended(!props.propTypesExtended)}>בחירה</div>
                    </div>


                </div>
            }
        </div >

    );

};

export default PropTypes;