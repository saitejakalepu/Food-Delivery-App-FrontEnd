import {React,useState} from "react";
import "./header.css";
import icon from '../../assets/images/icon.png'
import hamburger from '../../assets/images/hamburger.png'
import Searchbar from '../searchbar'
import { useDispatch } from "react-redux";
import { setLogin, setSignup } from "../../redux/action";



const Header = () => {

  const dispatch = useDispatch();
  const[click,setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function handleLogin(){
  closeMobileMenu();
  dispatch(setLogin(true));
  }

  function handleSignup(){
    closeMobileMenu();
    dispatch(setSignup(true));
  }

  function handleAddrestaurant(){

  }

  return (
    <div className="header-container">
    <div className="header">
        <div className="header-logo">
        <label>Hello Foddie</label>
        <img src={icon}/>
        </div>
        <div className="header-options">
          <div className="menu-icon"  onClick={handleClick}>
            {click ? <i class="fi fi-sr-cross" style={{fontSize:"24px"}}></i> : <i class="fi fi-rr-menu-burger" style={{fontSize:"28px"}}></i>}
          </div>
          <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <a onClick={handleAddrestaurant} >Add restaurant</a>
          <a onClick={handleLogin}>Log in</a>
          <a onClick={handleSignup}>Sign up</a>
          
          </div>
        </div>
    </div>
    <Searchbar/>
    </div>
  );
};

export default Header;
