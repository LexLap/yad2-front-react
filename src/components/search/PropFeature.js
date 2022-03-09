import React, { useContext, useEffect, useState } from "react";
import { AdSearchContext } from "../../context/AdSearchContext";

const PropFeature = (props) => {
    const { searchContext, updateSearchContextPropFeatures } = useContext(AdSearchContext)

    const [isChecked, setChecked] = useState(searchContext.propFeatures.indexOf(props.elm) != -1 || false)

    useEffect(() => {
        updateSearchContextPropFeatures(props.elm, isChecked)
    }, [isChecked, props.elm]);

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

export default PropFeature;