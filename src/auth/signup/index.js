import {React, useState} from 'react';
import "./signup.css";
import {ReactComponent as GoogleIcon} from '../login/google.svg';
import { useDispatch } from 'react-redux';
import { setLogin , setSignup} from '../../redux/action';
import OutsideClickHandler from 'react-outside-click-handler';
import { validateEmail, validatePassword } from '../../util';


export const Signup = () => {


    const dispatch = useDispatch();
    const[email,setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [isChecked, setisChecked] = useState(false);
    const [ showerrors, setShowerrors] = useState(false);

    let isEmailvalid= validateEmail(email);
    let isPasswordvalid = validatePassword(password);
    let comparePassword = password === confirmPassword;

                            
    const validateData=()=>{
    setisChecked(!isChecked);
    setShowerrors(true);
    console.log(isEmailvalid);
    console.log(isPasswordvalid);
    console.log(comparePassword);
    }

    let button_class = (isEmailvalid && isPasswordvalid && comparePassword &&isChecked) ? "signup-button-enabled" : "signup-button-disabled";
    let isbuttonDisabled = (isEmailvalid && isPasswordvalid && comparePassword &&isChecked) ? false : true;

    return (
        <>
        <div className="background-wrapper-class">
        </div>
        <div className="original-wrapper">
        <div className="signup-container">
        <OutsideClickHandler onOutsideClick={() => dispatch(setSignup(false))}>
            <div className="signup-topfold">
                <h2>Sign up</h2>
                <i class="fi fi-rr-cross" onClick={()=>dispatch(setSignup(false))}></i>
            </div>
            <p></p>
            <section className="signup-input">
                <input type="text" placeholder="Email" autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
                { showerrors && !isEmailvalid && <div className="error-message">Please enter a valid email</div> }
                
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                { showerrors && !isPasswordvalid && <div className="error-message">Please enter a valid password</div>}

                <input type="password" placeholder="Confirm Password" onChange={(e)=>setconfirmPassword(e.target.value)}/>
                { showerrors && !comparePassword && <div className="error-message">Passwords doesnt match</div> }

                <section>
                <input type="checkbox" onClick={validateData} defaultChecked={isChecked}/>
                <span>&nbsp;I agree to <label href="#">Terms of Service</label> , <label> Privacy Policy</label>&nbsp;and&nbsp;<label>Content <br/>Policies.</label></span>
                </section>
            </section>
            <button className={button_class} disabled={isbuttonDisabled} onClick={()=>console.log("cliked")}>Create account</button>
            <span></span>
            <div className="login-seperator">
                <span>or</span>
            </div>
            <br/>
            <button className="common-button">
            <GoogleIcon/>
            <span>Continue with Google</span>
            </button>
            <div className="login-seperator"></div>
            <p>Already have an account ?<span onClick={()=>{dispatch(setSignup(false));dispatch(setLogin(true))}}>Log in</span></p>
            </OutsideClickHandler>
        </div>
        </div>
        </>
    )
}


export default Signup;
