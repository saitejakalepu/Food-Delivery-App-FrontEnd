import {React, useState} from 'react';
import "./login.css";
import {ReactComponent as EmailIcon} from './email.svg';
import {ReactComponent as GoogleIcon} from './google.svg';
import {ReactComponent as MobileIcon} from './mobile.svg';
import { useDispatch } from 'react-redux';
import { setLogin, setSignup } from '../../redux/action';
import OutsideClickHandler from 'react-outside-click-handler';

export const Login = () => {

    const [ emaillogin , setEmaillogin] = useState(false);
    const [ phoneNumber, setphoneNumber] = useState("");
    const [ email , setEmail] = useState("");
    const [ password , setPassword] = useState("");


    let mobile_button_class = phoneNumber.length===10 ? "login-button-enabled" : "login-button-disabled";
    let mobile_isbuttonDisabled = phoneNumber.length===10 ? false : true;


    //should change to correct data bu checing firebase auth
    let email_button_class = (email && password) ? "login-button-enabled" : "login-button-disabled";
    let email_isbuttonDisabled = (email && password) ? false : true;
    
    const dispatch = useDispatch();
    return (
        <>
        <div className="background-wrapper-class">
        </div>
        <div className="original-wrapper">
        <div className="login-container">
        <OutsideClickHandler onOutsideClick={() => dispatch(setLogin(false))}>
            <div className="login-topfold">
                <h2>Log in</h2>
                <i class="fi fi-rr-cross" onClick={()=>dispatch(setLogin(false))}></i>
            </div>
            <p></p>
            {emaillogin ?
            <section className="email-login">
            <input type="text" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </section>:<section className="login-input">
            <div className="login-select-country">
                <img alt="flag" src="https://b.zmtcdn.com/images/flags_z10/in.png"></img>
                <span>+91</span>
                <i class="fi fi-rr-angle-small-down"></i>
                <div className="input-seperator"></div>
            </div>
            <input type="number" pattern="[0-9]{1}" inputMode="numeric" value={phoneNumber} placeholder="Phone number" onChange={(e)=>setphoneNumber(e.target.value)}/>
            </section>
            }
            <p></p>
            {emaillogin ? <button className={email_button_class} isDisabled={email_isbuttonDisabled}>Log in</button> : <button className={mobile_button_class} disabled={mobile_isbuttonDisabled}>Send OTP</button>}
            <span></span>
            <div className="login-seperator">
            <span>or</span>
            </div>
            <br/>
            {emaillogin ?
            <button className="common-button" onClick={()=>{setEmaillogin(false);setphoneNumber("")}}> 
            <MobileIcon/>
            <span>Continue with Phone</span>
            </button>:
            <button className="common-button" onClick={()=>{setEmaillogin(true);setEmail("");setPassword("")}}> 
            <EmailIcon/>
            <span>Continue with Email</span>
            </button>
            }
            <button className="common-button">
            <GoogleIcon/>
            <span>Continue with Google</span>
            </button>
            <div className="login-seperator"></div>
            <p>New User ?<span onClick={()=>{dispatch(setLogin(false));dispatch(setSignup(true))}}>Create account</span></p>
            </OutsideClickHandler>
        </div>
        </div>
        </>
    )
}


export default Login;
