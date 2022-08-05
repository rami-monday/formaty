import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Form from "./components/pages/Form";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import FormBuilder from "./components/pages/FormBuilder";
import Responses from "./components/pages/Responses";

function App() {
  const [user, setUser] = useState({});

  const saveUserLocally = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setUser={setUser} />} />
          <Route
            path="/signIn"
            element={<SignIn saveUserLocally={saveUserLocally} />}
          />
          <Route
            path="/signUp"
            element={<SignUp saveUserLocally={saveUserLocally} />}
          />
          <Route path="/form/:formId" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/formBuilder" element={<FormBuilder user={user} />} />
          <Route
            path="/responses/:formId"
            element={<Responses user={user} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;