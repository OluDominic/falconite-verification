import React, { useState } from 'react'
import Logo from './../../assets/falconite.png';
import OtpInput from 'react-otp-input';
import axios from 'axios'

const VerificationPage =()=> {

    const [code, setCode] = useState("");

    const codeFill =(event)=> {

        event.preventDefault()

        axios.post("https://falconlite.com/v1/api/verify-email", {
            code: code
        })
        .then((data)=> {
            console.log(data.data)
        })
        .catch((error)=> {
            console.error(error)
        })
    }

    return (
        <div className="register">
            <div className="register-sub1">
                <div className="register-sub1-div">
                    <div className="header">
                        <div className="logo"><img src={Logo} alt="Logo" /></div>
                    </div>
                    <div className="create-an-acc">
                        <h2>Kindly enter Email verification code</h2>
                        <p>To Sign up, kindly enter the verification code sent to your email address</p>
                    </div>
                    <div className="register-input">
                    <OtpInput
                        value={code}
                        onChange={setCode}
                        numInputs={5}
                        separator={<span></span>}
                    />
                    </div>
                    <div className="register-but"><button onClick={codeFill}>Proceed</button></div>
                </div>
            </div>
            <div className="register-sub2"></div>
        </div>
    );
}

export default VerificationPage;