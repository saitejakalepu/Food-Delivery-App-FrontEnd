import {React, useState} from "react";
import './App.css';
import Header from './components/header'
import Collections from './components/collection'
import Login from "./auth/login";
import {useSelector} from 'react-redux';
import Signup from "./auth/signup";

function App() {

   const login = useSelector(state => state.showLogin);
   const signup = useSelector(state => state.showSignup)

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
