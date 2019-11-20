import React from 'react';
import { NavLink } from "react-router-dom";
import './Login.css';
import wishListLogo from '../../assets/default.png';


export default function Login () {
  return(
    <div className="login">
      <img src={wishListLogo} alt="wishListLogo" className="wishListLogo"/>
      <NavLink to="/dashboard">
        <button className='login-btn'>Login with Google</button>
      </NavLink>
    </div>
  );
};
