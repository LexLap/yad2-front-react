import React from "react";
import LoginForm from "./LoginForm";

const LoginModal = ({ closeLoginModal }) => {

    return (
        <div id='login-modal-wrapper'>
            <div id='modal-wrapper__body'>

                <LoginForm closeLoginModal={closeLoginModal} />

                <div id='welcome'>
                    <div id='sub-logo' />
                    <div className='welcome-text'>
                        <h1>ברוכים הבאים לאתר יד2</h1>
                        <h4>טוב לראות אותך שוב!</h4>
                    </div>

                    <div id='couch-logo' />
                </div>

            </div>
        </div>
    );

};

export default LoginModal;


// import React from 'react';
// import {gameAccept, gameRefuse} from '../../server/socket'

// const RespondInvite = ({ initiator, closeResponseModal }) => {
//     // const { socket } = useContext(SocketContext)

//     return (
//         <div className="private-message">
//             <div className="private-message__body">
//                 <h4>You have been invited by: {initiator}</h4>
//                 {/* <textarea rows="5" placeholder="Send a message..."></textarea> */}
//                 <button onClick={() => { closeResponseModal();
//                     gameAccept(initiator);
//                 }}
//                     >Accept</button>
//                 <button onClick={() => { closeResponseModal();
//                 gameRefuse();
//             }}
//                     >Refuse</button>
//             </div>
//         </div>
//     );
// };

// export default RespondInvite;