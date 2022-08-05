import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpApiManager } from "../../services/user";

const SignUp = ({ saveUserLocally }) => {
  const [user, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const navigator = useNavigate();
  const handleInput = function (property, value) {
    const newUser = { ...user };
    newUser[property] = value;
    setNewUser(newUser);
  };
  const handleClick = async function () {
    try {
      const dbRes = await SignUpApiManager(user);
      alert("You have successfully signed up");
      setNewUser({ email: "", username: "", password: "" });
      saveUserLocally(dbRes);
      navigator("/dashboard");
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  return (
    <div>
      <h1>Please Sign Up</h1>
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
      <input
        type="text"
        value={user.username}
        placeholder="Username"
        onChange={(e) => handleInput("username", e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <br />
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
};

export default SignUp;
