import React from "react";
import { SignInApiManager } from "../services/user";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  
  const handleClick = async function () {
    const dbRes = await SignInApiManager();
    let isFound = false;
    for (let i = 0; i < dbRes.length; i++) {
      if (user.email === dbRes[i].email) {
        if (user.password === dbRes[i].password) {
          alert("yay you are a user");
          isFound = true;
        }
      }
    }
    if (!isFound) {
      alert("Either your email or password are wrong");
    }
    setUser({ email: "", password: "" });
  };
  const handleInput = function (property, value) {
    const userTryingToLogin = { ...user };
    userTryingToLogin[property] = value;
    setUser(userTryingToLogin);
  };
  return (
    <div>
      <h1>Please Log In</h1>
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
        type="text"
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
    </div>
  );
};

export default SignIn;
