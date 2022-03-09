import React, { useContext, useEffect, useState } from "react";
import { AdSearchContext } from "../../context/AdSearchContext";

const PropChild = (props) => {
    const { searchContext, updateSearchContextPropTypes } = useContext(AdSearchContext)

    const isPropParentChecked = props.isPropParentChecked
    const [isChecked, setChecked] = useState(isPropParentChecked || searchContext.propTypes.indexOf(props.elm) != 1 || false)


    useEffect(() => {
        if (isPropParentChecked) {
            setChecked(true)
        }
        else setChecked(false)
    }, [isPropParentChecked]);

    useEffect(() => {
        updateSearchContextPropTypes(props.elm, isChecked)

    }, [isChecked]);

    const handleCheck = () => {
        setChecked(!isChecked)
    }



    return (
        <div className="enlarged-input-wrapper props-child" >
            <label className="container">
                <input
                    onChange={() => { handleCheck(); }}
                    checked={isChecked}
                    id={props.elm}
                    type="checkbox" />
                <span className="checkmark"></span>
            </label>

            <label className='clickable' id={props.elm + '-label'} htmlFor={props.elm}>{props.elm}</label>
        </div>
    );
};

export default PropChild;