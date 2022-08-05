import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/signIn");
    } else {
      setUser(user);
      navigate("/dashboard");
    }
  }, []);
  return <div>Home</div>;
};

export default Home;
