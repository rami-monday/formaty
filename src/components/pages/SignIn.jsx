import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInApiManager } from "../../services/user";

const SignIn = ({ saveUserLocally }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigator = useNavigate();
  
  const handleClick = async function () {
    const dbRes = await SignInApiManager(user);
    if (dbRes) {
      alert("you are a user and your name is " + dbRes.email);
    }
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
    <div>
      <h1>Please Sign In</h1>
      <br />
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
      <br />
      <button onClick={handleClick}>Log In</button>
      <div>
      <p>If you don't have an acount register </p>
      <button onClick={test}>here</button>
      </div>
    </div>
  );
};

export default SignIn;
