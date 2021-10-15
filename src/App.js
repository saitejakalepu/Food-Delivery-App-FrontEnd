import {React, useEffect} from "react";
import './App.css';
import Header from './components/header'
import Collections from './components/collection'
import Login from "./auth/login";
import {useSelector} from 'react-redux';
import Signup from "./auth/signup";

function App() {

   const login = useSelector(state => state.showLogin);
   const signup = useSelector(state => state.showSignup);


   console.log(login , signup)


   //Disabling scroll when login or signup modals are displayed
   useEffect(() => {
     if(login || signup) document.body.style.overflow = "hidden";
     else document.body.style.overflow = "scroll";
  }, [login,signup]);


  return (
    <div className="App">
      {login &&  <Login/>}
      {signup && <Signup/>}
     <Header/>
     <Collections/>
    </div>
  );
}

export default App;
