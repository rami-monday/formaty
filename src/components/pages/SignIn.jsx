import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInApiManager } from "../../services/user";
import "../style/signIn.css"
import Header from "../subComponents/Header"
import SecBtn from "../subComponents/SecBtn";


const SignIn = ({ saveUserLocally }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigator = useNavigate();

  const handleClick = async function () {
    if (user.email && user.password) {
      const dbRes = await SignInApiManager(user);
      if (dbRes) {
        saveUserLocally(dbRes);
        navigator("/dashboard");
        setUser({ email: "", password: "" });
      }
    } else {
      alert("make sure the you have filled all the fields");
    }
  };
  const handleInput = function (property, value) {
    const userTryingToLogin = { ...user };
    userTryingToLogin[property] = value;
    setUser(userTryingToLogin);
  };
  return (
    <div className="mainContainer">
      <Header></Header>
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
        <SecBtn btnText={"SignIn"} btnHandle={handleClick}> </SecBtn>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
