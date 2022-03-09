import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import LoginModal from "../login/LoginModal";
import Logo from "./Logo";
import PublishForm from "../elements/PublishForm";

const PublishPage = () => {
    const { userData } = useContext(LoginContext)
    const [loginMode, setloginMode] = useState(false)

    useEffect(() => {
        if (!userData.token) {
            setloginMode(true)
        }
    }, [userData.token]);

    const closeLoginModal = () => {
        setloginMode(null)
    }

    return (
        <div id='publish-page'>
            <div className='header'>
                <div id='left-nav-wrapper'>

                    <div className='nav-button-wrapper'>
                        <div className='nav-button-text'>צור קשר</div>
                    </div>

                    <div className='nav-button-wrapper'>
                        <div className='nav-button-text'>{userData.user ? 'התנתקות' : 'התחברות'}</div>
                        <div id='login-icon'></div>
                    </div>

                </div>

                <div id='right-nav-wrapper'>
                    <Logo />
                </div>

            </div>

            {
                !!userData.user &&
                <PublishForm />
            }


            {
                !!loginMode &&
                <LoginModal closeLoginModal={closeLoginModal} />
            }

        </div>
    );
};

export default PublishPage;