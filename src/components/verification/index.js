import React from 'react'
import './index.scss'
import Logo from './../../assets/falconite-logo.jpg';

const VerificationPage =()=> {

    return (
        <div className="register">
            <div className="register-sub1">
                <div className="register-sub1-div">
                    <div className="header">
                        <div className="logo"><img src={Logo} alt="Logo" /></div>
                    </div>
                    <div>
                        <h2>Kindly enter Email verification code</h2>
                        <p>To Sign up, kindly enter the verification code sent to your email address</p>
                    </div>
                    <div className="register-input">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div className="register-but"><button>Proceed</button></div>
                </div>
            </div>
            <div className="register-sub2"></div>
        </div>
    );
}

export default VerificationPage;