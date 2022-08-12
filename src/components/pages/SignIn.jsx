import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInApiManager } from "../../services/user";
import "../style/signIn.css"

const SignIn = ({ saveUserLocally }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigator = useNavigate();
  
  const handleClick = async function () {
    const dbRes = await SignInApiManager(user);
    saveUserLocally(dbRes);
    navigator("/dashboard");
    setUser({ email: "", password: "" });
  };
  const handleInput = function (property, value) {
    const userTryingToLogin = { ...user };
    userTryingToLogin[property] = value;
    setUser(userTryingToLogin);
  };
  const test = function () {
    navigator("/signUp")
  }
  return (
    <div className="mainContainer">
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
            <button className="signUpBtn" onClick={test}>SignUp</button>
        </div>
      </div>
      <div className="signIn">
        <div className="signInHeaderContainer">
             <h1>Sign In</h1>       
        </div>
        <div className="signInInputsContainer">
           <input
               type="text"
                value={user.email}
                 placeholder="Example@gmail.com"
                   onChange={(e) => handleInput("email", e.target.value)}
                    onKeyDown={(event) => {
                  if (event.key === "Enter") {
                     handleClick();
                   }
                 }}
                />
              <br />
             <input
                 type="password"
                  value={user.password}
                   placeholder="Password"
                    onChange={(e) => handleInput("password", e.target.value)}
                     onKeyDown={(event) => {
                      if (event.key === "Enter") {
                         handleClick();
                       }
                     }}
                 />
       </div>
      {/* <div className="keepMeSignedInContainer">
         <input type="checkbox" />
         <span>Remember Me.</span>
      </div> */}
      <div className="logInBtnContainer">
         <button onClick={handleClick}>Log In</button>
      </div>
      </div>
    </div>
  );
};

export default SignIn;