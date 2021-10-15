import {React,useState} from "react";
import "./header.css";
import icon from '../../assets/images/icon.png'
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
    <div className="header-container max-width" >
    <div className="header">
        <div className="header-logo">
        <label>Hello Foddie</label>
        <img src={icon} alt="logo"/>
        </div>
        <div className="header-options">
          <div className="menu-icon"  onClick={handleClick}>
            {click ? <i class="fi fi-sr-cross" style={{fontSize:"24px"}}></i> : <i class="fi fi-rr-menu-burger" style={{fontSize:"28px"}}></i>}
          </div>
          <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <label onClick={handleAddrestaurant} >Add restaurant</label>
          <label onClick={handleLogin}>Log in</label>
          <label onClick={handleSignup}>Sign up</label>
          </div>
        </div>
    </div>
    <Searchbar/>
    </div>
  );
};

export default Header;
