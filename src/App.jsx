import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Form from "./components/pages/Form";
import "./App.css";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import FormBuilder from "./components/pages/FormBuilder";
import Responses from "./components/pages/Responses";
import { getAuthenticatedUser } from "./services/user";

function App() {
  const [user, setUser] = useState(null);

  const saveUserLocally = async (tokenData) => {
    const user = await getAuthenticatedUser(tokenData);
    setUser(user);
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("user"));
    if (savedData?.token && !user) {
      saveUserLocally(savedData);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Dashboard user={user} setUser={setUser} />
              ) : (
                <SignIn saveUserLocally={saveUserLocally} />
              )
            }
          />
          <Route
            path="/signIn"
            element={
              user ? (
                <Dashboard user={user} setUser={setUser} />
              ) : (
                <SignIn saveUserLocally={saveUserLocally} />
              )
            }
          />
          <Route
            path="/signUp"
            element={
              user ? (
                <Dashboard user={user} setUser={setUser} />
              ) : (
                <SignUp saveUserLocally={saveUserLocally} />
              )
            }
          />
          <Route path="/form/:formId" element={<Form />} />
          <Route
            path="/dashboard"
            element={
              user ? (
                <Dashboard user={user} setUser={setUser} />
              ) : (
                <SignIn saveUserLocally={saveUserLocally} />
              )
            }
          />
          <Route
            path="/formBuilder"
            element={
              user ? (
                <FormBuilder user={user} setUser={setUser} />
              ) : (
                <SignIn saveUserLocally={saveUserLocally} />
              )
            }
          />
          <Route
            path="/responses/:formId"
            element={
              user ? (
                <Responses user={user} setUser={setUser} />
              ) : (
                <SignIn saveUserLocally={saveUserLocally} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
