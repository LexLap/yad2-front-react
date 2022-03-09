import React, { useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { saveUserOnCookie } from "../../cookies/cookies";
import { loginToSite } from "../../server/auth";

const LoginForm = ({ closeLoginModal }) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isRevealedPass, setIsRevealedPass] = useState(false);
	const [isEmailInputValid, setIsEmailInputValid] = useState(true);
	const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);
	const { dispatchUserData } = useContext(LoginContext);


	const onBlurEmailInput = (event) => {
		const theEmail = event.target.value.trim();
		if (theEmail === "") {
			setEmail("");
			setIsEmailInputValid(false);
		} else {
			setEmail(theEmail);
			setIsEmailInputValid(true);
		}
	};

	const onBlurPasswordInput = (event) => {
		const thePassword = event.target.value.trim();
		setPassword(thePassword === "" ? "" : thePassword);
		setIsPasswordInputValid(thePassword !== "");
	};

	const onSubmitform = () => {
		loginToSite(email, password).then(
			(userData) => {
				dispatchUserData({
					token: userData.token,
					user: userData.user
				});
				saveUserOnCookie(userData);
			},
			(err) => {
			}
		);
	};

	return (
		<div id='login-form'>
			<h3>התחברות</h3>
			<h5>הזן את הפרטים כדי להתחבר</h5>

			<form>

				<div id='mail'>כתובת מייל</div>

				<div className={isEmailInputValid ? 'input-wrapper normal-outline' : 'input-wrapper invalid-outline'}>
					<input id='mail-input'
						placeholder="your@mail.com"
						onBlur={onBlurEmailInput}
					/>
				</div>

				{!isEmailInputValid && <div className="invalid-message">שדה חובה</div>}
				<div id='pass'>סיסמה</div>

				<div className={isPasswordInputValid ? 'input-wrapper normal-outline' : 'input-wrapper invalid-outline'}>

					<input id='pass-input'
						type={isRevealedPass ? "text" : "password"}
						placeholder="הקלד סיסמה"
						onBlur={onBlurPasswordInput}
					// onChange={e => setPassword(e.target.value)}
					/>

					<div id='pass-icon'
						className={isRevealedPass ? 'revealed' : 'hidden'}
						onClick={() => {
							setIsRevealedPass(!isRevealedPass)
						}}
					/>

				</div>

				{!isPasswordInputValid && <div className="invalid-message">שדה חובה</div>}
			</form>

			<div id='forgot-pass-wrapper'>
				<button
					className='orange-button'
					id='forgot-pass-button'
				>שכחתי סיסמה</button>
			</div>
			<div id='login-action-wrapper'>
				<button type="submit"
					id='login-button'
					// disabled={!isPasswordInputValid||!isEmailInputValid||!isAnyInputEntered}
					disabled={!isPasswordInputValid || !isEmailInputValid}

					onClick={() => {
						onSubmitform()
						closeLoginModal();
					}}
				>התחבר
				</button>
				<div id='reg-wrapper'>
					<div>לא רשום?</div>

					<button
						className='orange-button'
						id='reg-button'
					>להרשמה
					</button>
				</div>
			</div>

		</div>
	);

};

export default LoginForm;