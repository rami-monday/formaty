import React from 'react'
import { useNavigate } from "react-router-dom";
import "../style/Header.css"
import PrimaryBtn from "../subComponents/PrimaryBtn";

export const Header = () => {
    const navigator = useNavigate();
    const entranceToSignUp = function () {
        navigator("/signUp");
      };

  return (
    <div className="header">
        <div className="headerLogo">
          <label htmlFor="">Formaty</label>
        </div>
        <div className="headerNavigation">
          <div className="headerNavigationItems">
              <a href="#wesf">Home</a>
               <a href="#wesf">About</a>
               <a href="#wesf">Contact</a>
               <a href="#wesf">Forms</a>
          </div><div></div>
          <PrimaryBtn btnText={"SignUp"} btnHandle={entranceToSignUp}>SignUp</PrimaryBtn>
        </div>
      </div>
  )
}

export default Header
