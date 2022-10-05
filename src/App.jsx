import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Form from "./components/pages/Form";
import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import FormBuilder from "./components/pages/FormBuilder";
import Responses from "./components/pages/Responses";
import GlobalStore from "./store/globalStore";
import { Provider } from "mobx-react";
import AuthenticatedComponents from "./components/subComponents/AuthenticatedComponents";

const globalStore = new GlobalStore();

function App() {
  const { user, setUser, saveUserLocally } = globalStore;

  useEffect(() => {
    if (!user) {
      const savedData = JSON.parse(localStorage.getItem("user"));
      if (savedData?.token && !user) {
        saveUserLocally(savedData);
      }
    }
  }, [user, saveUserLocally]);

  return (
    <Provider globalStore={globalStore}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <AuthenticatedComponents>
                  <Dashboard />
                </AuthenticatedComponents>
              }
            />
            <Route
              path="/signIn"
              element={
                <AuthenticatedComponents>
                  <Dashboard />
                </AuthenticatedComponents>
              }
            />
            <Route
              path="/signUp"
              element={
                <AuthenticatedComponents
                  redirectComponent={
                    <SignUp/>
                  }
                >
                  <Dashboard />
                </AuthenticatedComponents>
              }
            />
            <Route path="/form/:formId" element={<Form />} />
            <Route
              path="/dashboard"
              element={
                <AuthenticatedComponents>
                  <Dashboard />
                </AuthenticatedComponents>
              }
            />
            <Route
              path="/formBuilder"
              element={
                <AuthenticatedComponents>
                  <FormBuilder/>
                </AuthenticatedComponents>
              }
            />
            <Route
              path="/responses/:formId"
              element={
                <AuthenticatedComponents>
                  <Responses/>
                </AuthenticatedComponents>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
