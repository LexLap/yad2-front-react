import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { deleteUserFromCookie } from "../../cookies/cookies";
import { logOut } from "../../server/auth"
import Logo from "./Logo";

const Header = () => {
    const { userData, dispatchUserData } = useContext(LoginContext);
    const history = useHistory();

    // const onClickLogout = () => {
    //     logOut(userData.token)
    //     dispatchUserData({ token: '', user: null });
    //     deleteUserFromCookie();
    //     history.push("/");

    // };

    const postNewAd = () => {
        history.push('/publish');
    }


    return (
        <div className='header'>

            <div id='left-nav-wrapper'>

                <div className='nav-button-wrapper' id='new-post-wrapper'>
                    <div
                        onClick={postNewAd}
                        id='new-post'>פרסום מודעה חדשה +</div>
                </div>

                <div className='nav-button-wrapper'>
                    <div className='nav-button-text'>התחברות</div>
                    <div id='login-icon'></div>
                </div>

                <div className='nav-button-wrapper'>
                    <div className='nav-button-text'>מודעות שאהבתי</div>
                    <div id='favorites-icon'></div>
                </div>

                <div className='nav-button-wrapper'>
                    <div className='nav-button-text'>התראות</div>
                    <div id='alerts-icon'></div>
                </div>

            </div>

            <div id='right-nav-wrapper'>
                <div
                    id='main-menu'>
                </div>

                <Logo />
            </div>

        </div>
    );
};

export default Header;
