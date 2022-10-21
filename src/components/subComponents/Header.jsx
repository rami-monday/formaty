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
          <div></div>
          <PrimaryBtn btnText={"SignUp"} btnHandle={entranceToSignUp}>SignUp</PrimaryBtn>
        </div>
      </div>
  )
}

export default Header
