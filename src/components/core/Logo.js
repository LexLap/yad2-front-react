import React from "react";
import { useHistory } from "react-router-dom";

const Logo = () => {
	const history = useHistory();

	const clickOnLogo = () => {
		history.push('/')
	}

    return (
        <div 
            onClick={clickOnLogo}
            id='logo'>
        </div>
    );

};

export default Logo;