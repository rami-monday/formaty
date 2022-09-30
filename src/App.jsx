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

  const authenticatedRoute = (pageComponent, redirectPage) => {
    redirectPage = redirectPage || <SignIn saveUserLocally={saveUserLocally} />;
    return user ? pageComponent : redirectPage;
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
            element={authenticatedRoute(
              <Dashboard user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/signIn"
            element={authenticatedRoute(
              <Dashboard user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/signUp"
            element={authenticatedRoute(
              <Dashboard user={user} setUser={setUser} />,
              <SignUp saveUserLocally={saveUserLocally} />
            )}
          />
          <Route path="/form/:formId" element={<Form />} />
          <Route
            path="/dashboard"
            element={authenticatedRoute(
              <Dashboard user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/formBuilder"
            element={authenticatedRoute(
              <FormBuilder user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/responses/:formId"
            element={authenticatedRoute(
              <Responses user={user} setUser={setUser} />
            )}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
