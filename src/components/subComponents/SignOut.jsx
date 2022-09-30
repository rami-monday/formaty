import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ setUser }) => {
  const navigate = useNavigate();

  const signOut = function () {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };
  return (
    <div>
      <button className="SecBtn" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
