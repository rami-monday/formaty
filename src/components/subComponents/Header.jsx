import React from 'react'
import { useNavigate } from "react-router-dom";
import "../style/Header.css"
import PrimaryBtn from "../subComponents/PrimaryBtn";

export const Header = ({ ahmad }) => {
    const navigator = useNavigate();
    const entranceToSignUp = function () {
        navigator("/signUp");
      };

    const handleNavigation = function(){
      ahmad()
    }
      
  return (
    <div className="header">
        <div className="headerLogo">
          <label htmlFor="">Formaty</label>
        </div>
        <div className="headerNavigation">
          <div className="headerNavigationItems">
              <a href="">Home</a>
               <a href="">About</a>
               <a href="">Contact</a>
               <a href="">Forms</a>
          </div><div></div>
          <PrimaryBtn btnText={"SignUp"} btnHandle={entranceToSignUp}>SignUp</PrimaryBtn>
        </div>
      </div>
  )
}

export default Header
