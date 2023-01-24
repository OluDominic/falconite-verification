import React, { useState} from 'react'
import './index.scss'
import Logo from './../../assets/falconite.png';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import falccurr from './../../assets/falconite-currency.png';
const RegistrationPage =()=> {

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [phonNo, setPhoneNo] = useState("")
    const [pass, setPass] = useState({
        password: "",
        showPassword: true,
      });

    const navigate = useNavigate();

    
    const home=()=> {
        navigate('/verificationpage')
    }

    const handleClickShowPassword = () => {
        setPass({ ...pass, showPassword: !pass.showPassword });
      };

      const handlePasswordChange = (prop) => (event) => {
        setPass({ ...pass, [prop]: event.target.value });
      };

    const submitHandler =(event)=> {

        event.preventDefault();

        axios.post('https://falconlite.com/v1/api/send-email',{
            name: firstName,
            email: email,
            phone: phonNo,
            password: pass.password
        })
        .then((response)=> {
            console.log(response.data)
            home()
        })
        .catch((error)=> {
            console.log(error)
        })
    }



    const reset =()=> {
        setFirstName("")
        setEmail("")
        setPhoneNo("")
        setPass("")
    }

    return (
        <div className="register">
            <div className="register-sub1">
                <div className="register-sub1-div">
                    <div className="header">
                        <div className="logo"><img src={Logo} alt="Logo" /></div>
                    </div>
                    <div className="create-an-acc">
                        <h2>Create an Account</h2>
                        <p>Register on our website with your correct email address and information</p>
                    </div>
                    <div className="form-details">
                        <label>First name</label>
                        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label>Email Address</label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                        <label>Phone Number</label>
                        <input type="text" value={phonNo} onChange={e => setPhoneNo(e.target.value)}/>
                        <label>Password</label>
                        <div className="password">
                        <input
                         type={pass.showPassword ? "password" : "input"}
                          value={pass.password}
                           onChange={handlePasswordChange("password")}
                           />
                        <span onClick={handleClickShowPassword}>
                                {pass.showPassword ? 
                                <FontAwesomeIcon icon={faEye} className="eye"/> : 
                                <FontAwesomeIcon icon={faEyeSlash} className="eye"/>
    }
                            </span>
                        </div>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>Remember me</p>
                    </div>
                    <div className="signup">
                        <button onClick={submitHandler}>Sign up</button>
                        <div className="signup-acc">Already have an account? <span><u>Sign in</u></span></div>
                    </div>
                </div>
            </div>
            <div className="register-sub2">
                <div className="curr">
                    <img src={falccurr} alt="currency"/>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage