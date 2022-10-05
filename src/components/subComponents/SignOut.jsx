import { inject, observer } from "mobx-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ globalStore }) => {
  const { setUser } = globalStore;
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
export default inject("globalStore")(observer(SignOut));
